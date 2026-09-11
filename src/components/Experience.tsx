function Experience() {
  return (
    <section
      className="experience-section"
      id="experience"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Experience</p>
          <h2>Professional experience.</h2>
        </div>
      </div>

      <div className="experience-grid">
        <article className="experience-card">
          <div className="experience-card-header">
            <div>
              <p className="experience-company">
                R-A-Ones Corporation
              </p>

              <h3>
                Software Developer Intern · Frontend
              </h3>

              <p className="experience-project">
                PHD Parking Platform · Admin System
              </p>
            </div>

            <p className="experience-date">
              Jan 2026 — May 2026
            </p>
          </div>

          <p className="experience-location">
            Brampton, Ontario
          </p>

          <ul>
            <li>
              Shipped 5+ frontend features for the PHD
              Parking admin platform using Next.js and
              TypeScript.
            </li>

            <li>
              Built workflows for authentication, user
              management, bookings, vehicles and platform
              administration.
            </li>

            <li>
              Developed reusable UI components with form
              validation, loading, error and empty states.
            </li>

            <li>
              Integrated frontend flows with REST API-driven
              application logic and shared state management.
            </li>

            <li>
              Collaborated in an Agile team using Jira,
              Git, pull requests and code review.
            </li>
          </ul>

          <p className="experience-stack">
            Next.js · TypeScript · React · REST APIs ·
            React Query · Zustand · React Hook Form · Zod
          </p>
        </article>

        <article className="experience-card">
          <div className="experience-card-header">
            <div>
              <p className="experience-company">
                FlyRank AI
              </p>

              <h3>
                Frontend AI Engineering Intern
              </h3>

              <p className="experience-project">
                Frontend Engineering · AI-Assisted Development
              </p>
            </div>

            <p className="experience-date">
              Jul 2026 — Sep 2026
            </p>
          </div>

          <p className="experience-location">
            Remote
          </p>

          <ul>
            <li>
  Built and refined React and TypeScript interfaces
  across production-focused frontend projects.
</li>

            <li>
              Improved accessibility and performance using
              Lighthouse, WAVE, keyboard testing and mobile
              validation.
            </li>

            <li>
              Applied AI-assisted workflows to planning,
              debugging, documentation and structured code
              review.
            </li>

            <li>
              Tested responsive behavior, edge cases and
              production-readiness across frontend projects.
            </li>

            <li>
              Documented engineering decisions through
              audits, workflow notes and case studies.
            </li>
          </ul>

          <p className="experience-stack">
            React · TypeScript · Accessibility · Performance ·
            Testing · AI-Assisted Development
          </p>
        </article>
      </div>
    </section>
  )
}

export default Experience