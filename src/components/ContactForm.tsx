import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setLoading(true);
    setTimeout(() => {
      toast({
        title: t('contact.success'),
        description: t('contact.successDesc'),
      });
      setForm({ name: '', email: '', company: '', phone: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4 uppercase tracking-wider">
            {t('contact.tag')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            {t('contact.title')}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.name')} *</label>
              <Input
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                required
                maxLength={100}
                className="bg-card"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.email')} *</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                required
                maxLength={255}
                className="bg-card"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.company')}</label>
              <Input
                value={form.company}
                onChange={(e) => update('company', e.target.value)}
                maxLength={100}
                className="bg-card"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.phone')}</label>
              <Input
                type="tel"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                maxLength={20}
                className="bg-card"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.message')} *</label>
            <Textarea
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              required
              maxLength={1000}
              rows={5}
              className="bg-card"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full bg-accent hover:bg-green-dark text-accent-foreground font-semibold py-6 text-base rounded-lg"
          >
            <Send className="mr-2" size={18} />
            {loading ? '...' : t('contact.send')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
