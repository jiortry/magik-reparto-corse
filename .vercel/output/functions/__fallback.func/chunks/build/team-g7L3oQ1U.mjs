import { V as jsxRuntimeExports } from "./server-DVrhaJxa.mjs";
import { P as PageShell } from "./PageShell-x_yWbeoC.mjs";
import { S as SectionHeader } from "./SectionHeader-CNlqM60Q.mjs";
import { u as useLang, m as motion, t as team, p as pilot } from "./router-DrWWhRp2.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function TeamPage() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.team.eyebrow, title: t.team.title, lead: t.team.lead }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]", children: [
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
      }, src: team, alt: "MAGIK Racing Team", className: "w-full h-full object-cover clip-diagonal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { initial: {
        opacity: 0,
        scale: 1.05
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.8,
        delay: 0.1
      }, src: pilot, alt: "Pilota MAGIK", className: "w-full h-full object-cover clip-diagonal-r" })
    ] })
  ] }) });
}
export {
  TeamPage as component
};
