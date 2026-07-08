export default function SectionHeading({ title, subtitle, centered = false }) {
  return (
    <div className={`section-heading ${centered ? 'section-heading--centered' : ''}`}>
      <div className="section-heading__line" />
      <div>
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      <div className="section-heading__line" />
    </div>
  );
}
