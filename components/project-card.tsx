import Link from "next/link"
import { ExternalLinkIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link?: string
  isDarkMode?: boolean
}

export default function ProjectCard({ title, description, tags, link = "#", isDarkMode = false }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border p-6 transition-all hover:shadow-md",
        isDarkMode
          ? "dark:bg-gray-900/50 dark:border-gray-800 dark:hover:border-gray-700 dark:hover:bg-gray-900/80"
          : "bg-white/50 hover:bg-white border-gray-200 hover:border-gray-300",
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 blur-xl"></div>
      </div>

      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={cn(
              "px-3 py-1 text-xs font-medium rounded-full",
              isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-800",
            )}
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={link}
        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
        <ExternalLinkIcon className="ml-1 h-4 w-4" />
      </Link>
    </div>
  )
}

