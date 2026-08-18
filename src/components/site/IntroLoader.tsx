import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-magik.png";

/** Diagonal slash: bottom-left → top-right (~-26.5°). */
const CLIP_TOP = "polygon(0% 0%, 100% 0%, 100% 25%, 0% 75%)";
const CLIP_BOT = "polygon(0% 75%, 100% 25%, 100% 100%, 0% 100%)";
const SLASH_DEG = -26.565;
const EASE_RACE: [number, number, number, number] = [0.77, 0, 0.175, 1];

type Phase = "idle" | "zoom" | "slash" | "split";

function SplashFace() {
  return (
    <div className="absolute inset-0 bg-carbon">
      <div className="absolute inset-0 carbon-texture opacity-50" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: EASE_RACE }}
        className="absolute left-0 top-1/2 h-[3px] w-full origin-left racing-stripe"
      />
      <motion.img
        src={logo}
        alt="MAGIK Reparto Corse"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="absolute left-1/2 top-1/2 h-28 sm:h-36 md:h-48 lg:h-56 w-auto max-w-[80vw] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_45px_rgba(225,6,0,0.55)]"
      />
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
      initial={{ x: 0, y: 0, rotate: 0 }}
      animate={split ? { x, y, rotate } : { x: 0, y: 0, rotate: 0 }}
      transition={{ duration: 0.82, ease: EASE_RACE }}
    >
      <SplashFace />
    </motion.div>
  );
}

export function IntroLoader() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const t = window.setTimeout(() => setVisible(false), 400);
      return () => window.clearTimeout(t);
    }

    const tZoom = window.setTimeout(() => setPhase("zoom"), 1150);
    const tSlash = window.setTimeout(() => setPhase("slash"), 1580);
    const tSplit = window.setTimeout(() => setPhase("split"), 1820);
    const tGone = window.setTimeout(() => setVisible(false), 2750);
    return () => {
      window.clearTimeout(tZoom);
      window.clearTimeout(tSlash);
      window.clearTimeout(tSplit);
      window.clearTimeout(tGone);
    };
  }, []);

  const zooming = phase === "zoom" || phase === "slash" || phase === "split";
  const slashing = phase === "slash" || phase === "split";
  const splitting = phase === "split";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[150] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.18 } }}
          aria-hidden
        >
          <motion.div
            className="absolute inset-0 will-change-transform"
            initial={{ scale: 1 }}
            animate={{ scale: splitting ? 1.62 : zooming ? 1.18 : 1 }}
            transition={{
              duration: splitting ? 0.85 : 0.55,
              ease: splitting ? EASE_RACE : [0.4, 0, 0.2, 1],
            }}
          >
            <SlashHalf
              clipPath={CLIP_TOP}
              split={splitting}
              x="-22%"
              y="-78%"
              rotate={-11}
            />
            <SlashHalf
              clipPath={CLIP_BOT}
              split={splitting}
              x="22%"
              y="78%"
              rotate={11}
            />
          </motion.div>

          <AnimatePresence>
            {slashing && (
              <motion.div
                key="slash"
                className="pointer-events-none absolute inset-0 z-10"
                initial={{ opacity: 1 }}
                animate={{ opacity: splitting ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: splitting ? 0.45 : 0.2, delay: splitting ? 0.12 : 0 }}
              >
                <div
                  className="absolute left-1/2 top-1/2 h-[4px] w-[150vmax]"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${SLASH_DEG}deg)`,
                  }}
                >
                  <motion.div
                    className="h-full w-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.26, ease: [0.2, 0.9, 0.2, 1] }}
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
                animate={{ opacity: [0, 0.42, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.32, times: [0, 0.35, 1] }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
