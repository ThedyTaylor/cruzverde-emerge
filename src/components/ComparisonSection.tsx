import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, Minus } from 'lucide-react';

const ComparisonSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const rows = [
    {
      feature: 'comparison.availability',
      cruzVerde: 'comparison.high',
      others: 'comparison.limited',
      cvGood: true,
    },
    {
      feature: 'comparison.price',
      cruzVerde: 'comparison.competitive',
      others: 'comparison.premium',
      cvGood: true,
    },
    {
      feature: 'comparison.growth',
      cruzVerde: 'comparison.high',
      others: 'comparison.moderate',
      cvGood: true,
    },
    {
      feature: 'comparison.modern',
      cruzVerde: 'comparison.new',
      others: 'comparison.standard',
      cvGood: true,
    },
    {
      feature: 'comparison.custom',
      cruzVerde: 'comparison.full',
      others: 'comparison.partial',
      cvGood: true,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4 uppercase tracking-wider">
            {t('comparison.tag')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            {t('comparison.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">{t('comparison.feature')}</th>
                <th className="py-4 px-4 text-sm font-semibold text-center">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full">Cruz Verde</span>
                </th>
                <th className="py-4 px-4 text-sm font-semibold text-center text-muted-foreground">
                  Las Américas / Santiago / PIISA
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ feature, cruzVerde, others, cvGood }) => (
                <tr key={feature} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-4 px-4 text-sm font-medium text-foreground">{t(feature)}</td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {cvGood && <Check className="text-accent" size={16} />}
                      <span className="text-sm font-semibold text-accent">{t(cruzVerde)}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Minus className="text-muted-foreground" size={16} />
                      <span className="text-sm text-muted-foreground">{t(others)}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
