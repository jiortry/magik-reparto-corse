import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-magik.png";

/** Diagonal slash: bottom-left → top-right (~-26.5°). */
const CLIP_TOP = "polygon(0% 0%, 100% 0%, 100% 25%, 0% 75%)";
const CLIP_BOT = "polygon(0% 75%, 100% 25%, 100% 100%, 0% 100%)";
const SLASH_DEG = -26.565;
const EASE_RACE: [number, number, number, number] = [0.77, 0, 0.175, 1];

type Phase = "idle" | "slash" | "split";

function SplashFace({ playIntro = false }: { playIntro?: boolean }) {
  return (
    <div className="absolute inset-0 bg-carbon">
      <div className="absolute inset-0 carbon-texture opacity-50" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <motion.div
        initial={playIntro ? { scaleX: 0 } : false}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: EASE_RACE }}
        className="absolute left-0 top-1/2 h-[2px] sm:h-[3px] w-full origin-left racing-stripe"
      />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          paddingLeft: "max(1.25rem, env(safe-area-inset-left))",
          paddingRight: "max(1.25rem, env(safe-area-inset-right))",
          paddingTop: "max(1.5rem, env(safe-area-inset-top))",
          paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
        }}
      >
        <motion.img
          src={logo}
          alt="MAGIK Reparto Corse"
          initial={playIntro ? { opacity: 0, y: 16, scale: 0.96 } : false}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.65 }}
          className="relative h-auto w-[min(82vw,22rem)] sm:w-[min(70vw,28rem)] md:w-[min(56vw,32rem)] max-h-[min(38svh,16rem)] object-contain object-center drop-shadow-[0_0_45px_rgba(225,6,0,0.55)]"
        />
      </div>
    </div>
  );
}

function SlashHalf({
  clipPath,
  split,
  x,
  y,
  rotate,
}: {
  clipPath: string;
  split: boolean;
  x: string;
  y: string;
  rotate: number;
}) {
  return (
    <motion.div
      className="absolute inset-0 will-change-transform"
      style={{ clipPath, WebkitClipPath: clipPath }}
      initial={{ x: 0, y: 0, rotate: 0, scale: 1 }}
      animate={split ? { x, y, rotate, scale: 1.12 } : { x: 0, y: 0, rotate: 0, scale: 1 }}
      transition={{ duration: 0.78, ease: EASE_RACE }}
    >
      <SplashFace />
    </motion.div>
  );
}

export function IntroLoader() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [visible]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const t = window.setTimeout(() => setVisible(false), 500);
      return () => window.clearTimeout(t);
    }

    const tSlash = window.setTimeout(() => setPhase("slash"), 1850);
    const tSplit = window.setTimeout(() => setPhase("split"), 2140);
    const tGone = window.setTimeout(() => setVisible(false), 3050);
    return () => {
      window.clearTimeout(tSlash);
      window.clearTimeout(tSplit);
      window.clearTimeout(tGone);
    };
  }, []);

  const slashing = phase === "slash" || phase === "split";
  const splitting = phase === "split";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-0 left-0 z-[150] w-full max-w-[100vw] overflow-hidden overscroll-none touch-none select-none"
          style={{ height: "100dvh" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.18 } }}
          aria-hidden
        >
          {(slashing || splitting) && (
            <div className="absolute inset-0">
              <SlashHalf
                clipPath={CLIP_TOP}
                split={splitting}
                x="-75vw"
                y="-95vh"
                rotate={-8}
              />
              <SlashHalf
                clipPath={CLIP_BOT}
                split={splitting}
                x="75vw"
                y="95vh"
                rotate={8}
              />
            </div>
          )}

          {!splitting && (
            <div className="absolute inset-0">
              <SplashFace playIntro />
            </div>
          )}

          <AnimatePresence>
            {slashing && (
              <motion.div
                key="slash"
                className="pointer-events-none absolute inset-0 z-10"
                initial={{ opacity: 1 }}
                animate={{ opacity: splitting ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: splitting ? 0.4 : 0.2, delay: splitting ? 0.08 : 0 }}
              >
                <div
                  className="absolute left-1/2 top-1/2 h-[3px] sm:h-[4px] w-[160vmax]"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${SLASH_DEG}deg)`,
                  }}
                >
                  <motion.div
                    className="h-full w-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.24, ease: [0.2, 0.9, 0.2, 1] }}
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, #fff 18%, var(--color-primary) 50%, #fff 82%, transparent 100%)",
                      boxShadow:
                        "0 0 10px 2px rgba(255,255,255,0.85), 0 0 28px 6px rgba(225,6,0,0.75), 0 0 56px 12px rgba(225,6,0,0.35)",
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {phase === "slash" && (
              <motion.div
                key="flash"
                className="pointer-events-none absolute inset-0 bg-white mix-blend-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.38, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, times: [0, 0.35, 1] }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
