'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Custom Minimalist SVGs
  const Icons = {
    Facebook: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ),
    Instagram: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    ),
    LinkedIn: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    )
  }

  const socials = [
    { icon: <Icons.Instagram />, href: 'https://www.instagram.com/weldhubmarketplace/' },
    { icon: <Icons.Facebook />, href: 'https://www.facebook.com/people/WeldHub/61589291720981/' },
    { icon: <Icons.LinkedIn />, href: 'https://www.linkedin.com/company/weldhub/' },
  ]

  return (
    <footer className="bg-[#0a0c12] text-[#94a3b8] w-full pt-24 overflow-hidden select-none border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* 1. NAVIGATION LINKS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <span className="text-white text-3xl font-bold tracking-tighter transition-colors duration-300 group-hover:text-[#0071fe]">
                WeldHub
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs opacity-70">
              The premier marketplace for industrial welding technology and high-precision Welding systems.
            </p>
          </div>

          {/* Marketplace Column */}
          <div className="space-y-6">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">Marketplace</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products" className="hover:text-white transition-colors duration-300">All Products</Link></li>
              <li><Link href="/products?category=Laser Welding" className="hover:text-white transition-colors duration-300">Laser Welding</Link></li>
              <li><Link href="/products?category=NDT Eqipments" className="hover:text-white transition-colors duration-300">NDT Eqipments</Link></li>
              <li><Link href="/products?category=Robotic Arms" className="hover:text-white transition-colors duration-300">Robotic Welding</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link href="/request-quote" className="hover:text-white transition-colors duration-300">Request Quote</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="opacity-70">Edmonton, AB, Canada</p>
              <a href="tel:7808006297" className="block hover:text-white transition-colors">+1-780-800-6297</a>
              <a href="mailto:sales@engrity.com" className="block hover:text-white transition-colors">sales@engrity.com</a>
            </div>
          </div>
        </div>

        {/* 2. GIGANTIC TEXT SECTION */}
        <div className="w-full flex justify-center py-10 md:py-20 border-t border-white/5">
          <h2 className="
            text-[24vw] leading-none font-medium tracking-tighter text-white/5
            transition-all duration-700 ease-in-out cursor-default
            hover:text-white hover:tracking-normal
          ">
            WELDHUB
          </h2>
        </div>

        {/* 3. BOTTOM BAR: Legal & Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-8 border-t border-white/5">
          
          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-[11px] font-medium uppercase tracking-widest opacity-50">
            <p>© {currentYear} WELDHUB</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>

          {/* Social Icons (Keeping your requested socials) */}
          <div className="flex gap-8">
            {socials.map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white hover:scale-110 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}