import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '15619004932';
  const message = encodeURIComponent('Hola, me interesa obtener información sobre Zona Franca Industrial Cruz Verde.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(145,63%,49%)] hover:bg-[hsl(145,63%,38%)] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
