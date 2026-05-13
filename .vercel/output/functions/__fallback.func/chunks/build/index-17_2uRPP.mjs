import { V as jsxRuntimeExports, r as reactExports } from "./server-DVrhaJxa.mjs";
import { u as useLang, m as motion, a as kartCorner, g as gokart, b as kartTrack } from "./router-DrWWhRp2.mjs";
import { R as RacingButton } from "./RacingButton-DAaJLOvT.mjs";
import { S as ServiceCard, u as useMotionValue, a as useSpring, b as useTransform } from "./ServiceCard-DfvjceQj.mjs";
import { S as SectionHeader } from "./SectionHeader-CNlqM60Q.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function Hero() {
  const { t } = useLang();
  const ref = reactExports.useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const tiltX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const tiltY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const parX = useTransform(sx, [-0.5, 0.5], [-30, 30]);
  const parY = useTransform(sy, [-0.5, 0.5], [-15, 15]);
  reactExports.useEffect(() => {
    const onMove = (e) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mx.set((e.clientX - rect.left) / rect.width - 0.5);
      my.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref,
      className: "relative min-h-[100svh] overflow-hidden flex items-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            style: { x: parX, y: parY, scale: 1.1 },
            className: "absolute inset-0 -z-10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: kartTrack,
                alt: "",
                className: "absolute inset-0 w-full h-full object-cover opacity-50"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-carbon/70 via-carbon/85 to-carbon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 grid-overlay opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 overflow-hidden pointer-events-none", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute h-px w-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-scan-x",
            style: {
              top: `${20 + i * 25}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + i * 0.4}s`
            }
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-[1400px] px-5 lg:px-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.p,
              {
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.2, duration: 0.6 },
                className: "inline-flex items-center gap-3 text-[11px] font-display font-bold uppercase tracking-[0.4em] text-accent",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-accent" }),
                  t.hero.eyebrow
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3, duration: 0.7 },
                className: "mt-4 font-display font-black uppercase italic leading-[0.9] tracking-tight text-[clamp(2.6rem,8vw,6.5rem)]",
                style: { fontStretch: "condensed" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-foreground", children: "MAGIK" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary drop-shadow-[0_0_30px_rgba(225,6,0,0.5)]", children: "REPARTO" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-stroke", children: "CORSE" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.5, duration: 0.6 },
                className: "mt-6 max-w-xl text-lg md:text-xl text-foreground/80 font-display font-medium",
                children: t.hero.subtitle
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.6, duration: 0.6 },
                className: "mt-3 max-w-xl text-sm md:text-base text-muted-foreground",
                children: t.hero.lead
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.75, duration: 0.6 },
                className: "mt-8 flex flex-wrap gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RacingButton, { to: "/team", variant: "primary", children: t.common.discoverTeam }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RacingButton, { to: "/contact", variant: "outline", children: t.common.contactUs }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RacingButton, { to: "/services", variant: "ghost", children: t.common.trackDay })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              style: { rotateX: tiltX, rotateY: tiltY, transformPerspective: 1e3 },
              initial: { opacity: 0, scale: 0.85 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: 0.4, duration: 0.8 },
              className: "relative hidden lg:block",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-10 bg-primary/20 blur-3xl rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: gokart,
                    alt: "Kart Magik",
                    className: "relative w-full max-w-[640px] mx-auto drop-shadow-[0_30px_60px_rgba(225,6,0,0.35)]"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-display uppercase tracking-[0.4em] text-foreground/50 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-foreground/40" }),
          t.hero.scroll,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-foreground/40" })
        ] })
      ]
    }
  );
}
function Index() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 md:py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 grid-overlay opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-8 grid gap-12 lg:grid-cols-2 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { initial: {
            opacity: 0,
            x: -40
          }, whileInView: {
            opacity: 1,
            x: 0
          }, viewport: {
            once: true,
            margin: "-100px"
          }, transition: {
            duration: 0.7
          }, src: kartCorner, alt: "Kart Magik in curva", className: "relative clip-diagonal w-full aspect-[4/5] object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-4 -right-4 border border-accent bg-carbon px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black uppercase text-2xl italic text-accent leading-none", children: "#130" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-display uppercase tracking-widest text-foreground/60 mt-1", children: "Race Number" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.home.missionEyebrow, title: t.home.missionTitle, lead: t.home.missionLead }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RacingButton, { to: "/about", children: t.common.discoverTeam }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative border-y border-border bg-carbon", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 racing-stripe opacity-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-[1400px] px-5 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-6", children: t.home.stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.5,
        delay: i * 0.08
      }, className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black text-5xl md:text-6xl italic text-primary", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] font-display uppercase tracking-[0.3em] text-muted-foreground", children: s.label })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.services.eyebrow, title: t.services.title, lead: t.services.lead }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: t.services.items.slice(0, 6).map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { index: i, ...it }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RacingButton, { to: "/services", variant: "outline", children: t.common.readMore }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 md:py-32 overflow-hidden bg-carbon", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 carbon-texture opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1400px] px-5 lg:px-8 grid gap-12 lg:grid-cols-2 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: t.kart.eyebrow, title: t.kart.title, lead: t.kart.lead }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RacingButton, { to: "/kart-magik", children: t.common.readMore }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { initial: {
          opacity: 0,
          scale: 0.9
        }, whileInView: {
          opacity: 1,
          scale: 1
        }, viewport: {
          once: true,
          margin: "-100px"
        }, transition: {
          duration: 0.7
        }, src: gokart, alt: "Kart Magik", className: "w-full max-w-2xl mx-auto drop-shadow-[0_30px_60px_rgba(225,6,0,0.3)]" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black uppercase italic text-3xl md:text-5xl tracking-tight", children: t.home.missionTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RacingButton, { to: "/contact", children: t.common.contactUs }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RacingButton, { to: "/services", variant: "outline", children: t.common.trackDay })
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
