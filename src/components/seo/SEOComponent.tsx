// components/seo/SEOComponent.tsx
// This is a utility file — not a React component you render directly.
// Next.js App Router uses generateMetadata() functions in each page/layout.
// This helper generates consistent Metadata objects from your product SEO data.

import type { Metadata } from 'next'

const BASE_URL = 'https://weldhub.ca'
const SITE_NAME = 'WeldHub by Engrity'
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-image.jpg`

// ─── Types ─────────────────────────────────────────────────────────────────

export interface PageSEOProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
  noIndex?: boolean
}

// ─── Core helper ───────────────────────────────────────────────────────────

export function buildMetadata({
  title,
  description,
  keywords = [],
  ogImage,
  canonicalUrl,
  noIndex = false,
}: PageSEOProps): Metadata {
  const resolvedImage = ogImage?.startsWith('http')
    ? ogImage
    : ogImage
    ? `${BASE_URL}${ogImage}`
    : DEFAULT_OG_IMAGE

  const resolvedCanonical = canonicalUrl?.startsWith('http')
    ? canonicalUrl
    : canonicalUrl
    ? `${BASE_URL}${canonicalUrl}`
    : BASE_URL

  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: resolvedCanonical,
    },
    openGraph: {
      type: 'website',
      locale: 'en_CA',
      url: resolvedCanonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [resolvedImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
  }
}

// ─── Pre-built page metadata ────────────────────────────────────────────────

export const homeMetadata: Metadata = buildMetadata({
  title: 'WeldHub — Industrial Equipment Marketplace | Engrity',
  description:
    'Buy and request quotes for certified industrial weld cameras, thermal imaging systems, robotic arms, and NDT equipment. Verified sellers. Fast quotes.',
  keywords: [
    'industrial equipment marketplace',
    'weld cameras Canada',
    'thermal imaging systems',
    'robotic welding arms',
    'NDT equipment',
    'inspection systems',
    'welding automation',
    'Engrity WeldHub',
  ],
  canonicalUrl: '/',
  ogImage: '/images/og-image.jpg',
})

export const productsMetadata: Metadata = buildMetadata({
  title: 'All Industrial Products — Weld Cameras, Robotics & NDT | WeldHub',
  description:
    'Browse our full catalog of certified industrial products including SWIR thermal cameras, robotic welding arms, phased array NDT systems, GPR controllers, and more.',
  keywords: [
    'industrial products',
    'weld cameras',
    'robotic arms',
    'NDT equipment',
    'thermal cameras',
    'phased array UT',
    'GPR controllers',
    'XRF analyzers',
  ],
  canonicalUrl: '/products',
  ogImage: '/images/og-image.jpg',
})

export const requestQuoteMetadata: Metadata = buildMetadata({
  title: 'Request a Custom Quote — Industrial Equipment | WeldHub',
  description:
    'Submit a quote request for any industrial product on WeldHub. Our team responds within 24 hours with customized pricing, technical consultation, and flexible terms.',
  keywords: [
    'request quote industrial equipment',
    'weld camera quote',
    'robotic arm pricing',
    'NDT equipment rental',
    'Engrity quote',
  ],
  canonicalUrl: '/request-quote',
  ogImage: '/images/og-image.jpg',
})

export const privacyMetadata: Metadata = buildMetadata({
  title: 'Privacy Policy | WeldHub by Engrity',
  description:
    'Read the WeldHub Privacy Policy to understand how we collect, use, and protect your personal data, including AI-assisted features.',
  keywords: ['privacy policy', 'WeldHub privacy', 'data protection', 'Engrity privacy'],
  canonicalUrl: '/privacy',
})

export const termsMetadata: Metadata = buildMetadata({
  title: 'Terms & Conditions | WeldHub by Engrity',
  description:
    'Review the WeldHub Terms and Conditions governing use of our industrial equipment marketplace, including purchase terms and seller obligations.',
  keywords: ['terms and conditions', 'WeldHub terms', 'marketplace terms', 'Engrity legal'],
  canonicalUrl: '/terms',
})

export const cookiesMetadata: Metadata = buildMetadata({
  title: 'Cookie Policy | WeldHub by Engrity',
  description:
    'Learn how WeldHub uses cookies and similar technologies, including AI-powered features, to improve your experience on our platform.',
  keywords: ['cookie policy', 'WeldHub cookies', 'AI data collection', 'Engrity cookies'],
  canonicalUrl: '/cookies',
})