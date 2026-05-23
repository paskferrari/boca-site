'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const EASE = [0.22, 1, 0.36, 1] as const

const players = [
  { num: '1', name: 'Alfonso Petrizzo', role: 'GK', src: '/images/players_nobg/1.png' },
  { num: '3', name: 'Biagio Chiapparone', role: 'DEF', src: '/images/players_nobg/3.png' },
  { num: '5', name: 'Luca Verza', role: 'DEF', src: '/images/players_nobg/5.png' },
  { num: '6', name: 'Paolo Procida', role: 'DEF', src: '/images/players_nobg/6.png' },
  { num: '7', name: 'Gianmarco Del Mastro', role: 'MID', src: '/images/players_nobg/7.png' },
  { num: '9', name: 'Pierpasquale Alfinito', role: 'ATT', src: '/images/players_nobg/9.png' },
  { num: '10', name: 'Andrea Langella', role: 'MID', src: '/images/players_nobg/10.png' },
  { num: '11', name: 'Pietro Miranda', role: 'ATT', src: '/images/players_nobg/11.png' },
  { num: '19', name: 'Simone Spagnolo', role: 'MID', src: '/images/players_nobg/19.png' },
  { num: '21', name: 'Gianmichele Galiano', role: 'DEF', src: '/images/players_nobg/21.png' },
  { num: 'CA', name: 'Giammarco Gaimari', role: 'COACH', src: '/images/players_nobg/CA.png' },
  { num: 'HC', name: 'Gaetano Del Mastro', role: 'HC', src: '/images/players_nobg/HC.png' },
]

function PlayerCard({ player }: { player: typeof players[0] }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 'var(--card-w, 260px)',
        height: 'var(--card-h, 440px)',
        position: 'relative',
        cursor: 'default',
      }}
      className="player-card"
    >
      {/* Hero name — upper dark space */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          padding: '18px 12px 0',
          pointerEvents: 'none',
        }}
      >
        <p
          style={{
            fontSize: '10px',
            letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            marginBottom: '4px',
          }}
        >
          {player.role}
        </p>
        <p
          className="font-bebas player-name"
          style={{
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            lineHeight: 0.9,
            color: 'rgba(255,255,255,0.82)',
            letterSpacing: '0.02em',
            transition: 'color 0.4s ease',
          }}
        >
          {player.name}
        </p>
      </div>

      {/* Jersey number watermark */}
      <span
        className="font-bebas"
        style={{
          position: 'absolute',
          bottom: '28px',
          right: '8px',
          fontSize: '100px',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.04)',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
        }}
      >
        {player.num}
      </span>

      {/* Player cutout */}
      <Image
        src={player.src}
        alt={`Player ${player.num}`}
        fill
        sizes="200px"
        style={{
          objectFit: 'contain',
          objectPosition: 'center bottom',
          transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
          zIndex: 1,
        }}
        className="player-img"
      />

      {/* Bottom label */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          padding: '0 0 6px 4px',
          display: 'flex',
          alignItems: 'flex-end',
          gap: '8px',
        }}
      >
        <span
          className="font-bebas"
          style={{ fontSize: '28px', color: '#F5C000', lineHeight: 1 }}
        >
          {player.num}
        </span>
        <span
          style={{
            fontSize: '10px',
            letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            paddingBottom: '3px',
          }}
        >
          {player.role}
        </span>
      </div>

      {/* Gold line hover */}
      <div
        className="player-line"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '1px',
          width: '0%',
          backgroundColor: '#F5C000',
          transition: 'width 0.4s cubic-bezier(0.22,1,0.36,1)',
          zIndex: 3,
        }}
      />

      <style>{`
        .player-card:hover .player-img { transform: scale(1.05) translateY(-4px); }
        .player-card:hover .player-line { width: 100%; }
        .player-card:hover .player-name { color: #F5C000 !important; }
        @media (max-width: 768px) {
          .player-card { --card-w: 180px; --card-h: 300px; }
          .player-name { font-size: 26px !important; }
        }
      `}</style>
    </div>
  )
}

export default function LaSquadra() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef, { once: true, margin: '-80px' })

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const ctx = gsap.context(() => {
      const totalScroll = track.scrollWidth - window.innerWidth + 120

      gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          start: 'top top',
          end: `+=${totalScroll}`,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="squadra"
      style={{
        backgroundColor: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div ref={containerRef} style={{ overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100dvh',
            minHeight: '600px',
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            gap: 'clamp(32px, 4vw, 60px)',
          }}
        >
          {/* Title block — static left */}
          <div
            ref={headerRef}
            className="squadra-header"
            style={{ flexShrink: 0, width: 'clamp(120px, 20vw, 280px)' }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
              style={{
                fontSize: '11px',
                letterSpacing: '0.25em',
                color: 'rgba(255,255,255,0.3)',
                textTransform: 'uppercase',
                marginBottom: '16px',
                fontFamily: 'var(--font-inter), Inter, sans-serif',
              }}
            >
              — 04 / La rosa
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="font-bebas"
              style={{
                fontSize: 'clamp(56px, 7vw, 90px)',
                lineHeight: 0.9,
                color: '#FFFFFF',
                letterSpacing: '-0.01em',
              }}
            >
              La<br />
              <span style={{ color: '#F5C000' }}>Rosa.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              style={{
                marginTop: '20px',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.05em',
                fontFamily: 'var(--font-inter), Inter, sans-serif',
              }}
            >
              Scorri →
            </motion.p>
          </div>

          {/* Scrolling track */}
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              gap: '4px',
              alignItems: 'center',
              willChange: 'transform',
            }}
          >
            {players.map((player, i) => (
              <PlayerCard key={player.num} player={player} />
            ))}

            {/* End card */}
            <div
              className="squadra-end-card"
              style={{
                flexShrink: 0,
                width: '260px',
                height: '360px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(245,192,0,0.3)',
                padding: '32px',
                textAlign: 'center',
                marginRight: '80px',
              }}
            >
              <span style={{ fontSize: '32px', marginBottom: '12px' }}>★</span>
              <p
                className="font-bebas"
                style={{
                  fontSize: '28px',
                  color: '#F5C000',
                  letterSpacing: '0.06em',
                  lineHeight: 1.1,
                  marginBottom: '8px',
                }}
              >
                12 Atleti<br />Under 24
              </p>
              <p
                style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.35)',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  lineHeight: 1.6,
                }}
              >
                Il futuro del calcio<br />a Battipaglia
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .squadra-header { width: 120px !important; }
          .squadra-header h2 { font-size: 44px !important; }
          .squadra-header p { font-size: 10px !important; }
          .squadra-end-card { width: 180px !important; height: 280px !important; margin-right: 24px !important; }
        }
      `}</style>
    </section>
  )
}
