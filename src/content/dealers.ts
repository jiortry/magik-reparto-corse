import type { Lang } from "@/i18n/dictionary";

export type Dealer = {
  id: string;
  name: string;
  countryCode: string;
  country: Record<Lang, string>;
  contactName: string;
  email: string;
  phone: string;
  street: string;
  postalCode: string;
  city: string;
  instagram: string;
};

export const dealers: Dealer[] = [
  {
    id: "germany",
    name: "Magik Kart Germany",
    countryCode: "DE",
    country: { it: "Germania", en: "Germany", es: "Alemania" },
    contactName: "Gary Kirkby",
    email: "info@magikkartgermany.com",
    phone: "+49 157 81794612",
    street: "Erholungsheimstraße 15",
    postalCode: "37586",
    city: "Dassel",
    instagram: "magikkartde",
  },
];

export function dealerAddressLine(dealer: Dealer): string {
  return `${dealer.street}, ${dealer.postalCode} ${dealer.city}`;
}

export function dealerMapsUrl(dealer: Dealer): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dealerAddressLine(dealer))}`;
}

export function dealerTelHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function dealerInstagramUrl(handle: string): string {
  return `https://www.instagram.com/${handle.replace(/^@/, "")}/`;
}
