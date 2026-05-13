import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { RacingButton } from "@/components/site/RacingButton";
import { useLang } from "@/i18n/LanguageProvider";
import { getSsrPageSeo, metaArrayFromPageSeo } from "@/i18n/seo";
import missionPhoto from "@/assets/gallery/D4S_2474.JPG";
import gokart from "@/assets/gokart.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: metaArrayFromPageSeo(getSsrPageSeo("/"), "/"),
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const { t } = useLang();
  return (
    <>
      <Hero />

      {/* Mission */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-overlay opacity-20" />
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              src={missionPhoto}
              alt={t.home.missionImageAlt}
              className="relative clip-diagonal w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 border border-accent bg-carbon px-4 py-3">
              <p className="font-display font-black uppercase text-2xl italic text-accent leading-none">#130</p>
              <p className="text-[10px] font-display uppercase tracking-widest text-foreground/60 mt-1">{t.home.raceNumberLabel}</p>
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow={t.home.missionEyebrow}
              title={t.home.missionTitle}
              lead={t.home.missionLead}
            />
            <div className="mt-8">
              <RacingButton to="/about">{t.common.discoverTeam}</RacingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative border-y border-border bg-carbon">
        <div className="absolute inset-0 racing-stripe opacity-10" />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.home.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display font-black text-5xl md:text-6xl italic text-primary">
                {s.value}
              </p>
              <p className="mt-2 text-[10px] font-display uppercase tracking-[0.3em] text-muted-foreground">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services teaser */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <SectionHeader
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            lead={t.services.lead}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.slice(0, 6).map((it, i) => (
              <ServiceCard key={i} index={i} {...it} />
            ))}
          </div>
          <div className="mt-10">
            <RacingButton to="/services" variant="outline">
              {t.common.readMore}
            </RacingButton>
          </div>
        </div>
      </section>

      {/* Kart teaser */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-carbon">
        <div className="absolute inset-0 carbon-texture opacity-30" />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHeader
              eyebrow={t.kart.eyebrow}
              title={t.kart.title}
              lead={t.kart.lead}
            />
            <div className="mt-8">
              <RacingButton to="/kart-magik">{t.common.readMore}</RacingButton>
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            src={gokart}
            alt={t.home.kartTeaserAlt}
            className="w-full max-w-2xl mx-auto drop-shadow-[0_30px_60px_rgba(225,6,0,0.3)]"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display font-black uppercase italic text-3xl md:text-5xl tracking-tight">
            {t.home.ctaClosing}
          </h2>
          <div className="flex flex-wrap gap-3">
            <RacingButton to="/contact">{t.common.contactUs}</RacingButton>
            <RacingButton to="/services" variant="outline">{t.common.trackDay}</RacingButton>
          </div>
        </div>
      </section>
    </>
  );
}
