import { createFileRoute } from "@tanstack/react-router";
import { KartModelView } from "@/components/site/KartModelView";
import { kartMedia } from "@/content/kart-media";
import { useLang } from "@/i18n/LanguageProvider";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  getSsrPageSeo,
  linksForPath,
  metaArrayFromPageSeo,
} from "@/i18n/seo";

const PATH = "/kart-magik/shifter";

export const Route = createFileRoute("/kart-magik/shifter")({
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
            { name: "Shifter", path: PATH },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Kart Magik MRK1 Shifter",
          category: "Telaio kart da competizione",
          description:
            "Telaio kart Magik MRK1 shifter omologato CIK-FIA 007-CH-60: acciaio cromo molibdeno Ø 30 mm, passo 1045 mm, assale 50 mm, impianto frenante FREELINE e carene KG 509-507.",
          brand: { "@type": "Brand", name: "Magik" },
          url: absoluteUrl(PATH),
          material: "Acciaio cromo molibdeno",
          additionalProperty: [
            { "@type": "PropertyValue", name: "Omologazione", value: "CIK-FIA 007-CH-60" },
            { "@type": "PropertyValue", name: "Configurazione", value: "Shifter" },
            { "@type": "PropertyValue", name: "Passo", value: "1045 mm" },
            { "@type": "PropertyValue", name: "Assale", value: "50 mm" },
          ],
        }),
      },
    ],
  }),
  component: ShifterPage,
});

function ShifterPage() {
  const { t } = useLang();
  const k = t.kart;

  return (
    <KartModelView
      variant="shifter"
      copy={k}
      hotspots={k.hotspots}
      imageAlt={t.kartSelect.shifterAlt}
      details={kartMedia.shifter.details}
      ficheDownload={k.ficheDownload}
    />
  );
}
