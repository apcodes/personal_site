"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MoonIcon, SunIcon, GithubIcon, MailIcon, LinkedinIcon, FileTextIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import GlowingButton from "@/components/glowing-button"
import ProfilePhoto from "@/components/profile-photo"

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize dark mode based on user preference
  useEffect(() => {
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
    setIsDarkMode(isDark)

    if (isDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("darkMode", "true")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("darkMode", "false")
    }
  }

  return (
    <div
      className={cn(
        "min-h-screen bg-white text-gray-900 transition-colors duration-300",
        isDarkMode && "dark:bg-gray-950 dark:text-gray-100",
      )}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 to-white dark:from-gray-900 dark:to-gray-950"></div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-gray-800">
        <div className="container flex h-16 items-center">
          {/* Logo - 1/3 width */}
          <div className="w-1/3">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Anish Parepalli
              </span>
            </Link>
          </div>

          {/* Navigation - 1/3 width, centered */}
          <nav className="hidden md:flex items-center justify-center w-1/3">
            <div className="flex items-center space-x-8 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Contact
              </Link>
            </div>
          </nav>

          {/* Dark mode toggle - 1/3 width, right aligned */}
          <div className="flex items-center justify-end w-1/3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-700" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-4 py-8 md:py-12">
          <ProfilePhoto src="/photo.jpg?height=200&width=200" alt="Anish Parepalli" isDarkMode={isDarkMode} />

          <div className="relative mt-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Anish Parepalli</h1>
            <div className="absolute -inset-1 -z-10 blur-xl opacity-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
             Prev @ Vanguard | Current @ UNC CS + Stats | Future @ ????
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6  ">
            <GlowingButton href="#projects" variant="default">
              View Projects
            </GlowingButton>
            <GlowingButton href="#contact" variant="default">
              Get In Touch
            </GlowingButton>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-8 md:py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              About Me
              <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg">
                Hi! I'm Anish Parepalli, a student at UNC. My interests are in software engineering, data science, and
                solving challenging problems. Outside of tech, I'm an avid Tottenham Hotspur fan ⚽ and hold a First
                Degree Black Belt in Taekwondo 🥋. I recently completed a 10-week internship at Vanguard as a Software Engineering Intern, where I built an internal tool using AWS Lambda and TypeScript. The tool cleaned up and fixed an error in Vanguard's DPM runs, ensuring unenrolled clients were no longer counted as
                errored clients—preventing inflated error counts from being reported to senior management. 
              </p>
              <p className="text-lg">
              "I'm always hungry. I can be better always. - Son Heung Min"
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 relative inline-block">
              Projects
              <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                title="Fullstack PDF Parsing Tool"
                description="Built a comprehensive PDF parsing tool using Python, AWS Bedrock (Claude Sonnet 4), and Angular to extract and present Vanguard securities and dividends from 1099-DIV forms. Calculates estimated state and federal tax exemptions based on refund rates with AI-powered guardrails for accuracy. (Not available for public use)"
                tags={["Python", "AWS Bedrock", "Claude Sonnet 4", "Angular"]}
                link="https://theuselessweb.com/"
                isDarkMode={isDarkMode}
              />
              <ProjectCard
                title="The Pastebin + URL Shortener"
                description="Developed a web-based Paste Bin and URL Shortener using Python and RESTful API design principles. Was deployed on Kubernetes OKD until support for pod was ended. Users were able to shorten URLs and store text snippets."
                tags={["Python", "RESTful API", "Kubernetes", "OKD"]}
                link="https://comp423-25s.github.io/ex02-link-share-apcodes/#/"
                isDarkMode={isDarkMode}
              />
              <ProjectCard
                title="Personal Website for Teacher"
                description="Created a Personal Website for a Teacher using JavaScript, HTML, CSS, and Bootstrap and hosted on Github-Pages. Implemented responsive design using Bootstrap's grid system and custom media queries."
                tags={["JavaScript", "HTML", "CSS", "Bootstrap"]}
                link="https://apcodes.github.io/anishpa.github.io"
                isDarkMode={isDarkMode}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-8 md:py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              Get In Touch
              <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            </h2>
            <p className="text-lg mb-6">
              I am always open to discussing new projects, opportunities, or collaborations.
            </p>
            <div className="flex flex-wrap gap-4">
              <GlowingButton href="mailto:Aparepalli@gmail.com" variant="default">
                <MailIcon className="mr-2 h-4 w-4" />
                Email Me
              </GlowingButton>
              <GlowingButton href="https://linkedin.com/in/anish-parepalli" variant="default">
                <LinkedinIcon className="mr-2 h-4 w-4" />
                LinkedIn
              </GlowingButton>
              <GlowingButton href="https://github.com/apcodes" variant="default">
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </GlowingButton>
              <GlowingButton href="/Anish_Parepalli_Resume.pdf" variant="default">
                <FileTextIcon className="mr-2 h-4 w-4" />
                Resume
              </GlowingButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 dark:border-gray-800">
        <div className="container text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Anish Parepalli. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

