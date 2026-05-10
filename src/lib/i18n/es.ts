import type { LocaleSEO, ToolClientCopy } from "./types";

const esRestoreClient: ToolClientCopy = {
  dropHeadline: "Arrastra tu foto aquí",
  dropHint: "o haz clic para elegir · JPG, PNG, WEBP · Máx. 20 MB",
  uploadCta: "Subir foto para restaurar",
  pasteHint: "También puedes pegar una imagen con Ctrl+V",
  colorizeToggle: "Colorear foto en blanco y negro",

  uploading: "Subiendo...",
  retryingUpload: "Reintentando subida ({n}/3)...",
  processingStarted: "Procesamiento iniciado...",
  processingDefault: "Procesando...",
  actionVerbIng: "Restaurando",
  warmupNotice: "La primera restauración puede tardar un momento mientras la IA se inicia.",
  elapsedSuffix: "transcurridos",
  serverWakingUp: "El servidor se está iniciando, por favor espera",
  aiWarmingUp: "El modelo de IA se está preparando, casi listo",

  errorInvalidFileType: "Tipo de archivo no válido. Sube un archivo JPG, PNG o WEBP.",
  errorFileTooLarge: "Archivo demasiado grande. El tamaño máximo es 20 MB.",
  errorUploadFailed: "Error al subir el archivo",
  errorUploadTimeout:
    "Tiempo de subida agotado — el servidor puede estar iniciándose. Inténtalo de nuevo en un momento.",
  errorProcessingTimeout:
    "Se agotó el tiempo de procesamiento. Puede que el servicio de IA se esté iniciando — inténtalo de nuevo.",
  errorProcessingFailed: "Falló el procesamiento. Inténtalo de nuevo.",
  errorTitle: "Algo salió mal",
  errorBody:
    "Algo salió mal. Inténtalo de nuevo — tu archivo sigue aquí. ¿Necesitas ayuda?",
  errorRetrySame: "Reintentar la misma foto",
  errorTryAgain: "Intentar de nuevo",
  errorUploadDifferent: "Subir otra foto",

  restartAnother: "Restaurar otra foto",
};

const esColorizeClient: ToolClientCopy = {
  ...esRestoreClient,
  dropHeadline: "Arrastra tu foto en blanco y negro aquí",
  uploadCta: "Subir foto para colorear",
  actionVerbIng: "Coloreando",
  warmupNotice: "La primera colorización puede tardar un momento mientras la IA se inicia.",
  restartAnother: "Colorear otra foto",
};

const esEnhanceClient: ToolClientCopy = {
  ...esRestoreClient,
  uploadCta: "Subir foto para mejorar",
  colorizeToggle: "Colorear también si es en blanco y negro",
  actionVerbIng: "Mejorando",
  warmupNotice: "La primera mejora puede tardar un momento mientras la IA se inicia.",
  restartAnother: "Mejorar otra foto",
};

