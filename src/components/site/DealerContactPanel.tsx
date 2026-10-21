import {
  ArrowUpRight,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  User,
} from "lucide-react";
import {
  dealerAddressLine,
  dealerInstagramUrl,
  dealerMapsUrl,
  dealerTelHref,
  dealerWhatsappUrl,
  type Dealer,
} from "@/content/dealers";
import type { Dict, Lang } from "@/i18n/dictionary";

type Props = { dealer: Dealer; lang: Lang; copy: Dict["dealers"] };

export function DealerContactPanel({ dealer, lang, copy }: Props) {
  const rows = [
    { label: copy.contactLabel, value: dealer.contactName, Icon: User },
    { label: copy.secondaryContactLabel, value: dealer.secondaryContactName, Icon: User },
    {
      label: dealer.street ? copy.addressLabel : copy.regionLabel,
      value: dealerAddressLine(dealer),
      href: dealer.street ? dealerMapsUrl(dealer) : undefined,
      Icon: MapPin,
      external: true,
    },
    {
      label: copy.emailLabel,
      value: dealer.email,
      href: dealer.email ? `mailto:${dealer.email}` : undefined,
      Icon: Mail,
    },
    {
      label: copy.phoneLabel,
      value: dealer.phone,
      href: dealer.phone ? dealerTelHref(dealer.phone) : undefined,
      Icon: Phone,
    },
    {
      label: "WhatsApp",
      value: dealer.whatsapp,
      href: dealer.whatsapp ? dealerWhatsappUrl(dealer.whatsapp) : undefined,
      Icon: MessageCircle,
      external: true,
    },
    {
      label: copy.websiteLabel,
      value: dealer.website ? new URL(dealer.website).hostname : undefined,
      href: dealer.website,
      Icon: Globe,
      external: true,
    },
    {
      label: "Facebook",
      value: dealer.facebook ? dealer.name : undefined,
      href: dealer.facebook,
      Icon: Facebook,
      external: true,
    },
    {
      label: copy.instagramLabel,
      value: dealer.instagram ? `@${dealer.instagram}` : undefined,
      href: dealer.instagram ? dealerInstagramUrl(dealer.instagram) : undefined,
      Icon: Instagram,
      external: true,
    },
  ].filter((row) => row.value);

  const primary = dealer.whatsapp
    ? {
        href: dealerWhatsappUrl(dealer.whatsapp),
        label: copy.writeWhatsapp,
        Icon: MessageCircle,
        external: true,
      }
    : dealer.email
      ? { href: `mailto:${dealer.email}`, label: copy.writeEmail, Icon: Mail, external: false }
      : dealer.website
        ? { href: dealer.website, label: copy.visitWebsite, Icon: Globe, external: true }
        : undefined;

  return (
    <article
      id="dealer-details"
      aria-labelledby="dealer-detail-title"
      className="dealer-contact-panel"
    >
      <div className="dealer-contact-heading">
        <div className="flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {copy.officialLabel}
          </p>
          <span className="font-display text-sm font-bold italic text-foreground/35">
            {(dealer.areaServed ?? [dealer.countryCode]).join(" / ")}
          </span>
        </div>
        <p className="mt-7 font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {dealer.country[lang]}
        </p>
        <h2
          id="dealer-detail-title"
          className="mt-2 font-display text-[2rem] font-bold uppercase italic leading-[0.98] tracking-tight sm:text-[2.3rem]"
        >
          {dealer.name}
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          {[dealer.city, dealer.region].filter(Boolean).join(", ")}
          <span className="mx-2 text-foreground/20">/</span>
          {dealer.continent[lang]}
        </p>
      </div>

      <dl className="dealer-contact-rows">
        {rows.map((row) => (
          <div key={row.label} className="dealer-contact-row">
            <row.Icon size={16} aria-hidden="true" className="mt-1 shrink-0 text-foreground/35" />
            <div className="min-w-0 flex-1">
              <dt className="font-display text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                {row.label}
              </dt>
              <dd className="mt-0.5 text-[15px] font-medium leading-snug [overflow-wrap:anywhere]">
                {row.href ? (
                  <a
                    href={row.href}
                    {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="dealer-contact-link"
                  >
                    <span>{row.value}</span>
                    {row.external ? (
                      <ArrowUpRight
                        size={13}
                        aria-hidden="true"
                        className="shrink-0 text-foreground/35"
                      />
                    ) : null}
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          </div>
        ))}
      </dl>

      {primary ? (
        <div className="dealer-contact-actions">
          <a
            href={primary.href}
            {...(primary.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="dealer-primary-action"
          >
            <primary.Icon size={17} aria-hidden="true" />
            <span>{primary.label}</span>
            <ArrowUpRight size={16} aria-hidden="true" className="ml-auto" />
          </a>
          {dealer.phone ? (
            <a href={dealerTelHref(dealer.phone)} className="dealer-secondary-action">
              <Phone size={15} aria-hidden="true" />
              {copy.callNow}
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
