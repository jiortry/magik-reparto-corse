import { V as jsxRuntimeExports, r as reactExports } from "./server-CXBZX6K0.mjs";
import { P as PageShell } from "./PageShell-DudOLnu-.mjs";
import { S as SectionHeader } from "./SectionHeader-Dv5izfbj.mjs";
import { u as useLang, h as faqItems, m as motion, A as AnimatePresence, c as createLucideIcon } from "./router-FaIjrp16.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode);
function FAQAccordion({
  items
}) {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border border-y border-border", children: items.map((it, i) => {
    const isOpen = open === i;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.4, delay: i * 0.05 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setOpen(isOpen ? null : i),
              className: "w-full flex items-center justify-between gap-4 py-5 text-left group",
              "aria-expanded": isOpen,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold uppercase tracking-tight text-base md:text-lg text-foreground group-hover:text-primary transition-colors", children: it.q }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Plus,
                  {
                    size: 20,
                    className: `shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.3, ease: [0.2, 0.8, 0.2, 1] },
              className: "overflow-hidden",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pb-5 pr-10 text-sm md:text-base text-muted-foreground leading-relaxed", children: it.a })
            }
          ) })
        ]
      },
      i
    );
  }) });
}
function FAQPage() {
  const {
    t,
    lang
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-5 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.faq.eyebrow, title: t.faq.title, lead: t.faq.lead }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQAccordion, { items: faqItems[lang] }) })
  ] }) });
}
export {
  FAQPage as component
};
