import { V as jsxRuntimeExports } from "./server-DVrhaJxa.mjs";
import { P as PageShell } from "./PageShell-x_yWbeoC.mjs";
import { S as SectionHeader } from "./SectionHeader-CNlqM60Q.mjs";
import { S as ServiceCard } from "./ServiceCard-DfvjceQj.mjs";
import { u as useLang } from "./router-DrWWhRp2.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function ServicesPage() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.services.eyebrow, title: t.services.title, lead: t.services.lead }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: t.services.items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { index: i, ...it }, i)) })
  ] }) });
}
export {
  ServicesPage as component
};
