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
    title: "Restaurar Fotos Antigas Online — $4.99 Pagamento Único",
    description:
      "Restaure suas fotos antigas com IA por $4.99 pagamento único. Repare danos, elimine arranhões e baixe o resultado em HD. Sem assinatura.",
    keywords: [
      "restaurar fotos antigas pagamento único",
      "restaurar fotos velhas",
      "restauração de fotos danificadas",
      "reparar fotos antigas online",
      "restaurar fotos antigas sem assinatura",
    ],
    h1: "Restaure suas fotos antigas com IA — $4.99 pagamento único.",
    subtitle: "Pague $4.99 uma vez, envie sua foto antiga e baixe a restauração em HD. Sem assinatura.",
    badge: "$4.99 PAGAMENTO ÚNICO · SEM ASSINATURA",
    ctaPrimary: "Restaurar foto por $4.99",
    ctaSecondary: "Ver exemplos",
    faqItems: [
      { q: "Preciso pagar antes de enviar minha foto?", a: "Sim. O ArtImageHub usa $4.99 pagamento único, sem assinatura, para desbloquear envio, processamento por IA e download em HD no seu e-mail." },
      { q: "Quais formatos de imagem são aceitos?", a: "JPG, PNG e WEBP de até 20 MB." },
      { q: "Quanto tempo leva a restauração?", a: "Geralmente entre 10 e 30 segundos, dependendo do tamanho e do estado da foto." },
      { q: "Que tipos de danos a IA consegue reparar?", a: "Arranhões, manchas, desbotamento de cores, rasgos e deterioração geral causada pelo tempo." },
      { q: "Minha foto fica armazenada nos seus servidores?", a: "As fotos são processadas com segurança e não ficam armazenadas permanentemente em nossos servidores." },
    ],
    howToSteps: [
      { name: "Pague para desbloquear", text: "$4.99 pagamento único libera envio, processamento por IA e download em HD. Sem assinatura." },
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
  denoiser: {
    title: "Redutor de Ruído em Fotos com IA — Remova Granulação Online",
    description: "Elimine granulação, ruído de sensor e artefatos digitais das suas fotos com IA. NAFNet preserva os detalhes enquanto limpa cada pixel. $4,99 pagamento único.",
    keywords: ["reduzir ruído foto", "remover granulação foto IA", "denoiser foto online", "ruído sensor câmera", "redução ruído imagem"],
    h1: "Remova Ruído e Granulação das suas Fotos com IA",
    subtitle: "Envie sua foto. A IA remove granulação, ruído de sensor e artefatos digitais em segundos. $4,99 pagamento único.",
    badge: "Pagamento Único · Sem Assinatura",
    ctaPrimary: "Remover ruído da foto",
    ctaSecondary: "Ver exemplos",
    faqItems: [
      { q: "Que tipos de ruído podem ser removidos?", a: "Ruído de sensor de smartphones, granulação de alta ISO, ruído de cor e luminância, e artefatos de compressão JPEG." },
      { q: "Quanto tempo demora?", a: "30–60 segundos por foto, dependendo do tamanho e da carga do servidor." },
      { q: "Quanto custa?", a: "$4,99 de pagamento único. Sem assinatura." },
    ],
  },
  deblurrer: {
    title: "Desfocar Fotos com IA — Corrija Borrões e Tremidas Online",
    description: "A IA corrige borrão por movimento, tremida de câmera e foco incorreto. NAFNet GoPro recupera nitidez em 30–60 segundos. $4,99 pagamento único.",
    keywords: ["corrigir foto borrada", "remover borrão foto IA", "focar foto desfocada online", "tremida câmera correção", "IA nitidez foto"],
    h1: "Corrija Fotos Borradas e Desfocadas com IA",
    subtitle: "A IA clarifica o borrão por movimento, tremida de câmera e foco incorreto em 30–60 segundos. $4,99 pagamento único.",
    badge: "Pagamento Único · Sem Assinatura",
    ctaPrimary: "Focar foto borrada",
    ctaSecondary: "Ver exemplos",
    faqItems: [
      { q: "Que tipos de borrão podem ser corrigidos?", a: "Borrão por movimento, foco incorreto leve, tremida de câmera e suavidade geral. O modelo NAFNet GoPro é treinado para borrão real por movimento." },
      { q: "Quanto tempo demora?", a: "30–60 segundos por foto, dependendo do tamanho e da carga do servidor." },
      { q: "Quanto custa?", a: "$4,99 de pagamento único. Sem assinatura." },
    ],
  },
  jpegFix: {
    title: "Remover Artefatos JPEG com IA — Limpe a Compressão Online",
    description: "SwinIR remove blocos, halos e faixas de compressão JPEG em segundos. Recupere a qualidade original das suas imagens comprimidas. $4,99 pagamento único.",
    keywords: ["remover artefatos JPEG", "limpar compressão JPEG", "melhorar qualidade JPEG", "artefatos foto JPEG", "SwinIR online"],
    h1: "Elimine Artefatos de Compressão JPEG com IA",
    subtitle: "SwinIR remove blocos, halos e faixas de compressão JPEG em segundos. $4,99 pagamento único.",
    badge: "Pagamento Único · Sem Assinatura",
    ctaPrimary: "Limpar artefatos JPEG",
    ctaSecondary: "Ver exemplos",
    faqItems: [
      { q: "O que são artefatos JPEG?", a: "Quando você salva uma imagem como JPEG, a compressão cria defeitos visíveis: blocos quadrados, halos ao redor de bordas e faixas de cor. SwinIR os remove enquanto recupera os detalhes originais." },
      { q: "Quanto tempo demora?", a: "30–60 segundos por foto." },
      { q: "Quanto custa?", a: "$4,99 de pagamento único. Sem assinatura." },
    ],
  },
  homePage: {
    metaTitle: "ArtImageHub — Restauração, Aprimoramento e Colorização de Fotos com IA",
    metaDescription:
      "Restaure fotos antigas, melhore a qualidade da imagem e colorize fotos em preto e branco com IA. Comece grátis e baixe o original em HD por $4.99.",
    ogTitle: "ArtImageHub — Restauração de Fotos com IA",
    ogDescription:
      "Restaure fotos antigas, melhore a qualidade e colorize fotos em preto e branco com o ArtImageHub. Pagamento único de $4.99. Resultados em 30–90 segundos. Sem assinatura.",

    heroEyebrow: "Desde 2024 · Estúdio de Restauração com IA",
    heroH1: "Devolva a vida a memórias desbotadas com a restauração fotográfica por IA.",
    heroSubhead:
      "Envie uma foto danificada, desbotada ou em preto e branco — nossa IA a restaura com nitidez surpreendente em segundos. Comece grátis e escolha o original em HD por $4.99 se quiser.",
    heroCtaPrimary: "Restaure sua foto grátis",
    heroBullets: ["Pré-visualização grátis", "Original HD $4.99", "Resultados imediatos"] as const,
    heroTrustStrip: [
      "Pré-visualização grátis antes do pagamento",
      "Excluída dos servidores em 24 horas",
      "JPG, PNG, WEBP até 20 MB",
    ] as const,
    heroTrustSignals: [
      "Restauração de qualidade profissional",
      "Resultados em 30 segundos",
      "Pagamento único, sem assinatura",
    ] as const,
    heroBadges: [
      "Pagamento seguro",
      "100% privacidade",
      "Excluída em 24 h · Baixe antes de expirar",
      "Garantia de reembolso",
    ] as const,
    heroSidebarLabel: "Famílias do mundo todo confiam",
    heroSidebarStat: "10.000+",
    heroSidebarStatLabel: "Memórias restauradas",
    heroBottomBorder: "Aprimoramento facial · Super-resolução · Colorização",
    heroBottomEst: "Est. 2024",

    featuresEyebrow: "Recursos",
    featuresH2: "Tudo o que sua foto precisa.",
    featuresSubhead:
      "Seis décadas de degradação fotográfica, revertidas em trinta segundos por redes neurais sob medida.",
    features: [
      {
        title: "Aprimoramento facial",
        desc: "Reconstrua os detalhes faciais perdidos pelo tempo ou pelo dano. Com redes neurais GFPGAN recuperamos olhos nítidos, textura natural da pele e a expressão preservada.",
      },
      {
        title: "Super-resolução 4×",
        desc: "Aumente até 4× a resolução com IA — detalhes cristalinos recuperados de scans de baixa qualidade, cópias envelhecidas e originais rasgados.",
      },
      {
        title: "Colorização automática",
        desc: "Adicione cor natural e historicamente precisa a fotos em preto e branco. Céus azuis, tons de pele quentes — tudo com um único clique.",
      },
      {
        title: "Reparo de arranhões e danos",
        desc: "Remova rachaduras, manchas de água, marcas de dobra e manchas do tempo. Nosso modelo de inpainting preenche os detalhes perdidos sem emendas.",
      },
      {
        title: "Aprimoramento de qualidade",
        desc: "Corrija exposição, contraste e ruído ao mesmo tempo. Cada pixel analisado e corrigido para uma saída natural e equilibrada.",
      },
      {
        title: "Download imediato",
        desc: "Compare antes e depois com nosso slider interativo e baixe sua foto restaurada em resolução total.",
      },
    ] as const,

    stats: [
      { number: "10.000+", label: "Fotos restauradas", sub: "e contando" },
      { number: "30s", label: "Processamento médio", sub: "resultados em segundos" },
      { number: "4.8★", label: "Avaliação do usuário", sub: "de mais de 2.400 avaliações" },
    ] as const,
    testimonialsEyebrow: "Depoimentos",
    testimonialsH2: "Famílias do mundo todo confiam",
    testimonials: [
      {
        quote:
          "Eu estava cético no começo, mas os resultados me impressionaram muito. O retrato danificado do meu bisavô de 1942 ficou como novo. A IA até restaurou detalhes que eu não sabia que existiam.",
        author: "Michael Chen",
        location: "São Francisco, CA",
      },
      {
        quote:
          "Como genealogista profissional, recomendo essa ferramenta a todos os meus clientes. É mais rápida e mais acessível do que a restauração tradicional, e a qualidade é consistentemente excelente.",
        author: "Dra. Patricia Moore",
        location: "Boston, MA",
      },
      {
        quote:
          "Restaurei mais de 50 fotos de família no último mês. O recurso de colorização é incrível — devolveu a vida às fotos de casamento em preto e branco da minha avó. Vale cada centavo.",
        author: "James Rodriguez",
        location: "Austin, TX",
      },
    ] as const,

    howEyebrow: "Processo",
    howH2: "Três passos. Trinta segundos.",
    howSteps: [
      {
        n: "1",
        title: "Desbloqueie o acesso pago",
        desc: "Comece pelo checkout para ativar o upload e o processamento neste e-mail antes de entrar na ferramenta.",
      },
      {
        n: "2",
        title: "Envie com o mesmo e-mail",
        desc: "Volte à ferramenta após o pagamento e envie sua foto danificada, desbotada, em preto e branco ou de baixa qualidade.",
      },
      {
        n: "3",
        title: "Processe e baixe",
        desc: "Se o processamento for bem-sucedido, o mesmo e-mail mantém o caminho de download em qualidade original desbloqueado.",
      },
    ] as const,
    howCtaPrimary: "Restaure sua foto grátis",

    compareEyebrow: "Compare antes de escolher",
    compareH2: "Comece pelas perguntas com maior intenção de compra.",
    compareSubhead:
      "Quem já está comparando ferramentas está mais perto de agir do que um visitante genérico. Encaminhamos essa intenção para páginas de comparação direta e depois para o fluxo de restauração.",
    compareLabel: "Página de alta intenção",
    compareCards: [
      {
        title: "ArtImageHub vs Remini",
        desc: "Ideal para quem está em dúvida entre aprimoradores com IA e procura o melhor fluxo para fotos antigas de família.",
        points: [
          "Compare qualidade de restauração, preço e controle de artefatos",
          "Veja qual é melhor para retratos desbotados e cópias danificadas",
          "Vá direto para o nosso fluxo de restauração após a comparação",
        ],
        cta: "Ler a comparação com Remini",
      },
      {
        title: "Restauração com IA vs Photoshop",
        desc: "Ideal para quem pesa velocidade, esforço e qualidade antes de se comprometer com edição manual.",
        points: [
          "Compare esforço total, tempo de retorno e realismo",
          "Esclareça quando a edição manual é demais para recuperar fotos de família",
          "Vá direto da avaliação para uma restauração com IA ao vivo",
        ],
        cta: "Ler a comparação com Photoshop",
      },
    ] as const,
    compareDirectCta: "Ir direto para restaurar",

    faqEyebrow: "FAQ",
    faqH2: "Perguntas respondidas.",
    faqSubheadPrefix: "Tudo o que você precisa saber antes de começar. Não encontrou uma resposta? ",
    faqVisitJournalLink: "Visite nosso jornal",
    faqSubheadSuffix: ".",
    faqItems: [
      {
        q: "Quais formatos de imagem vocês aceitam?",
        a: "Formatos JPG, PNG e WEBP — até 20 MB por arquivo.",
      },
      {
        q: "O que acontece após o pagamento?",
        a: "Seu pagamento desbloqueia o upload e o processamento com IA neste endereço de e-mail. Quando o processamento termina, o mesmo e-mail desbloqueia o download HD em qualidade original — sem marca-d'água, sem assinatura.",
      },
      {
        q: "Meus dados de foto são privados e seguros?",
        a: "Sim. Todas as fotos enviadas são excluídas automaticamente após 24 horas. Nunca armazenamos, compartilhamos ou treinamos modelos com suas imagens.",
      },
      {
        q: "Como funciona o acesso?",
        a: "O pagamento desbloqueia o upload e o processamento neste e-mail. Se o processamento for bem-sucedido, o mesmo e-mail desbloqueia o download em qualidade original.",
      },
      {
        q: "Preciso de uma assinatura?",
        a: "Não. É um pagamento único que desbloqueia o acesso neste e-mail. Sem cobrança recorrente.",
      },
    ] as const,

    finalH2: "Suas memórias merecem voltar a brilhar.",
    finalSubhead:
      "Pague uma vez para desbloquear o upload e o processamento neste e-mail e continue dentro da ferramenta. Devolva a vida à história da sua família sem voltar à promessa da pré-visualização gratuita.",
    finalCtaPrimary: "Restaure sua foto grátis",
    finalCtaSecondary: "Ver preços",
    finalTagline: "Acesso pago antes do upload · Pagamento único · Sem assinatura",
  },
  toolClient: {
    restore: ptBRRestoreClient,
    colorize: ptBRColorizeClient,
    enhance: ptBREnhanceClient,
  },
};
