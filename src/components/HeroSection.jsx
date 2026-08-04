import BerryMascot from './BerryMascot';
import NeonWord from './NeonWord';

export default function HeroSection({ content }) {
  return (
    <section id="home" className="page-section hero-section">
      <div className="hero-section__content">
        <span className="hero-section__eyebrow">{content.eyebrow}</span>
        <h1>{content.title}</h1>
        <p>{content.description}</p>

        <div className="hero-section__cta">
          <a className="button button--primary" href="#bowls">
            {content.primaryCta}
          </a>
          <a className="button button--ghost" href="#custom">
            {content.secondaryCta}
          </a>
        </div> 
        <div className="hero-section__stats">
          {content.stats.map((item) => (
            <div key={item.label} className="stat-chip">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-section__art">
        <div className="hero-section__titlemark">
          <NeonWord text="AÇAI" tone="pink" />
          <NeonWord text="BERRY" tone="blue" />
        </div>
        <BerryMascot />
      </div>
    </section>
  );
}
