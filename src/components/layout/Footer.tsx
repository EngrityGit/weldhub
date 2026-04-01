'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0f1115] text-gray-400 footer-rounded-top w-full min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Top Main Section with massive padding */}
      <div className="container-custom py-24 md:py-32 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Brand & Description */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/">
              <span className="font-be-vietnam font-extrabold text-4xl md:text-5xl tracking-tighter text-[#0071fe]">
                WeldHub
              </span>
            </Link>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-lg">
              The premier marketplace for industrial welding technology, thermal imaging, and high-precision inspection systems.
            </p>
            <div className="pt-4 flex flex-wrap gap-10">
              <div>
                <p className="text-white font-bold text-sm uppercase tracking-widest mb-2">Call Us</p>
                <a href="tel:7808006297" className="text-2xl text-white font-medium hover:text-[#0071fe] transition-colors">+1-780-800-6297</a>
              </div>
              <div>
                <p className="text-white font-bold text-sm uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:sales@engrity.com" className="text-2xl text-white font-medium hover:text-[#0071fe] transition-colors">sales@engrity.com</a>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h3 className="text-white font-bold text-lg">Marketplace</h3>
              <ul className="space-y-4 text-lg">
                <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
                <li><Link href="/products?category=Thermal" className="hover:text-white transition-colors">Thermal Imaging</Link></li>
                <li><Link href="/products?category=Cameras" className="hover:text-white transition-colors">Weld Cameras</Link></li>
                <li><Link href="/products?category=Inspection" className="hover:text-white transition-colors">Inspection</Link></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-white font-bold text-lg">Company</h3>
              <ul className="space-y-4 text-lg">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/request-quote" className="hover:text-white transition-colors">Request Quote</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-white font-bold text-lg">Location</h3>
              <p className="text-lg leading-relaxed">
                Edmonton, AB,<br />
                Canada
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Legal Bar */}
      <div className="border-t border-gray-800/50 py-12 bg-black/20 backdrop-blur-md">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-medium tracking-wide">
            © {currentYear} <span className="text-white font-bold">WELDHUB</span>. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10 text-xs font-bold uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-[#0071fe] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#0071fe] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}