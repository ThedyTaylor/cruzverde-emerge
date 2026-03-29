import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">CV</span>
              </div>
              <span className="font-bold text-lg">Cruz Verde</span>
            </div>
            <p className="text-primary-foreground/60 text-sm">{t('footer.tagline')}</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Zona Franca Industrial Cruz Verde. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
