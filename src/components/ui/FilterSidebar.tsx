'use client'

import { useState } from 'react'
import { FilterOptions } from '@/types'

interface FilterSidebarProps {
  filterOptions: FilterOptions
  selectedCategories: string[]
  selectedBrands: string[]
  priceRange: { min: number; max: number } | null
  onCategoryChange: (categories: string[]) => void
  onBrandChange: (brands: string[]) => void
  onPriceRangeChange: (range: { min: number; max: number } | null) => void
}

export default function FilterSidebar({
  filterOptions,
  selectedCategories,
  selectedBrands,
  onCategoryChange,
  onBrandChange,
}: FilterSidebarProps) {
  const [categoryExpanded, setCategoryExpanded] = useState(true)
  const [brandExpanded, setBrandExpanded] = useState(true)

  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter(c => c !== category))
    } else {
      onCategoryChange([...selectedCategories, category])
    }
  }

  const handleBrandToggle = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      onBrandChange(selectedBrands.filter(b => b !== brand))
    } else {
      onBrandChange([...selectedBrands, brand])
    }
  }

  const clearAllFilters = () => {
    onCategoryChange([])
    onBrandChange([])
  }

  const hasActiveFilters = selectedCategories.length > 0 || selectedBrands.length > 0

  return (
    <div className="card p-6 sticky top-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => setCategoryExpanded(!categoryExpanded)}
          className="flex items-center justify-between w-full mb-4 group"
        >
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
            Category
          </h3>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${categoryExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {categoryExpanded && (
          <div className="space-y-3">
            {filterOptions.categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">
                  {category}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brand Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => setBrandExpanded(!brandExpanded)}
          className="flex items-center justify-between w-full mb-4 group"
        >
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
            Brand
          </h3>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${brandExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {brandExpanded && (
          <div className="space-y-3">
            {filterOptions.brands.map((brand) => (
              <label
                key={brand}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandToggle(brand)}
                  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Info - Since all products are "Request a Quote" */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">Pricing</h4>
            <p className="text-xs text-gray-600">All products are available on a quote basis. Request a quote to get customized pricing for your needs.</p>
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="pt-6 border-t border-gray-200 mt-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Active Filters</h4>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((category) => (
              <span
                key={category}
                className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
              >
                {category}
                <button
                  onClick={() => handleCategoryToggle(category)}
                  className="hover:text-blue-800"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))}
            {selectedBrands.map((brand) => (
              <span
                key={brand}
                className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-medium"
              >
                {brand}
                <button
                  onClick={() => handleBrandToggle(brand)}
                  className="hover:text-purple-800"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}