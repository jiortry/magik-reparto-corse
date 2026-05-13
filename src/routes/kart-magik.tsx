import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { KartHotspots } from "@/components/site/KartHotspots";
import { RacingButton } from "@/components/site/RacingButton";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/kart-magik")({
  head: () => ({
    meta: [
      { title: "Kart Magik Omologato — Telaio, Motore, Setup | MAGIK Reparto Corse" },
      { name: "description", content: "Il Kart Magik omologato: telaio racing, impianto frenante, radiatore, motore LKE e setup gara curato dal team." },
      { property: "og:title", content: "Kart Magik Omologato" },
      { property: "og:description", content: "Un telaio sviluppato per la velocità, la precisione e l'affidabilità in gara." },
      { property: "og:url", content: "/kart-magik" },
    ],
    links: [{ rel: "canonical", href: "/kart-magik" }],
  }),
  component: KartPage,
});

function KartPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionHeader eyebrow={t.kart.eyebrow} title={t.kart.title} lead={t.kart.lead} />
        <div className="mt-16">
          <KartHotspots items={t.kart.hotspots} />
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <RacingButton to="/lke">LKE Emilia-Romagna</RacingButton>
          <RacingButton to="/contact" variant="outline">{t.common.requestInfo}</RacingButton>
        </div>
      </div>
    </PageShell>
  );
}
