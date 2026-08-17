import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function DriverGrid({
  items,
  eyebrow,
  title,
  lead,
  placeholder,
  empty,
  countTemplate,
}: {
  items: string[];
  eyebrow: string;
  title: string;
  lead: string;
  placeholder: string;
  empty: string;
  countTemplate: string;
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((name) => name.toLowerCase().includes(q));
  }, [items, query]);

  const countLabel = countTemplate
    .replace("{n}", String(filtered.length))
    .replace("{total}", String(items.length));

  return (
    <div className="mt-24">
      <SectionHeader eyebrow={eyebrow} title={title} lead={lead} />

      <div className="mt-8 relative max-w-md">
        <Search
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full border border-border bg-input py-2.5 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
        />
      </div>

      <p className="mt-3 font-display text-[11px] uppercase tracking-widest text-accent/80">
        {countLabel}
      </p>

      <div className="mt-4 flex flex-wrap gap-2.5">
        <AnimatePresence initial={false}>
          {filtered.map((name) => (
            <motion.span
              key={name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="border border-border bg-card px-3.5 py-2 text-xs sm:text-sm font-semibold text-foreground/80 clip-diagonal-r hover:border-primary hover:text-foreground transition-colors"
            >
              {name}
            </motion.span>
          ))}
        </AnimatePresence>
        {filtered.length === 0 && <p className="text-sm text-muted-foreground">{empty}</p>}
      </div>
    </div>
  );
}
