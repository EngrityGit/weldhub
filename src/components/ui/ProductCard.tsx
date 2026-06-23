'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { Product } from '@/types'
import { getBadgeClass } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import { computeDisplayPrice } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

// Condition pill colours
const CONDITION_STYLES: Record<string, string> = {
  'New':      'bg-emerald-100 text-emerald-700',
  'Used':     'bg-amber-100  text-amber-700',
  'Open Box': 'bg-sky-100    text-sky-700',
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const inWishlist = isInWishlist(product.id)

  const displayPrice   = computeDisplayPrice(product)
  const isDiscounted   = product.onSale && product.discountPercent > 0
  const conditionStyle = CONDITION_STYLES[product.condition] ?? 'bg-gray-100 text-gray-600'

  useEffect(() => {
    if (!isHovered || product.images.length <= 1) return
    const id = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % product.images.length)
    }, 800)
    return () => clearInterval(id)
  }, [isHovered, product.images.length])

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <div className="h-full">
      <Link href={`/products/${product.slug}`}>
        <div
          className={`card card-hover h-full flex flex-col overflow-hidden cursor-pointer group ${
            product.featured ? 'ring-2 ring-blue-500 ring-offset-2' : ''
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            setCurrentImageIndex(0)
          }}
        >
          {/* ── Image Container ───────────────────────────────────────────── */}
          <div className="relative w-full h-72 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">

            {/* Top-left: badge stack */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 animate-scale-in">
              {/* Condition pill */}
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${conditionStyle}`}>
                {product.condition}
              </span>
              {/* On-Sale tag */}
              {product.onSale && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-red-500 text-white">
                  🏷 Sale
                  {product.discountPercent > 0 && ` −${product.discountPercent}%`}
                </span>
              )}
            </div>

            {/* Wishlist button */}
            <button
              onClick={handleWishlistToggle}
              className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md ${
                inWishlist
                  ? 'bg-red-500 text-white'
                  : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:text-red-500'
              }`}
            >
              <svg
                className="w-5 h-5"
                fill={inWishlist ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* Image Carousel */}
            <div className="relative w-full h-full">
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${product.name} - Image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover transition-all duration-500 ${
                    index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  priority={index === 0}
                />
              ))}
            </div>

            {/* Dot indicators */}
            {product.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 px-3 py-2 bg-black/30 backdrop-blur-sm rounded-full">
                {product.images.map((_, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentImageIndex ? 'w-6 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/60'
                    }`}
                  />
                ))}
              </div>
            )}

            {!product.inStock && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                <span className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                  Out of Stock
                </span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* ── Product Info ──────────────────────────────────────────────── */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Category */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                {product.category}
              </span>
              {/* Featured badge (text only, ring is on card) */}
              {product.featured && (
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wide">
                  ★ Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            {/* Bulk pricing note */}
            {product.bulkPricing && (
              <p className="text-[11px] text-emerald-700 font-semibold mb-3">
                🎁 Buy {product.bulkPricing.minQty}+: {product.bulkPricing.pricePerUnit} each
              </p>
            )}

            <div className="flex-grow" />

            {/* ── Price & Actions ──────────────────────────────────────────── */}
            <div className="space-y-3">
              <div className="flex items-end gap-2">
                {/* Discounted / display price */}
                <p className={`text-lg font-bold ${isDiscounted ? 'text-red-600' : 'text-gray-900'}`}>
                  {displayPrice}
                </p>
                {/* Original price strikethrough */}
                {isDiscounted && product.originalPrice && displayPrice !== product.originalPrice && (
                  <p className="text-sm text-gray-400 line-through">
                    {product.originalPrice}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 btn btn-outline text-sm py-2.5 group-hover:bg-blue-50 group-hover:border-blue-600 group-hover:text-blue-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Request Product
                </button>
                <Link
                  href={`/products/${product.slug}`}
                  className="btn btn-primary text-sm py-2.5 px-6 group-hover:scale-105 transition-transform"
                >
                  View
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}