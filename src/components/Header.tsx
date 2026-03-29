import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { key: 'nav.about', href: '#about' },
    { key: 'nav.advantages', href: '#advantages' },
    { key: 'nav.industries', href: '#industries' },
    { key: 'nav.location', href: '#location' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">CV</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-primary-foreground font-bold text-sm leading-tight block">
                Cruz Verde
              </span>
              <span className="text-primary-foreground/60 text-[10px] leading-tight block">
                Zona Franca Industrial
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="text-primary-foreground/80 hover:text-accent text-sm font-medium transition-colors"
              >
                {t(key)}
              </a>
            ))}
          </nav>

          {/* Language Toggle + Mobile */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-primary-foreground/10 rounded-full p-0.5">
              <button
                onClick={() => setLang('es')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  lang === 'es'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-primary-foreground/70 hover:text-primary-foreground'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  lang === 'en'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-primary-foreground/70 hover:text-primary-foreground'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-primary-foreground p-1"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-primary-foreground/80 hover:text-accent text-base font-medium transition-colors py-2"
              >
                {t(key)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
