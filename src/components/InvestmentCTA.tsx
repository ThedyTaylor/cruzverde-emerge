import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const InvestmentCTA = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 text-center relative z-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
          {t('invest.title')}
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
          {t('invest.subtitle')}
        </p>
        <Button
          size="lg"
          className="bg-accent hover:bg-green-dark text-accent-foreground font-semibold px-10 py-6 text-lg rounded-lg"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t('invest.cta')}
          <ArrowRight className="ml-2" size={20} />
        </Button>
      </div>
    </section>
  );
};

export default InvestmentCTA;
