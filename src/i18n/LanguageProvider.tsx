import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dictionary, type Dict, type Lang } from "./dictionary";

type Ctx = {
  lang: Lang;
  t: Dict;
  setLang: (l: Lang) => void;
  hasChosen: boolean;
  isTransitioning: boolean;
  changeLangAnimated: (l: Lang) => void;
};

const LanguageContext = createContext<Ctx | null>(null);
export const LANG_STORAGE_KEY = "magik.lang";

/** For components outside LanguageProvider (e.g. root 404) — client only; SSR returns `it`. */
export function readStoredLang(): Lang {
  if (typeof window === "undefined") return "it";
  const saved = window.localStorage.getItem(LANG_STORAGE_KEY) as Lang | null;
  return saved === "en" ? "en" : "it";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("it");
  const [hasChosen, setHasChosen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY) as Lang | null;
    if (saved === "it" || saved === "en") {
      setLangState(saved);
      setHasChosen(true);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    setHasChosen(true);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANG_STORAGE_KEY, l);
      document.documentElement.lang = l;
    }
  }, []);

  const changeLangAnimated = useCallback(
    (l: Lang) => {
      if (l === lang) return;
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        setLang(l);
        return;
      }
      setIsTransitioning(true);
      // change language at the visual peak
      window.setTimeout(() => setLang(l), 450);
      window.setTimeout(() => setIsTransitioning(false), 1100);
    },
    [lang, setLang]
  );

  const value = useMemo<Ctx>(
    () => ({
      lang,
      t: dictionary[lang],
      setLang,
      hasChosen,
      isTransitioning,
      changeLangAnimated,
    }),
    [lang, hasChosen, isTransitioning, changeLangAnimated, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
