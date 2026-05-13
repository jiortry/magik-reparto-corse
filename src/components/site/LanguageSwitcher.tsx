import { useLang } from "@/i18n/LanguageProvider";

export function LanguageSwitcher() {
  const { lang, changeLangAnimated } = useLang();
  return (
    <div className="relative inline-flex items-center rounded-full border border-border bg-card/60 p-0.5 text-[11px] font-display font-bold uppercase tracking-widest">
      <button
        onClick={() => changeLangAnimated("it")}
        className={`relative z-10 px-3 py-1 rounded-full transition-colors ${
          lang === "it" ? "text-primary-foreground" : "text-foreground/60 hover:text-foreground"
        }`}
        aria-pressed={lang === "it"}
      >
        IT
      </button>
      <button
        onClick={() => changeLangAnimated("en")}
        className={`relative z-10 px-3 py-1 rounded-full transition-colors ${
          lang === "en" ? "text-primary-foreground" : "text-foreground/60 hover:text-foreground"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span
        className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-primary transition-transform duration-300 ${
          lang === "en" ? "translate-x-[calc(100%+0px)]" : "translate-x-0"
        }`}
        style={{ left: "2px" }}
      />
    </div>
  );
}
