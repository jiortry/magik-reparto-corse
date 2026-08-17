import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PartnerCard } from "@/components/site/PartnerCard";
import { useLang } from "@/i18n/LanguageProvider";
import {
  buildBreadcrumbJsonLd,
  getSsrPageSeo,
  linksForPath,
  metaArrayFromPageSeo,
} from "@/i18n/seo";
import { partnerships, sponsors } from "@/content/partnership";

export const Route = createFileRoute("/partnership")({
  head: () => ({
    meta: metaArrayFromPageSeo(getSsrPageSeo("/partnership"), "/partnership"),
    links: linksForPath("/partnership"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Partnership", path: "/partnership" },
          ]),
        ),
      },
    ],
  }),
  component: PartnershipPage,
});

function PartnershipPage() {
  const { t, lang } = useLang();
  const p = t.partnership;

  return (
    <PageShell>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionHeader eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

        <div className="mt-16">
          <h3 className="font-display font-bold uppercase tracking-tight text-xl sm:text-2xl italic">
            {p.partnersTitle}
          </h3>
          <p className="mt-2 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            {p.partnersLead}
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnerships[lang].map((item, i) => (
              <PartnerCard key={item.name} {...item} visitLabel={p.visitLabel} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-display font-bold uppercase tracking-tight text-xl sm:text-2xl italic">
            {p.sponsorsTitle}
          </h3>
          <p className="mt-2 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            {p.sponsorsLead}
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sponsors.map((item, i) => (
              <PartnerCard key={item.name} {...item} visitLabel={p.visitLabel} index={i} />
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
