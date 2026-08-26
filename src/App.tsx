import CaseStudyCard from './components/CaseStudyCard'

function App() {
  return (
    <main>
      <header>
        <p>Frontend & AI Developer</p>

        <h1>Irina Safronova</h1>

        <p>
          I build practical web and AI-powered products with React,
          TypeScript, Next.js, and modern AI tools.
        </p>

        <nav aria-label="Professional links">
          <a
            href="https://github.com/rabbitrunout"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/irina-safronova-688130243/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="/Irina-Safronova-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View CV
          </a>

          <a href="mailto:irina.safronova0801@gmail.com">
            Contact Me
          </a>
        </nav>
      </header>

      <section aria-labelledby="about-heading">
        <h2 id="about-heading">About</h2>

        <p>
          I am a software developer focused on frontend development
          and practical AI integration. I enjoy turning real user
          problems into clear, maintainable interfaces and building
          AI features that are grounded in structured data and tools.
        </p>
      </section>

      <section aria-labelledby="case-studies-heading">
        <h2 id="case-studies-heading">Case Studies</h2>

        <CaseStudyCard
          title="Glowi Club Manager Agent"
          status="AI Agent MVP"
          description="A read-only AI club-management agent that checks competition and payment data, prioritizes what needs attention, and returns an Urgent / Soon / FYI action brief."
          technologies={[
            'Next.js',
            'React',
            'TypeScript',
            'AI SDK',
            'Groq',
            'Zod',
            'Tool Calling',
          ]}
        />

        <CaseStudyCard
          title="Competition Planner"
          status="In Progress"
          description="A lightweight web application for organizing and tracking rhythmic gymnastics competitions."
          technologies={[
            'React',
            'TypeScript',
            'Vite',
            'AI-Assisted Development',
          ]}
        />
      </section>

      <section aria-labelledby="building-heading">
        <h2 id="building-heading">Currently Building</h2>

        <p>
          I am continuing to develop Glowi, an AI-assisted
          club-management experience for rhythmic gymnastics.
          Current work includes structured tool calls, error handling,
          agent workflows, and reusable UI components.
        </p>
      </section>

      <section aria-labelledby="contact-heading">
        <h2 id="contact-heading">Let&apos;s Connect</h2>

        <p>
          I&apos;m open to frontend, software development, and
          AI-focused opportunities.
        </p>

        <a href="mailto:irina.safronova0801@gmail.com">
          Get in touch
        </a>
      </section>

      <footer>
        <p>Built with React, TypeScript, and Vite.</p>
      </footer>
    </main>
  )
}

export default App