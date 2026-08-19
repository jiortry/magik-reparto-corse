import type { Lang } from "@/i18n/dictionary";

export type PartnerIcon =
  | "engine"
  | "telemetry"
  | "partner"
  | "wheels"
  | "seats"
  | "builder"
  | "radiators"
  | "tools";

export type PartnerItem = {
  name: string;
  category: string;
  url: string;
  icon: PartnerIcon;
};

export const partnerships: Record<Lang, PartnerItem[]> = {
  it: [
    { name: "LKE Engines", category: "Motori", url: "https://lkengines.com/", icon: "engine" },
    {
      name: "AIM Sportline",
      category: "Telemetria",
      url: "https://www.aim-sportline.com/",
      icon: "telemetry",
    },
    {
      name: "Olivia Racing",
      category: "Partner",
      url: "https://oliviaracing.com/",
      icon: "partner",
    },
    { name: "AMV Kart", category: "Cerchi", url: "https://www.amvkart.com/", icon: "wheels" },
    {
      name: "Greyhound Seats",
      category: "Sedili",
      url: "https://greyhoundseats.com/",
      icon: "seats",
    },
    {
      name: "S. Engineering",
      category: "Motorista",
      url: "https://www.instagram.com/s.engineering_/",
      icon: "builder",
    },
    {
      name: "EM Radiatori",
      category: "Radiatori",
      url: "https://www.em-technology.it/",
      icon: "radiators",
    },
    {
      name: "Buraschi Utensili",
      category: "Utensili",
      url: "https://www.buraschiutensili.com/",
      icon: "tools",
    },
  ],
  en: [
    { name: "LKE Engines", category: "Engines", url: "https://lkengines.com/", icon: "engine" },
    {
      name: "AIM Sportline",
      category: "Telemetry",
      url: "https://www.aim-sportline.com/",
      icon: "telemetry",
    },
    {
      name: "Olivia Racing",
      category: "Partner",
      url: "https://oliviaracing.com/",
      icon: "partner",
    },
    { name: "AMV Kart", category: "Wheels", url: "https://www.amvkart.com/", icon: "wheels" },
    {
      name: "Greyhound Seats",
      category: "Seats",
      url: "https://greyhoundseats.com/",
      icon: "seats",
    },
    {
      name: "S. Engineering",
      category: "Engine Builder",
      url: "https://www.instagram.com/s.engineering_/",
      icon: "builder",
    },
    {
      name: "EM Radiatori",
      category: "Radiators",
      url: "https://www.em-technology.it/",
      icon: "radiators",
    },
    {
      name: "Buraschi Utensili",
      category: "Tools",
      url: "https://www.buraschiutensili.com/",
      icon: "tools",
    },
  ],
  es: [
    { name: "LKE Engines", category: "Motores", url: "https://lkengines.com/", icon: "engine" },
    {
      name: "AIM Sportline",
      category: "Telemetría",
      url: "https://www.aim-sportline.com/",
      icon: "telemetry",
    },
    {
      name: "Olivia Racing",
      category: "Partner",
      url: "https://oliviaracing.com/",
      icon: "partner",
    },
    { name: "AMV Kart", category: "Llantas", url: "https://www.amvkart.com/", icon: "wheels" },
    {
      name: "Greyhound Seats",
      category: "Asientos",
      url: "https://greyhoundseats.com/",
      icon: "seats",
    },
    {
      name: "S. Engineering",
      category: "Motorista",
      url: "https://www.instagram.com/s.engineering_/",
      icon: "builder",
    },
    {
      name: "EM Radiatori",
      category: "Radiadores",
      url: "https://www.em-technology.it/",
      icon: "radiators",
    },
    {
      name: "Buraschi Utensili",
      category: "Herramientas",
      url: "https://www.buraschiutensili.com/",
      icon: "tools",
    },
  ],
};

export type SponsorItem = { name: string; url: string };

export const sponsors: SponsorItem[] = [
  { name: "Antica Stallera", url: "https://www.anticastallera.com/contatti/" },
  { name: "Il Bar della Pista", url: "https://www.ilbardellapista.com/" },
];
