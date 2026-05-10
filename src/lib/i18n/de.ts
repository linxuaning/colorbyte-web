import type { LocaleSEO, ToolClientCopy } from "./types";

const deRestoreClient: ToolClientCopy = {
  dropHeadline: "Foto hier ablegen",
  dropHint: "oder klicken zum Auswählen · JPG, PNG, WEBP · Max. 20 MB",
  uploadCta: "Foto zum Restaurieren hochladen",
  pasteHint: "Du kannst auch ein Bild mit Strg+V einfügen",
  colorizeToggle: "Schwarz-Weiß-Foto kolorieren",

  uploading: "Wird hochgeladen...",
  retryingUpload: "Upload wird wiederholt ({n}/3)...",
  processingStarted: "Verarbeitung gestartet...",
  processingDefault: "Verarbeitung...",
  actionVerbIng: "Restauriere",
  warmupNotice: "Die erste Restaurierung kann etwas länger dauern, während die KI hochfährt.",
  elapsedSuffix: "vergangen",
  serverWakingUp: "Server startet, bitte warten",
  aiWarmingUp: "KI-Modell wird vorbereitet, fast fertig",

  errorInvalidFileType: "Ungültiger Dateityp. Bitte lade eine JPG-, PNG- oder WEBP-Datei hoch.",
  errorFileTooLarge: "Datei zu groß. Maximale Größe ist 20 MB.",
  errorUploadFailed: "Upload fehlgeschlagen",
  errorUploadTimeout:
    "Zeitüberschreitung beim Upload — der Server startet möglicherweise gerade. Bitte in Kürze erneut versuchen.",
  errorProcessingTimeout:
    "Zeitüberschreitung bei der Verarbeitung. Der KI-Dienst startet möglicherweise gerade — bitte erneut versuchen.",
  errorProcessingFailed: "Verarbeitung fehlgeschlagen. Bitte erneut versuchen.",
  errorTitle: "Etwas ist schiefgelaufen",
  errorBody:
    "Etwas ist schiefgelaufen. Bitte versuche es erneut — deine Datei ist noch da. Brauchst du Hilfe?",
  errorRetrySame: "Gleiches Foto erneut versuchen",
  errorTryAgain: "Erneut versuchen",
  errorUploadDifferent: "Ein anderes Foto hochladen",

  restartAnother: "Weiteres Foto restaurieren",
};

const deColorizeClient: ToolClientCopy = {
  ...deRestoreClient,
  dropHeadline: "Schwarz-Weiß-Foto hier ablegen",
  uploadCta: "Foto zum Kolorieren hochladen",
  actionVerbIng: "Koloriere",
  warmupNotice: "Die erste Kolorierung kann etwas länger dauern, während die KI hochfährt.",
  restartAnother: "Weiteres Foto kolorieren",
};

const deEnhanceClient: ToolClientCopy = {
  ...deRestoreClient,
  uploadCta: "Foto zum Verbessern hochladen",
  colorizeToggle: "Auch kolorieren, falls Schwarz-Weiß",
  actionVerbIng: "Verbessere",
  warmupNotice: "Die erste Verbesserung kann etwas länger dauern, während die KI hochfährt.",
  restartAnother: "Weiteres Foto verbessern",
};

