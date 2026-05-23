'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const packages = [
  {
    tier: 'Bronze',
    price: 'Su richiesta',
    perks: ['Logo su divisa', 'Menzione social x4/mese', 'Foto ufficiale con squadra'],
    accent: 'rgba(255,255,255,0.15)',
  },
  {
    tier: 'Silver',
    price: 'Su richiesta',
    perks: ['Logo divisa + banner campo', 'Story dedicata x2/mese', 'Comunicato stampa', 'Inviti partite casa'],
    accent: 'rgba(255,255,255,0.25)',
    featured: true,
  },
  {
    tier: 'Gold',
    price: 'Su richiesta',
    perks: ['Naming rights (es. "BOCA by [Azienda]")', 'Contenuto branded mensile', 'Accesso spogliatoio', 'Co-marketing eventi', 'Presenza press conference'],
    accent: '#F5C000',
    gold: true,
  },
]


function PackagesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div
      ref={ref}
      style={{
        padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
        maxWidth: '1320px',
        margin: '0 auto',
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: EASE }}
        style={{
          fontSize: '11px',
          letterSpacing: '0.25em',
          color: 'rgba(255,255,255,0.35)',
          textTransform: 'uppercase',
          marginBottom: '20px',
          fontFamily: 'var(--font-inter), Inter, sans-serif',
        }}
      >
        — 03 / I pacchetti
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
        className="font-bebas"
        style={{
          fontSize: 'clamp(56px, 8vw, 110px)',
          lineHeight: 0.9,
          color: '#FFFFFF',
          letterSpacing: '-0.01em',
          marginBottom: '60px',
        }}
      >
        Scegli il<br />
        <span style={{ color: '#F5C000' }}>tuo ruolo.</span>
      </motion.h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}
        className="packages-grid"
      >
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.tier}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: EASE }}
            style={{
              padding: 'clamp(32px, 4vw, 52px) clamp(24px, 3vw, 40px)',
              backgroundColor: pkg.gold ? '#F5C000' : 'rgba(255,255,255,0.03)',
              border: pkg.gold ? 'none' : '1px solid rgba(255,255,255,0.07)',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '400px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Watermark */}
            <span
              className="font-bebas"
              style={{
                position: 'absolute',
                top: '-10px',
                right: '12px',
                fontSize: '120px',
                color: pkg.gold ? '#000' : '#fff',
                opacity: pkg.gold ? 0.06 : 0.04,
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>

            <p
              style={{
                fontSize: '10px',
                letterSpacing: '0.2em',
                color: pkg.gold ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
                marginBottom: '12px',
                fontFamily: 'var(--font-inter), Inter, sans-serif',
              }}
            >
              Partnership
            </p>

            <h4
              className="font-bebas"
              style={{
                fontSize: 'clamp(40px, 4vw, 56px)',
                color: pkg.gold ? '#070C18' : '#FFFFFF',
                letterSpacing: '0.02em',
                lineHeight: 1,
                marginBottom: '8px',
              }}
            >
              {pkg.tier}
            </h4>

            <p
              style={{
                fontSize: '13px',
                color: pkg.gold ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.3)',
                marginBottom: '28px',
                fontFamily: 'var(--font-inter), Inter, sans-serif',
              }}
            >
              {pkg.price}
            </p>

            <div
              style={{
                width: '40px',
                height: '1px',
                backgroundColor: pkg.gold ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.15)',
                marginBottom: '24px',
              }}
            />

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
              {pkg.perks.map((perk, j) => (
                <li
                  key={j}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: 'clamp(13px, 1.1vw, 14px)',
                    color: pkg.gold ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.55)',
                    lineHeight: 1.5,
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                  }}
                >
                  <span style={{ color: pkg.gold ? '#070C18' : '#F5C000', flexShrink: 0, marginTop: '2px' }}>✓</span>
                  {perk}
                </li>
              ))}
            </ul>

            {pkg.featured && (
              <div style={{ marginTop: '28px' }}>
                <span
                  className="font-bebas"
                  style={{
                    display: 'inline-block',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '12px',
                    letterSpacing: '0.12em',
                    padding: '5px 12px',
                  }}
                >
                  Più scelto
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .packages-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

export default function PitchDeck() {
  return (
    <section
      id="sponsorizzaci"
      style={{
        backgroundColor: '#070C18',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <PackagesSection />
    </section>
  )
}
