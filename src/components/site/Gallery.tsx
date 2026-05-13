import { useEffect, useState, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

export type GalleryItem = { src: string; alt: string; caption?: string };

const transitions = [
  // Diagonal wipe red
  {
    initial: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 1 },
    animate: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 },
    exit: { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", opacity: 1 },
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] as const },
  },
  // Zoom track
  {
    initial: { scale: 1.2, opacity: 0, filter: "blur(12px)" },
    animate: { scale: 1, opacity: 1, filter: "blur(0px)" },
    exit: { scale: 0.95, opacity: 0, filter: "blur(8px)" },
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const },
  },
  // Side wipe
  {
    initial: { x: "100%", opacity: 1 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 1 },
    transition: { duration: 0.65, ease: [0.7, 0, 0.3, 1] as const },
  },
  // Flash
  {
    initial: { opacity: 0, scale: 1.05, filter: "brightness(3)" },
    animate: { opacity: 1, scale: 1, filter: "brightness(1)" },
    exit: { opacity: 0, filter: "brightness(2)" },
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
  // Diagonal cut
  {
    initial: { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", opacity: 1 },
    animate: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 },
    exit: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 1 },
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] as const },
  },
];

export function Gallery({ items }: { items: GalleryItem[] }) {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  const [auto, setAuto] = useState(false);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const transRef = useRef(0);

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(() => {
    setOpen((i) => (i === null ? null : (i + 1) % items.length));
  }, [items.length]);
  const prev = useCallback(() => {
    setOpen((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  }, [items.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  useEffect(() => {
    if (!auto || open === null) return;
    const id = window.setInterval(() => next(), 3500);
    return () => window.clearInterval(id);
  }, [auto, open, next]);

  // Pick a different transition each step
  if (open !== null) transRef.current = (transRef.current + 1) % transitions.length;
  const t0 = transitions[transRef.current];

  return (
    <>
      <div className="grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 [grid-auto-flow:dense]">
        {items.map((it, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden border border-border bg-card ${
              i % 7 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
            }`}
          >
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-x-0 bottom-0 p-3">
              <p className="font-display text-[10px] uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                {it.caption ?? "MAGIK"}
              </p>
            </div>
            <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-carbon/98 backdrop-blur-xl flex flex-col"
            onMouseMove={(e) => {
              const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
              setMouseTilt({
                x: ((e.clientX - r.left) / r.width - 0.5) * 20,
                y: ((e.clientY - r.top) / r.height - 0.5) * 20,
              });
            }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-accent">
                {String(open + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setAuto((v) => !v)}
                  className="p-2 border border-border hover:border-primary text-foreground/80 hover:text-primary transition-colors"
                  aria-label={auto ? "Pause" : "Play"}
                >
                  {auto ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <button
                  onClick={close}
                  className="p-2 border border-border hover:border-primary text-foreground/80 hover:text-primary transition-colors"
                  aria-label={t.gallery.close}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="relative flex-1 flex items-center justify-center overflow-hidden p-4 md:p-10">
              <button
                onClick={prev}
                aria-label={t.gallery.prev}
                className="absolute left-3 md:left-6 z-10 p-3 border border-border bg-card/60 hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                aria-label={t.gallery.next}
                className="absolute right-3 md:right-6 z-10 p-3 border border-border bg-card/60 hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronRight size={20} />
              </button>

              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={open}
                    src={items[open].src}
                    alt={items[open].alt}
                    style={{
                      transform: `translate(${mouseTilt.x}px, ${mouseTilt.y}px)`,
                    }}
                    initial={t0.initial}
                    animate={t0.animate}
                    exit={t0.exit}
                    transition={t0.transition}
                    className="max-h-full max-w-full object-contain shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
                  />
                </AnimatePresence>
              </div>
            </div>

            {items[open].caption && (
              <div className="px-5 py-4 border-t border-border text-center">
                <p className="font-display text-sm uppercase tracking-widest text-foreground/80">
                  {items[open].caption}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
