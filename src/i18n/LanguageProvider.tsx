import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { LANG_SPLASH_COVER_MS, LANG_SPLASH_GONE_MS } from "@/components/site/SiteSplash";
import { dictionary, isLang, type Dict, type Lang } from "./dictionary";

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
  const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
  return isLang(saved) ? saved : "it";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("it");
  const [hasChosen, setHasChosen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (isLang(saved)) {
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
      window.setTimeout(() => setLang(l), LANG_SPLASH_COVER_MS);
      window.setTimeout(() => setIsTransitioning(false), LANG_SPLASH_GONE_MS);
    },
    [lang, setLang],
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
    [lang, hasChosen, isTransitioning, changeLangAnimated, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
