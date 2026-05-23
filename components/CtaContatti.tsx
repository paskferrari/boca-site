'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const sponsors = [
  { name: 'Salotti Cappiello', src: '/images/sponsors/cappiello.png' },
  { name: 'Area Finanza', src: '/images/sponsors/areafinanza.png' },
  { name: 'Spritza Via', src: '/images/sponsors/spritzavia.png' },
  { name: 'CasaMMare', src: '/images/sponsors/casammare.png' },
  { name: 'Capitale Immobiliare', src: '/images/sponsors/capitaleimmobiliare.png' },
]

const EASE = [0.22, 1, 0.36, 1] as const

export default function CtaContatti() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="contatti"
      ref={sectionRef}
      style={{
        backgroundColor: '#070C18',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* BG glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(245,192,0,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: '1320px',
          margin: '0 auto',
          padding: 'clamp(100px, 14vw, 200px) clamp(24px, 5vw, 80px)',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          style={{
            fontSize: '11px',
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
            marginBottom: '28px',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
          }}
        >
          — Entra nella storia
        </motion.p>

        {/* Headline */}
        <div style={{ overflow: 'hidden', marginBottom: '32px' }}>
          <motion.h2
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : { y: '110%' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-bebas"
            style={{
              fontSize: 'clamp(72px, 14vw, 200px)',
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ color: '#FFFFFF' }}>Fai parte</span>
            <br />
            <span style={{ color: '#F5C000' }}>della storia.</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          style={{
            fontSize: 'clamp(14px, 1.4vw, 18px)',
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '500px',
            margin: '0 auto 56px',
            lineHeight: 1.7,
            fontFamily: 'var(--font-inter), Inter, sans-serif',
          }}
        >
          Sei un&apos;azienda del territorio e vuoi investire in qualcosa di reale?
          Scrivici. Costruiamo qualcosa insieme.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="mailto:asd.boca24@gmail.com"
            data-magnetic
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#F5C000',
              color: '#070C18',
              padding: '16px 36px',
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontWeight: 600,
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
          >
            Scrivici una mail
          </a>

          <a
            href="https://instagram.com/asdboca"
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              padding: '16px 36px',
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.2)',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#F5C000' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)' }}
          >
            Instagram
          </a>
        </motion.div>

        {/* Sponsor strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
          style={{
            marginTop: '72px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <p
            style={{
              fontSize: '10px',
              letterSpacing: '0.25em',
              color: 'rgba(255,255,255,0.2)',
              textTransform: 'uppercase',
              marginBottom: '28px',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
            }}
          >
            Partner 25/26
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'clamp(24px, 4vw, 56px)',
            }}
          >
            {sponsors.map(s => (
              <div
                key={s.name}
                style={{ position: 'relative', width: '160px', height: '72px', flexShrink: 0 }}
              >
                <Image
                  src={s.src}
                  alt={s.name}
                  fill
                  sizes="160px"
                  style={{
                    objectFit: 'contain',
                    opacity: 0.75,
                    transition: 'opacity 0.3s ease',
                  }}
                  className="sponsor-logo"
                />
              </div>
            ))}
          </div>
          <style>{`
            .sponsor-logo:hover { opacity: 0.9 !important; }
            @media (max-width: 768px) {
              .cta-footer-bar { justify-content: center !important; text-align: center; }
            }
          `}</style>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          className="cta-footer-bar"
          style={{
            marginTop: '80px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p
            className="font-bebas"
            style={{
              fontSize: '22px',
              color: '#FFFFFF',
              letterSpacing: '0.08em',
            }}
          >
            A.S.D. BOCA
          </p>
          <p
            style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.2)',
              letterSpacing: '0.1em',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
            }}
          >
            Battipaglia (SA) · asd.boca24@gmail.com
          </p>
          <p
            style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.2)',
              letterSpacing: '0.08em',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
            }}
          >
            © 2026 · FIGC · CONI · ASC
          </p>
        </motion.div>
      </div>
    </section>
  )
}
