import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ContactForm } from "@/components/site/ContactForm";
import { useLang } from "@/i18n/LanguageProvider";
import { getSsrPageSeo, metaArrayFromPageSeo } from "@/i18n/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: metaArrayFromPageSeo(getSsrPageSeo("/contact"), "/contact"),
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeader
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            lead={t.contact.lead}
          />

          <div className="mt-10 space-y-3">
            {t.contact.ctas.map((c, i) => (
              <div key={i} className="flex items-center gap-3 border border-border bg-card p-4">
                <span className="font-display font-black italic text-xl text-primary">→</span>
                <p className="text-sm text-foreground/85">{c}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/?text=Ciao%20MAGIK%20Reparto%20Corse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-accent text-accent hover:bg-accent hover:text-accent-foreground font-display text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href="https://www.instagram.com/magik_repartocorse/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border text-foreground hover:border-primary hover:text-primary font-display text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </div>

        <div className="border border-border bg-card p-6 md:p-8 carbon-texture relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px racing-stripe" />
          <ContactForm />
        </div>
      </div>
    </PageShell>
  );
}
