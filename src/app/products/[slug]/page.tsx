import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProductBySlug, getAllProducts } from '@/lib/products'
import { buildMetadata } from '@/components/seo/SEOComponent'
import { ProductStructuredData, BreadcrumbSchema } from '@/components/seo/StructuredData'
import ProductDetailClient from './ProductDetailClient' 

// ─── Static Params ─────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({ slug: product.slug }))
}

// ─── Dynamic Metadata ──────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return { title: 'Product Not Found | WeldHub' }
  }

  const { seo } = product
  return buildMetadata({
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    ogImage: seo.ogImage,
    canonicalUrl: seo.canonicalUrl,
  })
}

// ─── Page Component ─────────────────────────────────────────────────────────
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <ProductStructuredData product={product} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: product.name, url: `/products/${product.slug}` },
        ]}
      />

      {/* IMPORTANT: Pass the product data as a prop here */}
      <ProductDetailClient product={product} />
    </>
  )
}