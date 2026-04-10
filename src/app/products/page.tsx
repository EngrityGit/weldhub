// app/products/page.tsx  ← server (NEW wrapper)
import type { Metadata } from 'next'
import { productsMetadata } from '@/components/seo/SEOComponent'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = productsMetadata
export default function ProductsPage() { return <ProductsClient /> }