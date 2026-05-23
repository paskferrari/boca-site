'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Script from 'next/script'

const EASE = [0.22, 1, 0.36, 1] as const

const BEHOLD_FEED_ID = 'V6EJME6rpgV6Z30c6AX5'

export default function Instagram() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="instagram"
      ref={sectionRef}
      style={{
        backgroundColor: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: 'clamp(48px, 6vw, 80px)',
          }}
          className="ig-header"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE }}
              style={{
                fontSize: '11px',
                letterSpacing: '0.25em',
                color: 'rgba(255,255,255,0.3)',
                textTransform: 'uppercase',
                marginBottom: '16px',
                fontFamily: 'var(--font-inter), Inter, sans-serif',
              }}
            >
              — Seguici
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="font-bebas"
              style={{
                fontSize: 'clamp(52px, 9vw, 130px)',
                lineHeight: 0.88,
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{ color: '#FFFFFF' }}>@asd</span>
              <span style={{ color: '#F5C000' }}>.boca</span>
            </motion.h2>
          </div>

          <motion.a
            href="https://www.instagram.com/asd.boca/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#FFFFFF',
              padding: '14px 28px',
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              transition: 'border-color 0.2s ease, color 0.2s ease',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = '#F5C000'
              el.style.color = '#F5C000'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(255,255,255,0.2)'
              el.style.color = '#FFFFFF'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
            </svg>
            Segui
          </motion.a>
        </div>

        {/* Behold feed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          {/* @ts-expect-error custom element */}
          <behold-widget feed-id={BEHOLD_FEED_ID} />
          <Script
            id="behold-widget-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
(()=>{
  const d=document,s=d.createElement("script");
  s.type="module";s.src="https://w.behold.so/widget.js";d.head.append(s);
  // Inject CSS into shadow DOM to hide branding once widget loads
  window.addEventListener('behold:widget-loaded', () => {
    const w = d.querySelector('behold-widget');
    if (!w || !w.shadowRoot) return;
    const st = d.createElement('style');
    st.textContent = 'a[href*="behold"]{display:none!important}[class*="brand"]{display:none!important}[class*="badge"]{display:none!important}[class*="credit"]{display:none!important}';
    w.shadowRoot.appendChild(st);
  });
})();`,
            }}
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ig-header { align-items: flex-start !important; }
        }
        behold-widget {
          --behold-border-radius: 0px;
        }
        behold-widget a[href*="behold"],
        behold-widget [class*="credit"],
        behold-widget [class*="powered"],
        behold-widget [class*="brand"],
        behold-widget [class*="watermark"] {
          display: none !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}</style>
    </section>
  )
}
