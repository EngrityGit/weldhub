// app/terms/page.tsx
import type { Metadata } from 'next'
import { termsMetadata } from '@/components/seo/SEOComponent'
import Link from 'next/link'

export const metadata: Metadata = termsMetadata

const LAST_UPDATED = 'April 10, 2026'
const COMPANY = 'Engrity Inc.'
const SITE = 'WeldHub'
const EMAIL = 'legal@engrity.com'
const BASE_URL = 'https://weldhub.ca'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Terms &amp; Conditions</h1>
          <p className="text-gray-400 text-lg">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* Quick Nav */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-5">Contents</h2>
          <ol className="space-y-2 columns-2">
            {[
              ['1', 'Acceptance of Terms'],
              ['2', 'Platform Description'],
              ['3', 'Eligibility'],
              ['4', 'User Accounts'],
              ['5', 'Buyer Obligations'],
              ['6', 'Seller Obligations'],
              ['7', 'Quote Requests & Transactions'],
              ['8', 'AI Features & Disclaimer'],
              ['9', 'Intellectual Property'],
              ['10', 'Prohibited Conduct'],
              ['11', 'Disclaimers'],
              ['12', 'Limitation of Liability'],
              ['13', 'Indemnification'],
              ['14', 'Governing Law'],
              ['15', 'Changes to Terms'],
              ['16', 'Contact'],
            ].map(([num, title]) => (
              <li key={num}>
                <a href={`#term-${num}`} className="text-gray-800 hover:text-gray-900 font-medium text-sm hover:underline">
                  {num}. {title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Intro */}
        <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-gray-900 pl-6 mb-16">
          These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of {SITE} 
          (weldhub.ca), operated by {COMPANY}. By accessing the platform, you agree to be bound by these Terms. 
          If you do not agree, do not use {SITE}.
        </p>

        <div className="space-y-16 text-gray-700">

          <Term id="1" title="1. Acceptance of Terms">
            <p>
              By using {SITE}, you confirm that you have read, understood, and agree to these Terms and our 
              <Link href="/privacy" className="text-gray-900 font-semibold hover:underline mx-1">Privacy Policy</Link> 
              and <Link href="/cookies" className="text-gray-900 font-semibold hover:underline mx-1">Cookie Policy</Link>.
              These Terms form a legally binding agreement between you and {COMPANY}.
            </p>
          </Term>

          <Term id="2" title="2. Platform Description">
            <p>
              {SITE} is an industrial equipment marketplace that connects buyers with verified sellers 
              of weld cameras, robotic welding systems, NDT inspection equipment, and related industrial 
              products. {COMPANY} acts as a marketplace facilitator and is not itself a seller of products 
              unless expressly stated.
            </p>
          </Term>

          <Term id="3" title="3. Eligibility">
            <p>
              You must be at least 18 years old and have the legal authority to enter into binding contracts 
              on behalf of yourself or the organization you represent. By using {SITE}, you represent and 
              warrant that you meet these requirements.
            </p>
          </Term>

          <Term id="4" title="4. User Accounts">
            <ul className="list-disc pl-6 space-y-2">
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You agree to notify us immediately of any unauthorized use of your account.</li>
              <li>You are responsible for all activities that occur under your account.</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
            </ul>
          </Term>

          <Term id="5" title="5. Buyer Obligations">
            <p>As a buyer on {SITE}, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Provide accurate and complete information in all quote requests.</li>
              <li>Use product and seller information solely for legitimate procurement purposes.</li>
              <li>Not contact sellers for purposes unrelated to the equipment listed on {SITE}.</li>
              <li>Honor good-faith engagements initiated through the platform.</li>
            </ul>
          </Term>

          <Term id="6" title="6. Seller Obligations">
            <p>Verified sellers on {SITE} agree to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>List only products they are authorized to sell and that meet the described specifications.</li>
              <li>Respond to quote requests in a timely and professional manner.</li>
              <li>Maintain accurate pricing, availability, and product information.</li>
              <li>Comply with all applicable laws, including export controls and product safety regulations.</li>
              <li>Not engage in deceptive practices or misrepresent products.</li>
            </ul>
          </Term>

          <Term id="7" title="7. Quote Requests & Transactions">
            <p>
              {SITE} facilitates introductions between buyers and sellers via quote requests. The submission 
              of a quote request does not constitute a binding purchase order. Transactions are finalized 
              directly between the buyer and seller. {COMPANY} is not a party to any transaction and is 
              not responsible for the quality, safety, legality, or delivery of any products purchased 
              through the platform.
            </p>
          </Term>

          <Term id="8" title="8. AI Features & Disclaimer">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-4">
              <p className="font-semibold text-amber-900 text-sm uppercase tracking-wide mb-2">AI Feature Notice</p>
              <p className="text-amber-800 text-sm">
                {SITE} uses and plans to expand artificial intelligence features. Please review this section carefully.
              </p>
            </div>
            <p className="mt-4">
              {SITE} uses AI-powered systems for product recommendations, search relevance, 
              and content enhancement. These features are provided for convenience and informational purposes only.
            </p>
            <p className="mt-3">
              <strong>AI-generated content</strong> (including product descriptions, recommendations, and 
              any automated responses) is provided &ldquo;as is&rdquo; and may not always be accurate, complete, 
              or up to date. You should independently verify all technical specifications and product 
              details before making any purchasing decision.
            </p>
            <p className="mt-3">
              We do not guarantee that AI-generated recommendations will meet your specific requirements. 
              {COMPANY} is not liable for decisions made based on AI-generated content.
            </p>
            <p className="mt-3">
              As we expand AI capabilities, we will update these Terms and our Privacy Policy accordingly. 
              Continued use of the platform after such updates constitutes acceptance.
            </p>
          </Term>

          <Term id="9" title="9. Intellectual Property">
            <p>
              All content on {SITE} — including but not limited to logos, text, product images, 
              database structures, and software — is the property of {COMPANY} or its licensors and 
              is protected by Canadian and international intellectual property laws.
            </p>
            <p className="mt-3">
              You may not reproduce, distribute, modify, or create derivative works from any {SITE} 
              content without our express written permission. Product images and descriptions provided 
              by sellers remain the intellectual property of the respective sellers or manufacturers.
            </p>
          </Term>

          <Term id="10" title="10. Prohibited Conduct">
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Use automated bots, scrapers, or tools to extract data from {SITE} without permission.</li>
              <li>Attempt to gain unauthorized access to any part of our systems.</li>
              <li>Post false, misleading, or fraudulent information.</li>
              <li>Harass, abuse, or harm other users or sellers.</li>
              <li>Circumvent our platform to avoid marketplace fees or terms.</li>
              <li>Use {SITE} for any unlawful purpose or in violation of any applicable regulations.</li>
              <li>Introduce malware, viruses, or other malicious code.</li>
            </ul>
          </Term>

          <Term id="11" title="11. Disclaimers">
            <p>
              <strong>AS IS BASIS:</strong> {SITE} is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; 
              without warranties of any kind, either express or implied, including but not limited to 
              warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p className="mt-3">
              We do not warrant that the platform will be uninterrupted, error-free, or free of viruses. 
              Product information is provided by sellers and we make no independent verification of 
              specifications, certifications, or compliance claims.
            </p>
          </Term>

          <Term id="12" title="12. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, {COMPANY}, its directors, employees, 
              partners, and agents shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages — including loss of profits, data, or goodwill — 
              arising from your use of {SITE} or any products acquired through it.
            </p>
            <p className="mt-3">
              Our total liability to you for any claim arising from or related to these Terms or 
              the platform shall not exceed the greater of CAD $100 or the fees paid by you to 
              {COMPANY} in the 12 months preceding the claim.
            </p>
          </Term>

          <Term id="13" title="13. Indemnification">
            <p>
              You agree to indemnify and hold harmless {COMPANY} and its affiliates from any claims, 
              damages, losses, and expenses (including reasonable legal fees) arising out of your 
              use of {SITE}, violation of these Terms, or infringement of any third-party rights.
            </p>
          </Term>

          <Term id="14" title="14. Governing Law">
            <p>
              These Terms are governed by the laws of the Province of Alberta and the federal laws 
              of Canada applicable therein, without regard to conflict of law principles. You agree 
              to submit to the exclusive jurisdiction of the courts of Alberta, Canada for any 
              disputes arising under these Terms.
            </p>
          </Term>

          <Term id="15" title="15. Changes to Terms">
            <p>
              We reserve the right to modify these Terms at any time. Material changes will be 
              communicated via email or a site notice at least 14 days in advance. Continued use 
              of {SITE} after changes take effect constitutes acceptance of the revised Terms.
            </p>
          </Term>

          <Term id="16" title="16. Contact">
            <p>For questions about these Terms:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-4 space-y-2">
              <p><strong>{COMPANY}</strong> — Legal</p>
              <p>Email: <a href={`mailto:${EMAIL}`} className="text-gray-900 font-semibold hover:underline">{EMAIL}</a></p>
              <p>General: <a href="mailto:sales@engrity.com" className="text-gray-900 font-semibold hover:underline">sales@engrity.com</a></p>
              <p>Phone: <a href="tel:+17808006297" className="text-gray-900 font-semibold hover:underline">+1 (780) 800-6297</a></p>
            </div>
          </Term>

        </div>

        {/* Footer Links */}
        <div className="mt-20 pt-10 border-t border-gray-200 flex flex-wrap gap-6 text-sm text-gray-500">
          <Link href="/privacy" className="hover:text-gray-900 transition-colors font-medium">Privacy Policy</Link>
          <Link href="/cookies" className="hover:text-gray-900 transition-colors font-medium">Cookie Policy</Link>
          <Link href="/products" className="hover:text-gray-900 transition-colors font-medium">Browse Products</Link>
        </div>
      </div>
    </div>
  )
}

function Term({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={`term-${id}`} className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-3 border-b border-gray-100">{title}</h2>
      <div className="space-y-4 leading-relaxed">{children}</div>
    </section>
  )
}