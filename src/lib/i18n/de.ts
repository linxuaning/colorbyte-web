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
  toolClient: {
    restore: deRestoreClient,
    colorize: deColorizeClient,
    enhance: deEnhanceClient,
  },
};
