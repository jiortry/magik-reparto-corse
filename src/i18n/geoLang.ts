import type { Lang } from "./dictionary";
import { isLang } from "./dictionary";

/** ISO 3166-1 alpha-2 — Spanish is the dominant language. */
const SPANISH_COUNTRIES = new Set([
  "ES",
  "AD",
  "GQ",
  "EH",
  // Latin America (Spanish)
  "MX",
  "GT",
  "SV",
  "HN",
  "NI",
  "CR",
  "PA",
  "CU",
  "DO",
  "PR",
  "CO",
  "VE",
  "EC",
  "PE",
  "BO",
  "CL",
  "AR",
  "PY",
  "UY",
]);

const ITALIAN_COUNTRIES = new Set(["IT", "SM", "VA"]);

/** Cloudflare: XX unknown, T1 Tor. */
function normalizeCountry(code: string | null | undefined): string {
  const c = (code ?? "").trim().toUpperCase();
  if (!c || c === "XX" || c === "T1") return "";
  return c;
}

export function langFromCountry(country: string | null | undefined): Lang | null {
  const c = normalizeCountry(country);
  if (!c) return null;
  if (ITALIAN_COUNTRIES.has(c)) return "it";
  if (SPANISH_COUNTRIES.has(c)) return "es";
  return "en";
}

function langFromTag(tag: string): Lang | null {
  const primary = tag.trim().toLowerCase().split(/[-_]/)[0];
  return isLang(primary) ? primary : null;
}

/** First supported language in a BCP-47 / Accept-Language list. */
export function langFromLocales(tags: readonly string[]): Lang | null {
  for (const tag of tags) {
    const lang = langFromTag(tag);
    if (lang) return lang;
  }
  return null;
}

export function parseAcceptLanguage(header: string | null | undefined): string[] {
  if (!header) return [];
  return header
    .split(",")
    .map((part) => part.split(";")[0]?.trim() ?? "")
    .filter(Boolean);
}

export function langFromNavigator(): Lang | null {
  if (typeof navigator === "undefined") return null;
  const tags =
    navigator.languages?.length > 0
      ? navigator.languages
      : navigator.language
        ? [navigator.language]
        : [];
  return langFromLocales(tags);
}

/**
 * Country wins (Italy / Spanish LatAm+Spain / rest of world → English).
 * Browser language is the fallback when geo is unknown (local dev, VPN, Tor).
 */
export function resolveVisitorLang(opts: {
  country?: string | null;
  acceptLanguage?: string | null;
  navigatorLangs?: readonly string[];
}): Lang {
  const fromCountry = langFromCountry(opts.country);
  if (fromCountry) return fromCountry;

  const fromHeader = langFromLocales(parseAcceptLanguage(opts.acceptLanguage));
  if (fromHeader) return fromHeader;

  const fromNav = langFromLocales(opts.navigatorLangs ?? []);
  if (fromNav) return fromNav;

  return "it";
}

/** Same-origin on Cloudflare; 404 in local Vite. */
export async function fetchCountryFromCfTrace(): Promise<string> {
  try {
    const res = await fetch("/cdn-cgi/trace", { cache: "no-store" });
    if (!res.ok) return "";
    const text = await res.text();
    const loc = text.match(/(?:^|\n)loc=([A-Z]{2})(?:\n|$)/);
    return loc?.[1] ?? "";
  } catch {
    return "";
  }
}
