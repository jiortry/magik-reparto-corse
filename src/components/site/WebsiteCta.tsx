import { Fragment, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

export const WEB_AGENCY_PHONE = "393519925868";
export const WEB_AGENCY_MESSAGE = "Ciao sarei interessato ad un sito web/app";
export const WEB_AGENCY_WHATSAPP = `https://wa.me/${WEB_AGENCY_PHONE}?text=${encodeURIComponent(
  WEB_AGENCY_MESSAGE,
)}`;

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const VIEW = { once: true, margin: "0px 0px 80px 0px" } as const;

/** Tracking as padding on split glyphs — CSS letter-spacing on inline-block letters double-gaps. */
function LetterLine({
  text,
  className,
  delay = 0,
  tracking = "0.06em",
  wordGap = "0.28em",
  active,
}: {
  text: string;
  className?: string;
  delay?: number;
  tracking?: string;
  wordGap?: string;
  active: boolean;
}) {
  const words = text.split(" ");
  let i = 0;

  return (
    <motion.span
      className={className}
      aria-label={text}
      initial="hidden"
      animate={active ? "visible" : "hidden"}
    >
      {words.map((word, wi) => (
        <Fragment key={`${word}-${wi}`}>
          <span className="inline-block whitespace-nowrap align-baseline">
            {Array.from(word).map((ch, ci) => {
              const order = i++;
              return (
                <motion.span
                  key={`${ch}-${ci}`}
                  aria-hidden
                  custom={order}
                  className="inline-block"
                  style={{ paddingRight: ci === word.length - 1 ? 0 : tracking }}
                  variants={{
                    hidden: { y: "108%", opacity: 0 },
                    visible: (idx: number) => ({
                      y: "0%",
                      opacity: 1,
                      transition: {
                        duration: 0.65,
                        delay: delay + idx * 0.024,
                        ease: EASE,
                      },
                    }),
                  }}
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
          {wi < words.length - 1 ? (
            <span aria-hidden className="inline-block" style={{ width: wordGap }} />
          ) : null}
        </Fragment>
      ))}
    </motion.span>
  );
}

/** Pre-footer band, present on every page. */
export function WebsiteCta() {
  const { t } = useLang();
  const c = t.webCta;
  const reduce = useReducedMotion();
  const headRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(headRef, { once: true, amount: 0.2, margin: "0px 0px 120px 0px" });
  const showTitle = Boolean(reduce) || inView;

  return (
    <section
      aria-labelledby="web-cta-title"
      className="relative overflow-hidden border-t border-border bg-carbon"
    >
      <div className="absolute inset-0 grid-overlay opacity-[0.22]" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/[0.12] blur-[110px]"
      />

      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-primary/80 to-transparent"
        initial={reduce ? false : { scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={VIEW}
        transition={{ duration: 1.1, ease: EASE }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.55fr)_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <motion.span
                aria-hidden
                className="h-px bg-accent"
                initial={reduce ? false : { width: 0, opacity: 0 }}
                whileInView={{ width: 32, opacity: 1 }}
                viewport={VIEW}
                transition={{ duration: 0.7, ease: EASE }}
              />
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
                className="text-[11px] font-display font-bold uppercase tracking-[0.28em] text-accent"
              >
                {c.eyebrow}
              </motion.p>
            </div>

            <h2
              ref={headRef}
              id="web-cta-title"
              className="mt-5 font-display font-black uppercase italic leading-[1.08]"
              style={{ fontStretch: "condensed" }}
            >
              <span className="block min-h-[1.15em] overflow-hidden py-[0.14em] pr-[0.18em] -my-[0.06em]">
                <LetterLine
                  text={c.title}
                  delay={0.08}
                  tracking="0.06em"
                  wordGap="0.3em"
                  active={showTitle}
                  className="block text-foreground text-[clamp(1.85rem,5.2vw,3.35rem)]"
                />
              </span>
              <span className="block min-h-[1.15em] overflow-hidden py-[0.14em] pr-[0.18em] -my-[0.06em]">
                <LetterLine
                  text={c.titleAccent}
                  delay={0.22}
                  tracking="0.08em"
                  wordGap="0.32em"
                  active={showTitle}
                  className="block text-primary text-[clamp(1.85rem,5.2vw,3.35rem)]"
                />
              </span>
            </h2>

            <motion.span
              aria-hidden
              className="mt-4 block h-px origin-left bg-primary/70"
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={VIEW}
              transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
              style={{ width: 72 }}
            />

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
              className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              {c.lead}
            </motion.p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4">
            <motion.a
              href={WEB_AGENCY_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={{ scale: 0.985 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-primary px-7 py-4 text-primary-foreground clip-diagonal shadow-[0_10px_36px_oklch(0.58_0.235_25/0.28)]"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/20 opacity-0 transition-all duration-700 ease-out group-hover:left-[110%] group-hover:opacity-100"
              />
              <MessageCircle size={18} className="relative" />
              <span className="relative font-display text-sm font-bold uppercase tracking-[0.18em]">
                {c.button}
              </span>
              <ArrowUpRight
                size={15}
                className="relative transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>

            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VIEW}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[11px] text-muted-foreground font-display uppercase tracking-[0.18em]"
            >
              {c.note}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
