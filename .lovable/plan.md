
# MAGIK Reparto Corse — Sito Ufficiale

Sito bilingue IT/EN, premium motorsport, costruito su TanStack Start (già in stack) con Tailwind v4, Framer Motion, GSAP + ScrollTrigger e Lenis. Identità visiva: nero carbonio, rosso racing, bianco tecnico, accento oro/champagne dal logo.

## Asset & branding

- Copio le immagini caricate in `src/assets/`:
  - `logo-magik.png` (logo ufficiale)
  - `gokart.png` (per la transizione lingua frontale)
  - `kart-pitlane.jpg`, `pilot-helmet.jpg`, `kart-corner.jpg`, `kart-track.jpg`, `kart-studio.jpg`, `team.jpg`
- Open Graph image generata dal logo + kart su sfondo carbon.

## Design system (`src/styles.css`)

Token oklch:
- `--background` carbon black, `--foreground` bianco tecnico
- `--primary` rosso racing (#E10600 area), `--accent` oro champagne
- `--muted` grigio asfalto, `--border` grigio metallo
- Texture: gradients carbon, scanline rosse, noise sottile
- Font: Heading **"Saira Condensed"** (italic uppercase, bold), Body **"Rajdhani"** o **"Barlow"** — caricati via Google Fonts in `__root.tsx`.

## Routing (TanStack Start, file-based)

```
src/routes/
  __root.tsx              -> shell, providers, Lenis, Navbar, Footer, LanguagePopup, KartTransition
  index.tsx               -> Home (hero + sezioni teaser)
  about.tsx               -> Chi Siamo / About
  services.tsx            -> Servizi
  kart-magik.tsx          -> Kart Magik (hotspot HUD)
  lke.tsx                 -> LKE Emilia-Romagna
  team.tsx                -> Racing Team
  gallery.tsx             -> Galleria fullscreen
  blog.tsx                -> Blog index
  blog.$slug.tsx          -> Articolo
  faq.tsx                 -> FAQ accordion
  contact.tsx             -> Contatti + form
```

Ogni route con `head()` proprio (title, description, og:title/description/image) per SEO mirata sulle keyword (go kart Emilia Romagna, assistenza kart in pista, motore LKE, ecc.).

## i18n (custom, leggera, no libreria)

- `src/i18n/dictionary.ts` — oggetto `{ it: {...}, en: {...} }` con tutte le stringhe (nomi brand non tradotti).
- `src/i18n/LanguageProvider.tsx` — context + `useT()`, persiste in `localStorage` (`magik.lang`).
- `LanguagePopup` al primo accesso (se `localStorage` vuoto): card carbon con due CTA "Italiano" / "English".
- `LanguageSwitcher` in Navbar: toggle IT/EN che lancia `KartTransition`.

## Componenti chiave (`src/components/`)

- `Navbar.tsx` — sticky, logo + link, switch lingua, hamburger mobile, underline rosso animato.
- `Footer.tsx` — logo, descrizione, link rapidi, Instagram, copyright.
- `LanguagePopup.tsx` — modale iniziale.
- `LanguageSwitcher.tsx` — toggle pill IT/EN.
- `KartTransition.tsx` — overlay full-screen: `gokart.png` parte piccolo + lontano, scale 0.2 → 6, blur motion, leggero tilt, durata ~900ms; al picco cambia lingua, poi dissolve. Rispetta `prefers-reduced-motion` (fallback fade).
- `IntroLoader.tsx` — accensione motore: logo MAGIK su nero, linea rossa che attraversa, fade out.
- `Hero.tsx` — parallax mouse (Framer `useMotionValue`), scie SVG animate, kart/logo con tilt 3D, headline uppercase italic.
- `RacingLine.tsx` — divisore SVG con scia che scorre on scroll.
- `ServiceCard.tsx` — entrata laterale "sorpasso" via ScrollTrigger; uscita inversa allo scroll back; bordo gradient rosso/oro; hover tilt + glow.
- `KartHotspots.tsx` — immagine `gokart.png` con hotspot HUD animati (telaio, freni, radiatore, carene, motore, setup).
- `Gallery.tsx` — griglia masonry → click apre lightbox fullscreen carbon, slideshow auto/manual, transizioni random tra: wipe diagonale, zoom pista, flash, scia laterale, taglio rosso. Parallax mouse sull'immagine attiva.
- `BlogCard.tsx`, `FAQAccordion.tsx`, `ContactForm.tsx` (Nome, Cognome, Email, Telefono, Tipo richiesta select, Messaggio; submit via serverFn semplice — solo log/toast in v1, niente DB).
- `WhatsAppFab.tsx`, `InstagramLink.tsx`.

## Animazioni

- **Lenis** smooth-scroll inizializzato in `__root.tsx`.
- **GSAP + ScrollTrigger** per: ingressi laterali servizi, pin sezione Kart Magik, scie SVG, parallax immagini, uscita reverse on scroll-back.
- **Framer Motion** per: hover card, KartTransition, popup, accordion, page transitions racing (clip-path diagonale rosso).
- Mouse-driven tilt via `useMotionValue` + `useTransform`.
- Wrapper globale che disabilita tutto se `prefers-reduced-motion: reduce`.

## SEO & performance

- `head()` per route con keyword italiane mirate.
- JSON-LD `Organization` + `LocalBusiness` (Emilia-Romagna) nel root.
- `<h1>` unico per pagina, gerarchia H2/H3 corretta.
- `loading="lazy"` + `decoding="async"` su tutte le immagini non hero.
- Immagini servite via import ES6 (Vite hash + ottimizzazione).
- Font con `display=swap`.

## Accessibilità

- Contrasti AA su rosso/nero (testi su rosso = bianco bold).
- Focus ring oro visibile.
- Form con `<label>` espliciti, `aria-*` su accordion e lightbox.
- Navigazione tastiera completa (popup, lightbox, menu mobile).
- `prefers-reduced-motion` rispettato globalmente.

## Dipendenze da installare

`framer-motion`, `gsap`, `lenis`, `embla-carousel-react` (per gallery slideshow), `react-hook-form` + `zod` (form contatti).

## Fuori scope (v1)

- Nessun backend reale per blog (contenuti statici in `src/content/blog.ts`).
- Form contatti: serverFn che logga e ritorna ok (no email send finché non si configura un provider).
- Nessuna integrazione Cloud/DB richiesta ora.

## Note tecniche per l'utente

Il sito gira su TanStack Start (React 19 + Vite) — equivalente moderno di Next.js per le esigenze di questo progetto. Tutto SSR, route file-based, ogni pagina indicizzabile. Se in futuro vuoi blog gestibile da pannello, multilingua dinamico o invio email, possiamo attivare Lovable Cloud in un secondo momento.
