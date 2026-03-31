import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Nav
  'nav.about': { es: 'Nosotros', en: 'About' },
  'nav.advantages': { es: 'Ventajas', en: 'Advantages' },
  'nav.industries': { es: 'Industrias', en: 'Industries' },
  'nav.location': { es: 'Ubicación', en: 'Location' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },

  // Hero
  'hero.title': {
    es: 'El Futuro de la Inversión Industrial en República Dominicana',
    en: 'The Future of Industrial Investment in the Dominican Republic',
  },
  'hero.subtitle': {
    es: 'Parque de Zona Franca diseñado para logística, manufactura y nearshoring',
    en: 'Free Zone Park designed for logistics, manufacturing, and nearshoring',
  },
  'hero.cta1': { es: 'Solicitar Información', en: 'Request Information' },
  'hero.cta2': { es: 'Ver Ubicación', en: 'View Location' },

  // About
  'about.tag': { es: 'Sobre el Proyecto', en: 'About the Project' },
  'about.title': {
    es: 'Una Nueva Generación de Zona Franca Industrial',
    en: 'A New Generation Industrial Free Zone',
  },
  'about.p1': {
    es: 'Zona Franca Industrial Cruz Verde es un parque industrial de nueva generación, aprobado por el gobierno dominicano bajo el régimen de zonas francas, diseñado para atraer inversión internacional en logística, manufactura liviana y operaciones de nearshoring.',
    en: 'Zona Franca Industrial Cruz Verde is a next-generation industrial park approved by the Dominican government under the free zone regime, designed to attract international investment in logistics, light manufacturing, and nearshoring operations.',
  },
  'about.p2': {
    es: 'Con infraestructura de clase mundial y ubicación estratégica, Cruz Verde representa la nueva frontera de desarrollo industrial en el Caribe.',
    en: 'With world-class infrastructure and strategic location, Cruz Verde represents the new frontier of industrial development in the Caribbean.',
  },

  // Advantages
  'advantages.tag': { es: 'Ventajas Competitivas', en: 'Competitive Advantages' },
  'advantages.title': { es: '¿Por Qué Cruz Verde?', en: 'Why Cruz Verde?' },
  'adv.location.title': { es: 'Ubicación Estratégica', en: 'Strategic Location' },
  'adv.location.desc': {
    es: 'Conectividad directa con puertos, aeropuertos y autopistas principales',
    en: 'Direct connectivity to ports, airports, and major highways',
  },
  'adv.ftz.title': { es: 'Régimen de Zona Franca', en: 'FTZ Regime' },
  'adv.ftz.desc': {
    es: 'Aprobado por el gobierno dominicano con todos los beneficios del régimen',
    en: 'Government-approved with full free zone regime benefits',
  },
  'adv.tax.title': { es: 'Incentivos Fiscales', en: 'Tax Incentives' },
  'adv.tax.desc': {
    es: 'Exenciones de impuestos sobre la renta, aranceles y otros beneficios fiscales',
    en: 'Income tax exemptions, tariff benefits, and other fiscal incentives',
  },
  'adv.build.title': { es: 'Soluciones Build-to-Suit', en: 'Build-to-Suit Solutions' },
  'adv.build.desc': {
    es: 'Naves industriales diseñadas a la medida de sus operaciones',
    en: 'Industrial facilities custom-designed to your operational needs',
  },
  'adv.expansion.title': { es: 'Capacidad de Expansión', en: 'Expansion Capacity' },
  'adv.expansion.desc': {
    es: 'Terrenos disponibles para crecimiento futuro y nuevas fases de desarrollo',
    en: 'Available land for future growth and new development phases',
  },
  'adv.ports.title': { es: 'Cerca de Puertos y Vías', en: 'Near Ports & Highways' },
  'adv.ports.desc': {
    es: 'Acceso rápido a los principales puertos marítimos y red vial del país',
    en: 'Quick access to major seaports and the national road network',
  },

  // Strategic Value
  'strategic.tag': { es: 'Valor Estratégico', en: 'Strategic Value' },
  'strategic.title': { es: 'Oportunidad de Inversión Premium', en: 'Premium Investment Opportunity' },
  'strategic.early.title': { es: 'Entrada Temprana', en: 'Early Entry Advantage' },
  'strategic.early.desc': {
    es: 'Los primeros inversores obtienen los mejores precios y ubicaciones premium dentro del parque',
    en: 'Early investors get the best prices and premium locations within the park',
  },
  'strategic.appreciation.title': { es: 'Alta Valorización', en: 'High Appreciation' },
  'strategic.appreciation.desc': {
    es: 'Alto potencial de valorización a medida que el parque se desarrolla y consolida',
    en: 'High appreciation potential as the park develops and consolidates',
  },
  'strategic.anchor.title': { es: 'Incentivos Ancla', en: 'Anchor Incentives' },
  'strategic.anchor.desc': {
    es: 'Beneficios especiales y condiciones preferenciales para empresas ancla',
    en: 'Special benefits and preferential conditions for anchor tenants',
  },

  // Comparison
  'comparison.tag': { es: 'Análisis Comparativo', en: 'Comparative Analysis' },
  'comparison.title': { es: 'Nueva Oportunidad vs. Mercados Saturados', en: 'New Opportunity vs. Saturated Markets' },
  'comparison.feature': { es: 'Característica', en: 'Feature' },
  'comparison.availability': { es: 'Disponibilidad de Terrenos', en: 'Land Availability' },
  'comparison.price': { es: 'Precio de Entrada', en: 'Entry Price' },
  'comparison.growth': { es: 'Potencial de Crecimiento', en: 'Growth Potential' },
  'comparison.modern': { es: 'Infraestructura Moderna', en: 'Modern Infrastructure' },
  'comparison.custom': { es: 'Personalización', en: 'Customization' },
  'comparison.high': { es: 'Alto', en: 'High' },
  'comparison.competitive': { es: 'Competitivo', en: 'Competitive' },
  'comparison.limited': { es: 'Limitada', en: 'Limited' },
  'comparison.premium': { es: 'Premium', en: 'Premium' },
  'comparison.moderate': { es: 'Moderado', en: 'Moderate' },
  'comparison.established': { es: 'Establecida', en: 'Established' },
  'comparison.full': { es: 'Completa', en: 'Full' },
  'comparison.partial': { es: 'Parcial', en: 'Partial' },
  'comparison.new': { es: 'Nueva Gen.', en: 'New Gen.' },
  'comparison.standard': { es: 'Estándar', en: 'Standard' },

  // Master Plan
  'masterplan.tag': { es: 'Plan Maestro', en: 'Master Plan' },
  'masterplan.title': { es: 'Desarrollo por Fases', en: 'Phased Development' },
  'masterplan.phase1': { es: 'Fase 1', en: 'Phase 1' },
  'masterplan.phase1.status': { es: 'Disponible', en: 'Available' },
  'masterplan.phase1.desc': {
    es: 'Infraestructura inicial, naves industriales, vías de acceso, servicios básicos y áreas de logística.',
    en: 'Initial infrastructure, industrial buildings, access roads, basic services, and logistics areas.',
  },
  'masterplan.phase2': { es: 'Fase 2', en: 'Phase 2' },
  'masterplan.phase2.status': { es: 'Expansión', en: 'Expansion' },
  'masterplan.phase2.desc': {
    es: 'Expansión del parque, nuevas naves, zona de almacenamiento en frío, y áreas de manufactura avanzada.',
    en: 'Park expansion, new facilities, cold storage zone, and advanced manufacturing areas.',
  },
  'masterplan.infrastructure': { es: 'Infraestructura Lista para Logística', en: 'Logistics-Ready Infrastructure' },
  'masterplan.roads': { es: 'Vías de acceso pavimentadas', en: 'Paved access roads' },
  'masterplan.utilities': { es: 'Servicios públicos completos', en: 'Complete utilities' },
  'masterplan.security': { es: 'Seguridad 24/7', en: '24/7 Security' },
  'masterplan.telecom': { es: 'Telecomunicaciones de alta velocidad', en: 'High-speed telecommunications' },

  // Industries
  'industries.tag': { es: 'Sectores Objetivo', en: 'Target Industries' },
  'industries.title': { es: 'Diseñado Para Su Industria', en: 'Designed for Your Industry' },
  'ind.logistics.title': { es: 'Logística y Distribución', en: 'Logistics & Distribution' },
  'ind.logistics.desc': { es: 'Operaciones 3PL y centros de distribución', en: '3PL operations and distribution centers' },
  'ind.cold.title': { es: 'Almacenamiento en Frío', en: 'Cold Storage' },
  'ind.cold.desc': { es: 'Instalaciones de cadena de frío y almacenamiento refrigerado', en: 'Cold chain facilities and refrigerated storage' },
  'ind.manufacturing.title': { es: 'Manufactura Liviana', en: 'Light Manufacturing' },
  'ind.manufacturing.desc': { es: 'Ensamblaje, producción y manufactura de valor agregado', en: 'Assembly, production, and value-added manufacturing' },
  'ind.ecommerce.title': { es: 'E-commerce & Fulfillment', en: 'E-commerce Fulfillment' },
  'ind.ecommerce.desc': { es: 'Centros de fulfillment y logística de última milla', en: 'Fulfillment centers and last-mile logistics' },
  'ind.nearshoring.title': { es: 'Nearshoring', en: 'Nearshoring Operations' },
  'ind.nearshoring.desc': { es: 'Operaciones cercanas al mercado norteamericano', en: 'Operations close to the North American market' },

  // Location
  'location.tag': { es: 'Ubicación', en: 'Location' },
  'location.title': { es: 'Ubicación Estratégica en el Caribe', en: 'Strategic Caribbean Location' },
  'location.desc': {
    es: 'Ubicado en República Dominicana, con conectividad directa a los principales mercados de América del Norte y el Caribe.',
    en: 'Located in the Dominican Republic, with direct connectivity to the major markets of North America and the Caribbean.',
  },
  'location.monte_plata': { es: 'Localizado en Monte Plata, República Dominicana', en: 'Located in Monte Plata, Dominican Republic' },
  'location.carretera': { es: 'Sobre la carretera Juan Pablo II', en: 'On the Juan Pablo II highway' },
  'location.capital': { es: '40 minutos del Distrito Nacional', en: '40 minutes from the National District' },
  'location.port': { es: '25 minutos del puerto industrial', en: '25 minutes from the industrial port' },
  'location.airport': { es: '30 minutos del Aeropuerto Internacional de Santo Domingo', en: '30 minutes from Santo Domingo International Airport' },
  'location.highways_nearby': { es: 'Cerca de Av. Carretera Mella, Av. Juan Bosch y Autopista Las Américas', en: 'Near Carretera Mella Ave., Juan Bosch Ave. & Las Américas Highway' },

  // Master Plan areas
  'masterplan.area_industrial': { es: 'Área Industrial', en: 'Industrial Area' },
  'masterplan.area_realestate': { es: 'Área de Real Estate', en: 'Real Estate Area' },
  'masterplan.area_common': { es: 'Área Común del Parque', en: 'Park Common Area' },
  'masterplan.area_distillery': { es: 'Destilería', en: 'Distillery' },

  // Permits
  'permits.tag': { es: 'Permisos y Aprobaciones', en: 'Permits & Approvals' },
  'permits.title': { es: 'Proyecto 100% Aprobado', en: '100% Approved Project' },
  'permits.subtitle': {
    es: 'Todos los permisos gubernamentales han sido obtenidos para la construcción y operación del parque industrial.',
    en: 'All government permits have been obtained for the construction and operation of the industrial park.',
  },
  'permits.environmental': { es: 'Permiso Ambiental', en: 'Environmental Permit' },
  'permits.land_use': { es: 'No objeción de uso de suelo', en: 'Land Use No-Objection' },
  'permits.construction': { es: 'Licencia de construcción municipal', en: 'Municipal Construction License' },
  'permits.ftz_park': { es: 'Permiso Parque Zona Franca', en: 'Free Zone Park Permit' },
  'permits.cnzfe': { es: 'Aprobación del Consejo Nacional de Zonas Francas', en: 'National Free Zone Council Approval' },
  'permits.mici': { es: 'Resolución aprobada por el MICI', en: 'Resolution approved by MICI' },
  'permits.decree': { es: 'Decreto Oficial Presidencial en proceso', en: 'Official Presidential Decree in process' },

  // Gallery
  'gallery.tag': { es: 'Galería del Proyecto', en: 'Project Gallery' },
  'gallery.title': { es: 'Visualiza el Futuro de Cruz Verde', en: 'Visualize the Future of Cruz Verde' },
  'gallery.entrance': { es: 'Acceso Principal', en: 'Main Entrance' },
  'gallery.warehouses': { es: 'Naves Industriales', en: 'Industrial Warehouses' },
  'gallery.office': { es: 'Edificio Principal - Oficina', en: 'Main Building - Office' },
  'gallery.distillery': { es: 'Destilería y Almacenamiento', en: 'Distillery & Storage' },

  // Investment CTA
  'invest.title': {
    es: 'Invierte en una Zona Franca con Alto Potencial de Crecimiento',
    en: 'Invest in a High-Growth Industrial Free Zone',
  },
  'invest.subtitle': {
    es: 'No pierdas la oportunidad de ser parte del desarrollo industrial más importante del Caribe',
    en: "Don't miss the opportunity to be part of the most important industrial development in the Caribbean",
  },
  'invest.cta': { es: 'Contactar Ahora', en: 'Contact Now' },

  // Contact
  'contact.tag': { es: 'Contacto', en: 'Contact' },
  'contact.title': { es: 'Solicite Información', en: 'Request Information' },
  'contact.name': { es: 'Nombre', en: 'Name' },
  'contact.email': { es: 'Correo Electrónico', en: 'Email' },
  'contact.company': { es: 'Empresa', en: 'Company' },
  'contact.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.message': { es: 'Mensaje', en: 'Message' },
  'contact.send': { es: 'Enviar Mensaje', en: 'Send Message' },
  'contact.success': { es: '¡Mensaje enviado con éxito!', en: 'Message sent successfully!' },
  'contact.successDesc': {
    es: 'Nos pondremos en contacto pronto.',
    en: 'We will get back to you soon.',
  },

  // Footer
  'footer.rights': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
  'footer.tagline': {
    es: 'Parque Industrial de Nueva Generación en República Dominicana',
    en: 'Next-Generation Industrial Park in the Dominican Republic',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
