import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Gallery } from "@/components/site/Gallery";
import { galleryItems } from "@/content/gallery";
import { useLang } from "@/i18n/LanguageProvider";
import { getSsrPageSeo, metaArrayFromPageSeo } from "@/i18n/seo";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: metaArrayFromPageSeo(getSsrPageSeo("/gallery"), "/gallery"),
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionHeader eyebrow={t.gallery.eyebrow} title={t.gallery.title} lead={t.gallery.lead} />
        <div className="mt-12">
          <Gallery items={galleryItems} />
        </div>
      </div>
    </PageShell>
  );
}
