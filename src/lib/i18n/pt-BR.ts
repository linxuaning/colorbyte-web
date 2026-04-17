import type { LocaleSEO, ToolClientCopy } from "./types";

const ptBRRestoreClient: ToolClientCopy = {
  dropHeadline: "Solte sua foto aqui",
  dropHint: "ou clique para escolher · JPG, PNG, WEBP · Máx. 20 MB",
  uploadCta: "Enviar foto para restaurar",
  pasteHint: "Você também pode colar uma imagem com Ctrl+V",
  colorizeToggle: "Colorir foto em preto e branco",

  uploading: "Enviando...",
  retryingUpload: "Tentando novamente ({n}/3)...",
  processingStarted: "Processamento iniciado...",
  processingDefault: "Processando...",
  actionVerbIng: "Restaurando",
  warmupNotice: "A primeira restauração pode demorar um pouco enquanto a IA inicia.",
  elapsedSuffix: "decorridos",
  serverWakingUp: "O servidor está iniciando, aguarde",
  aiWarmingUp: "O modelo de IA está sendo preparado, quase pronto",

  errorInvalidFileType: "Tipo de arquivo inválido. Envie um arquivo JPG, PNG ou WEBP.",
  errorFileTooLarge: "Arquivo muito grande. Tamanho máximo: 20 MB.",
  errorUploadFailed: "Falha no envio",
  errorUploadTimeout:
    "Tempo de envio esgotado — o servidor pode estar iniciando. Tente novamente em instantes.",
  errorProcessingTimeout:
    "Tempo de processamento esgotado. O serviço de IA pode estar iniciando — tente novamente.",
  errorProcessingFailed: "Falha no processamento. Tente novamente.",
  errorTitle: "Algo deu errado",
  errorBody:
    "Algo deu errado. Tente novamente — seu arquivo ainda está aqui. Precisa de ajuda?",
  errorRetrySame: "Tentar a mesma foto novamente",
  errorTryAgain: "Tentar novamente",
  errorUploadDifferent: "Enviar outra foto",

  restartAnother: "Restaurar outra foto",
};

const ptBRColorizeClient: ToolClientCopy = {
  ...ptBRRestoreClient,
  dropHeadline: "Solte sua foto em preto e branco aqui",
  uploadCta: "Enviar foto para colorir",
  actionVerbIng: "Colorindo",
  warmupNotice: "A primeira colorização pode demorar um pouco enquanto a IA inicia.",
  restartAnother: "Colorir outra foto",
};

const ptBREnhanceClient: ToolClientCopy = {
  ...ptBRRestoreClient,
  uploadCta: "Enviar foto para melhorar",
  colorizeToggle: "Também colorir se for preto e branco",
  actionVerbIng: "Melhorando",
  warmupNotice: "A primeira melhoria pode demorar um pouco enquanto a IA inicia.",
  restartAnother: "Melhorar outra foto",
};

