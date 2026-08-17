import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Mail } from "lucide-react";
import { FounderTimeline } from "@/components/site/FounderTimeline";
import { DriverGrid } from "@/components/site/DriverGrid";
import { RacingButton } from "@/components/site/RacingButton";
import { useLang } from "@/i18n/LanguageProvider";
import {
  buildBreadcrumbJsonLd,
  getSsrPageSeo,
  linksForPath,
  metaArrayFromPageSeo,
} from "@/i18n/seo";
import {
  founderTimeline,
  founderBio,
  founderDrivers,
  founderManufacturers,
} from "@/content/founder";
import peppo from "@/assets/peppo.jpeg";

export const Route = createFileRoute("/giuseppe-morcia")({
  head: () => ({
    meta: metaArrayFromPageSeo(getSsrPageSeo("/giuseppe-morcia"), "/giuseppe-morcia"),
    links: linksForPath("/giuseppe-morcia"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Giuseppe Morcia", path: "/giuseppe-morcia" },
          ]),
        ),
      },
    ],
  }),
  component: FounderPage,
});

function FounderPage() {
  const { t, lang } = useLang();
  const f = t.founder;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 -z-10 grid-overlay opacity-20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-carbon" />

        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <Link
            to="/team"
            className="inline-flex items-center gap-1.5 text-[11px] font-display font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors"
          >
            <ArrowLeft size={13} />
            {f.backLabel}
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative order-first lg:order-last mx-auto w-full max-w-sm lg:max-w-none"
            >
              <div className="absolute -inset-6 -z-10 rounded-full bg-primary/20 blur-3xl" />
              <img
                src={peppo}
                alt={f.name}
                className="relative w-full aspect-[4/5] object-cover object-[68%_18%] clip-diagonal red-glow border border-border"
              />
              <div className="absolute -bottom-4 -left-4 border border-accent bg-carbon px-4 py-3">
                <p className="font-display font-black uppercase text-sm italic text-accent leading-none">
                  {f.kicker}
                </p>
                <p className="mt-1 text-[10px] font-display uppercase tracking-widest text-foreground/60">
                  MAGIK Reparto Corse
                </p>
              </div>
            </motion.div>

            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="inline-flex items-center gap-2 text-[11px] font-display font-bold uppercase tracking-[0.3em] text-accent"
              >
                <span className="h-px w-8 bg-accent" />
                {f.eyebrow}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="mt-3 font-display font-black uppercase italic leading-[0.95] tracking-tight text-[clamp(2.4rem,7vw,4.5rem)]"
                style={{ fontStretch: "condensed" }}
              >
                {f.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-3 text-sm sm:text-base text-foreground/80 font-display font-medium"
              >
                {f.role}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-5 max-w-lg text-sm sm:text-base text-muted-foreground leading-relaxed"
              >
                {founderBio[lang][0]}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-7"
              >
                <a
                  href="mailto:peppo.morcia@magikrepartocorse.it"
                  className="inline-flex items-center gap-2 border border-accent px-5 py-3 font-display text-xs font-bold uppercase tracking-widest text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Mail size={15} />
                  {f.emailCta}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 pt-16 sm:pt-20 pb-24">
        <div className="max-w-3xl space-y-5">
          {founderBio[lang].slice(1).map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="text-sm sm:text-base text-foreground/80 leading-relaxed"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Manufacturers strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <p className="font-display text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            {f.manufacturersTitle}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {founderManufacturers.map((m) => (
              <span
                key={m}
                className="border border-border bg-secondary/60 px-3 py-1.5 text-xs sm:text-sm font-display font-semibold uppercase tracking-wide text-foreground/80"
              >
                {m}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Interactive career timeline */}
        <FounderTimeline
          items={founderTimeline[lang]}
          eyebrow={f.timelineEyebrow}
          title={f.timelineTitle}
          lead={f.timelineLead}
          hint={f.timelineHint}
          prevLabel={f.timelinePrev}
          nextLabel={f.timelineNext}
        />

        {/* Searchable drivers grid */}
        <DriverGrid
          items={founderDrivers}
          eyebrow={f.driversEyebrow}
          title={f.driversTitle}
          lead={f.driversLead}
          placeholder={f.driversSearchPlaceholder}
          empty={f.driversEmpty}
          countTemplate={f.driversCount}
        />

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-24 border border-border bg-card p-7 sm:p-10 clip-diagonal text-center sm:text-left"
        >
          <p className="inline-flex items-center gap-2 text-[11px] font-display font-bold uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-8 bg-accent hidden sm:inline-block" />
            {f.ctaEyebrow}
          </p>
          <h3 className="mt-3 font-display font-bold uppercase tracking-tight text-2xl sm:text-3xl italic">
            {f.ctaTitle}
          </h3>
          <p className="mt-3 max-w-xl mx-auto sm:mx-0 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {f.ctaBody}
          </p>
          <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-3">
            <RacingButton to="/team" variant="primary">
              {f.ctaTeam}
            </RacingButton>
            <RacingButton to="/contact" variant="outline">
              {f.ctaContact}
            </RacingButton>
          </div>
        </motion.div>
      </div>
    </>
  );
}
