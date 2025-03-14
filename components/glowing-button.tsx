import type { ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface GlowingButtonProps {
  children: ReactNode
  href: string
  variant?: "default" | "outline"
  className?: string
}

export default function GlowingButton({ children, href, variant = "default", className }: GlowingButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:")

  const buttonClasses = cn(
    "relative group inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden",
    variant === "default"
      ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
      : "border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 text-gray-900 dark:text-gray-100",
    className,
  )

  const glowClasses =
    "absolute inset-0 w-full h-full transition-all duration-300 blur-lg group-hover:opacity-100 opacity-0 bg-gradient-to-r from-blue-600 to-indigo-600 -z-10"

  const content = (
    <>
      <span className={glowClasses}></span>
      {children}
    </>
  )

  if (isExternal) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={buttonClasses}>
      {content}
    </Link>
  )
}

