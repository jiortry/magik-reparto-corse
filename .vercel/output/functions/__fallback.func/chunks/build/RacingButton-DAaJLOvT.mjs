import { V as jsxRuntimeExports } from "./server-DVrhaJxa.mjs";
import { L as Link, c as createLucideIcon } from "./router-DrWWhRp2.mjs";
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode);
const styles = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary",
  outline: "bg-transparent text-foreground border border-border hover:border-primary hover:text-primary",
  ghost: "bg-transparent text-foreground border border-accent/40 hover:border-accent hover:text-accent"
};
function RacingButton({
  to,
  href,
  children,
  variant = "primary",
  external
}) {
  const className = `group relative inline-flex items-center gap-2 px-5 py-3 font-display text-xs font-bold uppercase tracking-widest transition-all overflow-hidden clip-diagonal ${styles[variant]}`;
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14, className: "relative z-10 transition-transform group-hover:translate-x-1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" })
  ] });
  if (href) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href,
        target: external ? "_blank" : void 0,
        rel: external ? "noopener noreferrer" : void 0,
        className,
        children: inner
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className, children: inner });
}
export {
  RacingButton as R
};
