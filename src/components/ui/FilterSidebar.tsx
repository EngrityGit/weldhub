'use client'

import { useState, useMemo } from 'react'
import { FilterOptions } from '@/types'

interface FilterSidebarProps {
  filterOptions: FilterOptions
  selectedCategories: string[]
  selectedBrands: string[]
  selectedConditions: string[]
  onSaleOnly: boolean
  priceRange: { min: number; max: number } | null
  onCategoryChange: (categories: string[]) => void
  onBrandChange: (brands: string[]) => void
  onConditionChange: (conditions: string[]) => void
  onSaleOnlyChange: (value: boolean) => void
  onPriceRangeChange: (range: { min: number; max: number } | null) => void
}

const CONDITION_DOTS: Record<string, string> = {
  'New':      'bg-emerald-500',
  'Used':     'bg-amber-500',
  'Open Box': 'bg-sky-500',
}

export default function FilterSidebar({
  filterOptions,
  selectedCategories,
  selectedBrands,
  selectedConditions,
  onSaleOnly,
  onCategoryChange,
  onBrandChange,
  onConditionChange,
  onSaleOnlyChange,
}: FilterSidebarProps) {
  const [categoryExpanded, setCategoryExpanded]   = useState(true)
  const [brandExpanded, setBrandExpanded]         = useState(true)
  const [conditionExpanded, setConditionExpanded] = useState(true)
  const [brandSearch, setBrandSearch]             = useState('')

  const filteredBrandsList = useMemo(() => {
    return filterOptions.brands.filter(b =>
      b.toLowerCase().includes(brandSearch.toLowerCase())
    )
  }, [filterOptions.brands, brandSearch])

  const handleToggle = (list: string[], item: string, setter: (val: string[]) => void) => {
    setter(list.includes(item) ? list.filter(i => i !== item) : [...list, item])
  }

  const clearAllFilters = () => {
    onCategoryChange([])
    onBrandChange([])
    onConditionChange([])
    onSaleOnlyChange(false)
    setBrandSearch('')
  }

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedBrands.length > 0 ||
    selectedConditions.length > 0 ||
    onSaleOnly

  return (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden sticky top-32">
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div className="p-6 pb-4 flex items-center justify-between border-b border-gray-50 bg-gray-50/50">
        <div>
          <h2 className="text-lg font-bold text-gray-900 tracking-tight">Filters</h2>
          <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest mt-0.5">Refine Catalog</p>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-xs font-bold text-blue-600 hover:text-white hover:bg-blue-600 px-3 py-1.5 rounded-full transition-all duration-200 border border-blue-100"
          >
            Reset
          </button>
        )}
      </div>

      <div className="p-6 space-y-8">

        {/* ── On Sale Toggle ────────────────────────────────────────────────── */}
        <section>
          <button
            onClick={() => onSaleOnlyChange(!onSaleOnly)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl border-2 transition-all duration-200 ${
              onSaleOnly
                ? 'border-red-400 bg-red-50 text-red-600'
                : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-red-200 hover:bg-red-50/50'
            }`}
          >
            <span className="flex items-center gap-2 text-sm font-bold">
              <span>🏷</span>
              On Sale Only
            </span>
            <div className={`w-10 h-5 rounded-full relative transition-colors duration-200 ${onSaleOnly ? 'bg-red-500' : 'bg-gray-300'}`}>
              <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-200 ${onSaleOnly ? 'left-5' : 'left-0.5'}`} />
            </div>
          </button>
        </section>

        {/* ── Condition Filter ──────────────────────────────────────────────── */}
        <section className="pt-2 border-t border-gray-50">
          <button
            onClick={() => setConditionExpanded(!conditionExpanded)}
            className="flex items-center justify-between w-full group"
          >
            <span className="text-sm font-bold text-gray-800 uppercase tracking-wide group-hover:text-blue-600 transition-colors">
              Condition
            </span>
            <div className={`p-1 rounded-lg transition-colors ${conditionExpanded ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-400'}`}>
              <svg className={`w-4 h-4 transition-transform duration-300 ${conditionExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <div className={`grid transition-all duration-300 ease-in-out ${conditionExpanded ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden space-y-3">
              {(filterOptions.conditions ?? ['New', 'Used', 'Open Box']).map(condition => (
                <label key={condition} className="flex items-center group cursor-pointer">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedConditions.includes(condition)}
                      onChange={() => handleToggle(selectedConditions, condition, onConditionChange)}
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-gray-200 bg-white checked:bg-blue-600 checked:border-blue-600 transition-all duration-200 shadow-sm"
                    />
                    <svg className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 flex items-center gap-2 text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                    <span className={`inline-block w-2 h-2 rounded-full ${CONDITION_DOTS[condition] ?? 'bg-gray-400'}`} />
                    {condition}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* ── Category Filter ───────────────────────────────────────────────── */}
        <section className="pt-8 border-t border-gray-50">
          <button
            onClick={() => setCategoryExpanded(!categoryExpanded)}
            className="flex items-center justify-between w-full group"
          >
            <span className="text-sm font-bold text-gray-800 uppercase tracking-wide group-hover:text-blue-600 transition-colors">
              Category
            </span>
            <div className={`p-1 rounded-lg transition-colors ${categoryExpanded ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-400'}`}>
              <svg className={`w-4 h-4 transition-transform duration-300 ${categoryExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <div className={`grid transition-all duration-300 ease-in-out ${categoryExpanded ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden space-y-3">
              {filterOptions.categories.map(category => (
                <label key={category} className="flex items-center group cursor-pointer">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleToggle(selectedCategories, category, onCategoryChange)}
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-gray-200 bg-white checked:bg-blue-600 checked:border-blue-600 transition-all duration-200 shadow-sm"
                    />
                    <svg className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* ── Brand Filter ──────────────────────────────────────────────────── */}
        <section className="pt-8 border-t border-gray-50">
          <button
            onClick={() => setBrandExpanded(!brandExpanded)}
            className="flex items-center justify-between w-full group mb-4"
          >
            <span className="text-sm font-bold text-gray-800 uppercase tracking-wide group-hover:text-blue-600 transition-colors">
              Brand
            </span>
            <div className={`p-1 rounded-lg transition-colors ${brandExpanded ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-400'}`}>
              <svg className={`w-4 h-4 transition-transform duration-300 ${brandExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {brandExpanded && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search brands..."
                  value={brandSearch}
                  onChange={e => setBrandSearch(e.target.value)}
                  className="w-full bg-gray-50 border-none rounded-xl py-2 pl-9 pr-4 text-xs focus:ring-2 focus:ring-blue-100 transition-all"
                />
                <svg className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="max-h-48 overflow-y-auto custom-scrollbar space-y-3 pr-2">
                {filteredBrandsList.length > 0 ? (
                  filteredBrandsList.map(brand => (
                    <label key={brand} className="flex items-center group cursor-pointer">
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => handleToggle(selectedBrands, brand, onBrandChange)}
                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-gray-200 bg-white checked:bg-blue-600 checked:border-blue-600 transition-all duration-200"
                        />
                        <svg className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                        {brand}
                      </span>
                    </label>
                  ))
                ) : (
                  <p className="text-xs text-gray-400 italic text-center py-4">No brands match your search</p>
                )}
              </div>
            </div>
          )}
        </section>

        {/* ── Info Card ─────────────────────────────────────────────────────── */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 rounded-2xl shadow-lg shadow-blue-100">
          <div className="flex items-start gap-3">
            <div className="bg-white/20 p-1.5 rounded-lg">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Expert Support</h4>
              <p className="text-[11px] text-blue-50 leading-relaxed">
                Need help choosing? Our engineers are available to discuss specifications.
              </p>
              <button className="mt-3 text-[11px] font-bold text-blue-700 bg-white px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}