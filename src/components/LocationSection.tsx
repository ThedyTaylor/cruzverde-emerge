import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Clock, Ship, Plane, Route } from 'lucide-react';

const LocationSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const details = [
    { icon: MapPin, key: 'location.monte_plata' },
    { icon: Route, key: 'location.carretera' },
    { icon: Clock, key: 'location.capital' },
    { icon: Ship, key: 'location.port' },
    { icon: Plane, key: 'location.airport' },
    { icon: Route, key: 'location.highways_nearby' },
  ];

  return (
    <section id="location" className="py-20 lg:py-28 bg-secondary">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4 uppercase tracking-wider">
            {t('location.tag')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('location.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('location.desc')}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg border border-border h-80 lg:h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484938.5267873942!2d-70.16249!3d18.7357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89f1107ea5ab%3A0xd6c587b82715c164!2sDominican%20Republic!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cruz Verde Location"
            />
          </div>

          {/* Connectivity details */}
          <div className="flex flex-col gap-4 justify-center">
            {details.map(({ icon: Icon, key }) => (
              <div key={key} className="bg-card rounded-xl p-5 border border-border shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="text-accent" size={20} />
                </div>
                <p className="text-foreground font-medium text-sm leading-relaxed">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
