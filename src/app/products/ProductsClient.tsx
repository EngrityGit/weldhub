'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getFilterOptions, filterAndSortProducts } from '@/lib/products'
import { SortOption } from '@/types'
import ProductCard from '@/components/ui/ProductCard'
import SubHeader from '@/components/ui/SubHeader'
import FilterSidebar from '@/components/ui/FilterSidebar'

export default function ProductsPage() {
  const filterOptions = getFilterOptions()

  // State
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<{ min: number; max: number } | null>(null)
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid')
  const [showFilters, setShowFilters] = useState(true)

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return filterAndSortProducts(
      searchQuery,
      selectedCategories,
      selectedBrands,
      priceRange,
      sortBy
    )
  }, [searchQuery, selectedCategories, selectedBrands, priceRange, sortBy])

  return (
    <div className="min-h-screen">
      {/* SubHeader with Search, Sort, View Toggle */}
      <SubHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        totalResults={filteredProducts.length}
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters(!showFilters)}
      />

      {/* Main Content - Changed container-custom to w-full with padding */}
      <div className="w-full px-6 lg:px-12 py-12">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          {showFilters && (
            <aside className="hidden lg:block w-72 flex-shrink-0 animate-slide-up py-10">
              <FilterSidebar
                filterOptions={filterOptions}
                selectedCategories={selectedCategories}
                selectedBrands={selectedBrands}
                priceRange={priceRange}
                onCategoryChange={setSelectedCategories}
                onBrandChange={setSelectedBrands}
                onPriceRangeChange={setPriceRange}
              />
            </aside>
          )}

          {/* Products Display */}
          <main className="flex-1 min-w-0 py-10">
            {filteredProducts.length === 0 ? (
              // No Results
              <div className="card p-16 text-center">
                <svg className="w-24 h-24 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategories([])
                    setSelectedBrands([])
                    setPriceRange(null)
                  }}
                  className="btn btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              // Grid View - Set to max 3 columns on large screens to keep items large
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((product, idx) => (
                  <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              // Table View
              <div className="card overflow-hidden animate-fade-in">
                <div className="overflow-x-auto">
                  <table className="table-view">
                    <thead>
                      <tr>
                        <th className="w-24">Image</th>
                        <th>Product</th>
                        <th className="hidden md:table-cell">Category</th>
                        <th className="hidden lg:table-cell">Specifications</th>
                        <th className="text-right">Price</th>
                        <th className="w-32"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.map((product) => (
                        <tr key={product.id}>
                          {/* Image */}
                          <td>
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 border border-gray-100">
                              <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </td>

                          {/* Product Info */}
                          <td>
                            <Link href={`/products/${product.slug}`} className="hover:text-blue-600">
                              <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                              <p className="text-sm text-gray-600 line-clamp-2 mb-2">{product.description}</p>
                            </Link>
                          </td>

                          {/* Category */}
                          <td className="hidden md:table-cell">
                            <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600">
                              {product.category}
                            </span>
                          </td>

                          {/* Specifications */}
                          <td className="hidden lg:table-cell">
                            <div className="space-y-1">
                              {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                                <div key={key} className="text-xs">
                                  <span className="text-gray-500">{key}:</span>{' '}
                                  <span className="text-gray-900 font-medium">{value}</span>
                                </div>
                              ))}
                            </div>
                          </td>

                          {/* Price */}
                          <td className="text-right">
                            <div className="font-bold text-sm text-gray-900">{(product.price)}</div>
                          </td>

                          {/* Action */}
                          <td>
                            <Link href={`/products/${product.slug}`} className="btn btn-primary btn-sm w-full">
                              View
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}