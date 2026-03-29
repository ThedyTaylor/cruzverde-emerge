import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CheckCircle2 } from 'lucide-react';
import aboutImg from '@/assets/about-image.jpg';

const AboutSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4 uppercase tracking-wider">
              {t('about.tag')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              {t('about.title')}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              {t('about.p1')}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              {t('about.p2')}
            </p>
            <div className="flex flex-col gap-3">
              {['100% Government Approved', 'World-Class Infrastructure', 'Caribbean\'s Emerging Hub'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent shrink-0" size={20} />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="Cruz Verde industrial park development"
                className="w-full h-80 lg:h-[420px] object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-xl px-6 py-4 shadow-xl hidden lg:block">
              <div className="text-3xl font-bold">500K+</div>
              <div className="text-sm opacity-90">sq ft available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
