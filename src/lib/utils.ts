// Utility functions for the e-commerce site

/**
 * Format price to USD currency
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(price)
}

/**
 * Format date to readable string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

/**
 * Generate SEO-friendly slug from string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

/**
 * Get badge color class based on badge type
 */
export function getBadgeClass(badge: string): string {
  const badges: Record<string, string> = {
    'PREMIUM': 'badge-premium',
    'NEW': 'badge-new',
    'INDUSTRIAL': 'badge-industrial',
    'COMPACT': 'badge-compact',
    'PRECISION': 'badge-precision',
  }
  return badges[badge] || 'bg-gray-200 text-gray-800'
}

/**
 * Generate initials from name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

/**
 * Debounce function for search inputs
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Check if string is valid email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Check if string is valid phone number
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
}

/**
 * Generate star rating HTML
 */
export function getStarRating(rating: number): string {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
  
  return '★'.repeat(fullStars) + 
         (hasHalfStar ? '½' : '') + 
         '☆'.repeat(emptyStars)
}

/**
 * Calculate reading time for content
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

/**
 * Generate SEO metadata
 */
export function generateMetadata(
  title: string,
  description: string,
  image?: string,
  url?: string
) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'E-Commerce Store'
  
  return {
    title: `${title} | ${siteName}`,
    description,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : [],
      url: url ? `${siteUrl}${url}` : siteUrl,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
    },
    alternates: {
      canonical: url ? `${siteUrl}${url}` : siteUrl,
    },
  }
}

/**
 * Create JSON-LD structured data for products
 */
export function createProductJsonLd(product: {
  name: string
  description: string
  image: string
  price: number
  brand: string
  seller: { name: string; rating: number; totalReviews: number }
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: product.seller.name,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.seller.rating,
      reviewCount: product.seller.totalReviews,
    },
    url: product.url,
  }
}

/**
 * CN utility for merging Tailwind classes
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}