import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { useLang } from "@/i18n/LanguageProvider";
import { posts } from "@/content/blog";
import { blogPostFallbackSeo, getSsrPageSeo, metaArrayFromPageSeo } from "@/i18n/seo";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) {
      return {
        meta: metaArrayFromPageSeo(blogPostFallbackSeo.it, "/blog"),
        links: [{ rel: "canonical", href: "/blog" }],
      };
    }
    const path = `/blog/${p.slug}`;
    const seo = getSsrPageSeo(path);
    const cover = typeof p.cover === "string" ? p.cover : String(p.cover);
    return {
      meta: [
        ...metaArrayFromPageSeo(seo, path, { ogImage: cover }),
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: path }],
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

function PostPage() {
  const { post } = Route.useLoaderData();
  const { lang, t } = useLang();
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-5 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-widest text-accent hover:text-primary transition-colors"
        >
          <ArrowLeft size={14} /> {t.blog.navBackLabel}
        </Link>
        <p className="mt-6 text-[10px] font-display uppercase tracking-widest text-accent">
          {post.category[lang]} ·{" "}
          {new Date(post.date).toLocaleDateString(lang === "it" ? "it-IT" : "en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h1 className="mt-3 font-display font-black uppercase italic text-4xl md:text-5xl tracking-tight leading-[1]">
          {post.title[lang]}
        </h1>
        <img
          src={post.cover}
          alt={post.title[lang]}
          className="mt-8 w-full aspect-[16/9] object-cover clip-diagonal"
        />
        <p className="mt-8 text-lg text-foreground/85 leading-relaxed">{post.excerpt[lang]}</p>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">{post.body[lang]}</p>
      </article>
    </PageShell>
  );
}
