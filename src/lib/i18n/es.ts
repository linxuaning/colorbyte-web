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
  toolClient: {
    restore: esRestoreClient,
    colorize: esColorizeClient,
    enhance: esEnhanceClient,
  },
};
