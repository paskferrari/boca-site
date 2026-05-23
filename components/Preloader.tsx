'use client'

import { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'

interface Props {
  onComplete: () => void
}

export default function Preloader({ onComplete }: Props) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    async function run() {
      await animate('#pre-line', { scaleX: [0, 1] }, { duration: 0.7, ease: [0.76, 0, 0.24, 1] })
      await animate('#pre-text', { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, ease: [0.22, 1, 0.36, 1] })
      await new Promise(r => setTimeout(r, 600))
      await animate(scope.current, { opacity: 0 }, { duration: 0.4, ease: 'easeInOut' })
      onComplete()
    }
    run()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      ref={scope}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#080808',
        zIndex: 100000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
      }}
    >
      <div
        id="pre-line"
        style={{
          width: '120px',
          height: '2px',
          backgroundColor: '#F5C000',
          transformOrigin: 'left center',
          transform: 'scaleX(0)',
        }}
      />

      <div id="pre-text" style={{ textAlign: 'center', opacity: 0 }}>
        <p
          style={{
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.4)',
            textTransform: 'uppercase',
            marginBottom: '4px',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
          }}
        >
          A.S.D.
        </p>
        <p
          className="font-bebas"
          style={{
            fontSize: '80px',
            lineHeight: 1,
            color: '#FFFFFF',
            letterSpacing: '0.08em',
          }}
        >
          BOCA
        </p>
        <p
          style={{
            fontSize: '10px',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
            marginTop: '8px',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
          }}
        >
          Battipaglia · 2024
        </p>
      </div>
    </motion.div>
  )
}
