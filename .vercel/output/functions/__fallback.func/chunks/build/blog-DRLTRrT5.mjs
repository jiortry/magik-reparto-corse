import { V as jsxRuntimeExports } from "./server-CXBZX6K0.mjs";
import { u as useLang, p as posts, m as motion, L as Link } from "./router-FaIjrp16.mjs";
import { P as PageShell } from "./PageShell-DudOLnu-.mjs";
import { S as SectionHeader } from "./SectionHeader-Dv5izfbj.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function BlogPage() {
  const {
    t,
    lang
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.blog.eyebrow, title: t.blog.title, lead: t.blog.lead }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: t.blog.categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-display uppercase tracking-widest border border-border px-3 py-1.5 text-foreground/70", children: c }, c)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: posts.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.article, { initial: {
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
      delay: i % 3 * 0.08
    }, className: "group relative border border-border bg-card overflow-hidden hover:border-primary/60 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
      slug: p.slug
    }, className: "block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.cover, alt: p.title[lang], loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-carbon to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 text-[10px] font-display font-bold uppercase tracking-widest bg-primary text-primary-foreground px-2 py-1", children: p.category[lang] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-display uppercase tracking-widest text-muted-foreground", children: new Date(p.date).toLocaleDateString(lang === "it" ? "it-IT" : "en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display font-bold uppercase text-lg leading-tight tracking-tight group-hover:text-primary transition-colors", children: p.title[lang] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground line-clamp-2", children: p.excerpt[lang] })
      ] })
    ] }) }, p.slug)) })
  ] }) });
}
export {
  BlogPage as component
};
