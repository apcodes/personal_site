import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Anish Parepalli | CS & Stats @ UNC Chapel Hill",
  description:
    "Personal portfolio website of Anish Parepalli, a Computer Science and Statistics student at UNC Chapel Hill",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

