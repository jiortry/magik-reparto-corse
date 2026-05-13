import { V as jsxRuntimeExports, r as reactExports } from "./server-DVrhaJxa.mjs";
import { P as PageShell } from "./PageShell-x_yWbeoC.mjs";
import { S as SectionHeader } from "./SectionHeader-CNlqM60Q.mjs";
import { u as useLang, k as kartPit, p as pilot, a as kartCorner, b as kartTrack, d as kartStudio, t as team, m as motion, A as AnimatePresence, X, c as createLucideIcon } from "./router-DrWWhRp2.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const __iconNode$3 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$3);
const __iconNode$2 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$2);
const __iconNode$1 = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
];
const Pause = createLucideIcon("pause", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
];
const Play = createLucideIcon("play", __iconNode);
const transitions = [
  // Diagonal wipe red
  {
    initial: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 1 },
    animate: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 },
    exit: { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", opacity: 1 },
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] }
  },
  // Zoom track
  {
    initial: { scale: 1.2, opacity: 0, filter: "blur(12px)" },
    animate: { scale: 1, opacity: 1, filter: "blur(0px)" },
    exit: { scale: 0.95, opacity: 0, filter: "blur(8px)" },
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }
  },
  // Side wipe
  {
    initial: { x: "100%", opacity: 1 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 1 },
    transition: { duration: 0.65, ease: [0.7, 0, 0.3, 1] }
  },
  // Flash
  {
    initial: { opacity: 0, scale: 1.05, filter: "brightness(3)" },
    animate: { opacity: 1, scale: 1, filter: "brightness(1)" },
    exit: { opacity: 0, filter: "brightness(2)" },
    transition: { duration: 0.45, ease: "easeOut" }
  },
  // Diagonal cut
  {
    initial: { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", opacity: 1 },
    animate: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 },
    exit: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 1 },
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] }
  }
];
function Gallery({ items }) {
  const { t } = useLang();
  const [open, setOpen] = reactExports.useState(null);
  const [auto, setAuto] = reactExports.useState(false);
  const [mouseTilt, setMouseTilt] = reactExports.useState({ x: 0, y: 0 });
  const transRef = reactExports.useRef(0);
  const close = reactExports.useCallback(() => setOpen(null), []);
  const next = reactExports.useCallback(() => {
    setOpen((i) => i === null ? null : (i + 1) % items.length);
  }, [items.length]);
  const prev = reactExports.useCallback(() => {
    setOpen((i) => i === null ? null : (i - 1 + items.length) % items.length);
  }, [items.length]);
  reactExports.useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);
  reactExports.useEffect(() => {
    if (!auto || open === null) return;
    const id = window.setInterval(() => next(), 3500);
    return () => window.clearInterval(id);
  }, [auto, open, next]);
  if (open !== null) transRef.current = (transRef.current + 1) % transitions.length;
  const t0 = transitions[transRef.current];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 [grid-auto-flow:dense]", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.5, delay: i % 8 * 0.05 },
        onClick: () => setOpen(i),
        className: `group relative overflow-hidden border border-border bg-card ${i % 7 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: it.src,
              alt: it.alt,
              loading: "lazy",
              className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[10px] uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity", children: it.caption ?? "MAGIK" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[120] bg-carbon/98 backdrop-blur-xl flex flex-col",
        onMouseMove: (e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setMouseTilt({
            x: ((e.clientX - r.left) / r.width - 0.5) * 20,
            y: ((e.clientY - r.top) / r.height - 0.5) * 20
          });
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-accent", children: [
              String(open + 1).padStart(2, "0"),
              " / ",
              String(items.length).padStart(2, "0")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setAuto((v) => !v),
                  className: "p-2 border border-border hover:border-primary text-foreground/80 hover:text-primary transition-colors",
                  "aria-label": auto ? "Pause" : "Play",
                  children: auto ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 16 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: close,
                  className: "p-2 border border-border hover:border-primary text-foreground/80 hover:text-primary transition-colors",
                  "aria-label": t.gallery.close,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 flex items-center justify-center overflow-hidden p-4 md:p-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: prev,
                "aria-label": t.gallery.prev,
                className: "absolute left-3 md:left-6 z-10 p-3 border border-border bg-card/60 hover:border-primary hover:text-primary transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: next,
                "aria-label": t.gallery.next,
                className: "absolute right-3 md:right-6 z-10 p-3 border border-border bg-card/60 hover:border-primary hover:text-primary transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.img,
              {
                src: items[open].src,
                alt: items[open].alt,
                style: {
                  transform: `translate(${mouseTilt.x}px, ${mouseTilt.y}px)`
                },
                initial: t0.initial,
                animate: t0.animate,
                exit: t0.exit,
                transition: t0.transition,
                className: "max-h-full max-w-full object-contain shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
              },
              open
            ) }) })
          ] }),
          items[open].caption && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-4 border-t border-border text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm uppercase tracking-widest text-foreground/80", children: items[open].caption }) })
        ]
      }
    ) })
  ] });
}
const galleryItems = [
  { src: kartPit, alt: "Kart Magik in pit lane", caption: "Pit Lane" },
  { src: pilot, alt: "Pilota MAGIK Reparto Corse", caption: "Pilot Focus" },
  { src: kartCorner, alt: "Kart Magik in curva", caption: "Apex" },
  { src: kartTrack, alt: "Kart Magik in pista", caption: "Race Pace" },
  { src: kartStudio, alt: "Kart Magik allestito", caption: "Studio Setup" },
  { src: team, alt: "Team MAGIK Reparto Corse", caption: "The Team" },
  { src: kartCorner, alt: "Kart Magik #130", caption: "#130" },
  { src: kartTrack, alt: "Kart Magik on track", caption: "Full Throttle" }
];
function GalleryPage() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.gallery.eyebrow, title: t.gallery.title, lead: t.gallery.lead }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, { items: galleryItems }) })
  ] }) });
}
export {
  GalleryPage as component
};
