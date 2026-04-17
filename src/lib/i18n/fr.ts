import type { LocaleSEO, ToolClientCopy } from "./types";

const frRestoreClient: ToolClientCopy = {
  dropHeadline: "Déposez votre photo ici",
  dropHint: "ou cliquez pour parcourir · JPG, PNG, WEBP · Max 20 Mo",
  uploadCta: "Importer une photo à restaurer",
  pasteHint: "Vous pouvez aussi coller une image avec Ctrl+V",
  colorizeToggle: "Coloriser la photo en noir et blanc",

  uploading: "Téléversement...",
  retryingUpload: "Nouvelle tentative ({n}/3)...",
  processingStarted: "Traitement démarré...",
  processingDefault: "Traitement en cours...",
  actionVerbIng: "Restauration en cours",
  warmupNotice: "La première restauration peut prendre un instant, le temps que l'IA démarre.",
  elapsedSuffix: "écoulées",
  serverWakingUp: "Le serveur démarre, veuillez patienter",
  aiWarmingUp: "Le modèle IA se prépare, presque prêt",

  errorInvalidFileType: "Type de fichier non valide. Importez un fichier JPG, PNG ou WEBP.",
  errorFileTooLarge: "Fichier trop volumineux. Taille maximale : 20 Mo.",
  errorUploadFailed: "Échec du téléversement",
  errorUploadTimeout:
    "Délai de téléversement dépassé — le serveur est peut-être en cours de démarrage. Réessayez dans un instant.",
  errorProcessingTimeout:
    "Délai de traitement dépassé. Le service IA est peut-être en cours de démarrage — réessayez.",
  errorProcessingFailed: "Le traitement a échoué. Réessayez.",
  errorTitle: "Une erreur est survenue",
  errorBody:
    "Une erreur est survenue. Réessayez — votre fichier est toujours là. Besoin d'aide ?",
  errorRetrySame: "Réessayer la même photo",
  errorTryAgain: "Réessayer",
  errorUploadDifferent: "Importer une autre photo",

  restartAnother: "Restaurer une autre photo",
};

const frColorizeClient: ToolClientCopy = {
  ...frRestoreClient,
  dropHeadline: "Déposez votre photo noir et blanc ici",
  uploadCta: "Importer une photo à coloriser",
  actionVerbIng: "Colorisation en cours",
  warmupNotice: "La première colorisation peut prendre un instant, le temps que l'IA démarre.",
  restartAnother: "Coloriser une autre photo",
};

const frEnhanceClient: ToolClientCopy = {
  ...frRestoreClient,
  uploadCta: "Importer une photo à améliorer",
  colorizeToggle: "Coloriser aussi si la photo est en noir et blanc",
  actionVerbIng: "Amélioration en cours",
  warmupNotice: "La première amélioration peut prendre un instant, le temps que l'IA démarre.",
  restartAnother: "Améliorer une autre photo",
};

