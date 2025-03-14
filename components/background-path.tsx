"use client"

import { useEffect } from "react"

export default function BackgroundPath() {
  useEffect(() => {
    // Create canvas element programmatically to avoid ref issues
    const canvas = document.createElement("canvas")
    canvas.className = "absolute top-0 left-0 w-full h-full -z-10"
    canvas.style.pointerEvents = "none"

    // Append to body after it's available
    if (document.body) {
      document.body.appendChild(canvas)
    }

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawPath()
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Draw the background path - simplified version
    function drawPath() {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set path style
      ctx.strokeStyle = "rgba(230, 230, 230, 0.8)"
      ctx.lineWidth = 1.5

      // Create a simpler flowing path
      ctx.beginPath()

      // Start from left side
      ctx.moveTo(0, canvas.height * 0.3)

      // Create a simple curve
      ctx.bezierCurveTo(
        canvas.width * 0.3,
        canvas.height * 0.1,
        canvas.width * 0.6,
        canvas.height * 0.5,
        canvas.width,
        canvas.height * 0.3,
      )

      // Continue to bottom right
      ctx.lineTo(canvas.width, canvas.height)

      // Continue to bottom left
      ctx.lineTo(0, canvas.height)

      // Close the path
      ctx.closePath()

      // Fill with very subtle gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(250, 250, 250, 0.5)")
      gradient.addColorStop(1, "rgba(245, 245, 245, 0.8)")
      ctx.fillStyle = gradient
      ctx.fill()

      // Stroke the path
      ctx.stroke()
    }

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas)
      }
    }
  }, [])

  // Return an empty div as a placeholder
  return null
}

