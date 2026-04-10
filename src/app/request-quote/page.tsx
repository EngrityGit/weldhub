// app/products/page.tsx  ← server (NEW wrapper)
import type { Metadata } from 'next'
import { requestQuoteMetadata } from '@/components/seo/SEOComponent'
import QuoteClient from './QuoteClient'

export const metadata: Metadata = requestQuoteMetadata
export default function RequestQuotePage() { return <QuoteClient /> }