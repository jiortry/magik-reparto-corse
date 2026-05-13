import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageProvider";
import { getPageSeo } from "@/i18n/seo";

function setMetaByName(name: string, content: string) {
  const el = document.querySelector(`meta[name="${name}"]`);
  if (el) el.setAttribute("content", content);
}

function setMetaByProperty(property: string, content: string) {
  const el = document.querySelector(`meta[property="${property}"]`);
  if (el) el.setAttribute("content", content);
}

export function DocumentMetaSync() {
  const { lang } = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const seo = getPageSeo(lang, pathname);
    document.title = seo.title;
    setMetaByName("description", seo.description);
    setMetaByProperty("og:title", seo.ogTitle);
    setMetaByProperty("og:description", seo.ogDescription);
    setMetaByProperty("og:url", pathname && pathname !== "" ? pathname : "/");
  }, [lang, pathname]);

  return null;
}
