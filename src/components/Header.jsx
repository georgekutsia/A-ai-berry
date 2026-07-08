import NeonWord from './NeonWord';

export default function Header({
  navItems,
  currentLanguage,
  languages,
  languageLabel,
  menuLabel,
  onLanguageChange,
  isMenuOpen,
  onMenuToggle,
  onNavClick,
}) {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="#home" onClick={onNavClick}>
        <NeonWord text="AÇAI" className="site-header__logo" tone="pink" />
        <NeonWord text="BERRY" className="site-header__logo site-header__logo--blue" tone="blue" />
      </a>

      <div className="site-header__actions">
        <div className="language-switch" aria-label={languageLabel}>
          {languages.map((language) => (
            <button
              key={language}
              type="button"
              className={language === currentLanguage ? 'is-active' : ''}
              onClick={() => onLanguageChange(language)}
              aria-pressed={language === currentLanguage}
            >
              {language.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          onClick={onMenuToggle}
          aria-expanded={isMenuOpen}
          aria-label={menuLabel}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={onNavClick}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
