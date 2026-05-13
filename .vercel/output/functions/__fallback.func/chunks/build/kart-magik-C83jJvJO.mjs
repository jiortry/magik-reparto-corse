import { V as jsxRuntimeExports } from "./server-CXBZX6K0.mjs";
import { P as PageShell } from "./PageShell-DudOLnu-.mjs";
import { S as SectionHeader } from "./SectionHeader-Dv5izfbj.mjs";
import { u as useLang, g as gokart, m as motion } from "./router-FaIjrp16.mjs";
import { R as RacingButton } from "./RacingButton-DHpVggpD.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function KartHotspots({ items }) {
  const positions = [
    { x: 50, y: 65 },
    // Telaio
    { x: 24, y: 76 },
    // Carene
    { x: 82, y: 36 },
    // Radiatore
    { x: 74, y: 70 },
    // Freni
    { x: 50, y: 22 },
    // Motore
    { x: 28, y: 30 }
    // Setup
  ];
  const hotspots = items.map((it, i) => ({ ...it, ...positions[i % positions.length] }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/10 blur-3xl rounded-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: gokart, alt: "Kart Magik", className: "relative w-full" }),
    hotspots.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.5 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, margin: "-80px" },
        transition: { delay: 0.2 + i * 0.12, duration: 0.5 },
        className: "absolute -translate-x-1/2 -translate-y-1/2",
        style: { left: `${h.x}%`, top: `${h.y}%` },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-3 w-3 rounded-full bg-primary red-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-primary animate-ping opacity-60" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 w-48 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-accent/60 bg-carbon/95 backdrop-blur-md px-3 py-2 clip-diagonal-r", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold uppercase text-[11px] tracking-widest text-accent", children: h.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] text-foreground/80 leading-snug", children: h.body })
          ] }) })
        ] })
      },
      h.label
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 lg:hidden", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card/60 p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[10px] uppercase tracking-widest text-accent", children: it.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: it.body })
    ] }, it.label)) })
  ] });
}
function KartPage() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.kart.eyebrow, title: t.kart.title, lead: t.kart.lead }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(KartHotspots, { items: t.kart.hotspots }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RacingButton, { to: "/lke", children: "LKE Emilia-Romagna" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RacingButton, { to: "/contact", variant: "outline", children: t.common.requestInfo })
    ] })
  ] }) });
}
export {
  KartPage as component
};
