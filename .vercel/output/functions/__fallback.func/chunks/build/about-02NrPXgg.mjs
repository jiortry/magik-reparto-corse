import { V as jsxRuntimeExports } from "./server-CXBZX6K0.mjs";
import { P as PageShell } from "./PageShell-DudOLnu-.mjs";
import { S as SectionHeader } from "./SectionHeader-Dv5izfbj.mjs";
import { u as useLang, m as motion } from "./router-FaIjrp16.mjs";
import { t as team } from "./team-WSwQW11i.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function AboutPage() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.about.eyebrow, title: t.about.title, lead: t.about.lead }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { initial: {
      opacity: 0,
      scale: 1.05
    }, whileInView: {
      opacity: 1,
      scale: 1
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.8
    }, src: team, alt: "Team MAGIK Reparto Corse", className: "mt-12 w-full aspect-[16/8] object-cover clip-diagonal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-3", children: t.about.blocks.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-60px"
    }, transition: {
      duration: 0.5,
      delay: i * 0.1
    }, className: "relative border border-border bg-card p-7 carbon-texture", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-[10px] uppercase tracking-widest text-accent", children: [
        "0",
        i + 1
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display font-bold uppercase text-xl tracking-tight", children: b.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: b.body }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" })
    ] }, i)) })
  ] }) });
}
export {
  AboutPage as component
};
