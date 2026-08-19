import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clock, Search } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { RevealText } from "@/components/site/RevealText";
import { LANG_LOCALES, type Lang } from "@/i18n/dictionary";
import { useLang } from "@/i18n/LanguageProvider";
import {
  buildBlogListingJsonLd,
  buildBreadcrumbJsonLd,
  getSsrPageSeo,
  linksForPath,
  metaArrayFromPageSeo,
} from "@/i18n/seo";
import { posts, readingMinutes, type Post } from "@/content/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: metaArrayFromPageSeo(getSsrPageSeo("/blog"), "/blog"),
    links: linksForPath("/blog"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBlogListingJsonLd("it")),
      },
    ],
  }),
  component: BlogPage,
});

function formatDate(date: string, lang: Lang) {
  return new Date(date).toLocaleDateString(LANG_LOCALES[lang], {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function BlogPage() {
  const { t, lang } = useLang();
  const [category, setCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const sorted = useMemo(() => [...posts].sort((a, b) => (a.date < b.date ? 1 : -1)), []);
  const featured = sorted.find((p) => p.featured) ?? sorted[0];

  const usedCategories = useMemo(
    () => Array.from(new Set(sorted.map((p) => p.category[lang]))),
    [sorted, lang],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter((p) => {
      if (category && p.category[lang] !== category) return false;
      if (!q) return true;
      const haystack = [
        p.title[lang],
        p.excerpt[lang],
        p.category[lang],
        ...p.tags[lang],
        ...p.keywords[lang],
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [sorted, category, query, lang]);

  return (
    <PageShell>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionHeader eyebrow={t.blog.eyebrow} title={t.blog.title} lead={t.blog.lead} />

        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="group relative mt-12 overflow-hidden border border-border bg-card"
        >
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="grid md:grid-cols-2 items-stretch"
          >
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[380px] overflow-hidden">
              <img
                src={featured.cover}
                alt={featured.title[lang]}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-transparent md:bg-gradient-to-r" />
              <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-2.5 py-1 text-[10px] font-display font-bold uppercase tracking-widest">
                {t.blog.featured}
              </span>
            </div>
            <div className="relative p-6 md:p-10 flex flex-col justify-center">
              <p className="text-[10px] font-display uppercase tracking-[0.3em] text-accent">
                {featured.category[lang]} · {formatDate(featured.date, lang)}
              </p>
              <RevealText
                as="h2"
                text={featured.title[lang]}
                className="mt-4 font-display font-black uppercase italic text-2xl md:text-4xl leading-[1.02] tracking-tight group-hover:text-primary transition-colors"
              />
              <p className="mt-4 text-muted-foreground leading-relaxed">{featured.excerpt[lang]}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-primary">
                {t.blog.readArticle}
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-muted-foreground font-display uppercase tracking-widest">
                <Clock size={12} /> {readingMinutes(featured, lang)} {t.blog.readingTime}
              </span>
            </div>
          </Link>
        </motion.article>

        {/* Filters */}
        <div className="mt-14 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            <FilterChip
              label={t.blog.allCategories}
              active={category === null}
              onClick={() => setCategory(null)}
            />
            {usedCategories.map((c) => (
              <FilterChip
                key={c}
                label={c}
                active={category === c}
                onClick={() => setCategory(category === c ? null : c)}
              />
            ))}
          </div>

          <label className="relative w-full lg:w-80">
            <Search
              size={15}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.blog.searchPlaceholder}
              aria-label={t.blog.searchPlaceholder}
              className="w-full bg-card border border-border pl-9 pr-3 py-2.5 text-sm outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/70"
            />
          </label>
        </div>

        <p className="mt-4 text-[11px] font-display uppercase tracking-[0.3em] text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? t.blog.resultsCountOne : t.blog.resultsCount}
        </p>

        {/* Grid */}
        <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <PostCard key={p.slug} post={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">{t.blog.empty}</p>
        )}
      </div>
    </PageShell>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`relative overflow-hidden px-3.5 py-1.5 text-[10px] font-display font-bold uppercase tracking-widest border transition-colors ${
        active
          ? "border-primary text-primary-foreground"
          : "border-border text-foreground/70 hover:border-primary/60 hover:text-foreground"
      }`}
    >
      {active && (
        <motion.span
          layoutId="blog-filter-pill"
          className="absolute inset-0 -z-10 bg-primary"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
      {label}
    </button>
  );
}

function PostCard({ post, index }: { post: Post; index: number }) {
  const { t, lang } = useLang();
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12, scale: 0.98 }}
      transition={{ duration: 0.5, delay: Math.min(index, 5) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border border-border bg-card overflow-hidden transition-colors hover:border-primary/60"
    >
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="block h-full">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={post.cover}
            alt={post.title[lang]}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon to-transparent" />
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 text-[10px] font-display font-bold uppercase tracking-widest">
            {post.category[lang]}
          </span>
        </div>
        <div className="p-5">
          <p className="flex items-center gap-2 text-[10px] font-display uppercase tracking-widest text-muted-foreground">
            {formatDate(post.date, lang)}
            <span className="h-3 w-px bg-border" />
            <Clock size={11} /> {readingMinutes(post, lang)} {t.blog.readingTime}
          </p>
          <h3 className="mt-2 font-display font-bold uppercase text-lg leading-tight tracking-tight transition-colors group-hover:text-primary">
            {post.title[lang]}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{post.excerpt[lang]}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-display font-bold uppercase tracking-widest text-accent">
            {t.blog.readArticle}
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
        <span
          aria-hidden
          className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full"
        />
      </Link>
    </motion.article>
  );
}
