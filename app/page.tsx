'use client'

import { useState } from 'react'
import Preloader from '@/components/Preloader'
import Hero from '@/components/Hero'
import Storia from '@/components/Storia'
import Territorio from '@/components/Territorio'
import LaSquadra from '@/components/LaSquadra'
import PitchDeck from '@/components/PitchDeck'
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
          <Territorio />
          <LaSquadra />
          <PitchDeck />
          <CtaContatti />
        </main>
      )}
    </>
  )
}
