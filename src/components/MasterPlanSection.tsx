import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CheckCircle2, Clock, HardHat, Wifi, ShieldCheck, Route } from 'lucide-react';

const MasterPlanSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const infraItems = [
    { icon: Route, key: 'masterplan.roads' },
    { icon: HardHat, key: 'masterplan.utilities' },
    { icon: ShieldCheck, key: 'masterplan.security' },
    { icon: Wifi, key: 'masterplan.telecom' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4 uppercase tracking-wider">
            {t('masterplan.tag')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            {t('masterplan.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {/* Phase 1 */}
          <div className="bg-card rounded-xl p-8 border-2 border-accent shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-xs font-bold rounded-bl-xl">
              {t('masterplan.phase1.status')}
            </div>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="text-accent" size={28} />
              <h3 className="text-2xl font-bold text-foreground">{t('masterplan.phase1')}</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{t('masterplan.phase1.desc')}</p>
            {/* Visual plot grid */}
            <div className="mt-6 grid grid-cols-4 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-8 rounded ${i < 5 ? 'bg-accent/30 border border-accent/50' : 'bg-accent/10 border border-accent/20'}`}
                />
              ))}
            </div>
            <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded bg-accent/30 border border-accent/50" /> Reserved
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded bg-accent/10 border border-accent/20" /> Available
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-muted text-muted-foreground px-4 py-1 text-xs font-bold rounded-bl-xl">
              {t('masterplan.phase2.status')}
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-muted-foreground" size={28} />
              <h3 className="text-2xl font-bold text-foreground">{t('masterplan.phase2')}</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{t('masterplan.phase2.desc')}</p>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="h-8 rounded bg-muted border border-border" />
              ))}
            </div>
            <div className="mt-3 text-xs text-muted-foreground flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-muted border border-border" /> Coming Soon
            </div>
          </div>
        </div>

        {/* Infrastructure */}
        <div className="bg-card rounded-xl p-8 border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">{t('masterplan.infrastructure')}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infraItems.map(({ icon: Icon, key }) => (
              <div key={key} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="text-accent" size={20} />
                </div>
                <span className="text-sm font-medium text-foreground">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterPlanSection;
