'use client'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const DOT = 12
const RING = 36
const STROKE = 2 // ring thickness

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // base coords
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // dot springs
  const dotX = useSpring(x, { stiffness: 400, damping: 35, mass: 1 })
  const dotY = useSpring(y, { stiffness: 400, damping: 35, mass: 1 })

  // ring follows dot with fixed offset (container stays constant size)
  const offset = (RING - DOT) / 2
  const ringX = useTransform(dotX, v => v - offset)
  const ringY = useTransform(dotY, v => v - offset)

  useEffect(() => {
    // enable only on non-touch and large screens, and react to changes
    if (typeof window === 'undefined') return

    const fineQuery = window.matchMedia('(pointer: fine)')
    const sizeQuery = window.matchMedia('(min-width: 1024px)')

    const apply = () => {
      const allow = fineQuery.matches && sizeQuery.matches
      setEnabled(allow)
      if (allow) {
        document.body.classList.add('cursor-none')
      } else {
        document.body.classList.remove('cursor-none')
      }
    }

    apply()
    setMounted(true)

    const onChange = () => apply()
    fineQuery.addEventListener('change', onChange)
    sizeQuery.addEventListener('change', onChange)

    return () => {
      fineQuery.removeEventListener('change', onChange)
      sizeQuery.removeEventListener('change', onChange)
      document.body.classList.remove('cursor-none')
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    const onMove = (e: PointerEvent) => {
      const { clientX, clientY } = e
      x.set(clientX - DOT / 2)
      y.set(clientY - DOT / 2)
    }

    const onOver = (e: Event) => {
      const el = (e.target as Element)?.closest?.('a, button, [role="button"]') as HTMLElement | null
      if (el) setIsHovering(true)
    }
    const onOut = () => setIsHovering(false)

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver, true)
    document.addEventListener('pointerout', onOut, true)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver, true)
      document.removeEventListener('pointerout', onOut, true)
    }
  }, [x, y, enabled])

  if (!mounted || !enabled) return null

  return createPortal(
    <>
      {/* DOT (above ring) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[200]"
        style={{ x: dotX, y: dotY, width: DOT, height: DOT, willChange: 'transform' }}
      >
        {/* scale inner only, keep center fixed */}
        <motion.div
          className="w-full h-full rounded-full"
          style={{
            backdropFilter: 'invert(1)',
            WebkitBackdropFilter: 'invert(1)',
            backgroundColor: 'rgba(255,255,255,0.001)',
            transformOrigin: 'center',
            willChange: 'transform',
          }}
          animate={{ scale: isHovering ? 1.5 : 1 }}
          transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.6 }}
        />
      </motion.div>

      {/* RING (below dot) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[150]"
        style={{ x: ringX, y: ringY, width: RING, height: RING, willChange: 'transform' }}
      >
        {/* scale inner wrapper so the ring grows from its center */}
        <motion.div
          className="absolute inset-0"
          style={{ transformOrigin: 'center', willChange: 'transform' }}
          animate={{ scale: isHovering ? 1.3 : 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 14, mass: 0.6 }}
        >
          {/* center blur (no invert) */}
          {/* <div className="absolute inset-0 rounded-full backdrop-blur-md" /> */}

          {/* invert only on the thin ring via mask */}
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: 'invert(1)',
              WebkitBackdropFilter: 'invert(1)',
              maskImage: `radial-gradient(closest-side, transparent calc(100% - ${STROKE}px), #000 calc(100% - ${STROKE}px), #000 100%)`,
              WebkitMaskImage: `radial-gradient(closest-side, transparent calc(100% - ${STROKE}px), #000 calc(100% - ${STROKE}px), #000 100%)`,
              borderRadius: '9999px',
            }}
          />
        </motion.div>
      </motion.div>
    </>,
    document.body
  )
}
