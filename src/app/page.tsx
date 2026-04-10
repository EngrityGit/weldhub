// app/products/page.tsx  ← server (NEW wrapper)
import type { Metadata } from 'next'
import { homeMetadata } from '@/components/seo/SEOComponent'
import { WebsiteSchema, OrganizationSchema } from '@/components/seo/StructuredData'
import HomeClient from './HomeClient'

export const metadata: Metadata = homeMetadata
export default function HomePage() { return <HomeClient /> }