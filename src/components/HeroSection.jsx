import { useEffect, useState } from 'react';
import BerryMascot from './BerryMascot';
import NeonWord from './NeonWord';

export default function HeroSection({ content }) {
  const [showLocationMessage, setShowLocationMessage] = useState(true);
  const [typedMessage, setTypedMessage] = useState('');

  const locationLinkText = content.locationMessage.includes('calle')
    ? 'calle Sardenya 360'
    : content.locationMessage.includes('carrer')
      ? 'carrer Sardenya 360'
      : 'Sardenya 360 street';

  const mapsHref =
    content.visitHref ||
    'https://www.google.com/maps/search/?api=1&query=41.4054942,2.1708714';

  const locationLinkIndex = content.locationMessage.indexOf(locationLinkText);
  const renderedPrefix = typedMessage.slice(0, Math.min(locationLinkIndex, typedMessage.length));
  const renderedLink = typedMessage.slice(
    locationLinkIndex,
    Math.min(locationLinkIndex + locationLinkText.length, typedMessage.length),
  );
  const renderedSuffix = typedMessage.slice(
    Math.min(locationLinkIndex + locationLinkText.length, typedMessage.length),
  );

  useEffect(() => {
    let timeoutId;

    const cycleMessage = () => {
      setShowLocationMessage(true);
      timeoutId = window.setTimeout(() => setShowLocationMessage(false), 5000);
    };

    cycleMessage();
    const intervalId = window.setInterval(cycleMessage, 15000);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [content.locationMessage]);

  useEffect(() => {
    if (!showLocationMessage) {
      setTypedMessage('');
      return undefined;
    }

    setTypedMessage('');
    let index = 0;
    const typingInterval = window.setInterval(() => {
      index += 1;
      setTypedMessage(content.locationMessage.slice(0, index));

      if (index >= content.locationMessage.length) {
        window.clearInterval(typingInterval);
      }
    }, 60);

    return () => window.clearInterval(typingInterval);
  }, [showLocationMessage, content.locationMessage]);

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
      </div>

      <div className="hero-section__art">
        <div className="hero-section__titlemark">
          <NeonWord text="AÇAI" tone="pink" />
          <NeonWord text="BERRY" tone="blue" />
        </div>

        <div className="hero-section__mascot-wrapper">
          <div className={`hero-section__speech ${showLocationMessage ? 'is-visible' : ''}`}>
            {renderedPrefix}
            {typedMessage.length > locationLinkIndex ? (
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className="hero-section__speech-link"
              >
                {renderedLink}
              </a>
            ) : null}
            {renderedSuffix}
          </div>
          <BerryMascot />
        </div>
      </div>
    </section>
  );
}
