import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useLang } from "@/i18n/LanguageProvider";
import {
  buildBreadcrumbJsonLd,
  getSsrPageSeo,
  linksForPath,
  metaArrayFromPageSeo,
} from "@/i18n/seo";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: metaArrayFromPageSeo(getSsrPageSeo("/about"), "/about"),
    links: linksForPath("/about"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Chi Siamo", path: "/about" },
          ]),
        ),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} lead={t.about.lead} />

        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src={team}
          alt="Team MAGIK Reparto Corse"
          className="mt-12 w-full aspect-[16/8] object-cover clip-diagonal"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.about.blocks.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative border border-border bg-card p-7 carbon-texture"
            >
              <span className="font-display text-[10px] uppercase tracking-widest text-accent">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display font-bold uppercase text-xl tracking-tight">
                {b.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
