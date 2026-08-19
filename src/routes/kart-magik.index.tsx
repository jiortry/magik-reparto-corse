import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { KartPills } from "@/components/site/KartPills";
import { useLang } from "@/i18n/LanguageProvider";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  getSsrPageSeo,
  linksForPath,
  metaArrayFromPageSeo,
} from "@/i18n/seo";

export const Route = createFileRoute("/kart-magik/")({
  head: () => ({
    meta: metaArrayFromPageSeo(getSsrPageSeo("/kart-magik"), "/kart-magik"),
    links: linksForPath("/kart-magik"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Kart Magik", path: "/kart-magik" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Kart Magik",
          url: absoluteUrl("/kart-magik"),
          numberOfItems: 2,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Kart Magik Shifter MRK1",
              url: absoluteUrl("/kart-magik/shifter"),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Kart Magik Direct Drive",
              url: absoluteUrl("/kart-magik/direct-drive"),
            },
          ],
        }),
      },
    ],
  }),
  component: KartSelectPage,
});

function KartSelectPage() {
  const { t } = useLang();
  const s = t.kartSelect;

  return (
    <PageShell>
      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="absolute inset-0 -z-10 grid-overlay opacity-25" />
        <SectionHeader align="center" eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
        <div className="mt-10 sm:mt-14 lg:mt-16">
          <KartPills size="hero" />
        </div>
      </div>
    </PageShell>
  );
}
