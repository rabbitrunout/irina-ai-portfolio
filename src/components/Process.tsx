const processSteps = [
  {
    number: "01",
    title: "Understand",
    text:
      "Clarify the user problem, product goal, constraints, and the information the interface needs to communicate.",
  },
  {
    number: "02",
    title: "Build",
    text:
      "Create the interface with reusable components, predictable state, responsive behavior, and clear interaction flows.",
  },
  {
    number: "03",
    title: "Refine",
    text:
      "Test accessibility, performance, edge cases, and failure states, then improve the experience based on evidence.",
  },
]

function Process() {
  return (
    <section className="process-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Process</p>
          <h2>From product idea to polished interface.</h2>
        </div>
      </div>

      <div className="process-grid">
        {processSteps.map((step) => (
          <article className="process-card" key={step.number}>
            <span>{step.number}</span>

            <h3>{step.title}</h3>

            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Process