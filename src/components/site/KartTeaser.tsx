import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeader } from "@/components/site/SectionHeader";
import { RacingButton } from "@/components/site/RacingButton";
import { KartDetailsGallery } from "@/components/site/KartDetailsGallery";
import { type KartVariant } from "@/components/site/KartPills";
import { kartMedia } from "@/content/kart-media";
import { useLang } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function KartTeaser() {
  const { t } = useLang();
  const [variant, setVariant] = useState<KartVariant>("shifter");
  const s = t.kartSelect;
  const media = kartMedia[variant];
  const copy = variant === "shifter" ? t.kart : t.kartDirect;
  const href = variant === "shifter" ? "/kart-magik/shifter" : "/kart-magik/direct-drive";
  const options: Array<{ id: KartVariant; name: string }> = [
    { id: "shifter", name: s.shifterName },
    { id: "direct-drive", name: s.directName },
  ];

  return (
    <section className="relative overflow-hidden bg-carbon py-24 md:py-32">
      <div className="absolute inset-0 carbon-texture opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow={s.eyebrow} title={copy.title} lead={copy.lead} />

            <div
              role="tablist"
              aria-label={s.chooseChassis}
              className="mt-8 inline-flex w-full rounded-full border border-border bg-carbon/80 p-1 backdrop-blur-md sm:w-auto"
            >
              {options.map((opt) => {
                const on = variant === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setVariant(opt.id)}
                    className={cn(
                      "relative flex-1 rounded-full px-5 py-2.5 text-center font-display text-[11px] font-bold uppercase tracking-[0.18em] transition-colors sm:flex-none",
                      on ? "text-primary-foreground" : "text-foreground/65 hover:text-foreground",
                    )}
                  >
                    {on && (
                      <motion.span
                        layoutId="kart-teaser-pill"
                        className="absolute inset-0 rounded-full bg-primary red-glow"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{opt.name}</span>
                  </button>
                );
              })}
            </div>

            <p className="mt-3 font-display text-[10px] uppercase tracking-[0.28em] text-accent">
              {variant === "shifter" ? s.shifterTag : s.directTag}
            </p>

            <div className="mt-8">
              <RacingButton to={href}>{t.common.readMore}</RacingButton>
            </div>
          </div>

          <div className="relative min-h-[240px] sm:min-h-[320px]">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
            <AnimatePresence mode="wait">
              <motion.img
                key={variant}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.45 }}
                src={media.hero}
                alt={variant === "shifter" ? s.shifterAlt : s.directAlt}
                className="relative mx-auto w-full max-w-2xl drop-shadow-[0_30px_60px_rgba(225,6,0,0.3)]"
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <p className="inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-8 bg-accent" />
            {s.detailsTitle}
          </p>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{s.detailsLead}</p>
          <div className="mt-8">
            <KartDetailsGallery key={variant} items={media.details} />
          </div>
        </div>
      </div>
    </section>
  );
}
