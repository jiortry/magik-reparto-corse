import type { Lang } from "@/i18n/dictionary";

export type Dealer = {
  id: string;
  name: string;
  countryCode: string;
  country: Record<Lang, string>;
  continent: Record<Lang, string>;
  /** City/region reference point; not an exact street-level location. */
  coordinates: { longitude: number; latitude: number };
  mapLabel: { x: number; y: number };
  /** Spread neighboring markers; a stem preserves the geographic reference. */
  mapOffsetX?: number;
  mapOffsetY?: number;
  areaServed?: string[];
  contactName?: string;
  secondaryContactName?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  street?: string;
  postalCode?: string;
  city?: string;
  region?: string;
  instagram?: string;
  facebook?: string;
  website?: string;
};

export const dealers: Dealer[] = [
  {
    id: "germany",
    name: "Magik Kart Germany",
    countryCode: "DE",
    country: { it: "Germania", en: "Germany", es: "Alemania" },
    continent: { it: "Europa", en: "Europe", es: "Europa" },
    coordinates: { longitude: 9.69, latitude: 51.8 },
    mapLabel: { x: 42, y: 9 },
    mapOffsetY: -18,
    contactName: "Gary Kirkby",
    email: "info@magikkartgermany.com",
    phone: "+49 157 81794612",
    street: "Erholungsheimstraße 15",
    postalCode: "37586",
    city: "Dassel",
    instagram: "magikkartde",
  },
  {
    id: "colombia",
    name: "Magik Kart Colombia",
    countryCode: "CO",
    country: { it: "Colombia", en: "Colombia", es: "Colombia" },
    continent: { it: "Sud America", en: "South America", es: "Sudamérica" },
    coordinates: { longitude: -76.61, latitude: 2.44 },
    mapLabel: { x: 22, y: 68 },
    contactName: "Luis Felipe Vejarano Restrepo",
    phone: "+57 300 05 89 802",
    whatsapp: "+57 300 05 89 802",
    street: "Carrera 5 # 2-23",
    city: "Popayán",
    region: "Cauca",
  },
  {
    id: "new-zealand",
    name: "Pearson Motorsport SRL",
    countryCode: "NZ",
    country: { it: "Nuova Zelanda", en: "New Zealand", es: "Nueva Zelanda" },
    continent: { it: "Oceania", en: "Oceania", es: "Oceanía" },
    coordinates: { longitude: 176.84, latitude: -39.5 },
    mapLabel: { x: 80, y: 91 },
    contactName: "Willie Pearson",
    secondaryContactName: "Johno Pearson",
    email: "info.pearsonmotorsport@gmail.com",
    phone: "+64 22 462 1049",
    whatsapp: "+64 22 462 1049",
    region: "Hawke’s Bay",
    facebook: "https://www.facebook.com/people/Pearson-Motorsport-SRL/61561344543332/",
  },
  {
    id: "cbk-racing-varese",
    name: "CBK Racing Varese",
    countryCode: "IT",
    country: { it: "Italia e Svizzera", en: "Italy & Switzerland", es: "Italia y Suiza" },
    continent: { it: "Europa", en: "Europe", es: "Europa" },
    areaServed: ["IT", "CH"],
    coordinates: { longitude: 8.82, latitude: 45.82 },
    mapLabel: { x: 64, y: 43 },
    mapOffsetY: 18,
    city: "Varese",
    website: "https://cbkracingvarese.com/",
  },
  {
    id: "france",
    name: "D Racing",
    countryCode: "FR",
    country: { it: "Francia", en: "France", es: "Francia" },
    continent: { it: "Europa", en: "Europe", es: "Europa" },
    coordinates: { longitude: 4.85, latitude: 45.01 },
    mapLabel: { x: 22, y: 16 },
    mapOffsetX: -36,
    email: "sergeriou@dracing.fr",
    phone: "+33 6 07 30 80 21",
    street: "75 impasse de la Cité, Z.A. de la Croix des Marais",
    city: "La Roche-de-Glun",
    facebook: "https://www.facebook.com/Dracing.fr/",
    website: "http://www.dracing.fr/",
  },
];

export function dealerAddressLine(dealer: Dealer): string {
  return [dealer.street, [dealer.postalCode, dealer.city].filter(Boolean).join(" "), dealer.region]
    .filter(Boolean)
    .join(", ");
}

export function dealerMapsUrl(dealer: Dealer): string {
  const address = [dealerAddressLine(dealer), dealer.countryCode].join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function dealerTelHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function dealerInstagramUrl(handle: string): string {
  return `https://www.instagram.com/${handle.replace(/^@/, "")}/`;
}

export function dealerWhatsappUrl(phone: string): string {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}
