'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedProducts } from '@/lib/products'
import ProductCard from '@/components/ui/ProductCard'


export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 3)
  const [activeHeroIdx, setActiveHeroIdx] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const faqs = [
    {
      q: "What makes WeldHub assets verified?",
      a: "Every listing goes through a technical review by our engineering team. We match physical condition against original documentation — calibration records, service history, and compliance certifications — before anything reaches the marketplace."
    },
    {
      q: "How does the quote process work?",
      a: "Select any asset and submit a quote request. You'll receive a detailed valuation within 24 hours, including condition notes and logistics options. No obligation, no sales calls — just clear pricing."
    },
    {
      q: "Do you carry new and used inventory?",
      a: "Yes. WeldHub lists both new-in-box and certified pre-owned assets. Each listing is clearly labelled with condition grade, and used assets include a full inspection report."
    },
    {
      q: "Can I list equipment for sale through WeldHub?",
      a: "Engrity WeldHub works with select industrial partners to list surplus or decommissioned assets. Reach out through our contact page and a member of the team will follow up within one business day."
    },
  ]
 

  return (
    <div className="w-full bg-background overflow-x-hidden">
      
      {/* --- CTEK INSPIRED HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-16 pt-20 pb-12 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="space-y-8 z-10">
            <div className="space-y-2">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0071fe]">Explore Inventory</p>
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-slate-900 leading-[0.85]">
                New-<br />
                <span className=" text-[#0071fe]">Series</span>
              </h1>
            </div>
            
            <p className="text-xl text-slate-700 max-w-md leading-relaxed">
              Engrity WeldHub represents the most advanced marketplace for {featuredProducts[activeHeroIdx]?.name}, 
              providing optimal asset management for both production and R&D.
            </p>

            <div className="flex items-center gap-4">
              <Link href={`/products/${featuredProducts[activeHeroIdx]?.slug}`} className="px-10 py-4 bg-[#1a1a1a] text-white font-bold rounded-sm hover:bg-slate-800 transition-all uppercase text-sm tracking-widest">
                Buy Now!
              </Link>
              <Link href="/request-quote" className="px-10 py-4 border border-slate-400 text-slate-900 font-bold rounded-sm hover:bg-white/50 transition-all uppercase text-sm tracking-widest">
                Request Quote
              </Link>
            </div>

            {/* Bottom Stats (CTEK Style) */}
            <div className="pt-12 grid grid-cols-3 gap-8 border-t border-slate-300">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-widest">Performance</p>
                <p className="text-sm font-bold text-slate-800">Verified Precision</p>
              </div>
              <div className="border-l border-slate-300 pl-8">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-widest">Condition</p>
                <p className="text-sm font-bold text-slate-800">Certified Pre-Owned</p>
              </div>
              <div className="border-l border-slate-300 pl-8">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-widest">Marketplace</p>
                <p className="text-sm font-bold text-slate-800">Engrity WeldHub</p>
              </div>
            </div>
          </div>

          {/* Right Side: Product Showcase */}
          <div className="relative h-[500px] flex items-center justify-center group">
            <div 
              className="relative w-full h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
              <Image 
                src={featuredProducts[activeHeroIdx]?.images[0]} 
                alt={featuredProducts[activeHeroIdx]?.name}
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Thumbnails to switch hero product */}
            <div className="absolute bottom-0 right-0 flex gap-4">
              {featuredProducts.map((p, i) => (
                <button 
                  key={p.id}
                  onClick={() => setActiveHeroIdx(i)}
                  className={`w-16 h-16 rounded-full border-2 transition-all p-1 bg-white/50 backdrop-blur-sm ${activeHeroIdx === i ? 'border-blue-600 scale-110 shadow-lg' : 'border-transparent opacity-50'}`}
                >
                  <Image src={p.images[0]} alt="thumb" width={64} height={64} className="object-contain h-full w-full" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SAKI INSPIRED WORDERSECTION --- */}
      <section className="py-40 px-6 bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto text-center">
          <div className="inline-block px-6 py-2 border border-slate-200 rounded-full mb-12 text-sm font-medium text-slate-500 bg-white shadow-sm">
            WeldHub Products
          </div>

          <h2 className="text-3xl md:text-5xl font-normal leading-[1.1] tracking-tight text-black max-w-6xl mx-auto mb-16">
            At Engrity WeldHub, we blend innovation with 
            <span className="inline-block align-middle mx-3 w-28 md:w-40 h-14 md:h-20 bg-slate-100 rounded-full overflow-hidden border border-slate-200 translate-y-[-4px]">
              <Image src="/images/products/xrf2.webp" alt="rituals" width={160} height={80} className="object-cover w-full h-full" />
            </span>
            tradition to elevate your industrial 
            <span className="inline-block align-middle mx-3 w-28 md:w-40 h-14 md:h-20 bg-slate-100 rounded-full overflow-hidden border border-slate-200 translate-y-[-4px]">
              <Image src="/images/products/eddy.png" alt="crafting" width={160} height={80} className="object-cover w-full h-full" />
            </span>
            crafting with premium assets for 
            <span className="text-blue-500"> extraordinary </span> 
            results
            <span className="inline-block align-middle mx-3 w-28 md:w-40 h-14 md:h-20 bg-slate-100 rounded-full overflow-hidden border border-slate-200 translate-y-[-4px]">
              <Image src="/images/products/omniscan.jpg" alt="moments" width={160} height={80} className="object-cover w-full h-full" />
            </span>
          </h2>

          <Link href="/products" className="inline-flex items-center gap-3 px-12 py-5 bg-[#0071fe] text-white rounded-md font-bold hover:bg-black transition-all shadow-xl group">
            Browse Engrity WeldHub
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* --- ALL PRODUCTS GRID --- */}
      <section className="py-24 bg-[#fcfcfc] border-t border-slate-100 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <h3 className="text-5xl font-semibold tracking-tight  text-[#0071fe]">Full Collection</h3>
            <Link href="/products" className="text-sm font-bold uppercase tracking-widest text-blue-600 border-b-2 border-blue-600 pb-1 hover:text-blue-700 transition-all">
              View All Inventory
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {getFeaturedProducts().map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

   {/* ─── FAQ (fully redesigned: split-column, clean) ─── */}
      <section className="py-32 px-6 md:px-16 bg-white border-t border-slate-100">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-24 items-start">
 
          {/* Left: label + heading */}
          <div className="lg:sticky lg:top-32">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0071fe] mb-4">Support</p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 leading-tight mb-6">
              Questions<br />answered.
            </h2>
            <p className="text-base text-slate-500 leading-relaxed mb-10 max-w-xs">
              Everything you need to know about buying, listing, and sourcing industrial assets through WeldHub.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 border-b border-slate-300 pb-0.5 hover:border-[#0071fe] hover:text-[#0071fe] transition-colors"
            >
              Contact support
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
 
          {/* Right: accordion list */}
          <div className="divide-y divide-slate-100">
            {faqs.map((item, i) => (
              <div key={i} className="py-7">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 text-left group"
                >
                  <span className={`text-base font-semibold leading-snug transition-colors ${openIndex === i ? 'text-[#0071fe]' : 'text-slate-900 group-hover:text-slate-600'}`}>
                    {item.q}
                  </span>
                  <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
 
        </div>
      </section>

   {/* ─── CTA (redesigned: clean split, no heavy rounding) ─── */}
      <section className="py-24 px-6 md:px-16 bg-[#fcfcfc] border-t border-slate-100">
        <div className="max-w-screen-xl mx-auto">
 
          {/* Top rule + label */}
          <div className="flex items-center justify-between mb-16 pb-5 border-b border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">Get started</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">WeldHub — Engrity Group</span>
          </div>
 
          <div className="grid lg:grid-cols-2 gap-16 items-end">
 
            {/* Left: copy */}
            <div>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 leading-[0.88] mb-10">
                Upgrade<br />
                your<br />
                <span className="text-[#0071fe]">workforce.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed max-w-sm mb-12">
                Source verified NDT and welding assets through WeldHub — precision equipment, ready to deploy.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-[#0071fe] text-white font-semibold text-sm uppercase tracking-widest hover:bg-[#005fd4] transition-colors"
                >
                  Browse equipment
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-3 px-10 py-4 border border-slate-300 text-slate-700 font-semibold text-sm uppercase tracking-widest hover:border-slate-500 transition-colors"
                >
                  Request a quote
                </Link>
              </div>
            </div>
 
            {/* Right: image with a clean overlay stat strip */}
            <div className="relative">
              <div className="relative h-[420px] lg:h-[520px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/products/iplex.jpg"
                  alt="WeldHub Equipment"
                  fill
                  className="object-cover"
                />
                {/* Minimal bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-sm border-t border-slate-100">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Assets</p>
                      <p className="text-xl font-bold text-slate-900">200+</p>
                    </div>
                    <div className="border-l border-slate-200 pl-4">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Verified</p>
                      <p className="text-xl font-bold text-slate-900">100%</p>
                    </div>
                    <div className="border-l border-slate-200 pl-4">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Response</p>
                      <p className="text-xl font-bold text-[#0071fe]">&lt; 24 hr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
 
          </div>
        </div>
      </section>

    </div>
  )
}