import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { KartHotspots } from "@/components/site/KartHotspots";
import { RacingButton } from "@/components/site/RacingButton";
import { useLang } from "@/i18n/LanguageProvider";
import { getSsrPageSeo, metaArrayFromPageSeo } from "@/i18n/seo";

export const Route = createFileRoute("/kart-magik")({
  head: () => ({
    meta: metaArrayFromPageSeo(getSsrPageSeo("/kart-magik"), "/kart-magik"),
    links: [{ rel: "canonical", href: "/kart-magik" }],
  }),
  component: KartPage,
});

function KartPage() {
  const { t } = useLang();
  const k = t.kart;

  return (
    <PageShell>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionHeader eyebrow={k.eyebrow} title={k.title} lead={k.lead} />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 inline-flex items-center gap-2 border border-accent/60 bg-carbon/80 px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-widest text-accent"
        >
          {k.homologation}
        </motion.p>

        <div className="mt-16">
          <KartHotspots items={k.hotspots} />
        </div>

        <div className="mt-24 space-y-20">
          {k.features.map((feature, i) => (
            <motion.section
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className={`grid gap-8 lg:grid-cols-12 lg:items-start ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-4">
                <p className="inline-flex items-center gap-2 text-[11px] font-display font-bold uppercase tracking-[0.3em] text-accent">
                  <span className="h-px w-8 bg-accent" />
                  {feature.eyebrow}
                </p>
                <h3
                  className="mt-3 font-display font-bold uppercase tracking-tight text-2xl sm:text-3xl italic"
                  style={{ fontStretch: "condensed" }}
                >
                  {feature.title}
                </h3>
              </div>
              <div className="lg:col-span-8 border border-border bg-card/60 p-6 sm:p-8 carbon-texture">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.body}
                </p>
                <span className="mt-6 block h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
            </motion.section>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeader title={k.specsTitle} lead={k.specsLead} />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="mt-10 overflow-hidden border border-border"
          >
            <table className="w-full text-left">
              <tbody>
                {k.specs.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-card/80" : "bg-carbon/40"}
                  >
                    <th className="w-[42%] sm:w-[36%] border-b border-border px-4 py-3.5 sm:px-6 font-display text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-accent align-top">
                      {row.label}
                    </th>
                    <td className="border-b border-border px-4 py-3.5 sm:px-6 text-sm sm:text-base text-foreground/90">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <div className="mt-6">
            <a
              href="/magik-mrk1-007-CH-60.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-accent px-5 py-3 font-display text-xs font-bold uppercase tracking-widest text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {k.ficheDownload}
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {k.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative border border-border bg-card p-6 carbon-texture"
            >
              <p className="font-display text-[10px] uppercase tracking-widest text-accent">
                {h.label}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{h.body}</p>
              <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <RacingButton to="/lke">LKE Emilia-Romagna</RacingButton>
          <RacingButton to="/contact" variant="outline">
            {t.common.requestInfo}
          </RacingButton>
        </div>
      </div>
    </PageShell>
  );
}
