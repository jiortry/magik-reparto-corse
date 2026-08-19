import { posts, postPlainText, readingMinutes } from "@/content/blog";
import { faqItems } from "@/content/faq";
import { PEPPO_PHONE_DISPLAY } from "@/lib/whatsapp";
import { OG_LOCALES, type Lang } from "./dictionary";

export type PageSeo = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  /** Search terms this page targets. Rendered as <meta name="keywords"> and used for internal consistency. */
  keywords: string[];
};

const SITE = "MAGIK Reparto Corse";
export const SITE_URL = "https://www.magikrepartocorse.it";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-cover.jpg`;

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Terms appended to every page: the queries that must always reach us. */
const BASE_KEYWORDS: Record<Lang, string[]> = {
  it: [
    "MAGIK Reparto Corse",
    "kart Magik",
    "team kart Emilia-Romagna",
    "karting Italia",
    "go kart da corsa",
  ],
  en: [
    "MAGIK Reparto Corse",
    "Magik kart",
    "kart team Italy",
    "karting Emilia-Romagna",
    "racing go kart",
  ],
  es: [
    "MAGIK Reparto Corse",
    "kart Magik",
    "equipo kart Italia",
    "karting Emilia-Romaña",
    "go kart de competición",
  ],
};

export const blogPostFallbackSeo: Record<Lang, PageSeo> = {
  it: {
    title: `Blog karting — Guide tecniche e setup kart | ${SITE}`,
    description:
      "Guide su setup kart, motori LKE, costi del karting, categorie e assistenza in pista, firmate MAGIK Reparto Corse.",
    ogTitle: `Blog karting — ${SITE}`,
    ogDescription: "Guide tecniche, setup, motori e dietro le quinte del karting.",
    keywords: ["blog karting", "guide kart", "setup kart", "tecnica go kart"],
  },
  en: {
    title: `Karting blog — Technical guides and kart setup | ${SITE}`,
    description:
      "Guides on kart setup, LKE engines, karting costs, classes and trackside support, by MAGIK Reparto Corse.",
    ogTitle: `Karting blog — ${SITE}`,
    ogDescription: "Technical guides, setup, engines and behind the scenes of karting.",
    keywords: ["karting blog", "kart guides", "kart setup", "go kart technique"],
  },
  es: {
    title: `Blog de karting — Guías técnicas y setup de kart | ${SITE}`,
    description:
      "Guías sobre setup de kart, motores LKE, costes del karting, categorías y asistencia en pista, firmadas por MAGIK Reparto Corse.",
    ogTitle: `Blog de karting — ${SITE}`,
    ogDescription: "Guías técnicas, setup, motores y entre bastidores del karting.",
    keywords: ["blog karting", "guías kart", "setup kart", "técnica go kart"],
  },
};

export const seoRoutes: Record<Lang, Record<string, PageSeo>> = {
  it: {
    "/": {
      title: `Team Kart e Assistenza in Pista in Emilia-Romagna | ${SITE}`,
      description:
        "Reparto corse ufficiale Kart Magik: assistenza in pista, riparazione go-kart, ricambi kart e rivenditore ufficiale LKE in Emilia-Romagna. Scrivici per una consulenza.",
      ogTitle: `${SITE} — Performance, tecnica e ambizione mondiale`,
      ogDescription:
        "Assistenza in pista, riparazione go-kart, ricambi e motori LKE in Emilia-Romagna.",
      keywords: [
        "team kart Emilia-Romagna",
        "assistenza in pista kart",
        "riparazione go kart",
        "ricambi kart",
        "rivenditore LKE",
        "reparto corse karting",
        "scuola kart Emilia-Romagna",
      ],
    },
    "/about": {
      title: `Chi siamo — Reparto corse ufficiale Kart Magik | ${SITE}`,
      description:
        "MAGIK Reparto Corse è il reparto corse ufficiale del Kart Magik: officina, sviluppo telaio, assistenza gara e piloti seguiti in Emilia-Romagna.",
      ogTitle: `Chi siamo — ${SITE}`,
      ogDescription: "Nati per portare il Kart Magik al massimo livello competitivo.",
      keywords: [
        "chi siamo MAGIK Reparto Corse",
        "reparto corse kart",
        "officina kart Emilia-Romagna",
        "sviluppo telaio kart",
      ],
    },
    "/services": {
      title: `Riparazione go-kart, ricambi e assistenza in pista | ${SITE}`,
      description:
        "Servizi kart: riparazione go-kart, revisione telaio, vendita ricambi, motori LKE, giornate di pista e assistenza tecnica in gara in Emilia-Romagna.",
      ogTitle: `Servizi kart — ${SITE}`,
      ogDescription: "Dalla preparazione tecnica alla pista: ogni fase della performance.",
      keywords: [
        "riparazione go kart",
        "assistenza tecnica kart",
        "vendita ricambi kart",
        "revisione telaio kart",
        "giornata di pista kart",
        "preparazione kart da gara",
        "officina go kart",
      ],
    },
    "/kart-magik": {
      title: `Kart Magik — Shifter e Direct Drive | ${SITE}`,
      description:
        "Scegli il Kart Magik: Shifter a cambio sequenziale (MRK1 omologato CIK-FIA) o Direct Drive a trasmissione diretta per OK e junior.",
      ogTitle: "Kart Magik — Shifter o Direct Drive",
      ogDescription: "Due configurazioni, lo stesso DNA Magik: shifter e direct drive.",
      keywords: [
        "kart Magik",
        "kart shifter",
        "kart direct drive",
        "telaio kart omologato CIK-FIA",
        "kart da corsa nuovo",
      ],
    },
    "/kart-magik/shifter": {
      title: `Kart Magik Shifter MRK1 omologato CIK-FIA — Scheda tecnica | ${SITE}`,
      description:
        "Telaio kart Magik MRK1 shifter omologato CIK-FIA 007-CH-60: acciaio cromo molibdeno Ø 30 mm, passo 1045 mm, assale 50 mm, freni FREELINE e carene KG 509-507.",
      ogTitle: "Kart Magik Shifter MRK1 omologato CIK-FIA",
      ogDescription:
        "Scocca in acciaio cromo molibdeno, impianto FREELINE e carene KG 509-507 incluse nel pacchetto.",
      keywords: [
        "kart Magik MRK1",
        "kart shifter",
        "telaio kart omologato CIK-FIA",
        "scheda tecnica kart",
        "comprare telaio kart",
        "carene KG 509 507",
      ],
    },
    "/kart-magik/direct-drive": {
      title: `Kart Magik Direct Drive — Trasmissione diretta | ${SITE}`,
      description:
        "Kart Magik Direct Drive: trasmissione diretta, frizione centrifuga, categorie OK e junior. Preparato e assistito da MAGIK Reparto Corse.",
      ogTitle: "Kart Magik Direct Drive",
      ogDescription: "Trasmissione diretta, risposta immediata, DNA Magik da gara.",
      keywords: [
        "kart Magik direct drive",
        "kart OK",
        "kart trasmissione diretta",
        "kart senza cambio",
        "comprare kart da corsa",
      ],
    },
    "/lke": {
      title: `Motore LKE — Rivenditore ufficiale Emilia-Romagna | ${SITE}`,
      description:
        "Rivenditore ufficiale motori LKE in Emilia-Romagna: vendita, ricambi originali, revisioni, carburazione e assistenza tecnica in pista.",
      ogTitle: "LKE Emilia-Romagna — Rivenditore ufficiale",
      ogDescription:
        "Supporto tecnico, disponibilità ricambi e consulenza specializzata sul motore LKE.",
      keywords: [
        "motore LKE",
        "rivenditore LKE Emilia-Romagna",
        "ricambi LKE",
        "revisione motore kart",
        "motore kart 60cc",
        "assistenza motori kart",
      ],
    },
    "/team": {
      title: `Racing Team kart — Piloti, meccanici e ingegneri | ${SITE}`,
      description:
        "Il racing team MAGIK: meccanici, ingegneri di pista e piloti seguiti gara dopo gara, dalla preparazione del kart all'assistenza in griglia.",
      ogTitle: `Racing Team — ${SITE}`,
      ogDescription: "Metodo, turni e precisione dal box alla griglia.",
      keywords: [
        "racing team kart",
        "team karting italiano",
        "meccanico kart",
        "ingegnere di pista karting",
      ],
    },
    "/gallery": {
      title: `Gallery — Foto kart, box e pista | ${SITE}`,
      description:
        "Foto dal box, dalla pista e dai weekend di gara di MAGIK Reparto Corse: kart, piloti e dietro le quinte.",
      ogTitle: `Gallery — ${SITE}`,
      ogDescription: "In pista, in box, dietro le quinte.",
      keywords: ["foto kart da corsa", "gallery karting", "immagini pista kart"],
    },
    "/giuseppe-morcia": {
      title: `Giuseppe "Peppo" Morcia — Fondatore e coach di campioni | ${SITE}`,
      description:
        "La storia di Giuseppe Morcia, co-fondatore di MAGIK: dai titoli in Perù al coaching di campioni mondiali di karting dal 1994 a oggi.",
      ogTitle: `Giuseppe "Peppo" Morcia — Il Fondatore`,
      ogDescription: "Capo meccanico e coach di campioni, dal Perù al karting mondiale.",
      keywords: [
        "Giuseppe Morcia",
        "Peppo Morcia kart",
        "coach karting",
        "capo meccanico kart",
        "storia karting italiano",
      ],
    },
    "/partnership": {
      title: `Partnership e sponsor — Diventa partner | ${SITE}`,
      description:
        "Partner tecnici e sponsor di MAGIK Reparto Corse: motori LKE, telemetria AIM, Olivia Racing, AMV Kart, Greyhound Seats, S. Engineering. Scopri come diventare partner.",
      ogTitle: `Partnership & Sponsor — ${SITE}`,
      ogDescription: "I marchi e le realtà che corrono insieme a noi.",
      keywords: [
        "sponsor karting",
        "partnership team kart",
        "sponsorizzare team karting",
        "partner tecnici kart",
      ],
    },
    "/blog": {
      title: `Blog karting — Setup, motori, costi e categorie kart | ${SITE}`,
      description:
        "Guide pratiche di karting: setup kart, convergenza e campanatura, motori LKE, quanto costa correre in kart, categorie e assistenza in pista.",
      ogTitle: `Blog karting — ${SITE}`,
      ogDescription: "Guide tecniche, setup, motori e dietro le quinte.",
      keywords: [
        "blog karting",
        "guida setup kart",
        "quanto costa correre in kart",
        "categorie kart",
        "manutenzione go kart",
        "consigli piloti kart",
      ],
    },
    "/faq": {
      title: `FAQ karting — Assistenza, ricambi, LKE e gare | ${SITE}`,
      description:
        "Risposte alle domande più frequenti su assistenza in pista, ricambi kart, motori LKE, riparazione go-kart e come iniziare a correre.",
      ogTitle: `FAQ — ${SITE}`,
      ogDescription: "Le risposte più richieste sul karting e sui nostri servizi.",
      keywords: [
        "domande frequenti karting",
        "come iniziare a correre in kart",
        "assistenza kart domande",
        "ricambi kart FAQ",
      ],
    },
    "/contact": {
      title: `Contatti — Assistenza kart e preventivi | ${SITE} Emilia-Romagna`,
      description:
        "Contatta MAGIK Reparto Corse per assistenza tecnica kart, ricambi, motori LKE, giornate di pista e gare. Risposta rapida via email o WhatsApp.",
      ogTitle: `Contatti — ${SITE}`,
      ogDescription: "Parla con il team: assistenza, ricambi, motori e gare.",
      keywords: [
        "contatti team kart",
        "preventivo assistenza kart",
        "officina kart contatti",
        "karting Emilia-Romagna contatti",
      ],
    },
  },
  en: {
    "/": {
      title: `Kart Team and Trackside Support in Emilia-Romagna | ${SITE}`,
      description:
        "Official Magik Kart racing department: trackside support, go-kart repair, kart parts and official LKE dealer in Emilia-Romagna, Italy.",
      ogTitle: `${SITE} — Performance, engineering and racing ambition`,
      ogDescription: "Trackside support, go-kart repair, parts and LKE engines in Italy.",
      keywords: [
        "kart team Italy",
        "trackside kart support",
        "go kart repair",
        "kart spare parts",
        "LKE dealer",
        "karting Emilia-Romagna",
      ],
    },
    "/about": {
      title: `About — Official Magik Kart racing department | ${SITE}`,
      description:
        "MAGIK Reparto Corse is the official racing department of the Magik Kart: workshop, chassis development, race support and drivers in Emilia-Romagna, Italy.",
      ogTitle: `About — ${SITE}`,
      ogDescription: "Built to bring the Magik Kart to the highest competitive level.",
      keywords: ["about MAGIK Reparto Corse", "kart racing department", "kart workshop Italy"],
    },
    "/services": {
      title: `Go-kart repair, parts and trackside support | ${SITE}`,
      description:
        "Kart services: go-kart repair, chassis inspection, spare parts, LKE engines, track days and race-weekend technical support in Italy.",
      ogTitle: `Services — ${SITE}`,
      ogDescription: "From technical prep to the track: every phase of performance.",
      keywords: [
        "go kart repair",
        "kart technical support",
        "kart parts shop",
        "kart track day",
        "race kart preparation",
      ],
    },
    "/kart-magik": {
      title: `Magik Kart — Shifter and Direct Drive | ${SITE}`,
      description:
        "Choose your Magik Kart: sequential-gearbox Shifter (CIK-FIA homologated MRK1) or Direct Drive for OK and junior classes.",
      ogTitle: "Magik Kart — Shifter or Direct Drive",
      ogDescription: "Two configurations, the same Magik DNA: shifter and direct drive.",
      keywords: [
        "Magik kart",
        "shifter kart",
        "direct drive kart",
        "CIK-FIA homologated chassis",
        "buy race kart chassis",
      ],
    },
    "/kart-magik/shifter": {
      title: `Magik Kart Shifter MRK1 CIK-FIA homologated — Full specs | ${SITE}`,
      description:
        "Magik MRK1 shifter chassis, CIK-FIA 007-CH-60: chrome-moly Ø 30 mm tubing, 1045 mm wheelbase, 50 mm axle, FREELINE brakes and KG 509-507 bodywork.",
      ogTitle: "Homologated Magik Kart Shifter MRK1",
      ogDescription:
        "Chrome-molybdenum steel frame, FREELINE brakes and KG 509-507 bodywork included.",
      keywords: [
        "Magik MRK1 kart",
        "shifter kart",
        "CIK-FIA homologated chassis",
        "kart chassis specs",
        "buy race kart chassis",
      ],
    },
    "/kart-magik/direct-drive": {
      title: `Magik Kart Direct Drive — Straight drivetrain | ${SITE}`,
      description:
        "Magik Kart Direct Drive: straight drivetrain, centrifugal clutch, OK and junior classes. Prepared and supported by MAGIK Reparto Corse.",
      ogTitle: "Magik Kart Direct Drive",
      ogDescription: "Direct drivetrain, instant response, Magik race DNA.",
      keywords: [
        "Magik kart direct drive",
        "OK kart",
        "direct drive kart",
        "kart without gearbox",
        "buy race kart",
      ],
    },
    "/lke": {
      title: `LKE engines — Official dealer in Emilia-Romagna | ${SITE}`,
      description:
        "Official LKE engine dealer in Emilia-Romagna: sales, genuine parts, rebuilds, jetting advice and trackside technical support.",
      ogTitle: "LKE Emilia-Romagna — Official dealer",
      ogDescription: "Technical support, parts availability and specialised LKE consulting.",
      keywords: [
        "LKE engine",
        "LKE dealer Italy",
        "LKE spare parts",
        "kart engine rebuild",
        "60cc kart engine",
      ],
    },
    "/team": {
      title: `Racing Team — Drivers, mechanics and engineers | ${SITE}`,
      description:
        "The MAGIK racing team: mechanics, track engineers and drivers supported race after race, from kart preparation to the grid.",
      ogTitle: `Racing Team — ${SITE}`,
      ogDescription: "Method, shifts and precision from the pit to the grid.",
      keywords: ["kart racing team", "kart mechanic", "karting track engineer"],
    },
    "/gallery": {
      title: `Gallery — Kart, pit and track photos | ${SITE}`,
      description:
        "Photos from the pit, the track and race weekends with MAGIK Reparto Corse: karts, drivers and behind the scenes.",
      ogTitle: `Gallery — ${SITE}`,
      ogDescription: "On track, in the pit, behind the scenes.",
      keywords: ["race kart photos", "karting gallery", "kart track images"],
    },
    "/giuseppe-morcia": {
      title: `Giuseppe "Peppo" Morcia — Founder and coach of champions | ${SITE}`,
      description:
        "The story of Giuseppe Morcia, co-founder of MAGIK: from titles in Peru to coaching world karting champions since 1994.",
      ogTitle: `Giuseppe "Peppo" Morcia — The Founder`,
      ogDescription: "Lead mechanic and coach of champions, from Peru to world karting.",
      keywords: ["Giuseppe Morcia", "Peppo Morcia karting", "karting coach", "kart chief mechanic"],
    },
    "/partnership": {
      title: `Partnerships and sponsors — Become a partner | ${SITE}`,
      description:
        "MAGIK Reparto Corse technical partners and sponsors: LKE engines, AIM telemetry, Olivia Racing, AMV Kart, Greyhound Seats, S. Engineering.",
      ogTitle: `Partnership & Sponsors — ${SITE}`,
      ogDescription: "The brands and businesses racing alongside us.",
      keywords: ["karting sponsorship", "kart team partners", "sponsor a kart team"],
    },
    "/blog": {
      title: `Karting blog — Setup, engines, costs and classes | ${SITE}`,
      description:
        "Practical karting guides: kart setup, toe and camber, LKE engines, how much kart racing costs, classes explained and trackside support.",
      ogTitle: `Karting blog — ${SITE}`,
      ogDescription: "Technical guides, setup notes, engines and behind the scenes.",
      keywords: [
        "karting blog",
        "kart setup guide",
        "kart racing cost",
        "karting classes",
        "go kart maintenance",
      ],
    },
    "/faq": {
      title: `Karting FAQ — Support, parts, LKE and racing | ${SITE}`,
      description:
        "Answers to the most common questions about trackside support, kart parts, LKE engines, go-kart repair and how to start racing.",
      ogTitle: `FAQ — ${SITE}`,
      ogDescription: "The answers people ask for most.",
      keywords: ["karting FAQ", "how to start kart racing", "kart support questions"],
    },
    "/contact": {
      title: `Contact — Kart support and quotes | ${SITE}, Italy`,
      description:
        "Contact MAGIK Reparto Corse for kart technical support, parts, LKE engines, track days and racing. Fast reply by email or WhatsApp.",
      ogTitle: `Contact — ${SITE}`,
      ogDescription: "Talk to the team: support, parts, engines and racing.",
      keywords: ["contact kart team", "kart support quote", "karting Italy contact"],
    },
  },
  es: {
    "/": {
      title: `Equipo de kart y asistencia en pista en Emilia-Romaña | ${SITE}`,
      description:
        "Departamento de competición oficial Kart Magik: asistencia en pista, reparación de go-kart, recambios kart y distribuidor oficial LKE en Emilia-Romaña. Escríbenos para una consulta.",
      ogTitle: `${SITE} — Rendimiento, técnica y ambición mundial`,
      ogDescription:
        "Asistencia en pista, reparación de go-kart, recambios y motores LKE en Emilia-Romaña.",
      keywords: [
        "equipo kart Emilia-Romaña",
        "asistencia en pista kart",
        "reparación go kart",
        "recambios kart",
        "distribuidor LKE",
        "departamento de competición karting",
        "escuela kart Emilia-Romaña",
      ],
    },
    "/about": {
      title: `Quiénes somos — Departamento de competición oficial Kart Magik | ${SITE}`,
      description:
        "MAGIK Reparto Corse es el departamento de competición oficial del Kart Magik: taller, desarrollo de chasis, asistencia de carrera y pilotos en Emilia-Romaña.",
      ogTitle: `Quiénes somos — ${SITE}`,
      ogDescription: "Nacidos para llevar el Kart Magik al máximo nivel competitivo.",
      keywords: [
        "quiénes somos MAGIK Reparto Corse",
        "departamento de competición kart",
        "taller kart Emilia-Romaña",
        "desarrollo chasis kart",
      ],
    },
    "/services": {
      title: `Reparación de go-kart, recambios y asistencia en pista | ${SITE}`,
      description:
        "Servicios kart: reparación de go-kart, revisión de chasis, venta de recambios, motores LKE, días de pista y asistencia técnica en carrera en Emilia-Romaña.",
      ogTitle: `Servicios kart — ${SITE}`,
      ogDescription: "De la preparación técnica a la pista: cada fase del rendimiento.",
      keywords: [
        "reparación go kart",
        "asistencia técnica kart",
        "venta recambios kart",
        "revisión chasis kart",
        "día de pista kart",
        "preparación kart de carrera",
        "taller go kart",
      ],
    },
    "/kart-magik": {
      title: `Kart Magik — Shifter y Direct Drive | ${SITE}`,
      description:
        "Elige el Kart Magik: Shifter de cambio secuencial (MRK1 homologado CIK-FIA) o Direct Drive de transmisión directa para OK y junior.",
      ogTitle: "Kart Magik — Shifter o Direct Drive",
      ogDescription: "Dos configuraciones, el mismo ADN Magik: shifter y direct drive.",
      keywords: [
        "kart Magik",
        "kart shifter",
        "kart direct drive",
        "chasis kart homologado CIK-FIA",
        "kart de competición nuevo",
      ],
    },
    "/kart-magik/shifter": {
      title: `Kart Magik Shifter MRK1 homologado CIK-FIA — Ficha técnica | ${SITE}`,
      description:
        "Chasis kart Magik MRK1 shifter homologado CIK-FIA 007-CH-60: acero cromo-molibdeno Ø 30 mm, batalla 1045 mm, eje 50 mm, frenos FREELINE y carenados KG 509-507.",
      ogTitle: "Kart Magik Shifter MRK1 homologado CIK-FIA",
      ogDescription:
        "Bastidor de acero cromo-molibdeno, sistema FREELINE y carenados KG 509-507 incluidos en el paquete.",
      keywords: [
        "kart Magik MRK1",
        "kart shifter",
        "chasis kart homologado CIK-FIA",
        "ficha técnica kart",
        "comprar chasis kart",
        "carenados KG 509 507",
      ],
    },
    "/kart-magik/direct-drive": {
      title: `Kart Magik Direct Drive — Transmisión directa | ${SITE}`,
      description:
        "Kart Magik Direct Drive: transmisión directa, embrague centrífugo, categorías OK y junior. Preparado y asistido por MAGIK Reparto Corse.",
      ogTitle: "Kart Magik Direct Drive",
      ogDescription: "Transmisión directa, respuesta inmediata, ADN Magik de carrera.",
      keywords: [
        "kart Magik direct drive",
        "kart OK",
        "kart transmisión directa",
        "kart sin cambio",
        "comprar kart de competición",
      ],
    },
    "/lke": {
      title: `Motor LKE — Distribuidor oficial Emilia-Romaña | ${SITE}`,
      description:
        "Distribuidor oficial de motores LKE en Emilia-Romaña: venta, recambios originales, revisiones, carburación y asistencia técnica en pista.",
      ogTitle: "LKE Emilia-Romaña — Distribuidor oficial",
      ogDescription:
        "Soporte técnico, disponibilidad de recambios y asesoramiento especializado sobre el motor LKE.",
      keywords: [
        "motor LKE",
        "distribuidor LKE Emilia-Romaña",
        "recambios LKE",
        "revisión motor kart",
        "motor kart 60cc",
        "asistencia motores kart",
      ],
    },
    "/team": {
      title: `Racing Team kart — Pilotos, mecánicos e ingenieros | ${SITE}`,
      description:
        "El racing team MAGIK: mecánicos, ingenieros de pista y pilotos seguidos carrera a carrera, de la preparación del kart a la asistencia en parrilla.",
      ogTitle: `Racing Team — ${SITE}`,
      ogDescription: "Método, turnos y precisión del box a la parrilla.",
      keywords: [
        "racing team kart",
        "equipo karting italiano",
        "mecánico kart",
        "ingeniero de pista karting",
      ],
    },
    "/gallery": {
      title: `Galería — Fotos de kart, box y pista | ${SITE}`,
      description:
        "Fotos del box, de la pista y de los fines de semana de carrera de MAGIK Reparto Corse: karts, pilotos y entre bastidores.",
      ogTitle: `Galería — ${SITE}`,
      ogDescription: "En pista, en el box, entre bastidores.",
      keywords: ["fotos kart de competición", "galería karting", "imágenes pista kart"],
    },
    "/giuseppe-morcia": {
      title: `Giuseppe "Peppo" Morcia — Fundador y coach de campeones | ${SITE}`,
      description:
        "La historia de Giuseppe Morcia, cofundador de MAGIK: de los títulos en Perú al coaching de campeones mundiales de karting desde 1994 hasta hoy.",
      ogTitle: `Giuseppe "Peppo" Morcia — El fundador`,
      ogDescription: "Jefe de mecánicos y coach de campeones, de Perú al karting mundial.",
      keywords: [
        "Giuseppe Morcia",
        "Peppo Morcia kart",
        "coach karting",
        "jefe de mecánicos kart",
        "historia karting italiano",
      ],
    },
    "/partnership": {
      title: `Partnership y sponsors — Hazte partner | ${SITE}`,
      description:
        "Partners técnicos y sponsors de MAGIK Reparto Corse: motores LKE, telemetría AIM, Olivia Racing, AMV Kart, Greyhound Seats, S. Engineering. Descubre cómo convertirte en partner.",
      ogTitle: `Partnership y sponsors — ${SITE}`,
      ogDescription: "Las marcas y las realidades que corren junto a nosotros.",
      keywords: [
        "sponsor karting",
        "partnership equipo kart",
        "patrocinar equipo karting",
        "partners técnicos kart",
      ],
    },
    "/blog": {
      title: `Blog de karting — Setup, motores, costes y categorías | ${SITE}`,
      description:
        "Guías prácticas de karting: setup de kart, convergencia y caída, motores LKE, cuánto cuesta correr en kart, categorías y asistencia en pista.",
      ogTitle: `Blog de karting — ${SITE}`,
      ogDescription: "Guías técnicas, setup, motores y entre bastidores.",
      keywords: [
        "blog karting",
        "guía setup kart",
        "cuánto cuesta correr en kart",
        "categorías kart",
        "mantenimiento go kart",
        "consejos pilotos kart",
      ],
    },
    "/faq": {
      title: `FAQ karting — Asistencia, recambios, LKE y carreras | ${SITE}`,
      description:
        "Respuestas a las preguntas más frecuentes sobre asistencia en pista, recambios kart, motores LKE, reparación de go-kart y cómo empezar a correr.",
      ogTitle: `FAQ — ${SITE}`,
      ogDescription: "Las respuestas más pedidas sobre karting y nuestros servicios.",
      keywords: [
        "preguntas frecuentes karting",
        "cómo empezar a correr en kart",
        "asistencia kart preguntas",
        "recambios kart FAQ",
      ],
    },
    "/contact": {
      title: `Contacto — Asistencia kart y presupuestos | ${SITE} Emilia-Romaña`,
      description:
        "Contacta MAGIK Reparto Corse para asistencia técnica kart, recambios, motores LKE, días de pista y carreras. Respuesta rápida por email o WhatsApp.",
      ogTitle: `Contacto — ${SITE}`,
      ogDescription: "Habla con el equipo: asistencia, recambios, motores y carreras.",
      keywords: [
        "contacto equipo kart",
        "presupuesto asistencia kart",
        "taller kart contacto",
        "karting Emilia-Romaña contacto",
      ],
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
      return {
        title: `${post.title[lang]} | ${SITE}`,
        description: post.excerpt[lang],
        ogTitle: post.title[lang],
        ogDescription: post.excerpt[lang],
        keywords: [...post.keywords[lang], ...post.tags[lang]],
      };
    }
    return blogPostFallbackSeo[lang];
  }
  const map = seoRoutes[lang];
  return map[p] ?? map["/"];
}

/** Full keyword list actually emitted for a page. */
export function keywordsFor(seo: PageSeo, lang: Lang): string {
  return Array.from(new Set([...seo.keywords, ...BASE_KEYWORDS[lang]])).join(", ");
}

/** Default language for static `head()` (SSR / crawlers). */
export function getSsrPageSeo(path: string): PageSeo {
  return getPageSeo("it", path);
}

type MetaTag =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string };
type LinkTag = { rel: string; href: string; hrefLang?: string };

export function metaArrayFromPageSeo(
  seo: PageSeo,
  path: string,
  extras?: { ogImage?: string; type?: "website" | "article"; lang?: Lang },
): MetaTag[] {
  const lang: Lang = extras?.lang ?? "it";
  const url = absoluteUrl(normalizePathname(path));
  const meta: MetaTag[] = [
    { title: seo.title },
    { name: "description", content: seo.description },
    { name: "keywords", content: keywordsFor(seo, lang) },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    { name: "author", content: SITE },
    { property: "og:title", content: seo.ogTitle },
    { property: "og:description", content: seo.ogDescription },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE },
    { property: "og:type", content: extras?.type ?? "website" },
    { property: "og:locale", content: OG_LOCALES[lang] },
    ...(["it", "en", "es"] as Lang[])
      .filter((l) => l !== lang)
      .map((l) => ({ property: "og:locale:alternate" as const, content: OG_LOCALES[l] })),
    { property: "og:image", content: absoluteUrl(extras?.ogImage ?? DEFAULT_OG_IMAGE) },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.ogTitle },
    { name: "twitter:description", content: seo.ogDescription },
    { name: "twitter:image", content: absoluteUrl(extras?.ogImage ?? DEFAULT_OG_IMAGE) },
  ];
  return meta;
}

/** Canonical + hreflang set. The site serves all languages on the same URL. */
export function linksForPath(path: string): LinkTag[] {
  const url = absoluteUrl(normalizePathname(path));
  return [
    { rel: "canonical", href: url },
    { rel: "alternate", hrefLang: "it", href: url },
    { rel: "alternate", hrefLang: "en", href: url },
    { rel: "alternate", hrefLang: "es", href: url },
    { rel: "alternate", hrefLang: "x-default", href: url },
  ];
}

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function buildRootJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "AutoRepair"],
        "@id": ORGANIZATION_ID,
        name: SITE,
        url: SITE_URL,
        description:
          "Reparto corse ufficiale del marchio Magik: preparazione kart, assistenza in pista, riparazione go-kart, ricambi e rivenditore ufficiale LKE in Emilia-Romagna.",
        email: "posmaster@magikrepartocorse.it",
        telephone: PEPPO_PHONE_DISPLAY,
        inLanguage: ["it", "en", "es"],
        areaServed: [
          { "@type": "AdministrativeArea", name: "Emilia-Romagna" },
          { "@type": "Country", name: "Italia" },
        ],
        address: {
          "@type": "PostalAddress",
          addressRegion: "Emilia-Romagna",
          addressCountry: "IT",
        },
        knowsAbout: [
          "karting",
          "setup kart",
          "riparazione go-kart",
          "ricambi kart",
          "motori LKE",
          "telai omologati CIK-FIA",
        ],
        sameAs: ["https://www.instagram.com/magik_repartocorse/"],
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Assistenza in pista kart" },
          },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Riparazione go-kart" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vendita ricambi kart" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Motori LKE e revisioni" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Giornate di pista" } },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE,
        inLanguage: ["it", "en", "es"],
        publisher: { "@id": ORGANIZATION_ID },
      },
    ],
  };
}

export function buildBreadcrumbJsonLd(
  trail: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqJsonLd(items: { q: string; a: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

/** FAQPage payload for the /faq route, in the SSR default language. */
export function buildSiteFaqJsonLd(lang: Lang = "it"): Record<string, unknown> {
  return buildFaqJsonLd(faqItems[lang].map((f) => ({ q: f.q, a: f.a })));
}

export function buildBlogListingJsonLd(lang: Lang = "it"): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: `Blog — ${SITE}`,
    url: absoluteUrl("/blog"),
    inLanguage: lang,
    publisher: { "@id": ORGANIZATION_ID },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title[lang],
      description: p.excerpt[lang],
      datePublished: p.date,
      dateModified: p.updated ?? p.date,
      url: absoluteUrl(`/blog/${p.slug}`),
      keywords: p.keywords[lang].join(", "),
    })),
  };
}

export function buildArticleJsonLd(
  slug: string,
  lang: Lang = "it",
): Record<string, unknown> | null {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline: post.title[lang],
    description: post.excerpt[lang],
    articleSection: post.category[lang],
    keywords: [...post.keywords[lang], ...post.tags[lang]].join(", "),
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: lang,
    wordCount: postPlainText(post, lang).split(/\s+/).filter(Boolean).length,
    timeRequired: `PT${readingMinutes(post, lang)}M`,
    image: [absoluteUrl(post.cover)],
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };
}
