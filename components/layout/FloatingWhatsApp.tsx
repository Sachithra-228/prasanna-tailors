import { MessageCircle } from "lucide-react";
import { visitInquiry } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={visitInquiry()}
      aria-label="Chat with Prasanna Tailors"
      title="Chat with Prasanna Tailors"
      className="fixed bottom-5 right-5 z-40 grid h-13 w-13 place-items-center rounded-full bg-[#1daa61] text-white shadow-2xl shadow-black/25 transition hover:scale-105 sm:h-14 sm:w-14"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
