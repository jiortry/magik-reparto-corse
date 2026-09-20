import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone, User } from "lucide-react";
import type { Dict, Lang } from "@/i18n/dictionary";
import {
  dealerAddressLine,
  dealerInstagramUrl,
  dealerMapsUrl,
  dealerTelHref,
  type Dealer,
} from "@/content/dealers";

const ease = [0.16, 1, 0.3, 1] as const;

type Props = {
  dealer: Dealer;
  lang: Lang;
  copy: Dict["dealers"];
  index?: number;
};

export function DealerPlate({ dealer, lang, copy, index = 0 }: Props) {
  const rows = [
    {
      key: "email",
      label: copy.emailLabel,
      value: dealer.email,
      href: `mailto:${dealer.email}`,
      Icon: Mail,
    },
    {
      key: "contact",
      label: copy.contactLabel,
      value: dealer.contactName,
      href: `mailto:${dealer.email}`,
      Icon: User,
    },
    {
      key: "address",
      label: copy.addressLabel,
      value: dealerAddressLine(dealer),
      href: dealerMapsUrl(dealer),
      Icon: MapPin,
      external: true,
    },
    {
      key: "phone",
      label: copy.phoneLabel,
      value: dealer.phone,
      href: dealerTelHref(dealer.phone),
      Icon: Phone,
    },
    {
      key: "instagram",
      label: copy.instagramLabel,
      value: `@${dealer.instagram}`,
      href: dealerInstagramUrl(dealer.instagram),
      Icon: Instagram,
      external: true,
    },
  ] as const;

  const raceNo = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease }}
      className="group relative overflow-hidden border border-border bg-card"
    >
      <div className="absolute inset-x-0 top-0 z-20 h-px origin-left scale-x-0 racing-stripe transition-transform duration-700 group-hover:scale-x-100" />
      <motion.span
        aria-hidden
        initial={{ x: "-120%" }}
        whileInView={{ x: "120%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/3 bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
      />

      <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
        <div className="relative overflow-hidden carbon-texture px-8 py-10 sm:px-10 sm:py-14 lg:min-h-[520px]">
          <div className="absolute inset-y-0 left-0 flex w-[5px] flex-col">
            <span className="flex-1 bg-foreground/85" />
            <span className="flex-1 bg-primary" />
            <span className="flex-1 bg-accent" />
          </div>

          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="pointer-events-none absolute -right-8 top-8 font-display text-[11rem] font-black italic leading-none text-foreground/[0.04] sm:text-[14rem]"
          >
            {dealer.countryCode}
          </motion.div>

          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-start justify-between">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.35em] text-accent">
                {copy.officialLabel}
              </p>
              <span className="font-display text-xs font-black italic text-foreground/35">
                #{raceNo}
              </span>
            </div>

            <div className="mt-16 lg:mt-0">
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15, ease }}
                  className="font-display text-[clamp(5.2rem,12vw,8.5rem)] font-black italic leading-[0.78] tracking-tight"
                  style={{ fontStretch: "condensed" }}
                >
                  <span className="text-stroke">{dealer.countryCode[0]}</span>
                  <span className="text-primary">{dealer.countryCode[1]}</span>
                </motion.p>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.35, ease }}
                className="mt-5 font-display text-sm font-bold uppercase tracking-[0.32em] text-accent"
              >
                {dealer.country[lang]}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.45 }}
                className="mt-2 text-sm text-muted-foreground"
              >
                {dealer.city}
              </motion.p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-between border-t border-border px-6 py-8 sm:px-10 sm:py-12 lg:border-t-0 lg:border-l">
          <div>
            <motion.p
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-accent"
            >
              {dealer.country[lang]} · Magik Kart
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.28, ease }}
              className="mt-2 font-display text-3xl font-bold uppercase italic tracking-tight sm:text-4xl"
              style={{ fontStretch: "condensed" }}
            >
              {dealer.name}
            </motion.h2>
          </div>

          <ul className="mt-10 space-y-1">
            {rows.map((row, i) => (
              <motion.li
                key={row.key}
                custom={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.38 + i * 0.07, ease }}
              >
                <a
                  href={row.href}
                  {...("external" in row && row.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group/row flex items-start gap-4 border-b border-border/70 py-3.5 transition-all duration-300 hover:translate-x-1 hover:border-primary/40"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover/row:bg-primary group-hover/row:text-primary-foreground">
                    <row.Icon size={15} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
                      {row.label}
                    </span>
                    <span className="mt-0.5 block text-[15px] font-medium text-foreground/90 transition-colors group-hover/row:text-primary">
                      {row.value}
                    </span>
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.85, ease }}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            <a
              href={`mailto:${dealer.email}`}
              className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail size={13} />
              {copy.writeEmail}
            </a>
            <a
              href={dealerTelHref(dealer.phone)}
              className="inline-flex items-center gap-2 border border-border px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Phone size={13} />
              {copy.callNow}
            </a>
            <a
              href={dealerMapsUrl(dealer)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <MapPin size={13} />
              {copy.mapsLabel}
            </a>
            <a
              href={dealerInstagramUrl(dealer.instagram)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram size={13} />
              {copy.instagramLabel}
            </a>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