export const es: LocaleSEO = {
  oldPhotoRestoration: {
    title: "Restaurar Fotos Antiguas Gratis Online — IA para Fotos Viejas",
    description:
      "Restaura tus fotos antiguas gratis con inteligencia artificial. Repara daños, elimina rayaduras y mejora la nitidez de tus recuerdos más preciados. Sin registro.",
    keywords: [
      "restaurar fotos antiguas gratis",
      "restaurar fotos viejas",
      "restauración de fotos dañadas",
      "reparar fotos antiguas online",
      "mejorar fotos con IA gratis",
    ],
    h1: "Restaura tus fotos antiguas con IA — gratis.",
    subtitle: "Sube tu foto. La IA repara daños, elimina rayaduras y mejora la calidad en segundos.",
    badge: "SIN REGISTRO · RESULTADO EN SEGUNDOS",
    ctaPrimary: "Restaurar foto gratis",
    ctaSecondary: "Ver ejemplos",
    faqItems: [
      { q: "¿Tengo que pagar antes de subir mi foto?", a: "Sí, se requiere un pago único para acceder. Una vez pagado, puedes restaurar todas las fotos que quieras." },
      { q: "¿Qué formatos de imagen acepta?", a: "JPG, PNG y WEBP de hasta 20 MB." },
      { q: "¿Cuánto tarda la restauración?", a: "Generalmente entre 10 y 30 segundos, según el tamaño y estado de la foto." },
      { q: "¿Qué tipo de daños puede reparar la IA?", a: "Rayaduras, manchas, desvanecimiento del color, roturas y deterioro general por el paso del tiempo." },
      { q: "¿Se guarda mi foto en vuestros servidores?", a: "Las fotos se procesan de forma segura y no se almacenan permanentemente en nuestros servidores." },
    ],
    howToSteps: [
      { name: "Paga para desbloquear", text: "Un pago único desbloquea el acceso completo a la herramienta de restauración." },
      { name: "Sube tu foto antigua", text: "Selecciona una foto en formato JPG, PNG o WEBP de hasta 20 MB." },
      { name: "La IA restaura la imagen", text: "Nuestra IA analiza y repara automáticamente los daños, rayaduras y deterioro en segundos." },
      { name: "Descarga el resultado", text: "Descarga tu foto restaurada en alta resolución." },
    ],
  },
  colorizer: {
    title: "Colorear Fotos Antiguas Gratis Online — IA para Fotos en Blanco y Negro",
    description:
      "Colorea tus fotos antiguas en blanco y negro gratis con inteligencia artificial. Resultados realistas en segundos. Sin registro.",
    keywords: [
      "colorear fotos gratis",
      "colorear fotos blanco y negro",
      "colorizar fotos online gratis",
      "colorear fotos con IA",
      "colorear fotos viejas gratis",
    ],
    h1: "Colorea tus fotos en blanco y negro con IA — gratis.",
    subtitle: "Sube tu foto. La IA añade color realista en segundos.",
    badge: "SIN REGISTRO · RESULTADO EN SEGUNDOS",
    ctaPrimary: "Colorear foto gratis",
    ctaSecondary: "Ver ejemplos",
    faqItems: [
      { q: "¿Tengo que pagar antes de subir mi foto?", a: "Sí, se requiere un pago único de $4,99 para acceder. Una vez pagado, puedes colorizar todas las fotos que quieras. Sin suscripción." },
      { q: "¿Cuánto tarda el colorizado con IA?", a: "La mayoría de las fotos se colorizan en 30 segundos. Las imágenes complejas pueden tardar hasta 90 segundos." },
      { q: "¿Se guardan mis fotos de forma segura?", a: "Sí. Todas las fotos se transmiten por HTTPS cifrado y se eliminan permanentemente de nuestros servidores en 24 horas. Nunca compartimos ni usamos tus fotos para entrenar modelos." },
    ],
    howToSteps: [
      { name: "Paga para desbloquear", text: "Un pago único de $4,99 desbloquea el acceso completo a la herramienta de colorización. Sin suscripción." },
      { name: "Sube tu foto en blanco y negro", text: "Sube cualquier foto en blanco y negro o escala de grises. Formatos admitidos: JPG, PNG, WEBP hasta 20 MB." },
      { name: "Descarga tu foto colorizada", text: "La IA añade colores realistas en segundos. Descarga el resultado en calidad original." },
    ],
  },
  enhancer: {
    title: "Mejorar Calidad de Fotos Gratis Online — IA para Fotos Borrosas",
    description:
      "Mejora la calidad de tus fotos gratis con inteligencia artificial. Elimina el desenfoque, aumenta la resolución y recupera los detalles perdidos. Sin registro.",
    keywords: [
      "mejorar calidad fotos gratis",
      "mejorar calidad de fotos gratis",
      "mejorar fotos borrosas online",
      "aumentar resolución foto gratis",
      "mejorar fotos con IA gratis",
    ],
    h1: "Mejora la calidad de tus fotos antiguas con IA — gratis.",
    subtitle: "Sube tu foto. La IA elimina el desenfoque y aumenta la resolución en segundos.",
    badge: "SIN REGISTRO · RESULTADO EN SEGUNDOS",
    ctaPrimary: "Mejorar foto gratis",
    ctaSecondary: "Ver ejemplos",
    faqItems: [
      { q: "¿Tengo que pagar antes de subir mi foto?", a: "Sí, se requiere un pago único de $4,99 para acceder. Una vez pagado, puedes mejorar todas las fotos que quieras. Sin suscripción." },
      { q: "¿Cuánto tarda la mejora con IA?", a: "La mayoría de las fotos se mejoran en 30 segundos. Las imágenes complejas pueden tardar hasta 90 segundos." },
      { q: "¿Se guardan mis fotos de forma segura?", a: "Sí. Todas las fotos se transmiten por HTTPS cifrado y se eliminan permanentemente de nuestros servidores en 24 horas. Nunca compartimos ni usamos tus fotos para entrenar modelos." },
    ],
    howToSteps: [
      { name: "Paga para desbloquear", text: "Un pago único de $4,99 desbloquea el acceso completo a la herramienta de mejora. Sin suscripción." },
      { name: "Sube tu foto", text: "Sube cualquier foto borrosa, de baja resolución o mala calidad. Formatos admitidos: JPG, PNG, WEBP hasta 20 MB." },
      { name: "Descarga tu foto mejorada", text: "La IA elimina el desenfoque y aumenta la resolución hasta 4× en segundos. Descarga el resultado en calidad original." },
    ],
  },
  denoiser: {
    title: "Eliminador de Ruido en Fotos con IA — Quita Grano y Artefactos Online",
    description: "Elimina el grano, el ruido de sensor y los artefactos digitales de tus fotos con IA. NAFNet preserva los detalles mientras limpia cada píxel. $4,99 pago único.",
    keywords: ["eliminar ruido foto", "reducción ruido foto IA", "quitar grano foto online", "denoiser foto", "ruido sensor foto"],
    h1: "Elimina el Ruido y el Grano de tus Fotos con IA",
    subtitle: "Sube tu foto. La IA elimina el grano, el ruido de sensor y los artefactos digitales en segundos. $4,99 pago único.",
    badge: "Pago Único · Sin Suscripción",
    ctaPrimary: "Eliminar ruido de foto",
    ctaSecondary: "Ver ejemplos",
    faqItems: [
      { q: "¿Qué tipos de ruido puede eliminar?", a: "Ruido de sensor de smartphones, grano de alta ISO, ruido de color y luminancia, y artefactos de compresión JPEG." },
      { q: "¿Cuánto tiempo tarda?", a: "30–60 segundos por foto según el tamaño y la carga del servidor." },
      { q: "¿Cuánto cuesta?", a: "$4,99 de pago único. Sin suscripción." },
    ],
  },
  deblurrer: {
    title: "Enfocar Fotos Borrosas con IA — Corrige el Desenfoque Online",
    description: "La IA corrige el desenfoque por movimiento, el temblor de cámara y el desenfoque de foco. NAFNet GoPro recupera nitidez en 30–60 segundos. $4,99 pago único.",
    keywords: ["enfocar foto borrosa", "quitar desenfoque foto", "foto movida IA", "corregir foto borrosa online", "AI photo sharpener"],
    h1: "Enfoca Fotos Borrosas con IA",
    subtitle: "NAFNet corrige el desenfoque por movimiento, el temblor de cámara y el desenfoque de foco en 30–60 segundos. $4,99 pago único.",
    badge: "Pago Único · Sin Suscripción",
    ctaPrimary: "Enfocar foto",
    ctaSecondary: "Ver ejemplos",
    faqItems: [
      { q: "¿Qué tipos de desenfoque puede corregir?", a: "Desenfoque por movimiento, desenfoque de foco leve, temblor de cámara y suavidad general. El modelo NAFNet GoPro está entrenado para desenfoque real por movimiento." },
      { q: "¿Cuánto tiempo tarda?", a: "30–60 segundos por foto según el tamaño y la carga del servidor." },
      { q: "¿Cuánto cuesta?", a: "$4,99 de pago único. Sin suscripción." },
    ],
  },
  jpegFix: {
    title: "Eliminar Artefactos JPEG con IA — Limpia la Compresión Online",
    description: "SwinIR elimina los bloques, el ringing y el banding de la compresión JPEG en segundos. Recupera la calidad original de tus imágenes comprimidas. $4,99 pago único.",
    keywords: ["eliminar artefactos JPEG", "quitar compresión JPEG", "mejorar calidad JPEG", "artefactos foto JPEG", "SwinIR online"],
    h1: "Elimina los Artefactos de Compresión JPEG con IA",
    subtitle: "SwinIR elimina el bloqueo, el ringing y el banding de la compresión JPEG en segundos. $4,99 pago único.",
    badge: "Pago Único · Sin Suscripción",
    ctaPrimary: "Limpiar artefactos JPEG",
    ctaSecondary: "Ver ejemplos",
    faqItems: [
      { q: "¿Qué son los artefactos JPEG?", a: "Cuando guardas una imagen como JPEG, la compresión crea defectos visibles: bloques cuadrados, halos alrededor de bordes y bandas de color. SwinIR los elimina mientras recupera los detalles originales." },
      { q: "¿Cuánto tiempo tarda?", a: "30–60 segundos por foto." },
      { q: "¿Cuánto cuesta?", a: "$4,99 de pago único. Sin suscripción." },
    ],
  },
  homePage: {
    metaTitle: "ArtImageHub — Restauración, Mejora y Coloreado de Fotos con IA",
    metaDescription:
      "Restaura fotos antiguas, mejora la calidad de imagen y colorea fotos en blanco y negro con IA. Empieza gratis y descarga el original en HD por $4.99.",
    ogTitle: "ArtImageHub — Restauración de Fotos con IA",
    ogDescription:
      "Restaura fotos antiguas, mejora la calidad y colorea fotos en blanco y negro con ArtImageHub. Pago único de $4.99. Resultados en 30–90 segundos. Sin suscripción.",

    heroEyebrow: "Desde 2024 · Estudio de Restauración con IA",
    heroH1: "Devuelve la vida a recuerdos descoloridos con la restauración fotográfica con IA.",
    heroSubhead:
      "Sube una foto dañada, descolorida o en blanco y negro — nuestra IA la restaura con una nitidez sorprendente en segundos. Empieza gratis y elige el original en HD por $4.99 si lo deseas.",
    heroCtaPrimary: "Restaura tu foto gratis",
    heroBullets: ["Vista previa gratuita", "Original HD $4.99", "Resultados al instante"] as const,
    heroTrustStrip: [
      "Vista previa gratuita antes del pago",
      "Borrado de los servidores en 24 horas",
      "JPG, PNG, WEBP hasta 20 MB",
    ] as const,
    heroTrustSignals: [
      "Restauración de calidad profesional",
      "Resultados en 30 segundos",
      "Pago único, sin suscripción",
    ] as const,
    heroBadges: [
      "Pago seguro",
      "100% privacidad",
      "Borrado en 24 h · Descarga antes de que expire",
      "Garantía de devolución",
    ] as const,
    heroSidebarLabel: "La eligen familias en todo el mundo",
    heroSidebarStat: "10.000+",
    heroSidebarStatLabel: "Recuerdos restaurados",
    heroBottomBorder: "Mejora facial · Súper resolución · Coloreado",
    heroBottomEst: "Est. 2024",

    featuresEyebrow: "Capacidades",
    featuresH2: "Todo lo que tu foto necesita.",
    featuresSubhead:
      "Seis décadas de deterioro fotográfico, revertidas en treinta segundos por redes neuronales diseñadas a medida.",
    features: [
      {
        title: "Mejora facial",
        desc: "Reconstruye los detalles faciales perdidos por el tiempo o el daño. Con redes neuronales GFPGAN recuperamos ojos nítidos, textura natural de la piel y la expresión preservada.",
      },
      {
        title: "Súper resolución 4×",
        desc: "Aumenta hasta 4× la resolución con IA — detalle cristalino recuperado de los escaneos de menor calidad, copias envejecidas y originales rotos.",
      },
      {
        title: "Coloreado automático",
        desc: "Añade color natural e históricamente preciso a las fotos en blanco y negro. Cielos azules, tonos de piel cálidos — todo con un solo clic.",
      },
      {
        title: "Reparación de arañazos y daños",
        desc: "Elimina grietas, manchas de agua, marcas de pliegues y manchas del tiempo. Nuestro modelo de inpainting rellena el detalle perdido sin costuras.",
      },
      {
        title: "Mejora de calidad",
        desc: "Corrige exposición, contraste y ruido a la vez. Cada píxel analizado y corregido para una salida natural y equilibrada.",
      },
      {
        title: "Descarga inmediata",
        desc: "Compara antes y después con nuestro deslizador interactivo y descarga tu foto restaurada a resolución completa.",
      },
    ] as const,

    stats: [
      { number: "10.000+", label: "Fotos restauradas", sub: "y subiendo" },
      { number: "30s", label: "Procesado promedio", sub: "resultados en segundos" },
      { number: "4.8★", label: "Valoración", sub: "de más de 2.400 reseñas" },
    ] as const,
    testimonialsEyebrow: "Testimonios",
    testimonialsH2: "La eligen familias en todo el mundo",
    testimonials: [
      {
        quote:
          "Al principio era escéptico, pero los resultados me dejaron sin palabras. El retrato dañado de mi bisabuelo de 1942 parece nuevo. La IA incluso restauró detalles que yo no sabía que estaban ahí.",
        author: "Michael Chen",
        location: "San Francisco, CA",
      },
      {
        quote:
          "Como genealogista profesional, recomiendo esta herramienta a todos mis clientes. Es más rápida y más asequible que la restauración tradicional, y la calidad es siempre excelente.",
        author: "Dra. Patricia Moore",
        location: "Boston, MA",
      },
      {
        quote:
          "He restaurado más de 50 fotos familiares en el último mes. La función de coloreado es increíble — devolvió la vida a las fotos de boda en blanco y negro de mi abuela. Vale cada centavo.",
        author: "James Rodriguez",
        location: "Austin, TX",
      },
    ] as const,

    howEyebrow: "Proceso",
    howH2: "Tres pasos. Treinta segundos.",
    howSteps: [
      {
        n: "1",
        title: "Desbloquea el acceso de pago",
        desc: "Empieza por el pago para activar la subida y el procesamiento en este correo antes de entrar en la herramienta.",
      },
      {
        n: "2",
        title: "Sube con el mismo correo",
        desc: "Vuelve a la herramienta tras el pago y sube tu foto dañada, descolorida, en blanco y negro o de baja calidad.",
      },
      {
        n: "3",
        title: "Procesa y descarga",
        desc: "Si el procesado tiene éxito, el mismo correo mantiene desbloqueada la descarga en calidad original.",
      },
    ] as const,
    howCtaPrimary: "Restaura tu foto gratis",

    compareEyebrow: "Compara antes de elegir",
    compareH2: "Empieza por las preguntas con mayor intención de compra.",
    compareSubhead:
      "Quien ya está comparando herramientas está más cerca de actuar que un visitante genérico. Encauzamos esa intención hacia páginas de comparación directa y luego al flujo de restauración.",
    compareLabel: "Página de alta intención",
    compareCards: [
      {
        title: "ArtImageHub vs Remini",
        desc: "Ideal para quienes dudan entre mejoradores con IA y buscan el mejor flujo para fotos familiares antiguas.",
        points: [
          "Compara calidad de restauración, precio y control de artefactos",
          "Descubre cuál es mejor para retratos descoloridos y copias dañadas",
          "Salta directamente a nuestro flujo de restauración tras la comparación",
        ],
        cta: "Leer la comparación con Remini",
      },
      {
        title: "Restauración con IA vs Photoshop",
        desc: "Ideal para quienes sopesan velocidad, esfuerzo y calidad antes de comprometerse con la edición manual.",
        points: [
          "Compara esfuerzo total, tiempo de entrega y realismo",
          "Aclara cuándo la edición manual es excesiva para recuperar fotos familiares",
          "Pasa directo de la evaluación a una restauración con IA en vivo",
        ],
        cta: "Leer la comparación con Photoshop",
      },
    ] as const,
    compareDirectCta: "Ir directo a restaurar",

    faqEyebrow: "FAQ",
    faqH2: "Preguntas resueltas.",
    faqSubheadPrefix: "Todo lo que necesitas saber antes de empezar. ¿No encuentras una respuesta? ",
    faqVisitJournalLink: "Visita nuestro diario",
    faqSubheadSuffix: ".",
    faqItems: [
      {
        q: "¿Qué formatos de imagen aceptan?",
        a: "Formatos JPG, PNG y WEBP — hasta 20 MB por archivo.",
      },
      {
        q: "¿Qué pasa después del pago?",
        a: "Tu pago desbloquea la subida y el procesamiento con IA en esta dirección de correo. Cuando termina el procesado, el mismo correo desbloquea la descarga HD en calidad original — sin marcas de agua, sin suscripción.",
      },
      {
        q: "¿Mis fotos están privadas y seguras?",
        a: "Sí. Todas las fotos subidas se borran automáticamente tras 24 horas. Nunca almacenamos, compartimos ni entrenamos modelos con tus imágenes.",
      },
      {
        q: "¿Cómo funciona el acceso?",
        a: "El pago desbloquea la subida y el procesamiento en este correo. Si el procesado tiene éxito, el mismo correo desbloquea la descarga en calidad original.",
      },
      {
        q: "¿Necesito una suscripción?",
        a: "No. Es un pago único que desbloquea el acceso en este correo. Sin facturación recurrente.",
      },
    ] as const,

    finalH2: "Tus recuerdos merecen volver a brillar.",
    finalSubhead:
      "Paga una vez para desbloquear la subida y el procesamiento en este correo y continúa dentro de la herramienta. Devuelve la vida a la historia de tu familia sin volver a la promesa de la vista previa gratuita.",
    finalCtaPrimary: "Restaura tu foto gratis",
    finalCtaSecondary: "Ver precios",
    finalTagline: "Acceso de pago antes de subir · Pago único · Sin suscripción",
  },
  toolClient: {
    restore: esRestoreClient,
    colorize: esColorizeClient,
    enhance: esEnhanceClient,
  },
};
