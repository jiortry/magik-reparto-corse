import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Servizi — Riparazione, assistenza in pista, ricambi kart | MAGIK" },
      { name: "description", content: "Riparazione go-kart, assistenza tecnica e in pista, vendita ricambi kart, giornata di pista e rivenditore LKE Emilia-Romagna." },
      { property: "og:title", content: "Servizi MAGIK Reparto Corse" },
      { property: "og:description", content: "Dalla preparazione tecnica alla pista: ogni fase della performance." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} lead={t.services.lead} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((it, i) => (
            <ServiceCard key={i} index={i} {...it} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
