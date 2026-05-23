'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, useInView } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

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

const slides = [
  {
    id: 'why',
    label: '01 / Perché BOCA?',
    headline: 'Una squadra\ndel territorio.',
    body: 'ASD BOCA è un progetto nato dal basso, da un gruppo di amici che si allena ad Arco Verde. In due anni abbiamo costruito una comunità reale intorno al calcio a 7 a Battipaglia. Chi si associa a BOCA investe in qualcosa di concreto e autentico.',
    stats: [
      { num: '14K+', label: 'Reach mensile Instagram' },
      { num: '60K', label: 'Bacino utenti Battipaglia' },
      { num: 'C7', label: 'Lega Battipaglia · Arco Verde' },
    ],
  },
  {
    id: 'numbers',
    label: '02 / I numeri',
    headline: 'Dati reali.\nNon promesse.',
    body: 'I numeri parlano da soli. Dalla seconda posizione al primo posto in classifica, con una rosa composta per la maggior parte da under 24. Un gruppo giovane, unito e con ancora tanta strada davanti.',
    stats: [
      { num: '43', label: 'Punti stagione 24/25' },
      { num: '12', label: 'Atleti under 24' },
      { num: '★', label: 'Campioni Lega Batt. C7 25/26' },
    ],
  },
]

function SlideContent({ slide, index }: { slide: typeof slides[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(48px, 6vw, 100px)',
        alignItems: 'center',
        padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
        maxWidth: '1320px',
        margin: '0 auto',
      }}
      className="pitch-slide-grid"
    >
      {/* Left */}
      <div>
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
          — {slide.label}
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
            marginBottom: '28px',
            whiteSpace: 'pre-line',
          }}
        >
          {slide.headline}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
          style={{
            fontSize: 'clamp(14px, 1.3vw, 16px)',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.75,
            maxWidth: '440px',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
          }}
        >
          {slide.body}
        </motion.p>
      </div>

      {/* Right — Stats */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {slide.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: EASE }}
            style={{
              padding: 'clamp(20px, 2.5vw, 32px) 0',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              className="font-bebas"
              style={{
                fontSize: 'clamp(52px, 7vw, 88px)',
                color: '#F5C000',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              {stat.num}
            </span>
            <p
              style={{
                fontSize: 'clamp(12px, 1.2vw, 14px)',
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                textAlign: 'right',
                maxWidth: '160px',
                fontFamily: 'var(--font-inter), Inter, sans-serif',
              }}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

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
                color: pkg.gold ? '#080808' : '#FFFFFF',
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
                  <span style={{ color: pkg.gold ? '#080808' : '#F5C000', flexShrink: 0, marginTop: '2px' }}>✓</span>
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
          .pitch-slide-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
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
        backgroundColor: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: 'clamp(64px, 8vw, 100px) clamp(24px, 5vw, 80px) 0',
          maxWidth: '1320px',
          margin: '0 auto',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            letterSpacing: '0.25em',
            color: '#F5C000',
            textTransform: 'uppercase',
            marginBottom: '12px',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
          }}
        >
          — Partnership
        </p>
        <div
          style={{
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.06)',
            marginBottom: '0',
          }}
        />
      </div>

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            backgroundColor: i % 2 === 1 ? '#0B0E1A' : '#080808',
          }}
        >
          <SlideContent slide={slide} index={i} />
        </div>
      ))}

      {/* Packages */}
      <PackagesSection />
    </section>
  )
}
