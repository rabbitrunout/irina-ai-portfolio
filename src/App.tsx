import CaseStudyCard from './components/CaseStudyCard'

function App() {
  return (
    <main>
      <header>
        <h1>Irina Safronova</h1>
        <p>Software Developer | Frontend & AI</p>
      </header>

      <section aria-labelledby="case-studies-heading">
        <h2 id="case-studies-heading">Case Studies</h2>

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
    </main>
  )
}

export default App