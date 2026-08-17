import { useState } from "react";
import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Clock, Link2, Tag } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { RevealText } from "@/components/site/RevealText";
import { RacingButton } from "@/components/site/RacingButton";
import { useLang } from "@/i18n/LanguageProvider";
import { posts, readingMinutes, relatedPosts, type Post } from "@/content/blog";
import {
  blogPostFallbackSeo,
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  getSsrPageSeo,
  linksForPath,
  metaArrayFromPageSeo,
} from "@/i18n/seo";

/** Slugs published before the blog rewrite — kept alive with a permanent redirect. */
const LEGACY_SLUGS: Record<string, string> = {
  "setup-kart-precisione-metodo": "setup-kart-guida-completa",
  "lke-emilia-romagna-supporto": "motore-lke-emilia-romagna",
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const moved = LEGACY_SLUGS[params.slug];
    if (moved) {
      throw redirect({
        to: "/blog/$slug",
        params: { slug: moved },
        statusCode: 301,
      });
    }
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) {
      return {
        meta: metaArrayFromPageSeo(blogPostFallbackSeo.it, "/blog"),
        links: linksForPath("/blog"),
      };
    }
    const path = `/blog/${p.slug}`;
    const seo = getSsrPageSeo(path);
    const scripts: { type: string; children: string }[] = [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: p.title.it, path },
          ]),
        ),
      },
    ];
    const article = buildArticleJsonLd(p.slug, "it");
    if (article) scripts.push({ type: "application/ld+json", children: JSON.stringify(article) });
    if (p.faq?.length) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(p.faq.map((f) => ({ q: f.q.it, a: f.a.it })))),
      });
    }
    return {
      meta: [
        ...metaArrayFromPageSeo(seo, path, { ogImage: p.cover, type: "article" }),
        { property: "article:published_time", content: p.date },
        { property: "article:modified_time", content: p.updated ?? p.date },
        { property: "article:section", content: p.category.it },
        ...p.tags.it.map((tag) => ({ property: "article:tag", content: tag })),
      ],
      links: linksForPath(path),
      scripts,
    };
  },
  component: PostPage,
  notFoundComponent: BlogPostNotFound,
});

function BlogPostNotFound() {
  const { t } = useLang();
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h1 className="font-display font-black italic uppercase text-4xl">
          {t.blog.postNotFoundTitle}
        </h1>
        <Link to="/blog" className="mt-6 inline-block text-primary">
          ← {t.blog.backToBlog}
        </Link>
      </div>
    </PageShell>
  );
}

function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-50 h-[3px] origin-left bg-primary"
    />
  );
}

