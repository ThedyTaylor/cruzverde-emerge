import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ShieldCheck, Leaf, Building2, Landmark, FileCheck, Award, ScrollText } from 'lucide-react';

const PermitsSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const permits = [
    { icon: Leaf, key: 'permits.environmental', approved: true },
    { icon: Building2, key: 'permits.land_use', approved: true },
    { icon: Building2, key: 'permits.construction', approved: true },
    { icon: Landmark, key: 'permits.ftz_park', approved: true },
    { icon: Award, key: 'permits.cnzfe', approved: true },
    { icon: FileCheck, key: 'permits.mici', approved: true },
    { icon: ScrollText, key: 'permits.decree', approved: false },
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
            {t('permits.tag')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('permits.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('permits.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {permits.map(({ icon: Icon, key, approved }) => (
            <div
              key={key}
              className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border shadow-sm"
            >
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${approved ? 'bg-accent/10' : 'bg-muted'}`}>
                {approved ? (
                  <ShieldCheck className="text-accent" size={22} />
                ) : (
                  <Icon className="text-muted-foreground" size={22} />
                )}
              </div>
              <div>
                <p className="text-foreground font-medium text-sm">{t(key)}</p>
                <span className={`text-xs ${approved ? 'text-accent' : 'text-muted-foreground'}`}>
                  {approved ? '✓ Aprobado' : '⏳ En proceso'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PermitsSection;
