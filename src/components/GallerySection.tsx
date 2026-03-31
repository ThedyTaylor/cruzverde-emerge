import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import entranceImg from '@/assets/entrance-render.jpg';
import entranceImg2 from '@/assets/entrance-render-2.jpg';
import naveImg1 from '@/assets/nave-render-1.jpg';
import naveImg2 from '@/assets/nave-render-2.jpg';
import officeImg from '@/assets/office-render.jpg';
import distilleryImg from '@/assets/distillery-render.jpg';

const GallerySection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const images = [
    { src: entranceImg, label: 'gallery.entrance' },
    { src: naveImg1, label: 'gallery.warehouses' },
    { src: officeImg, label: 'gallery.office' },
    { src: naveImg2, label: 'gallery.warehouses' },
    { src: distilleryImg, label: 'gallery.distillery' },
    { src: entranceImg2, label: 'gallery.entrance' },
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
            {t('gallery.tag')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            {t('gallery.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden shadow-lg border border-border">
              <img
                src={img.src}
                alt={t(img.label)}
                className="w-full h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-primary-foreground font-medium text-sm">{t(img.label)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
