import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageProvider";
import { absoluteUrl, getPageSeo, keywordsFor, normalizePathname } from "@/i18n/seo";

function setMeta(selector: string, content: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  const el = document.querySelector(`link[rel="${rel}"]`);
  if (el) el.setAttribute("href", href);
}

/** Keeps title, description, keywords, canonical and html[lang] in sync client-side. */
export function DocumentMetaSync() {
  const { lang } = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const path = normalizePathname(pathname || "/");
    const seo = getPageSeo(lang, path);
    const url = absoluteUrl(path);

    document.title = seo.title;
    document.documentElement.lang = lang;

    setMeta('meta[name="description"]', seo.description);
    setMeta('meta[name="keywords"]', keywordsFor(seo, lang));
    setMeta('meta[property="og:title"]', seo.ogTitle);
    setMeta('meta[property="og:description"]', seo.ogDescription);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[property="og:locale"]', lang === "it" ? "it_IT" : "en_GB");
    setMeta('meta[name="twitter:title"]', seo.ogTitle);
    setMeta('meta[name="twitter:description"]', seo.ogDescription);
    setLink("canonical", url);
  }, [lang, pathname]);

  return null;
}