function CopyLinkButton() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        } catch {
          setCopied(false);
        }
      }}
      className="inline-flex items-center gap-2 border border-border px-3 py-2 text-[10px] font-display font-bold uppercase tracking-widest text-foreground/80 transition-colors hover:border-primary hover:text-primary"
    >
      {copied ? <Check size={13} /> : <Link2 size={13} />}
      {copied ? t.blog.copied : t.blog.copyLink}
    </button>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData();
  const { lang, t } = useLang();

  const ordered = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const idx = ordered.findIndex((p) => p.slug === post.slug);
  const prev = ordered[idx + 1];
  const next = ordered[idx - 1];
  const related = relatedPosts(post, lang);

  const dateLabel = (d: string) =>
    new Date(d).toLocaleDateString(lang === "it" ? "it-IT" : "en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  return (
    <>
      <ReadingProgress />
      <PageShell>
        <article className="mx-auto max-w-[1400px] px-5 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="text-[10px] font-display uppercase tracking-widest"
          >
            <ol className="flex flex-wrap items-center gap-2 text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link to="/blog" className="hover:text-primary">
                  {t.blog.navBackLabel}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-accent">{post.category[lang]}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mt-6 max-w-4xl">
            <p className="text-[10px] font-display uppercase tracking-[0.3em] text-accent">
              {dateLabel(post.date)}
              {post.updated ? ` · ${t.blog.updatedOn} ${dateLabel(post.updated)}` : ""}
            </p>
            <RevealText
              as="h1"
              text={post.title[lang]}
              className="mt-4 font-display font-black uppercase italic text-4xl md:text-6xl tracking-tight leading-[0.98]"
            />
            <p className="mt-5 inline-flex items-center gap-2 text-xs font-display uppercase tracking-widest text-muted-foreground">
              <Clock size={13} /> {readingMinutes(post, lang)} {t.blog.readingTime}
            </p>
          </header>

          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 overflow-hidden clip-diagonal"
          >
            <img
              src={post.cover}
              alt={post.title[lang]}
              className="w-full aspect-[16/9] object-cover"
            />
          </motion.div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px]">
            {/* Body */}
            <div className="max-w-3xl">
              <RevealText
                as="p"
                text={post.intro[lang]}
                className="text-lg md:text-xl text-foreground/90 leading-relaxed border-l-2 border-primary pl-5"
              />

              {post.sections.map((s, i) => (
                <section key={s.id} id={s.id} className="mt-12 scroll-mt-28">
                  <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                    transition={{ duration: 0.5 }}
                    className="font-display font-bold uppercase italic text-2xl md:text-3xl tracking-tight"
                  >
                    <span className="text-primary mr-2">{String(i + 1).padStart(2, "0")}</span>
                    {s.heading[lang]}
                  </motion.h2>
                  {s.paragraphs[lang].map((par, k) => (
                    <motion.p
                      key={k}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                      transition={{ duration: 0.5, delay: 0.05 * k }}
                      className="mt-4 text-base md:text-[17px] text-muted-foreground leading-relaxed"
                    >
                      {par}
                    </motion.p>
                  ))}
                  {s.bullets?.[lang]?.length ? (
                    <ul className="mt-6 space-y-3 border-l border-border pl-5">
                      {s.bullets[lang].map((b, k) => (
                        <motion.li
                          key={k}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                          transition={{ duration: 0.45, delay: 0.05 * k }}
                          className="relative text-sm md:text-base text-foreground/80 leading-relaxed"
                        >
                          <span className="absolute -left-[23px] top-2.5 h-1.5 w-1.5 bg-primary" />
                          {b}
                        </motion.li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              {/* FAQ */}
              {post.faq?.length ? (
                <section id="faq" className="mt-16 scroll-mt-28">
                  <h2 className="font-display font-bold uppercase italic text-2xl tracking-tight">
                    {t.blog.faqTitle}
                  </h2>
                  <div className="mt-5 divide-y divide-border border-y border-border">
                    {post.faq.map((f, i) => (
                      <details key={i} className="group py-4">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display font-bold uppercase text-sm tracking-wide">
                          {f.q[lang]}
                          <span className="mt-0.5 text-primary transition-transform duration-300 group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {f.a[lang]}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              ) : null}

              {/* Tags + share */}
              <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag size={13} className="text-accent" />
                  {post.tags[lang].map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-2.5 py-1 text-[10px] font-display uppercase tracking-widest text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">
                    {t.blog.shareTitle}
                  </span>
                  <CopyLinkButton />
                </div>
              </div>

              {/* Inline CTA */}
              <div className="mt-10 border border-border bg-card p-6 md:p-8 clip-diagonal">
                <h3 className="font-display font-black uppercase italic text-xl md:text-2xl">
                  {t.blog.ctaTitle}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t.blog.ctaBody}
                </p>
                <div className="mt-5">
                  <RacingButton to="/contact">{t.blog.ctaButton}</RacingButton>
                </div>
              </div>

              {/* Prev / next */}
              <nav className="mt-10 grid gap-4 sm:grid-cols-2">
                {prev ? (
                  <Link
                    to="/blog/$slug"
                    params={{ slug: prev.slug }}
                    className="group border border-border p-4 transition-colors hover:border-primary/60"
                  >
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-display uppercase tracking-widest text-accent">
                      <ArrowLeft size={12} /> {t.blog.prevPost}
                    </span>
                    <p className="mt-2 font-display font-bold uppercase text-sm leading-tight group-hover:text-primary">
                      {prev.title[lang]}
                    </p>
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link
                    to="/blog/$slug"
                    params={{ slug: next.slug }}
                    className="group border border-border p-4 text-right transition-colors hover:border-primary/60"
                  >
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-display uppercase tracking-widest text-accent">
                      {t.blog.nextPost} <ArrowRight size={12} />
                    </span>
                    <p className="mt-2 font-display font-bold uppercase text-sm leading-tight group-hover:text-primary">
                      {next.title[lang]}
                    </p>
                  </Link>
                ) : null}
              </nav>
            </div>

            {/* Sidebar: table of contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-[10px] font-display font-bold uppercase tracking-[0.3em] text-accent">
                  {t.blog.tocTitle}
                </p>
                <ul className="mt-4 space-y-2.5 border-l border-border pl-4">
                  {post.sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {s.heading[lang]}
                      </a>
                    </li>
                  ))}
                  {post.faq?.length ? (
                    <li>
                      <a
                        href="#faq"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {t.blog.faqTitle}
                      </a>
                    </li>
                  ) : null}
                </ul>
                <Link
                  to="/blog"
                  className="mt-6 inline-flex items-center gap-2 text-[10px] font-display uppercase tracking-widest text-foreground/70 hover:text-primary"
                >
                  <ArrowLeft size={12} /> {t.blog.backToBlog}
                </Link>
              </div>
            </aside>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-20 border-t border-border pt-10">
              <h2 className="font-display font-black uppercase italic text-2xl md:text-3xl tracking-tight">
                {t.blog.relatedTitle}
              </h2>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {related.map((p) => (
                  <RelatedCard key={p.slug} post={p} />
                ))}
              </div>
            </section>
          )}
        </article>
      </PageShell>
    </>
  );
}

function RelatedCard({ post }: { post: Post }) {
  const { t, lang } = useLang();
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group border border-border bg-card overflow-hidden transition-colors hover:border-primary/60"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={post.cover}
          alt={post.title[lang]}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon to-transparent" />
      </div>
      <div className="p-4">
        <p className="text-[10px] font-display uppercase tracking-widest text-accent">
          {post.category[lang]} · {readingMinutes(post, lang)} {t.blog.readingTime}
        </p>
        <h3 className="mt-2 font-display font-bold uppercase text-sm leading-tight group-hover:text-primary">
          {post.title[lang]}
        </h3>
      </div>
    </Link>
  );
}
