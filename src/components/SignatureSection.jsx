import BowlIllustration from './BowlIllustration';
import SectionHeading from './SectionHeading';

export default function SignatureSection({ content }) {
  return (
    <section id="bowls" className="page-section">
      <div className="panel panel--feature">
        <SectionHeading title={content.title} subtitle={content.subtitle} centered />

        <div className="size-strip">
          {content.sizes.map((size, index) => (
            <article key={size.name} className="size-strip__item">
              <BowlIllustration
                variant={index === 0 ? 'small' : index === 1 ? 'medium' : 'large'}
              />
              <div>
                <h3>{size.name}</h3>
                <p>{size.size}</p>
              </div>
              <strong>{size.price}</strong>
            </article>
          ))}
        </div>

        <div className="menu-grid menu-grid--signature">
          {content.bowls.map((bowl) => (
            <article key={bowl.name} className="menu-card">
              <h3>{bowl.name}</h3>
              <p>{bowl.ingredients}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
