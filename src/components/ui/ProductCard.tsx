'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/types'
import { formatPrice, getBadgeClass } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
  const inWishlist = isInWishlist(product.id)

  // Auto-rotate images on hover
  useEffect(() => {
    if (isHovered && product.images.length > 1) {
      const id = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
      }, 800)
      setIntervalId(id)
    } else {
      if (intervalId) {
        clearInterval(intervalId)
        setIntervalId(null)
      }
      setCurrentImageIndex(0)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isHovered, product.images.length])

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (inWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
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
          className="card card-hover h-full flex flex-col overflow-hidden cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image Container */}
          <div className="relative w-full h-72 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            {/* Badge */}
            {product.badge && (
              <div className="absolute top-4 left-4 z-10 animate-scale-in">
                <span className={`badge ${getBadgeClass(product.badge)}`}>
                  {product.badge}
                </span>
              </div>
            )}

            {/* Wishlist Button */}
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
                fill={inWishlist ? "currentColor" : "none"}
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* Main Image with Carousel */}
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

            {/* Image Indicators */}
            {product.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 px-3 py-2 bg-black/30 backdrop-blur-sm rounded-full">
                {product.images.map((_, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentImageIndex
                        ? 'w-6 h-1.5 bg-white'
                        : 'w-1.5 h-1.5 bg-white/60'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Stock Status */}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                <span className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                  Out of Stock
                </span>
              </div>
            )}

            {/* Quick View Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Product Info */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Category & Rating */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                {product.category}
              </span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">{product.seller.rating}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            {/* Features - Top 2 */}
            {product.features.length > 0 && (
              <ul className="mb-4 space-y-1">
                {product.features.slice(0, 2).map((feature, idx) => (
                  <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="line-clamp-1">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Spacer */}
            <div className="flex-grow" />

            {/* Seller Info */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-t border-gray-100 pt-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-white text-sm font-bold">
                  {product.seller.avatar}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {product.seller.name}
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  {product.seller.verified && (
                    <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span>Verified Seller</span>
                </p>
              </div>
            </div>

            {/* Price and Actions */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {(product.price)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Starting price</p>
                </div>
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
                 Get Quote
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