export const de: LocaleSEO = {
  oldPhotoRestoration: {
    title: "Alte Fotos Kostenlos Restaurieren — KI für Alte Bilder Online",
    description:
      "Restaurieren Sie alte Fotos kostenlos mit KI. Reparieren Sie Schäden, entfernen Sie Kratzer und verbessern Sie die Bildqualität in Sekunden. Ohne Registrierung.",
    keywords: [
      "alte Fotos restaurieren kostenlos",
      "alte Fotos reparieren online",
      "Fotorestaurierung kostenlos",
      "alte Bilder restaurieren KI",
      "beschädigte Fotos reparieren",
    ],
    h1: "Restaurieren Sie alte Fotos mit KI — kostenlos.",
    subtitle: "Laden Sie Ihr Foto hoch. Die KI repariert Schäden, entfernt Kratzer und verbessert die Qualität in Sekunden.",
    badge: "OHNE REGISTRIERUNG · ERGEBNIS IN SEKUNDEN",
    ctaPrimary: "Foto kostenlos restaurieren",
    ctaSecondary: "Beispiele ansehen",
    faqItems: [
      { q: "Muss ich bezahlen, bevor ich mein Foto hochlade?", a: "Ja, ein einmaliger Kauf ist erforderlich, um auf das Tool zuzugreifen. Nach der Zahlung können Sie beliebig viele Fotos restaurieren." },
      { q: "Welche Bildformate werden akzeptiert?", a: "JPG, PNG und WEBP bis zu 20 MB." },
      { q: "Wie lange dauert die Restaurierung?", a: "In der Regel 10 bis 30 Sekunden, je nach Größe und Zustand des Fotos." },
      { q: "Welche Arten von Schäden kann die KI reparieren?", a: "Kratzer, Flecken, Farbverblassung, Risse und allgemeine Alterungsschäden." },
      { q: "Wird mein Foto auf Ihren Servern gespeichert?", a: "Fotos werden sicher verarbeitet und nicht dauerhaft auf unseren Servern gespeichert." },
    ],
    howToSteps: [
      { name: "Einmalig bezahlen und freischalten", text: "Ein einmaliger Kauf schaltet den vollständigen Zugang zum Restaurierungs-Tool frei." },
      { name: "Altes Foto hochladen", text: "Wählen Sie ein Foto im Format JPG, PNG oder WEBP bis zu 20 MB aus." },
      { name: "KI restauriert das Bild", text: "Unsere KI analysiert und repariert Schäden, Kratzer und Alterung automatisch in Sekunden." },
      { name: "Ergebnis herunterladen", text: "Laden Sie Ihr restauriertes Foto in hoher Auflösung herunter." },
    ],
  },
  colorizer: {
    title: "Alte Fotos Kostenlos Colorieren — KI für Schwarz-Weiß-Fotos Online",
    description:
      "Colorieren Sie Ihre Schwarz-Weiß-Fotos kostenlos mit KI. Realistische Farben in Sekunden. Ohne Registrierung.",
    keywords: [
      "Fotos colorieren kostenlos",
      "Schwarz-Weiß-Fotos colorieren",
      "Fotos colorieren online kostenlos",
      "Fotos colorieren mit KI",
      "alte Bilder colorieren kostenlos",
    ],
    h1: "Colorieren Sie Ihre Schwarz-Weiß-Fotos mit KI — kostenlos.",
    subtitle: "Laden Sie Ihr Foto hoch. Die KI fügt in Sekunden realistische Farben hinzu.",
    badge: "OHNE REGISTRIERUNG · ERGEBNIS IN SEKUNDEN",
    ctaPrimary: "Foto kostenlos colorieren",
    ctaSecondary: "Beispiele ansehen",
    faqItems: [
      { q: "Muss ich bezahlen, bevor ich mein Foto hochlade?", a: "Ja, ein einmaliger Kauf von $4,99 ist erforderlich, um auf das Tool zuzugreifen. Nach der Zahlung können Sie beliebig viele Fotos colorieren. Kein Abonnement." },
      { q: "Wie lange dauert das KI-Colorieren?", a: "Die meisten Fotos werden in 30 Sekunden coloriert. Komplexe Bilder können bis zu 90 Sekunden dauern." },
      { q: "Sind meine Fotos sicher?", a: "Ja. Alle Fotos werden über verschlüsseltes HTTPS übertragen und innerhalb von 24 Stunden dauerhaft von unseren Servern gelöscht. Wir geben Ihre Fotos niemals weiter und nutzen sie nicht zum Training von Modellen." },
    ],
    howToSteps: [
      { name: "Einmalig bezahlen und freischalten", text: "Ein einmaliger Kauf von $4,99 schaltet den vollständigen Zugang zum Colorierungs-Tool frei. Kein Abonnement." },
      { name: "Schwarz-Weiß-Foto hochladen", text: "Laden Sie ein beliebiges Schwarz-Weiß- oder Graustufenfoto hoch. Unterstützte Formate: JPG, PNG, WEBP bis zu 20 MB." },
      { name: "Coloriertes Foto herunterladen", text: "Die KI fügt realistische Farben in Sekunden hinzu. Laden Sie das Ergebnis in Originalqualität herunter." },
    ],
  },
  enhancer: {
    title: "Fotos Kostenlos Verbessern — KI für Unscharfe Bilder Online",
    description:
      "Verbessern Sie die Qualität Ihrer Fotos kostenlos mit KI. Schärfen Sie unscharfe Bilder, erhöhen Sie die Auflösung und holen Sie verlorene Details zurück. Ohne Registrierung.",
    keywords: [
      "Fotos verbessern kostenlos",
      "Fotos verbessern kostenlos",
      "unscharfe Fotos verbessern online",
      "Bildauflösung erhöhen kostenlos",
      "Fotos verbessern mit KI kostenlos",
    ],
    h1: "Verbessern Sie die Qualität Ihrer alten Fotos mit KI — kostenlos.",
    subtitle: "Laden Sie Ihr Foto hoch. Die KI schärft das Bild und erhöht die Auflösung in Sekunden.",
    badge: "OHNE REGISTRIERUNG · ERGEBNIS IN SEKUNDEN",
    ctaPrimary: "Foto kostenlos verbessern",
    ctaSecondary: "Beispiele ansehen",
    faqItems: [
      { q: "Muss ich bezahlen, bevor ich mein Foto hochlade?", a: "Ja, ein einmaliger Kauf von $4,99 ist erforderlich, um auf das Tool zuzugreifen. Nach der Zahlung können Sie beliebig viele Fotos verbessern. Kein Abonnement." },
      { q: "Wie lange dauert die KI-Verbesserung?", a: "Die meisten Fotos werden in 30 Sekunden verbessert. Komplexe Bilder können bis zu 90 Sekunden dauern." },
      { q: "Sind meine Fotos sicher?", a: "Ja. Alle Fotos werden über verschlüsseltes HTTPS übertragen und innerhalb von 24 Stunden dauerhaft von unseren Servern gelöscht. Wir geben Ihre Fotos niemals weiter und nutzen sie nicht zum Training von Modellen." },
    ],
    howToSteps: [
      { name: "Einmalig bezahlen und freischalten", text: "Ein einmaliger Kauf von $4,99 schaltet den vollständigen Zugang zum Verbesserungs-Tool frei. Kein Abonnement." },
      { name: "Foto hochladen", text: "Laden Sie ein beliebiges unscharfes, niedrig aufgelöstes oder qualitativ schlechtes Foto hoch. Unterstützte Formate: JPG, PNG, WEBP bis zu 20 MB." },
      { name: "Verbessertes Foto herunterladen", text: "Die KI entfernt Unschärfe und erhöht die Auflösung bis zu 4× in Sekunden. Laden Sie das Ergebnis in Originalqualität herunter." },
    ],
  },
  denoiser: {
    title: "KI-Entrauscher für Fotos — Bildgranulat Online Entfernen",
    description: "Entfernen Sie Körnung, Sensorrauschen und digitale Artefakte aus Ihren Fotos mit KI. NAFNet bewahrt Details, während es jeden Pixel bereinigt. 4,99 $ Einmalzahlung.",
    keywords: ["Bildrauschen entfernen", "Foto Körnung entfernen KI", "Denoiser Foto online", "Sensorrauschen Foto", "Rauschreduzierung Bild"],
    h1: "Entfernen Sie Rauschen und Körnung aus Fotos mit KI",
    subtitle: "Laden Sie Ihr Foto hoch. Die KI entfernt Körnung, Sensorrauschen und digitale Artefakte in Sekunden. 4,99 $ Einmalzahlung.",
    badge: "Einmalzahlung · Kein Abo",
    ctaPrimary: "Rauschen entfernen",
    ctaSecondary: "Beispiele ansehen",
    faqItems: [
      { q: "Welche Arten von Rauschen können entfernt werden?", a: "Sensorrauschen von Smartphones, Hochiso-Körnung, Farb- und Helligkeitsrauschen sowie JPEG-Kompressionsartefakte." },
      { q: "Wie lange dauert die Verarbeitung?", a: "30–60 Sekunden pro Foto, abhängig von Bildgröße und Serverlast." },
      { q: "Was kostet es?", a: "4,99 $ Einmalzahlung. Kein Abonnement." },
    ],
  },
  deblurrer: {
    title: "Fotos Schärfen mit KI — Unschärfe Online Entfernen",
    description: "KI korrigiert Bewegungsunschärfe, Kamerawackeln und Fokusunschärfe. NAFNet GoPro-Modell stellt Schärfe in 30–60 Sekunden wieder her. 4,99 $ Einmalzahlung.",
    keywords: ["unscharfes Foto schärfen", "Bewegungsunschärfe entfernen KI", "verwackeltes Foto korrigieren", "Fokusunschärfe KI", "Foto schärfen online"],
    h1: "Unscharfe und Verwackelte Fotos mit KI Schärfen",
    subtitle: "Die KI beseitigt Bewegungsunschärfe, Kamerawackeln und Fokusunschärfe in 30–60 Sekunden. 4,99 $ Einmalzahlung.",
    badge: "Einmalzahlung · Kein Abo",
    ctaPrimary: "Foto schärfen",
    ctaSecondary: "Beispiele ansehen",
    faqItems: [
      { q: "Welche Arten von Unschärfe können korrigiert werden?", a: "Bewegungsunschärfe, leichte Fokusunschärfe, Kamerawackeln und allgemeine Weichheit. Das NAFNet GoPro-Modell ist speziell für echte Bewegungsunschärfe trainiert." },
      { q: "Wie lange dauert die Verarbeitung?", a: "30–60 Sekunden pro Foto, abhängig von Bildgröße und Serverlast." },
      { q: "Was kostet es?", a: "4,99 $ Einmalzahlung. Kein Abonnement." },
    ],
  },
  jpegFix: {
    title: "JPEG-Artefakte mit KI Entfernen — Kompression Online Bereinigen",
    description: "SwinIR entfernt JPEG-Blockierung, Ringing und Banding in Sekunden. Stellen Sie die ursprüngliche Bildqualität komprimierter Bilder wieder her. 4,99 $ Einmalzahlung.",
    keywords: ["JPEG Artefakte entfernen", "JPEG Kompression bereinigen", "Bildqualität JPEG verbessern", "JPEG Artefakte Foto", "SwinIR online"],
    h1: "JPEG-Kompressionsartefakte mit KI Entfernen",
    subtitle: "SwinIR entfernt JPEG-Blockierung, Ringing und Banding in Sekunden. 4,99 $ Einmalzahlung.",
    badge: "Einmalzahlung · Kein Abo",
    ctaPrimary: "JPEG-Artefakte entfernen",
    ctaSecondary: "Beispiele ansehen",
    faqItems: [
      { q: "Was sind JPEG-Artefakte?", a: "Wenn Sie ein Bild als JPEG speichern, erzeugt die Kompression sichtbare Fehler: Quadratische Blöcke, Halos um Kanten und Farbbänder. SwinIR entfernt diese und stellt die ursprünglichen Details wieder her." },
      { q: "Wie lange dauert die Verarbeitung?", a: "30–60 Sekunden pro Foto." },
      { q: "Was kostet es?", a: "4,99 $ Einmalzahlung. Kein Abonnement." },
    ],
  },
  homePage: {
    metaTitle: "ArtImageHub — KI-Fotorestaurierung, -Verbesserung und -Kolorierung",
    metaDescription:
      "Restauriere alte Fotos, verbessere die Bildqualität und koloriere Schwarz-Weiß-Bilder mit KI. Kostenlos starten und das HD-Original für 4,99 $ herunterladen.",
    ogTitle: "ArtImageHub — KI-Fotorestaurierung",
    ogDescription:
      "Restauriere alte Fotos, verbessere die Qualität und koloriere Schwarz-Weiß-Bilder mit ArtImageHub. Einmalzahlung von 4,99 $. Ergebnisse in 30–90 Sekunden. Kein Abonnement.",

    heroEyebrow: "Seit 2024 · KI-Restaurationsstudio",
    heroH1: "Erwecke verblasste Erinnerungen mit KI-Fotorestaurierung wieder zum Leben.",
    heroSubhead:
      "Lade ein beschädigtes, verblasstes oder Schwarz-Weiß-Foto hoch — unsere KI restauriert es in Sekunden zu beeindruckender Klarheit. Kostenlos starten und das HD-Original für 4,99 $ wählen, wenn du es behalten willst.",
    heroCtaPrimary: "Foto kostenlos restaurieren",
    heroBullets: ["Kostenlose Vorschau", "HD-Original 4,99 $", "Sofortige Ergebnisse"] as const,
    heroTrustStrip: [
      "Kostenlose Vorschau vor dem Kauf",
      "Innerhalb von 24 Stunden vom Server gelöscht",
      "JPG, PNG, WEBP bis zu 20 MB",
    ] as const,
    heroTrustSignals: [
      "Restaurierung in Profi-Qualität",
      "Ergebnisse in 30 Sekunden",
      "Einmalzahlung, kein Abonnement",
    ] as const,
    heroBadges: [
      "Sichere Zahlung",
      "100 % Privatsphäre",
      "In 24 h gelöscht · Vor Ablauf herunterladen",
      "Geld-zurück-Garantie",
    ] as const,
    heroSidebarLabel: "Familien weltweit vertrauen uns",
    heroSidebarStat: "10.000+",
    heroSidebarStatLabel: "Wiederhergestellte Erinnerungen",
    heroBottomBorder: "Gesichtsverbesserung · Super-Auflösung · Kolorierung",
    heroBottomEst: "Est. 2024",

    featuresEyebrow: "Funktionen",
    featuresH2: "Alles, was dein Foto braucht.",
    featuresSubhead:
      "Sechs Jahrzehnte fotografischer Verfall, in dreißig Sekunden rückgängig gemacht durch maßgeschneiderte neuronale Netze.",
    features: [
      {
        title: "Gesichtsverbesserung",
        desc: "Rekonstruiere Gesichtsdetails, die durch Alter oder Schäden verloren gingen. Mit GFPGAN-Netzen holen wir scharfe Augen, natürliche Hauttextur und den ursprünglichen Ausdruck zurück.",
      },
      {
        title: "4× Super-Auflösung",
        desc: "Vergrößere mit KI bis zur 4-fachen Auflösung — kristallklare Details, wiederhergestellt aus Scans niedrigster Qualität, gealterten Abzügen und zerrissenen Originalen.",
      },
      {
        title: "Automatische Kolorierung",
        desc: "Füge Schwarz-Weiß-Fotos natürliche, historisch genaue Farben hinzu. Himmel werden blau, Hauttöne warm — alles mit einem Klick.",
      },
      {
        title: "Reparatur von Kratzern und Schäden",
        desc: "Entferne Risse, Wasserflecken, Knickspuren und Altersflecken. Unser Inpainting-Modell füllt verlorene Details nahtlos auf.",
      },
      {
        title: "Qualitätsverbesserung",
        desc: "Korrigiere Belichtung, Kontrast und Rauschen gleichzeitig. Jeder Pixel wird analysiert und für ein natürliches, ausgewogenes Ergebnis korrigiert.",
      },
      {
        title: "Sofortiger Download",
        desc: "Vergleiche Vorher und Nachher mit unserem interaktiven Schieberegler und lade dein restauriertes Foto in voller Auflösung herunter.",
      },
    ] as const,

    stats: [
      { number: "10.000+", label: "Restaurierte Fotos", sub: "und es werden mehr" },
      { number: "30 s", label: "Durchschnittliche Bearbeitung", sub: "Ergebnisse in Sekunden" },
      { number: "4,8★", label: "Nutzerbewertung", sub: "aus über 2.400 Bewertungen" },
    ] as const,
    testimonialsEyebrow: "Stimmen",
    testimonialsH2: "Familien weltweit vertrauen uns",
    testimonials: [
      {
        quote:
          "Anfangs war ich skeptisch, aber das Ergebnis hat mich umgehauen. Das beschädigte Porträt meines Urgroßvaters von 1942 sieht aus wie neu. Die KI hat sogar Details wiederhergestellt, von denen ich nicht wusste, dass sie da waren.",
        author: "Michael Chen",
        location: "San Francisco, CA",
      },
      {
        quote:
          "Als professionelle Genealogin empfehle ich dieses Tool allen meinen Klient:innen. Es ist schneller und günstiger als die klassische Restaurierung, und die Qualität ist durchgehend hervorragend.",
        author: "Dr. Patricia Moore",
        location: "Boston, MA",
      },
      {
        quote:
          "Ich habe im letzten Monat über 50 Familienfotos restauriert. Die Kolorierungsfunktion ist unglaublich — sie hat den Schwarz-Weiß-Hochzeitsfotos meiner Großmutter neues Leben eingehaucht. Jeden Cent wert.",
        author: "James Rodriguez",
        location: "Austin, TX",
      },
    ] as const,

    howEyebrow: "Ablauf",
    howH2: "Drei Schritte. Dreißig Sekunden.",
    howSteps: [
      {
        n: "1",
        title: "Bezahlten Zugang freischalten",
        desc: "Beginne mit dem Checkout, damit Upload und Verarbeitung für diese E-Mail-Adresse aktiviert werden, bevor du das Tool nutzt.",
      },
      {
        n: "2",
        title: "Mit derselben E-Mail hochladen",
        desc: "Kehre nach der Zahlung zum Tool zurück und lade dein beschädigtes, verblasstes, schwarz-weißes oder qualitativ schwaches Foto hoch.",
      },
      {
        n: "3",
        title: "Verarbeiten und herunterladen",
        desc: "Wenn die Verarbeitung gelingt, hält dieselbe E-Mail den Pfad zum Original-Download offen.",
      },
    ] as const,
    howCtaPrimary: "Foto kostenlos restaurieren",

    compareEyebrow: "Vergleichen, bevor du wählst",
    compareH2: "Beginne mit den Fragen mit höchster Kaufabsicht.",
    compareSubhead:
      "Wer bereits Tools vergleicht, ist näher am Handeln als allgemeine Besucher. Wir leiten diese Absicht in direkte Vergleichsseiten und dann in den Restaurations-Flow.",
    compareLabel: "Landingpage mit hoher Absicht",
    compareCards: [
      {
        title: "ArtImageHub vs Remini",
        desc: "Ideal für Nutzer, die zwischen KI-Verbesserern schwanken und den besseren Workflow für alte Familienfotos suchen.",
        points: [
          "Vergleiche Restaurierungsqualität, Preis und Artefakt-Kontrolle",
          "Sieh, welches Tool besser für verblasste Porträts und beschädigte Abzüge ist",
          "Springe nach dem Vergleich direkt in unseren Restaurierungs-Flow",
        ],
        cta: "Remini-Vergleich lesen",
      },
      {
        title: "KI-Restaurierung vs Photoshop",
        desc: "Ideal für Nutzer, die Geschwindigkeit, Aufwand und Qualität abwägen, bevor sie sich für manuelle Bearbeitung entscheiden.",
        points: [
          "Vergleiche Gesamtaufwand, Bearbeitungszeit und Realismus",
          "Klär, wann manuelle Bearbeitung für die Familienfoto-Wiederherstellung übertrieben ist",
          "Wechsle direkt von der Bewertung in eine Live-KI-Restaurierung",
        ],
        cta: "Photoshop-Vergleich lesen",
      },
    ] as const,
    compareDirectCta: "Direkt zur Restaurierung",

    faqEyebrow: "FAQ",
    faqH2: "Antworten auf deine Fragen.",
    faqSubheadPrefix: "Alles, was du vor dem Start wissen musst. Findest du keine Antwort? ",
    faqVisitJournalLink: "Schau in unser Journal",
    faqSubheadSuffix: ".",
    faqItems: [
      {
        q: "Welche Bildformate werden unterstützt?",
        a: "JPG-, PNG- und WEBP-Formate — bis zu 20 MB pro Datei.",
      },
      {
        q: "Was passiert nach der Zahlung?",
        a: "Deine Zahlung schaltet Upload und KI-Verarbeitung für diese E-Mail-Adresse frei. Sobald die Verarbeitung abgeschlossen ist, schaltet dieselbe E-Mail den HD-Download in Originalqualität frei — ohne Wasserzeichen, ohne Abonnement.",
      },
      {
        q: "Sind meine Fotodaten privat und sicher?",
        a: "Ja. Alle hochgeladenen Fotos werden nach 24 Stunden automatisch gelöscht. Wir speichern, teilen oder trainieren niemals Modelle mit deinen Bildern.",
      },
      {
        q: "Wie funktioniert der Zugang?",
        a: "Die Zahlung schaltet Upload und Verarbeitung für diese E-Mail frei. Wenn die Verarbeitung gelingt, schaltet dieselbe E-Mail den Download in Originalqualität frei.",
      },
      {
        q: "Brauche ich ein Abonnement?",
        a: "Nein. Es ist eine Einmalzahlung, die den Zugang für diese E-Mail freischaltet. Keine wiederkehrenden Gebühren.",
      },
    ] as const,

    finalH2: "Deine Erinnerungen verdienen es, wieder zu strahlen.",
    finalSubhead:
      "Zahle einmal, um Upload und Verarbeitung für diese E-Mail freizuschalten, und mache dann im Tool weiter. Erwecke die Geschichte deiner Familie wieder zum Leben, ohne erneut in das Versprechen einer kostenlosen Vorschau abzudriften.",
    finalCtaPrimary: "Foto kostenlos restaurieren",
    finalCtaSecondary: "Preise ansehen",
    finalTagline: "Bezahlter Zugang vor dem Upload · Einmalzahlung · Kein Abonnement",
  },
  toolClient: {
    restore: deRestoreClient,
    colorize: deColorizeClient,
    enhance: deEnhanceClient,
  },
};
