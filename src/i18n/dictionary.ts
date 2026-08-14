export type Lang = "it" | "en";

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
      langPickSub: "Choose your language",
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
      title: "Blog",
      eyebrow: "Insights",
      lead: "News, tecnica e dietro le quinte di MAGIK Reparto Corse.",
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
      langPickSub: "Scegli la lingua",
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
      title: "Blog",
      eyebrow: "Insights",
      lead: "News, technique and behind the scenes of MAGIK Reparto Corse.",
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
};
