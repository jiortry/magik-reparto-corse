import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { DocumentMetaSync } from "@/i18n/DocumentMetaSync";
import { LanguageProvider, readStoredLang } from "@/i18n/LanguageProvider";
import { dictionary } from "@/i18n/dictionary";
import { buildRootJsonLd, getSsrPageSeo, metaArrayFromPageSeo } from "@/i18n/seo";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { LanguagePopup } from "@/components/site/LanguagePopup";
import { KartTransition } from "@/components/site/KartTransition";
import { IntroLoader } from "@/components/site/IntroLoader";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

function NotFoundComponent() {
  const t = dictionary[readStoredLang()];
  return (
    <div className="flex min-h-screen items-center justify-center bg-carbon px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-xs uppercase tracking-[0.4em] text-accent">{t.errors.notFoundKicker}</p>
        <h1 className="mt-4 font-display font-black uppercase italic text-6xl text-foreground">
          {t.errors.notFoundTitle}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">{t.errors.notFoundBody}</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-3 font-display text-xs font-bold uppercase tracking-widest clip-diagonal hover:bg-primary/90 transition-colors"
        >
          {t.errors.notFoundCta}
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const t = dictionary[readStoredLang()];
  return (
    <div className="flex min-h-screen items-center justify-center bg-carbon px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display font-black uppercase italic text-3xl text-foreground">
          {t.errors.brokeTitle}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-primary text-primary-foreground px-4 py-2 text-xs font-display uppercase tracking-widest"
          >
            {t.errors.retry}
          </button>
          <a href="/" className="border border-border px-4 py-2 text-xs font-display uppercase tracking-widest">
            {t.errors.homeLink}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const homeSeo = getSsrPageSeo("/");
    return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      ...metaArrayFromPageSeo(homeSeo, "/"),
      { name: "theme-color", content: "#0d0d10" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "MAGIK Reparto Corse" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Saira+Condensed:ital,wght@0,500;0,700;0,800;0,900;1,700;1,800;1,900&family=Rajdhani:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildRootJsonLd()),
      },
    ],
  };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <DocumentMetaSync />
        <SmoothScroll />
        <IntroLoader />
        <LanguagePopup />
        <KartTransition />
        <Navbar />
        <Outlet />
        <Footer />
        <WhatsAppFab />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
