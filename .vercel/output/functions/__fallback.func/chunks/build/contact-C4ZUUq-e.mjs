import { V as jsxRuntimeExports, r as reactExports } from "./server-CXBZX6K0.mjs";
import { P as PageShell } from "./PageShell-DudOLnu-.mjs";
import { S as SectionHeader } from "./SectionHeader-Dv5izfbj.mjs";
import { u as useLang, M as MessageCircle, I as Instagram, m as motion } from "./router-FaIjrp16.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function ContactForm() {
  const { t } = useLang();
  const f = t.contact.form;
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
        e.target.reset();
        window.setTimeout(() => setSent(false), 5e3);
      },
      className: "grid gap-4 sm:grid-cols-2",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: f.firstName, name: "firstName", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: f.lastName, name: "lastName", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: f.email, name: "email", type: "email", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: f.phone, name: "phone", type: "tel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-display font-bold uppercase tracking-widest text-accent mb-2", children: f.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              name: "type",
              required: true,
              className: "w-full bg-card border border-border px-4 py-3 text-sm focus:border-primary outline-none",
              children: f.types.map((typ) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: typ, children: typ }, typ))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-display font-bold uppercase tracking-widest text-accent mb-2", children: f.message }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              name: "message",
              required: true,
              rows: 5,
              className: "w-full bg-card border border-border px-4 py-3 text-sm focus:border-primary outline-none resize-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 flex items-center gap-4 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              className: "group relative inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display text-xs font-bold uppercase tracking-widest clip-diagonal hover:bg-primary/90 transition-colors overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: f.submit }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" })
              ]
            }
          ),
          sent && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.span,
            {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              className: "text-sm text-accent",
              children: [
                "✓ ",
                f.success
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-[10px] font-display font-bold uppercase tracking-widest text-accent mb-2", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        name,
        required,
        className: "w-full bg-card border border-border px-4 py-3 text-sm focus:border-primary outline-none"
      }
    )
  ] });
}
function ContactPage() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-8 grid gap-12 lg:grid-cols-[1fr_1.2fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.contact.eyebrow, title: t.contact.title, lead: t.contact.lead }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-3", children: t.contact.ctas.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border border-border bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-black italic text-xl text-primary", children: "→" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/85", children: c })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/?text=Ciao%20MAGIK%20Reparto%20Corse", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-5 py-3 border border-accent text-accent hover:bg-accent hover:text-accent-foreground font-display text-xs font-bold uppercase tracking-widest transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 16 }),
          " WhatsApp"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.instagram.com/magik_repartocorse/", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-5 py-3 border border-border text-foreground hover:border-primary hover:text-primary font-display text-xs font-bold uppercase tracking-widest transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 16 }),
          " Instagram"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card p-6 md:p-8 carbon-texture relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px racing-stripe" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {})
    ] })
  ] }) });
}
export {
  ContactPage as component
};
