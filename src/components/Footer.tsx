import { useLanguage } from '@/contexts/LanguageContext';
import logoFooter from '@/assets/logo-zficv-footer.jpg';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logoFooter} alt="ZFICV Logo" className="h-20 lg:h-24 w-auto object-contain rounded-lg" />
            <div>
              <span className="font-bold text-lg">Cruz Verde</span>
              <p className="text-primary-foreground/60 text-sm">{t('footer.tagline')}</p>
            </div>
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
