import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Flag } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import type { FounderMilestone } from "@/content/founder";

export function FounderTimeline({
  items,
  eyebrow,
  title,
  lead,
  hint,
  prevLabel,
  nextLabel,
}: {
  items: FounderMilestone[];
  eyebrow: string;
  title: string;
  lead: string;
  hint: string;
  prevLabel: string;
  nextLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const last = items.length - 1;
  const progress = (index / last) * 100;
  const active = items[index];

  const go = (next: number) => setIndex(Math.min(last, Math.max(0, next)));

  return (
    <div className="mt-24">
      <SectionHeader eyebrow={eyebrow} title={title} lead={lead} />

      <div className="mt-10 border border-border bg-card/60 p-5 sm:p-8 clip-diagonal">
        {/* Active card */}
        <div className="min-h-[9.5rem] sm:min-h-[7.5rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <span className="font-display text-5xl sm:text-6xl font-black italic text-primary drop-shadow-[0_0_25px_rgba(225,6,0,0.4)]">
                {active.year}
              </span>
              <h3 className="mt-2 font-display font-bold uppercase tracking-tight text-lg sm:text-xl">
                {active.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                {active.body}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scrub control: race progress bar with kart marker */}
        <div className="relative mt-8 pt-6">
          <div className="relative h-1.5 w-full rounded-full bg-border overflow-visible">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full racing-stripe"
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 26 }}
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-primary red-glow"
              animate={{ left: `${progress}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 26 }}
            >
              <Flag size={13} className="text-primary-foreground" />
            </motion.div>
          </div>
          <input
            type="range"
            min={0}
            max={last}
            step={1}
            value={index}
            onChange={(e) => go(Number(e.target.value))}
            aria-label={title}
            className="absolute inset-x-0 -top-1 h-6 w-full cursor-pointer appearance-none bg-transparent opacity-0"
          />
        </div>

        <p className="mt-3 text-center text-[11px] uppercase tracking-widest text-accent/80 sm:text-left">
          {hint}
        </p>

        {/* Year jump-dots */}
        <div className="mt-5 -mx-1 flex gap-1.5 overflow-x-auto pb-1">
          {items.map((it, i) => (
            <button
              key={it.year}
              onClick={() => go(i)}
              aria-current={i === index}
              className={`shrink-0 rounded-sm px-2.5 py-1.5 font-display text-[11px] font-bold uppercase tracking-wider transition-colors ${
                i === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground/60 hover:text-foreground"
              }`}
            >
              {it.year}
            </button>
          ))}
        </div>

        {/* Prev / Next */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className="inline-flex items-center gap-1.5 px-3 py-2 font-display text-xs font-bold uppercase tracking-widest text-foreground/70 hover:text-primary disabled:opacity-30 disabled:hover:text-foreground/70 transition-colors"
          >
            <ChevronLeft size={16} />
            {prevLabel}
          </button>
          <span className="font-display text-xs text-muted-foreground">
            {index + 1} / {items.length}
          </span>
          <button
            onClick={() => go(index + 1)}
            disabled={index === last}
            className="inline-flex items-center gap-1.5 px-3 py-2 font-display text-xs font-bold uppercase tracking-widest text-foreground/70 hover:text-primary disabled:opacity-30 disabled:hover:text-foreground/70 transition-colors"
          >
            {nextLabel}
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
