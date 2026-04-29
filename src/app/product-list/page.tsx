'use client'

import { useEffect, useState, useRef } from 'react'

const PDF_PATH = '/pdf/productlist2026.pdf'
const PDF_FILENAME = 'WeldHub-Product-List-2026.pdf'

// ── Types & Interfaces ──────────────────────────────────────────────────

interface TrackingProps {
  [key: string]: string | number | undefined;
  source?: string;
  medium?: string;
  campaign?: string;
  trigger?: 'auto' | 'manual';
}

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, props?: Record<string, string | number>) => void;
    plausible?: (eventName: string, options?: { props: Record<string, string | number> }) => void;
  }
}

// ── Analytics helper ──────────────────────────────────────────────────────

function cleanProps(props: TrackingProps): Record<string, string | number> {
  const clean: Record<string, string | number> = {};
  Object.entries(props).forEach(([key, value]) => {
    if (value !== undefined) {
      clean[key] = value;
    }
  });
  return clean;
}

function track(event: string, props?: TrackingProps) {
  try {
    if (typeof window === 'undefined') return
    const formattedProps = props ? cleanProps(props) : undefined;
    if (window.gtag) window.gtag('event', event, formattedProps);
    if (window.plausible) window.plausible(event, { props: formattedProps || {} });
  } catch (_) {}
}

function getUTMParams(): TrackingProps {
  if (typeof window === 'undefined') return {}
  const p = new URLSearchParams(window.location.search)
  return {
    source: p.get('utm_source') ?? 'direct',
    medium: p.get('utm_medium') ?? 'none',
    campaign: p.get('utm_campaign') ?? 'none',
  }
}

type BtnState = 'idle' | 'downloading' | 'done'

