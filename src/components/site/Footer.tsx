import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo-magik.png";
import { useLang } from "@/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border bg-carbon">
      <div className="absolute inset-x-0 top-0 h-px racing-stripe" />
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="MAGIK Reparto Corse" className="h-10 w-auto" />
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            {t.footer.desc}
          </p>
          <a
            href="https://www.instagram.com/magik_repartocorse/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
          >
            <Instagram size={18} />
            @magik_repartocorse
          </a>
        </div>

        <div>
          <h4 className="text-xs font-display uppercase tracking-widest text-accent mb-4">
            {t.footer.quickLinks}
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-foreground/70 hover:text-primary">{t.nav.about}</Link></li>
            <li><Link to="/services" className="text-foreground/70 hover:text-primary">{t.nav.services}</Link></li>
            <li><Link to="/kart-magik" className="text-foreground/70 hover:text-primary">{t.nav.kart}</Link></li>
            <li><Link to="/team" className="text-foreground/70 hover:text-primary">{t.nav.team}</Link></li>
            <li><Link to="/gallery" className="text-foreground/70 hover:text-primary">{t.nav.gallery}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-display uppercase tracking-widest text-accent mb-4">
            {t.footer.contact}
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="text-foreground/70 hover:text-primary">{t.nav.contact}</Link></li>
            <li><Link to="/lke" className="text-foreground/70 hover:text-primary">LKE Emilia-Romagna</Link></li>
            <li><Link to="/faq" className="text-foreground/70 hover:text-primary">{t.nav.faq}</Link></li>
            <li><Link to="/blog" className="text-foreground/70 hover:text-primary">{t.nav.blog}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {year} MAGIK Reparto Corse. {t.footer.rights}</span>
          <span className="font-display uppercase tracking-widest text-accent/80">
            Performance · Tecnica · Ambizione
          </span>
        </div>
      </div>
    </footer>
  );
}
