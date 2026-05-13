import { V as jsxRuntimeExports } from "./server-CXBZX6K0.mjs";
import { P as PageShell } from "./PageShell-DudOLnu-.mjs";
import { S as SectionHeader } from "./SectionHeader-Dv5izfbj.mjs";
import { R as RacingButton } from "./RacingButton-DHpVggpD.mjs";
import { u as useLang, m as motion } from "./router-FaIjrp16.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function LkePage() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.lke.eyebrow, title: t.lke.title, lead: t.lke.lead }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2", children: t.lke.points.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      x: i % 2 ? 30 : -30
    }, whileInView: {
      opacity: 1,
      x: 0
    }, viewport: {
      once: true,
      margin: "-60px"
    }, transition: {
      duration: 0.5,
      delay: i * 0.08
    }, className: "flex items-start gap-4 border border-border bg-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-black italic text-2xl text-primary leading-none", children: [
        "0",
        i + 1
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/85", children: p })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap gap-3", children: t.lke.ctas.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RacingButton, { to: c.href, variant: i === 0 ? "primary" : "outline", children: c.label }, i)) })
  ] }) });
}
export {
  LkePage as component
};
