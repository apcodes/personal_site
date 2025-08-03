import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProfilePhotoProps {
  src: string
  alt: string
  size?: number
  isDarkMode?: boolean
}

export default function ProfilePhoto({ src, alt, size = 200, isDarkMode = false }: ProfilePhotoProps) {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <div
        className={cn(
          "absolute -inset-0.5 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000",
          isDarkMode ? "bg-blue-500" : "bg-blue-600",
        )}
      ></div>

      {/* Border */}
      <div
        className={cn(
          "absolute inset-0 rounded-full",
          isDarkMode ? "bg-gradient-to-r from-blue-600 to-indigo-600" : "bg-gradient-to-r from-blue-500 to-indigo-500",
        )}
      ></div>

      {/* Image container */}
      <div className="relative rounded-full p-1">
        <div className="w-[200px] h-[200px] overflow-hidden rounded-full bg-white dark:bg-gray-900">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={size}
            height={size}
            className="rounded-full object-cover w-full h-full"
            priority
          />
        </div>
      </div>


    </div>
  )
}

