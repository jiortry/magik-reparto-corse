import { LANG_LABELS, LANG_NAMES, LANGS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/LanguageProvider";

export function LanguageSwitcher() {
  const { lang, changeLangAnimated } = useLang();
  const index = Math.max(0, LANGS.indexOf(lang));
  return (
    <div className="relative inline-grid grid-cols-3 items-center rounded-full border border-border bg-card/60 p-0.5 text-[11px] font-display font-bold uppercase tracking-widest">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => changeLangAnimated(l)}
          className={`relative z-10 px-2.5 py-1 rounded-full transition-colors ${
            lang === l ? "text-primary-foreground" : "text-foreground/60 hover:text-foreground"
          }`}
          aria-pressed={lang === l}
          aria-label={LANG_NAMES[l]}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
      <span
        className="pointer-events-none absolute top-0.5 bottom-0.5 rounded-full bg-primary transition-transform duration-300"
        style={{
          left: "2px",
          width: "calc((100% - 4px) / 3)",
          transform: `translateX(${index * 100}%)`,
        }}
      />
    </div>
  );
}
