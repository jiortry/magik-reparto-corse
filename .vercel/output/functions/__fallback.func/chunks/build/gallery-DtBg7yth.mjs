import { V as jsxRuntimeExports, r as reactExports } from "./server-CXBZX6K0.mjs";
import { P as PageShell } from "./PageShell-DudOLnu-.mjs";
import { S as SectionHeader } from "./SectionHeader-Dv5izfbj.mjs";
import { u as useLang, m as motion, A as AnimatePresence, X, c as createLucideIcon, _ as __vite_glob_1_22, a as __vite_glob_1_14, b as __vite_glob_1_5, d as __vite_glob_0_15, e as __vite_glob_0_9, f as __vite_glob_0_6 } from "./router-FaIjrp16.mjs";
import { _ as __vite_glob_1_15 } from "./D4S_2474-CNNFI6oT.mjs";
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
const DSC_6577 = "/assets/DSC_6577-Dq4GaJNj.jpg";
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DSC_6577
}, Symbol.toStringTag, { value: "Module" }));
const DSC_6586 = "/assets/DSC_6586-DvVXrPPx.jpg";
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DSC_6586
}, Symbol.toStringTag, { value: "Module" }));
const DSC_6604 = "/assets/DSC_6604-DteKsB8w.jpg";
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DSC_6604
}, Symbol.toStringTag, { value: "Module" }));
const DSC_6627 = "/assets/DSC_6627-Dr0Yr51i.jpg";
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DSC_6627
}, Symbol.toStringTag, { value: "Module" }));
const DSC_6789 = "/assets/DSC_6789-COm2Sl7l.jpg";
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DSC_6789
}, Symbol.toStringTag, { value: "Module" }));
const DSC_6792 = "/assets/DSC_6792-C3l9LmdO.jpg";
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DSC_6792
}, Symbol.toStringTag, { value: "Module" }));
const DSC_6870 = "/assets/DSC_6870-C9qyfcfz.jpg";
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DSC_6870
}, Symbol.toStringTag, { value: "Module" }));
const DSC_6877 = "/assets/DSC_6877-0-EqhIo1.jpg";
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DSC_6877
}, Symbol.toStringTag, { value: "Module" }));
const DSC_6894 = "/assets/DSC_6894-CrtwUIvC.jpg";
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DSC_6894
}, Symbol.toStringTag, { value: "Module" }));
const DSC_6950 = "/assets/DSC_6950-DsATfQ-6.jpg";
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DSC_6950
}, Symbol.toStringTag, { value: "Module" }));
const DSC_6964 = "/assets/DSC_6964-BqLbha9f.jpg";
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DSC_6964
}, Symbol.toStringTag, { value: "Module" }));
const DSC_6977 = "/assets/DSC_6977-GEjXFw8w.jpg";
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DSC_6977
}, Symbol.toStringTag, { value: "Module" }));
const DSC_6983 = "/assets/DSC_6983-CGbh6jaJ.jpg";
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DSC_6983
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2447 = "/assets/D4S_2447-5DUMSYGs.JPG";
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2447
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2448 = "/assets/D4S_2448-COSp1l96.JPG";
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2448
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2450 = "/assets/D4S_2450-sWzg6G4j.JPG";
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2450
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2451 = "/assets/D4S_2451-ChFA_KM1.JPG";
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2451
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2452 = "/assets/D4S_2452-B-2hotGX.JPG";
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2452
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2455 = "/assets/D4S_2455-BNfFQdxZ.JPG";
const __vite_glob_1_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2455
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2457 = "/assets/D4S_2457-CdvHFqoA.JPG";
const __vite_glob_1_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2457
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2459 = "/assets/D4S_2459-_M4vqvYS.JPG";
const __vite_glob_1_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2459
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2461 = "/assets/D4S_2461-C2yOme_X.JPG";
const __vite_glob_1_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2461
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2462 = "/assets/D4S_2462-COF5BqHD.JPG";
const __vite_glob_1_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2462
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2465 = "/assets/D4S_2465-BnTkDibV.JPG";
const __vite_glob_1_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2465
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2470 = "/assets/D4S_2470-CI3L1g7B.JPG";
const __vite_glob_1_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2470
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2471 = "/assets/D4S_2471-C3uJTgxq.JPG";
const __vite_glob_1_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2471
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2477 = "/assets/D4S_2477-CfplFMpf.JPG";
const __vite_glob_1_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2477
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2480 = "/assets/D4S_2480-BjJySG45.JPG";
const __vite_glob_1_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2480
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2483 = "/assets/D4S_2483-CgcWxJgo.JPG";
const __vite_glob_1_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2483
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2489 = "/assets/D4S_2489-oZiWcKXS.JPG";
const __vite_glob_1_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2489
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2492 = "/assets/D4S_2492-CyUL6Qsq.JPG";
const __vite_glob_1_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2492
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2496 = "/assets/D4S_2496-DD9qO6jd.JPG";
const __vite_glob_1_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2496
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2507 = "/assets/D4S_2507-DmaC6iox.JPG";
const __vite_glob_1_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2507
}, Symbol.toStringTag, { value: "Module" }));
const D4S_2510 = "/assets/D4S_2510-Bq9h_pHL.JPG";
const __vite_glob_1_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D4S_2510
}, Symbol.toStringTag, { value: "Module" }));
const jpgModules = /* @__PURE__ */ Object.assign({
  "../assets/gallery/DSC_6577.jpg": __vite_glob_0_0,
  "../assets/gallery/DSC_6586.jpg": __vite_glob_0_1,
  "../assets/gallery/DSC_6604.jpg": __vite_glob_0_2,
  "../assets/gallery/DSC_6627.jpg": __vite_glob_0_3,
  "../assets/gallery/DSC_6789.jpg": __vite_glob_0_4,
  "../assets/gallery/DSC_6792.jpg": __vite_glob_0_5,
  "../assets/gallery/DSC_6804.jpg": __vite_glob_0_6,
  "../assets/gallery/DSC_6870.jpg": __vite_glob_0_7,
  "../assets/gallery/DSC_6877.jpg": __vite_glob_0_8,
  "../assets/gallery/DSC_6885.jpg": __vite_glob_0_9,
  "../assets/gallery/DSC_6894.jpg": __vite_glob_0_10,
  "../assets/gallery/DSC_6950.jpg": __vite_glob_0_11,
  "../assets/gallery/DSC_6964.jpg": __vite_glob_0_12,
  "../assets/gallery/DSC_6977.jpg": __vite_glob_0_13,
  "../assets/gallery/DSC_6983.jpg": __vite_glob_0_14,
  "../assets/gallery/DSC_6994.jpg": __vite_glob_0_15
});
const upperJpgModules = /* @__PURE__ */ Object.assign({
  "../assets/gallery/D4S_2447.JPG": __vite_glob_1_0,
  "../assets/gallery/D4S_2448.JPG": __vite_glob_1_1,
  "../assets/gallery/D4S_2450.JPG": __vite_glob_1_2,
  "../assets/gallery/D4S_2451.JPG": __vite_glob_1_3,
  "../assets/gallery/D4S_2452.JPG": __vite_glob_1_4,
  "../assets/gallery/D4S_2454.JPG": __vite_glob_1_5,
  "../assets/gallery/D4S_2455.JPG": __vite_glob_1_6,
  "../assets/gallery/D4S_2457.JPG": __vite_glob_1_7,
  "../assets/gallery/D4S_2459.JPG": __vite_glob_1_8,
  "../assets/gallery/D4S_2461.JPG": __vite_glob_1_9,
  "../assets/gallery/D4S_2462.JPG": __vite_glob_1_10,
  "../assets/gallery/D4S_2465.JPG": __vite_glob_1_11,
  "../assets/gallery/D4S_2470.JPG": __vite_glob_1_12,
  "../assets/gallery/D4S_2471.JPG": __vite_glob_1_13,
  "../assets/gallery/D4S_2473.JPG": __vite_glob_1_14,
  "../assets/gallery/D4S_2474.JPG": __vite_glob_1_15,
  "../assets/gallery/D4S_2477.JPG": __vite_glob_1_16,
  "../assets/gallery/D4S_2480.JPG": __vite_glob_1_17,
  "../assets/gallery/D4S_2483.JPG": __vite_glob_1_18,
  "../assets/gallery/D4S_2489.JPG": __vite_glob_1_19,
  "../assets/gallery/D4S_2492.JPG": __vite_glob_1_20,
  "../assets/gallery/D4S_2496.JPG": __vite_glob_1_21,
  "../assets/gallery/D4S_2505.JPG": __vite_glob_1_22,
  "../assets/gallery/D4S_2507.JPG": __vite_glob_1_23,
  "../assets/gallery/D4S_2510.JPG": __vite_glob_1_24
});
const jpegModules = /* @__PURE__ */ Object.assign({});
const modules = { ...jpgModules, ...upperJpgModules, ...jpegModules };
function fileNameFromPath(path) {
  const seg = path.split("/");
  return seg[seg.length - 1] ?? path;
}
function labelFromFileName(name) {
  return name.replace(/\.(jpe?g)$/i, "").replace(/_/g, " ");
}
const sortedPaths = Object.keys(modules).sort(
  (a, b) => fileNameFromPath(a).localeCompare(fileNameFromPath(b), void 0, { numeric: true })
);
const galleryItems = sortedPaths.map((path) => {
  const file = fileNameFromPath(path);
  const label = labelFromFileName(file);
  return {
    src: modules[path].default,
    alt: `Kart Magik — MAGIK Reparto Corse (${label})`,
    caption: `MAGIK · ${label}`
  };
});
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
