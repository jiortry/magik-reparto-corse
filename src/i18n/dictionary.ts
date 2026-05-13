export type Lang = "it" | "en";

export type Dict = {
  nav: Record<string, string>;
  common: Record<string, string>;
  hero: { eyebrow: string; title: string; subtitle: string; lead: string; scroll: string };
  home: {
    missionEyebrow: string; missionTitle: string; missionLead: string; statsTitle: string;
    ctaClosing: string;
    stats: { value: string; label: string }[];
  };
  about: { title: string; eyebrow: string; lead: string; blocks: { title: string; body: string }[] };
  services: { title: string; eyebrow: string; lead: string; items: { icon: string; title: string; body: string }[] };
  kart: { title: string; eyebrow: string; lead: string; hotspots: { label: string; body: string }[] };
  lke: { title: string; eyebrow: string; lead: string; ctas: { label: string; href: string }[]; points: string[] };
  team: { title: string; eyebrow: string; lead: string };
  gallery: { title: string; eyebrow: string; lead: string; close: string; prev: string; next: string };
  blog: { title: string; eyebrow: string; lead: string; categories: string[] };
  faq: { title: string; eyebrow: string; lead: string };
  contact: {
    title: string; eyebrow: string; lead: string;
    form: {
      firstName: string; lastName: string; email: string; phone: string; type: string; message: string;
      submit: string; success: string; types: string[];
    };
    ctas: string[];
  };
  footer: { desc: string; quickLinks: string; services: string; contact: string; rights: string };
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
    hero: {
      eyebrow: "Reparto Corse Ufficiale",
      title: "MAGIK Reparto Corse",
      subtitle: "Tecnica, velocità e ambizione mondiale.",
      lead:
        "Prepariamo, assistiamo e portiamo in pista il Kart Magik: massimo livello tecnico e supporto gara.",
      scroll: "Scroll",
    },
    home: {
      missionEyebrow: "La Missione",
      missionTitle: "Vincere i Mondiali con il Kart Magik.",
      missionLead:
        "Un reparto corse costruito attorno a una sola promessa: portare il marchio Magik sul gradino più alto del podio internazionale.",
      statsTitle: "Numeri che corrono",
      ctaClosing: "Un solo obiettivo: vincere i Mondiali con il Kart Magik.",
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
      lead:
        "MAGIK Reparto Corse è il reparto corse ufficiale del marchio Magik, dedicato alla preparazione, allo sviluppo e all'assistenza in gara del Kart Magik.",
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
          title: "Visione Mondiale",
          body: "Il nostro obiettivo è chiaro: vincere i Mondiali con il Kart Magik. Una rotta tracciata, un team determinato, una sola direzione.",
        },
      ],
    },
    services: {
      title: "Servizi",
      eyebrow: "Cosa facciamo",
      lead:
        "Dalla preparazione tecnica alla pista, MAGIK Reparto Corse segue ogni fase della performance.",
      items: [
        { icon: "🏁", title: "Kart Magik Omologato", body: "Telaio Magik pronto-gara, omologato e sviluppato dal nostro reparto corse." },
        { icon: "🔧", title: "Riparazione Go-Kart", body: "Officina specializzata in riparazione e revisione di go-kart da competizione." },
        { icon: "⚙️", title: "Assistenza Tecnica & Meccanica", body: "Diagnosi, manutenzione e setup eseguiti da meccanici professionisti." },
        { icon: "🏎️", title: "Assistenza in Pista", body: "Affianchiamo piloti e team durante prove e gare con supporto tecnico completo." },
        { icon: "👨‍🔧", title: "Giornata di Pista", body: "Vivi una giornata in circuito affiancato da un team professionale." },
        { icon: "🧩", title: "Punto Vendita Ricambi", body: "Componenti kart originali, all'ingrosso e al dettaglio, con consulenza tecnica." },
        { icon: "📦", title: "Vendita Ingrosso & Dettaglio", body: "Logistica e disponibilità per piloti, team e officine." },
        { icon: "🔥", title: "Rivenditore Ufficiale LKE", body: "Riferimento ufficiale per il motore LKE in Emilia-Romagna." },
        { icon: "🌍", title: "Obiettivo Mondiale", body: "Vincere con il Kart Magik: la missione che guida ogni nostra scelta." },
      ],
    },
    kart: {
      title: "Kart Magik",
      eyebrow: "Il Telaio",
      lead:
        "Il Kart Magik omologato è il cuore del nostro reparto corse: un telaio sviluppato per la velocità, la precisione e l'affidabilità in gara.",
      hotspots: [
        { label: "Telaio", body: "Geometria racing, rigidità calibrata per la trazione." },
        { label: "Carene", body: "Aerodinamica e linee taglienti, look motorsport." },
        { label: "Radiatore", body: "Raffreddamento ad alta efficienza per le gare lunghe." },
        { label: "Impianto Frenante", body: "Frenata potente e modulabile, calibrata in pista." },
        { label: "Motore", body: "Configurazione LKE per massima performance." },
        { label: "Setup Gara", body: "Assetto curato dal team, tarato sul circuito." },
      ],
    },
    lke: {
      title: "LKE Emilia-Romagna",
      eyebrow: "Rivenditore Ufficiale",
      lead:
        "MAGIK è rivenditore ufficiale in Emilia-Romagna del motore LKE, con supporto tecnico, ricambi disponibili e consulenza specializzata.",
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
      lead:
        "Un team tecnico, veloce e determinato. Dalla preparazione del kart all'assistenza in pista, ogni dettaglio è studiato per vincere.",
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
      categories: ["Gare", "Tecnica", "Setup", "Motori", "News Magik", "Consigli", "Dietro le Quinte"],
    },
    faq: {
      title: "FAQ",
      eyebrow: "Domande Frequenti",
      lead: "Le risposte più richieste. Per tutto il resto, scrivici.",
    },
    contact: {
      title: "Contatti",
      eyebrow: "Parla con il Team",
      lead:
        "Assistenza tecnica, ricambi, motore LKE o una giornata in pista: dicci di cosa hai bisogno.",
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
    },
    footer: {
      desc: "Reparto corse ufficiale del marchio Magik. Preparazione, assistenza e gare con il Kart Magik.",
      quickLinks: "Link rapidi",
      services: "Servizi",
      contact: "Contatti",
      rights: "Tutti i diritti riservati.",
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
    hero: {
      eyebrow: "Official Racing Department",
      title: "MAGIK Reparto Corse",
      subtitle: "Technical precision, racing performance and world-class ambition.",
      lead:
        "We prepare, support and race the Magik Kart at the highest technical level—on track, every session.",
      scroll: "Scroll",
    },
    home: {
      missionEyebrow: "Our Mission",
      missionTitle: "Win the World Championship with the Magik Kart.",
      missionLead:
        "A racing department built around one promise: to bring the Magik brand to the top step of the international podium.",
      statsTitle: "Numbers that race",
      ctaClosing: "One goal: win the World Championship with the Magik Kart.",
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
      lead:
        "MAGIK Reparto Corse is the official racing department of the Magik brand, dedicated to preparing, developing and racing the Magik Kart.",
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
          title: "World-Class Vision",
          body: "Our goal is clear: win the World Championship with the Magik Kart. One direction, one team, one mission.",
        },
      ],
    },
    services: {
      title: "Services",
      eyebrow: "What we do",
      lead:
        "From technical preparation to the track, MAGIK Reparto Corse follows every phase of performance.",
      items: [
        { icon: "🏁", title: "Magik Homologated Kart", body: "Race-ready Magik chassis, homologated and developed by our racing department." },
        { icon: "🔧", title: "Go-Kart Repair", body: "Workshop specialised in repair and overhaul of competition karts." },
        { icon: "⚙️", title: "Technical & Mechanical Service", body: "Diagnostics, maintenance and setup performed by professional mechanics." },
        { icon: "🏎️", title: "Trackside Support", body: "We support drivers and teams during practice and races with full technical assistance." },
        { icon: "👨‍🔧", title: "Track Day", body: "Spend a day on circuit alongside a professional team." },
        { icon: "🧩", title: "Kart Parts Store", body: "Original kart components, wholesale and retail, with technical advice." },
        { icon: "📦", title: "Wholesale & Retail", body: "Logistics and stock for drivers, teams and workshops." },
        { icon: "🔥", title: "Official LKE Dealer", body: "Official reference for LKE engines in Emilia-Romagna." },
        { icon: "🌍", title: "World Goal", body: "Winning with the Magik Kart: the mission that drives every choice." },
      ],
    },
    kart: {
      title: "Kart Magik",
      eyebrow: "The Chassis",
      lead:
        "The homologated Magik Kart is the heart of our racing department: a chassis developed for speed, precision and reliability.",
      hotspots: [
        { label: "Chassis", body: "Racing geometry, calibrated stiffness for traction." },
        { label: "Bodywork", body: "Aero lines and sharp cuts, full motorsport look." },
        { label: "Radiator", body: "High-efficiency cooling for long races." },
        { label: "Brake System", body: "Powerful, modulable braking, tuned on track." },
        { label: "Engine", body: "LKE configuration for maximum performance." },
        { label: "Race Setup", body: "Setup curated by the team, tuned to the circuit." },
      ],
    },
    lke: {
      title: "LKE Emilia-Romagna",
      eyebrow: "Official Dealer",
      lead:
        "MAGIK is the official LKE engine dealer in Emilia-Romagna, with technical support, parts availability and specialised consulting.",
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
      lead:
        "A technical, fast and determined team. From kart preparation to trackside support, every detail is engineered to win.",
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
      categories: ["Races", "Technique", "Setup", "Engines", "Magik News", "Tips", "Behind the Scenes"],
    },
    faq: {
      title: "FAQ",
      eyebrow: "Frequently Asked",
      lead: "The most asked questions. For everything else, write to us.",
    },
    contact: {
      title: "Contact",
      eyebrow: "Talk to the Team",
      lead:
        "Technical support, parts, LKE engines or a track day: tell us what you need.",
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
    },
    footer: {
      desc: "Official racing department of the Magik brand. Preparation, support and racing with the Magik Kart.",
      quickLinks: "Quick links",
      services: "Services",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },
};
