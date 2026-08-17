import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { RevealText } from "@/components/site/RevealText";

export const WEB_AGENCY_PHONE = "393519925868";
export const WEB_AGENCY_MESSAGE = "Ciao sarei interessato ad un sito web/app";
export const WEB_AGENCY_WHATSAPP = `https://wa.me/${WEB_AGENCY_PHONE}?text=${encodeURIComponent(
  WEB_AGENCY_MESSAGE,
)}`;

/** Pre-footer band, present on every page. */
export function WebsiteCta() {
  const { t } = useLang();
  const c = t.webCta;

  return (
    <section
      aria-labelledby="web-cta-title"
      className="relative overflow-hidden border-t border-border bg-carbon"
    >
      <div className="absolute inset-0 grid-overlay opacity-[0.35]" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-px racing-stripe opacity-70 animate-scan-x"
        aria-hidden
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-[90px]"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.12, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-[11px] font-display font-bold uppercase tracking-[0.3em] text-accent"
            >
              <span className="h-px w-8 bg-accent" />
              {c.eyebrow}
            </motion.p>

            <RevealText
              as="h2"
              id="web-cta-title"
              text={c.title}
              className="mt-4 font-display font-black uppercase italic tracking-tight text-3xl md:text-5xl leading-[0.95]"
            />

            <RevealText
              as="p"
              text={c.lead}
              delay={0.15}
              className="mt-5 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            />
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <motion.a
              href={WEB_AGENCY_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-primary px-7 py-4 text-primary-foreground clip-diagonal shadow-[0_12px_40px_oklch(0.58_0.235_25/0.35)]"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100"
              />
              <MessageCircle size={20} />
              <span className="font-display text-sm font-bold uppercase tracking-widest">
                {c.button}
              </span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>

            <p className="text-xs text-muted-foreground font-display uppercase tracking-widest">
              {c.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
