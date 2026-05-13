import { posts } from "@/content/blog";
import type { Lang } from "./dictionary";

export type PageSeo = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
};

const SITE = "MAGIK Reparto Corse";

export const blogPostFallbackSeo: Record<Lang, PageSeo> = {
  it: {
    title: `Post — ${SITE}`,
    description: "Articolo del blog MAGIK Reparto Corse: tecnica, gare e dietro le quinte.",
    ogTitle: `Post — ${SITE}`,
    ogDescription: "Articolo del blog MAGIK Reparto Corse.",
  },
  en: {
    title: `Post — ${SITE}`,
    description: "MAGIK Reparto Corse blog article: technique, racing and behind the scenes.",
    ogTitle: `Post — ${SITE}`,
    ogDescription: "MAGIK Reparto Corse blog article.",
  },
};

export const seoRoutes: Record<Lang, Record<string, PageSeo>> = {
  it: {
    "/": {
      title: `${SITE} — Team kart professionale Emilia-Romagna`,
      description:
        "Reparto corse ufficiale del Kart Magik. Assistenza in pista, riparazione go-kart, ricambi e rivenditore LKE in Emilia-Romagna.",
      ogTitle: `${SITE} — Performance, tecnica e ambizione mondiale`,
      ogDescription:
        "Tecnica, assistenza in pista, riparazione go-kart, ricambi e rivenditore LKE in Emilia-Romagna.",
    },
    "/about": {
      title: `Chi siamo — ${SITE}`,
      description:
        "MAGIK Reparto Corse: il reparto corse ufficiale del Kart Magik. Tecnica, metodo, ambizione mondiale.",
      ogTitle: `Chi siamo — ${SITE}`,
      ogDescription: "Nati per portare il Kart Magik al massimo livello competitivo.",
    },
    "/services": {
      title: `Servizi — Riparazione, assistenza in pista, ricambi kart | MAGIK`,
      description:
        "Riparazione go-kart, assistenza tecnica e in pista, vendita ricambi kart, giornata di pista e rivenditore LKE Emilia-Romagna.",
      ogTitle: `Servizi — ${SITE}`,
      ogDescription: "Dalla preparazione tecnica alla pista: ogni fase della performance.",
    },
    "/kart-magik": {
      title: `Kart Magik omologato — Telaio, motore, setup | ${SITE}`,
      description:
        "Il Kart Magik omologato: telaio racing, impianto frenante, radiatore, motore LKE e setup gara curato dal team.",
      ogTitle: "Kart Magik omologato",
      ogDescription: "Un telaio sviluppato per la velocità, la precisione e l'affidabilità in gara.",
    },
    "/lke": {
      title: `Motore LKE Emilia-Romagna — Rivenditore ufficiale | MAGIK`,
      description:
        "MAGIK è rivenditore ufficiale del motore LKE in Emilia-Romagna: supporto tecnico, ricambi e consulenza.",
      ogTitle: "LKE Emilia-Romagna — Rivenditore ufficiale",
      ogDescription: "Supporto tecnico, disponibilità ricambi e consulenza specializzata sul motore LKE.",
    },
    "/team": {
      title: `Racing Team — ${SITE}`,
      description:
        "Un team tecnico, veloce e determinato: dalla preparazione del kart all'assistenza in pista.",
      ogTitle: `Racing Team — ${SITE}`,
      ogDescription: "Metodo, turni e precisione dal box alla griglia.",
    },
    "/gallery": {
      title: `Gallery — ${SITE}`,
      description: "Immagini dal box, dalla pista e dai momenti che contano del MAGIK Reparto Corse.",
      ogTitle: `Gallery — ${SITE}`,
      ogDescription: "In pista, in box, dietro le quinte.",
    },
    "/blog": {
      title: `Blog — Tecnica, gare, motori | ${SITE}`,
      description: "News, tecnica, setup, motori LKE e dietro le quinte di MAGIK Reparto Corse.",
      ogTitle: `Blog — ${SITE}`,
      ogDescription: "Insights racing, setup e dietro le quinte.",
    },
    "/faq": {
      title: `FAQ — Domande frequenti | ${SITE}`,
      description:
        "Risposte sulle nostre attività: assistenza in pista, ricambi kart, motore LKE, riparazione go-kart e team racing.",
      ogTitle: `FAQ — ${SITE}`,
      ogDescription: "Le risposte più richieste.",
    },
    "/contact": {
      title: `Contatti — ${SITE} Emilia-Romagna`,
      description:
        "Contatta MAGIK Reparto Corse: assistenza tecnica kart, ricambi, motore LKE, giornate di pista e gare.",
      ogTitle: `Contatti — ${SITE}`,
      ogDescription: "Parla con il team.",
    },
  },
  en: {
    "/": {
      title: `${SITE} — Professional kart team, Emilia-Romagna`,
      description:
        "Official racing department for the Magik Kart. Trackside support, go-kart repair, parts and official LKE dealer in Emilia-Romagna, Italy.",
      ogTitle: `${SITE} — Performance, engineering and racing ambition`,
      ogDescription:
        "Engineering, trackside support, go-kart repair, parts and LKE dealer in Emilia-Romagna.",
    },
    "/about": {
      title: `About — ${SITE}`,
      description:
        "MAGIK Reparto Corse: the official racing department for the Magik Kart. Engineering, method and international racing focus.",
      ogTitle: `About — ${SITE}`,
      ogDescription: "Built to bring the Magik Kart to the highest competitive level.",
    },
    "/services": {
      title: `Services — Repairs, trackside support, kart parts | MAGIK`,
      description:
        "Go-kart repair, technical and trackside support, kart parts retail, track days and official LKE dealer in Emilia-Romagna.",
      ogTitle: `Services — ${SITE}`,
      ogDescription: "From technical prep to the track: every phase of performance.",
    },
    "/kart-magik": {
      title: `Homologated Magik Kart — Chassis, engine, setup | ${SITE}`,
      description:
        "The homologated Magik Kart: racing chassis, brakes, radiator, LKE engine and race setup curated by the team.",
      ogTitle: "Homologated Magik Kart",
      ogDescription: "A chassis developed for speed, precision and reliability on track.",
    },
    "/lke": {
      title: `LKE engine Emilia-Romagna — Official dealer | MAGIK`,
      description:
        "MAGIK is the official LKE engine dealer in Emilia-Romagna: technical support, parts and consulting.",
      ogTitle: "LKE Emilia-Romagna — Official dealer",
      ogDescription: "Technical support, parts availability and specialised LKE consulting.",
    },
    "/team": {
      title: `Racing Team — ${SITE}`,
      description:
        "A technical, fast and determined team: from kart preparation to trackside support.",
      ogTitle: `Racing Team — ${SITE}`,
      ogDescription: "Method, shifts and precision from the pit to the grid.",
    },
    "/gallery": {
      title: `Gallery — ${SITE}`,
      description: "Images from the pitlane, the track and the moments that matter.",
      ogTitle: `Gallery — ${SITE}`,
      ogDescription: "On track, in the pit, behind the scenes.",
    },
    "/blog": {
      title: `Blog — Technique, races, engines | ${SITE}`,
      description: "News, engineering, setup, LKE engines and behind the scenes at MAGIK Reparto Corse.",
      ogTitle: `Blog — ${SITE}`,
      ogDescription: "Racing insights, setup notes and behind the scenes.",
    },
    "/faq": {
      title: `FAQ — ${SITE}`,
      description:
        "Answers about our work: trackside support, kart parts, LKE engines, go-kart repair and the racing team.",
      ogTitle: `FAQ — ${SITE}`,
      ogDescription: "The answers people ask for most.",
    },
    "/contact": {
      title: `Contact — ${SITE}, Emilia-Romagna`,
      description:
        "Contact MAGIK Reparto Corse: kart technical support, parts, LKE engines, track days and racing.",
      ogTitle: `Contact — ${SITE}`,
      ogDescription: "Talk to the team.",
    },
  },
};

