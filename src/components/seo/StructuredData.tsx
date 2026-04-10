// components/seo/StructuredData.tsx
// Drop-in components for JSON-LD schema markup.
// Usage: <ProductStructuredData product={product} />

import { Product } from '@/types'

const BASE_URL = 'https://weldhub.ca'

// ─── Organization Schema (used in layout) ──────────────────────────────────
export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Engrity WeldHub',
          url: BASE_URL,
          logo: `${BASE_URL}/WeldHub.svg`,
          description:
            'Canada\'s leading industrial equipment marketplace for weld cameras, robotic systems, and NDT inspection tools.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Edmonton',
            addressRegion: 'AB',
            addressCountry: 'CA',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-780-800-6297',
            contactType: 'sales',
            email: 'sales@engrity.com',
            availableLanguage: 'English',
          },
          sameAs: ['https://www.engrity.com'],
        }),
      }}
    />
  )
}

// ─── Website Search Schema ──────────────────────────────────────────────────
export function WebsiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'WeldHub by Engrity',
          url: BASE_URL,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${BASE_URL}/products?search={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        }),
      }}
    />
  )
}

// ─── Product Schema ─────────────────────────────────────────────────────────
export function ProductStructuredData({ product }: { product: Product }) {
  const resolvedImage = product.images[0]?.startsWith('http')
    ? product.images[0]
    : `${BASE_URL}${product.images[0]}`

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.description,
          image: product.images.map((img) =>
            img.startsWith('http') ? img : `${BASE_URL}${img}`
          ),
          brand: {
            '@type': 'Brand',
            name: product.brand,
          },
          sku: product.id,
          url: `${BASE_URL}/products/${product.slug}`,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'CAD',
            price: '0',
            priceSpecification: {
              '@type': 'PriceSpecification',
              description: 'Contact for pricing',
            },
            availability: product.inStock
              ? 'https://schema.org/InStock'
              : 'https://schema.org/OutOfStock',
            seller: {
              '@type': 'Organization',
              name: product.seller.name,
              url: product.seller.website,
            },
            url: `${BASE_URL}/products/${product.slug}`,
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.seller.rating,
            reviewCount: product.seller.totalReviews,
          },
          additionalProperty: Object.entries(product.specifications).map(([name, value]) => ({
            '@type': 'PropertyValue',
            name,
            value,
          })),
        }),
      }}
    />
  )
}

// ─── Breadcrumb Schema ──────────────────────────────────────────────────────
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
          })),
        }),
      }}
    />
  )
}