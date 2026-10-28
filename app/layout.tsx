import type React from "react"
import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import "@fontsource-variable/newsreader"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import OceanShell from "@/components/ocean-shell"

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Anish Parepalli",
  description: "Software engineer in Charlotte, NC. Application Engineer at Vanguard, UNC Chapel Hill CS + Statistics '26.",
}

export const viewport: Viewport = {
  themeColor: "#070707",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body>
        <OceanShell />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
