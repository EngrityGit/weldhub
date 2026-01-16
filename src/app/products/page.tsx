'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllProducts, getFilterOptions, filterAndSortProducts } from '@/lib/products'
import { SortOption } from '@/types'
import ProductCard from '@/components/ui/ProductCard'
import SubHeader from '@/components/ui/SubHeader'
import FilterSidebar from '@/components/ui/FilterSidebar'
import { formatPrice, getBadgeClass } from '@/lib/utils'

export default function ProductsPage() {
  const allProducts = getAllProducts()
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

      {/* Main Content */}
      <div className="container-custom py-12">
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
              // Grid View
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
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                              <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                              {/* {product.badge && (
                                <div className="absolute top-1 left-1">
                                  <span className={`badge text-xs ${getBadgeClass(product.badge)}`}>
                                    {product.badge}
                                  </span>
                                </div>
                              )} */}
                            </div>
                          </td>

                          {/* Product Info */}
                          <td>
                            <Link href={`/products/${product.slug}`} className="hover:text-blue-600">
                              <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                              <p className="text-sm text-gray-600 line-clamp-2 mb-2">{product.description}</p>
                              <div className="flex items-center gap-2 text-xs">
                                <div className="flex items-center gap-1">
                                  <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span className="font-semibold text-gray-700">{product.seller.rating}</span>
                                </div>
                                <span className="text-gray-400">•</span>
                                <span className="text-gray-600">{product.seller.name}</span>
                              </div>
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
                            {/* <div className="text-xs text-gray-500">Request quote</div> */}
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