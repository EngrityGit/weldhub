'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useMemo } from 'react'
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
  const [isFocused, setIsFocused] = useState(false)
  
  // FIX: Initialize banner as false and only check session storage after mounting
  // to avoid hydration mismatch and "cascading render" warnings.
  const [isBannerVisible, setIsBannerVisible] = useState(false)

  useEffect(() => {
    const isClosed = sessionStorage.getItem('weldhub-promo-closed')
    if (!isClosed) {
      setIsBannerVisible(true)
    }
  }, [])

  // FIX: Search Results logic (Derived State)
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (query.length <= 2) return []

    return getAllProducts()
      .filter(
        product =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      )
      .slice(0, 5)
  }, [searchQuery])

  const showSearchResults = isFocused && searchResults.length > 0

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
      setIsFocused(false)
      setMobileMenuOpen(false)
    }
  }

  const closeBanner = () => {
    sessionStorage.setItem('weldhub-promo-closed', 'true')
    setIsBannerVisible(false)
  }

  // Helper to close mobile menu when clicking links
  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <>
      {/* Promotional Banner */}
      {isBannerVisible && (
        <div className="relative bg-[#0071fe] text-white overflow-hidden py-2 text-sm font-medium border-b border-white/10">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="px-4">
              WeldHub Partners with Leading Welding & NDT Equipment Manufacturers Across Western Canada
              Contact us at <a href="mailto:sales@engrity.com" className="font-bold underline ml-1">WeldHub Sales</a> to get Additional Discounts!
            </span>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0" onClick={closeMobileMenu}>
              <span className="font-be font-extrabold text-3xl tracking-tighter text-[#0071fe]">
                WeldHub
              </span>
            </Link>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl relative">
              <form onSubmit={handleSearch} className="w-full relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                  className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>

                {showSearchResults && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 truncate text-sm">{product.name}</h4>
                          <span className="text-xs text-blue-600 font-medium">{product.category}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </form>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
              <Link href="/" className="px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm">Home</Link>
              <Link href="/products" className="px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm">Products</Link>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button onClick={() => setWishlistOpen(true)} className="icon-btn relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                {wishlistCount > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">{wishlistCount}</span>}
              </button>

              <button onClick={() => setCartOpen(true)} className="icon-btn relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                {cartCount > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 rounded-full text-[10px] text-white flex items-center justify-center font-bold">{cartCount}</span>}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden icon-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4 pb-6 space-y-4">
              <form onSubmit={handleSearch} className="px-2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
              </form>
              <div className="flex flex-col px-2">
                <Link href="/" className="px-4 py-3 font-medium hover:bg-gray-50 rounded-lg" onClick={closeMobileMenu}>Home</Link>
                <Link href="/products" className="px-4 py-3 font-medium hover:bg-gray-50 rounded-lg" onClick={closeMobileMenu}>Products</Link>
                <Link href="/request-quote" className="mt-2 mx-2 btn btn-primary text-center py-3" onClick={closeMobileMenu}>Get a Quote</Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <WishlistSidebar isOpen={wishlistOpen} onClose={() => setWishlistOpen(false)} />

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  )
}