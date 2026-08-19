import { createFileRoute } from "@tanstack/react-router";
import { KartModelView } from "@/components/site/KartModelView";
import { useLang } from "@/i18n/LanguageProvider";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  getSsrPageSeo,
  linksForPath,
  metaArrayFromPageSeo,
} from "@/i18n/seo";
import directDrive from "@/assets/kart/direct-drive.jpg";

const PATH = "/kart-magik/direct-drive";

export const Route = createFileRoute("/kart-magik/direct-drive")({
  head: () => ({
    meta: metaArrayFromPageSeo(getSsrPageSeo(PATH), PATH),
    links: linksForPath(PATH),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Kart Magik", path: "/kart-magik" },
            { name: "Direct Drive", path: PATH },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Kart Magik Direct Drive",
          category: "Telaio kart da competizione",
          description:
            "Kart Magik Direct Drive: trasmissione diretta, frizione centrifuga, categorie OK e junior. Preparato da MAGIK Reparto Corse.",
          brand: { "@type": "Brand", name: "Magik" },
          url: absoluteUrl(PATH),
          additionalProperty: [
            { "@type": "PropertyValue", name: "Configurazione", value: "Direct Drive" },
            { "@type": "PropertyValue", name: "Trasmissione", value: "Diretta" },
            { "@type": "PropertyValue", name: "Frizione", value: "Centrifuga" },
          ],
        }),
      },
    ],
  }),
  component: DirectDrivePage,
});

function DirectDrivePage() {
  const { t } = useLang();
  const k = t.kartDirect;

  return (
    <KartModelView
      variant="direct-drive"
      copy={k}
      image={directDrive}
      imageAlt={t.kartSelect.directAlt}
    />
  );
}
