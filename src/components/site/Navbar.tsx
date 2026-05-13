import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-magik.png";
import { useLang } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const links: Array<{ to: string; label: string }> = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/kart-magik", label: t.nav.kart },
    { to: "/lke", label: t.nav.lke },
    { to: "/team", label: t.nav.team },
    { to: "/gallery", label: t.nav.gallery },
    { to: "/blog", label: t.nav.blog },
    { to: "/faq", label: t.nav.faq },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-carbon/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="MAGIK Reparto Corse" className="h-8 lg:h-10 w-auto" />
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-3 py-2 text-[13px] uppercase tracking-wider font-display font-semibold text-foreground/70 hover:text-foreground transition-colors group"
              activeProps={{ className: "!text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden border-t border-border bg-carbon/95 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-[1400px] px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="py-2.5 px-3 text-sm uppercase tracking-wider font-display font-semibold text-foreground/80 hover:text-primary border-l-2 border-transparent hover:border-primary transition-all"
                  activeProps={{ className: "!text-primary !border-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
