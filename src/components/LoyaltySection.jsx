import { useEffect, useState } from 'react';
import BerryMascot from './BerryMascot';
import NeonWord from './NeonWord';

const REWARD_INGREDIENTS = [
  { name: 'Fresa', src: '/fruits/Trozo Fresa.png', className: 'loyalty-card__reward-item--strawberry' },
  { name: 'Almendras', src: '/topping-extras/Almendras.png', className: 'loyalty-card__reward-item--almonds' },
  { name: 'Oreo', src: '/toppings/Oreo.png', className: 'loyalty-card__reward-item--oreo' },
  { name: 'Plátano', src: '/fruits/Trozo plátano.png', className: 'loyalty-card__reward-item--banana' },
  { name: 'Arándanos', src: '/fruits/Trozo Arándano.png', className: 'loyalty-card__reward-item--blueberry' }
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21c4.4-5.2 6.6-8.8 6.6-11.1A6.6 6.6 0 1 0 5.4 9.9C5.4 12.2 7.6 15.8 12 21Z" />
      <circle cx="12" cy="10" r="2.8" />
    </svg>
  );
}

function ContactIcon({ icon }) {
  if (icon === 'instagram') {
    return <InstagramIcon />;
  }

  return <LocationIcon />;
}

function LoyaltyStamp({ number, isComplete }) {
  return (
    <div
      className={`loyalty-stamp ${isComplete ? 'is-complete' : ''}`.trim()}
      aria-label={isComplete ? `Sello ${number} completado` : `Sello ${number}`}
    >
      <span className="loyalty-stamp__burst loyalty-stamp__burst--left" />
      <span className="loyalty-stamp__burst loyalty-stamp__burst--center" />
      <span className="loyalty-stamp__burst loyalty-stamp__burst--right" />
      <span className="loyalty-stamp__leaf loyalty-stamp__leaf--main" />
      <span className="loyalty-stamp__leaf loyalty-stamp__leaf--accent" />
      <span className="loyalty-stamp__berry">{number}</span>
      <span className="loyalty-stamp__check">{'\u2713'}</span>
    </div>
  );
}

function LoyaltyBackCard({ content, completedStamps }) {
  const isRewardVisible = completedStamps === 8;

  return (
    <article className="loyalty-card loyalty-card--back" aria-labelledby="loyalty-card-back-title">
      <div className="loyalty-card__inner loyalty-card__inner--light">
        <div className="loyalty-card__topline">
          <span className="loyalty-card__line" />
          <p id="loyalty-card-back-title">{content.badgeTitle}</p>
          <span className="loyalty-card__line" />
        </div>

        <div className="loyalty-card__progress-stage">
          <div className={`loyalty-card__stamp-grid ${isRewardVisible ? 'is-hidden' : ''}`.trim()}>
            {Array.from({ length: 8 }, (_, index) => (
              <LoyaltyStamp key={index + 1} number={index + 1} isComplete={index < completedStamps} />
            ))}
          </div>

          <div className={`loyalty-card__reward-banner ${isRewardVisible ? 'is-visible' : ''}`.trim()}>
            <div className="loyalty-card__reward-visual">
              <div className="loyalty-card__reward-bowl-scene" aria-hidden="true">
                <img
                  className="loyalty-card__reward-bowl"
                  src="/bowls/Bowl con Açai.png"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                {REWARD_INGREDIENTS.map((ingredient) => (
                  <img
                    key={ingredient.name}
                    className={`loyalty-card__reward-item ${ingredient.className}`.trim()}
                    src={ingredient.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
              <strong>{content.freeBowlMessage}</strong>
            </div>
          </div>
        </div>

        <div className="loyalty-card__reward">
          <strong>{content.rewardLine}</strong>
          <p>{content.rewardNote}</p>
        </div>
      </div>
    </article>
  );
}

function LoyaltyFrontCard({ brand, content }) {
  const [brandFirst, brandSecond] = brand.split(' ');

  return (
    <article className="loyalty-card loyalty-card--front" aria-labelledby="loyalty-card-front-title">
      <div className="loyalty-card__backdrop" aria-hidden="true">
        <span className="loyalty-card__wave loyalty-card__wave--one" />
        <span className="loyalty-card__wave loyalty-card__wave--two" />
        <span className="loyalty-card__wave loyalty-card__wave--three" />
      </div>

      <div className="loyalty-card__inner loyalty-card__inner--dark">
        <header className="loyalty-card__brandmark" id="loyalty-card-front-title">
          <NeonWord text={brandFirst.toUpperCase()} tone="pink" />
          <NeonWord text={brandSecond.toUpperCase()} tone="blue" />
        </header>

        <div className="loyalty-card__hero">
          <span className="loyalty-card__tag loyalty-card__tag--left">{content.frontTags[0]}</span>
          <div className="loyalty-card__mascot">
            <BerryMascot />
          </div>
          <span className="loyalty-card__tag loyalty-card__tag--right">{content.frontTags[1]}</span>
        </div>

        <footer className="loyalty-card__footer">
          {content.contacts.map((contact) => (
            <div key={contact.label} className="loyalty-card__contact">
              <ContactIcon icon={contact.icon} />
              <span>{contact.label}</span>
            </div>
          ))}
        </footer>
      </div>
    </article>
  );
}

export default function LoyaltySection({ content, brand }) {
  const [completedStamps, setCompletedStamps] = useState(0);

  useEffect(() => {
    const timeoutId =
      completedStamps < 8
        ? window.setTimeout(() => {
            setCompletedStamps((current) => current + 1);
          }, 300)
        : window.setTimeout(() => {
            setCompletedStamps(0);
          }, 1800);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [completedStamps]);

  return (
    <section id="loyalty" className="page-section">
      <div className="panel loyalty-panel">
        <h2 className="sr-only">{content.title}</h2>
        <div className="loyalty-gallery loyalty-gallery--reconstructed">
          <LoyaltyBackCard content={content} completedStamps={completedStamps} />
          <LoyaltyFrontCard brand={brand} content={content} />
        </div>
      </div>
    </section>
  );
}
