import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type Props = {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  external?: boolean;
};

const styles = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary",
  outline:
    "bg-transparent text-foreground border border-border hover:border-primary hover:text-primary",
  ghost:
    "bg-transparent text-foreground border border-accent/40 hover:border-accent hover:text-accent",
};

export function RacingButton({ to, href, children, variant = "primary", external }: Props) {
  const className = `group relative inline-flex items-center gap-2 px-5 py-3 font-display text-xs font-bold uppercase tracking-widest transition-all overflow-hidden clip-diagonal ${styles[variant]}`;
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <ArrowRight
        size={14}
        className="relative z-10 transition-transform group-hover:translate-x-1"
      />
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={className}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link to={to!} className={className}>
      {inner}
    </Link>
  );
}
