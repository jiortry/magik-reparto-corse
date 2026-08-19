import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import type { GalleryItem } from "@/components/site/Gallery";

export function KartDetailsGallery({ items }: { items: GalleryItem[] }) {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

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

  if (items.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {items.map((it, i) => (
          <motion.button
            key={it.src}
            type="button"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
            onClick={() => setOpen(i)}
            className="group relative aspect-[4/3] overflow-hidden border border-border bg-transparent text-left carbon-texture"
          >
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-105 sm:p-3"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-0 border-2 border-primary opacity-0 transition-opacity group-hover:opacity-100" />
            {it.caption && (
              <p className="absolute inset-x-0 bottom-0 p-2.5 font-display text-[10px] uppercase tracking-widest text-accent opacity-0 transition-opacity group-hover:opacity-100">
                {it.caption}
              </p>
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex flex-col bg-carbon/98 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-accent">
                {String(open + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </p>
              <button
                type="button"
                onClick={close}
                className="border border-border p-2 text-foreground/80 transition-colors hover:border-primary hover:text-primary"
                aria-label={t.gallery.close}
              >
                <X size={16} />
              </button>
            </div>

            <div className="relative flex flex-1 items-center justify-center overflow-hidden p-4 md:p-10">
              <button
                type="button"
                onClick={prev}
                aria-label={t.gallery.prev}
                className="absolute left-3 z-10 border border-border bg-card/60 p-3 transition-colors hover:border-primary hover:text-primary md:left-6"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label={t.gallery.next}
                className="absolute right-3 z-10 border border-border bg-card/60 p-3 transition-colors hover:border-primary hover:text-primary md:right-6"
              >
                <ChevronRight size={20} />
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={open}
                  src={items[open].src}
                  alt={items[open].alt}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  className="max-h-full max-w-full object-contain shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
                />
              </AnimatePresence>
            </div>

            {items[open].caption && (
              <div className="border-t border-border px-5 py-4 text-center">
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
