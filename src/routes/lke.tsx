import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { RacingButton } from "@/components/site/RacingButton";
import { useLang } from "@/i18n/LanguageProvider";
import { getSsrPageSeo, metaArrayFromPageSeo } from "@/i18n/seo";

export const Route = createFileRoute("/lke")({
  head: () => ({
    meta: metaArrayFromPageSeo(getSsrPageSeo("/lke"), "/lke"),
    links: [{ rel: "canonical", href: "/lke" }],
  }),
  component: LkePage,
});

function LkePage() {
  const { t } = useLang();
  return (
    <PageShell>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionHeader eyebrow={t.lke.eyebrow} title={t.lke.title} lead={t.lke.lead} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {t.lke.points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 border border-border bg-card p-5"
            >
              <span className="font-display font-black italic text-2xl text-primary leading-none">
                0{i + 1}
              </span>
              <p className="text-sm text-foreground/85">{p}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {t.lke.ctas.map((c, i) => (
            <RacingButton key={i} to={c.href} variant={i === 0 ? "primary" : "outline"}>
              {c.label}
            </RacingButton>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
