import kartTrack from "@/assets/kart-track.jpg";
import kartCorner from "@/assets/kart-corner.jpg";
import kartPit from "@/assets/kart-pitlane.jpg";
import pilot from "@/assets/pilot-helmet.jpg";
import kartStudio from "@/assets/kart-studio.jpg";
import team from "@/assets/team.jpg";

export type Post = {
  slug: string;
  category: { it: string; en: string };
  date: string;
  cover: string;
  title: { it: string; en: string };
  excerpt: { it: string; en: string };
  body: { it: string; en: string };
};

export const posts: Post[] = [
  {
    slug: "preparare-kart-magik-gara",
    category: { it: "Tecnica", en: "Technique" },
    date: "2025-09-12",
    cover: kartStudio,
    title: {
      it: "Come prepariamo un Kart Magik per una gara",
      en: "How we prepare a Magik Kart for a race",
    },
    excerpt: {
      it: "Dietro ogni partenza c'è un protocollo: telaio, motore, gomme, setup. Ecco il nostro metodo.",
      en: "Behind every start there's a protocol: chassis, engine, tyres, setup. Our method.",
    },
    body: {
      it: "La preparazione di un Kart Magik per una gara non lascia nulla al caso. Si parte dal telaio: verifica geometrie, controllo rigidezza e calibrazione del setup in base al circuito. Si passa al motore LKE, con check completo e mappatura dedicata. Le gomme vengono trattate, scaldate e marcate. Infine, briefing tecnico con il pilota.",
      en: "Preparing a Magik Kart for a race leaves nothing to chance. It starts with the chassis: geometry checks, stiffness verification and setup calibration based on the circuit. Then the LKE engine, with full check and dedicated mapping. Tyres are treated, warmed and marked. Finally, a technical briefing with the driver.",
    },
  },
  {
    slug: "assistenza-pista-team-professionale",
    category: { it: "Dietro le Quinte", en: "Behind the Scenes" },
    date: "2025-08-28",
    cover: kartPit,
    title: {
      it: "Assistenza in pista: cosa fa davvero un team professionale",
      en: "Trackside support: what a professional team really does",
    },
    excerpt: {
      it: "Dal box alla griglia: ogni minuto è gestito. Ecco come lavora MAGIK Reparto Corse in pista.",
      en: "From the pit to the grid: every minute is managed. How MAGIK Reparto Corse works trackside.",
    },
    body: {
      it: "L'assistenza in pista è un lavoro di squadra: ingegnere di pista, meccanico, gommista, telemetria. Ogni sessione viene analizzata, ogni dato confrontato, ogni regolazione discussa con il pilota. È così che si trovano i decimi.",
      en: "Trackside support is teamwork: track engineer, mechanic, tyre specialist, telemetry. Every session is analysed, every data point compared, every adjustment discussed with the driver. That's how tenths are found.",
    },
  },
  {
    slug: "setup-kart-precisione-metodo",
    category: { it: "Setup", en: "Setup" },
    date: "2025-08-10",
    cover: kartCorner,
    title: {
      it: "Setup kart: precisione, metodo e performance",
      en: "Kart setup: precision, method and performance",
    },
    excerpt: {
      it: "Convergenza, campanatura, altezza assale: il setup non è un'opinione, è un protocollo.",
      en: "Toe, camber, axle height: setup is not opinion, it's a protocol.",
    },
    body: {
      it: "Il setup di un kart è uno strumento di misura. Ogni regolazione modifica il bilanciamento, la trazione, la frenata. Il nostro reparto corse lavora con un metodo che parte dai dati e arriva al feeling del pilota.",
      en: "Kart setup is a measuring tool. Every adjustment changes balance, traction, braking. Our racing department works with a method that starts from data and arrives at the driver's feeling.",
    },
  },
  {
    slug: "lke-emilia-romagna-supporto",
    category: { it: "Motori", en: "Engines" },
    date: "2025-07-22",
    cover: kartTrack,
    title: {
      it: "LKE in Emilia-Romagna: supporto, ricambi e consulenza",
      en: "LKE in Emilia-Romagna: support, parts and consulting",
    },
    excerpt: {
      it: "Da rivenditore ufficiale, raccontiamo come supportiamo i piloti LKE.",
      en: "As official dealer, we explain how we support LKE drivers.",
    },
    body: {
      it: "Essere rivenditore ufficiale LKE in Emilia-Romagna significa garantire ricambi, assistenza tecnica e consulenza diretta. Lavoriamo con piloti privati e team, in pista e in officina.",
      en: "Being the official LKE dealer in Emilia-Romagna means guaranteeing parts, technical support and direct consulting. We work with private drivers and teams, both at the track and in the workshop.",
    },
  },
  {
    slug: "racing-team-mondiale-magik",
    category: { it: "News Magik", en: "Magik News" },
    date: "2025-07-05",
    cover: team,
    title: {
      it: "Racing Team: la rotta verso il Mondiale",
      en: "Racing Team: the road to the World Championship",
    },
    excerpt: {
      it: "Una squadra costruita con un solo obiettivo: vincere con il Kart Magik.",
      en: "A team built with one goal: winning with the Magik Kart.",
    },
    body: {
      it: "Il MAGIK Racing Team nasce per portare il Kart Magik ai vertici della competizione internazionale. Ogni stagione è un capitolo, ogni gara un test. La direzione è chiara.",
      en: "The MAGIK Racing Team was born to take the Magik Kart to the top of international competition. Every season a chapter, every race a test. The direction is clear.",
    },
  },
  {
    slug: "consigli-piloti-giovani",
    category: { it: "Consigli", en: "Tips" },
    date: "2025-06-18",
    cover: pilot,
    title: {
      it: "5 consigli per i giovani piloti",
      en: "5 tips for young drivers",
    },
    excerpt: {
      it: "Mentalità, costanza, ascolto del team: i fondamentali che fanno la differenza.",
      en: "Mindset, consistency, listening to the team: fundamentals that make the difference.",
    },
    body: {
      it: "Diventare un pilota veloce non è solo questione di talento. Serve metodo, lavoro con il team, capacità di leggere i dati e voglia di crescere. Questi sono i 5 punti su cui insistiamo di più.",
      en: "Becoming a fast driver is not just about talent. It takes method, teamwork, the ability to read data and the will to grow. These are the 5 points we insist on the most.",
    },
  },
];
