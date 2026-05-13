import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-[11px] font-display font-bold uppercase tracking-[0.3em] text-accent"
        >
          <span className="h-px w-8 bg-accent" />
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-3 font-display font-bold uppercase tracking-tight text-4xl md:text-5xl lg:text-6xl italic"
        style={{ fontStretch: "condensed" }}
      >
        {title}
      </motion.h2>
      {lead && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          {lead}
        </motion.p>
      )}
    </div>
  );
}
