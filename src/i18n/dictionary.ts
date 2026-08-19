export type Lang = "it" | "en" | "es";

export const LANGS: Lang[] = ["it", "en", "es"];
export const LANG_LABELS: Record<Lang, string> = { it: "IT", en: "EN", es: "ES" };
export const LANG_NAMES: Record<Lang, string> = {
  it: "Italiano",
  en: "English",
  es: "Español",
};
export const LANG_LOCALES: Record<Lang, string> = {
  it: "it-IT",
  en: "en-GB",
  es: "es-ES",
};
export const OG_LOCALES: Record<Lang, string> = {
  it: "it_IT",
  en: "en_GB",
  es: "es_ES",
};

export function isLang(v: unknown): v is Lang {
  return v === "it" || v === "en" || v === "es";
}

export type Dict = {
  nav: Record<string, string>;
  common: Record<string, string>;
  errors: {
    notFoundKicker: string;
    notFoundTitle: string;
    notFoundBody: string;
    notFoundCta: string;
    brokeTitle: string;
    retry: string;
    homeLink: string;
  };
  hero: { eyebrow: string; title: string; subtitle: string; lead: string; scroll: string };
  home: {
    missionEyebrow: string;
    missionTitle: string;
    missionLead: string;
    statsTitle: string;
    ctaClosing: string;
    missionImageAlt: string;
    kartTeaserAlt: string;
    raceNumberLabel: string;
    stats: { value: string; label: string }[];
  };
  about: {
    title: string;
    eyebrow: string;
    lead: string;
    blocks: { title: string; body: string }[];
  };
  services: {
    title: string;
    eyebrow: string;
    lead: string;
    items: { icon: string; title: string; body: string }[];
  };
  kart: {
    title: string;
    eyebrow: string;
    lead: string;
    hotspots: { label: string; body: string }[];
    features: { eyebrow: string; title: string; body: string }[];
    highlights: { label: string; body: string }[];
    specsTitle: string;
    specsLead: string;
    homologation: string;
    ficheDownload: string;
    specs: { label: string; value: string }[];
  };
  kartSelect: {
    eyebrow: string;
    title: string;
    lead: string;
    shifterName: string;
    shifterTag: string;
    shifterAlt: string;
    directName: string;
    directTag: string;
    directAlt: string;
    backToSelect: string;
    chooseChassis: string;
    detailsTitle: string;
    detailsLead: string;
  };
  kartDirect: {
    title: string;
    eyebrow: string;
    lead: string;
    features: { eyebrow: string; title: string; body: string }[];
    highlights: { label: string; body: string }[];
    specsTitle: string;
    specsLead: string;
    homologation: string;
    ficheDownload: string;
    specs: { label: string; value: string }[];
  };
  lke: {
    title: string;
    eyebrow: string;
    lead: string;
    ctas: { label: string; href: string }[];
    points: string[];
  };
  team: {
    title: string;
    eyebrow: string;
    lead: string;
    imageAltCrew: string;
    imageAltPilot: string;
    founderEyebrow: string;
    founderTitle: string;
    founderBody: string;
    founderCta: string;
  };
  founder: {
    backLabel: string;
    eyebrow: string;
    kicker: string;
    name: string;
    role: string;
    emailCta: string;
    timelineEyebrow: string;
    timelineTitle: string;
    timelineLead: string;
    timelineHint: string;
    timelinePrev: string;
    timelineNext: string;
    manufacturersTitle: string;
    driversEyebrow: string;
    driversTitle: string;
    driversLead: string;
    driversSearchPlaceholder: string;
    driversEmpty: string;
    driversCount: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaBody: string;
    ctaTeam: string;
    ctaContact: string;
  };
  gallery: {
    title: string;
    eyebrow: string;
    lead: string;
    close: string;
    prev: string;
    next: string;
  };
  blog: {
    title: string;
    eyebrow: string;
    lead: string;
    categories: string[];
    postNotFoundTitle: string;
    backToBlog: string;
    navBackLabel: string;
    allCategories: string;
    featured: string;
    readArticle: string;
    readingTime: string;
    empty: string;
    searchPlaceholder: string;
    resultsCount: string;
    resultsCountOne: string;
    tocTitle: string;
    tagsTitle: string;
    relatedTitle: string;
    shareTitle: string;
    copyLink: string;
    copied: string;
    faqTitle: string;
    updatedOn: string;
    prevPost: string;
    nextPost: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  webCta: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    button: string;
    note: string;
  };
  faq: { title: string; eyebrow: string; lead: string };
  contact: {
    title: string;
    eyebrow: string;
    lead: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      type: string;
      message: string;
      submit: string;
      success: string;
      types: string[];
    };
    ctas: string[];
    emailsTitle: string;
    emails: { label: string; address: string }[];
  };
  footer: {
    desc: string;
    quickLinks: string;
    services: string;
    contact: string;
    rights: string;
    email: string;
  };
  partnership: {
    eyebrow: string;
    title: string;
    lead: string;
    partnersTitle: string;
    partnersLead: string;
    sponsorsTitle: string;
    sponsorsLead: string;
    visitLabel: string;
  };
};

