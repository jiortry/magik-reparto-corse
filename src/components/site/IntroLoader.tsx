import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-magik.png";

export function IntroLoader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = window.setTimeout(() => setShow(false), 1700);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[150] flex items-center justify-center bg-carbon overflow-hidden"
        >
          <div className="absolute inset-0 grid-overlay opacity-30" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
            className="absolute left-0 top-1/2 h-[3px] w-full origin-left racing-stripe"
          />
          <motion.img
            src={logo}
            alt="MAGIK Reparto Corse"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative h-28 sm:h-36 md:h-48 lg:h-56 w-auto max-w-[80vw] drop-shadow-[0_0_45px_rgba(225,6,0,0.55)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
