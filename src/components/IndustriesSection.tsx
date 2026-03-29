import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Truck, Snowflake, Factory, ShoppingCart, Globe } from 'lucide-react';

const IndustriesSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const industries = [
    { icon: Truck, titleKey: 'ind.logistics.title', descKey: 'ind.logistics.desc' },
    { icon: Snowflake, titleKey: 'ind.cold.title', descKey: 'ind.cold.desc' },
    { icon: Factory, titleKey: 'ind.manufacturing.title', descKey: 'ind.manufacturing.desc' },
    { icon: ShoppingCart, titleKey: 'ind.ecommerce.title', descKey: 'ind.ecommerce.desc' },
    { icon: Globe, titleKey: 'ind.nearshoring.title', descKey: 'ind.nearshoring.desc' },
  ];

  return (
    <section id="industries" className="py-20 lg:py-28 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4 uppercase tracking-wider">
            {t('industries.tag')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            {t('industries.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map(({ icon: Icon, titleKey, descKey }, i) => (
            <div
              key={titleKey}
              className={`group bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1 sm:max-w-sm sm:mx-auto lg:max-w-none' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                <Icon className="text-accent group-hover:text-accent-foreground" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t(titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
