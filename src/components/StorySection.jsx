import SectionHeading from './SectionHeading';

export default function StorySection({ content }) {
  return (
    <section id="story" className="page-section">
      <div className="panel story-panel">
        <SectionHeading title={content.title} subtitle={content.subtitle} />

        <div className="story-panel__cards">
          {content.cards.map((card) => (
            <article key={card.title} className="story-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <article id="visit" className="visit-card">
          <div>
            <h3>{content.visitTitle}</h3>
            <p>
              <a href={content.visitHref} target="_blank" rel="noreferrer" className="visit-card__address-link">
                {content.visitText}
              </a>
            </p>
          </div>
          <a
            href={content.visitHref}
            className="button button--ghost"
            target="_blank"
            rel="noreferrer"
          >
            {content.visitCta}
          </a>
        </article>
      </div>
    </section>
  );
}
