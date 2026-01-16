import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Site-wide SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'WeldHub - Industrial Weld Cameras & Thermal Imaging',
    template: '%s | WeldHub',
  },
  description: 'Leading manufacturer of industrial weld cameras, thermal imaging systems, and inspection solutions for welding, additive manufacturing, and quality control.',
  keywords: [
    'weld cameras',
    'thermal imaging',
    'industrial cameras',
    'welding inspection',
    'SWIR cameras',
    'metal additive manufacturing',
    'weld monitoring',
    'quality control'
  ],
  authors: [{ name: 'WeldHub' }],
  creator: 'WeldHub',
  publisher: 'WeldHub',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'WeldHub',
    title: 'WeldHub - Industrial Weld Cameras & Thermal Imaging',
    description: 'Leading manufacturer of industrial weld cameras, thermal imaging systems, and inspection solutions.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WeldHub Products',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'WeldHub - Industrial Weld Cameras',
    description: 'Leading manufacturer of industrial weld cameras and thermal imaging systems.',
    images: ['/images/og-image.jpg'],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons
  icons: {
    icon: '/WeldHub.svg',
    shortcut: '/WeldHub.svg',
    apple: '/WeldHub.svg',
  },
  
  // Manifest
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0071fe" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <CartProvider>
          {/* Skip to main content for accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
          >
            Skip to main content
          </a>
          
          <div className="flex flex-col min-h-screen">
            <Header />
            
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            
            <Footer />
          </div>
          
          {/* Structured Data for Organization */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'WeldHub',
                url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
                logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/WeldHub.svg`,
                description: 'Leading manufacturer of industrial weld cameras and thermal imaging systems',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Burlington',
                  addressRegion: 'ON',
                  addressCountry: 'CA',
                },
              }),
            }}
          />
        </CartProvider>
      </body>
    </html>
  )
}