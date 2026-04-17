'use client'

import { useState, useEffect, useRef } from 'react'
import {  useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { 
  ChevronRight, 
  Heart, 
  Minus, 
  Plus, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Play,
  CheckCircle2,
} from 'lucide-react'

import { getAllProducts } from '@/lib/products'
import { useCart } from '@/context/CartContext'
import { getBadgeClass } from '@/lib/utils'
import ProductCard from '@/components/ui/ProductCard'
import { Product } from '@/types'

// Fix TypeScript 'any' by defining specific tab types
type TabType = 'description' | 'specifications' | 'applications';

interface ProductDetailClientProps {
  product: Product
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const router = useRouter()
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart()
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedTab, setSelectedTab] = useState<TabType>('description')
  const [quantity, setQuantity] = useState(1)

  // GSAP Refs
  const mainRef = useRef<HTMLDivElement>(null)
  const mainImageRef = useRef<HTMLDivElement>(null)

  // 1. Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      })
    }, mainRef)
    return () => ctx.revert()
  }, [])

  // 2. Gallery Transition
  useEffect(() => {
    if (mainImageRef.current) {
      gsap.fromTo(mainImageRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.5, ease: 'power2.inOut' }
      )
    }
  }, [currentImageIndex])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="inline-flex items-center text-blue-600 font-semibold hover:underline">
            Browse All Products <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = getAllProducts()
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const inWishlist = isInWishlist(product.id)

  const handleRequestQuote = () => {
    addToCart(product)
    router.push(`/request-quote?product=${product.id}`)
  }

  return (
    <div ref={mainRef} className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* Left Column: Media Gallery */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <div className="relative group reveal">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${getBadgeClass(product.badge)}`}>
                      {product.badge}
                    </span>
                  </div>
                )}
                
                <div className="relative aspect-square bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                  <div ref={mainImageRef} className="w-full h-full relative">
                    <Image
                      src={product.images[currentImageIndex]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-5 gap-4 mt-6">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        currentImageIndex === index 
                        ? 'border-blue-600 ring-4 ring-blue-50' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image src={image} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* NEW SECTION: Verified by Engrity (Fills the white space) */}
              <div className="reveal mt-10 p-8 rounded-3xl bg-blue-50/50 border border-blue-100 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-200">
                  <ShieldCheck size={32} />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Verified by Engrity</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This product has been inspected and certified by our engineering team for high-performance industrial standards. Guaranteed genuine parts and manufacturer warranty.
                  </p>
                </div>
              </div>

              {/* Product Videos */}
              {product.videos && product.videos.length > 0 && (
                <div className="pt-12 reveal">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Play size={20} className="text-blue-600" />
                    Product in Action
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.videos.map((video, index) => (
                      <div key={index} className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer bg-gray-100 shadow-sm">
                        <Image src={video.thumbnail} alt={video.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl transform group-hover:scale-110 transition-transform">
                            <Play size={20} fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 text-white text-[10px] font-bold rounded backdrop-blur-md">
                          {video.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Details & Purchase (Sticky) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-10 space-y-8">
              
              <div className="reveal">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">{product.category}</span>
                  <button
                    onClick={() => (inWishlist ? removeFromWishlist(product.id) : addToWishlist(product))}
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                      inWishlist ? 'bg-red-500 text-white shadow-lg shadow-red-200' : 'bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500'
                    }`}
                  >
                    <Heart size={20} fill={inWishlist ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">{product.name}</h1>
                <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Pricing Card */}
              <div className="reveal p-8 rounded-3xl bg-blue-50 border border-blue-100 space-y-6 shadow-sm">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-sm text-blue-600 font-bold uppercase tracking-wider">Price Estimate</span>
                    <p className="text-4xl font-bold text-gray-900 mt-1">{product.price}</p>
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                    product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-700">Select Quantity</label>
                  <div className="flex items-center bg-white rounded-xl border border-blue-100 w-fit p-1">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors text-gray-600">
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-bold text-gray-900">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors text-gray-600">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleRequestQuote}
                  disabled={!product.inStock}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:shadow-xl hover:shadow-blue-200 active:scale-[0.98] disabled:opacity-50"
                >
                  Request Custom Quote <ArrowRight size={20} />
                </button>
              </div>
              {/* Quick Features List */}
              <div className="reveal space-y-3">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Key Benefits</h3>
                <div className="grid grid-cols-1 gap-3">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 bg-gray-50/50 transition-colors hover:bg-gray-50">
                      <ShieldCheck size={18} className="text-green-600" />
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section - Fixed TypeScript Error */}
        <div className="mt-24 reveal">
          <div className="flex gap-8 border-b border-gray-100 overflow-x-auto no-scrollbar">
            {(['description', 'specifications', 'applications'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`pb-4 px-2 text-sm font-bold uppercase tracking-widest transition-all relative whitespace-nowrap ${
                  selectedTab === tab ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
                {selectedTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full" />
                )}
              </button>
            ))}
          </div>

          <div className="py-10 min-h-[200px]">
            {selectedTab === 'description' && (
              <div className="max-w-4xl">
                <p className="text-lg text-gray-600 leading-loose">{product.longDescription}</p>
              </div>
            )}

            {selectedTab === 'specifications' && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-100 transition-colors">
                    <dt className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">{key}</dt>
                    <dd className="text-gray-900 font-bold text-lg">{value}</dd>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'applications' && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.applications.map((app, index) => (
                  <div key={index} className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm text-blue-600">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-bold text-gray-800">{app}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-24 border-t border-gray-100 reveal">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Related Products</h2>
                <p className="text-gray-500">Explore other high-quality industrial solutions from our catalog.</p>
              </div>
              <Link href="/products" className="text-blue-600 font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                Explore All Collection <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}