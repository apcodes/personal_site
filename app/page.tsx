const LINKS = [
  { label: "GitHub", href: "https://github.com/apcodes" },
  { label: "LinkedIn", href: "https://linkedin.com/in/anish-parepalli" },
  { label: "Email", href: "mailto:aparepalli@gmail.com" },
  { label: "Resume", href: "/Anish_Parepalli_Resume.pdf" },
]

const FACTS = [
  "Software engineer based in Charlotte, NC",
  "Application Engineer at Vanguard in Advice & Wealth Management Tech. Most recently, swapped Netflix's Falcor for direct API integrations and cut latency 2–3x across 900K+ monthly calls",
  "Built a Claude-powered release tool on Atlassian MCP; its AI execution layer became a pattern other teams adopted",
  "Before that: intern at Vanguard and at CS + Social Good",
  "B.S. Computer Science + Statistics, UNC Chapel Hill, 2026; TA for Foundations of Programming",
  "Lately drawn to low-level systems and performance engineering",
  "First-degree black belt in Taekwondo; long-suffering Spurs fan",
]

export default function Home() {
  return (
    <main className="home">
      <div className="home-scrim" aria-hidden="true" />
      <section className="intro">
        <p className="motto">
          some sharks never stop swimming.
          <br />
          i relate.<span className="cursor" aria-hidden="true" />
        </p>

        <h1 className="name">Anish Parepalli</h1>

        <ul className="links">
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith("http") || href.endsWith(".pdf")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="facts">
          {FACTS.map((fact, i) => (
            <li key={fact} style={{ animationDelay: `${0.35 + i * 0.12}s` }}>
              {fact}
            </li>
          ))}
        </ul>

        <p className="credits">
          inspired by <a href="https://www.daoho.dev/" target="_blank" rel="noreferrer">daoho.dev</a>
          {" & "}
          <a href="https://jwahn.com/" target="_blank" rel="noreferrer">jwahn.com</a>
          {" · ocean from "}
          <a href="https://github.com/stackedlol/ascii-sharks" target="_blank" rel="noreferrer">
            stackedlol/ascii-sharks
          </a>
        </p>
      </section>

      <p className="hint" aria-hidden="true">
        move to scatter the fish · click to splash
      </p>
    </main>
  )
}
