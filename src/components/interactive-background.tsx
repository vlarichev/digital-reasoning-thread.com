'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
// @ts-expect-error - no types available for vanta
import VANTA from 'vanta/dist/vanta.net.min'
import type { VantaEffect } from '../types/vanta'

export function InteractiveBackground() {
  const vantaRef = useRef<VantaEffect | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!vantaRef.current && containerRef.current) {
      vantaRef.current = VANTA({
        el: containerRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xa100ff,
        backgroundColor: 0x1a1b1e,
        showDots: false
      })
    }

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy()
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 h-full">
      <div 
        ref={containerRef}
        className="w-full h-full"
      />
    </div>
  )
}
