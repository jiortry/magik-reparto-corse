import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { useLang } from "@/i18n/LanguageProvider";
import {
  buildBreadcrumbJsonLd,
  buildSiteFaqJsonLd,
  getSsrPageSeo,
  linksForPath,
  metaArrayFromPageSeo,
} from "@/i18n/seo";
import { faqItems } from "@/content/faq";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: metaArrayFromPageSeo(getSsrPageSeo("/faq"), "/faq"),
    links: linksForPath("/faq"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildSiteFaqJsonLd("it")),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const { t, lang } = useLang();
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} lead={t.faq.lead} />
        <div className="mt-12">
          <FAQAccordion items={faqItems[lang]} />
        </div>
      </div>
    </PageShell>
  );
}
