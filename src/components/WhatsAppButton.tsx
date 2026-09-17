import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+254737893370";
  const message = "Hi! I'm interested in your mabati roofing products. Can you help me?";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-2xl hover:shadow-[#25D366]/50 transition-smooth group animate-scale-in"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-smooth" />
      <span className="font-medium hidden sm:inline">Talk to Us</span>
    </a>
  );
};

export default WhatsAppButton;
