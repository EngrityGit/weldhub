import Link from 'next/link'
import { getFeaturedProducts, getAllProducts } from '@/lib/products'
import ProductCard from '@/components/ui/ProductCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Industrial Weld Cameras & Thermal Imaging',
  description: 'Discover industrial-grade weld cameras, thermal imaging systems, and inspection solutions. Precision technology for welding and manufacturing.',
}

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()
  const allProducts = getAllProducts()
  const otherProducts = allProducts.filter(p => !p.featured)

  return (
    <>
      {/* Hero Section - Minimal & Modern */}
      <section className="relative bg-white overflow-hidden">
        <div className="container-custom py-20 md:py-28 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-blue-600">Industry Leading Technology</span>
            </div>
            
            <h1 className="heading-1 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Industrial Weld Cameras &{' '}
              <span className="text-blue-600">Thermal Imaging</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Precision monitoring technology for welding, additive manufacturing, and quality control applications. Trusted by industry leaders worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link href="/products" className="btn btn-primary text-base px-8 py-4">
                Explore Products
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/request-quote" className="btn btn-outline text-base px-8 py-4">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements - Subtle */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-64 h-64 bg-purple-600 rounded-full blur-3xl" />
        </div>
      </section>


      {/* Promotional Banner */}
      <section className="py-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Special Offer - Q1 2026</h3>
                <p className="text-sm text-blue-100">Get custom quotes with priority support for new Request</p>
              </div>
            </div>
            <Link href="/request-quote" className="btn bg-white text-blue-600 hover:bg-blue-50 whitespace-nowrap">
              Get Your Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="heading-2 mb-3">Featured Products</h2>
              <p className="text-lg text-gray-600">
                Explore our most popular industrial cameras and systems
              </p>
            </div>
            <Link 
              href="/products" 
              className="btn btn-outline mt-6 md:mt-0 group"
            >
              View All Products
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product, idx) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section ">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Why Choose WeldHub?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-leading technology trusted by manufacturers worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Precision Technology',
                description: 'High-resolution imaging with HDR capability for clear visibility in challenging environments'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Real-Time Monitoring',
                description: 'Instant feedback for process control and quality assurance in production environments'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
                title: 'Industry Solutions',
                description: 'Specialized solutions for welding, additive manufacturing, and quality inspection'
              },
            ].map((feature, idx) => (
              <div key={idx} className="card p-8 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Section */}
      {otherProducts.length > 0 && (
        <section className="section">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="heading-2 mb-3">More Products</h2>
              <p className="text-lg text-gray-600">
                Discover our complete range of industrial solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {otherProducts.map((product, idx) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Request a quote today and discover how our solutions can improve your manufacturing process
          </p>
          <Link href="/request-quote" className="btn bg-white text-blue-600 hover:bg-blue-50 text-lg px-10 py-4 shadow-xl hover:shadow-2xl">
            Request a Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

    </>
  )
}