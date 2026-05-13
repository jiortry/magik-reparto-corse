import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import gokart from "@/assets/gokart.png";

export function KartTransition() {
  const { isTransitioning } = useLang();
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[200] pointer-events-none flex items-center justify-center overflow-hidden"
        >
          {/* Speed lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.7, 0] }}
            transition={{ duration: 1.1, times: [0, 0.3, 0.6, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-radial from-carbon/40 via-carbon/90 to-carbon" />
            <div className="absolute inset-0">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{
                    width: "120vmax",
                    transform: `translate(-50%, -50%) rotate(${i * 20}deg)`,
                    opacity: 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Kart zooming forward */}
          <motion.img
            src={gokart}
            alt=""
            initial={{ scale: 0.15, opacity: 0, filter: "blur(8px)" }}
            animate={{
              scale: [0.15, 1.4, 6],
              opacity: [0, 1, 0],
              filter: ["blur(10px)", "blur(0px)", "blur(20px)"],
            }}
            transition={{ duration: 1, ease: [0.25, 0.6, 0.4, 1], times: [0, 0.55, 1] }}
            className="relative w-[60vmin] max-w-[820px] drop-shadow-[0_30px_60px_rgba(225,6,0,0.45)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
