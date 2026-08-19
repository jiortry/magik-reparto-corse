import coverPreparation from "@/assets/gallery/DSC_6804.jpg";
import coverPitlane from "@/assets/gallery/D4S_2454.JPG";
import coverSetup from "@/assets/gallery/D4S_2473.JPG";
import coverTrack from "@/assets/gallery/D4S_2505.JPG";
import coverTeam from "@/assets/gallery/DSC_6994.jpg";
import coverPilot from "@/assets/gallery/DSC_6885.jpg";
import coverCosts from "@/assets/gallery/D4S_2447.JPG";
import coverClasses from "@/assets/gallery/DSC_6577.jpg";
import type { Lang } from "@/i18n/dictionary";

export type Section = {
  /** Stable anchor id, used by the in-article table of contents. */
  id: string;
  heading: Record<Lang, string>;
  paragraphs: Record<Lang, string[]>;
  bullets?: Record<Lang, string[]>;
};

export type PostFaq = { q: Record<Lang, string>; a: Record<Lang, string> };

export type Post = {
  slug: string;
  category: Record<Lang, string>;
  date: string;
  updated?: string;
  cover: string;
  featured?: boolean;
  title: Record<Lang, string>;
  /** Also used as meta description — keep under ~160 chars. */
  excerpt: Record<Lang, string>;
  /** Opening paragraph of the article page. */
  intro: Record<Lang, string>;
  keywords: Record<Lang, string[]>;
  tags: Record<Lang, string[]>;
  sections: Section[];
  faq?: PostFaq[];
};

