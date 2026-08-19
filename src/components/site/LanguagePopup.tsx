import { motion, AnimatePresence } from "framer-motion";
import { LANG_NAMES, LANGS, type Lang } from "@/i18n/dictionary";
import { useLang } from "@/i18n/LanguageProvider";
import logo from "@/assets/logo-magik.png";

export function LanguagePopup() {
  const { hasChosen, setLang, t } = useLang();
  return (
    <AnimatePresence>
      {!hasChosen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-carbon/95 backdrop-blur-xl px-5"
        >
          <motion.div
            initial={{ scale: 0.92, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative w-full max-w-md rounded-md border border-border bg-card carbon-texture overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px racing-stripe" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-accent/40" />
            <div className="relative p-8 text-center">
              <img src={logo} alt="MAGIK Reparto Corse" className="mx-auto h-12 w-auto mb-6" />
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-display font-bold">
                {t.common.langPickTitle}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-foreground/40 font-display">
                {t.common.langPickSub}
              </p>
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {LANGS.map((code: Lang) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    className="group relative overflow-hidden rounded-sm border border-border bg-secondary/50 px-4 py-4 font-display font-bold uppercase tracking-widest text-sm hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    {LANG_NAMES[code]}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
