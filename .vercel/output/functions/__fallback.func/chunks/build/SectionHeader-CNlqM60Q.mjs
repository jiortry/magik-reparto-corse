import { V as jsxRuntimeExports } from "./server-DVrhaJxa.mjs";
import { m as motion } from "./router-DrWWhRp2.mjs";
function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.p,
      {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.5 },
        className: "inline-flex items-center gap-2 text-[11px] font-display font-bold uppercase tracking-[0.3em] text-accent",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-accent" }),
          eyebrow
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, delay: 0.05 },
        className: "mt-3 font-display font-bold uppercase tracking-tight text-4xl md:text-5xl lg:text-6xl italic",
        style: { fontStretch: "condensed" },
        children: title
      }
    ),
    lead && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, delay: 0.15 },
        className: "mt-4 text-base md:text-lg text-muted-foreground leading-relaxed",
        children: lead
      }
    )
  ] });
}
export {
  SectionHeader as S
};