export default function ProductListPage() {
  const [btnState, setBtnState] = useState<BtnState>('idle')
  // Default to true to assume "Welcome Back" UI until session check confirms otherwise
  const [hasVisited, setHasVisited] = useState(true)
  const progressRef = useRef<HTMLSpanElement>(null)
  const hasTriggered = useRef(false) // Prevents double-download in Strict Mode

    function triggerDownload(trigger: 'auto' | 'manual' = 'manual') {
    track('brochure_download', { trigger, ...getUTMParams() })
    const a = document.createElement('a')
    a.href = PDF_PATH
    a.download = PDF_FILENAME
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  useEffect(() => {
    if (hasTriggered.current) return;
    
    const sessionKey = 'weldhub_visited_product_list'
    const alreadyVisited = sessionStorage.getItem(sessionKey)
    
    track('product_list_page_view', getUTMParams())

    if (!alreadyVisited) {
      hasTriggered.current = true;
      
      // Moving setState into the timer fixes the "Cascading Renders" error
      // because it makes the update asynchronous.
      const t = setTimeout(() => {
        setHasVisited(false); 
        triggerDownload('auto');
        sessionStorage.setItem(sessionKey, 'true');
      }, 900);
      
      return () => clearTimeout(t);
    }
  }, []);

  async function handleClick() {
    if (btnState !== 'idle') return
    setBtnState('downloading')
    if (progressRef.current) {
      progressRef.current.style.transition = 'none'
      progressRef.current.style.width = '0%'
      void progressRef.current.offsetWidth
      progressRef.current.style.transition = 'width 1.6s cubic-bezier(0.4,0,0.2,1)'
      progressRef.current.style.width = '100%'
    }
    triggerDownload('manual')
    await new Promise((r) => setTimeout(r, 1800))
    setBtnState('done')
    setTimeout(() => setBtnState('idle'), 2800)
  }
  return (
    <main className="pl-root">
      <div className="pl-container">

        {/* Eyebrow */}
        <div className="pl-eyebrow">
          <span className="pl-dot" />
          WeldHub · Product Catalogue 2026
        </div>

        {/* Hero */}
     <section className="pl-hero">
          <h1 className="pl-h1">
            Our Full<br />
            <span className="pl-h1-black">Product List</span>
          </h1>
          <p className="pl-lead">
            {hasVisited 
              ? "Welcome back. Browse our complete lineup of professional welding equipment below."
              : "Your PDF has been automatically downloaded — or grab it again below."
            }
          </p>
        </section>

        {/* Download card */}
        <div className="pl-card">
          <div className="pl-card-left">
            <PdfIcon />
            <div>
              <div className="pl-card-title">WeldHub Product List 2026</div>
              <div className="pl-card-meta">PDF · Updated 2026</div>
            </div>
          </div>

          <button
            onClick={handleClick}
            disabled={btnState === 'downloading'}
            className={`pl-btn pl-btn--${btnState}`}
            aria-label="Download product list PDF"
          >
            <span ref={progressRef} className="pl-btn-progress" aria-hidden="true" />
            <span className="pl-btn-inner">
              {btnState === 'idle' && (
                <>
                  <DownloadIcon />
                  <span>Download PDF</span>
                  <span className="pl-btn-arrow">→</span>
                </>
              )}
              {btnState === 'downloading' && (
                <>
                  <Spinner />
                  <span>Downloading…</span>
                </>
              )}
              {btnState === 'done' && (
                <>
                  <CheckIcon />
                  <span>Downloaded!</span>
                </>
              )}
            </span>
          </button>
        </div>

        {/* PDF Preview */}
        <section className="pl-preview">
          <div className="pl-preview-header">
            <span className="pl-preview-label">Preview</span>
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="pl-preview-open"
              onClick={() => track('brochure_open_tab', getUTMParams())}
            >
              Open in new tab ↗
            </a>
          </div>
          <div className="pl-iframe-wrap">
            <iframe
              src={`${PDF_PATH}#toolbar=0&navpanes=0&view=FitH`}
              className="pl-iframe"
              title="WeldHub Product List 2026 Preview"
            />
          </div>
        </section>

        {/* Footer CTA */}
        <p className="pl-footer-note">
          Questions about a product?{' '}
          <a href="/request-quote" className="pl-link">
            Request a quote →
          </a>
        </p>
      </div>

      <style>{`

        .pl-root {
          background: #fcfcfc;
          min-height: 100vh;
          color: #111;
        }

        .pl-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 72px 24px 100px;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        /* Eyebrow */
        .pl-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0071fe;
          animation: pl-up 0.5s ease both;
        }
        .pl-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #0071fe;
          flex-shrink: 0;
        }

        /* Hero */
        .pl-hero { animation: pl-up 0.55s 0.07s ease both; }

        .pl-h1 {
          font-size: 100px;
          font-weight: 700;
          line-height: 0.95;
          color: #0071fe;
          letter-spacing: -0.025em;
          margin-bottom: 28px;
        }
        .pl-h1-black { color: #111; }

        .pl-lead {
          font-size: 16px;
          font-weight: 400;
          line-height: 1.72;
          color: #555;
          max-width: 500px;
        }

        /* Download card */
        .pl-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: #ecf0f8;
          border-radius: 14px;
          padding: 24px 28px;
          animation: pl-up 0.55s 0.14s ease both;
        }
        .pl-card-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .pl-card-title {
          font-size: 15px;
          font-weight: 700;
          color: #111;
        }
        .pl-card-meta {
          font-size: 12px;
          color: #888;
          margin-top: 3px;
        }

        /* ── Button ── */
        .pl-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 0 28px;
          height: 52px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-family: 'Manrope', sans-serif;
          font-size: 14px;
          font-weight: 700;
          overflow: hidden;
          background: #0071fe;
          color: #fff;
          box-shadow: 0 4px 18px rgba(0,113,254,0.28);
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .pl-btn:hover {
          background: #111;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.16);
        }
        .pl-btn:active { transform: translateY(0); }

        .pl-btn--downloading,
        .pl-btn--done {
          background: #111 !important;
          box-shadow: none !important;
          transform: none !important;
          cursor: default;
        }

        /* progress bar */
        .pl-btn-progress {
          position: absolute;
          bottom: 0; left: 0;
          height: 3px;
          width: 0%;
          background: #0071fe;
          border-radius: 0 0 8px 8px;
        }

        .pl-btn-inner {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .pl-btn-arrow {
          display: inline-block;
          transition: transform 0.2s;
        }
        .pl-btn:hover .pl-btn-arrow { transform: translateX(5px); }

        /* Spinner */
        .pl-spinner {
          width: 15px; height: 15px;
          border: 2px solid rgba(255,255,255,0.2);
          border-top-color: #fff;
          border-radius: 50%;
          animation: pl-spin 0.65s linear infinite;
          flex-shrink: 0;
        }
        @keyframes pl-spin { to { transform: rotate(360deg); } }

        /* PDF preview */
        .pl-preview { animation: pl-up 0.55s 0.21s ease both; }

        .pl-preview-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .pl-preview-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #aaa;
        }
        .pl-preview-open {
          font-size: 12px;
          font-weight: 600;
          color: #0071fe;
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .pl-preview-open:hover { opacity: 0.65; }

 .pl-iframe-wrap {
          position: relative;
          width: 100%;
          border-radius: 15px;
          overflow: hidden;
          border: 1.5px solid #e0e6f2;
          background: #ecf0f8;
          box-shadow: 0 20px 50px rgba(0, 113, 254, 0.1);
          
          /* Using 100dvh for height but ensuring it's large enough for content */
          height: 100dvh; 
          min-height: 800px; /* Prevents it from being too small on short screens */
        }

        .pl-iframe {
          width: 100%;
          height: 100%;
          display: block;
          border: none;
          /* This ensures the PDF scales to fill the width within the iframe viewer */
        }

        /* Footer */
        .pl-footer-note {
          font-size: 14px;
          color: #999;
          animation: pl-up 0.55s 0.28s ease both;
        }
        .pl-link {
          color: #0071fe;
          font-weight: 700;
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .pl-link:hover { opacity: 0.65; }

        @keyframes pl-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .pl-container { padding: 48px 20px 80px; }
          .pl-card { flex-direction: column; align-items: flex-start; }
          .pl-btn { width: 100%; }
                    .pl-iframe-wrap {
            height: 70dvh;
            min-height: 500px;
          }
        }
      `}</style>
    </main>
  )
}

/* ── Icons ───────────────────────────────────────────────────────────────── */
function PdfIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="42" height="42" rx="10" fill="#ecf0f8"/>
      <path d="M14 11h10l9 9v14a2 2 0 01-2 2H14a2 2 0 01-2-2V13a2 2 0 012-2z" stroke="#0071fe" strokeWidth="1.6" strokeLinejoin="round" fill="none"/>
      <path d="M24 11v9h9" stroke="#0071fe" strokeWidth="1.6" strokeLinejoin="round"/>
      <text x="13" y="31" fontFamily="Manrope, sans-serif" fontSize="7" fontWeight="700" fill="#0071fe">PDF</text>
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M7.5 1.5v8M4.5 7l3 3 3-3M2 13h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M2.5 7.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function Spinner() {
  return <span className="pl-spinner" aria-hidden="true" />
}