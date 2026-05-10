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
  denoiser: {
    title: "Réducteur de Bruit Photo par IA — Supprimez le Grain en Ligne",
    description: "Éliminez le grain, le bruit de capteur et les artefacts numériques de vos photos avec l'IA. NAFNet préserve les détails tout en nettoyant chaque pixel. 4,99 $ paiement unique.",
    keywords: ["réduire bruit photo", "supprimer grain photo IA", "denoiser photo en ligne", "bruit capteur photo", "réduction bruit image"],
    h1: "Supprimez le Bruit et le Grain de vos Photos avec l'IA",
    subtitle: "Déposez votre photo. L'IA supprime le grain, le bruit de capteur et les artefacts numériques en quelques secondes. 4,99 $ paiement unique.",
    badge: "Paiement Unique · Sans Abonnement",
    ctaPrimary: "Supprimer le bruit",
    ctaSecondary: "Voir des exemples",
    faqItems: [
      { q: "Quels types de bruit peuvent être supprimés ?", a: "Bruit de capteur de smartphones, grain de haute ISO, bruit de couleur et de luminance, et artefacts de compression JPEG." },
      { q: "Combien de temps cela prend-il ?", a: "30 à 60 secondes par photo selon la taille et la charge du serveur." },
      { q: "Combien ça coûte ?", a: "4,99 $ de paiement unique. Sans abonnement." },
    ],
  },
  deblurrer: {
    title: "Déflouter des Photos par IA — Corrigez le Flou en Ligne",
    description: "L'IA corrige le flou de bougé, le tremblement de caméra et le flou de mise au point. NAFNet GoPro récupère la netteté en 30–60 secondes. 4,99 $ paiement unique.",
    keywords: ["déflouter photo", "corriger flou photo IA", "photo floue nette en ligne", "tremblé caméra correction", "netteté photo IA"],
    h1: "Déflouter et Nettoyer vos Photos Floues avec l'IA",
    subtitle: "L'IA corrige le flou de bougé, le tremblement de caméra et le flou de mise au point en 30–60 secondes. 4,99 $ paiement unique.",
    badge: "Paiement Unique · Sans Abonnement",
    ctaPrimary: "Déflouter la photo",
    ctaSecondary: "Voir des exemples",
    faqItems: [
      { q: "Quels types de flou peuvent être corrigés ?", a: "Flou de bougé, mise au point légèrement ratée, tremblement de caméra et flou général. Le modèle NAFNet GoPro est spécifiquement entraîné sur le flou de bougé réel." },
      { q: "Combien de temps cela prend-il ?", a: "30 à 60 secondes par photo selon la taille et la charge du serveur." },
      { q: "Combien ça coûte ?", a: "4,99 $ de paiement unique. Sans abonnement." },
    ],
  },
  jpegFix: {
    title: "Supprimer les Artefacts JPEG par IA — Nettoyez la Compression en Ligne",
    description: "SwinIR supprime les blocs, les halos et les bandes de compression JPEG en quelques secondes. Récupérez la qualité d'origine de vos images compressées. 4,99 $ paiement unique.",
    keywords: ["supprimer artefacts JPEG", "nettoyer compression JPEG", "améliorer qualité JPEG", "artefacts photo JPEG", "SwinIR en ligne"],
    h1: "Supprimez les Artefacts de Compression JPEG avec l'IA",
    subtitle: "SwinIR supprime le blocage, le ringing et le banding de la compression JPEG en quelques secondes. 4,99 $ paiement unique.",
    badge: "Paiement Unique · Sans Abonnement",
    ctaPrimary: "Nettoyer les artefacts JPEG",
    ctaSecondary: "Voir des exemples",
    faqItems: [
      { q: "Que sont les artefacts JPEG ?", a: "Lorsque vous enregistrez une image en JPEG, la compression crée des défauts visibles : blocs carrés, halos autour des bords et bandes de couleur. SwinIR les supprime tout en récupérant les détails d'origine." },
      { q: "Combien de temps cela prend-il ?", a: "30 à 60 secondes par photo." },
      { q: "Combien ça coûte ?", a: "4,99 $ de paiement unique. Sans abonnement." },
    ],
  },
  homePage: {
    metaTitle: "ArtImageHub — Restauration, Amélioration et Colorisation de Photos par IA",
    metaDescription:
      "Restaurez vos vieilles photos, améliorez la qualité d'image et colorisez les photos en noir et blanc avec l'IA. Commencez gratuitement, puis téléchargez l'original HD pour 4,99 $.",
    ogTitle: "ArtImageHub — Restauration de Photos par IA",
    ogDescription:
      "Restaurez vos vieilles photos, améliorez la qualité et colorisez les photos en noir et blanc avec ArtImageHub. Paiement unique de 4,99 $. Résultats en 30 à 90 secondes. Sans abonnement.",

    heroEyebrow: "Depuis 2024 · Studio de restauration par IA",
    heroH1: "Redonnez vie aux souvenirs effacés grâce à la restauration photo par IA.",
    heroSubhead:
      "Téléversez une photo abîmée, décolorée ou en noir et blanc — notre IA la restaure avec une netteté saisissante en quelques secondes. Commencez gratuitement, choisissez l'original HD pour 4,99 $ si vous le souhaitez.",
    heroCtaPrimary: "Restaurez votre photo gratuitement",
    heroBullets: ["Aperçu gratuit", "Original HD 4,99 $", "Résultats instantanés"] as const,
    heroTrustStrip: [
      "Aperçu gratuit avant le paiement",
      "Supprimée des serveurs sous 24 h",
      "JPG, PNG, WEBP jusqu'à 20 Mo",
    ] as const,
    heroTrustSignals: [
      "Restauration de qualité professionnelle",
      "Résultats en 30 secondes",
      "Paiement unique, sans abonnement",
    ] as const,
    heroBadges: [
      "Paiement sécurisé",
      "100 % confidentialité",
      "Supprimée sous 24 h · Téléchargez avant l'expiration",
      "Garantie remboursé",
    ] as const,
    heroSidebarLabel: "La confiance de familles dans le monde entier",
    heroSidebarStat: "10 000+",
    heroSidebarStatLabel: "Souvenirs restaurés",
    heroBottomBorder: "Amélioration faciale · Super-résolution · Colorisation",
    heroBottomEst: "Est. 2024",

    featuresEyebrow: "Capacités",
    featuresH2: "Tout ce dont votre photo a besoin.",
    featuresSubhead:
      "Six décennies de dégradation photographique inversées en trente secondes par des réseaux neuronaux conçus sur mesure.",
    features: [
      {
        title: "Amélioration faciale",
        desc: "Reconstruisez les détails du visage perdus à cause du temps ou des dégâts. Grâce aux réseaux neuronaux GFPGAN, nous récupérons des yeux nets, une texture de peau naturelle et l'expression préservée.",
      },
      {
        title: "Super-résolution 4×",
        desc: "Augmentez jusqu'à 4× la résolution avec l'IA — un détail cristallin récupéré sur les scans de la plus faible qualité, les tirages anciens et les originaux déchirés.",
      },
      {
        title: "Colorisation automatique",
        desc: "Ajoutez une couleur naturelle et historiquement fidèle aux photos en noir et blanc. Des ciels bleus, des tons de peau chaleureux — en un seul clic.",
      },
      {
        title: "Réparation des rayures et dégâts",
        desc: "Supprimez fissures, taches d'eau, marques de pliage et taches du temps. Notre modèle d'inpainting comble les détails perdus de manière transparente.",
      },
      {
        title: "Amélioration de la qualité",
        desc: "Corrigez exposition, contraste et bruit en même temps. Chaque pixel est analysé et corrigé pour un rendu naturel et équilibré.",
      },
      {
        title: "Téléchargement immédiat",
        desc: "Comparez avant et après avec notre curseur interactif, puis téléchargez votre photo restaurée en pleine résolution.",
      },
    ] as const,

    stats: [
      { number: "10 000+", label: "Photos restaurées", sub: "et plus chaque jour" },
      { number: "30 s", label: "Traitement moyen", sub: "résultats en quelques secondes" },
      { number: "4,8★", label: "Note utilisateurs", sub: "sur plus de 2 400 avis" },
    ] as const,
    testimonialsEyebrow: "Témoignages",
    testimonialsH2: "La confiance de familles dans le monde entier",
    testimonials: [
      {
        quote:
          "J'étais sceptique au départ, mais les résultats m'ont bluffé. Le portrait abîmé de mon arrière-grand-père de 1942 semble neuf. L'IA a même restauré des détails que je ne soupçonnais pas.",
        author: "Michael Chen",
        location: "San Francisco, CA",
      },
      {
        quote:
          "En tant que généalogiste professionnelle, je recommande cet outil à tous mes clients. C'est plus rapide et plus abordable que la restauration traditionnelle, et la qualité est constamment excellente.",
        author: "Dr Patricia Moore",
        location: "Boston, MA",
      },
      {
        quote:
          "J'ai restauré plus de 50 photos de famille au cours du dernier mois. La fonction de colorisation est incroyable — elle a redonné vie aux photos de mariage en noir et blanc de ma grand-mère. Cela vaut chaque centime.",
        author: "James Rodriguez",
        location: "Austin, TX",
      },
    ] as const,

    howEyebrow: "Processus",
    howH2: "Trois étapes. Trente secondes.",
    howSteps: [
      {
        n: "1",
        title: "Débloquez l'accès payant",
        desc: "Commencez par le paiement pour activer l'envoi et le traitement sur cette adresse e-mail avant d'entrer dans l'outil.",
      },
      {
        n: "2",
        title: "Téléversez avec la même adresse e-mail",
        desc: "Revenez dans l'outil après le paiement et envoyez votre photo abîmée, décolorée, en noir et blanc ou de mauvaise qualité.",
      },
      {
        n: "3",
        title: "Traitez et téléchargez",
        desc: "Si le traitement réussit, la même adresse e-mail garde l'accès au téléchargement en qualité originale.",
      },
    ] as const,
    howCtaPrimary: "Restaurez votre photo gratuitement",

    compareEyebrow: "Comparez avant de choisir",
    compareH2: "Commencez par les questions à plus forte intention.",
    compareSubhead:
      "Les acheteurs qui comparent déjà des outils sont plus proches de l'action que les visiteurs génériques. Nous orientons cette intention vers des pages de comparaison directes, puis vers le flux de restauration.",
    compareLabel: "Page à forte intention",
    compareCards: [
      {
        title: "ArtImageHub vs Remini",
        desc: "Idéal pour ceux qui hésitent entre des outils d'amélioration par IA et cherchent le meilleur flux pour les vieilles photos de famille.",
        points: [
          "Comparez la qualité de restauration, le prix et le contrôle des artefacts",
          "Voyez quel outil est meilleur pour les portraits décolorés et les tirages abîmés",
          "Passez directement à notre flux de restauration après la comparaison",
        ],
        cta: "Lire la comparaison avec Remini",
      },
      {
        title: "Restauration par IA vs Photoshop",
        desc: "Idéal pour ceux qui pèsent vitesse, effort et qualité avant de s'engager dans l'édition manuelle.",
        points: [
          "Comparez l'effort total, le délai et le réalisme",
          "Clarifiez quand l'édition manuelle est excessive pour récupérer une photo de famille",
          "Passez directement de l'évaluation à une restauration IA en direct",
        ],
        cta: "Lire la comparaison avec Photoshop",
      },
    ] as const,
    compareDirectCta: "Aller directement à la restauration",

    faqEyebrow: "FAQ",
    faqH2: "Vos questions, nos réponses.",
    faqSubheadPrefix: "Tout ce que vous devez savoir avant de commencer. Vous ne trouvez pas de réponse ? ",
    faqVisitJournalLink: "Consultez notre journal",
    faqSubheadSuffix: ".",
    faqItems: [
      {
        q: "Quels formats d'image acceptez-vous ?",
        a: "Formats JPG, PNG et WEBP — jusqu'à 20 Mo par fichier.",
      },
      {
        q: "Que se passe-t-il après le paiement ?",
        a: "Votre paiement débloque l'envoi et le traitement par IA sur cette adresse e-mail. Une fois le traitement terminé, la même adresse débloque le téléchargement HD en qualité originale — sans filigrane, sans abonnement.",
      },
      {
        q: "Mes données photo sont-elles privées et sécurisées ?",
        a: "Oui. Toutes les photos téléversées sont automatiquement supprimées au bout de 24 heures. Nous ne stockons, ne partageons et n'entraînons jamais de modèles sur vos images.",
      },
      {
        q: "Comment fonctionne l'accès ?",
        a: "Le paiement débloque l'envoi et le traitement sur cette adresse e-mail. Si le traitement réussit, la même adresse débloque le téléchargement en qualité originale.",
      },
      {
        q: "Ai-je besoin d'un abonnement ?",
        a: "Non. Il s'agit d'un paiement unique qui débloque l'accès sur cette adresse e-mail. Sans facturation récurrente.",
      },
    ] as const,

    finalH2: "Vos souvenirs méritent de briller à nouveau.",
    finalSubhead:
      "Payez une fois pour débloquer l'envoi et le traitement sur cette adresse e-mail, puis continuez à l'intérieur de l'outil. Redonnez vie à l'histoire de votre famille sans retomber dans la promesse de l'aperçu gratuit.",
    finalCtaPrimary: "Restaurez votre photo gratuitement",
    finalCtaSecondary: "Voir les tarifs",
    finalTagline: "Accès payant avant l'envoi · Paiement unique · Sans abonnement",
  },
  toolClient: {
    restore: frRestoreClient,
    colorize: frColorizeClient,
    enhance: frEnhanceClient,
  },
};
