import { MessageCircle } from "lucide-react";
import { PEPPO_WHATSAPP } from "@/lib/whatsapp";

export function WhatsAppFab() {
  return (
    <a
      href={PEPPO_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-40 group flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-3 shadow-[0_10px_30px_rgba(225,6,0,0.4)] hover:shadow-[0_10px_40px_rgba(225,6,0,0.6)] hover:scale-105 transition-all"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline font-display text-xs font-bold uppercase tracking-widest">
        WhatsApp
      </span>
    </a>
  );
}