export const posts: Post[] = [
  {
    slug: "preparare-kart-magik-gara",
    category: { it: "Tecnica", en: "Technique", es: "Técnica" },
    date: "2025-09-12",
    updated: "2026-02-10",
    cover: coverPreparation,
    featured: true,
    title: {
      it: "Come si prepara un kart da gara: il protocollo completo",
      en: "How to prepare a race kart: the complete protocol",
      es: "Cómo se prepara un kart de carrera: el protocolo completo",
    },
    excerpt: {
      it: "Telaio, motore, gomme, freni e setup: il protocollo passo passo con cui prepariamo un Kart Magik prima di ogni gara.",
      en: "Chassis, engine, tyres, brakes and setup: the step-by-step protocol we use to prepare a Magik Kart before every race.",
      es: "Chasis, motor, neumáticos, frenos y setup: el protocolo paso a paso con el que preparamos un Kart Magik antes de cada carrera.",
    },
    intro: {
      it: "La differenza tra un kart veloce e un kart che finisce la gara sta quasi sempre nella preparazione, non nel budget. Questo è il protocollo che seguiamo in officina e sotto la tenda, dal controllo del telaio al briefing con il pilota.",
      en: "The gap between a fast kart and a kart that actually finishes is nearly always preparation, not budget. This is the protocol we follow in the workshop and under the awning, from chassis checks to the driver briefing.",
      es: "La diferencia entre un kart rápido y un kart que termina la carrera está casi siempre en la preparación, no en el presupuesto. Este es el protocolo que seguimos en el taller y bajo el toldo, del control del chasis al briefing con el piloto.",
    },
    keywords: {
      it: [
        "come preparare un kart da gara",
        "preparazione kart",
        "manutenzione go kart",
        "checklist kart gara",
        "reparto corse kart",
      ],
      en: [
        "how to prepare a race kart",
        "kart preparation",
        "go kart maintenance",
        "race kart checklist",
        "kart racing department",
      ],
      es: [
        "cómo preparar un kart de carrera",
        "preparación kart",
        "mantenimiento go kart",
        "checklist kart carrera",
        "departamento de competición kart",
      ],
    },
    tags: {
      it: ["Preparazione", "Telaio", "Motore LKE", "Gomme"],
      en: ["Preparation", "Chassis", "LKE engine", "Tyres"],
      es: ["Preparación", "Chasis", "Motor LKE", "Neumáticos"],
    },
    sections: [
      {
        id: "telaio",
        heading: {
          it: "1. Telaio: geometrie prima di tutto",
          en: "1. Chassis: geometry comes first",
          es: "1. Chasis: primero las geometrías",
        },
        paragraphs: {
          it: [
            "Il telaio è il vero ammortizzatore del kart: non avendo sospensioni, ogni deformazione si traduce in tempo perso. Prima di ogni gara mettiamo il kart sul banco di controllo e verifichiamo planarità, allineamento fusi e usura dei cuscinetti.",
            "Su un telaio omologato CIK-FIA come il Magik MRK1, con tubi in cromo molibdeno Ø 30 mm, un controllo regolare mantiene costante la risposta anche dopo una stagione intensa.",
          ],
          en: [
            "The chassis is the kart's only suspension: with no dampers, every deformation turns into lost time. Before each race the kart goes on the setup table and we check flatness, stub axle alignment and bearing wear.",
            "On a CIK-FIA homologated frame like the Magik MRK1, with Ø 30 mm chrome-moly tubing, regular checks keep the response consistent even after an intense season.",
          ],
          es: [
            "El chasis es el verdadero amortiguador del kart: al no tener suspensiones, cada deformación se traduce en tiempo perdido. Antes de cada carrera ponemos el kart en el banco de control y verificamos planitud, alineación de manguetas y desgaste de los rodamientos.",
            "En un chasis homologado CIK-FIA como el Magik MRK1, con tubos de cromo-molibdeno Ø 30 mm, un control regular mantiene constante la respuesta incluso después de una temporada intensa.",
          ],
        },
        bullets: {
          it: [
            "Controllo planarità e torsione del telaio",
            "Verifica gioco cuscinetti assale e fusi",
            "Serraggio a coppia di tutta la bulloneria critica",
            "Ispezione visiva saldature e punti di fissaggio sedile",
          ],
          en: [
            "Frame flatness and twist check",
            "Axle and stub axle bearing play check",
            "Torque check on all critical fasteners",
            "Visual inspection of welds and seat mounts",
          ],
          es: [
            "Control de planitud y torsión del chasis",
            "Verificación de holgura de rodamientos de eje y manguetas",
            "Apriete a par de toda la tornillería crítica",
            "Inspección visual de soldaduras y anclajes del asiento",
          ],
        },
      },
      {
        id: "motore",
        heading: { it: "2. Motore: check e carburazione", en: "2. Engine: checks and jetting", es: "2. Motor: revisión y carburación" },
        paragraphs: {
          it: [
            "Sul motore LKE lavoriamo su tre fronti: stato meccanico, carburazione e scarico. Il check comprende compressione, candela, valvola di scarico e stato del pacco lamellare.",
            "La carburazione viene poi adattata a temperatura, pressione e umidità del giorno di gara: la stessa configurazione che va bene alle 9 del mattino è quasi sempre sbagliata alle 14.",
          ],
          en: [
            "On the LKE engine we work on three fronts: mechanical condition, jetting and exhaust. The check covers compression, spark plug, exhaust valve and reed pack condition.",
            "Jetting is then matched to race-day temperature, pressure and humidity: the setting that works at 9 a.m. is nearly always wrong by 2 p.m.",
          ],
          es: [
            "En el motor LKE trabajamos en tres frentes: estado mecánico, carburación y escape. La revisión incluye compresión, bujía, válvula de escape y estado del paquete de láminas.",
            "La carburación se adapta después a temperatura, presión y humedad del día de carrera: la misma configuración que vale a las 9 de la mañana casi siempre es incorrecta a las 14.",
          ],
        },
      },
      {
        id: "gomme-freni",
        heading: { it: "3. Gomme e freni", en: "3. Tyres and brakes", es: "3. Neumáticos y frenos" },
        paragraphs: {
          it: [
            "Le gomme vengono numerate, misurate e gestite come un componente a scadenza: sappiamo sempre quanti giri ha ogni treno. Le pressioni partono da un valore teorico e vengono corrette dopo il primo run in base alle temperature rilevate.",
            "Sull'impianto freni FREELINE controlliamo livello e stato del liquido, spurgo, spessore pastiglie e centraggio del disco. Un freno che rimane leggermente in trascinamento costa decimi ad ogni giro.",
          ],
          en: [
            "Tyres are numbered, measured and treated as a life-limited component: we always know how many laps each set has. Pressures start from a baseline and are corrected after the first run based on measured temperatures.",
            "On the FREELINE brake system we check fluid level and condition, bleeding, pad thickness and disc alignment. A brake that lightly drags costs tenths every single lap.",
          ],
          es: [
            "Los neumáticos se numeran, se miden y se gestionan como un componente con vida útil: siempre sabemos cuántas vueltas tiene cada juego. Las presiones parten de un valor teórico y se corrigen después del primer run según las temperaturas medidas.",
            "En el sistema de frenos FREELINE controlamos nivel y estado del líquido, purgado, espesor de pastillas y centrado del disco. Un freno que arrastra ligeramente cuesta décimas en cada vuelta.",
          ],
        },
      },
      {
        id: "setup-pilota",
        heading: {
          it: "4. Setup finale e briefing con il pilota",
          en: "4. Final setup and driver briefing",
          es: "4. Setup final y briefing con el piloto",
        },
        paragraphs: {
          it: [
            "L'ultimo passaggio è il setup di partenza, scelto in base al circuito, all'asfalto e allo stile del pilota: convergenza, campanatura, larghezza carreggiata, rigidezza barre e rapporto finale.",
            "Poi il briefing. Il pilota deve sapere cosa cercare nei primi tre giri, quale riferimento usare per il bilanciamento e cosa riportare al rientro. Senza questo passaggio, i dati raccolti valgono la metà.",
          ],
          en: [
            "The final step is the baseline setup, chosen from circuit, asphalt condition and driver style: toe, camber, track width, bar stiffness and final gear ratio.",
            "Then the briefing. The driver must know what to look for in the first three laps, which reference to use for balance and what to report on return. Without it, the data collected is worth half as much.",
          ],
          es: [
            "El último paso es el setup de partida, elegido según el circuito, el asfalto y el estilo del piloto: convergencia, caída, ancho de vías, rigidez de barras y relación final.",
            "Luego el briefing. El piloto debe saber qué buscar en las tres primeras vueltas, qué referencia usar para el equilibrio y qué reportar al volver. Sin este paso, los datos recogidos valen la mitad.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          it: "Quanto tempo serve per preparare un kart da gara?",
          en: "How long does it take to prepare a race kart?",
          es: "¿Cuánto tiempo se necesita para preparar un kart de carrera?",
        },
        a: {
          it: "Una preparazione completa tra officina e pista richiede in media 4–6 ore, a cui si aggiunge la messa a punto durante le prove libere.",
          en: "A full preparation between workshop and track takes 4–6 hours on average, plus fine tuning during free practice.",
          es: "Una preparación completa entre taller y pista requiere de media 4–6 horas, a las que se suma la puesta a punto durante los entrenamientos libres.",
        },
      },
      {
        q: {
          it: "Ogni quante gare va revisionato il telaio?",
          en: "How often should the chassis be checked?",
          es: "¿Cada cuántas carreras hay que revisar el chasis?",
        },
        a: {
          it: "Consigliamo un controllo geometrie ad ogni weekend di gara e una revisione completa ogni 4–5 gare o dopo un contatto importante.",
          en: "We recommend a geometry check every race weekend and a full inspection every 4–5 races or after any significant contact.",
          es: "Recomendamos un control de geometrías cada fin de semana de carrera y una revisión completa cada 4–5 carreras o después de un contacto importante.",
        },
      },
    ],
  },
  {
    slug: "assistenza-pista-team-professionale",
    category: { it: "Dietro le Quinte", en: "Behind the Scenes", es: "Entre bastidores" },
    date: "2025-08-28",
    updated: "2026-01-20",
    cover: coverPitlane,
    title: {
      it: "Assistenza in pista: cosa fa davvero un team kart professionale",
      en: "Trackside support: what a professional kart team really does",
      es: "Asistencia en pista: qué hace de verdad un equipo kart profesional",
    },
    excerpt: {
      it: "Ruoli, tempistiche e metodo di un weekend di gara: come funziona l'assistenza in pista di un reparto corse kart.",
      en: "Roles, timings and method across a race weekend: how professional trackside kart support actually works.",
      es: "Roles, tiempos y método de un fin de semana de carrera: cómo funciona la asistencia en pista de un departamento de competición kart.",
    },
    intro: {
      it: "Chi corre per la prima volta con assistenza scopre una cosa: il vantaggio non è avere un meccanico, è avere un metodo. Ecco come si struttura un weekend di gara seguito da un team.",
      en: "Anyone racing with support for the first time discovers one thing: the advantage is not having a mechanic, it's having a method. Here's how a supported race weekend is structured.",
      es: "Quien corre por primera vez con asistencia descubre una cosa: la ventaja no es tener un mecánico, es tener un método. Así se estructura un fin de semana de carrera seguido por un equipo.",
    },
    keywords: {
      it: [
        "assistenza in pista kart",
        "team kart Emilia-Romagna",
        "supporto gara karting",
        "meccanico kart",
        "noleggio assistenza kart",
      ],
      en: [
        "trackside kart support",
        "kart team Emilia-Romagna",
        "karting race support",
        "kart mechanic",
        "arrive and drive karting",
      ],
      es: [
        "asistencia en pista kart",
        "equipo kart Emilia-Romaña",
        "soporte de carrera karting",
        "mecánico kart",
        "alquiler asistencia kart",
      ],
    },
    tags: {
      it: ["Assistenza", "Weekend di gara", "Telemetria"],
      en: ["Support", "Race weekend", "Telemetry"],
      es: ["Asistencia", "Fin de semana de carrera", "Telemetría"],
    },
    sections: [
      {
        id: "ruoli",
        heading: { it: "I ruoli sotto la tenda", en: "Roles under the awning", es: "Los roles bajo el toldo" },
        paragraphs: {
          it: [
            "Un team strutturato divide i compiti: ingegnere di pista per dati e setup, meccanico per il kart, gommista per la gestione dei treni, team manager per tempi, iscrizioni e rapporti con la direzione gara.",
            "Il pilota deve pensare solo a guidare e a riportare sensazioni precise. Ogni minuto risparmiato in box è un minuto in più di concentrazione.",
          ],
          en: [
            "A structured team splits the tasks: track engineer for data and setup, mechanic for the kart, tyre specialist for set management, team manager for timing, entries and race control matters.",
            "The driver only has to drive and report precise feedback. Every minute saved in the pit is a minute more of focus.",
          ],
          es: [
            "Un equipo estructurado divide las tareas: ingeniero de pista para datos y setup, mecánico para el kart, gommista para la gestión de juegos, team manager para tiempos, inscripciones y relación con dirección de carrera.",
            "El piloto solo debe pensar en conducir y reportar sensaciones precisas. Cada minuto ahorrado en el box es un minuto más de concentración.",
          ],
        },
      },
      {
        id: "sessioni",
        heading: { it: "Come si usa ogni sessione", en: "How each session is used", es: "Cómo se usa cada sesión" },
        paragraphs: {
          it: [
            "Prove libere: verifica del setup base e lettura gomme. Qualifica: un solo obiettivo, il giro secco, con gestione del traffico. Manche e finale: strategia di partenza, gestione del degrado e piani B già decisi prima di scendere in griglia.",
          ],
          en: [
            "Free practice: baseline validation and tyre reading. Qualifying: one goal only, the single lap, with traffic management. Heats and final: start strategy, degradation management and contingency plans decided before the grid.",
          ],
          es: [
            "Entrenamientos libres: verificación del setup base y lectura de neumáticos. Clasificación: un solo objetivo, la vuelta seca, con gestión del tráfico. Mangas y final: estrategia de salida, gestión del desgaste y planes B ya decididos antes de bajar a parrilla.",
          ],
        },
        bullets: {
          it: [
            "Download telemetria e confronto giri entro 10 minuti dal rientro",
            "Controllo pressioni e temperature gomme a caldo",
            "Debrief con il pilota prima di ogni modifica al setup",
            "Registro modifiche: una variabile alla volta",
          ],
          en: [
            "Telemetry download and lap comparison within 10 minutes of return",
            "Hot tyre pressure and temperature check",
            "Driver debrief before every setup change",
            "Change log: one variable at a time",
          ],
          es: [
            "Descarga de telemetría y comparación de vueltas en 10 minutos desde el retorno",
            "Control de presiones y temperaturas de neumáticos en caliente",
            "Debrief con el piloto antes de cada cambio de setup",
            "Registro de cambios: una variable cada vez",
          ],
        },
      },
      {
        id: "quando-serve",
        heading: { it: "Quando conviene l'assistenza", en: "When support is worth it", es: "Cuándo conviene la asistencia" },
        paragraphs: {
          it: [
            "Ha senso quando il pilota è in crescita e il tempo in pista è limitato: l'assistenza trasforma un weekend confuso in dati utilizzabili. È utile anche a chi corre da anni ma non ha modo di gestire da solo gomme, telemetria e imprevisti.",
            "Lavoriamo in Emilia-Romagna e nelle gare nazionali, sia con piloti privati sia con team che chiedono un supporto tecnico aggiuntivo.",
          ],
          en: [
            "It pays off when the driver is developing and track time is limited: support turns a confused weekend into usable data. It also helps experienced racers who can't handle tyres, telemetry and surprises alone.",
            "We work across Emilia-Romagna and at national events, both with private drivers and with teams needing extra technical support.",
          ],
          es: [
            "Tiene sentido cuando el piloto está en crecimiento y el tiempo en pista es limitado: la asistencia convierte un fin de semana confuso en datos utilizables. También es útil para quien corre desde hace años pero no puede gestionar solo neumáticos, telemetría e imprevistos.",
            "Trabajamos en Emilia-Romaña y en las carreras nacionales, tanto con pilotos privados como con equipos que piden un soporte técnico extra.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          it: "Fate assistenza anche a kart di altri marchi?",
          en: "Do you support karts from other brands?",
          es: "¿Hacéis asistencia también a karts de otras marcas?",
        },
        a: {
          it: "Sì. Seguiamo piloti con telai di marchi diversi, sia in prova sia in gara.",
          en: "Yes. We support drivers with chassis from various brands, in testing and racing.",
          es: "Sí. Seguimos a pilotos con chasis de distintas marcas, tanto en prueba como en carrera.",
        },
      },
    ],
  },
  {
    slug: "setup-kart-guida-completa",
    category: { it: "Setup", en: "Setup", es: "Setup" },
    date: "2025-08-10",
    updated: "2026-03-02",
    cover: coverSetup,
    featured: true,
    title: {
      it: "Setup kart: guida a convergenza, campanatura e carreggiata",
      en: "Kart setup guide: toe, camber and track width",
      es: "Setup kart: guía de convergencia, caída y ancho de vías",
    },
    excerpt: {
      it: "Cosa cambia davvero quando tocchi convergenza, campanatura, carreggiata o altezza assale. Guida pratica al setup del kart.",
      en: "What actually changes when you adjust toe, camber, track width or axle height. A practical kart setup guide.",
      es: "Qué cambia de verdad cuando tocas convergencia, caída, ancho de vías o altura de eje. Guía práctica al setup del kart.",
    },
    intro: {
      it: "Il setup di un kart non è una collezione di trucchi: è un sistema in cui ogni regolazione sposta il bilanciamento tra anteriore e posteriore. Capire la direzione dell'effetto vale più di conoscere il numero giusto.",
      en: "Kart setup is not a bag of tricks: it's a system where every adjustment shifts the balance between front and rear. Understanding the direction of the effect matters more than knowing the magic number.",
      es: "El setup de un kart no es una colección de trucos: es un sistema en el que cada regulación desplaza el equilibrio entre delante y detrás. Entender la dirección del efecto vale más que conocer el número mágico.",
    },
    keywords: {
      it: [
        "setup kart",
        "convergenza kart",
        "campanatura kart",
        "assetto go kart",
        "regolazioni telaio kart",
        "kart sottosterzo sovrasterzo",
      ],
      en: [
        "kart setup",
        "kart toe settings",
        "kart camber",
        "go kart handling",
        "kart chassis adjustments",
        "kart understeer oversteer",
      ],
      es: [
        "setup kart",
        "convergencia kart",
        "caída kart",
        "puesta a punto go kart",
        "regulaciones chasis kart",
        "kart subviraje sobreviraje",
      ],
    },
    tags: {
      it: ["Setup", "Telaio", "Assetto"],
      en: ["Setup", "Chassis", "Handling"],
      es: ["Setup", "Chasis", "Puesta a punto"],
    },
    sections: [
      {
        id: "principio",
        heading: {
          it: "Il principio: il kart deve sollevare la ruota interna",
          en: "The principle: the kart must lift the inside rear",
          es: "El principio: el kart debe levantar la rueda interior",
        },
        paragraphs: {
          it: [
            "Senza differenziale, in curva la ruota posteriore interna deve staccarsi da terra quel tanto che basta. Se resta incollata, il kart striscia e sottosterza; se si solleva troppo o troppo a lungo, il posteriore diventa nervoso.",
            "Ogni regolazione va letta con questa domanda: sto aiutando o ostacolando il sollevamento?",
          ],
          en: [
            "With no differential, the inside rear wheel has to lift just enough in a corner. If it stays planted the kart scrubs and understeers; if it lifts too much or too long, the rear turns nervous.",
            "Read every adjustment with one question: am I helping or hindering that lift?",
          ],
          es: [
            "Sin diferencial, en curva la rueda trasera interior debe despegarse del suelo lo justo. Si permanece pegada, el kart arrastra y subvira; si se levanta demasiado o demasiado tiempo, el tren trasero se vuelve nervioso.",
            "Cada regulación se lee con esta pregunta: ¿estoy ayudando u obstaculizando el levantamiento?",
          ],
        },
      },
      {
        id: "convergenza",
        heading: { it: "Convergenza (toe)", en: "Toe", es: "Convergencia (toe)" },
        paragraphs: {
          it: [
            "Divergenza (toe-out) aumenta la reattività in inserimento e aiuta l'ingresso curva, ma penalizza la velocità di punta e scalda l'anteriore. Convergenza (toe-in) rende il kart più stabile in rettilineo e più dolce, ma pigro in inserimento.",
            "Si lavora a piccoli passi, tipicamente 0,5–1 mm per volta, misurando sempre con lo stesso metodo e con pilota a bordo.",
          ],
          en: [
            "Toe-out increases turn-in response and helps corner entry, but hurts top speed and heats the front tyres. Toe-in makes the kart more stable in a straight line and smoother, but lazy on turn-in.",
            "Work in small steps, typically 0.5–1 mm at a time, always measuring the same way and with the driver seated.",
          ],
          es: [
            "La divergencia (toe-out) aumenta la reactividad en el ataque y ayuda a la entrada en curva, pero penaliza la velocidad punta y calienta el tren delantero. La convergencia (toe-in) hace el kart más estable en recta y más suave, pero perezoso al atacar.",
            "Se trabaja a pequeños pasos, típicamente 0,5–1 mm cada vez, midiendo siempre con el mismo método y con el piloto a bordo.",
          ],
        },
      },
      {
        id: "campanatura",
        heading: { it: "Campanatura (camber)", en: "Camber", es: "Caída (camber)" },
        paragraphs: {
          it: [
            "La campanatura negativa aumenta l'impronta dell'anteriore in appoggio e quindi il grip in curva; troppa campanatura negativa consuma la spalla interna e riduce la frenata in rettilineo.",
            "La lettura delle temperature gomma su interno, centro ed esterno è il modo più affidabile per capire se il valore è corretto.",
          ],
          en: [
            "Negative camber increases the front contact patch under load and therefore cornering grip; too much negative camber wears the inner shoulder and reduces braking stability.",
            "Reading tyre temperatures across inner, centre and outer is the most reliable way to know whether the value is right.",
          ],
          es: [
            "La caída negativa aumenta la huella del tren delantero en apoyo y por tanto el grip en curva; demasiada caída negativa desgasta el hombro interior y reduce la frenada en recta.",
            "La lectura de temperaturas del neumático en interior, centro y exterior es la forma más fiable de saber si el valor es correcto.",
          ],
        },
      },
      {
        id: "carreggiata-assale",
        heading: { it: "Carreggiata e assale", en: "Track width and axle", es: "Ancho de vías y eje" },
        paragraphs: {
          it: [
            "Allargare la carreggiata anteriore aumenta il grip in ingresso; allargare la posteriore riduce il trasferimento di carico e quindi il grip posteriore, aiutando il kart a girare su asfalto molto gommato.",
            "L'assale è la leva più potente sul posteriore: più rigido, più grip in uscita ma meno rotazione; più morbido, più rotazione ma rischio di scivolamento. Cambia una sola variabile per volta e annota tutto.",
          ],
          en: [
            "Widening the front track increases entry grip; widening the rear reduces load transfer and therefore rear grip, helping the kart rotate on high-grip asphalt.",
            "The axle is the strongest lever at the rear: stiffer means more exit grip but less rotation; softer means more rotation but a risk of sliding. Change one variable at a time and log everything.",
          ],
          es: [
            "Ensanchar el tren delantero aumenta el grip de entrada; ensanchar el trasero reduce la transferencia de carga y por tanto el grip posterior, ayudando al kart a girar en asfalto muy gomeado.",
            "El eje es la palanca más potente en el tren trasero: más rígido, más grip de salida pero menos rotación; más blando, más rotación pero riesgo de deslizamiento. Cambia una sola variable cada vez y anótalo todo.",
          ],
        },
        bullets: {
          it: [
            "Sottosterza in ingresso? Più divergenza o carreggiata anteriore più larga.",
            "Sovrasterza in uscita? Assale più rigido o carreggiata posteriore più stretta.",
            "Salta e rimbalza sui cordoli? Verifica altezza assale e rigidezza barre.",
            "Su pista molto gommata: riduci grip posteriore, non aumentare quello anteriore.",
          ],
          en: [
            "Understeer on entry? More toe-out or wider front track.",
            "Oversteer on exit? Stiffer axle or narrower rear track.",
            "Hopping over kerbs? Check axle height and bar stiffness.",
            "On high-grip asphalt: reduce rear grip rather than adding front grip.",
          ],
          es: [
            "¿Subvira a la entrada? Más divergencia o tren delantero más ancho.",
            "¿Sobrevira a la salida? Eje más rígido o tren trasero más estrecho.",
            "¿Salta y rebota en los pianos? Verifica altura de eje y rigidez de barras.",
            "En pista muy gomeada: reduce el grip trasero, no aumentes el delantero.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          it: "Qual è il setup base di un kart?",
          en: "What is a baseline kart setup?",
          es: "¿Cuál es el setup base de un kart?",
        },
        a: {
          it: "Si parte dai valori consigliati dal costruttore del telaio e si adatta a pista, temperatura e stile del pilota. Non esiste un setup universale.",
          en: "Start from the chassis manufacturer's recommended values, then adapt to circuit, temperature and driver style. There is no universal setup.",
          es: "Se parte de los valores recomendados por el constructor del chasis y se adapta a pista, temperatura y estilo del piloto. No existe un setup universal.",
        },
      },
      {
        q: {
          it: "Il setup si cambia con la pioggia?",
          en: "Does setup change in the wet?",
          es: "¿El setup cambia con lluvia?",
        },
        a: {
          it: "Sì, in modo netto: carreggiate più strette, più campanatura negativa e sedile spesso più rigido per aumentare il sollevamento della ruota interna.",
          en: "Yes, significantly: narrower track widths, more negative camber and often a stiffer seat mounting to increase inside wheel lift.",
          es: "Sí, de forma clara: vías más estrechas, más caída negativa y asiento a menudo más rígido para aumentar el levantamiento de la rueda interior.",
        },
      },
    ],
  },
  {
    slug: "motore-lke-emilia-romagna",
    category: { it: "Motori", en: "Engines", es: "Motores" },
    date: "2025-07-22",
    updated: "2026-02-24",
    cover: coverTrack,
    title: {
      it: "Motore LKE: manutenzione, ricambi e assistenza in Emilia-Romagna",
      en: "LKE engine: maintenance, parts and support in Emilia-Romagna",
      es: "Motor LKE: mantenimiento, recambios y asistencia en Emilia-Romaña",
    },
    excerpt: {
      it: "Intervalli di manutenzione, ricambi e carburazione del motore LKE, spiegati dal rivenditore ufficiale in Emilia-Romagna.",
      en: "Maintenance intervals, parts and jetting for the LKE engine, explained by the official Emilia-Romagna dealer.",
      es: "Intervalos de mantenimiento, recambios y carburación del motor LKE, explicados por el distribuidor oficial en Emilia-Romaña.",
    },
    intro: {
      it: "Il motore LKE è affidabile finché rispetti gli intervalli. La maggior parte dei problemi che vediamo in officina nasce da manutenzione rimandata o da carburazioni copiate da un altro pilota.",
      en: "The LKE engine is reliable as long as you respect the intervals. Most of the problems we see in the workshop come from postponed maintenance or jetting copied from another driver.",
      es: "El motor LKE es fiable mientras respetes los intervalos. La mayoría de los problemas que vemos en el taller nacen de un mantenimiento aplazado o de carburaciones copiadas de otro piloto.",
    },
    keywords: {
      it: [
        "motore LKE",
        "rivenditore LKE Emilia-Romagna",
        "ricambi LKE",
        "manutenzione motore kart",
        "carburazione kart 60cc",
      ],
      en: [
        "LKE engine",
        "LKE dealer Italy",
        "LKE spare parts",
        "kart engine maintenance",
        "60cc kart jetting",
      ],
      es: [
        "motor LKE",
        "distribuidor LKE Emilia-Romaña",
        "recambios LKE",
        "mantenimiento motor kart",
        "carburación kart 60cc",
      ],
    },
    tags: {
      it: ["Motori", "LKE", "Manutenzione"],
      en: ["Engines", "LKE", "Maintenance"],
      es: ["Motores", "LKE", "Mantenimiento"],
    },
    sections: [
      {
        id: "manutenzione",
        heading: { it: "Intervalli di manutenzione", en: "Maintenance intervals", es: "Intervalos de mantenimiento" },
        paragraphs: {
          it: [
            "La manutenzione si misura in ore di funzionamento, non in gare. Un uso agonistico intenso richiede controlli molto più frequenti di un uso hobbistico, anche a parità di calendario.",
          ],
          en: [
            "Maintenance is measured in running hours, not in races. Intense competitive use requires far more frequent checks than hobby use, even with the same calendar.",
          ],
          es: [
            "El mantenimiento se mide en horas de funcionamiento, no en carreras. Un uso competitivo intenso exige controles mucho más frecuentes que un uso amateur, aunque el calendario sea el mismo.",
          ],
        },
        bullets: {
          it: [
            "Candela e carburatore: controllo ad ogni uscita",
            "Pacco lamellare e valvola di scarico: verifica periodica",
            "Cuscinetti e paraoli: sostituzione programmata",
            "Revisione completa: secondo le ore consigliate dal costruttore",
          ],
          en: [
            "Spark plug and carburettor: checked every outing",
            "Reed pack and exhaust valve: periodic inspection",
            "Bearings and seals: scheduled replacement",
            "Full rebuild: per the manufacturer's recommended hours",
          ],
          es: [
            "Bujía y carburador: control en cada salida",
            "Paquete de láminas y válvula de escape: verificación periódica",
            "Rodamientos y retenes: sustitución programada",
            "Revisión completa: según las horas recomendadas por el constructor",
          ],
        },
      },
      {
        id: "carburazione",
        heading: {
          it: "Carburazione e condizioni ambientali",
          en: "Jetting and ambient conditions",
          es: "Carburación y condiciones ambientales",
        },
        paragraphs: {
          it: [
            "Temperatura, pressione atmosferica e umidità cambiano la densità dell'aria e quindi la miscela ottimale. Una carburazione troppo magra è il modo più rapido per danneggiare il motore; una troppo grassa costa potenza e sporca la candela.",
            "Consigliamo di tenere un registro con condizioni, getti e sensazioni: dopo poche uscite diventa lo strumento più utile che hai.",
          ],
          en: [
            "Temperature, atmospheric pressure and humidity change air density and therefore the optimal mixture. Running too lean is the fastest way to damage the engine; too rich costs power and fouls the plug.",
            "Keep a log with conditions, jets and feedback: after a few outings it becomes the most useful tool you own.",
          ],
          es: [
            "Temperatura, presión atmosférica y humedad cambian la densidad del aire y por tanto la mezcla óptima. Una carburación demasiado pobre es la forma más rápida de dañar el motor; una demasiado rica cuesta potencia y ensucia la bujía.",
            "Recomendamos llevar un registro con condiciones, chiclés y sensaciones: después de pocas salidas se convierte en la herramienta más útil que tienes.",
          ],
        },
      },
      {
        id: "supporto",
        heading: { it: "Cosa offriamo come rivenditore", en: "What we offer as a dealer", es: "Qué ofrecemos como distribuidor" },
        paragraphs: {
          it: [
            "Come rivenditori ufficiali LKE in Emilia-Romagna gestiamo vendita, ricambi originali, revisioni e assistenza diretta in pista. Chi acquista da noi ha supporto tecnico anche durante il weekend di gara.",
          ],
          en: [
            "As official LKE dealers in Emilia-Romagna we handle sales, genuine parts, rebuilds and direct trackside support. Buying from us includes technical support during the race weekend.",
          ],
          es: [
            "Como distribuidores oficiales LKE en Emilia-Romaña gestionamos venta, recambios originales, revisiones y asistencia directa en pista. Quien compra con nosotros tiene soporte técnico también durante el fin de semana de carrera.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          it: "Ogni quanto va revisionato un motore kart?",
          en: "How often should a kart engine be rebuilt?",
          es: "¿Cada cuánto hay que revisar un motor de kart?",
        },
        a: {
          it: "Dipende dalle ore di utilizzo e dalla categoria: in uso agonistico si va da una revisione ogni poche gare fino a intervalli più lunghi per l'uso amatoriale.",
          en: "It depends on running hours and class: competitive use ranges from a rebuild every few races to longer intervals for club-level use.",
          es: "Depende de las horas de uso y de la categoría: en uso competitivo se va de una revisión cada pocas carreras a intervalos más largos para uso amateur.",
        },
      },
      {
        q: {
          it: "Vendete ricambi LKE anche a chi non è nostro cliente?",
          en: "Do you sell LKE parts to non-customers?",
          es: "¿Vendéis recambios LKE también a quien no es cliente?",
        },
        a: {
          it: "Sì, forniamo ricambi originali LKE a piloti privati e team, con consulenza tecnica inclusa.",
          en: "Yes, we supply genuine LKE parts to private drivers and teams, technical advice included.",
          es: "Sí, suministramos recambios originales LKE a pilotos privados y equipos, con asesoramiento técnico incluido.",
        },
      },
    ],
  },
  {
    slug: "quanto-costa-correre-in-kart",
    category: { it: "Consigli", en: "Tips", es: "Consejos" },
    date: "2025-07-05",
    updated: "2026-03-15",
    cover: coverCosts,
    featured: true,
    title: {
      it: "Quanto costa iniziare a correre in kart: le voci di spesa reali",
      en: "How much it costs to start kart racing: the real budget items",
      es: "Cuánto cuesta empezar a correr en kart: las partidas de gasto reales",
    },
    excerpt: {
      it: "Kart, motore, attrezzatura, gomme, iscrizioni e assistenza: tutte le voci di spesa per iniziare a correre in kart, senza sorprese.",
      en: "Kart, engine, gear, tyres, entries and support: every budget item for starting in kart racing, with no surprises.",
      es: "Kart, motor, equipación, neumáticos, inscripciones y asistencia: todas las partidas de gasto para empezar a correr en kart, sin sorpresas.",
    },
    intro: {
      it: "È la domanda che ci fanno più spesso i genitori alla prima gara. Non esiste una cifra unica, ma esiste una lista chiara di voci: se le conosci tutte in anticipo, il karting diventa un progetto gestibile invece che una sorpresa continua.",
      en: "It's the question parents ask us most at their first race. There is no single figure, but there is a clear list of items: know them all in advance and karting becomes a manageable project instead of a constant surprise.",
      es: "Es la pregunta que más nos hacen los padres en la primera carrera. No existe una cifra única, pero sí una lista clara de partidas: si las conoces todas de antemano, el karting se convierte en un proyecto gestionable en lugar de una sorpresa continua.",
    },
    keywords: {
      it: [
        "quanto costa correre in kart",
        "costo kart da corsa",
        "budget karting",
        "iniziare karting bambino",
        "prezzo kart 60 mini",
      ],
      en: [
        "how much does kart racing cost",
        "race kart price",
        "karting budget",
        "start karting for kids",
        "60cc mini kart cost",
      ],
      es: [
        "cuánto cuesta correr en kart",
        "precio kart de competición",
        "presupuesto karting",
        "empezar karting niños",
        "precio kart 60 mini",
      ],
    },
    tags: {
      it: ["Costi", "Iniziare", "Famiglie"],
      en: ["Costs", "Getting started", "Families"],
      es: ["Costes", "Empezar", "Familias"],
    },
    sections: [
      {
        id: "voci",
        heading: { it: "Le voci da mettere a budget", en: "The items to budget for", es: "Las partidas que hay que presupuestar" },
        paragraphs: {
          it: [
            "Il costo iniziale è solo una parte: il vero budget annuale dipende da quante gare fai e da quanto consumi in gomme e manutenzione.",
          ],
          en: [
            "The upfront cost is only part of it: the real annual budget depends on how many races you run and how much you use in tyres and maintenance.",
          ],
          es: [
            "El coste inicial es solo una parte: el verdadero presupuesto anual depende de cuántas carreras hagas y de cuánto gastes en neumáticos y mantenimiento.",
          ],
        },
        bullets: {
          it: [
            "Kart completo (telaio omologato + motore) nuovo o usato garantito",
            "Attrezzatura pilota: casco omologato, tuta, guanti, scarpe, protezione costole",
            "Licenza ACI Sport e visita medica sportiva",
            "Gomme: la voce ricorrente più pesante della stagione",
            "Iscrizioni gara, trasporto e ospitalità nel weekend",
            "Manutenzione motore, ricambi di consumo e assistenza tecnica",
          ],
          en: [
            "Complete kart (homologated chassis + engine), new or warranted used",
            "Driver gear: homologated helmet, suit, gloves, boots, rib protector",
            "National racing licence and sports medical certificate",
            "Tyres: the heaviest recurring cost of the season",
            "Race entries, transport and race-weekend hospitality",
            "Engine maintenance, consumables and technical support",
          ],
          es: [
            "Kart completo (chasis homologado + motor) nuevo o usado con garantía",
            "Equipación del piloto: casco homologado, mono, guantes, botas, protector de costillas",
            "Licencia de competición y reconocimiento médico deportivo",
            "Neumáticos: la partida recurrente más pesada de la temporada",
            "Inscripciones, transporte y hospitalidad del fin de semana",
            "Mantenimiento del motor, recambios de consumo y asistencia técnica",
          ],
        },
      },
      {
        id: "risparmiare",
        heading: { it: "Dove si risparmia (e dove no)", en: "Where to save (and where not to)", es: "Dónde se ahorra (y dónde no)" },
        paragraphs: {
          it: [
            "Si può partire con un telaio usato recente e in buone condizioni, purché omologato e verificato: è la scelta più sensata per il primo anno. Si risparmia anche condividendo trasporto e tenda con altri piloti.",
            "Non si risparmia sull'attrezzatura di sicurezza, sulla manutenzione del motore e sulle gomme di scorta in gara: sono le tre voci che, tagliate, costano molto di più dopo.",
          ],
          en: [
            "You can start with a recent used chassis in good condition, as long as it's homologated and inspected: it's the sensible first-year choice. Sharing transport and awning space with other drivers saves money too.",
            "Do not save on safety gear, engine maintenance or spare race tyres: cut those three and they cost far more later.",
          ],
          es: [
            "Se puede empezar con un chasis usado reciente y en buen estado, siempre que esté homologado y verificado: es la elección más sensata para el primer año. También se ahorra compartiendo transporte y toldo con otros pilotos.",
            "No se ahorra en el material de seguridad, el mantenimiento del motor ni los neumáticos de recambio en carrera: son las tres partidas que, recortadas, cuestan mucho más después.",
          ],
        },
      },
      {
        id: "primo-anno",
        heading: { it: "Un primo anno realistico", en: "A realistic first year", es: "Un primer año realista" },
        paragraphs: {
          it: [
            "Per un esordiente consigliamo poche gare fatte bene invece di un calendario pieno affrontato male: più giornate di test, un campionato regionale e un obiettivo tecnico chiaro per ogni uscita.",
            "Se vuoi una stima concreta sulla tua situazione, scrivici: mettiamo in fila le voci in base alla categoria e al calendario che hai in mente.",
          ],
          en: [
            "For a newcomer we recommend a few races done properly instead of a full calendar done badly: more test days, one regional championship and a clear technical goal for each outing.",
            "If you want a concrete estimate for your situation, get in touch: we'll lay out the items based on your class and the calendar you have in mind.",
          ],
          es: [
            "Para un debutante recomendamos pocas carreras hechas bien en lugar de un calendario lleno afrontado mal: más días de test, un campeonato regional y un objetivo técnico claro para cada salida.",
            "Si quieres una estimación concreta de tu situación, escríbenos: ordenamos las partidas según la categoría y el calendario que tienes en mente.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          it: "A che età si può iniziare a correre in kart?",
          en: "At what age can you start kart racing?",
          es: "¿A qué edad se puede empezar a correr en kart?",
        },
        a: {
          it: "In Italia si può iniziare con le categorie Mini a partire dagli 8 anni circa, con licenza e requisiti specifici per età.",
          en: "In Italy you can start in Mini classes from around 8 years old, with a licence and age-specific requirements.",
          es: "En Italia se puede empezar con las categorías Mini a partir de unos 8 años, con licencia y requisitos específicos por edad.",
        },
      },
      {
        q: {
          it: "Conviene comprare un kart usato?",
          en: "Is a used kart a good idea?",
          es: "¿Conviene comprar un kart usado?",
        },
        a: {
          it: "Sì, se il telaio è recente, omologato e verificato da un tecnico. Facciamo noi il controllo prima dell'acquisto se ce lo chiedi.",
          en: "Yes, if the chassis is recent, homologated and inspected by a technician. We can check it before you buy if you ask us.",
          es: "Sí, si el chasis es reciente, homologado y verificado por un técnico. Hacemos nosotros el control antes de la compra si nos lo pides.",
        },
      },
    ],
  },
  {
    slug: "categorie-karting-mini-kz",
    category: { it: "Consigli", en: "Tips", es: "Consejos" },
    date: "2025-06-30",
    updated: "2026-01-12",
    cover: coverClasses,
    title: {
      it: "Categorie karting: dalla Mini alla KZ, quale scegliere",
      en: "Karting classes explained: from Mini to KZ, which one to pick",
      es: "Categorías de karting: de Mini a KZ, cuál elegir",
    },
    excerpt: {
      it: "Mini, X30, OK, KZ: età, cilindrate e livello di ogni categoria kart, per scegliere il passo giusto senza bruciare tappe.",
      en: "Mini, X30, OK, KZ: age, displacement and level of each karting class, to pick the right step without rushing.",
      es: "Mini, X30, OK, KZ: edad, cilindradas y nivel de cada categoría kart, para elegir el paso correcto sin quemar etapas.",
    },
    intro: {
      it: "Scegliere la categoria sbagliata è il modo più veloce per rallentare la crescita di un pilota. Ogni classe ha un obiettivo tecnico preciso: qui trovi la mappa per orientarti.",
      en: "Picking the wrong class is the fastest way to slow a driver's development. Each class has a precise technical purpose: here's the map.",
      es: "Elegir la categoría equivocada es la forma más rápida de frenar el crecimiento de un piloto. Cada clase tiene un objetivo técnico preciso: aquí tienes el mapa para orientarte.",
    },
    keywords: {
      it: [
        "categorie kart",
        "kart 60 mini",
        "categoria X30",
        "kart KZ marce",
        "classi karting età",
      ],
      en: [
        "karting classes",
        "60 mini kart",
        "X30 class",
        "KZ shifter kart",
        "karting age classes",
      ],
      es: [
        "categorías kart",
        "kart 60 mini",
        "categoría X30",
        "kart KZ marchas",
        "clases karting edad",
      ],
    },
    tags: {
      it: ["Categorie", "Iniziare", "Regolamento"],
      en: ["Classes", "Getting started", "Regulations"],
      es: ["Categorías", "Empezar", "Reglamento"],
    },
    sections: [
      {
        id: "mini",
        heading: { it: "Mini e 60cc: la base", en: "Mini and 60cc: the foundation", es: "Mini y 60cc: la base" },
        paragraphs: {
          it: [
            "Le categorie 60cc sono il primo passo agonistico: motori monomarcia, velocità contenute e grande attenzione alla pulizia di guida. È qui che si costruiscono le traiettorie e la sensibilità sul freno.",
          ],
          en: [
            "60cc classes are the first competitive step: single-speed engines, moderate speed and a strong focus on clean driving. This is where racing lines and brake sensitivity are built.",
          ],
          es: [
            "Las categorías 60cc son el primer paso competitivo: motores monomarcha, velocidades contenidas y gran atención a la limpieza de conducción. Aquí se construyen las trazadas y la sensibilidad en el freno.",
          ],
        },
      },
      {
        id: "monomarcia",
        heading: { it: "Monomarcia 125: X30, OK e OK-N", en: "125 single-speed: X30, OK, OK-N", es: "Monomarcha 125: X30, OK y OK-N" },
        paragraphs: {
          it: [
            "Il passaggio alla 125 monomarcia porta più potenza, frenate più impegnative e un lavoro sul setup molto più fine. La differenza tra le sigle sta in regolamento tecnico, costi e livello di competizione internazionale.",
            "È la fascia dove la maggior parte dei piloti resta più a lungo e dove il supporto tecnico incide di più sul risultato.",
          ],
          en: [
            "Moving to 125 single-speed brings more power, harder braking and much finer setup work. The difference between the labels lies in technical regulations, cost and level of international competition.",
            "It's the tier where most drivers stay longest and where technical support has the biggest effect on results.",
          ],
          es: [
            "El paso a la 125 monomarcha aporta más potencia, frenadas más exigentes y un trabajo de setup mucho más fino. La diferencia entre las siglas está en el reglamento técnico, los costes y el nivel de competición internacional.",
            "Es la franja donde la mayoría de los pilotos permanece más tiempo y donde el soporte técnico más influye en el resultado.",
          ],
        },
      },
      {
        id: "kz",
        heading: { it: "KZ: il cambio e il livello massimo", en: "KZ: gearbox and the top tier", es: "KZ: el cambio y el nivel máximo" },
        paragraphs: {
          it: [
            "La KZ introduce il cambio a 6 marce e prestazioni da vera macchina da corsa. Richiede preparazione fisica, esperienza e una gestione tecnica strutturata: non è una categoria in cui improvvisare.",
          ],
          en: [
            "KZ introduces a 6-speed gearbox and genuine race-car performance. It demands physical preparation, experience and structured technical management: not a class to improvise in.",
          ],
          es: [
            "La KZ introduce el cambio de 6 marchas y prestaciones de auténtico coche de carreras. Exige preparación física, experiencia y una gestión técnica estructurada: no es una categoría en la que improvisar.",
          ],
        },
        bullets: {
          it: [
            "Prima categoria: privilegia il tempo in pista, non la potenza",
            "Cambia classe quando sei costantemente competitivo, non dopo una gara buona",
            "Verifica sempre il regolamento ACI Sport aggiornato dell'anno in corso",
          ],
          en: [
            "First class: prioritise track time over power",
            "Move up when you're consistently competitive, not after one good race",
            "Always check the current year's updated national regulations",
          ],
          es: [
            "Primera categoría: prioriza el tiempo en pista, no la potencia",
            "Cambia de clase cuando seas constantemente competitivo, no después de una buena carrera",
            "Comprueba siempre el reglamento nacional actualizado del año en curso",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          it: "Quale categoria kart scegliere per iniziare?",
          en: "Which karting class should a beginner choose?",
          es: "¿Qué categoría kart elegir para empezar?",
        },
        a: {
          it: "Per la maggior parte degli esordienti la scelta è una 60cc Mini o, per chi inizia da adulto, una monomarcia 125 con potenza contenuta.",
          en: "For most beginners the choice is a 60cc Mini or, for adults starting out, a lower-power 125 single-speed class.",
          es: "Para la mayoría de los debutantes la elección es una 60cc Mini o, para quien empieza de adulto, una monomarcha 125 de potencia contenida.",
        },
      },
    ],
  },
  {
    slug: "racing-team-mondiale-magik",
    category: { it: "News Magik", en: "Magik News", es: "News Magik" },
    date: "2025-06-24",
    cover: coverTeam,
    title: {
      it: "Racing Team MAGIK: la rotta verso il Mondiale",
      en: "MAGIK Racing Team: the road to the World Championship",
      es: "Racing Team MAGIK: rumbo al Mundial",
    },
    excerpt: {
      it: "Come è nato il reparto corse MAGIK, come lavora il team e qual è l'obiettivo dichiarato: portare il Kart Magik ai vertici.",
      en: "How the MAGIK racing department was born, how the team works and the stated goal: taking the Magik Kart to the top.",
      es: "Cómo nació el departamento de competición MAGIK, cómo trabaja el equipo y cuál es el objetivo declarado: llevar el Kart Magik a la élite.",
    },
    intro: {
      it: "MAGIK Reparto Corse nasce con un obiettivo dichiarato: portare il Kart Magik ai vertici della competizione internazionale. Non è uno slogan, è un piano di lavoro con tappe.",
      en: "MAGIK Reparto Corse was created with a stated goal: taking the Magik Kart to the top of international competition. It's not a slogan, it's a work plan with milestones.",
      es: "MAGIK Reparto Corse nace con un objetivo declarado: llevar el Kart Magik a lo más alto de la competición internacional. No es un eslogan, es un plan de trabajo con etapas.",
    },
    keywords: {
      it: ["MAGIK Reparto Corse", "team kart italiano", "Kart Magik", "racing team karting"],
      en: ["MAGIK Reparto Corse", "Italian kart team", "Magik Kart", "karting racing team"],
      es: ["MAGIK Reparto Corse", "equipo kart italiano", "Kart Magik", "racing team karting"],
    },
    tags: {
      it: ["Team", "Magik", "Stagione"],
      en: ["Team", "Magik", "Season"],
      es: ["Equipo", "Magik", "Temporada"],
    },
    sections: [
      {
        id: "progetto",
        heading: { it: "Il progetto", en: "The project", es: "El proyecto" },
        paragraphs: {
          it: [
            "Il reparto corse è il braccio tecnico del marchio Magik: sviluppa il telaio in pista, raccoglie dati reali e li riporta alla produzione. Ogni gara è anche un test di sviluppo.",
          ],
          en: [
            "The racing department is the technical arm of the Magik brand: it develops the chassis on track, collects real data and feeds it back to production. Every race is also a development test.",
          ],
          es: [
            "El departamento de competición es el brazo técnico de la marca Magik: desarrolla el chasis en pista, recoge datos reales y los devuelve a producción. Cada carrera es también un test de desarrollo.",
          ],
        },
      },
      {
        id: "metodo",
        heading: { it: "Il metodo", en: "The method", es: "El método" },
        paragraphs: {
          it: [
            "Ruoli definiti, registro delle modifiche, telemetria su ogni sessione e un debrief dopo ogni run. La costanza vale più del colpo di genio: i decimi arrivano da un processo ripetibile.",
          ],
          en: [
            "Defined roles, a change log, telemetry on every session and a debrief after every run. Consistency beats flashes of genius: tenths come from a repeatable process.",
          ],
          es: [
            "Roles definidos, registro de cambios, telemetría en cada sesión y un debrief después de cada run. La constancia vale más que el golpe de genio: las décimas llegan de un proceso repetible.",
          ],
        },
      },
      {
        id: "obiettivo",
        heading: { it: "L'obiettivo", en: "The goal", es: "El objetivo" },
        paragraphs: {
          it: [
            "Crescere piloti competitivi, sviluppare un telaio omologato CIK-FIA capace di stare davanti e portare il nome Magik nelle categorie internazionali. La direzione è chiara e ogni stagione è un capitolo.",
          ],
          en: [
            "Develop competitive drivers, build a CIK-FIA homologated chassis capable of running at the front, and take the Magik name into international categories. The direction is clear and every season is a chapter.",
          ],
          es: [
            "Formar pilotos competitivos, desarrollar un chasis homologado CIK-FIA capaz de ir delante y llevar el nombre Magik a las categorías internacionales. La dirección es clara y cada temporada es un capítulo.",
          ],
        },
      },
    ],
  },
  {
    slug: "consigli-piloti-giovani",
    category: { it: "Consigli", en: "Tips", es: "Consejos" },
    date: "2025-06-18",
    cover: coverPilot,
    title: {
      it: "5 consigli per giovani piloti di kart (e per i loro genitori)",
      en: "5 tips for young kart drivers (and their parents)",
      es: "5 consejos para jóvenes pilotos de kart (y para sus padres)",
    },
    excerpt: {
      it: "Mentalità, costanza, lettura dei dati e rapporto con il team: i fondamentali che fanno crescere davvero un giovane pilota.",
      en: "Mindset, consistency, data reading and team relationship: the fundamentals that actually grow a young driver.",
      es: "Mentalidad, constancia, lectura de datos y relación con el equipo: los fundamentales que hacen crecer de verdad a un joven piloto.",
    },
    intro: {
      it: "Vediamo passare decine di ragazzi ogni stagione. Chi migliora più in fretta non è quasi mai il più talentuoso: è quello che lavora meglio tra una gara e l'altra.",
      en: "We see dozens of kids every season. The ones who improve fastest are almost never the most talented: they're the ones who work best between races.",
      es: "Vemos pasar decenas de chicos cada temporada. Quien mejora más rápido casi nunca es el más talentoso: es quien trabaja mejor entre una carrera y la siguiente.",
    },
    keywords: {
      it: [
        "consigli giovani piloti kart",
        "come migliorare in kart",
        "allenamento pilota kart",
        "karting bambini consigli",
      ],
      en: [
        "young kart driver tips",
        "how to get faster in karting",
        "kart driver training",
        "karting for kids advice",
      ],
      es: [
        "consejos jóvenes pilotos kart",
        "cómo mejorar en kart",
        "entrenamiento piloto kart",
        "karting niños consejos",
      ],
    },
    tags: {
      it: ["Piloti", "Crescita", "Metodo"],
      en: ["Drivers", "Development", "Method"],
      es: ["Pilotos", "Crecimiento", "Método"],
    },
    sections: [
      {
        id: "cinque",
        heading: { it: "I cinque punti", en: "The five points", es: "Los cinco puntos" },
        paragraphs: {
          it: [
            "Sono semplici da leggere e difficili da applicare con costanza. Proprio per questo fanno la differenza.",
          ],
          en: [
            "They're simple to read and hard to apply consistently. That's exactly why they make the difference.",
          ],
          es: [
            "Son fáciles de leer y difíciles de aplicar con constancia. Precisamente por eso marcan la diferencia.",
          ],
        },
        bullets: {
          it: [
            "Impara a raccontare cosa fa il kart: un feedback preciso vale più di un giro veloce isolato.",
            "Lavora sulla costanza: dieci giri nello stesso decimo battono un giro record.",
            "Guarda i dati con il tecnico, non da solo: la telemetria va interpretata.",
            "Cura la preparazione fisica, soprattutto collo e core: la stanchezza costa errori nel finale.",
            "Gestisci le sconfitte come dati, non come giudizi: ogni gara storta contiene un'informazione utile.",
          ],
          en: [
            "Learn to describe what the kart does: precise feedback is worth more than one isolated fast lap.",
            "Work on consistency: ten laps within the same tenth beats a single record lap.",
            "Review data with the engineer, not alone: telemetry needs interpretation.",
            "Train physically, especially neck and core: fatigue costs mistakes late in the race.",
            "Treat defeats as data, not verdicts: every bad race contains useful information.",
          ],
          es: [
            "Aprende a contar qué hace el kart: un feedback preciso vale más que una vuelta rápida aislada.",
            "Trabaja la constancia: diez vueltas en la misma décima ganan a una vuelta récord.",
            "Mira los datos con el técnico, no solo: la telemetría hay que interpretarla.",
            "Cuida la preparación física, sobre todo cuello y core: el cansancio cuesta errores al final.",
            "Gestiona las derrotas como datos, no como juicios: cada carrera torcida contiene información útil.",
          ],
        },
      },
      {
        id: "genitori",
        heading: { it: "Una nota per i genitori", en: "A note for parents", es: "Una nota para los padres" },
        paragraphs: {
          it: [
            "Il ruolo più utile è quello di supporto logistico e emotivo. La parte tecnica va lasciata al team: quando pilota e genitore ricevono indicazioni diverse, il risultato peggiora sempre.",
          ],
          en: [
            "The most useful role is logistical and emotional support. Leave the technical side to the team: when driver and parent get different instructions, results always suffer.",
          ],
          es: [
            "El rol más útil es el de apoyo logístico y emocional. La parte técnica hay que dejarla al equipo: cuando piloto y padre reciben indicaciones distintas, el resultado siempre empeora.",
          ],
        },
      },
    ],
  },
];

const WORDS_PER_MINUTE = 200;

export function readingMinutes(post: Post, lang: Lang): number {
  const chunks = [
    post.intro[lang],
    ...post.sections.flatMap((s) => [
      s.heading[lang],
      ...s.paragraphs[lang],
      ...(s.bullets?.[lang] ?? []),
    ]),
    ...(post.faq?.flatMap((f) => [f.q[lang], f.a[lang]]) ?? []),
  ];
  const words = chunks.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / WORDS_PER_MINUTE));
}

export function postPlainText(post: Post, lang: Lang): string {
  return [
    post.intro[lang],
    ...post.sections.flatMap((s) => [
      s.heading[lang],
      ...s.paragraphs[lang],
      ...(s.bullets?.[lang] ?? []),
    ]),
  ].join(" ");
}

export function relatedPosts(post: Post, lang: Lang, limit = 3): Post[] {
  const tags = new Set(post.tags[lang]);
  return posts
    .filter((p) => p.slug !== post.slug)
    .map((p) => {
      const overlap = p.tags[lang].filter((tg) => tags.has(tg)).length;
      const sameCategory = p.category[lang] === post.category[lang] ? 1 : 0;
      return { p, score: overlap * 2 + sameCategory };
    })
    .sort((a, b) => b.score - a.score || (a.p.date < b.p.date ? 1 : -1))
    .slice(0, limit)
    .map((x) => x.p);
}
