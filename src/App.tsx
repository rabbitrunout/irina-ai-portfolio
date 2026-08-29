import './App.css'

import CaseStudyCard from './components/CaseStudyCard'

import ContactForm from './components/ContactForm'

function App() {
  return (
    <main>
      {/* HERO */}
      <header className="hero-section">
        <div className="hero-copy">
          <div className="hero-intro">
            <span>Irina Safronova</span>
            <span>Frontend & AI Developer</span>
          </div>

          <h1>
            Building practical
            <span>AI-powered products.</span>
          </h1>

          <p className="hero-text">
            I build modern web and AI-powered experiences with React,
            TypeScript, Next.js, and AI tools — focused on real users,
            clear interfaces, and useful automation.
          </p>

          <nav aria-label="Professional links">
            <a
              className="primary-link"
              href="#contact"
            >
              Get in touch
            </a>

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
              Resume
            </a>
          </nav>
        </div>

        <aside className="hero-card">
          <span>Currently building</span>

          <strong>Glowi Club Manager Agent</strong>

          <p>
            A tool-grounded AI agent that helps club managers identify
            competition and payment actions that need attention.
          </p>

          <div className="availability">
            <span className="status-dot" />
            Open to opportunities
          </div>
        </aside>
      </header>

      {/* SELECTED WORK */}
      <section className="selected-work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Projects I&apos;m building and shipping.</h2>
          </div>

          <span>2026</span>
        </div>

        <div className="featured-project">
          <div className="project-topline">
            <span>Featured AI project</span>
            <span>AI Agent MVP</span>
          </div>

          <h3>Glowi Club Manager Agent</h3>

          <p>
            A read-only club-management agent that checks competition
            and payment data, determines priorities with tool-grounded
            logic, and returns a clear Urgent / Soon / FYI action brief.
          </p>

          <div className="project-meta">
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>AI SDK</span>
            <span>Groq</span>
            <span>Zod</span>
            <span>Tool Calling</span>
          </div>
        </div>

        <div className="secondary-projects">
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

          <article className="approach-card">
            <span>How I work</span>

            <h3>Build, test, iterate.</h3>

            <ul>
              <li>Build for real users and real workflows.</li>
              <li>Ground AI features in structured data.</li>
              <li>Test failure states, not only the happy path.</li>
              <li>Ship small, then improve with evidence.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-strip">
        <div>
          <p className="eyebrow">About</p>

          <h2>
            Frontend engineering with practical AI integration.
          </h2>
        </div>

        <p>
          I am a software developer focused on frontend development and
          useful AI features. I enjoy turning real user problems into
          clear interfaces, reusable components, structured workflows,
          and products that are understandable beyond the demo.
        </p>
      </section>

      {/* CURRENTLY BUILDING */}
      <section className="building-section">
        <p className="eyebrow">Currently building</p>

        <div className="building-grid">
          <div>
            <h2>
              Glowi is becoming more than a chat interface.
            </h2>

            <p>
              Current work includes structured tool results, agent
              workflows, deterministic priority logic, failure handling,
              and reusable UI components for club-management tasks.
            </p>
          </div>

          <div className="build-list">
            <span>01 · Tool calling</span>
            <span>02 · Structured UI</span>
            <span>03 · Agent workflows</span>
            <span>04 · Error handling</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
<section className="contact-section" id="contact">
  <p className="eyebrow">Let&apos;s connect</p>

  <h2>Let&apos;s build something useful.</h2>

  <p>
    I&apos;m open to roles and projects where I can build useful
    products, learn quickly, and contribute across frontend and AI
    workflows.
  </p>

  <ContactForm />
</section>

      {/* FOOTER */}
      <footer>
        <span>Irina Safronova</span>
        <span>React · TypeScript · Next.js · AI</span>
      </footer>
    </main>
  )
}

export default App