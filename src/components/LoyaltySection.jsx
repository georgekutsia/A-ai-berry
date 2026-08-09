import { useEffect, useState } from 'react';
import BerryMascot from './BerryMascot';
import NeonWord from './NeonWord';

const REWARD_INGREDIENTS = [
  { name: 'Fresa', src: '/fruits/Trozo Fresa.webp', size: 4.8 },
  { name: 'Arandanos', src: '/fruits/Trozo Ar%C3%A1ndano.webp', size: 3.4 },
  { name: 'Kiwi', src: '/fruits/Trozo Kiwi.webp', size: 4.2 },
  { name: 'Mango', src: '/fruits/Trozo Mango.webp', size: 5.1 },
  { name: 'Pistacho', src: '/topping-extras/pistacho.webp', size: 4.05 },
  { name: 'Oreo', src: '/toppings/oreo.webp', size: 4.4 },
  { name: 'Platano', src: '/fruits/Trozo pl%C3%A1tano.webp', size: 4.6 },
  { name: 'Granola', src: '/toppings/granola.webp', size: 4.75 }
];

const REWARD_BOWL_SRC = '/bowls/Bowl con A%C3%A7ai.webp';

const REWARD_ARC_CENTER_X = 50;
const REWARD_ARC_CENTER_Y = 69;

function getRewardArcConfig(viewportWidth, viewportHeight) {
  if (viewportWidth < 960 && viewportWidth > viewportHeight) {
    return viewportWidth < 570 ? { radiusX: 39.2, radiusY: 30.8 } : { radiusX: 58.8, radiusY: 47.6 };
  }

  if (viewportWidth < 570) {
    return { radiusX: 56, radiusY: 44 };
  }

  return { radiusX: 84, radiusY: 68 };
}

function getRewardArcPoint(index, total, viewportWidth, viewportHeight) {
  const { radiusX, radiusY } = getRewardArcConfig(viewportWidth, viewportHeight);
  const progress = total <= 1 ? 0.5 : index / (total - 1);
  const angle = Math.PI - progress * Math.PI;

  return {
    x: Math.cos(angle) * radiusX,
    y: -Math.sin(angle) * radiusY
  };
}

function getRewardOrbitStyle(index, ingredient, viewportWidth, viewportHeight) {
  const point = getRewardArcPoint(index, REWARD_INGREDIENTS.length, viewportWidth, viewportHeight);

  return {
    '--reward-delay': `${index * 0.1}s`,
    '--reward-float-delay': `${0.25 + index * 0.1}s`,
    '--reward-size': `${ingredient.size}rem`,
    '--reward-offset-x': `${point.x.toFixed(2)}%`,
    '--reward-offset-y': `${point.y.toFixed(2)}%`,
    left: `calc(${REWARD_ARC_CENTER_X}% + ${point.x.toFixed(2)}%)`,
    top: `calc(${REWARD_ARC_CENTER_Y}% + ${point.y.toFixed(2)}%)`
  };
}

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

function LoyaltyBackCard({ content, completedStamps, isRewardVisible }) {
  const isSpanishStyleReward = content.freeBowlNeon?.includes('gratis');
  const [viewport, setViewport] = useState(() =>
    typeof window === 'undefined'
      ? { width: 1200, height: 800 }
      : { width: window.innerWidth, height: window.innerHeight }
  );

  useEffect(() => {
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
                {false ? (
                <img
                  className="loyalty-card__reward-bowl"
                  src="/bowls/Bowl con Açai.png"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                ) : (
                  <img
                    className="loyalty-card__reward-bowl"
                    src={REWARD_BOWL_SRC}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                )}
                {REWARD_INGREDIENTS.map((ingredient, index) => (
                  <span
                    key={ingredient.name}
                    className="loyalty-card__reward-orbit"
                    style={getRewardOrbitStyle(index, ingredient, viewport.width, viewport.height)}
                  >
                    <img
                      className="loyalty-card__reward-item"
                      src={ingredient.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`loyalty-card__reward ${isRewardVisible ? 'is-showing-neon' : ''}`.trim()}>
          <div className="loyalty-card__reward-copy loyalty-card__reward-copy--default">
            <strong>{content.rewardLine}</strong>
            <p>{content.rewardNote}</p>
          </div>

          <div className="loyalty-card__reward-copy loyalty-card__reward-copy--neon" aria-live="polite">
            <NeonWord
              text={content.freeBowlNeon.toUpperCase()}
              tone="pink"
              className="loyalty-card__reward-neon-word"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function LoyaltyFrontCard({ brand, content, mapsHref }) {
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
          {content.contacts.map((contact) => {
            const isLocation = contact.icon === 'location';
            const ContactElement = isLocation ? 'a' : 'div';

            return (
              <ContactElement
                key={contact.label}
                className="loyalty-card__contact"
                {...(isLocation ? { href: mapsHref, target: '_blank', rel: 'noreferrer' } : {})}
              >
                <ContactIcon icon={contact.icon} />
                <span>{contact.label}</span>
              </ContactElement>
            );
          })}
        </footer>
      </div>
    </article>
  );
}

export default function LoyaltySection({ content, brand, mapsHref }) {
  const [completedStamps, setCompletedStamps] = useState(0);
  const [isRewardVisible, setIsRewardVisible] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (completedStamps < 8) {
      timeoutId = window.setTimeout(() => {
        setCompletedStamps((current) => current + 1);
      }, 120);
    } else if (!isRewardVisible) {
      timeoutId = window.setTimeout(() => {
        setIsRewardVisible(true);
      }, 500);
    } else {
      timeoutId = window.setTimeout(() => {
        setIsRewardVisible(false);
        setCompletedStamps(0);
      }, 2800);
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [completedStamps, isRewardVisible]);

  return (
    <section id="loyalty" className="page-section">
      <div className="panel loyalty-panel">
        <h2 className="sr-only">{content.title}</h2>
        <div className="loyalty-gallery loyalty-gallery--reconstructed">
          <LoyaltyBackCard
            content={content}
            completedStamps={completedStamps}
            isRewardVisible={isRewardVisible}
          />
          <LoyaltyFrontCard brand={brand} content={content} mapsHref={mapsHref} />
        </div>
      </div>
    </section>
  );
}
