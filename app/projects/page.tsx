import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects · Anish Parepalli",
}

type Project = {
  name: string
  when: string
  stack: string
  blurb: string
  href?: string
}

const PROJECTS: Project[] = [
  {
    name: "AI-Powered FAQ System",
    when: "UNC CS",
    stack: "Python · FastAPI · Angular · OpenAI API",
    blurb:
      "Retrieval-based assistant that answers course questions for students across 20 CS courses, cutting duplicate office-hour questions by 35%. Built the FastAPI backend, auth and role-based access, and the web frontend.",
  },
  {
    name: "Oriole",
    when: "Full-stack app",
    stack: "Next.js · TypeScript · tRPC · Drizzle · Supabase",
    blurb:
      "A web app shipped to 200+ users. Type-safe APIs with tRPC and Zod, Postgres through Drizzle and Supabase, and features owned end to end from UI to deployment.",
  },
  {
    name: "Tax Optimization Web App",
    when: "Vanguard · 2025",
    stack: "Python · Flask · AWS Bedrock · DynamoDB · Claude",
    blurb:
      "Automates state tax-exempt dividend analysis across 300+ mutual funds. A Python API on DynamoDB serves requests in under 200ms, and Claude on Bedrock writes the tax-planning summaries. Internal only.",
  },
  {
    name: "Pastebin + URL Shortener",
    when: "COMP 423 · Spring 2025",
    stack: "Python · REST · Kubernetes (OKD)",
    blurb:
      "Paste text, shorten links. A REST service deployed on OKD until the course cluster was retired.",
    href: "https://comp423-25s.github.io/ex02-link-share-apcodes/#/",
  },
  {
    name: "Teacher's Website",
    when: "Side project",
    stack: "JavaScript · Bootstrap · GitHub Pages",
    blurb: "A responsive personal site for a teacher, built on Bootstrap's grid with custom breakpoints.",
    href: "https://apcodes.github.io/anishpa.github.io",
  },
  {
    name: "This site",
    when: "2026",
    stack: "Next.js · Canvas",
    blurb:
      "Boids, hungry sharks, and a wake that lights up where things swim. The ocean is adapted from stackedlol/ascii-sharks (MIT); the design borrows from daoho.dev and jwahn.com.",
    href: "https://github.com/apcodes/personal_site",
  },
]

export default function Projects() {
  return (
    <main className="page">
      <div className="panel">
        <h1 className="page-title">Projects</h1>
        <ol className="projects">
          {PROJECTS.map((p, i) => (
            <li key={p.name} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
              <div className="project-head">
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noreferrer" className="project-name">
                    {p.name}
                    <span className="nav-arrow">↗</span>
                  </a>
                ) : (
                  <span className="project-name">{p.name}</span>
                )}
                <span className="project-when">{p.when}</span>
              </div>
              <p className="project-blurb">{p.blurb}</p>
              <p className="project-stack">{p.stack}</p>
            </li>
          ))}
        </ol>
      </div>
    </main>
  )
}
