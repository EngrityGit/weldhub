'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import { getAllProducts } from '@/lib/products'
import CartSidebar from '@/components/ui/CartSidebar'
import WishlistSidebar from '@/components/ui/WishlistSidebar'

export default function Header() {
  const router = useRouter()
  const { cartCount, wishlistCount } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [showSearchResults, setShowSearchResults] = useState(false)

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim().length > 2) {
      const products = getAllProducts()
      const query = searchQuery.toLowerCase()
      const results = products.filter(
        product =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.features.some(f => f.toLowerCase().includes(query)) ||
          product.applications.some(a => a.toLowerCase().includes(query))
      ).slice(0, 5)
      setSearchResults(results)
      setShowSearchResults(true)
    } else {
      setSearchResults([])
      setShowSearchResults(false)
    }
  }, [searchQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`)
      setShowSearchResults(false)
      setSearchQuery('')
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group flex-shrink-0">
              <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                WeldHub
              </span>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl relative">
              <form onSubmit={handleSearch} className="w-full relative">
                <input
                  type="text"
                  placeholder="Search products, categories, specifications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchResults.length > 0 && setShowSearchResults(true)}
                  className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('')
                      setShowSearchResults(false)
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}

                {/* Search Results Dropdown */}
                {showSearchResults && searchResults.length > 0 && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowSearchResults(false)}
                    />
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-20 max-h-96 overflow-y-auto">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.slug}`}
                          onClick={() => {
                            setShowSearchResults(false)
                            setSearchQuery('')
                          }}
                          className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 relative overflow-hidden">
                            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 truncate">{product.name}</h4>
                            <p className="text-sm text-gray-600 truncate">{product.description}</p>
                            <span className="text-xs text-blue-600 font-medium">{product.category}</span>
                          </div>
                        </Link>
                      ))}
                      <div className="border-t border-gray-200 mt-2 pt-2 px-4">
                        <button
                          onClick={() => {
                            router.push(`/products?search=${encodeURIComponent(searchQuery)}`)
                            setShowSearchResults(false)
                            setSearchQuery('')
                          }}
                          className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
                        >
                          View all results for "{searchQuery}"
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </form>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
              <Link 
                href="/" 
                className="px-3 py-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium transition-all text-sm"
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="px-3 py-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium transition-all text-sm"
              >
                Products
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Wishlist */}
              <button 
                onClick={() => setWishlistOpen(true)}
                className="icon-btn relative" 
                aria-label="Wishlist"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center font-semibold">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button 
                onClick={() => setCartOpen(true)}
                className="icon-btn relative" 
                aria-label="Cart"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 rounded-full text-xs text-white flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Request Quote Button - Desktop */}
              <Link 
                href="/request-quote" 
                className="hidden md:inline-flex btn btn-primary text-sm px-4 py-2"
              >
                Get Quote
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden icon-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 animate-slide-down">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-4 relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </form>

              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="px-4 py-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="px-4 py-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                
                {/* Mobile Actions */}
                <div className="flex items-center gap-2 pt-2 px-4">
                  <button 
                    onClick={() => {
                      setWishlistOpen(true)
                      setMobileMenuOpen(false)
                    }}
                    className="icon-btn flex-1 relative" 
                    aria-label="Wishlist"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {wishlistCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center font-semibold">
                        {wishlistCount}
                      </span>
                    )}
                  </button>
                  <button 
                    onClick={() => {
                      setCartOpen(true)
                      setMobileMenuOpen(false)
                    }}
                    className="icon-btn flex-1 relative" 
                    aria-label="Cart"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full text-xs text-white flex items-center justify-center font-semibold">
                        {cartCount}
                      </span>
                    )}
                  </button>
                </div>
                
                <Link
                  href="/request-quote"
                  className="btn btn-primary w-full mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      
      {/* Wishlist Sidebar */}
      <WishlistSidebar isOpen={wishlistOpen} onClose={() => setWishlistOpen(false)} />
    </>
  )
}