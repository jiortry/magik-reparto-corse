import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Gauge, Handshake, Circle, Armchair, Wrench, Award } from "lucide-react";
import type { PartnerIcon } from "@/content/partnership";

const icons: Record<PartnerIcon, typeof Cpu> = {
  engine: Cpu,
  telemetry: Gauge,
  partner: Handshake,
  wheels: Circle,
  seats: Armchair,
  builder: Wrench,
};

export function PartnerCard({
  name,
  category,
  url,
  icon,
  visitLabel,
  index = 0,
}: {
  name: string;
  category?: string;
  url: string;
  icon?: PartnerIcon;
  visitLabel: string;
  index?: number;
}) {
  const Icon = icon ? icons[icon] : Award;
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col justify-between overflow-hidden border border-border bg-card p-6 clip-diagonal transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:red-glow"
    >
      <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 racing-stripe transition-transform duration-500 group-hover:scale-x-100" />

      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon size={20} />
        </span>
        <ArrowUpRight
          size={18}
          className="text-muted-foreground opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-primary"
        />
      </div>

      <div className="mt-6">
        {category && (
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
            {category}
          </p>
        )}
        <h3 className="mt-1.5 font-display font-bold uppercase tracking-tight text-lg sm:text-xl italic">
          {name}
        </h3>
        <span className="mt-3 inline-block text-[11px] font-display font-semibold uppercase tracking-widest text-foreground/50 transition-colors group-hover:text-foreground/80">
          {visitLabel}
        </span>
      </div>
    </motion.a>
  );
}
