import './App.css'

import Process from './components/Process'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import ContactForm from './components/ContactForm'
import ShaderBackground from './components/ShaderBackground'

import {
  featuredProjects,
  moreProjects,
} from './data/projectsData'

function App() {
  return (
    <main>
      {/* HERO */}
      <header className="hero-section">
        <ShaderBackground />

        <div className="hero-copy">
          <div className="hero-intro">
            <span>Portfolio 2026</span>
            <span>Frontend · AI · Product</span>
          </div>

          <nav
            className="site-nav"
            aria-label="Portfolio sections"
          >
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

          <h1>
            Irina Safronova
            <span>Frontend & AI Developer</span>
          </h1>

          <p className="hero-tagline">
            Building practical web products with AI.
          </p>

          <p className="hero-text">
            I build user-focused frontend products with React
            and TypeScript, using AI where it makes the product
            or development workflow more useful.
          </p>

          <p className="hero-stack">
            React · TypeScript · Next.js · AI
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
          <div className="hero-card-top">
            <span>Currently building</span>
            <span className="hero-card-badge">
              AI Agent
            </span>
          </div>

          <strong>Glowi Club Manager Agent</strong>

          <p>
            A tool-grounded AI agent that helps club
            managers identify competition and payment
            actions that need attention.
          </p>

          <div className="hero-dashboard">
            <div className="dashboard-row urgent">
              <span>Urgent</span>
              <strong>3</strong>
            </div>

            <div className="dashboard-row soon">
              <span>Soon</span>
              <strong>5</strong>
            </div>

            <div className="dashboard-row fyi">
              <span>FYI</span>
              <strong>8</strong>
            </div>
          </div>

          <div
            className="hero-mini-chart"
            aria-hidden="true"
          >
            <svg viewBox="0 0 220 70">
              <polyline
                points="0,58 28,46 52,52 78,32 104,39 132,20 158,27 188,12 220,18"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="hero-tech">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>AI SDK</span>
            <span>Tool Calling</span>
          </div>

          <div className="availability">
            <span
              className="status-dot"
              aria-hidden="true"
            />
            Open to opportunities
          </div>
        </aside>
      </header>

      {/* ABOUT */}
      <section
        className="about-strip"
        id="about"
      >
        <div>
          <p className="eyebrow">About</p>

          <h2>
            Frontend engineering with practical AI
            integration.
          </h2>
        </div>

        <p>
          I am a software developer focused on frontend
          development and useful AI features. I enjoy turning
          real user problems into clear interfaces, reusable
          components, structured workflows, and products that
          are understandable beyond the demo.
        </p>
      </section>

      {/* SKILLS */}
      <Skills />

      {/* FEATURED WORK */}
      <section
        className="selected-work"
        id="work"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              Featured work
            </p>

            <h2>
              Product-focused work across web, mobile,
              and AI.
            </h2>
          </div>

          <span>2026</span>
        </div>

        <div className="featured-projects-grid">
          {featuredProjects.map((project) => (
            <article
              className="featured-project"
              key={project.id}
            >
              <div className="project-topline">
                <span>{project.badge}</span>

                {project.status && (
                  <span>
                    {project.status}
                  </span>
                )}
              </div>

              <div className="featured-project-content">
                <div className="featured-project-copy">
                  <h3>{project.title}</h3>

                  <p>{project.shortDesc}</p>

                  {project.engineering && (
                    <ul className="project-engineering-list">
                      {project.engineering
                        .slice(0, 3)
                        .map((item) => (
                          <li key={item}>
                            {item}
                          </li>
                        ))}
                    </ul>
                  )}

                  <p className="project-tech">
                    {project.tech}
                  </p>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live site
                      </a>
                    )}
                  </div>
                </div>

                {project.media[0] && (
                  <div className="featured-project-media">
                    {project.media[0].type ===
                    'video' ? (
                      <video
                        src={
                          project.media[0].src
                        }
                        muted
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={
                          project.media[0].src
                        }
                        alt={`${project.title} interface`}
                        loading="lazy"
                      />
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MORE WORK */}
      <section className="more-work-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              More work
            </p>

            <h2>
              Additional projects across frontend
              and mobile.
            </h2>
          </div>
        </div>

        <div className="more-work-grid">
          {moreProjects.map(
            (project, index) => (
              <article
                className="more-work-card"
                key={project.id}
              >
                <div className="more-work-number">
                  {String(
                    index + 1,
                  ).padStart(2, '0')}
                </div>

                <div className="more-work-card-content">
                  <p className="more-work-badge">
                    {project.badge}
                  </p>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.shortDesc}
                  </p>

                  <p className="project-tech">
                    {project.tech}
                  </p>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={
                          project.github
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={
                          project.live
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live site
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      {/* EXPERIENCE */}
      <Experience />

      {/* EDUCATION */}
      <Education />

      {/* PROCESS */}
      <Process />

      {/* CURRENTLY BUILDING */}
      <section className="building-section">
        <p className="eyebrow">
          Currently building
        </p>

        <div className="building-grid">
          <div>
            <h2>
              Glowi is becoming more than a chat
              interface.
            </h2>

            <p>
              Current work includes structured tool
              results, agent workflows,
              deterministic priority logic, failure
              handling, and reusable UI components
              for club-management tasks.
            </p>
          </div>

          <div className="build-list">
            <span>
              01 · Tool calling
            </span>

            <span>
              02 · Structured UI
            </span>

            <span>
              03 · Agent workflows
            </span>

            <span>
              04 · Error handling
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="contact-section"
        id="contact"
      >
        <p className="eyebrow">
          Let&apos;s connect
        </p>

        <h2>
          Let&apos;s build something useful.
        </h2>

        <p>
          I&apos;m open to roles and projects where
          I can build useful products, learn quickly,
          and contribute across frontend and AI
          workflows.
        </p>

        <ContactForm />
      </section>

      {/* FOOTER */}
      <footer>
        <span>Irina Safronova</span>

        <span>
          React · TypeScript · Next.js · AI
        </span>
      </footer>
    </main>
  )
}

export default App