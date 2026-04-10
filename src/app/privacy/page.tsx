// app/privacy/page.tsx
import type { Metadata } from 'next'
import { privacyMetadata } from '@/components/seo/SEOComponent'
import Link from 'next/link'

export const metadata: Metadata = privacyMetadata

const LAST_UPDATED = 'April 10, 2026'
const COMPANY = 'Engrity Inc.'
const SITE = 'WeldHub'
const EMAIL = 'privacy@engrity.com'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#0071fe] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-blue-100 text-lg">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* Quick Nav */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-5">Contents</h2>
          <ol className="space-y-2">
            {[
              ['1', 'Who We Are'],
              ['2', 'Information We Collect'],
              ['3', 'How We Use Your Information'],
              ['4', 'AI-Powered Features & Data Processing'],
              ['5', 'Cookies & Tracking Technologies'],
              ['6', 'How We Share Your Information'],
              ['7', 'Data Retention'],
              ['8', 'Your Rights'],
              ['9', 'Security'],
              ['10', 'Children\'s Privacy'],
              ['11', 'Changes to This Policy'],
              ['12', 'Contact Us'],
            ].map(([num, title]) => (
              <li key={num}>
                <a
                  href={`#section-${num}`}
                  className="text-[#0071fe] hover:underline font-medium text-sm"
                >
                  {num}. {title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-16">

          {/* Intro */}
          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-[#0071fe] pl-6">
            {COMPANY} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates {SITE} (weldhub.ca). 
            This Privacy Policy explains how we collect, use, disclose, and protect your personal information 
            when you visit or use our platform. By using {SITE}, you agree to the practices described in this policy.
          </p>

          <Section id="1" title="1. Who We Are">
            <p>
              {COMPANY} is a Canadian corporation operating {SITE}, an industrial equipment marketplace 
              connecting buyers with verified sellers of weld cameras, robotic systems, NDT equipment, 
              and related industrial products. Our registered address and data controller contact 
              is available at <a href={`mailto:${EMAIL}`} className="text-[#0071fe] hover:underline">{EMAIL}</a>.
            </p>
          </Section>

          <Section id="2" title="2. Information We Collect">
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">2.1 Information You Provide Directly</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Quote Requests:</strong> Name, email address, phone number, company name, job title, country, and project requirements when you submit a quote request.</li>
              <li><strong>Account Registration:</strong> If you create an account, we collect login credentials and profile information.</li>
              <li><strong>Communications:</strong> Records of emails, support tickets, or messages you send to us.</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Usage Data:</strong> Pages viewed, time spent, links clicked, and navigation paths.</li>
              <li><strong>Device & Technical Data:</strong> IP address, browser type and version, operating system, screen resolution, and referring URLs.</li>
              <li><strong>Cookies & Tracking:</strong> See Section 5 for full details on our cookie practices.</li>
              <li><strong>Location Data:</strong> Approximate geographic location derived from your IP address.</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">2.3 Information from Third Parties</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analytics providers (e.g., Google Analytics) that supply aggregated insights about site traffic.</li>
              <li>Email delivery services used to process your quote confirmations.</li>
            </ul>
          </Section>

          <Section id="3" title="3. How We Use Your Information">
            <p>We use collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Processing Requests:</strong> Forwarding your quote requests to relevant sellers and following up on your behalf.</li>
              <li><strong>Communications:</strong> Sending confirmation emails, order updates, and responding to your inquiries.</li>
              <li><strong>Platform Improvement:</strong> Analyzing usage patterns to improve site performance, search relevance, and product listings.</li>
              <li><strong>Marketing (with consent):</strong> Sending newsletters or product announcements where you have opted in. You may unsubscribe at any time.</li>
              <li><strong>Legal Compliance:</strong> Meeting obligations under applicable Canadian and international law.</li>
              <li><strong>Fraud Prevention:</strong> Detecting and preventing fraudulent transactions or misuse of our platform.</li>
            </ul>
          </Section>

          <Section id="4" title="4. AI-Powered Features & Data Processing">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-4">
              <p className="text-blue-900 font-semibold text-sm uppercase tracking-wide mb-2">AI Processing Notice</p>
              <p className="text-blue-800">
                {SITE} uses and may expand the use of artificial intelligence (AI) features to enhance your experience. 
                Please read this section carefully.
              </p>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">4.1 Current AI Uses</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Search &amp; Recommendations:</strong> AI algorithms may analyze your browsing behavior and search queries to surface relevant products and categories.</li>
              <li><strong>Quote Matching:</strong> Automated systems may help route your quote requests to the most appropriate seller based on your stated requirements.</li>
              <li><strong>Content Generation:</strong> Product descriptions and metadata may be generated or enhanced using AI language models.</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">4.2 Future AI Features</h3>
            <p>
              We are developing additional AI-powered capabilities that may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Personalized product discovery based on your industry and past interactions.</li>
              <li>Intelligent quote comparison tools.</li>
              <li>AI-assisted customer support chat.</li>
              <li>Predictive analytics for pricing and availability.</li>
            </ul>
            <p className="mt-4">
              When we introduce new AI features that materially affect how your data is used, we will update this 
              Privacy Policy and notify you by email or prominent notice on the site at least 30 days in advance.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">4.3 Data Used for AI Training</h3>
            <p>
              We do <strong>not</strong> sell your personal data to third-party AI model trainers. 
              Aggregated, anonymized usage patterns (not linked to any identifiable person) may be 
              used to improve our own recommendation systems. You may opt out of this use by contacting 
              <a href={`mailto:${EMAIL}`} className="text-[#0071fe] hover:underline ml-1">{EMAIL}</a>.
            </p>
          </Section>

          <Section id="5" title="5. Cookies & Tracking Technologies">
            <p>
              We use cookies and similar technologies on {SITE}. For full details on the cookies we use, 
              your choices, and how to manage them, please see our{' '}
              <Link href="/cookies" className="text-[#0071fe] hover:underline font-semibold">Cookie Policy</Link>.
            </p>
          </Section>

          <Section id="6" title="6. How We Share Your Information">
            <p>We do not sell your personal information. We share data only in these circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>With Sellers:</strong> When you submit a quote request, relevant contact and project information is shared with the seller(s) you have expressed interest in.</li>
              <li><strong>Service Providers:</strong> Trusted third parties who help us operate the platform (email delivery, analytics, hosting) under strict confidentiality obligations.</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and the safety of others.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the successor entity with prior notice.</li>
            </ul>
          </Section>

          <Section id="7" title="7. Data Retention">
            <p>
              We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, 
              typically no longer than 3 years after your last interaction with us. Quote request data 
              is retained for 24 months. You may request deletion at any time (see Section 8).
            </p>
          </Section>

          <Section id="8" title="8. Your Rights">
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Request erasure of your personal data, subject to legal retention requirements.</li>
              <li><strong>Portability:</strong> Receive your data in a structured, commonly used format.</li>
              <li><strong>Opt-Out:</strong> Withdraw consent for marketing communications at any time.</li>
              <li><strong>Complaint:</strong> Lodge a complaint with your local data protection authority.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{' '}
              <a href={`mailto:${EMAIL}`} className="text-[#0071fe] hover:underline">{EMAIL}</a>. 
              We will respond within 30 days.
            </p>
          </Section>

          <Section id="9" title="9. Security">
            <p>
              We implement industry-standard security measures including HTTPS encryption, access controls, 
              and regular security assessments. However, no method of transmission over the Internet is 
              100% secure, and we cannot guarantee absolute security. If a data breach occurs that affects 
              your rights, we will notify you as required by applicable law.
            </p>
          </Section>

          <Section id="10" title="10. Children's Privacy">
            <p>
              {SITE} is intended for business and professional use only. We do not knowingly collect 
              personal information from individuals under 18 years of age. If you believe a minor has 
              provided us with personal data, please contact us immediately.
            </p>
          </Section>

          <Section id="11" title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Material changes will be communicated 
              via email or a prominent notice on our website at least 30 days before taking effect. 
              The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.
            </p>
          </Section>

          <Section id="12" title="12. Contact Us">
            <p>If you have any questions about this Privacy Policy, please contact:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-4 space-y-2">
              <p><strong>{COMPANY}</strong> — Privacy Officer</p>
              <p>Email: <a href={`mailto:${EMAIL}`} className="text-[#0071fe] hover:underline">{EMAIL}</a></p>
              <p>General: <a href="mailto:sales@engrity.com" className="text-[#0071fe] hover:underline">sales@engrity.com</a></p>
              <p>Phone: <a href="tel:+17808006297" className="text-[#0071fe] hover:underline">+1 (780) 800-6297</a></p>
            </div>
          </Section>

        </div>

        {/* Footer Links */}
        <div className="mt-20 pt-10 border-t border-gray-200 flex flex-wrap gap-6 text-sm text-gray-500">
          <Link href="/terms" className="hover:text-[#0071fe] transition-colors font-medium">Terms & Conditions</Link>
          <Link href="/cookies" className="hover:text-[#0071fe] transition-colors font-medium">Cookie Policy</Link>
          <Link href="/products" className="hover:text-[#0071fe] transition-colors font-medium">Browse Products</Link>
        </div>
      </div>
    </div>
  )
}

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={`section-${id}`} className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-3 border-b border-gray-100">{title}</h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
    </section>
  )
}