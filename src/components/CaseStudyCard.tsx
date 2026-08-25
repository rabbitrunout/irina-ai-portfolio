type CaseStudyCardProps = {
  title: string
  status: string
  description: string
  technologies: string[]
}

function CaseStudyCard({
  title,
  status,
  description,
  technologies,
}: CaseStudyCardProps) {
  return (
    <article>
      <span>{status}</span>

      <h2>{title}</h2>

      <p>{description}</p>

      <p>
        <strong>Stack:</strong> {technologies.join(' · ')}
      </p>
    </article>
  )
}

export default CaseStudyCard