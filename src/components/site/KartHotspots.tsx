import { motion } from "framer-motion";
import gokart from "@/assets/gokart.png";

type Hotspot = { label: string; body: string; x: number; y: number };

export function KartHotspots({
  items,
  image = gokart,
  alt = "Kart Magik",
}: {
  items: ReadonlyArray<{ label: string; body: string }>;
  image?: string;
  alt?: string;
}) {
  // Fixed positions tuned to gokart.png composition
  const positions: Array<Pick<Hotspot, "x" | "y">> = [
    { x: 50, y: 65 }, // Telaio
    { x: 24, y: 76 }, // Carene
    { x: 82, y: 36 }, // Radiatore
    { x: 74, y: 70 }, // Freni
    { x: 50, y: 22 }, // Motore
    { x: 28, y: 30 }, // Setup
  ];
  const hotspots: Hotspot[] = items.map((it, i) => ({ ...it, ...positions[i % positions.length] }));

  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
      <img src={image} alt={alt} className="relative w-full" />
      {hotspots.map((h, i) => (
        <motion.div
          key={h.label}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${h.x}%`, top: `${h.y}%` }}
        >
          <div className="group relative">
            <div className="relative h-3 w-3 rounded-full bg-primary red-glow">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
            </div>
            <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 w-48 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="border border-accent/60 bg-carbon/95 backdrop-blur-md px-3 py-2 clip-diagonal-r">
                <p className="font-display font-bold uppercase text-[11px] tracking-widest text-accent">
                  {h.label}
                </p>
                <p className="mt-1 text-[11px] text-foreground/80 leading-snug">{h.body}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      {/* Always-visible label list on mobile */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 lg:hidden">
        {items.map((it) => (
          <div key={it.label} className="border border-border bg-card/60 p-3">
            <p className="font-display text-[10px] uppercase tracking-widest text-accent">
              {it.label}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{it.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
