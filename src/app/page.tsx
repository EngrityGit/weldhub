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
                {featuredProducts[activeHeroIdx]?.brand}-<br />
                <span className=" text-[#0071fe]">Series</span>
              </h1>
            </div>
            
            <p className="text-xl text-slate-700 max-w-md leading-relaxed">
              Engrity WeldHub represents the most advanced marketplace for {featuredProducts[activeHeroIdx]?.name}, 
              providing optimal asset management for both production and R&D.
            </p>

            <div className="flex items-center gap-4">
              <Link href={`/products/${featuredProducts[activeHeroIdx]?.slug}`} className="px-10 py-4 bg-[#1a1a1a] text-white font-bold rounded-sm hover:bg-slate-800 transition-all uppercase text-sm tracking-widest">
                Buy {featuredProducts[activeHeroIdx]?.brand}
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
                <p className="text-sm font-bold text-slate-800">Certified Used</p>
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
            Engrity Products
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
            crafting of premium used assets for 
            <span className="text-blue-500"> extraordinary </span> 
            results
            <span className="inline-block align-middle mx-3 w-28 md:w-40 h-14 md:h-20 bg-slate-100 rounded-full overflow-hidden border border-slate-200 translate-y-[-4px]">
              <Image src="/images/products/omniscan.jpg" alt="moments" width={160} height={80} className="object-cover w-full h-full" />
            </span>
          </h2>

          <Link href="/products" className="inline-flex items-center gap-3 px-12 py-5 bg-[#0071fe] text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl group">
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

      {/* --- FAQ SECTION --- */}
      <section className="py-32 px-6 md:px-12 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-semibold tracking-tight mb-20 text-center  text-[#0071fe]">Questions Answered</h2>
          <div className="space-y-4">
            {[
              {
                q: "What makes Engrity WeldHub verified?",
                a: "Every industrial asset, from robotic arms to NDT cameras, is vetted by our engineering team to ensure technical documentation matches the current physical state of the device."
              },
              {
                q: "How does the quote process work?",
                a: "Choose your series, request a quote, and receive a comprehensive valuation within 24 hours. Engrity WeldHub simplifies high-stakes industrial procurement."
              }
            ].map((item, i) => (
              <div key={i} className="group border border-slate-200 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-blue-500/50">
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-8 text-left">
                  <span className={`text-xl font-bold transition-colors ${openIndex === i ? 'text-blue-600' : 'text-slate-900'}`}>{item.q}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                <div className={`grid transition-all duration-500 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden"><p className="p-8 pt-0 text-lg text-slate-500 leading-relaxed">{item.a}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WIDE BRAND BLUE CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-screen-2xl mx-auto bg-[#0071fe] rounded-[4rem] p-12 md:p-24 relative overflow-hidden group min-h-[500px] flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 w-full items-center relative z-10">
            <div className="space-y-10 text-white">
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                Upgrade your <br /> workforce.
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 max-w-xl font-light">
                Secure precision assets through the Engrity WeldHub network. High-end NDT and welding technology, verified and ready.
              </p>
              <Link href="/products" className="group relative px-14 py-7 bg-white text-[#0071fe] rounded-full font-bold text-xl transition-all hover:scale-105 shadow-2xl flex items-center gap-3 w-fit">
                Start Exploring
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-[3rem] overflow-hidden bg-white/10 border border-white/20 backdrop-blur-xl">
              <Image src="/images/products/iplex.jpg" alt="WeldHub Asset" fill className="object-cover opacity-100 group-hover:scale-110 transition-all duration-[3s]" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}