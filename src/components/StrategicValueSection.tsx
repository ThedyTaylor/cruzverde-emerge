import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TrendingUp, BarChart3, Award } from 'lucide-react';

const StrategicValueSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const items = [
    { icon: TrendingUp, titleKey: 'strategic.early.title', descKey: 'strategic.early.desc', stat: '30%', statLabel: 'savings' },
    { icon: BarChart3, titleKey: 'strategic.appreciation.title', descKey: 'strategic.appreciation.desc', stat: '5x', statLabel: 'ROI potential' },
    { icon: Award, titleKey: 'strategic.anchor.title', descKey: 'strategic.anchor.desc', stat: '15+', statLabel: 'years tax-free' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold mb-4 uppercase tracking-wider">
            {t('strategic.tag')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t('strategic.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map(({ icon: Icon, titleKey, descKey, stat, statLabel }) => (
            <div
              key={titleKey}
              className="text-center p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Icon className="text-accent" size={28} />
              </div>
              <div className="text-4xl font-bold text-accent mb-1">{stat}</div>
              <div className="text-xs text-primary-foreground/50 uppercase tracking-wider mb-4">{statLabel}</div>
              <h3 className="text-xl font-semibold mb-3">{t(titleKey)}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicValueSection;
