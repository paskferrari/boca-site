'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const beats = [
  {
    year: '2024',
    headline: 'Un campo.\nDodici ragazzi.',
    sub: 'Settembre 2024. Nessun budget, nessuna struttura. Solo una promessa tra amici ad Arco Verde, Serroni Alto.',
    color: '#FFFFFF',
    accent: '#FFFFFF',
  },
  {
    year: '24/25',
    headline: 'Secondi.\nMa solo per ora.',
    sub: '43 punti al primo anno nella Lega Battipaglia Calcio a 7. La squadra più giovane. Il secondo posto che ha acceso la fame.',
    color: '#FFFFFF',
    accent: '#F5C000',
  },
  {
    year: '25/26',
    headline: '★ Campioni.',
    sub: 'Primi in classifica nella Lega Battipaglia C7. In due stagioni, ASD BOCA ha dimostrato che il gruppo batte tutto il resto.',
    color: '#F5C000',
    accent: '#F5C000',
  },
]

export default function Storia() {
  const sectionRef = useRef<HTMLElement>(null)
  const beatRefs = useRef<(HTMLDivElement | null)[]>([])
  const progressRef = useRef<HTMLDivElement>(null)
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])
  const yearRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      // Initial state: show beat 0, hide 1 and 2
      gsap.set(beatRefs.current[0], { opacity: 1, y: 0 })
      gsap.set(beatRefs.current[1], { opacity: 0, y: 60 })
      gsap.set(beatRefs.current[2], { opacity: 0, y: 60 })
      gsap.set(dotRefs.current[0], { scale: 1.5, backgroundColor: '#F5C000' })
      gsap.set(dotRefs.current[1], { scale: 1, backgroundColor: 'rgba(255,255,255,0.3)' })
      gsap.set(dotRefs.current[2], { scale: 1, backgroundColor: 'rgba(255,255,255,0.3)' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: 'top top',
          end: '+=250%',
          scrub: 0.8,
        },
      })

      // Beat 0 → Beat 1
      tl.to(beatRefs.current[0], { opacity: 0, y: -60, duration: 0.4 })
        .to(beatRefs.current[1], { opacity: 1, y: 0, duration: 0.4 }, '-=0.1')
        .to(dotRefs.current[0], { scale: 1, backgroundColor: 'rgba(255,255,255,0.3)', duration: 0.3 }, '<')
        .to(dotRefs.current[1], { scale: 1.5, backgroundColor: '#F5C000', duration: 0.3 }, '<')
        .to({}, { duration: 0.6 })

      // Beat 1 → Beat 2
        .to(beatRefs.current[1], { opacity: 0, y: -60, duration: 0.4 })
        .to(beatRefs.current[2], { opacity: 1, y: 0, duration: 0.4 }, '-=0.1')
        .to(dotRefs.current[1], { scale: 1, backgroundColor: 'rgba(255,255,255,0.3)', duration: 0.3 }, '<')
        .to(dotRefs.current[2], { scale: 1.5, backgroundColor: '#F5C000', duration: 0.3 }, '<')
        .to({}, { duration: 0.6 })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="storia"
      ref={sectionRef}
      style={{
        height: '100dvh',
        minHeight: '600px',
        backgroundColor: '#070C18',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* BG subtle */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,192,0,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Progress dots — left side */}
      <div
        ref={progressRef}
        style={{
          position: 'absolute',
          left: 'clamp(24px, 5vw, 80px)',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 2,
        }}
      >
        {beats.map((beat, i) => (
          <div
            key={i}
            ref={el => { dotRefs.current[i] = el }}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>

      {/* Year indicator */}
      <div
        style={{
          position: 'absolute',
          top: 'clamp(40px, 6vw, 80px)',
          left: 'clamp(24px, 5vw, 80px)',
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontSize: '11px',
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
          }}
        >
          — La storia
        </p>
      </div>

      {/* Beats container */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '900px',
          width: '100%',
          padding: '0 clamp(60px, 10vw, 140px)',
          textAlign: 'left',
        }}
        className="storia-beats"
      >
        {beats.map((beat, i) => (
          <div
            key={i}
            ref={el => { beatRefs.current[i] = el }}
            style={{
              position: i === 0 ? 'relative' : 'absolute',
              top: i === 0 ? 'auto' : '50%',
              left: i === 0 ? 'auto' : 'clamp(60px, 10vw, 140px)',
              right: i === 0 ? 'auto' : 'clamp(60px, 10vw, 140px)',
              transform: i === 0 ? 'none' : 'translateY(-50%)',
              opacity: i === 0 ? 1 : 0,
            }}
          >
            {/* Year tag */}
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                color: '#F5C000',
                textTransform: 'uppercase',
                marginBottom: '20px',
                fontFamily: 'var(--font-inter), Inter, sans-serif',
              }}
            >
              {beat.year}
            </p>

            {/* Headline */}
            <h2
              className="font-bebas"
              style={{
                fontSize: 'clamp(64px, 12vw, 160px)',
                lineHeight: 0.9,
                color: beat.color,
                letterSpacing: '-0.01em',
                marginBottom: '32px',
                whiteSpace: 'pre-line',
              }}
            >
              {beat.headline}
            </h2>

            {/* Sub */}
            <p
              style={{
                fontSize: 'clamp(14px, 1.4vw, 18px)',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.7,
                maxWidth: '520px',
                fontFamily: 'var(--font-inter), Inter, sans-serif',
              }}
            >
              {beat.sub}
            </p>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .storia-beats {
            padding: 0 clamp(48px, 12vw, 80px) 0 clamp(44px, 10vw, 60px) !important;
          }
          .storia-beats h2 {
            font-size: clamp(52px, 14vw, 100px) !important;
          }
        }
      `}</style>
    </section>
  )
}
