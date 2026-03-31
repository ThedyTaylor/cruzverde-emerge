import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import StrategicValueSection from '@/components/StrategicValueSection';
import ComparisonSection from '@/components/ComparisonSection';
import MasterPlanSection from '@/components/MasterPlanSection';
import GallerySection from '@/components/GallerySection';
import PermitsSection from '@/components/PermitsSection';
import IndustriesSection from '@/components/IndustriesSection';
import LocationSection from '@/components/LocationSection';
import InvestmentCTA from '@/components/InvestmentCTA';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <AdvantagesSection />
        <StrategicValueSection />
        <ComparisonSection />
        <MasterPlanSection />
        <GallerySection />
        <PermitsSection />
        <IndustriesSection />
        <LocationSection />
        <InvestmentCTA />
        <ContactForm />
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