export const dictionary: Record<Lang, Dict> = {
  it: {
    nav: {
      home: "Home",
      about: "Chi Siamo",
      services: "Servizi",
      kart: "Kart Magik",
      lke: "LKE",
      team: "Racing Team",
      gallery: "Gallery",
      blog: "Blog",
      partnership: "Partnership",
      faq: "FAQ",
      contact: "Contatti",
    },
    common: {
      discoverTeam: "Scopri il Team",
      contactUs: "Contattaci",
      trackDay: "Vivi una Giornata di Pista",
      readMore: "Scopri di più",
      requestInfo: "Richiedi informazioni",
      bookConsult: "Prenota una consulenza",
      whatsapp: "WhatsApp",
      followInstagram: "Seguici su Instagram",
      langPickTitle: "Scegli la lingua",
      langPickSub: "Choose your language · Elige tu idioma",
      backHome: "Torna alla Home",
    },
    errors: {
      notFoundKicker: "404",
      notFoundTitle: "Fuori pista",
      notFoundBody: "La pagina che cerchi non esiste o è stata spostata.",
      notFoundCta: "Torna in pista",
      brokeTitle: "Qualcosa non va",
      retry: "Riprova",
      homeLink: "Home",
    },
    hero: {
      eyebrow: "Reparto Corse Ufficiale",
      title: "MAGIK Reparto Corse",
      subtitle: "Tecnica, velocità e ambizione mondiale.",
      lead: "Prepariamo, assistiamo e portiamo in pista il Kart Magik: massimo livello tecnico e supporto gara.",
      scroll: "Scroll",
    },
    home: {
      missionEyebrow: "La Missione",
      missionTitle: "Vincere i Mondiali con il Kart Magik.",
      missionLead:
        "Un reparto corse costruito attorno a una sola promessa: portare il marchio Magik sul gradino più alto del podio internazionale.",
      statsTitle: "Numeri che corrono",
      ctaClosing:
        "Dalla preparazione alla pista: contattaci per assistenza, ricambi o una giornata in circuito con il team.",
      missionImageAlt: "Kart Magik in pista — MAGIK Reparto Corse",
      kartTeaserAlt: "Kart Magik — vista prodotto",
      raceNumberLabel: "Numero gara",
      stats: [
        { value: "100%", label: "Assistenza Pista" },
        { value: "24/7", label: "Reparto Tecnico" },
        { value: "1°", label: "Top mondiale" },
        { value: "ER", label: "Rivenditore LKE" },
      ],
    },
    about: {
      title: "Chi Siamo",
      eyebrow: "About",
      lead: "MAGIK Reparto Corse è il reparto corse ufficiale del marchio Magik, dedicato alla preparazione, allo sviluppo e all'assistenza in gara del Kart Magik.",
      blocks: [
        {
          title: "Nati per Competere",
          body: "Siamo nati per portare il Kart Magik al massimo livello competitivo, con una struttura tecnica costruita per la performance.",
        },
        {
          title: "Metodo & Precisione",
          body: "Ogni dettaglio è studiato: telaio, motore, setup, assistenza. Lavoriamo come un team di alta categoria, dalla preparazione alla pista.",
        },
        {
          title: "Presenza internazionale",
          body: "Seguiamo calendari e circuiti in Italia e all’estero: logistica trasferta, assistenza in griglia e protocolli da gara consolidati sul campo.",
        },
      ],
    },
    services: {
      title: "Servizi",
      eyebrow: "Cosa facciamo",
      lead: "Dalla preparazione tecnica alla pista, MAGIK Reparto Corse segue ogni fase della performance.",
      items: [
        {
          icon: "🏁",
          title: "Kart Magik Omologato",
          body: "Telaio Magik pronto-gara, omologato e sviluppato dal nostro reparto corse.",
        },
        {
          icon: "🔧",
          title: "Riparazione Go-Kart",
          body: "Officina specializzata in riparazione e revisione di go-kart da competizione.",
        },
        {
          icon: "⚙️",
          title: "Assistenza Tecnica & Meccanica",
          body: "Diagnosi, manutenzione e setup eseguiti da meccanici professionisti.",
        },
        {
          icon: "🏎️",
          title: "Assistenza in Pista",
          body: "Affianchiamo piloti e team durante prove e gare con supporto tecnico completo.",
        },
        {
          icon: "👨‍🔧",
          title: "Giornata di Pista",
          body: "Vivi una giornata in circuito affiancato da un team professionale.",
        },
        {
          icon: "🧩",
          title: "Punto Vendita Ricambi",
          body: "Componenti kart originali, all'ingrosso e al dettaglio, con consulenza tecnica.",
        },
        {
          icon: "📦",
          title: "Vendita Ingrosso & Dettaglio",
          body: "Logistica e disponibilità per piloti, team e officine.",
        },
        {
          icon: "🔥",
          title: "Rivenditore Ufficiale LKE",
          body: "Riferimento ufficiale per il motore LKE in Emilia-Romagna.",
        },
        {
          icon: "🌍",
          title: "Programmi gara & stagione",
          body: "Piani su più round, telemetria e checklist operative: affianchiamo piloti e team con continuità dall’officina alla bandiera a scacchi.",
        },
      ],
    },
    kart: {
      title: "Kart Magik MRK1",
      eyebrow: "Il Telaio",
      lead: "Il Magik MRK1 omologato CIK-FIA (007-CH-60) è il cuore del nostro reparto corse: scocca in acciaio cromo molibdeno, geometria racing e pacchetto completo per la pista.",
      hotspots: [
        {
          label: "Telaio",
          body: "Scocca in acciaio cromo molibdeno, tubi Ø 30 mm, passo 1045 mm.",
        },
        {
          label: "Carene",
          body: "KG 509-507 con supporti dedicati, incluse nel pacchetto d'acquisto.",
        },
        { label: "Radiatore", body: "Raffreddamento ad alta efficienza per le gare lunghe." },
        {
          label: "Impianto Frenante",
          body: "Impianto FREELINE: frenata potente, modulabile e costante.",
        },
        { label: "Motore", body: "Configurazione LKE per massima performance." },
        { label: "Setup Gara", body: "Assetto curato dal team, tarato sul circuito." },
      ],
      features: [
        {
          eyebrow: "Kit carenature KG",
          title: "Carene KG 509-507",
          body: "Presenti nel pacchetto d'acquisto del telaio, le carene KG 509-507 con i supporti dedicati.",
        },
        {
          eyebrow: "Impianto frenante FREELINE",
          title: "Frenata da gara",
          body: "L'MRK1 adotta l'impianto frenante FREELINE: componenti di qualità racing per una frenata efficiente, modulabile e costante in ogni condizione di pista. Gli accessori forniti sono componenti FREELINE.",
        },
        {
          eyebrow: "Scocca racing",
          title: "Cromo molibdeno Ø 30 mm",
          body: "La scocca è realizzata in acciaio cromo molibdeno con tubi da 30 mm di diametro: rigidità calibrata, risposta diretta e handling su ogni tipo di circuito, con passo da 1045 mm e assale Ø 50 mm.",
        },
      ],
      highlights: [
        {
          label: "Assale",
          body: "Diametro 50 mm, per massima rigidità e feeling in uscita di curva.",
        },
        {
          label: "Diametro tubi",
          body: "Tubo Ø 30 mm di pari diametro su longheroni e traverse della scocca.",
        },
        {
          label: "Passo",
          body: "1045 mm — geometria omologata per il migliore handling su tutti i tipi di circuito.",
        },
      ],
      specsTitle: "Scheda tecnica",
      specsLead: "Dati del Magik MRK1 secondo omologazione CIK-FIA 007-CH-60 (Group 2, 2025–2027).",
      homologation: "Omologazione CIK-FIA 007-CH-60",
      ficheDownload: "Download Fiche",
      specs: [
        { label: "Modello", value: "Magik MRK1" },
        { label: "Materiale scocca", value: "Acciaio cromo molibdeno" },
        { label: "Tubi Ø", value: "30 mm" },
        { label: "Passo", value: "1045 mm" },
        { label: "Assale Ø", value: "50 mm" },
        { label: "Impianto frenante", value: "FREELINE" },
        { label: "Accessori forniti", value: "Componenti FREELINE" },
        { label: "Carenature", value: "KG 509-507 con supporti dedicati" },
      ],
    },
    kartSelect: {
      eyebrow: "Kart Magik",
      title: "Scegli la configurazione",
      lead: "Due anime, lo stesso DNA Magik. Shifter per il cambio sequenziale, Direct Drive per la trasmissione diretta.",
      shifterName: "Shifter",
      shifterTag: "Cambio sequenziale",
      shifterAlt: "Kart Magik Shifter MRK1",
      directName: "Direct Drive",
      directTag: "Trasmissione diretta",
      directAlt: "Kart Magik Direct Drive",
      backToSelect: "Tutte le configurazioni",
      chooseChassis: "Scegli il telaio",
      detailsTitle: "Particolari",
      detailsLead:
        "Dettagli di costruzione della configurazione selezionata: scocca, freni, trasmissione e componenti racing.",
    },
    kartDirect: {
      title: "Kart Magik Direct Drive",
      eyebrow: "Direct Drive",
      lead: "La configurazione a trasmissione diretta del Kart Magik: risposta immediata, zero cambiata, massima fluidità in categoria OK e junior.",
      features: [
        {
          eyebrow: "Trasmissione",
          title: "Direct drive, zero cambiata",
          body: "Niente cambio sequenziale: la coppia passa dritta dal motore alle ruote. Meno inerzia, risposta più pulita e un kart più semplice da gestire dal via alla bandiera.",
        },
        {
          eyebrow: "Categorie",
          title: "OK, junior e oltre",
          body: "La configurazione Direct Drive è pensata per le categorie a presa diretta: adatta a chi cerca performance senza il carico del shifter, con lo stesso telaio Magik da gara.",
        },
        {
          eyebrow: "Pacchetto gara",
          title: "Stesso DNA Magik",
          body: "Stessa filosofia di scocca, carene e impianto frenante del programma Magik: preparato, assistito e sviluppato dal reparto corse in pista.",
        },
      ],
      highlights: [
        {
          label: "Trasmissione",
          body: "Direct drive: nessun selettore, presa diretta, feeling diretto in uscita di curva.",
        },
        {
          label: "Peso e risposta",
          body: "Meno masse e meno organi di trasmissione: il kart reagisce prima e resta più prevedibile.",
        },
        {
          label: "Assistenza",
          body: "Setup, ricambi e supporto gara MAGIK: dalla prima uscita al weekend di campionato.",
        },
      ],
      specsTitle: "Scheda tecnica",
      specsLead:
        "Configurazione Direct Drive del Kart Magik: trasmissione a presa diretta, pacchetto racing MAGIK.",
      homologation: "Configurazione Direct Drive",
      ficheDownload: "Download Fiche",
      specs: [
        { label: "Configurazione", value: "Direct Drive" },
        { label: "Trasmissione", value: "Diretta, senza cambio sequenziale" },
        { label: "Categorie", value: "OK / OKJ e categorie a trasmissione diretta" },
        { label: "Telaio", value: "Kart Magik" },
        { label: "Impianto frenante", value: "FREELINE" },
        { label: "Carenature", value: "KG con livrea MAGIK Reparto Corse" },
        { label: "Assistenza", value: "MAGIK Reparto Corse" },
      ],
    },
    lke: {
      title: "LKE Emilia-Romagna",
      eyebrow: "Rivenditore Ufficiale",
      lead: "MAGIK è rivenditore ufficiale in Emilia-Romagna del motore LKE, con supporto tecnico, ricambi disponibili e consulenza specializzata.",
      ctas: [
        { label: "Richiedi informazioni LKE", href: "/contact" },
        { label: "Ordina componenti", href: "/contact" },
        { label: "Parla con il reparto tecnico", href: "/contact" },
      ],
      points: [
        "Supporto tecnico diretto sul motore LKE",
        "Disponibilità ricambi e componenti originali",
        "Assistenza in pista per piloti LKE",
        "Consulenza setup e configurazione gara",
      ],
    },
    team: {
      title: "Racing Team",
      eyebrow: "Il Team",
      lead: "Un team tecnico, veloce e determinato. Dalla preparazione del kart all'assistenza in pista, ogni dettaglio è studiato per la performance.",
      imageAltCrew: "MAGIK Racing Team al lavoro",
      imageAltPilot: "Pilota MAGIK — casco e attrezzatura",
      founderEyebrow: "Il Fondatore",
      founderTitle: "Giuseppe “Peppo” Morcia",
      founderBody:
        "Dai titoli in Perù alla Formula del karting mondiale: la storia del co-fondatore di MAGIK, capo meccanico e coach di campioni dal 1994 a oggi.",
      founderCta: "Scopri la sua storia",
    },
    founder: {
      backLabel: "Racing Team",
      eyebrow: "Il Fondatore",
      kicker: "AKA Peppo",
      name: "Giuseppe Morcia",
      role: "Co-Fondatore · Capo Meccanico & Coach",
      emailCta: "Scrivi a Peppo",
      timelineEyebrow: "Carriera in pista",
      timelineTitle: "Trent'anni di titoli",
      timelineLead:
        "Ogni tappa è una gara vinta insieme a un pilota. Scorri la timeline per rivivere le tappe più importanti.",
      timelineHint: "Trascina il cursore o tocca un anno per cambiare tappa",
      timelinePrev: "Tappa precedente",
      timelineNext: "Tappa successiva",
      manufacturersTitle: "Marchi con cui ha lavorato",
      driversEyebrow: "Allievi in pista",
      driversTitle: "Piloti seguiti nel mondo",
      driversLead:
        "Decine di piloti internazionali affiancati in oltre trent'anni. Cerca un nome per scoprirlo.",
      driversSearchPlaceholder: "Cerca un pilota…",
      driversEmpty: "Nessun pilota trovato con questo nome.",
      driversCount: "{n} di {total} piloti",
      ctaEyebrow: "Il futuro",
      ctaTitle: "Nuove sfide, nuovi campioni",
      ctaBody:
        "Giuseppe Morcia continua a cercare nuovi piloti da portare ai vertici del karting mondiale con il team MAGIK.",
      ctaTeam: "Conosci il Team",
      ctaContact: "Contattaci",
    },
    gallery: {
      title: "Gallery",
      eyebrow: "In Pista",
      lead: "Immagini dal box, dalla pista e dai momenti che contano.",
      close: "Chiudi",
      prev: "Precedente",
      next: "Successiva",
    },
    blog: {
      title: "Blog Karting",
      eyebrow: "Guide & Insights",
      lead: "Guide pratiche su setup kart, motori LKE, assistenza in pista, costi del karting e categorie: quello che chiediamo e ci viene chiesto ogni weekend di gara.",
      categories: [
        "Gare",
        "Tecnica",
        "Setup",
        "Motori",
        "News Magik",
        "Consigli",
        "Dietro le Quinte",
      ],
      postNotFoundTitle: "Articolo non trovato",
      backToBlog: "Torna al blog",
      navBackLabel: "Blog",
      allCategories: "Tutti",
      featured: "In evidenza",
      readArticle: "Leggi l'articolo",
      readingTime: "min di lettura",
      empty: "Nessun articolo per questi filtri.",
      searchPlaceholder: "Cerca: setup, LKE, costi, categorie…",
      resultsCount: "articoli",
      resultsCountOne: "articolo",
      tocTitle: "In questo articolo",
      tagsTitle: "Argomenti",
      relatedTitle: "Continua a leggere",
      shareTitle: "Condividi",
      copyLink: "Copia link",
      copied: "Link copiato",
      faqTitle: "Domande frequenti",
      updatedOn: "Aggiornato il",
      prevPost: "Precedente",
      nextPost: "Successivo",
      ctaTitle: "Hai una domanda tecnica sul tuo kart?",
      ctaBody:
        "Setup, ricambi, motore LKE o assistenza in pista in Emilia-Romagna: parlane direttamente con il nostro reparto corse.",
      ctaButton: "Contatta il team",
    },
    faq: {
      title: "FAQ",
      eyebrow: "Domande Frequenti",
      lead: "Le risposte più richieste. Per tutto il resto, scrivici.",
    },
    contact: {
      title: "Contatti",
      eyebrow: "Parla con il Team",
      lead: "Assistenza tecnica, ricambi, motore LKE o una giornata in pista: dicci di cosa hai bisogno.",
      form: {
        firstName: "Nome",
        lastName: "Cognome",
        email: "Email",
        phone: "Telefono",
        type: "Tipo richiesta",
        message: "Messaggio",
        submit: "Invia richiesta",
        success: "Richiesta inviata. Ti rispondiamo a breve.",
        types: [
          "Assistenza tecnica",
          "Riparazione kart",
          "Ricambi",
          "Motore LKE",
          "Giornata di pista",
          "Gare",
          "Altro",
        ],
      },
      ctas: [
        "Prenota una consulenza tecnica",
        "Richiedi assistenza in pista",
        "Chiedi disponibilità ricambi",
      ],
      emailsTitle: "Scrivici via email",
      emails: [
        { label: "Informazioni generali", address: "posmaster@magikrepartocorse.it" },
        { label: "Giuseppe Morcia — Fondatore", address: "peppo.morcia@magikrepartocorse.it" },
        { label: "Contatto alternativo", address: "magik.racing@gmail.com" },
      ],
    },
    webCta: {
      eyebrow: "Web & Digital",
      title: "Vuoi anche tu un",
      titleAccent: "sito web?",
      lead: "Siti web e app su misura, veloci, curati nei dettagli come un kart da gara. Scrivici su WhatsApp: ti rispondiamo con un'idea concreta, non con un preventivo automatico.",
      button: "Scrivi su WhatsApp",
      note: "Risposta rapida · +39 351 992 5868",
    },
    footer: {
      desc: "Reparto corse ufficiale del marchio Magik. Preparazione, assistenza e gare con il Kart Magik.",
      quickLinks: "Link rapidi",
      services: "Servizi",
      contact: "Contatti",
      rights: "Tutti i diritti riservati.",
      email: "posmaster@magikrepartocorse.it",
    },
    partnership: {
      eyebrow: "Partner & Sponsor",
      title: "Partnership & Sponsor",
      lead: "I marchi e le realtà che corrono insieme a noi, dal motore al box fino al traguardo.",
      partnersTitle: "Partnership Tecniche",
      partnersLead: "I fornitori tecnici che rendono possibile ogni prestazione in pista.",
      sponsorsTitle: "I Nostri Sponsor",
      sponsorsLead: "Chi sostiene il progetto MAGIK Reparto Corse fuori dalla pista.",
      visitLabel: "Visita il sito",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      kart: "Kart Magik",
      lke: "LKE",
      team: "Racing Team",
      gallery: "Gallery",
      blog: "Blog",
      partnership: "Partnership",
      faq: "FAQ",
      contact: "Contact",
    },
    common: {
      discoverTeam: "Discover the Team",
      contactUs: "Contact Us",
      trackDay: "Book a Track Day",
      readMore: "Read more",
      requestInfo: "Request info",
      bookConsult: "Book a consultation",
      whatsapp: "WhatsApp",
      followInstagram: "Follow on Instagram",
      langPickTitle: "Choose your language",
      langPickSub: "Scegli la lingua · Elige tu idioma",
      backHome: "Back to home",
    },
    errors: {
      notFoundKicker: "404",
      notFoundTitle: "Off track",
      notFoundBody: "The page you’re looking for doesn’t exist or has been moved.",
      notFoundCta: "Back on track",
      brokeTitle: "Something went wrong",
      retry: "Retry",
      homeLink: "Home",
    },
    hero: {
      eyebrow: "Official Racing Department",
      title: "MAGIK Reparto Corse",
      subtitle: "Technical precision, racing performance and world-class ambition.",
      lead: "We prepare, support and race the Magik Kart at the highest technical level—on track, every session.",
      scroll: "Scroll",
    },
    home: {
      missionEyebrow: "Our Mission",
      missionTitle: "Win the World Championship with the Magik Kart.",
      missionLead:
        "A racing department built around one promise: to bring the Magik brand to the top step of the international podium.",
      statsTitle: "Numbers that race",
      ctaClosing:
        "From prep to the track: contact us for support, parts or a circuit day with the team.",
      missionImageAlt: "Magik Kart on track — MAGIK Reparto Corse",
      kartTeaserAlt: "Magik Kart — product view",
      raceNumberLabel: "Race number",
      stats: [
        { value: "100%", label: "Trackside Support" },
        { value: "24/7", label: "Tech Department" },
        { value: "1st", label: "World stage" },
        { value: "ER", label: "LKE Dealer" },
      ],
    },
    about: {
      title: "About",
      eyebrow: "About Us",
      lead: "MAGIK Reparto Corse is the official racing department of the Magik brand, dedicated to preparing, developing and racing the Magik Kart.",
      blocks: [
        {
          title: "Built to Compete",
          body: "We exist to bring the Magik Kart to the highest competitive level, with a technical structure built for performance.",
        },
        {
          title: "Method & Precision",
          body: "Every detail is engineered: chassis, engine, setup, support. We work like a top-tier team, from preparation to track.",
        },
        {
          title: "International presence",
          body: "We follow race calendars and circuits in Italy and abroad: travel logistics, grid-side assistance and field-proven race protocols.",
        },
      ],
    },
    services: {
      title: "Services",
      eyebrow: "What we do",
      lead: "From technical preparation to the track, MAGIK Reparto Corse follows every phase of performance.",
      items: [
        {
          icon: "🏁",
          title: "Magik Homologated Kart",
          body: "Race-ready Magik chassis, homologated and developed by our racing department.",
        },
        {
          icon: "🔧",
          title: "Go-Kart Repair",
          body: "Workshop specialised in repair and overhaul of competition karts.",
        },
        {
          icon: "⚙️",
          title: "Technical & Mechanical Service",
          body: "Diagnostics, maintenance and setup performed by professional mechanics.",
        },
        {
          icon: "🏎️",
          title: "Trackside Support",
          body: "We support drivers and teams during practice and races with full technical assistance.",
        },
        {
          icon: "👨‍🔧",
          title: "Track Day",
          body: "Spend a day on circuit alongside a professional team.",
        },
        {
          icon: "🧩",
          title: "Kart Parts Store",
          body: "Original kart components, wholesale and retail, with technical advice.",
        },
        {
          icon: "📦",
          title: "Wholesale & Retail",
          body: "Logistics and stock for drivers, teams and workshops.",
        },
        {
          icon: "🔥",
          title: "Official LKE Dealer",
          body: "Official reference for LKE engines in Emilia-Romagna.",
        },
        {
          icon: "🌍",
          title: "Race programmes & season",
          body: "Multi-round plans, telemetry and ops checklists: we support drivers and teams with continuity from the workshop to the chequered flag.",
        },
      ],
    },
    kart: {
      title: "Kart Magik MRK1",
      eyebrow: "The Chassis",
      lead: "The CIK-FIA homologated Magik MRK1 (007-CH-60) is the heart of our racing department: chrome-molybdenum steel frame, racing geometry and a complete track package.",
      hotspots: [
        {
          label: "Chassis",
          body: "Chrome-molybdenum steel frame, Ø 30 mm tubes, 1045 mm wheelbase.",
        },
        {
          label: "Bodywork",
          body: "KG 509-507 with dedicated mounts, included in the chassis package.",
        },
        { label: "Radiator", body: "High-efficiency cooling for long races." },
        {
          label: "Brake System",
          body: "FREELINE braking: powerful, modulable and consistent.",
        },
        { label: "Engine", body: "LKE configuration for maximum performance." },
        { label: "Race Setup", body: "Setup curated by the team, tuned to the circuit." },
      ],
      features: [
        {
          eyebrow: "KG bodywork kit",
          title: "KG 509-507 bodywork",
          body: "Included in the chassis purchase package: KG 509-507 bodywork with dedicated mounts.",
        },
        {
          eyebrow: "FREELINE brake system",
          title: "Race-ready braking",
          body: "The MRK1 runs a FREELINE brake system: racing-grade components for efficient, modulable and consistent braking in every track condition. Supplied accessories are FREELINE components.",
        },
        {
          eyebrow: "Racing frame",
          title: "Chrome-moly Ø 30 mm",
          body: "The frame is built in chrome-molybdenum steel with 30 mm diameter tubes: calibrated stiffness, direct response and handling on every circuit type, with a 1045 mm wheelbase and Ø 50 mm axle.",
        },
      ],
      highlights: [
        {
          label: "Axle",
          body: "50 mm diameter, for maximum stiffness and drive out of corners.",
        },
        {
          label: "Tube diameter",
          body: "Ø 30 mm tubes of equal diameter on both chassis rails and cross members.",
        },
        {
          label: "Wheelbase",
          body: "1045 mm — homologated geometry for the best handling on every type of circuit.",
        },
      ],
      specsTitle: "Technical sheet",
      specsLead: "Magik MRK1 data per CIK-FIA homologation 007-CH-60 (Group 2, 2025–2027).",
      homologation: "CIK-FIA Homologation 007-CH-60",
      ficheDownload: "Download Fiche",
      specs: [
        { label: "Model", value: "Magik MRK1" },
        { label: "Frame material", value: "Chrome-molybdenum steel" },
        { label: "Tubes Ø", value: "30 mm" },
        { label: "Wheelbase", value: "1045 mm" },
        { label: "Axle Ø", value: "50 mm" },
        { label: "Brake system", value: "FREELINE" },
        { label: "Supplied accessories", value: "FREELINE components" },
        { label: "Bodywork", value: "KG 509-507 with dedicated mounts" },
      ],
    },
    kartSelect: {
      eyebrow: "Kart Magik",
      title: "Choose your configuration",
      lead: "Two characters, the same Magik DNA. Shifter for sequential gears, Direct Drive for a straight drivetrain.",
      shifterName: "Shifter",
      shifterTag: "Sequential gearbox",
      shifterAlt: "Magik Kart Shifter MRK1",
      directName: "Direct Drive",
      directTag: "Direct drivetrain",
      directAlt: "Magik Kart Direct Drive",
      backToSelect: "All configurations",
      chooseChassis: "Choose the chassis",
      detailsTitle: "Details",
      detailsLead:
        "Build details of the selected spec: frame, brakes, drivetrain and racing components.",
    },
    kartDirect: {
      title: "Magik Kart Direct Drive",
      eyebrow: "Direct Drive",
      lead: "The Magik Kart in direct-drive spec: instant response, no gearshift, maximum fluidity in OK and junior classes.",
      features: [
        {
          eyebrow: "Drivetrain",
          title: "Direct drive, no gearshift",
          body: "No sequential gearbox: torque goes straight from the engine to the wheels. Less inertia, a cleaner response and a kart that is simpler to manage from lights out to the flag.",
        },
        {
          eyebrow: "Classes",
          title: "OK, junior and beyond",
          body: "Direct Drive is built for direct-drive classes: performance without the shifter workload, on the same Magik race chassis.",
        },
        {
          eyebrow: "Race package",
          title: "The same Magik DNA",
          body: "The same chassis philosophy, bodywork and braking as the Magik programme: prepared, supported and developed by the racing department on track.",
        },
      ],
      highlights: [
        {
          label: "Drivetrain",
          body: "Direct drive: no gear selector, straight drivetrain, direct feel out of corners.",
        },
        {
          label: "Weight and response",
          body: "Fewer rotating parts: the kart reacts sooner and stays more predictable.",
        },
        {
          label: "Support",
          body: "MAGIK setup, parts and race support: from the first outing to championship weekends.",
        },
      ],
      specsTitle: "Technical sheet",
      specsLead:
        "Magik Kart Direct Drive spec: straight drivetrain, MAGIK racing package.",
      homologation: "Direct Drive configuration",
      ficheDownload: "Download Fiche",
      specs: [
        { label: "Configuration", value: "Direct Drive" },
        { label: "Drivetrain", value: "Direct, no sequential gearbox" },
        { label: "Classes", value: "OK / OKJ and direct-drive categories" },
        { label: "Chassis", value: "Magik Kart" },
        { label: "Brake system", value: "FREELINE" },
        { label: "Bodywork", value: "KG with MAGIK Reparto Corse livery" },
        { label: "Support", value: "MAGIK Reparto Corse" },
      ],
    },
    lke: {
      title: "LKE Emilia-Romagna",
      eyebrow: "Official Dealer",
      lead: "MAGIK is the official LKE engine dealer in Emilia-Romagna, with technical support, parts availability and specialised consulting.",
      ctas: [
        { label: "Request LKE info", href: "/contact" },
        { label: "Order components", href: "/contact" },
        { label: "Talk to the tech department", href: "/contact" },
      ],
      points: [
        "Direct technical support on LKE engines",
        "Original parts and components in stock",
        "Trackside support for LKE drivers",
        "Setup and race configuration consulting",
      ],
    },
    team: {
      title: "Racing Team",
      eyebrow: "The Team",
      lead: "A technical, fast and determined team. From kart preparation to trackside support, every detail is engineered for performance.",
      imageAltCrew: "MAGIK Racing Team at work",
      imageAltPilot: "MAGIK driver — helmet and gear",
      founderEyebrow: "The Founder",
      founderTitle: "Giuseppe “Peppo” Morcia",
      founderBody:
        "From titles in Peru to world karting's top step: the story of MAGIK's co-founder, lead mechanic and coach of champions since 1994.",
      founderCta: "Discover his story",
    },
    founder: {
      backLabel: "Racing Team",
      eyebrow: "The Founder",
      kicker: "AKA Peppo",
      name: "Giuseppe Morcia",
      role: "Co-Founder · Lead Mechanic & Coach",
      emailCta: "Email Peppo",
      timelineEyebrow: "Career on track",
      timelineTitle: "Thirty years of titles",
      timelineLead:
        "Every stop on this track is a race won together with a driver. Scrub the timeline to relive the milestones.",
      timelineHint: "Drag the slider or tap a year to change milestone",
      timelinePrev: "Previous milestone",
      timelineNext: "Next milestone",
      manufacturersTitle: "Brands he's worked with",
      driversEyebrow: "Drivers coached",
      driversTitle: "Drivers coached worldwide",
      driversLead:
        "Dozens of international drivers supported over thirty-plus years. Search a name to find it.",
      driversSearchPlaceholder: "Search a driver…",
      driversEmpty: "No driver found with that name.",
      driversCount: "{n} of {total} drivers",
      ctaEyebrow: "What's next",
      ctaTitle: "New challenges, new champions",
      ctaBody:
        "Giuseppe Morcia keeps looking for the next drivers to bring to the top of world karting with the MAGIK team.",
      ctaTeam: "Meet the Team",
      ctaContact: "Contact Us",
    },
    gallery: {
      title: "Gallery",
      eyebrow: "On Track",
      lead: "Images from the pit, the track and the moments that matter.",
      close: "Close",
      prev: "Previous",
      next: "Next",
    },
    blog: {
      title: "Karting Blog",
      eyebrow: "Guides & Insights",
      lead: "Practical guides on kart setup, LKE engines, trackside support, karting costs and classes: what we ask and get asked every race weekend.",
      categories: [
        "Races",
        "Technique",
        "Setup",
        "Engines",
        "Magik News",
        "Tips",
        "Behind the Scenes",
      ],
      postNotFoundTitle: "Post not found",
      backToBlog: "Back to blog",
      navBackLabel: "Blog",
      allCategories: "All",
      featured: "Featured",
      readArticle: "Read the article",
      readingTime: "min read",
      empty: "No articles match these filters.",
      searchPlaceholder: "Search: setup, LKE, costs, classes…",
      resultsCount: "articles",
      resultsCountOne: "article",
      tocTitle: "In this article",
      tagsTitle: "Topics",
      relatedTitle: "Keep reading",
      shareTitle: "Share",
      copyLink: "Copy link",
      copied: "Link copied",
      faqTitle: "Frequently asked",
      updatedOn: "Updated on",
      prevPost: "Previous",
      nextPost: "Next",
      ctaTitle: "Got a technical question about your kart?",
      ctaBody:
        "Setup, parts, LKE engine or trackside support in Emilia-Romagna: talk directly to our racing department.",
      ctaButton: "Contact the team",
    },
    faq: {
      title: "FAQ",
      eyebrow: "Frequently Asked",
      lead: "The most asked questions. For everything else, write to us.",
    },
    contact: {
      title: "Contact",
      eyebrow: "Talk to the Team",
      lead: "Technical support, parts, LKE engines or a track day: tell us what you need.",
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone",
        type: "Request type",
        message: "Message",
        submit: "Send request",
        success: "Request sent. We'll get back to you shortly.",
        types: [
          "Technical support",
          "Kart repair",
          "Spare parts",
          "LKE engine",
          "Track day",
          "Races",
          "Other",
        ],
      },
      ctas: [
        "Book a technical consultation",
        "Request trackside support",
        "Check parts availability",
      ],
      emailsTitle: "Email us",
      emails: [
        { label: "General inquiries", address: "posmaster@magikrepartocorse.it" },
        { label: "Giuseppe Morcia — Founder", address: "peppo.morcia@magikrepartocorse.it" },
        { label: "Alternative contact", address: "magik.racing@gmail.com" },
      ],
    },
    webCta: {
      eyebrow: "Web & Digital",
      title: "Do you want a",
      titleAccent: "website too?",
      lead: "Custom websites and apps — fast, detailed and tuned like a race kart. Message us on WhatsApp: you'll get a concrete idea back, not an automated quote.",
      button: "Message on WhatsApp",
      note: "Fast reply · +39 351 992 5868",
    },
    footer: {
      desc: "Official racing department of the Magik brand. Preparation, support and racing with the Magik Kart.",
      quickLinks: "Quick links",
      services: "Services",
      contact: "Contact",
      rights: "All rights reserved.",
      email: "posmaster@magikrepartocorse.it",
    },
    partnership: {
      eyebrow: "Partners & Sponsors",
      title: "Partnership & Sponsors",
      lead: "The brands and businesses racing alongside us, from the engine to the pit box to the chequered flag.",
      partnersTitle: "Technical Partnerships",
      partnersLead: "The technical suppliers that make every on-track performance possible.",
      sponsorsTitle: "Our Sponsors",
      sponsorsLead: "The businesses supporting the MAGIK Reparto Corse project off track.",
      visitLabel: "Visit website",
    },
  },
  es: {
    nav: {
      home: "Home",
      about: "Quiénes somos",
      services: "Servicios",
      kart: "Kart Magik",
      lke: "LKE",
      team: "Racing Team",
      gallery: "Galería",
      blog: "Blog",
      partnership: "Partnership",
      faq: "FAQ",
      contact: "Contacto",
    },
    common: {
      discoverTeam: "Descubre el equipo",
      contactUs: "Contáctanos",
      trackDay: "Vive un día de pista",
      readMore: "Saber más",
      requestInfo: "Pedir información",
      bookConsult: "Reserva una consulta",
      whatsapp: "WhatsApp",
      followInstagram: "Síguenos en Instagram",
      langPickTitle: "Elige tu idioma",
      langPickSub: "Scegli la lingua · Choose your language",
      backHome: "Volver al inicio",
    },
    errors: {
      notFoundKicker: "404",
      notFoundTitle: "Fuera de pista",
      notFoundBody: "La página que buscas no existe o se ha movido.",
      notFoundCta: "Volver a la pista",
      brokeTitle: "Algo no va bien",
      retry: "Reintentar",
      homeLink: "Home",
    },
    hero: {
      eyebrow: "Departamento de competición oficial",
      title: "MAGIK Reparto Corse",
      subtitle: "Técnica, velocidad y ambición mundial.",
      lead: "Preparamos, asistimos y llevamos a pista el Kart Magik: máximo nivel técnico y soporte de carrera.",
      scroll: "Scroll",
    },
    home: {
      missionEyebrow: "La misión",
      missionTitle: "Ganar el Mundial con el Kart Magik.",
      missionLead:
        "Un departamento de competición construido en torno a una sola promesa: llevar la marca Magik al peldaño más alto del podio internacional.",
      statsTitle: "Números que corren",
      ctaClosing:
        "De la preparación a la pista: contáctanos para asistencia, recambios o un día en circuito con el equipo.",
      missionImageAlt: "Kart Magik en pista — MAGIK Reparto Corse",
      kartTeaserAlt: "Kart Magik — vista de producto",
      raceNumberLabel: "Número de carrera",
      stats: [
        { value: "100%", label: "Asistencia en pista" },
        { value: "24/7", label: "Departamento técnico" },
        { value: "1.º", label: "Top mundial" },
        { value: "ER", label: "Distribuidor LKE" },
      ],
    },
    about: {
      title: "Quiénes somos",
      eyebrow: "About",
      lead: "MAGIK Reparto Corse es el departamento de competición oficial de la marca Magik, dedicado a la preparación, el desarrollo y la asistencia en carrera del Kart Magik.",
      blocks: [
        {
          title: "Nacidos para competir",
          body: "Existimos para llevar el Kart Magik al máximo nivel competitivo, con una estructura técnica construida para el rendimiento.",
        },
        {
          title: "Método y precisión",
          body: "Cada detalle está estudiado: chasis, motor, setup, asistencia. Trabajamos como un equipo de alta categoría, de la preparación a la pista.",
        },
        {
          title: "Presencia internacional",
          body: "Seguimos calendarios y circuitos en Italia y en el extranjero: logística de traslado, asistencia en parrilla y protocolos de carrera consolidados en pista.",
        },
      ],
    },
    services: {
      title: "Servicios",
      eyebrow: "Qué hacemos",
      lead: "De la preparación técnica a la pista, MAGIK Reparto Corse sigue cada fase del rendimiento.",
      items: [
        {
          icon: "🏁",
          title: "Kart Magik homologado",
          body: "Chasis Magik listo para correr, homologado y desarrollado por nuestro departamento de competición.",
        },
        {
          icon: "🔧",
          title: "Reparación de go-kart",
          body: "Taller especializado en reparación y revisión de go-kart de competición.",
        },
        {
          icon: "⚙️",
          title: "Asistencia técnica y mecánica",
          body: "Diagnóstico, mantenimiento y setup realizados por mecánicos profesionales.",
        },
        {
          icon: "🏎️",
          title: "Asistencia en pista",
          body: "Acompañamos a pilotos y equipos en entrenamientos y carreras con soporte técnico completo.",
        },
        {
          icon: "👨‍🔧",
          title: "Día de pista",
          body: "Vive un día en circuito junto a un equipo profesional.",
        },
        {
          icon: "🧩",
          title: "Punto de venta de recambios",
          body: "Componentes kart originales, al por mayor y al detalle, con asesoramiento técnico.",
        },
        {
          icon: "📦",
          title: "Venta al por mayor y al detalle",
          body: "Logística y disponibilidad para pilotos, equipos y talleres.",
        },
        {
          icon: "🔥",
          title: "Distribuidor oficial LKE",
          body: "Referente oficial del motor LKE en Emilia-Romaña.",
        },
        {
          icon: "🌍",
          title: "Programas de carrera y temporada",
          body: "Planes de varios rounds, telemetría y checklists operativos: acompañamos a pilotos y equipos con continuidad del taller a la bandera a cuadros.",
        },
      ],
    },
    kart: {
      title: "Kart Magik MRK1",
      eyebrow: "El chasis",
      lead: "El Magik MRK1 homologado CIK-FIA (007-CH-60) es el corazón de nuestro departamento de competición: bastidor de acero cromo-molibdeno, geometría racing y paquete completo para la pista.",
      hotspots: [
        {
          label: "Chasis",
          body: "Bastidor de acero cromo-molibdeno, tubos Ø 30 mm, batalla 1045 mm.",
        },
        {
          label: "Carenados",
          body: "KG 509-507 con soportes dedicados, incluidos en el paquete de compra.",
        },
        { label: "Radiador", body: "Refrigeración de alta eficiencia para las carreras largas." },
        {
          label: "Sistema de frenos",
          body: "Sistema FREELINE: frenada potente, modulable y constante.",
        },
        { label: "Motor", body: "Configuración LKE para máximo rendimiento." },
        { label: "Setup de carrera", body: "Puesta a punto del equipo, calibrada al circuito." },
      ],
      features: [
        {
          eyebrow: "Kit de carenados KG",
          title: "Carenados KG 509-507",
          body: "Incluidos en el paquete de compra del chasis: carenados KG 509-507 con los soportes dedicados.",
        },
        {
          eyebrow: "Sistema de frenos FREELINE",
          title: "Frenada de carrera",
          body: "El MRK1 monta el sistema de frenos FREELINE: componentes de calidad racing para una frenada eficiente, modulable y constante en cualquier condición de pista. Los accesorios suministrados son componentes FREELINE.",
        },
        {
          eyebrow: "Bastidor racing",
          title: "Cromo-molibdeno Ø 30 mm",
          body: "El bastidor está fabricado en acero cromo-molibdeno con tubos de 30 mm de diámetro: rigidez calibrada, respuesta directa y handling en todo tipo de circuito, con batalla de 1045 mm y eje Ø 50 mm.",
        },
      ],
      highlights: [
        {
          label: "Eje",
          body: "Diámetro 50 mm, para máxima rigidez y feeling a la salida de curva.",
        },
        {
          label: "Diámetro de tubos",
          body: "Tubo Ø 30 mm de igual diámetro en largueros y travesaños del bastidor.",
        },
        {
          label: "Batalla",
          body: "1045 mm — geometría homologada para el mejor handling en todo tipo de circuito.",
        },
      ],
      specsTitle: "Ficha técnica",
      specsLead: "Datos del Magik MRK1 según homologación CIK-FIA 007-CH-60 (Group 2, 2025–2027).",
      homologation: "Homologación CIK-FIA 007-CH-60",
      ficheDownload: "Descargar ficha",
      specs: [
        { label: "Modelo", value: "Magik MRK1" },
        { label: "Material del bastidor", value: "Acero cromo-molibdeno" },
        { label: "Tubos Ø", value: "30 mm" },
        { label: "Batalla", value: "1045 mm" },
        { label: "Eje Ø", value: "50 mm" },
        { label: "Sistema de frenos", value: "FREELINE" },
        { label: "Accesorios suministrados", value: "Componentes FREELINE" },
        { label: "Carenados", value: "KG 509-507 con soportes dedicados" },
      ],
    },
    kartSelect: {
      eyebrow: "Kart Magik",
      title: "Elige la configuración",
      lead: "Dos almas, el mismo ADN Magik. Shifter para el cambio secuencial, Direct Drive para la transmisión directa.",
      shifterName: "Shifter",
      shifterTag: "Cambio secuencial",
      shifterAlt: "Kart Magik Shifter MRK1",
      directName: "Direct Drive",
      directTag: "Transmisión directa",
      directAlt: "Kart Magik Direct Drive",
      backToSelect: "Todas las configuraciones",
      chooseChassis: "Elige el chasis",
      detailsTitle: "Detalles",
      detailsLead:
        "Detalles de construcción de la configuración seleccionada: bastidor, frenos, transmisión y componentes racing.",
    },
    kartDirect: {
      title: "Kart Magik Direct Drive",
      eyebrow: "Direct Drive",
      lead: "La configuración de transmisión directa del Kart Magik: respuesta inmediata, sin cambios, máxima fluidez en categoría OK y junior.",
      features: [
        {
          eyebrow: "Transmisión",
          title: "Direct drive, sin cambios",
          body: "Sin cambio secuencial: el par va directo del motor a las ruedas. Menos inercia, respuesta más limpia y un kart más sencillo de gestionar desde la salida hasta la bandera.",
        },
        {
          eyebrow: "Categorías",
          title: "OK, junior y más",
          body: "La configuración Direct Drive está pensada para las categorías de toma directa: rendimiento sin la carga del shifter, con el mismo chasis Magik de carrera.",
        },
        {
          eyebrow: "Paquete de carrera",
          title: "El mismo ADN Magik",
          body: "La misma filosofía de bastidor, carenados y sistema de frenos del programa Magik: preparado, asistido y desarrollado por el departamento de competición en pista.",
        },
      ],
      highlights: [
        {
          label: "Transmisión",
          body: "Direct drive: sin selector, toma directa, feeling directo a la salida de curva.",
        },
        {
          label: "Peso y respuesta",
          body: "Menos masas y menos órganos de transmisión: el kart reacciona antes y se mantiene más predecible.",
        },
        {
          label: "Asistencia",
          body: "Setup, recambios y soporte de carrera MAGIK: desde la primera salida hasta el fin de semana de campeonato.",
        },
      ],
      specsTitle: "Ficha técnica",
      specsLead:
        "Configuración Direct Drive del Kart Magik: transmisión de toma directa, paquete racing MAGIK.",
      homologation: "Configuración Direct Drive",
      ficheDownload: "Descargar ficha",
      specs: [
        { label: "Configuración", value: "Direct Drive" },
        { label: "Transmisión", value: "Directa, sin cambio secuencial" },
        { label: "Categorías", value: "OK / OKJ y categorías de transmisión directa" },
        { label: "Chasis", value: "Kart Magik" },
        { label: "Sistema de frenos", value: "FREELINE" },
        { label: "Carenados", value: "KG con librea MAGIK Reparto Corse" },
        { label: "Asistencia", value: "MAGIK Reparto Corse" },
      ],
    },
    lke: {
      title: "LKE Emilia-Romaña",
      eyebrow: "Distribuidor oficial",
      lead: "MAGIK es distribuidor oficial en Emilia-Romaña del motor LKE, con soporte técnico, recambios disponibles y asesoramiento especializado.",
      ctas: [
        { label: "Pedir información LKE", href: "/contact" },
        { label: "Pedir componentes", href: "/contact" },
        { label: "Habla con el departamento técnico", href: "/contact" },
      ],
      points: [
        "Soporte técnico directo sobre el motor LKE",
        "Disponibilidad de recambios y componentes originales",
        "Asistencia en pista para pilotos LKE",
        "Asesoramiento de setup y configuración de carrera",
      ],
    },
    team: {
      title: "Racing Team",
      eyebrow: "El equipo",
      lead: "Un equipo técnico, rápido y determinado. De la preparación del kart a la asistencia en pista, cada detalle está estudiado para el rendimiento.",
      imageAltCrew: "MAGIK Racing Team en el trabajo",
      imageAltPilot: "Piloto MAGIK — casco y equipación",
      founderEyebrow: "El fundador",
      founderTitle: "Giuseppe “Peppo” Morcia",
      founderBody:
        "De los títulos en Perú a la élite del karting mundial: la historia del cofundador de MAGIK, jefe de mecánicos y coach de campeones desde 1994.",
      founderCta: "Descubre su historia",
    },
    founder: {
      backLabel: "Racing Team",
      eyebrow: "El fundador",
      kicker: "AKA Peppo",
      name: "Giuseppe Morcia",
      role: "Cofundador · Jefe de mecánicos y coach",
      emailCta: "Escribe a Peppo",
      timelineEyebrow: "Carrera en pista",
      timelineTitle: "Treinta años de títulos",
      timelineLead:
        "Cada etapa es una carrera ganada junto a un piloto. Recorre la línea de tiempo para revivir los hitos más importantes.",
      timelineHint: "Arrastra el cursor o toca un año para cambiar de etapa",
      timelinePrev: "Etapa anterior",
      timelineNext: "Etapa siguiente",
      manufacturersTitle: "Marcas con las que ha trabajado",
      driversEyebrow: "Alumnos en pista",
      driversTitle: "Pilotos seguidos en el mundo",
      driversLead:
        "Decenas de pilotos internacionales acompañados en más de treinta años. Busca un nombre para encontrarlo.",
      driversSearchPlaceholder: "Busca un piloto…",
      driversEmpty: "Ningún piloto encontrado con ese nombre.",
      driversCount: "{n} de {total} pilotos",
      ctaEyebrow: "El futuro",
      ctaTitle: "Nuevos retos, nuevos campeones",
      ctaBody:
        "Giuseppe Morcia sigue buscando nuevos pilotos para llevarlos a lo más alto del karting mundial con el equipo MAGIK.",
      ctaTeam: "Conoce al equipo",
      ctaContact: "Contáctanos",
    },
    gallery: {
      title: "Galería",
      eyebrow: "En pista",
      lead: "Imágenes del box, de la pista y de los momentos que cuentan.",
      close: "Cerrar",
      prev: "Anterior",
      next: "Siguiente",
    },
    blog: {
      title: "Blog de karting",
      eyebrow: "Guías e insights",
      lead: "Guías prácticas sobre setup de kart, motores LKE, asistencia en pista, costes del karting y categorías: lo que preguntamos y nos preguntan cada fin de semana de carrera.",
      categories: [
        "Carreras",
        "Técnica",
        "Setup",
        "Motores",
        "News Magik",
        "Consejos",
        "Entre bastidores",
      ],
      postNotFoundTitle: "Artículo no encontrado",
      backToBlog: "Volver al blog",
      navBackLabel: "Blog",
      allCategories: "Todos",
      featured: "Destacado",
      readArticle: "Leer el artículo",
      readingTime: "min de lectura",
      empty: "Ningún artículo para estos filtros.",
      searchPlaceholder: "Busca: setup, LKE, costes, categorías…",
      resultsCount: "artículos",
      resultsCountOne: "artículo",
      tocTitle: "En este artículo",
      tagsTitle: "Temas",
      relatedTitle: "Sigue leyendo",
      shareTitle: "Compartir",
      copyLink: "Copiar enlace",
      copied: "Enlace copiado",
      faqTitle: "Preguntas frecuentes",
      updatedOn: "Actualizado el",
      prevPost: "Anterior",
      nextPost: "Siguiente",
      ctaTitle: "¿Tienes una pregunta técnica sobre tu kart?",
      ctaBody:
        "Setup, recambios, motor LKE o asistencia en pista en Emilia-Romaña: háblalo directamente con nuestro departamento de competición.",
      ctaButton: "Contacta al equipo",
    },
    faq: {
      title: "FAQ",
      eyebrow: "Preguntas frecuentes",
      lead: "Las respuestas más pedidas. Para todo lo demás, escríbenos.",
    },
    contact: {
      title: "Contacto",
      eyebrow: "Habla con el equipo",
      lead: "Asistencia técnica, recambios, motor LKE o un día de pista: dinos qué necesitas.",
      form: {
        firstName: "Nombre",
        lastName: "Apellidos",
        email: "Email",
        phone: "Teléfono",
        type: "Tipo de solicitud",
        message: "Mensaje",
        submit: "Enviar solicitud",
        success: "Solicitud enviada. Te respondemos en breve.",
        types: [
          "Asistencia técnica",
          "Reparación de kart",
          "Recambios",
          "Motor LKE",
          "Día de pista",
          "Carreras",
          "Otro",
        ],
      },
      ctas: [
        "Reserva una consulta técnica",
        "Pide asistencia en pista",
        "Consulta disponibilidad de recambios",
      ],
      emailsTitle: "Escríbenos por email",
      emails: [
        { label: "Información general", address: "posmaster@magikrepartocorse.it" },
        { label: "Giuseppe Morcia — Fundador", address: "peppo.morcia@magikrepartocorse.it" },
        { label: "Contacto alternativo", address: "magik.racing@gmail.com" },
      ],
    },
    webCta: {
      eyebrow: "Web & Digital",
      title: "¿Quieres también un",
      titleAccent: "sitio web?",
      lead: "Sitios web y apps a medida, rápidos, cuidados en los detalles como un kart de carrera. Escríbenos por WhatsApp: te respondemos con una idea concreta, no con un presupuesto automático.",
      button: "Escribe por WhatsApp",
      note: "Respuesta rápida · +39 351 992 5868",
    },
    footer: {
      desc: "Departamento de competición oficial de la marca Magik. Preparación, asistencia y carreras con el Kart Magik.",
      quickLinks: "Enlaces rápidos",
      services: "Servicios",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
      email: "posmaster@magikrepartocorse.it",
    },
    partnership: {
      eyebrow: "Partners y sponsors",
      title: "Partnership y sponsors",
      lead: "Las marcas y las realidades que corren con nosotros, del motor al box hasta la meta.",
      partnersTitle: "Partnerships técnicas",
      partnersLead: "Los proveedores técnicos que hacen posible cada rendimiento en pista.",
      sponsorsTitle: "Nuestros sponsors",
      sponsorsLead: "Quienes apoyan el proyecto MAGIK Reparto Corse fuera de la pista.",
      visitLabel: "Visitar el sitio",
    },
  },
};
