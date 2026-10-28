"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { OceanEngine, type SharkSpec } from "@/lib/ocean"

// One of each, at different depths. The first is the biggest.
const SHARKS: SharkSpec[] = [
  { kind: "greathammer", size: 1 },
  { kind: "mako", size: 0.8 },
  { kind: "classic", size: 0.74 },
  { kind: "tiger", size: 0.68 },
]

const NAV = [
  { href: "/", label: "ocean" },
  { href: "/projects", label: "projects" },
  { href: "/Anish_Parepalli_Resume.pdf", label: "resume", external: true },
]

/**
 * Persistent chrome shared by every page: the ASCII ocean behind everything,
 * the centered mono nav, and a running tally of fish the sharks have eaten.
 * Lives in the root layout so the ocean keeps swimming across navigations.
 */
export default function OceanShell() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [eaten, setEaten] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const engine = new OceanEngine(canvas, SHARKS)
    engine.onEat = () => setEaten((n) => n + 1)
    return () => engine.destroy()
  }, [])

  return (
    <>
      <canvas ref={canvasRef} aria-hidden="true" className="ocean" />

      <nav className="nav" aria-label="Primary">
        {NAV.map(({ href, label, external }) => {
          const active = !external && pathname === href
          return external ? (
            <a key={href} href={href} target="_blank" rel="noreferrer">
              {label}
              <span className="nav-arrow">↗</span>
            </a>
          ) : (
            <Link key={href} href={href} className={active ? "active" : undefined}>
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="tally" aria-live="off" title="fish eaten by sharks since you arrived">
        <span className="tally-num">{eaten}</span>
        <span className="tally-label">eaten</span>
      </div>
    </>
  )
}
