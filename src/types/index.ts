export interface Product {
  id: string
  slug: string
  name: string
  description: string
  longDescription: string
  price: string
  category: string
  brand: string
  badge?: string

  images: string[]

  videos: {
    url: string
    thumbnail: string
    title: string
    duration: string
  }[]

  specifications: Record<string, string>

  features: string[]
  applications: string[]

  seller: {
    name: string
    logo: string | null
    avatar: string | null
    rating: number
    totalReviews: number
    location: string
    verified: boolean
    establishedYear: number
    description: string
    website: string
    email: string
    phone: string
  }

  inStock: boolean
  featured: boolean
  createdAt: string

  seo: {
    title: string
    description: string
    keywords: string[]
    ogImage: string
    canonicalUrl: string
  }
}


export interface FilterOptions {
  categories: string[]
  brands: string[]
  priceRange: {
    min: number
    max: number
  }
}

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'newest'

export interface QuoteRequest {
  name: string
  email: string
  phone: string
  company?: string
  productId: string
  productName: string
  quantity: number
  message: string
}