import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useLang } from "@/i18n/LanguageProvider";
import { posts } from "@/content/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Tecnica, gare, motori | MAGIK Reparto Corse" },
      { name: "description", content: "News, tecnica, setup, motori LKE e dietro le quinte di MAGIK Reparto Corse." },
      { property: "og:title", content: "Blog — MAGIK Reparto Corse" },
      { property: "og:description", content: "Insights racing, setup e dietro le quinte." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { t, lang } = useLang();
  return (
    <PageShell>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionHeader eyebrow={t.blog.eyebrow} title={t.blog.title} lead={t.blog.lead} />
        <div className="mt-8 flex flex-wrap gap-2">
          {t.blog.categories.map((c) => (
            <span
              key={c}
              className="text-[10px] font-display uppercase tracking-widest border border-border px-3 py-1.5 text-foreground/70"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative border border-border bg-card overflow-hidden hover:border-primary/60 transition-colors"
            >
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="block"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title[lang]}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-display font-bold uppercase tracking-widest bg-primary text-primary-foreground px-2 py-1">
                    {p.category[lang]}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">
                    {new Date(p.date).toLocaleDateString(lang === "it" ? "it-IT" : "en-US", { day: "2-digit", month: "short", year: "numeric" })}
                  </p>
                  <h3 className="mt-2 font-display font-bold uppercase text-lg leading-tight tracking-tight group-hover:text-primary transition-colors">
                    {p.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt[lang]}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
