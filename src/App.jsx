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

  useEffect(() => {
    window.localStorage.setItem('acai-berry-language', language);
    document.documentElement.lang = siteContent[language].locale;
  }, [language]);

  const content = siteContent[language];
  const navItems = [
    { id: 'home', label: content.nav.home },
    { id: 'bowls', label: content.nav.bowls },
    { id: 'custom', label: content.nav.custom },
    { id: 'loyalty', label: content.nav.loyalty },
    { id: 'story', label: content.nav.story },
    { id: 'visit', label: content.nav.visit },
  ];

  const closeMenu = () => setMenuOpen(false);

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
        onNavClick={closeMenu}
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
