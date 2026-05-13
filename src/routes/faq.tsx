import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { useLang } from "@/i18n/LanguageProvider";
import { getSsrPageSeo, metaArrayFromPageSeo } from "@/i18n/seo";
import { faqItems } from "@/content/faq";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: metaArrayFromPageSeo(getSsrPageSeo("/faq"), "/faq"),
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.it.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
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
