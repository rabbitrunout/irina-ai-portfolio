const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive UI",
    ],
  },
  {
    number: "02",
    title: "Product Engineering",
    skills: [
      "REST APIs",
      "React Query",
      "Zustand",
      "Form Validation",
      "Accessibility",
      "Lighthouse",
      "WAVE",
    ],
  },
  {
    number: "03",
    title: "AI & Workflow",
    skills: [
      "AI SDK",
      "Groq",
      "Zod",
      "Tool Calling",
      "Git",
      "GitHub",
      "Jira",
    ],
  },
]

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Skills</p>
          <h2>Technologies I work with.</h2>
        </div>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <div className="skill-group-number">
              {group.number}
            </div>

            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills