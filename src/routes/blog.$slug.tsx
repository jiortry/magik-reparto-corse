import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { useLang } from "@/i18n/LanguageProvider";
import { posts } from "@/content/blog";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [{ title: "Post — MAGIK Reparto Corse" }] };
    return {
      meta: [
        { title: `${p.title.it} — MAGIK Reparto Corse` },
        { name: "description", content: p.excerpt.it },
        { property: "og:type", content: "article" },
        { property: "og:title", content: p.title.it },
        { property: "og:description", content: p.excerpt.it },
        { property: "og:image", content: p.cover },
        { property: "og:url", content: `/blog/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${p.slug}` }],
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h1 className="font-display font-black italic uppercase text-4xl">Post non trovato</h1>
        <Link to="/blog" className="mt-6 inline-block text-primary">← Blog</Link>
      </div>
    </PageShell>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const { lang } = useLang();
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-5 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-widest text-accent hover:text-primary transition-colors">
          <ArrowLeft size={14} /> Blog
        </Link>
        <p className="mt-6 text-[10px] font-display uppercase tracking-widest text-accent">
          {post.category[lang]} · {new Date(post.date).toLocaleDateString(lang === "it" ? "it-IT" : "en-US", { day: "2-digit", month: "long", year: "numeric" })}
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
