'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

const EASE = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!headlineRef.current) return

    const split = new SplitText(headlineRef.current, { type: 'lines' })

    const tl = gsap.timeline({ delay: 0.1 })

    tl.set(split.lines, { y: '110%', opacity: 0 })
      .set([eyebrowRef.current, subtitleRef.current, ctaRef.current, badgeRef.current, lineRef.current], { opacity: 0, y: 20 })
      .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
      .to(split.lines, {
        y: '0%',
        opacity: 1,
        duration: 0.9,
        ease: 'power4.out',
        stagger: 0.08,
      }, '-=0.2')
      .to(lineRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.3')
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2')
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2')
      .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.4)' }, '-=0.4')

    return () => split.revert()
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100dvh',
        minHeight: '640px',
        backgroundColor: '#070C18',
        display: 'flex',
        alignItems: 'flex-end',
        paddingTop: 'clamp(80px, 10vh, 140px)',
      }}
      className="hero-section"
    >
      {/* BG photo grid */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, display: 'flex', gap: '3px', overflow: 'hidden' }}>
        {[
          { imgs: ['/images/action1.jpg', '/images/gallery1.jpg', '/images/celebration.jpg'], dur: 28, dir: 'up' },
          { imgs: ['/images/gallery2.jpg', '/images/locker.jpg', '/images/action2.jpg'], dur: 22, dir: 'down' },
          { imgs: ['/images/hero.jpg', '/images/gallery3.jpg', '/images/team-run.jpg'], dur: 30, dir: 'up' },
          { imgs: ['/images/gallery4.jpg', '/images/action1.jpg', '/images/gallery2.jpg'], dur: 24, dir: 'down' },
        ].map((col, ci) => (
          <div
            key={ci}
            style={{ flex: 1, overflow: 'hidden', position: 'relative' }}
            className={`hero-col hero-col-${ci}`}
          >
            <div
              className={`hero-track hero-track-${col.dir}`}
              style={{ animationDuration: `${col.dur}s` }}
            >
              {[...col.imgs, ...col.imgs].map((src, i) => (
                <div key={i} style={{ position: 'relative', width: '100%', height: '42vh', flexShrink: 0 }}>
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="25vw"
                    priority={ci === 0 && i === 0}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(7,12,24,0.28)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #070C18 0%, rgba(7,12,24,0.85) 30%, rgba(7,12,24,0.2) 60%, transparent 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(7,12,24,0.9) 0%, rgba(7,12,24,0.5) 25%, transparent 55%)' }} />
      </div>

      <style>{`
        .hero-track {
          display: flex;
          flex-direction: column;
          gap: 3px;
          will-change: transform;
        }
        .hero-track-up {
          animation: heroScrollUp linear infinite;
        }
        .hero-track-down {
          animation: heroScrollDown linear infinite;
        }
        @keyframes heroScrollUp {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes heroScrollDown {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .hero-col-2, .hero-col-3 { display: none; }
          .hero-section { height: 85dvh !important; padding-top: clamp(40px, 6vh, 80px) !important; }
        }
      `}</style>

      {/* Contenuto */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 80px) clamp(48px, 8vw, 120px)',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '32px',
          alignItems: 'flex-end',
        }}
        className="hero-content-grid"
      >
        {/* Left */}
        <div>
          <p
            ref={eyebrowRef}
            style={{
              fontSize: '11px',
              letterSpacing: '0.25em',
              color: '#F5C000',
              textTransform: 'uppercase',
              marginBottom: '24px',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
            }}
          >
            Battipaglia (SA) · Dal 2024
          </p>

          <h1
            ref={headlineRef}
            className="font-bebas"
            style={{
              fontSize: 'clamp(72px, 13vw, 200px)',
              lineHeight: 0.88,
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
              overflow: 'hidden',
              marginBottom: '28px',
            }}
          >
            Non siamo
            <br />
            <span style={{ color: '#F5C000' }}>nati</span> per
            <br />
            partecipare.
          </h1>

          {/* Rule */}
          <div
            ref={lineRef}
            style={{
              width: '80px',
              height: '1px',
              backgroundColor: 'rgba(255,255,255,0.25)',
              marginBottom: '20px',
            }}
          />

          <p
            ref={subtitleRef}
            style={{
              fontSize: 'clamp(14px, 1.4vw, 16px)',
              color: 'rgba(255,255,255,0.55)',
              maxWidth: '420px',
              lineHeight: 1.7,
              marginBottom: '36px',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
            }}
          >
            Nati nel 2024 ad Arco Verde, Battipaglia. Campioni della Lega Battipaglia
            Calcio a 7 alla seconda stagione. Questa è la storia di ASD BOCA.
          </p>

          <div ref={ctaRef}>
            <a
              href="#storia"
              data-magnetic
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.3)',
                paddingBottom: '4px',
                transition: 'border-color 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = '#F5C000'
                el.style.color = '#F5C000'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.3)'
                el.style.color = '#FFFFFF'
              }}
            >
              Scopri la storia
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* Badge campioni — desktop */}
        <div
          ref={badgeRef}
          className="hidden md:flex"
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '140px',
            height: '140px',
            backgroundColor: '#F5C000',
            textAlign: 'center',
            padding: '16px',
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: '32px', lineHeight: 1, marginBottom: '4px' }}>★</span>
          <span
            className="font-bebas"
            style={{ fontSize: '18px', color: '#070C18', letterSpacing: '0.06em', lineHeight: 1.1 }}
          >
            CAMPIONI
          </span>
          <span
            style={{
              fontSize: '10px',
              color: 'rgba(0,0,0,0.6)',
              letterSpacing: '0.08em',
              marginTop: '4px',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
            }}
          >
            25/26 Serie A
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(24px, 4vw, 48px)',
          right: 'clamp(24px, 5vw, 80px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: '1px',
            height: '60px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)',
          }}
        />
      </div>
    </section>
  )
}
