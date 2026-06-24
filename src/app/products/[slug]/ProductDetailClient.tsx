'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
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
  Play,
  CheckCircle2,
  MapPin,
  Star,
  ExternalLink,
  Tag,
  Package,
  Layers,
} from 'lucide-react'

import { getAllProducts } from '@/lib/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ui/ProductCard'
import { Product } from '@/types'

type TabType = 'description' | 'specifications' | 'applications'

interface ProductDetailClientProps {
  product: Product
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const router = useRouter()
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart()

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedTab, setSelectedTab] = useState<TabType>('description')
  const [quantity, setQuantity] = useState(1)

  const mainRef = useRef<HTMLDivElement>(null)
  const mainImageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal', {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.09,
        ease: 'power3.out',
        delay: 0.1,
      })
    }, mainRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (mainImageRef.current) {
      gsap.fromTo(mainImageRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.inOut' })
    }
  }, [currentImageIndex])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="inline-flex items-center text-[#0071fe] font-semibold hover:underline gap-2">
            Browse All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = getAllProducts()
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const inWishlist = isInWishlist(product.id)

  const handleRequestQuote = () => {
    addToCart(product)
    router.push(`/request-quote?product=${product.id}`)
  }

  /* ── derived discount values ── */
  const hasDiscount = product.onSale && product.discountPercent && product.discountPercent > 0
  const originalPrice = product.originalPrice || product.price
  const discountedPrice = hasDiscount
    ? (() => {
        const num = parseFloat(originalPrice.replace(/[^0-9.]/g, ''))
        const discounted = num * (1 - (product.discountPercent ?? 0) / 100)
        return `$${Math.round(discounted).toLocaleString()} CAD`
      })()
    : product.price

  const conditionColor: Record<string, string> = {
    New: 'bg-[#e6f7ee] text-[#1a7a3e]',
    Used: 'bg-[#fff4e0] text-[#9a5c00]',
    Refurbished: 'bg-[#eef2ff] text-[#3730a3]',
    'Demo Unit': 'bg-[#f3f0ff] text-[#6d28d9]',
  }
  const conditionClass = conditionColor[product.condition ?? ''] ?? 'bg-gray-100 text-gray-600'

  return (
    <>
      {/* Plus Jakarta Sans */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div
        ref={mainRef}
        className="min-h-screen bg-[#fcfcfc]"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >

        {/* ── Breadcrumb ── */}
        <div className="bg-white border-b border-[#e8edf5]">
          <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 py-4">
            <div className="flex items-center gap-2 text-[13px] text-slate-400 font-medium">
              <Link href="/" className="hover:text-[#0071fe] transition-colors">Home</Link>
              <ChevronRight size={13} className="text-slate-300" />
              <Link href="/products" className="hover:text-[#0071fe] transition-colors">Products</Link>
              <ChevronRight size={13} className="text-slate-300" />
              <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-[#0071fe] transition-colors">
                {product.category}
              </Link>
              <ChevronRight size={13} className="text-slate-300" />
              <span className="text-slate-700 truncate max-w-[200px]">{product.name}</span>
            </div>
          </div>
        </div>

        {/* ── Main product grid ── */}
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-20 items-start">

            {/* ────────────────────────────────────────
                LEFT: Image gallery + extras
            ──────────────────────────────────────── */}
            <div className="space-y-5">

              {/* Main image */}
              <div className="reveal relative aspect-[4/3] bg-white rounded-2xl overflow-hidden border border-[#e8edf5]">
                <div ref={mainImageRef} className="w-full h-full relative">
                  <Image
                    src={product.images[currentImageIndex]}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                    priority
                  />
                </div>

                {/* Condition badge */}
                {product.condition && (
                  <span className={`absolute top-4 left-4 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md ${conditionClass}`}>
                    {product.condition}
                  </span>
                )}

                {/* Discount badge */}
                {hasDiscount && (
                  <span className="absolute top-4 right-4 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md bg-[#0071fe] text-white">
                    {product.discountPercent}% off
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="reveal grid grid-cols-5 gap-3">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                        currentImageIndex === index
                          ? 'border-[#0071fe] ring-2 ring-[#0071fe]/10'
                          : 'border-[#e8edf5] opacity-60 hover:opacity-100 hover:border-slate-300'
                      }`}
                    >
                      <Image src={image} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Videos */}
              {product.videos && product.videos.length > 0 && (
                <div className="reveal pt-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
                    <Play size={12} className="text-[#0071fe]" /> Product Videos
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {product.videos.map((video, index) => (
                      <div key={index} className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-slate-100">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/35 transition-colors">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0071fe] shadow-lg group-hover:scale-110 transition-transform">
                            <Play size={16} fill="currentColor" />
                          </div>
                        </div>
                        <span className="absolute bottom-2.5 right-2.5 text-[10px] font-bold px-2 py-0.5 bg-black/60 text-white rounded backdrop-blur-sm">
                          {video.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              

              {/* Verified by Engrity */}
              <div className="reveal flex items-start gap-5 p-5 rounded-2xl bg-[#f4f6fb] border border-[#e8edf5]">
                <div className="w-10 h-10 rounded-xl bg-[#0071fe] flex items-center justify-center text-white shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-[14px] mb-1">Verified by Engrity Inspection</p>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    Every asset is reviewed by our engineering team. Technical documentation, calibration records, and physical condition are verified before listing.
                  </p>
                </div>
              </div>
            </div>

            {/* ────────────────────────────────────────
                RIGHT: Details, pricing, CTA (sticky)
            ──────────────────────────────────────── */}
            <div className="lg:sticky lg:top-10 space-y-7">

              {/* Category + wishlist */}
              <div className="reveal flex items-center justify-between">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0071fe]">{product.brand}</span>
                  <span className="text-slate-300 text-[11px]">/</span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{product.category}</span>
                </div>
                <button
                  onClick={() => (inWishlist ? removeFromWishlist(product.id) : addToWishlist(product))}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all border ${
                    inWishlist
                      ? 'bg-red-50 border-red-200 text-red-500'
                      : 'bg-white border-[#e8edf5] text-slate-400 hover:border-red-200 hover:text-red-400'
                  }`}
                  aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  <Heart size={17} fill={inWishlist ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Name */}
              <div className="reveal">
                <h1 className="text-[28px] sm:text-[32px] font-extrabold text-slate-900 leading-tight tracking-tight mb-3">
                  {product.name}
                </h1>
                <p className="text-[15px] text-slate-500 leading-relaxed">{product.description}</p>
              </div>

              {/* ── Condition / badge / sale strip ── */}
              <div className="reveal flex items-center gap-2 flex-wrap">
                {product.condition && (
                  <span className={`inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg ${conditionClass}`}>
                    <Package size={13} />
                    {product.condition}
                  </span>
                )}
                {hasDiscount && (
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg bg-green-50 text-green-700">
                    <Tag size={13} />
                    {product.discountPercent}% off
                  </span>
                )}
              </div>

              {/* ── Pricing card ── */}
              <div className="reveal bg-white border border-[#e8edf5] rounded-2xl p-6 space-y-5">

                {/* Price display */}
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1.5">
                      {hasDiscount ? 'Sale Price' : 'Price Estimate'}
                    </p>
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="text-[32px] font-extrabold text-slate-900 leading-none">
                        {hasDiscount ? discountedPrice : product.price}
                      </span>
                      {hasDiscount && (
                        <span className="text-[17px] font-semibold text-slate-400 line-through">
                          {originalPrice}
                        </span>
                      )}
                    </div>
                    {hasDiscount && (
                      <p className="text-[13px] text-green-600 font-semibold mt-1.5">
                        You save {product.discountPercent}% — limited availability
                      </p>
                    )}
                  </div>
                  <span className={`shrink-0 self-start text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg ${
                    product.inStock ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
                  }`}>
                    {product.inStock ? 'In stock' : 'Out of stock'}
                  </span>
                </div>

                {/* Quantity */}
                <div className="border-t border-[#e8edf5] pt-4">
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-3">Quantity</label>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-[#e8edf5] rounded-lg overflow-hidden bg-[#fcfcfc]">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-500"
                      >
                        <Minus size={15} />
                      </button>
                      <span className="w-10 text-center text-[15px] font-bold text-slate-900">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-500"
                      >
                        <Plus size={15} />
                      </button>
                    </div>
                    <span className="text-[13px] text-slate-400">unit{quantity !== 1 ? 's' : ''}</span>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="space-y-3 border-t border-[#e8edf5] pt-4">
                  <button
                    onClick={handleRequestQuote}
                    disabled={!product.inStock}
                    className="w-full bg-[#0071fe] hover:bg-[#005fd4] disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-lg font-bold text-[15px] flex items-center justify-center gap-2.5 transition-colors"
                  >
                    Request a Quote <ArrowRight size={18} />
                  </button>
                  <button
                    onClick={() => addToWishlist(product)}
                    className="w-full bg-white hover:bg-[#f4f6fb] border border-[#e8edf5] text-slate-700 py-4 rounded-lg font-semibold text-[15px] flex items-center justify-center gap-2.5 transition-colors"
                  >
                    <Heart size={17} className={inWishlist ? 'text-red-500 fill-red-500' : 'text-slate-400'} />
                    {inWishlist ? 'Saved to wishlist' : 'Save for later'}
                  </button>
                </div>
              </div>

              {/* Key features */}
              {product.features && product.features.length > 0 && (
                <div className="reveal space-y-2.5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">Key benefits</p>
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#0071fe] mt-0.5 shrink-0" />
                      <span className="text-[14px] text-slate-600 leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ────────────────────────────────────────
              TABS: Description / Specs / Applications
          ──────────────────────────────────────── */}
          <div className="mt-20 reveal">
            <div className="flex gap-0 border-b border-[#e8edf5] overflow-x-auto">
              {(['description', 'specifications', 'applications'] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`relative pb-4 px-6 text-[13px] font-bold uppercase tracking-[0.15em] transition-colors whitespace-nowrap ${
                    selectedTab === tab ? 'text-[#0071fe]' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab}
                  {selectedTab === tab && (
                    <span className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#0071fe] rounded-t-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="py-10">
              {selectedTab === 'description' && (
                <div className="max-w-3xl">
                  <p className="text-[16px] text-slate-600 leading-[1.85]">{product.longDescription}</p>
                </div>
              )}

              {selectedTab === 'specifications' && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="p-5 rounded-xl bg-white border border-[#e8edf5]">
                      <dt className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0071fe] mb-2">{key}</dt>
                      <dd className="text-[16px] font-bold text-slate-900">{value as string}</dd>
                    </div>
                  ))}
                </div>
              )}

              {selectedTab === 'applications' && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {product.applications.map((app, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-xl border border-[#e8edf5] bg-white hover:border-[#0071fe]/30 transition-colors group">
                      <div className="w-7 h-7 rounded-lg bg-[#ecf0f8] flex items-center justify-center text-[#0071fe] shrink-0 group-hover:bg-[#0071fe] group-hover:text-white transition-colors">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-[14px] font-semibold text-slate-700">{app}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ────────────────────────────────────────
              RELATED PRODUCTS
          ──────────────────────────────────────── */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-16 border-t border-[#e8edf5] reveal">
              <div className="flex flex-col sm:flex-row justify-between items-end mb-10 gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0071fe] mb-2">More in {product.category}</p>
                  <h2 className="text-[26px] font-extrabold text-slate-900 tracking-tight">Related equipment</h2>
                </div>
                <Link
                  href="/products"
                  className="group text-[14px] font-bold text-slate-500 hover:text-slate-900 flex items-center gap-2 transition-colors"
                >
                  View all inventory
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}