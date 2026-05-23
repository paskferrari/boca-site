'use client'

import { useState } from 'react'
import Preloader from '@/components/Preloader'
import Hero from '@/components/Hero'
import Storia from '@/components/Storia'
import LaSquadra from '@/components/LaSquadra'
import PitchDeck from '@/components/PitchDeck'
import Instagram from '@/components/Instagram'
import CtaContatti from '@/components/CtaContatti'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      {loaded && (
        <main>
          <Hero />
          <Storia />
          <LaSquadra />
          <PitchDeck />
          <Instagram />
          <CtaContatti />
        </main>
      )}
    </>
  )
}