export function normalizePathname(path: string): string {
  if (!path || path === "/") return "/";
  const trimmed = path.replace(/\/+$/, "");
  return trimmed || "/";
}

export function getPageSeo(lang: Lang, pathname: string): PageSeo {
  const p = normalizePathname(pathname);
  if (p.startsWith("/blog/") && p.length > "/blog/".length) {
    const slug = decodeURIComponent(p.slice("/blog/".length));
    const post = posts.find((x) => x.slug === slug);
    if (post) {
      const suffix = ` — ${SITE}`;
      return {
        title: `${post.title[lang]}${suffix}`,
        description: post.excerpt[lang],
        ogTitle: post.title[lang],
        ogDescription: post.excerpt[lang],
      };
    }
    return blogPostFallbackSeo[lang];
  }
  const map = seoRoutes[lang];
  return map[p] ?? map["/"];
}

/** Default language for static `head()` (SSR / crawlers). */
export function getSsrPageSeo(path: string): PageSeo {
  return getPageSeo("it", path);
}

export function metaArrayFromPageSeo(
  seo: PageSeo,
  path: string,
  extras?: { ogImage?: string }
): (
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string }
)[] {
  const meta: (
    | { title: string }
    | { name: string; content: string }
    | { property: string; content: string }
  )[] = [
    { title: seo.title },
    { name: "description", content: seo.description },
    { property: "og:title", content: seo.ogTitle },
    { property: "og:description", content: seo.ogDescription },
    { property: "og:url", content: path },
  ];
  if (extras?.ogImage) {
    meta.push({ property: "og:image", content: extras.ogImage });
  }
  return meta;
}

export function buildRootJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MAGIK Reparto Corse",
    description:
      "IT: Reparto corse ufficiale del marchio Magik. Preparazione, assistenza in pista, ricambi kart e rivenditore LKE in Emilia-Romagna. • EN: Official Magik brand racing department: preparation, trackside support, kart parts and LKE dealer in Emilia-Romagna, Italy.",
    inLanguage: ["it", "en"],
    areaServed: "Emilia-Romagna",
    sameAs: ["https://www.instagram.com/magik_repartocorse/"],
  };
}
