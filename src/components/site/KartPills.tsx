import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import gokart from "@/assets/gokart.png";
import directDrive from "@/assets/kart/direct-drive.jpg";
import { cn } from "@/lib/utils";

export type KartVariant = "shifter" | "direct-drive";

const VARIANTS: Array<{
  id: KartVariant;
  to: "/kart-magik/shifter" | "/kart-magik/direct-drive";
  image: string;
  contain?: boolean;
}> = [
  { id: "shifter", to: "/kart-magik/shifter", image: gokart, contain: true },
  { id: "direct-drive", to: "/kart-magik/direct-drive", image: directDrive },
];

export function KartPills({
  size = "hero",
  active,
}: {
  size?: "hero" | "compact";
  active?: KartVariant;
}) {
  const { t } = useLang();
  const s = t.kartSelect;

  const copy = {
    shifter: { name: s.shifterName, tag: s.shifterTag, alt: s.shifterAlt },
    "direct-drive": { name: s.directName, tag: s.directTag, alt: s.directAlt },
  } as const;

  if (size === "compact") {
    return (
      <div
        role="tablist"
        aria-label={s.title}
        className="inline-flex w-full sm:w-auto rounded-full border border-border bg-carbon/80 p-1 backdrop-blur-md"
      >
        {VARIANTS.map((v) => {
          const on = active === v.id;
          return (
            <Link
              key={v.id}
              to={v.to}
              role="tab"
              aria-selected={on}
              className={cn(
                "relative flex-1 sm:flex-none rounded-full px-5 py-2.5 text-center font-display text-[11px] font-bold uppercase tracking-[0.18em] transition-colors",
                on ? "text-primary-foreground" : "text-foreground/65 hover:text-foreground",
              )}
            >
              {on && (
                <motion.span
                  layoutId="kart-pill-compact"
                  className="absolute inset-0 rounded-full bg-primary red-glow"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{copy[v.id].name}</span>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-7">
      {VARIANTS.map((v, i) => {
        const c = copy[v.id];
        return (
          <motion.div
            key={v.id}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 + i * 0.1 }}
          >
            <Link
              to={v.to}
              className="group relative block overflow-hidden rounded-full border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="relative aspect-[2.15/1] min-h-[168px] sm:min-h-[210px] lg:min-h-[280px]">
                <div className="absolute inset-0 carbon-texture" />
                <img
                  src={v.image}
                  alt={c.alt}
                  className={cn(
                    "absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-105",
                    v.contain
                      ? "object-contain p-4 sm:p-7 lg:p-10 drop-shadow-[0_20px_40px_rgba(225,6,0,0.28)]"
                      : "object-cover object-[center_42%]",
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-carbon/15" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-primary/25 via-transparent to-accent/15" />
                <span className="absolute inset-x-0 bottom-0 h-px racing-stripe opacity-70" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-7">
                  <div>
                    <p className="font-display text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.32em] text-accent">
                      {c.tag}
                    </p>
                    <h2
                      className="mt-0.5 font-display font-black uppercase italic leading-none tracking-tight text-[clamp(1.45rem,4.6vw,3.15rem)] text-foreground"
                      style={{ fontStretch: "condensed" }}
                    >
                      {c.name}
                    </h2>
                  </div>
                  <span className="mb-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-carbon/70 text-accent transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_0_40px_rgba(225,6,0,0.35)] group-hover:ring-primary/50" />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
