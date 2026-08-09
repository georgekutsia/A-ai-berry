import { useEffect, useState } from 'react';
import CustomBowlSection from './components/CustomBowlSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LoyaltySection from './components/LoyaltySection';
import SignatureSection from './components/SignatureSection';
import StorySection from './components/StorySection';
import { languages, siteContent } from './data/content';

const DEFAULT_LANGUAGE = 'es';

export default function App() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem('acai-berry-language');
    return languages.includes(savedLanguage) ? savedLanguage : DEFAULT_LANGUAGE;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    window.localStorage.setItem('acai-berry-language', language);
    document.documentElement.lang = siteContent[language].locale;
  }, [language]);

  useEffect(() => {
    const sectionIds = ['home', 'bowls', 'custom', 'loyalty', 'story', 'visit'];
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const content = siteContent[language];
  const navItems = [
    { id: 'home', label: content.nav.home },
    { id: 'bowls', label: content.nav.bowls },
    { id: 'custom', label: content.nav.custom },
    { id: 'loyalty', label: content.nav.loyalty },
    { id: 'story', label: content.nav.story },
    { id: 'visit', label: content.nav.visit },
  ];

  const handleNavClick = (event, sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <div className="background-layer" aria-hidden="true">
        <span className="bubble bubble--one" />
        <span className="bubble bubble--two" />
        <span className="bubble bubble--three" />
        <span className="leaf leaf--one" />
        <span className="leaf leaf--two" />
        <span className="leaf leaf--three" />
      </div>

      <Header
        navItems={navItems}
        currentLanguage={language}
        languages={languages}
        languageLabel={content.footer.languageLabel}
        menuLabel={content.nav.menu}
        onLanguageChange={setLanguage}
        isMenuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onNavClick={handleNavClick}
        activeSection={activeSection}
      />

      <main className="page-shell">
        <HeroSection content={content.hero} />
        <SignatureSection content={content.signature} />
        <CustomBowlSection content={content.custom} />
        <LoyaltySection content={content.loyalty} brand={content.brand} mapsHref={content.hero.visitHref} />
        <StorySection content={content.story} />
      </main>

      <Footer brand={content.brand} content={content.footer} />
    </div>
  );
}
