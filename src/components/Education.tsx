function Education() {
  return (
    <section
      className="education-section"
      id="education"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Education</p>
          <h2>Academic foundation.</h2>
        </div>
      </div>

      <div className="education-grid">
        <article className="education-primary">
          <div className="education-primary__top">
            <div>
              <p className="education-school">
                triOS College
              </p>

              <h3>
                Mobile Application Development using AI
              </h3>

              <p className="education-degree">
                Diploma with Distinction · Honours Graduate
              </p>
            </div>

            <p className="education-year">
              2026
            </p>
          </div>

          <div className="education-stats">
            <div>
              <span>GPA</span>
              <strong>98%</strong>
            </div>

            <div>
              <span>Focus</span>
              <strong>
                Mobile · Web · AI
              </strong>
            </div>
          </div>

          <p className="education-copy">
            Coursework included frontend and mobile
            development, database design, UI/UX, object-
            oriented programming, web applications and
            Agile development practices.
          </p>

          <p className="education-stack">
            React · TypeScript · Next.js · SwiftUI · Java ·
            Kotlin · PHP · MySQL · PostgreSQL · REST APIs ·
            Firebase · Git · Agile
          </p>

          <a
            className="education-link"
            href="/Irina_Safronova_Diploma.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View diploma
          </a>
        </article>

        <div className="education-credentials">
          <article className="credential-card">
            <p className="credential-type">
              Certificate
            </p>

            <h3>Claude 101</h3>

            <p>
              Anthropic Academy
            </p>

            <span>2026</span>
          </article>

          <article className="credential-card">
            <p className="credential-type">
              Practical Training
            </p>

            <h3>Frontend AI Engineering</h3>

            <p>
              FlyRank AI
            </p>

            <span>2026</span>
          </article>

          <article className="credential-card">
            <p className="credential-type">
              Applied Experience
            </p>

            <h3>Software Development Practicum</h3>

            <p>
              R-A-Ones Corporation
            </p>

            <span>2026</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Education