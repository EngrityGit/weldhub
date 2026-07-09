'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Product } from '@/types'
import { useCart } from '@/context/CartContext'
import { computeDisplayPrice } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const inWishlist = isInWishlist(product.id)

  const displayPrice = computeDisplayPrice(product)
  const isDiscounted = product.onSale && product.discountPercent > 0

  useEffect(() => {
    if (!isHovered || product.images.length <= 1) return
    const id = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
    }, 2000)
    return () => clearInterval(id)
  }, [isHovered, product.images.length])

  return (
    <div className="group relative h-full">
      <div
        onClick={() => router.push(`/products/${product.slug}`)}
        className="relative flex h-full flex-col overflow-hidden rounded-[32px] border border-zinc-100 bg-white p-3 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          setCurrentImageIndex(0)
        }}
      >
        {/* ── Image Display (The Studio) ── */}
        <div className="relative aspect-square w-full overflow-hidden rounded-[24px] bg-[#F9F9F9]">
          
          {/* Status Badges */}
          <div className="absolute left-4 top-4 z-20 flex items-center gap-2">
            <span className="rounded-full border border-zinc-200/50 bg-white/80 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-zinc-800 backdrop-blur-md">
              {product.condition}
            </span>
            {product.onSale && (
              <span className="rounded-full bg-[#0071fe] px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white shadow-lg shadow-blue-100">
                Sale
              </span>
            )}
          </div>

          {/* Wishlist Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)
            }}
            className={`absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 border border-white/20 ${
              inWishlist 
                ? 'bg-red-500 text-white shadow-lg' 
                : 'bg-white/40 text-zinc-400 hover:text-red-500 backdrop-blur-md'
            }`}
          >
            <svg className="h-5 w-5" fill={inWishlist ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          {/* Carousel Images */}
          <div className="relative h-full w-full">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                }`}
              >
                <Image
                  src={image}
                  alt={product.name}
                  fill
                  className="object-contain p-10 mix-blend-multiply"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>

          {/* Glassmorphism Pagination Dots */}
          {product.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/40 bg-white/20 p-2 backdrop-blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              {product.images.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentImageIndex ? 'w-4 bg-white' : 'w-1 bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Out of Stock State */}
          {!product.inStock && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-zinc-900/5 backdrop-blur-[2px]">
              <div className="rounded-full bg-white/90 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900 shadow-xl backdrop-blur-md">
                Sold Out
              </div>
            </div>
          )}
        </div>

        {/* ── Content Section ── */}
        <div className="flex flex-grow flex-col px-4 py-6">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              {product.category}
            </span>
            {isDiscounted && (
              <span className="text-[10px] font-bold text-red-500">
                OFFERED AT -{product.discountPercent}%
              </span>
            )}
          </div>

          <h3 className="text-lg font-semibold tracking-tight text-zinc-900 line-clamp-1 group-hover:text-[#0071fe] transition-colors">
            {product.name}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-zinc-400 line-clamp-2">
            {product.description}
          </p>

          {/* Stable Pricing Row */}
          <div className="mt-6 flex items-baseline gap-2">
            <span className={`text-xl font-bold tracking-tighter ${isDiscounted ? 'text-red-600' : 'text-zinc-900'}`}>
              {displayPrice}
            </span>
            {isDiscounted && (
              <span className="text-xs text-zinc-300 line-through decoration-zinc-200">
                {product.originalPrice}
              </span>
            )}
          </div>

          {/* Minimalist Bulk Info */}
          {product.bulkPricing && (
             <div className="mt-2 flex items-center gap-2">
               <div className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
               <span className="text-[10px] font-medium text-emerald-700/70">
                 Bulk from {product.bulkPricing.minQty} units: {product.bulkPricing.pricePerUnit}
               </span>
             </div>
          )}

          <div className="flex-grow" />

          {/* Actions */}
          <div className="mt-8 flex items-center gap-3">
            {/* Quick Add icon */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                addToCart(product)
              }}
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-zinc-50 text-zinc-900 transition-all hover:bg-[#0071fe] hover:text-white hover:shadow-[0_10px_20px_rgba(0,113,254,0.2)]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>

            {/* Discover Button with Shine Effect */}
            <Link
              href={`/products/${product.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="group/btn relative flex h-12 flex-grow items-center justify-center overflow-hidden rounded-2xl bg-zinc-900 px-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#0071fe] hover:shadow-[0_15px_30px_rgba(0,113,254,0.3)] hover:-translate-y-0.5 active:scale-95"
            >
              
              <span className="relative z-10">Discover Product</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}