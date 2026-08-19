import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { KartHotspots } from "@/components/site/KartHotspots";
import { KartDetailsGallery } from "@/components/site/KartDetailsGallery";
import { KartPills, type KartVariant } from "@/components/site/KartPills";
import { RacingButton } from "@/components/site/RacingButton";
import { useLang } from "@/i18n/LanguageProvider";
import type { GalleryItem } from "@/components/site/Gallery";

type KartCopy = {
  title: string;
  eyebrow: string;
  lead: string;
  features: { eyebrow: string; title: string; body: string }[];
  highlights: { label: string; body: string }[];
  specsTitle: string;
  specsLead: string;
  homologation: string;
  specs: { label: string; value: string }[];
};

export function KartModelView({
  variant,
  copy,
  image,
  imageAlt,
  hotspots,
  details,
  ficheDownload,
}: {
  variant: KartVariant;
  copy: KartCopy;
  image?: string;
  imageAlt?: string;
  hotspots?: ReadonlyArray<{ label: string; body: string }>;
  details?: GalleryItem[];
  ficheDownload?: string;
}) {
  const { t } = useLang();

  return (
    <PageShell>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/kart-magik"
            className="inline-flex items-center gap-1.5 text-[11px] font-display font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors"
          >
            <ArrowLeft size={13} />
            {t.kartSelect.backToSelect}
          </Link>
          <KartPills size="compact" active={variant} />
        </div>

        <div className="mt-8">
          <SectionHeader eyebrow={copy.eyebrow} title={copy.title} lead={copy.lead} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <p className="inline-flex items-center gap-2 border border-accent/60 bg-carbon/80 px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-widest text-accent">
            {copy.homologation}
          </p>
          {ficheDownload ? (
            <a
              href="/magik-mrk1-007-CH-60.pdf"
              download="Magik-MRK1-007-CH-60.pdf"
              className="inline-flex items-center gap-2 bg-primary px-4 py-2 font-display text-[10px] font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-colors clip-diagonal"
            >
              {ficheDownload}
            </a>
          ) : null}
        </motion.div>

        <div className="mt-16">
          {hotspots ? (
            <KartHotspots items={hotspots} image={image} alt={imageAlt} />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
              <img
                src={image}
                alt={imageAlt ?? copy.title}
                className="relative w-full drop-shadow-[0_30px_60px_rgba(225,6,0,0.28)]"
              />
            </motion.div>
          )}
        </div>

        {details && details.length > 0 ? (
          <div className="mt-16">
            <p className="inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-8 bg-accent" />
              {t.kartSelect.detailsTitle}
            </p>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              {t.kartSelect.detailsLead}
            </p>
            <div className="mt-8">
              <KartDetailsGallery items={details} />
            </div>
          </div>
        ) : null}

        <div className="mt-24 space-y-20">
          {copy.features.map((feature, i) => (
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
          <SectionHeader title={copy.specsTitle} lead={copy.specsLead} />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="mt-10 overflow-hidden border border-border"
          >
            <table className="w-full text-left">
              <tbody>
                {copy.specs.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-card/80" : "bg-carbon/40"}>
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

          {ficheDownload ? (
            <div className="mt-6">
              <a
                href="/magik-mrk1-007-CH-60.pdf"
                download="Magik-MRK1-007-CH-60.pdf"
                className="inline-flex items-center gap-2 bg-primary px-5 py-3 font-display text-xs font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-colors clip-diagonal"
              >
                {ficheDownload}
              </a>
            </div>
          ) : null}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {copy.highlights.map((h, i) => (
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
