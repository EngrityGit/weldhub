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
  title: 'WeldHub — Canada’s Welding & NDT Equipment Marketplace',
  description:
    'The leading Canadian marketplace for laser welding systems and NDT equipment. Serving all provinces from Alberta, BC to Ontario and Quebec. Buy, sell, or request quotes for certified industrial systems.',
  keywords: [
    'welding equipment Canada',
    'NDT equipment Ontario',
    'laser welding systems Alberta',
    'industrial equipment BC',
    'weld inspection Quebec',
    'non-destructive testing Canada',
    'Canadian welding marketplace',
    'Engrity WeldHub',
  ],
  canonicalUrl: '/',
  ogImage: '/images/og-image.jpg',
})

export const productsMetadata: Metadata = buildMetadata({
  title: 'Welding & NDT Equipment Canada — All Provinces | WeldHub',
  description:
    'Browse our nationwide catalog of laser welders, NDT systems, and robotic arms. Certified equipment available for shipping to Toronto, Calgary, Vancouver, Montreal, and across all Canadian provinces.',
  keywords: [
    'buy welding gear Canada',
    'NDT supplies Toronto',
    'laser welders Calgary',
    'welding automation Vancouver',
    'phased array UT Canada',
    'industrial supplies Montreal',
    'Saskatchewan industrial equipment',
    'Manitoba welding systems',
  ],
  canonicalUrl: '/products',
  ogImage: '/images/og-image.jpg',
})

export const requestQuoteMetadata: Metadata = buildMetadata({
  title: 'Request a Quote — Shipping Across All Canadian Provinces | WeldHub',
  description:
    'Get custom pricing on welding and NDT systems with shipping available to every province in Canada. Our technical team provides fast quotes for Canadian industrial projects.',
  keywords: [
    'welding quote Canada',
    'NDT equipment pricing Canada',
    'industrial equipment RFQ Ontario',
    'Alberta welding supplies quote',
    'Canada-wide industrial shipping',
  ],
  canonicalUrl: '/request-quote',
  ogImage: '/images/og-image.jpg',
})

export const privacyMetadata: Metadata = buildMetadata({
  title: 'Privacy Policy | WeldHub Canada',
  description:
    'Read how WeldHub protects the data of our Canadian users and partners across the industrial welding and NDT sectors.',
  keywords: ['privacy policy Canada', 'PIPEDA compliance', 'WeldHub privacy', 'data protection Canada'],
  canonicalUrl: '/privacy',
})

export const termsMetadata: Metadata = buildMetadata({
  title: 'Terms & Conditions | WeldHub Canada Marketplace',
  description:
    'Review the terms governing the purchase and sale of welding and NDT equipment within Canada on the WeldHub platform.',
  keywords: ['Canadian marketplace terms', 'WeldHub legal', 'industrial equipment sales Canada'],
  canonicalUrl: '/terms',
})

export const cookiesMetadata: Metadata = buildMetadata({
  title: 'Cookie Policy | WeldHub Canada',
  description:
    'Information on how WeldHub uses cookies to improve the experience for our Canadian welding and NDT industry clients.',
  keywords: ['cookie policy', 'WeldHub Canada cookies', 'user experience'],
  canonicalUrl: '/cookies',
})