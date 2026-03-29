import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Shield, BadgeDollarSign, Wrench, Maximize, Ship } from 'lucide-react';

const AdvantagesSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const advantages = [
    { icon: MapPin, titleKey: 'adv.location.title', descKey: 'adv.location.desc' },
    { icon: Shield, titleKey: 'adv.ftz.title', descKey: 'adv.ftz.desc' },
    { icon: BadgeDollarSign, titleKey: 'adv.tax.title', descKey: 'adv.tax.desc' },
    { icon: Wrench, titleKey: 'adv.build.title', descKey: 'adv.build.desc' },
    { icon: Maximize, titleKey: 'adv.expansion.title', descKey: 'adv.expansion.desc' },
    { icon: Ship, titleKey: 'adv.ports.title', descKey: 'adv.ports.desc' },
  ];

  return (
    <section id="advantages" className="py-20 lg:py-28 bg-secondary">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4 uppercase tracking-wider">
            {t('advantages.tag')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            {t('advantages.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map(({ icon: Icon, titleKey, descKey }, i) => (
            <div
              key={titleKey}
              className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t(titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
