// app/cookies/page.tsx
import type { Metadata } from 'next'
import { cookiesMetadata } from '@/components/seo/SEOComponent'
import Link from 'next/link'

export const metadata: Metadata = cookiesMetadata

const LAST_UPDATED = 'April 10, 2026'
const COMPANY = 'Engrity Group Inc.'
const SITE = 'WeldHub'
const EMAIL = 'sales@engrity.com'

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Cookie Policy</h1>
          <p className="text-slate-400 text-lg">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* Intro */}
        <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-slate-800 pl-6 mb-16">
          This Cookie Policy explains how {COMPANY} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) 
          uses cookies and similar technologies on {SITE} (weldhub.ca). It also explains how these 
          technologies interact with our AI-powered platform features.
        </p>

        {/* Quick Nav */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-5">Contents</h2>
          <ol className="space-y-2">
            {[
              ['1', 'What Are Cookies?'],
              ['2', 'Cookies We Use'],
              ['3', 'Third-Party Cookies'],
              ['4', 'AI Features & Cookie-Collected Data'],
              ['5', 'How Long Cookies Last'],
              ['6', 'Your Cookie Choices'],
              ['7', 'Updates to This Policy'],
              ['8', 'Contact Us'],
            ].map(([num, title]) => (
              <li key={num}>
                <a href={`#cookie-${num}`} className="text-slate-700 hover:text-slate-900 font-medium text-sm hover:underline">
                  {num}. {title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-16 text-gray-700">

          <CookieSection id="1" title="1. What Are Cookies?">
            <p>
              Cookies are small text files placed on your device when you visit a website. They help 
              websites remember your preferences, keep you logged in, and understand how you use the site. 
              Similar technologies include web beacons, pixel tags, local storage, and session storage.
            </p>
            <p className="mt-3">
              Some cookies are set directly by us (first-party cookies); others are set by third-party 
              services we use (third-party cookies).
            </p>
          </CookieSection>

          <CookieSection id="2" title="2. Cookies We Use">
            <p className="mb-6">We categorize cookies by their purpose:</p>

            <CookieTable
              category="Strictly Necessary"
              color="green"
              description="Required for the website to function. Cannot be disabled."
              examples={[
                { name: 'session_id', purpose: 'Maintains your session as you navigate the site', duration: 'Session' },
                { name: 'csrf_token', purpose: 'Protects against cross-site request forgery attacks', duration: 'Session' },
                { name: 'cart_state', purpose: 'Remembers items in your quote request cart', duration: '7 days' },
              ]}
            />

            <CookieTable
              category="Performance & Analytics"
              color="blue"
              description="Help us understand how visitors interact with WeldHub so we can improve it."
              examples={[
                { name: '_ga', purpose: 'Google Analytics — distinguishes unique users', duration: '2 years' },
                { name: '_ga_*', purpose: 'Google Analytics — session persistence', duration: '2 years' },
                { name: '_gid', purpose: 'Google Analytics — identifies users within a 24h window', duration: '24 hours' },
                { name: 'wh_perf', purpose: 'Internal performance measurement (page load, errors)', duration: '30 days' },
              ]}
            />

            <CookieTable
              category="Functional"
              color="purple"
              description="Enable enhanced functionality and personalization."
              examples={[
                { name: 'wh_prefs', purpose: 'Stores your display preferences (grid/list view, filters)', duration: '1 year' },
                { name: 'wh_recent', purpose: 'Remembers recently viewed products', duration: '30 days' },
                { name: 'wh_lang', purpose: 'Stores your language preference', duration: '1 year' },
              ]}
            />

            <CookieTable
              category="AI & Personalization"
              color="amber"
              description="Power our AI-driven product recommendations and personalized experience features."
              examples={[
                { name: 'wh_ai_session', purpose: 'Tracks current session behavior for real-time AI recommendations', duration: 'Session' },
                { name: 'wh_ai_profile', purpose: 'Builds an anonymized interest profile for AI-powered product matching', duration: '90 days' },
                { name: 'wh_search_ctx', purpose: 'Stores recent search context to improve AI search results', duration: '7 days' },
              ]}
            />

            <CookieTable
              category="Marketing (Optional)"
              color="rose"
              description="Used to deliver relevant advertisements and track campaign performance. Only set with your consent."
              examples={[
                { name: '_fbp', purpose: 'Meta (Facebook) pixel — tracks conversions from ads', duration: '90 days' },
                { name: '_gcl_au', purpose: 'Google Ads — conversion tracking', duration: '90 days' },
                { name: 'li_fat_id', purpose: 'LinkedIn Insight Tag — B2B ad performance', duration: '30 days' },
              ]}
            />
          </CookieSection>

          <CookieSection id="3" title="3. Third-Party Cookies">
            <p>The following third parties may set cookies when you use {SITE}:</p>
            <div className="mt-5 space-y-4">
              {[
                { name: 'Google Analytics', purpose: 'Website analytics and behavior tracking', link: 'https://policies.google.com/privacy' },
                { name: 'Google Ads', purpose: 'Advertising campaign measurement', link: 'https://policies.google.com/privacy' },
                { name: 'Meta (Facebook)', purpose: 'Social media advertising pixel', link: 'https://www.facebook.com/privacy/policy' },
                { name: 'LinkedIn', purpose: 'Professional network advertising', link: 'https://www.linkedin.com/legal/privacy-policy' },
                { name: 'EmailJS', purpose: 'Email delivery service (no persistent cookie)', link: 'https://www.emailjs.com/legal/privacy-policy' },
              ].map((vendor) => (
                <div key={vendor.name} className="flex items-start justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div>
                    <p className="font-bold text-gray-900">{vendor.name}</p>
                    <p className="text-sm text-gray-600 mt-0.5">{vendor.purpose}</p>
                  </div>
                  <a
                    href={vendor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-700 font-semibold hover:underline ml-4 shrink-0"
                  >
                    Privacy Policy ↗
                  </a>
                </div>
              ))}
            </div>
          </CookieSection>

          <CookieSection id="4" title="4. AI Features & Cookie-Collected Data">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
              <p className="font-bold text-amber-900 mb-2">How AI Uses Cookie Data on WeldHub</p>
              <p className="text-amber-800 text-sm leading-relaxed">
                {SITE} uses artificial intelligence to enhance your experience. Cookie data plays a 
                central role in how these AI features work. Here&apos;s what you need to know:
              </p>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">4.1 Current AI Uses of Cookie Data</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Product Recommendations:</strong> Cookies like <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">wh_ai_profile</code> and <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">wh_ai_session</code> build 
                an anonymized behavioral profile used by our recommendation engine to surface products 
                relevant to your industry and interests.
              </li>
              <li>
                <strong>Search Personalization:</strong> Search history and click behavior stored via cookies 
                help our AI rank results more accurately for your specific use case.
              </li>
              <li>
                <strong>Session Context:</strong> Within a single session, AI models may receive context 
                from your browsing path (e.g., &ldquo;user viewed thermal cameras, then robotic arms&rdquo;) to 
                provide smarter cross-category suggestions.
              </li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">4.2 Future AI Uses (Planned)</h3>
            <p>As we develop {SITE}, we plan to introduce additional AI features that may use cookie 
            data for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Personalized quote pricing estimates based on your industry profile.</li>
              <li>AI chat assistant features that remember your product preferences across sessions.</li>
              <li>Predictive inventory alerts for equipment categories you frequently browse.</li>
              <li>Automated lead qualification signals shared with sellers (anonymized/aggregated).</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600 bg-gray-50 rounded-xl p-4 border border-gray-200">
              <strong>Important:</strong> Cookie-collected data used for AI purposes is processed in an 
              aggregated or pseudonymized form and is not sold to third-party AI model trainers. You can 
              opt out of AI personalization cookies at any time (see Section 6).
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">4.3 AI Data Processing Location</h3>
            <p>
              AI processing of cookie data may occur on servers located in Canada, the United States, 
              or the European Union depending on our service providers. All transfers comply with 
              applicable data protection laws.
            </p>
          </CookieSection>

          <CookieSection id="5" title="5. How Long Cookies Last">
            <p>Cookie lifespans vary by type:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Session cookies</strong> expire when you close your browser.</li>
              <li><strong>Persistent cookies</strong> remain for a set period (typically 30 days to 2 years) 
              unless you delete them manually.</li>
              <li><strong>AI personalization cookies</strong> persist for up to 90 days by default.</li>
            </ul>
          </CookieSection>

          <CookieSection id="6" title="6. Your Cookie Choices">
            <h3 className="text-lg font-bold text-gray-900 mb-3">6.1 Cookie Consent Banner</h3>
            <p>
              On your first visit, we display a cookie consent banner where you can accept all cookies, 
              reject optional cookies, or manage your preferences by category. You can revisit your 
              preferences at any time via the &ldquo;Cookie Settings&rdquo; link in our site footer.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">6.2 Browser Controls</h3>
            <p>Most browsers allow you to manage cookies through their settings. Common browser guides:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
              {[
                { name: 'Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                { name: 'Firefox', url: 'https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox' },
                { name: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
                { name: 'Edge', url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge' },
                { name: 'Opera', url: 'https://help.opera.com/en/latest/web-preferences/' },
              ].map((b) => (
                <a
                  key={b.name}
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-center rounded-xl bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-700 hover:border-gray-400 hover:bg-white transition-all"
                >
                  {b.name}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Note: Disabling strictly necessary cookies will impair site functionality.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">6.3 Opt-Out of AI Personalization</h3>
            <p>
              To opt out of AI personalization cookies specifically, you can email us at{' '}
              <a href={`mailto:${EMAIL}`} className="text-slate-800 font-semibold hover:underline">{EMAIL}</a>{' '}
              with the subject &ldquo;AI Cookie Opt-Out.&rdquo; We will process your request within 14 days and 
              delete your AI behavioral profile.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">6.4 Do Not Track</h3>
            <p>
              Some browsers send a &ldquo;Do Not Track&rdquo; (DNT) signal. Currently, there is no industry 
              standard for responding to DNT signals. We respond to DNT by not setting marketing cookies 
              when a DNT signal is detected.
            </p>
          </CookieSection>

          <CookieSection id="7" title="7. Updates to This Policy">
            <p>
              We may update this Cookie Policy as we introduce new features, cookies, or AI capabilities. 
              Material changes will be noted in the cookie consent banner and via email if you have an account. 
              The &ldquo;Last updated&rdquo; date at the top reflects the most current version.
            </p>
          </CookieSection>

          <CookieSection id="8" title="8. Contact Us">
            <p>For questions about our Cookie Policy or to exercise your cookie-related rights:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-4 space-y-2">
              <p><strong>{COMPANY}</strong> — Privacy Team</p>
              <p>Email: <a href={`mailto:${EMAIL}`} className="text-slate-800 font-semibold hover:underline">{EMAIL}</a></p>
              <p>General: <a href="mailto:sales@engrity.com" className="text-slate-800 font-semibold hover:underline">sales@engrity.com</a></p>
            </div>
          </CookieSection>

        </div>

        {/* Footer Links */}
        <div className="mt-20 pt-10 border-t border-gray-200 flex flex-wrap gap-6 text-sm text-gray-500">
          <Link href="/privacy" className="hover:text-gray-900 transition-colors font-medium">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-900 transition-colors font-medium">Terms & Conditions</Link>
          <Link href="/products" className="hover:text-gray-900 transition-colors font-medium">Browse Products</Link>
        </div>
      </div>
    </div>
  )
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function CookieSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={`cookie-${id}`} className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-3 border-b border-gray-100">{title}</h2>
      <div className="space-y-4 leading-relaxed">{children}</div>
    </section>
  )
}

const colorMap: Record<string, { badge: string; header: string }> = {
  green:  { badge: 'bg-green-100 text-green-800',  header: 'bg-green-50  border-green-200' },
  blue:   { badge: 'bg-blue-100  text-blue-800',   header: 'bg-blue-50   border-blue-200'  },
  purple: { badge: 'bg-purple-100 text-purple-800', header: 'bg-purple-50 border-purple-200' },
  amber:  { badge: 'bg-amber-100 text-amber-800',  header: 'bg-amber-50  border-amber-200' },
  rose:   { badge: 'bg-rose-100  text-rose-800',   header: 'bg-rose-50   border-rose-200'  },
}

function CookieTable({
  category,
  color,
  description,
  examples,
}: {
  category: string
  color: string
  description: string
  examples: { name: string; purpose: string; duration: string }[]
}) {
  const c = colorMap[color] ?? colorMap.blue
  return (
    <div className="mb-8 rounded-2xl border border-gray-200 overflow-hidden">
      <div className={`px-6 py-4 border-b ${c.header} border-gray-200 flex items-center gap-3`}>
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${c.badge}`}>
          {category}
        </span>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b border-gray-100">
          <tr>
            <th className="text-left px-6 py-3 font-bold text-gray-500 uppercase text-xs tracking-wide">Cookie Name</th>
            <th className="text-left px-6 py-3 font-bold text-gray-500 uppercase text-xs tracking-wide">Purpose</th>
            <th className="text-left px-6 py-3 font-bold text-gray-500 uppercase text-xs tracking-wide w-28">Duration</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {examples.map((row) => (
            <tr key={row.name} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <code className="bg-gray-100 px-2 py-0.5 rounded text-gray-800 text-xs">{row.name}</code>
              </td>
              <td className="px-6 py-4 text-gray-600">{row.purpose}</td>
              <td className="px-6 py-4 text-gray-500 font-medium">{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}