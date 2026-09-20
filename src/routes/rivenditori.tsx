import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { DealerPlate } from "@/components/site/DealerPlate";
import { RacingButton } from "@/components/site/RacingButton";
import { useLang } from "@/i18n/LanguageProvider";
import { dealers } from "@/content/dealers";
import {
  buildBreadcrumbJsonLd,
  buildDealersJsonLd,
  getSsrPageSeo,
  linksForPath,
  metaArrayFromPageSeo,
} from "@/i18n/seo";

export const Route = createFileRoute("/rivenditori")({
  head: () => ({
    meta: metaArrayFromPageSeo(getSsrPageSeo("/rivenditori"), "/rivenditori"),
    links: linksForPath("/rivenditori"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Rivenditori", path: "/rivenditori" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildDealersJsonLd()),
      },
    ],
  }),
  component: DealersPage,
});

function DealersPage() {
  const { t, lang } = useLang();
  const d = t.dealers;

  return (
    <PageShell className="overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
        <motion.p
          aria-hidden
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 0.045, x: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute -right-4 top-0 hidden select-none font-display text-[18vw] font-black italic leading-none text-stroke lg:block"
        >
          DE
        </motion.p>

        <SectionHeader eyebrow={d.eyebrow} title={d.title} lead={d.lead} />

        <div className="mt-16 space-y-10">
          {dealers.map((dealer, i) => (
            <DealerPlate key={dealer.id} dealer={dealer} lang={lang} copy={d} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-20 overflow-hidden border border-border bg-card px-6 py-10 sm:px-10 sm:py-12"
        >
          <div className="absolute inset-x-0 top-0 h-px racing-stripe" />
          <div className="absolute inset-y-0 left-0 flex w-[4px] flex-col">
            <span className="flex-1 bg-foreground/85" />
            <span className="flex-1 bg-primary" />
            <span className="flex-1 bg-accent" />
          </div>
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
            {d.hqEyebrow}
          </p>
          <h3
            className="mt-3 max-w-xl font-display text-2xl font-bold uppercase italic tracking-tight sm:text-3xl"
            style={{ fontStretch: "condensed" }}
          >
            {d.hqTitle}
          </h3>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground leading-relaxed sm:text-base">
            {d.hqLead}
          </p>
          <div className="mt-7">
            <RacingButton to="/contact">{d.hqCta}</RacingButton>
          </div>
        </motion.div>
      </div>
    </PageShell>
  );
}
