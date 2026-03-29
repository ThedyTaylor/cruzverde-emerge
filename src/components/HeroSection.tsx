import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Zona Franca Industrial Cruz Verde aerial view"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-4xl">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 border border-accent/30">
            Zona Franca Industrial
          </span>
        </div>

        <h1 className="animate-fade-up animation-delay-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
          {t('hero.title')}
        </h1>

        <p className="animate-fade-up animation-delay-400 text-lg sm:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>

        <div className="animate-fade-up animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-accent hover:bg-green-dark text-accent-foreground font-semibold px-8 py-6 text-base rounded-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta1')}
            <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base rounded-lg"
            onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <MapPin className="mr-2" size={18} />
            {t('hero.cta2')}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