export const ptBR: LocaleSEO = {
  oldPhotoRestoration: {
    title: "Restaurar Fotos Antigas Grátis Online — IA para Fotos Velhas",
    description:
      "Restaure suas fotos antigas grátis com inteligência artificial. Repare danos, elimine arranhões e melhore a nitidez das suas memórias mais preciosas. Sem cadastro.",
    keywords: [
      "restaurar fotos antigas grátis",
      "restaurar fotos velhas",
      "restauração de fotos danificadas",
      "reparar fotos antigas online",
      "melhorar fotos com IA grátis",
    ],
    h1: "Restaure suas fotos antigas com IA — grátis.",
    subtitle: "Envie sua foto. A IA repara danos, elimina arranhões e melhora a qualidade em segundos.",
    badge: "SEM CADASTRO · RESULTADO EM SEGUNDOS",
    ctaPrimary: "Restaurar foto grátis",
    ctaSecondary: "Ver exemplos",
    faqItems: [
      { q: "Preciso pagar antes de enviar minha foto?", a: "Sim, é necessário um pagamento único para ter acesso. Depois de pagar, você pode restaurar quantas fotos quiser." },
      { q: "Quais formatos de imagem são aceitos?", a: "JPG, PNG e WEBP de até 20 MB." },
      { q: "Quanto tempo leva a restauração?", a: "Geralmente entre 10 e 30 segundos, dependendo do tamanho e do estado da foto." },
      { q: "Que tipos de danos a IA consegue reparar?", a: "Arranhões, manchas, desbotamento de cores, rasgos e deterioração geral causada pelo tempo." },
      { q: "Minha foto fica armazenada nos seus servidores?", a: "As fotos são processadas com segurança e não ficam armazenadas permanentemente em nossos servidores." },
    ],
    howToSteps: [
      { name: "Pague para desbloquear", text: "Um pagamento único libera acesso completo à ferramenta de restauração." },
      { name: "Envie sua foto antiga", text: "Selecione uma foto em formato JPG, PNG ou WEBP de até 20 MB." },
      { name: "A IA restaura a imagem", text: "Nossa IA analisa e repara automaticamente danos, arranhões e deterioração em segundos." },
      { name: "Baixe o resultado", text: "Baixe sua foto restaurada em alta resolução." },
    ],
  },
  colorizer: {
    title: "Colorir Fotos Antigas Grátis Online — IA para Fotos em Preto e Branco",
    description:
      "Colorize suas fotos antigas em preto e branco grátis com inteligência artificial. Resultados realistas em segundos. Sem cadastro.",
    keywords: [
      "colorir fotos grátis",
      "colorizar fotos preto e branco",
      "colorir fotos online grátis",
      "colorizar fotos com IA",
      "colorir fotos velhas grátis",
    ],
    h1: "Colorize suas fotos em preto e branco com IA — grátis.",
    subtitle: "Envie sua foto. A IA adiciona cores realistas em segundos.",
    badge: "SEM CADASTRO · RESULTADO EM SEGUNDOS",
    ctaPrimary: "Colorir foto grátis",
    ctaSecondary: "Ver exemplos",
    faqItems: [
      { q: "Preciso pagar antes de enviar minha foto?", a: "Sim, é necessário um pagamento único de $4,99 para ter acesso. Depois de pagar, você pode colorizar quantas fotos quiser. Sem assinatura." },
      { q: "Quanto tempo leva o colorizado com IA?", a: "A maioria das fotos é colorizada em 30 segundos. Imagens mais complexas podem levar até 90 segundos." },
      { q: "Minhas fotos ficam seguras?", a: "Sim. Todas as fotos são transmitidas por HTTPS criptografado e excluídas permanentemente dos nossos servidores em 24 horas. Nunca compartilhamos nem usamos suas fotos para treinar modelos." },
    ],
    howToSteps: [
      { name: "Pague para desbloquear", text: "Um pagamento único de $4,99 libera acesso completo à ferramenta de colorização. Sem assinatura." },
      { name: "Envie sua foto em preto e branco", text: "Envie qualquer foto em preto e branco ou escala de cinza. Formatos suportados: JPG, PNG, WEBP até 20 MB." },
      { name: "Baixe sua foto colorizada", text: "A IA adiciona cores realistas em segundos. Baixe o resultado em qualidade original." },
    ],
  },
  enhancer: {
    title: "Melhorar Qualidade de Fotos Grátis Online — IA para Fotos Desfocadas",
    description:
      "Melhore a qualidade das suas fotos grátis com inteligência artificial. Elimine o desfoque, aumente a resolução e recupere os detalhes perdidos. Sem cadastro.",
    keywords: [
      "melhorar qualidade fotos grátis",
      "melhorar qualidade de fotos grátis",
      "melhorar fotos desfocadas online",
      "aumentar resolução foto grátis",
      "melhorar fotos com IA grátis",
    ],
    h1: "Melhore a qualidade das suas fotos antigas com IA — grátis.",
    subtitle: "Envie sua foto. A IA elimina o desfoque e aumenta a resolução em segundos.",
    badge: "SEM CADASTRO · RESULTADO EM SEGUNDOS",
    ctaPrimary: "Melhorar foto grátis",
    ctaSecondary: "Ver exemplos",
    faqItems: [
      { q: "Preciso pagar antes de enviar minha foto?", a: "Sim, é necessário um pagamento único de $4,99 para ter acesso. Depois de pagar, você pode melhorar quantas fotos quiser. Sem assinatura." },
      { q: "Quanto tempo leva a melhoria com IA?", a: "A maioria das fotos é melhorada em 30 segundos. Imagens mais complexas podem levar até 90 segundos." },
      { q: "Minhas fotos ficam seguras?", a: "Sim. Todas as fotos são transmitidas por HTTPS criptografado e excluídas permanentemente dos nossos servidores em 24 horas. Nunca compartilhamos nem usamos suas fotos para treinar modelos." },
    ],
    howToSteps: [
      { name: "Pague para desbloquear", text: "Um pagamento único de $4,99 libera acesso completo à ferramenta de melhoria. Sem assinatura." },
      { name: "Envie sua foto", text: "Envie qualquer foto desfocada, de baixa resolução ou baixa qualidade. Formatos suportados: JPG, PNG, WEBP até 20 MB." },
      { name: "Baixe sua foto melhorada", text: "A IA remove o desfoque e aumenta a resolução em até 4× em segundos. Baixe o resultado em qualidade original." },
    ],
  },
  toolClient: {
    restore: ptBRRestoreClient,
    colorize: ptBRColorizeClient,
    enhance: ptBREnhanceClient,
  },
};
