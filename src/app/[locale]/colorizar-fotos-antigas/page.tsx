import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BuyerGuideTemplate, { type BuyerGuideConfig } from "@/components/BuyerGuideTemplate";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return [{ locale: "pt-BR" }];
}

function assertPtBR(locale: string) {
  if (locale !== "pt-BR") notFound();
}

const config: BuyerGuideConfig = {
  slug: "pt-BR/colorizar-fotos-antigas",
  pageTitle: "Colorizar Fotos Antigas: Preto e Branco para Cor (2026)",
  metaDescription:
    "Colorize fotos antigas em preto e branco com IA. ArtImageHub usa $4.99 pagamento único para colorir retratos antigos e baixar em HD, sem assinatura.",
  ogTitle: "Colorizar Fotos Antigas — Preto e Branco para Cor por IA",
  ogDescription:
    "Como colorizar fotos antigas em preto e branco: fluxo $4.99 pagamento único comparado a apps mensais e edição manual.",
  twitterTitle: "Colorizar Fotos Antigas",
  twitterDescription:
    "Colorização por IA de fotos antigas em preto e branco — $4.99 pagamento único, sem assinatura.",
  keywords: [
    "colorizar fotos antigas",
    "colorir fotos preto e branco",
    "colorizar foto antiga online",
    "dar cor a foto antiga",
    "colorizacao de fotos por ia",
    "colorir foto antiga gratis",
    "transformar foto preto e branco em colorida",
    "colorizar foto de familia antiga",
    "app para colorir fotos antigas",
    "colorizacao de fotos preto e branco",
  ],

  heroBadge: "Colorização",
  heroEyebrow: "Preto e branco para cor",
  heroH1: "Colorizar Fotos Antigas",
  heroSubhead:
    "Dar cor a um retrato antigo em preto e branco aproxima a foto da vida real. O ArtImageHub usa $4.99 pagamento único para colorizar fotos antigas por IA e baixar o resultado em HD, sem assinatura.",
  heroReadTime: "10 min de leitura",
  heroTestedNote: "Métodos de colorização comparados",

  quickPicks: [
    { label: "Melhor colorização pay-first", tool: "ArtImageHub", toolHref: "/pt-BR/old-photo-restoration", description: "$4.99 pagamento único, colorização por IA com download em HD" },
    { label: "Melhor para cor histórica precisa", tool: "Colorização manual", description: "$30-$150+ por foto quando a cor exata importa para pesquisa ou arquivo" },
    { label: "Melhor para uso diário no celular", tool: "Remini", description: "$9.99/mês pode fazer sentido para quem coloriza fotos com frequência" },
    { label: "Melhor pacote genealógico", tool: "MyHeritage", description: "$129-$299/ano se você também usa árvore genealógica" },
  ],

  introParagraphs: [
    "Quem busca colorizar fotos antigas quer transformar um retrato em preto e branco em uma imagem colorida e natural, geralmente para reviver a foto de um avô, um casamento antigo ou um álbum de família. A intenção é emocional e direta: ver a foto como se tivesse sido tirada em cores.",
    "O ArtImageHub faz isso com um fluxo pay-first: $4.99 pagamento único, sem assinatura. O pagamento desbloqueia o envio da foto em preto e branco, a colorização por IA — que aplica tons de pele, roupas e cenário de forma plausível — e o download em HD no seu e-mail.",
    "Esta página explica como a colorização por IA funciona, quando ela é suficiente e quando vale uma colorização manual, e como preparar a foto antiga para obter cores mais naturais antes de pagar por qualquer ferramenta.",
  ],

  comparisonHeading: "Como cada método de colorização se compara?",
  comparisonItems: [
    { position: 1, name: "ArtImageHub", bestFor: "Colorização rápida e natural por IA", pricing: "$4.99 pagamento único", pricingNote: "Sem assinatura", aiQuality: "★★★★★", aiQualityScore: "4.8/5", easeOfUse: "★★★★★", easeOfUseScore: "5/5", platform: "Web", highlight: true },
    { position: 2, name: "Colorização manual", bestFor: "Cor histórica precisa", pricing: "$30-$150+ por foto", aiQuality: "★★★★★", aiQualityScore: "Controle total de tom", easeOfUse: "★★★☆☆", easeOfUseScore: "Orçamento + espera", platform: "Serviço" },
    { position: 3, name: "MyHeritage In Color", bestFor: "Genealogia e fotos juntas", pricing: "$129-$299/ano", aiQuality: "★★★★☆", aiQualityScore: "4.3/5", easeOfUse: "★★★★☆", easeOfUseScore: "4/5", platform: "Web, mobile" },
    { position: 4, name: "Remini", bestFor: "Uso diário no celular", pricing: "$9.99/mês", aiQuality: "★★★★★", aiQualityScore: "4.6/5", easeOfUse: "★★★★★", easeOfUseScore: "5/5", platform: "iOS, Android" },
    { position: 5, name: "Topaz Photo AI", bestFor: "Fluxo desktop profissional", pricing: "$199 licença", aiQuality: "★★★★☆", aiQualityScore: "4.5/5", easeOfUse: "★★★★☆", easeOfUseScore: "4/5", platform: "Mac, Windows" },
    { position: 6, name: "Edição manual (Photoshop)", bestFor: "Controle total camada a camada", pricing: "$22.99/mês", aiQuality: "★★★★★", aiQualityScore: "Depende da habilidade", easeOfUse: "★★☆☆☆", easeOfUseScore: "Curva alta", platform: "Mac, Windows" },
  ],
  comparisonNote:
    "Para a maioria das fotos de família, a colorização por IA entrega cores naturais em segundos por $4.99. A colorização manual só compensa quando você precisa de cores historicamente exatas para pesquisa ou arquivo.",

  detailedHeading: "Melhores formas de colorizar fotos antigas",
  detailedReviews: [
    {
      position: 1,
      name: "ArtImageHub",
      tagline: "Melhor colorização por IA com pagamento único",
      rating: "★★★★★",
      reviewCount: "4.8/5 em valor",
      isWinner: true,
      costNote: "$4.99 pagamento único, sem assinatura",
      body: [
        "é a forma mais direta de colorizar fotos antigas sem assinar plano. Pague $4.99 uma vez, envie a foto em preto e branco, deixe a IA aplicar tons de pele, roupas, cabelo e cenário de forma plausível, e baixe o resultado em HD.",
        "O modelo é treinado para escolher cores naturais a partir do contexto da imagem. Além de colorir, o fluxo também melhora nitidez e contraste, então a foto antiga sai mais viva e definida ao mesmo tempo. Funciona melhor em retratos e cenas com bom contraste original.",
        "Use o ArtImageHub quando quer um resultado bonito e natural rápido. Para cores historicamente exatas — o tom certo de um uniforme militar, por exemplo — uma colorização manual pode ser mais precisa.",
      ],
      pros: ["$4.99 pagamento único", "Cores naturais por IA", "Melhora nitidez junto", "Download em HD"],
      cons: ["Cor é plausível, não documentada", "Processamento online"],
      bestFor: ["Retratos de família", "Fotos de casamento antigas", "Álbuns em preto e branco"],
    },
    {
      position: 2,
      name: "Colorização manual",
      tagline: "Melhor quando a cor exata importa",
      rating: "★★★★☆",
      costNote: "$30-$150+ por foto",
      body: [
        "Um colorista manual pesquisa referências e pinta a foto à mão, escolhendo cada tom com precisão. É a melhor opção quando a cor precisa ser fiel a um período, uniforme, bandeira ou objeto específico.",
        "O custo por foto é alto e o prazo é maior. Para um álbum inteiro, isso fica caro rápido; para uma única imagem importante de pesquisa ou exposição, pode valer a pena.",
      ],
      pros: ["Cor historicamente pesquisada", "Controle total de tom", "Ideal para arquivo"],
      cons: ["Preço alto por foto", "Mais demorado", "Excesso para uso casual"],
      bestFor: ["Cor histórica precisa", "Foto única", "Pesquisa e exposição"],
    },
    {
      position: 3,
      name: "Apps e pacotes mensais",
      tagline: "Fazem sentido com uso recorrente",
      rating: "★★★☆☆",
      costNote: "$9.99/mês ou $129-$299/ano",
      body: [
        "Remini e MyHeritage In Color oferecem colorização dentro de ecossistemas maiores. Fazem sentido se você já assina por outros motivos, como melhoria de rostos no celular ou genealogia.",
        "Se a única tarefa é colorir um lote de fotos antigas e parar, a assinatura tende a ser custo e atrito desnecessários comparada a um pagamento único.",
      ],
      pros: ["Ecossistemas completos", "Mobile e genealogia", "Uso recorrente"],
      cons: ["Cobrança mensal ou anual", "Caro para projeto único"],
      bestFor: ["Usuários recorrentes", "Genealogia", "Mobile"],
    },
  ],

  otherHeading: "O que verificar antes de colorizar",
  otherReviews: [
    { position: 4, name: "Cor plausível vs documentada", tagline: "IA escolhe tons naturais, não confirmados", body: "A IA aplica cores que parecem certas para a cena, mas não são uma confirmação histórica. Para uniformes, bandeiras e objetos específicos, valide com referências se a exatidão importa.", proTag: "Natural e rápido", conTag: "Não é documentação" },
    { position: 5, name: "Qualidade do preto e branco original", tagline: "Bom contraste gera melhor cor", body: "Uma foto P&B com bom contraste e nitidez recebe cores mais convincentes. Fotos muito desbotadas podem precisar de restauração antes da colorização.", proTag: "Resultado melhor", conTag: "Depende do original", conTagColor: "yellow" },
    { position: 6, name: "Marca d'água e baixa resolução", tagline: "Comum em ferramentas gratuitas", body: "Muitos colorizadores gratuitos entregam prévia com marca d'água e cobram plano para HD. Confirme o que está incluído antes de gastar tempo.", proTag: "Dá para testar", conTag: "HD bloqueado", conTagColor: "yellow" },
  ],

  buyingGuideHeading: "Como colorizar uma foto antiga",
  buyingGuideSteps: [
    { number: 1, title: "Escolha uma boa digitalização", body: "Use um scan nítido a 600 DPI ou uma foto bem iluminada do original em preto e branco. Bom contraste gera cores mais naturais.", borderColor: "amber" },
    { number: 2, title: "Restaure antes se necessário", body: "Se a foto está muito danificada ou desbotada, restaurar primeiro melhora o resultado da colorização. O ArtImageHub faz as duas coisas no mesmo fluxo.", borderColor: "blue" },
    { number: 3, title: "Pague para desbloquear a colorização", body: "No ArtImageHub, $4.99 pagamento único desbloqueia envio, colorização por IA e download em HD no seu e-mail.", borderColor: "green" },
    { number: 4, title: "Baixe e ajuste expectativas", body: "Verifique tons de pele e cenário. As cores são naturais e plausíveis; para exatidão histórica, considere uma colorização manual.", borderColor: "purple" },
  ],

  showBeforeAfter: true,
  beforeAfterHeading: "O que a colorização por IA deve entregar",
  beforeAfterCaption1: "Antes: retrato antigo em preto e branco, sem cor",
  beforeAfterCaption2: "Depois: cores naturais de pele e cenário, resultado em HD",

  faqHeading: "Colorizar fotos antigas: perguntas frequentes",
  faqItems: [
    { question: "Como colorizar uma foto antiga em preto e branco?", answer: "A forma mais simples é usar uma ferramenta de IA: você envia a foto em preto e branco e o modelo aplica cores de forma automática, analisando rostos, roupas e cenário para escolher tons plausíveis. No ArtImageHub, o fluxo é pay-first: $4.99 pagamento único, sem assinatura, desbloqueia o envio, a colorização por IA e o download em HD no seu e-mail. O processo leva segundos e não exige nenhum conhecimento de edição. Para o melhor resultado, comece com uma boa digitalização — um scan nítido a 600 DPI ou uma foto bem iluminada do original. Fotos com bom contraste recebem cores mais convincentes, enquanto imagens muito desbotadas podem precisar de restauração antes. Se você precisa de cores historicamente exatas, como o tom certo de um uniforme, uma colorização manual feita por um especialista pode ser mais precisa, embora custe mais e demore mais." },
    { question: "A colorização por IA fica natural?", answer: "Na maioria dos retratos e cenas de família, sim. A IA do ArtImageHub é treinada para reconhecer pele, cabelo, céu, vegetação e roupas comuns, e aplica tons que parecem naturais para o contexto da imagem. Em fotos com bom contraste original, o resultado costuma ser convincente o suficiente para emocionar quem reconhece a pessoa retratada. Há limites: a IA escolhe cores plausíveis, não confirmadas. Ela pode acertar a aparência geral, mas não garante o tom exato de um vestido específico, de uma bandeira ou de um uniforme, porque essa informação não existe na imagem em preto e branco. Para uso pessoal e álbuns de família, isso quase nunca é um problema. Para pesquisa histórica ou exposição, onde a cor precisa ser documentada, vale complementar com uma colorização manual baseada em referências reais. Comece pela IA e avalie se o resultado já atende à sua necessidade." },
    { question: "Quanto custa colorizar fotos antigas?", answer: "Com IA, o ArtImageHub usa $4.99 pagamento único, sem assinatura, para desbloquear o envio, a colorização automática e o download em HD. Esse é o caminho mais econômico e rápido para colorir retratos e álbuns de família. A colorização manual feita por um especialista costuma custar entre $30 e $150 ou mais por foto, dependendo da complexidade e da exigência de exatidão histórica. Apps e pacotes mensais como Remini ou MyHeritage cobram de $9.99 por mês a $129-$299 por ano, fazendo sentido apenas se você já os usa para outros fins. Para um lote de fotos, o pagamento único de IA é quase sempre o mais barato, porque você paga uma vez e coloriza tudo. A colorização manual se justifica quando uma imagem específica precisa de cores pesquisadas e fiéis. Avalie quantas fotos tem e qual nível de precisão precisa antes de escolher." },
    { question: "Posso colorizar e restaurar a mesma foto?", answer: "Sim, e na maioria dos casos é o ideal fazer as duas coisas juntas. Fotos antigas em preto e branco costumam ter, além da falta de cor, problemas como desbotamento, riscos, manchas e baixa nitidez. Colorizar uma imagem danificada sem antes restaurá-la pode realçar os defeitos. O ArtImageHub trata isso no mesmo fluxo: ao processar a foto, a IA melhora nitidez e contraste e aplica a colorização, então o resultado sai mais vivo e mais definido ao mesmo tempo, por um único pagamento de $4.99. Para fotos com dano severo — grandes áreas perdidas ou rasgos profundos — pode ser melhor restaurar primeiro com atenção e só depois avaliar a colorização, eventualmente com ajuda manual. Mas para o desbotamento e os danos leves típicos de álbuns de família, o processamento combinado de restauração e cor costuma entregar um resultado satisfatório em uma única etapa." },
    { question: "Qual foto antiga colorizar primeiro?", answer: "Comece pelas fotos com mais valor emocional e melhor estado de conservação, porque elas dão o resultado mais gratificante e mais natural. Retratos nítidos de rosto, fotos de casamento e imagens de grupo com bom contraste costumam colorizar muito bem, já que a IA tem informação clara para trabalhar. Deixe para depois as fotos muito desbotadas, manchadas ou com dano severo, que podem precisar de restauração antes da colorização. Uma boa estratégia é digitalizar todo o álbum em alta resolução de uma vez e então processar primeiro as imagens favoritas, avaliando a qualidade antes de seguir com o restante. Como o ArtImageHub cobra $4.99 por processamento, com pagamento único e sem assinatura, você controla o ritmo e o custo, colorizando as fotos mais importantes primeiro e expandindo conforme gostar do resultado. Assim você não gasta com tentativas em imagens que talvez precisem de outro tratamento." },
  ],

  finalCtaHeading: "Colorize suas fotos antigas",
  finalCtaSubhead:
    "Pague $4.99 uma vez, envie a foto em preto e branco e baixe a versão colorizada em HD. Sem plano mensal, sem renovação.",
  finalCtaTagline: "$4.99 pagamento único · Sem assinatura · Download em HD",

  relatedHeading: "Guias relacionados",
  relatedGuides: [
    { href: "/pt-BR/old-photo-restoration", title: "Ferramenta de Restauração", blurb: "Envie sua foto antiga e restaure com IA" },
    { href: "/pt-BR/restaurar-fotos-danificadas-por-agua", title: "Restaurar Fotos Danificadas por Água", blurb: "Reparo de manchas, mofo e descoloração" },
    { href: "/pt-BR/preco-restauracao-fotos-antigas", title: "Preço de Restauração", blurb: "Comparativo de custo entre IA, profissionais e assinaturas" },
    { href: "/old-photo-colorization", title: "Old Photo Colorization", blurb: "Versão em inglês do guia de colorização" },
  ],

  schemaName: "Colorizar Fotos Antigas",
  schemaDescription:
    "Guia buyer-intent para colorizar fotos antigas em preto e branco usando IA com pagamento único, comparado a colorização manual e apps mensais.",
};

export const metadata: Metadata = {
  title: config.pageTitle,
  description: config.metaDescription,
  keywords: config.keywords,
  alternates: { canonical: `/${config.slug}` },
  openGraph: { title: config.ogTitle, description: config.ogDescription, type: "article", url: `https://artimagehub.com/${config.slug}` },
  twitter: { card: "summary_large_image", title: config.twitterTitle, description: config.twitterDescription },
};

export default async function ColorizarFotosAntigasPage({ params }: Props) {
  const { locale } = await params;
  assertPtBR(locale);
  return <BuyerGuideTemplate config={config} />;
}
