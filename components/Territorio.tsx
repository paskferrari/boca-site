'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const lines = [
  { text: 'Una piazza.', gold: false },
  { text: 'Una squadra.', gold: false },
  { text: 'La nostra', gold: false },
  { text: 'gente.', gold: true },
]

const facts = [
  { num: '2024', label: 'Fondazione', sub: 'Arco Verde, Battipaglia' },
  { num: '43', label: 'Punti', sub: 'Prima stagione 24/25' },
  { num: '★', label: 'Campioni', sub: 'Lega C7 Battipaglia 25/26' },
]

export default function Territorio() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="territorio"
      ref={sectionRef}
      style={{
        backgroundColor: '#0C1228',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: 'clamp(80px, 12vw, 160px) clamp(24px, 5vw, 80px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(48px, 8vw, 120px)',
          alignItems: 'center',
        }}
        className="territorio-grid"
      >
        {/* Left — Big typography */}
        <div>
          {lines.map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <motion.p
                initial={{ y: '110%' }}
                animate={inView ? { y: 0 } : { y: '110%' }}
                transition={{
                  duration: 0.7,
                  delay: 0.05 + i * 0.06,
                  ease: EASE,
                }}
                className="font-bebas"
                style={{
                  fontSize: 'clamp(52px, 8vw, 110px)',
                  lineHeight: 0.88,
                  color: line.gold ? '#F5C000' : '#FFFFFF',
                  letterSpacing: '-0.01em',
                }}
              >
                {line.text}
              </motion.p>
            </div>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
            style={{
              marginTop: '28px',
              fontSize: 'clamp(14px, 1.3vw, 16px)',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.7,
              maxWidth: '380px',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
            }}
          >
            Nati da un'amicizia, cresciuti su un campo.
            Arco Verde, Serroni Alto — il posto dove tutto è cominciato.
          </motion.p>
        </div>

        {/* Right — Facts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: EASE }}
              style={{
                padding: 'clamp(24px, 3vw, 36px) 0',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span
                className="font-bebas"
                style={{
                  fontSize: 'clamp(56px, 7vw, 88px)',
                  color: '#FFFFFF',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {fact.num}
              </span>
              <div style={{ textAlign: 'right' }}>
                <p
                  className="font-bebas"
                  style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', color: '#FFFFFF', letterSpacing: '0.04em' }}
                >
                  {fact.label}
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.35)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                  }}
                >
                  {fact.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .territorio-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .territorio-grid .font-bebas {
            font-size: clamp(44px, 14vw, 80px) !important;
          }
        }
      `}</style>
    </section>
  )
}
