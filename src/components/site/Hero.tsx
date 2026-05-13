import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { RacingButton } from "./RacingButton";
import kartTrack from "@/assets/kart-track.jpg";
import gokart from "@/assets/gokart.png";

export function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });

  const tiltX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const tiltY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const parX = useTransform(sx, [-0.5, 0.5], [-30, 30]);
  const parY = useTransform(sy, [-0.5, 0.5], [-15, 15]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mx.set((e.clientX - rect.left) / rect.width - 0.5);
      my.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden flex items-center"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ x: parX, y: parY, scale: 1.1 }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={kartTrack}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-carbon/70 via-carbon/85 to-carbon" />
      <div className="absolute inset-0 -z-10 grid-overlay opacity-40" />

      {/* Animated speed lines */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute h-px w-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-scan-x"
            style={{
              top: `${20 + i * 25}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 lg:px-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[11px] font-display font-bold uppercase tracking-[0.4em] text-accent"
          >
            <span className="h-px w-10 bg-accent" />
            {t.hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-4 font-display font-black uppercase italic leading-[0.9] tracking-tight text-[clamp(2.6rem,8vw,6.5rem)]"
            style={{ fontStretch: "condensed" }}
          >
            <span className="block text-foreground">MAGIK</span>
            <span className="block text-primary drop-shadow-[0_0_30px_rgba(225,6,0,0.5)]">REPARTO</span>
            <span className="block text-stroke">CORSE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg md:text-xl text-foreground/80 font-display font-medium"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-3 max-w-xl text-sm md:text-base text-muted-foreground"
          >
            {t.hero.lead}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <RacingButton to="/team" variant="primary">{t.common.discoverTeam}</RacingButton>
            <RacingButton to="/contact" variant="outline">{t.common.contactUs}</RacingButton>
            <RacingButton to="/services" variant="ghost">{t.common.trackDay}</RacingButton>
          </motion.div>
        </div>

        <motion.div
          style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1000 }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full" />
          <img
            src={gokart}
            alt="Kart Magik"
            className="relative w-full max-w-[640px] mx-auto drop-shadow-[0_30px_60px_rgba(225,6,0,0.35)]"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-display uppercase tracking-[0.4em] text-foreground/50 flex items-center gap-2">
        <span className="h-px w-8 bg-foreground/40" />
        {t.hero.scroll}
        <span className="h-px w-8 bg-foreground/40" />
      </div>
    </section>
  );
}
