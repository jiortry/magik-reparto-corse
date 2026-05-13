import { V as jsxRuntimeExports } from "./server-CXBZX6K0.mjs";
import { R as Route2, u as useLang, L as Link, c as createLucideIcon } from "./router-FaIjrp16.mjs";
import { P as PageShell } from "./PageShell-DudOLnu-.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode);
function PostPage() {
  const {
    post
  } = Route2.useLoaderData();
  const {
    lang
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto max-w-3xl px-5 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-xs font-display uppercase tracking-widest text-accent hover:text-primary transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
      " Blog"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-[10px] font-display uppercase tracking-widest text-accent", children: [
      post.category[lang],
      " · ",
      new Date(post.date).toLocaleDateString(lang === "it" ? "it-IT" : "en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display font-black uppercase italic text-4xl md:text-5xl tracking-tight leading-[1]", children: post.title[lang] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.cover, alt: post.title[lang], className: "mt-8 w-full aspect-[16/9] object-cover clip-diagonal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg text-foreground/85 leading-relaxed", children: post.excerpt[lang] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: post.body[lang] })
  ] }) });
}
export {
  PostPage as component
};