export const fr: LocaleSEO = {
  oldPhotoRestoration: {
    title: "Restaurer des Vieilles Photos Gratuitement — IA pour Photos Anciennes",
    description:
      "Restaurez vos vieilles photos gratuitement grâce à l'IA. Réparez les dommages, supprimez les rayures et améliorez la netteté de vos souvenirs. Sans inscription.",
    keywords: [
      "restaurer vieilles photos gratuitement",
      "restauration photo ancienne gratuite",
      "réparer photos anciennes en ligne",
      "retoucher vieilles photos IA",
      "restaurer photo abîmée",
    ],
    h1: "Restaurez vos vieilles photos avec l'IA — gratuitement.",
    subtitle: "Importez votre photo. L'IA répare les dégâts, supprime les rayures et améliore la qualité en quelques secondes.",
    badge: "SANS INSCRIPTION · RÉSULTAT EN QUELQUES SECONDES",
    ctaPrimary: "Restaurer ma photo gratuitement",
    ctaSecondary: "Voir des exemples",
    faqItems: [
      { q: "Dois-je payer avant d'importer ma photo ?", a: "Oui, un paiement unique est nécessaire pour accéder à l'outil. Une fois payé, vous pouvez restaurer autant de photos que vous le souhaitez." },
      { q: "Quels formats d'image sont acceptés ?", a: "JPG, PNG et WEBP jusqu'à 20 Mo." },
      { q: "Combien de temps prend la restauration ?", a: "Généralement entre 10 et 30 secondes, selon la taille et l'état de la photo." },
      { q: "Quels types de dommages l'IA peut-elle réparer ?", a: "Rayures, taches, décoloration, déchirures et détérioration générale due au temps." },
      { q: "Ma photo est-elle stockée sur vos serveurs ?", a: "Les photos sont traitées en toute sécurité et ne sont pas stockées de façon permanente sur nos serveurs." },
    ],
    howToSteps: [
      { name: "Payez pour débloquer", text: "Un paiement unique débloque l'accès complet à l'outil de restauration." },
      { name: "Importez votre vieille photo", text: "Sélectionnez une photo au format JPG, PNG ou WEBP jusqu'à 20 Mo." },
      { name: "L'IA restaure l'image", text: "Notre IA analyse et répare automatiquement les dommages, rayures et détérioration en quelques secondes." },
      { name: "Téléchargez le résultat", text: "Téléchargez votre photo restaurée en haute résolution." },
    ],
  },
  colorizer: {
    title: "Coloriser des Vieilles Photos Gratuitement — IA pour Photos en Noir et Blanc",
    description:
      "Colorisez vos photos en noir et blanc gratuitement grâce à l'IA. Résultats réalistes en quelques secondes. Sans inscription.",
    keywords: [
      "coloriser photos gratuitement",
      "coloriser photos noir et blanc",
      "coloriser photo en ligne gratuit",
      "coloriser photos avec IA",
      "coloriser vieilles photos IA",
    ],
    h1: "Colorisez vos photos en noir et blanc avec l'IA — gratuitement.",
    subtitle: "Importez votre photo. L'IA ajoute des couleurs réalistes en quelques secondes.",
    badge: "SANS INSCRIPTION · RÉSULTAT EN QUELQUES SECONDES",
    ctaPrimary: "Coloriser ma photo gratuitement",
    ctaSecondary: "Voir des exemples",
    faqItems: [
      { q: "Dois-je payer avant d'importer ma photo ?", a: "Oui, un paiement unique de $4,99 est nécessaire pour accéder à l'outil. Une fois payé, vous pouvez coloriser autant de photos que vous le souhaitez. Sans abonnement." },
      { q: "Combien de temps prend la colorisation avec l'IA ?", a: "La plupart des photos sont colorisées en 30 secondes. Les images complexes peuvent prendre jusqu'à 90 secondes." },
      { q: "Mes photos sont-elles conservées en sécurité ?", a: "Oui. Toutes les photos sont transmises via HTTPS chiffré et supprimées définitivement de nos serveurs sous 24 heures. Nous ne partageons ni n'utilisons jamais vos photos pour entraîner des modèles." },
    ],
    howToSteps: [
      { name: "Payez pour débloquer", text: "Un paiement unique de $4,99 débloque l'accès complet à l'outil de colorisation. Sans abonnement." },
      { name: "Importez votre photo en noir et blanc", text: "Importez n'importe quelle photo en noir et blanc ou en niveaux de gris. Formats acceptés : JPG, PNG, WEBP jusqu'à 20 Mo." },
      { name: "Téléchargez votre photo colorisée", text: "L'IA ajoute des couleurs réalistes en quelques secondes. Téléchargez le résultat en qualité originale." },
    ],
  },
  enhancer: {
    title: "Améliorer la Qualité des Photos Gratuitement — IA pour Photos Floues",
    description:
      "Améliorez la qualité de vos photos gratuitement grâce à l'IA. Supprimez le flou, augmentez la résolution et récupérez les détails perdus. Sans inscription.",
    keywords: [
      "améliorer qualité photo gratuitement",
      "améliorer qualité photo gratuitement",
      "améliorer photos floues en ligne",
      "augmenter résolution photo gratuit",
      "améliorer photos avec IA gratuit",
    ],
    h1: "Améliorez la qualité de vos vieilles photos avec l'IA — gratuitement.",
    subtitle: "Importez votre photo. L'IA supprime le flou et augmente la résolution en quelques secondes.",
    badge: "SANS INSCRIPTION · RÉSULTAT EN QUELQUES SECONDES",
    ctaPrimary: "Améliorer ma photo gratuitement",
    ctaSecondary: "Voir des exemples",
    faqItems: [
      { q: "Dois-je payer avant d'importer ma photo ?", a: "Oui, un paiement unique de $4,99 est nécessaire pour accéder à l'outil. Une fois payé, vous pouvez améliorer autant de photos que vous le souhaitez. Sans abonnement." },
      { q: "Combien de temps prend l'amélioration avec l'IA ?", a: "La plupart des photos sont améliorées en 30 secondes. Les images complexes peuvent prendre jusqu'à 90 secondes." },
      { q: "Mes photos sont-elles conservées en sécurité ?", a: "Oui. Toutes les photos sont transmises via HTTPS chiffré et supprimées définitivement de nos serveurs sous 24 heures. Nous ne partageons ni n'utilisons jamais vos photos pour entraîner des modèles." },
    ],
    howToSteps: [
      { name: "Payez pour débloquer", text: "Un paiement unique de $4,99 débloque l'accès complet à l'outil d'amélioration. Sans abonnement." },
      { name: "Importez votre photo", text: "Importez n'importe quelle photo floue, basse résolution ou de mauvaise qualité. Formats acceptés : JPG, PNG, WEBP jusqu'à 20 Mo." },
      { name: "Téléchargez votre photo améliorée", text: "L'IA supprime le flou et augmente la résolution jusqu'à 4× en quelques secondes. Téléchargez le résultat en qualité originale." },
    ],
  },
  toolClient: {
    restore: frRestoreClient,
    colorize: frColorizeClient,
    enhance: frEnhanceClient,
  },
};
