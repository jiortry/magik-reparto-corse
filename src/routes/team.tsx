import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
import pilot from "@/assets/pilot-helmet.jpg";
import peppo from "@/assets/peppo.jpeg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: metaArrayFromPageSeo(getSsrPageSeo("/team"), "/team"),
    links: linksForPath("/team"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Racing Team", path: "/team" },
          ]),
        ),
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionHeader eyebrow={t.team.eyebrow} title={t.team.title} lead={t.team.lead} />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <motion.img
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={team}
            alt={t.team.imageAltCrew}
            className="w-full h-full object-cover clip-diagonal"
          />
          <motion.img
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            src={pilot}
            alt={t.team.imageAltPilot}
            className="w-full h-full object-cover clip-diagonal-r"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/giuseppe-morcia"
            className="group mt-16 flex flex-col sm:flex-row items-stretch gap-0 border border-border bg-card overflow-hidden clip-diagonal hover:border-primary transition-colors"
          >
            <img
              src={peppo}
              alt={t.team.founderTitle}
              className="w-full sm:w-56 h-40 sm:h-auto object-cover object-[68%_18%]"
            />
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
              <p className="font-display text-[11px] font-bold uppercase tracking-widest text-accent">
                {t.team.founderEyebrow}
              </p>
              <h3 className="mt-2 font-display font-bold uppercase tracking-tight text-xl sm:text-2xl italic">
                {t.team.founderTitle}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl">
                {t.team.founderBody}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-widest text-primary">
                {t.team.founderCta}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </PageShell>
  );
}
