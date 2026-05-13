import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useLang } from "@/i18n/LanguageProvider";
import team from "@/assets/team.jpg";
import pilot from "@/assets/pilot-helmet.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Racing Team — MAGIK Reparto Corse" },
      { name: "description", content: "Un team tecnico, veloce e determinato: dalla preparazione del kart all'assistenza in pista." },
      { property: "og:title", content: "Racing Team — MAGIK Reparto Corse" },
      { property: "og:description", content: "Ogni dettaglio è studiato per vincere." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionHeader eyebrow={t.team.eyebrow} title={t.team.title} lead={t.team.lead} />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <motion.img
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={team}
            alt="MAGIK Racing Team"
            className="w-full h-full object-cover clip-diagonal"
          />
          <motion.img
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            src={pilot}
            alt="Pilota MAGIK"
            className="w-full h-full object-cover clip-diagonal-r"
          />
        </div>
      </div>
    </PageShell>
  );
}
