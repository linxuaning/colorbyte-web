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
  slug: "pt-BR/restaurar-fotos-danificadas-por-agua",
  pageTitle: "Restaurar Fotos Danificadas por Água: Como Recuperar (2026)",
  metaDescription:
    "Restaure fotos danificadas por água, manchas e umidade. ArtImageHub usa $4.99 pagamento único para reparar manchas, descoloração e perda de nitidez por IA.",
  ogTitle: "Restaurar Fotos Danificadas por Água — Reparo por IA",
  ogDescription:
    "Como recuperar fotos com manchas de água, mofo e descoloração: fluxo $4.99 pagamento único comparado a restauradores profissionais.",
  twitterTitle: "Restaurar Fotos Danificadas por Água",
  twitterDescription:
    "Reparo por IA de fotos com manchas de água, umidade e descoloração — $4.99 pagamento único, sem assinatura.",
  keywords: [
    "restaurar fotos danificadas por agua",
    "recuperar fotos danificadas por agua",
    "reparar fotos com mancha de agua",
    "restaurar foto com mofo",
    "recuperar foto molhada",
    "restaurar fotos danificadas por umidade",
    "como salvar fotos danificadas por agua",
    "restauracao de fotos com mancha",
    "reparar foto antiga danificada",
    "restaurar foto danificada por enchente",
  ],

  heroBadge: "Dano por Água",
  heroEyebrow: "Reparo por IA",
  heroH1: "Restaurar Fotos Danificadas por Água",
  heroSubhead:
    "Manchas de água, mofo, áreas grudadas e descoloração são alguns dos danos mais comuns em fotos de família. O ArtImageHub usa $4.99 pagamento único para reparar essas marcas por IA e devolver a foto em HD, sem assinatura.",
  heroReadTime: "11 min de leitura",
  heroTestedNote: "Tipos de dano por água comparados",

  quickPicks: [
    { label: "Melhor para manchas e umidade", tool: "ArtImageHub", toolHref: "/pt-BR/old-photo-restoration", description: "$4.99 pagamento único, reduz manchas e recupera contraste em HD" },
    { label: "Melhor para dano extremo", tool: "Restaurador profissional", description: "$50-$300+ por foto quando parte da imagem foi perdida e precisa reconstrução manual" },
    { label: "Melhor para muitos scans", tool: "Topaz Photo AI", description: "$199 licença única se você trata muitas fotos danificadas no desktop" },
    { label: "Melhor para uso recorrente", tool: "Remini", description: "$9.99/mês pode fazer sentido para melhorar rostos com frequência" },
  ],

  introParagraphs: [
    "Quem busca restaurar fotos danificadas por água geralmente tem uma foto de família com manchas, áreas esbranquiçadas, mofo ou regiões que grudaram quando o papel secou. É um dos danos mais frequentes em álbuns guardados em porões, caixas ou locais úmidos, e também depois de enchentes e vazamentos.",
    "A boa notícia é que muito desse dano é recuperável. O ArtImageHub usa um fluxo pay-first: $4.99 pagamento único, sem assinatura. Esse pagamento desbloqueia o envio da foto, a reparação por IA — que reduz manchas, recupera contraste e suaviza áreas afetadas pela umidade — e o download em HD no seu e-mail.",
    "Esta página explica o que a IA consegue reparar em dano por água, quando vale chamar um restaurador humano, e como digitalizar a foto danificada para obter o melhor resultado antes de pagar por qualquer ferramenta.",
  ],

  comparisonHeading: "Como reparar cada tipo de dano por água?",
  comparisonItems: [
    { position: 1, name: "ArtImageHub", bestFor: "Manchas, umidade e descoloração", pricing: "$4.99 pagamento único", pricingNote: "Sem assinatura", aiQuality: "★★★★★", aiQualityScore: "4.8/5", easeOfUse: "★★★★★", easeOfUseScore: "5/5", platform: "Web", highlight: true },
    { position: 2, name: "Restaurador profissional", bestFor: "Áreas perdidas e reconstrução manual", pricing: "$50-$300+ por foto", aiQuality: "★★★★★", aiQualityScore: "Melhor em dano severo", easeOfUse: "★★★☆☆", easeOfUseScore: "Orçamento + espera", platform: "Serviço" },
    { position: 3, name: "Topaz Photo AI", bestFor: "Lotes no desktop", pricing: "$199 licença", aiQuality: "★★★★★", aiQualityScore: "4.5/5", easeOfUse: "★★★★☆", easeOfUseScore: "4/5", platform: "Mac, Windows" },
    { position: 4, name: "Vivid-Pix Restore", bestFor: "Ajuste manual de cor", pricing: "$39.99 licença", aiQuality: "★★★★☆", aiQualityScore: "4.0/5", easeOfUse: "★★★★☆", easeOfUseScore: "4/5", platform: "Mac, Windows" },
    { position: 5, name: "Remini", bestFor: "Melhoria de rostos no celular", pricing: "$9.99/mês", aiQuality: "★★★★★", aiQualityScore: "4.6/5 em rostos", easeOfUse: "★★★★★", easeOfUseScore: "5/5", platform: "iOS, Android" },
    { position: 6, name: "Edição manual (Photoshop)", bestFor: "Controle total", pricing: "$22.99/mês", aiQuality: "★★★★★", aiQualityScore: "Depende da habilidade", easeOfUse: "★★☆☆☆", easeOfUseScore: "Curva alta", platform: "Mac, Windows" },
  ],
  comparisonNote:
    "Para manchas, mofo leve e descoloração por umidade, a IA costuma resolver rápido e barato. Reserve o restaurador humano para quando partes da imagem foram realmente perdidas e precisam ser redesenhadas à mão.",

  detailedHeading: "Melhores formas de recuperar fotos com dano por água",
  detailedReviews: [
    {
      position: 1,
      name: "ArtImageHub",
      tagline: "Melhor opção para manchas, mofo e descoloração",
      rating: "★★★★★",
      reviewCount: "4.8/5 em valor",
      isWinner: true,
      costNote: "$4.99 pagamento único, sem assinatura",
      body: [
        "é a forma mais direta de reparar fotos danificadas por água sem pagar caro nem assinar plano. Pague $4.99 uma vez, envie a foto com mancha ou descoloração, deixe a IA reduzir manchas, recuperar contraste e suavizar áreas afetadas, e baixe o resultado em HD.",
        "O ponto forte é o equilíbrio entre custo e resultado. A IA foi treinada para reconstruir regiões onde a umidade clareou ou escureceu a imagem, mantendo rostos e contornos reconhecíveis. Funciona melhor quando a foto ainda tem informação visual suficiente, mesmo desbotada.",
        "Use o ArtImageHub para o dano por água típico de álbuns de família. Para fotos onde a emulsão descolou e levou parte do rosto, um restaurador humano pode entregar mais precisão.",
      ],
      pros: ["$4.99 pagamento único", "Reduz manchas e mofo", "Recupera contraste", "Download em HD"],
      cons: ["Não redesenha áreas totalmente perdidas", "Processamento online"],
      bestFor: ["Manchas de água", "Descoloração por umidade", "Fotos de família"],
    },
    {
      position: 2,
      name: "Restaurador profissional",
      tagline: "Melhor quando parte da imagem foi perdida",
      rating: "★★★★☆",
      costNote: "$50-$300+ por foto",
      body: [
        "Um restaurador humano consegue redesenhar à mão regiões que a água destruiu por completo, reconstruir um rosto a partir de referências e preparar o arquivo para impressão em alta qualidade.",
        "O custo por foto é alto, então faz mais sentido para uma única imagem insubstituível. Para um lote de fotos com dano leve a moderado, mesmo $75 por foto vira um valor grande rapidamente.",
      ],
      pros: ["Reconstrói áreas perdidas", "Decisão manual em zonas difíceis", "Preparo para impressão"],
      cons: ["Preço alto por foto", "Mais demorado", "Custo depende do orçamento"],
      bestFor: ["Dano severo", "Foto única e valiosa", "Impressão e arquivo"],
    },
    {
      position: 3,
      name: "Software desktop",
      tagline: "Útil para muitos scans danificados",
      rating: "★★★★☆",
      costNote: "$39.99-$199 inicial",
      body: [
        "Programas como Topaz Photo AI e Vivid-Pix Restore ajudam quem tem muitos scans com mancha e quer ajustar cada imagem manualmente, com arquivos locais e controle de cor.",
        "O custo inicial e a curva de aprendizado são maiores que os de uma ferramenta web. Para um único projeto de família, costuma ser mais do que o necessário.",
      ],
      pros: ["Licença sem assinatura", "Controle manual de cor", "Trabalho offline"],
      cons: ["Custo inicial maior", "Precisa instalar", "Exige aprendizado"],
      bestFor: ["Muitos scans", "Trabalho recorrente", "Ajuste manual"],
    },
  ],

  otherHeading: "Erros comuns ao recuperar fotos molhadas",
  otherReviews: [
    { position: 4, name: "Separar fotos grudadas com força", tagline: "Pode rasgar a emulsão", body: "Fotos que grudaram com a umidade não devem ser puxadas a seco. Digitalize como estão ou consulte um conservador antes de tentar separar, para não perder a camada de imagem.", proTag: "Preserva a foto", conTag: "Exige cuidado" },
    { position: 5, name: "Esperar a foto secar dobrada", tagline: "Fixa o dano no papel", body: "Deixar uma foto úmida secar amassada ou dobrada fixa o vinco. Seque na horizontal, em local arejado, antes de digitalizar para a IA.", proTag: "Reduz vincos", conTag: "Precisa de tempo", conTagColor: "yellow" },
    { position: 6, name: "Digitalizar em baixa resolução", tagline: "Limita o que a IA recupera", body: "Um scan de baixa resolução dá menos informação à IA. Digitalize a 600 DPI ou tire uma foto nítida e bem iluminada do original.", proTag: "Mais detalhe", conTag: "Arquivo maior", conTagColor: "yellow" },
  ],

  buyingGuideHeading: "Como restaurar uma foto danificada por água",
  buyingGuideSteps: [
    { number: 1, title: "Seque e estabilize a foto", body: "Se a foto ainda está úmida, seque na horizontal em local arejado, sem dobrar. Não force a separação de fotos grudadas.", borderColor: "amber" },
    { number: 2, title: "Digitalize em alta resolução", body: "Use um scanner a 600 DPI ou uma foto nítida e bem iluminada. Quanto mais detalhe, mais a IA consegue reconstruir.", borderColor: "blue" },
    { number: 3, title: "Pague para desbloquear o processamento", body: "No ArtImageHub, $4.99 pagamento único desbloqueia envio, reparo por IA e download em HD no seu e-mail.", borderColor: "green" },
    { number: 4, title: "Baixe e avalie o resultado", body: "Verifique manchas, rostos e contraste. Para áreas totalmente perdidas, considere complementar com um restaurador humano.", borderColor: "purple" },
  ],

  showBeforeAfter: true,
  beforeAfterHeading: "O que o reparo de dano por água deve entregar",
  beforeAfterCaption1: "Antes: manchas de água, descoloração, mofo e perda de nitidez",
  beforeAfterCaption2: "Depois: manchas reduzidas, contraste recuperado, resultado em HD",

  faqHeading: "Restaurar fotos danificadas por água: perguntas frequentes",
  faqItems: [
    { question: "É possível restaurar fotos danificadas por água?", answer: "Sim, na maioria dos casos é possível, desde que a imagem ainda tenha informação visual suficiente. O dano por água costuma aparecer como manchas, áreas esbranquiçadas, descoloração, mofo e perda de nitidez quando o papel secou de forma irregular. A IA do ArtImageHub foi treinada para reconstruir essas regiões: reduz manchas, recupera contraste e suaviza áreas onde a emulsão foi afetada pela umidade. O resultado é melhor quando o rosto e os contornos principais ainda estão visíveis, mesmo desbotados. Se a foto perdeu completamente partes da imagem, a IA reconstrói de forma aproximada, mas um restaurador humano pode ser necessário para precisão histórica. Para a maioria das fotos de família com manchas e descoloração por umidade, o fluxo de $4.99 pagamento único entrega uma recuperação forte e sem assinatura." },
    { question: "A IA consegue remover manchas de água da foto?", answer: "Em grande parte, sim. Manchas de água, marcas de secagem e descoloração suave estão entre os danos que a IA reduz com mais consistência, porque ela analisa a vizinhança da mancha e reconstrói a textura e o tom esperados. O ArtImageHub equaliza o contraste, suaviza halos esbranquiçados e devolve uma aparência mais uniforme à imagem. Manchas muito densas, onde a emulsão foi totalmente removida, são mais difíceis: ali a IA aproxima a cor e a textura, mas o detalhe original não pode ser inventado com fidelidade. Por isso o melhor caminho é digitalizar a foto em alta resolução antes de processar — quanto mais informação na borda da mancha, melhor a reconstrução. Para manchas comuns de álbum guardado em local úmido, o resultado costuma ser bastante satisfatório por $4.99." },
    { question: "Quando preciso de um restaurador humano em vez de IA?", answer: "Você deve considerar um restaurador humano quando a água destruiu partes inteiras da imagem — por exemplo, metade de um rosto desapareceu, a emulsão descolou e levou consigo a informação, ou a foto se fragmentou. Nesses casos, não há detalhe original para a IA recuperar, e um profissional redesenha as áreas à mão usando referências, conhecimento de anatomia e contexto histórico. Também vale chamar um humano para fotos insubstituíveis de alto valor sentimental ou histórico, onde a precisão importa mais que o custo. Para o dano por água típico — manchas, descoloração, mofo leve e perda de nitidez em fotos que ainda estão legíveis — a IA do ArtImageHub costuma resolver bem por uma fração do preço. Uma boa estratégia é começar pela IA e recorrer ao restaurador apenas se o resultado não for suficiente." },
    { question: "Quanto custa restaurar uma foto danificada por água?", answer: "Com IA, o ArtImageHub usa $4.99 pagamento único, sem assinatura, para desbloquear o envio, o reparo automático e o download em HD. Esse é o caminho mais econômico para fotos com manchas, descoloração e mofo leve. A restauração manual profissional costuma custar entre $50 e $300 ou mais por foto, dependendo da gravidade do dano e do tempo necessário para redesenhar áreas perdidas. Software de desktop com licença única fica entre $39.99 e $199, fazendo sentido apenas para quem trata muitos scans com frequência. Para um lote de fotos de família, o pagamento único de IA é quase sempre o mais barato; o serviço humano se justifica quando uma imagem específica precisa de reconstrução manual. Avalie o nível de dano antes de decidir: comece pelo mais barato e suba só quando o resultado exigir." },
    { question: "Como digitalizar uma foto molhada para obter o melhor resultado?", answer: "Primeiro, estabilize a foto: se ainda estiver úmida, seque na horizontal em local arejado, sem dobrar, e nunca force a separação de fotos que grudaram, pois isso rasga a emulsão. Quando estiver seca e plana, digitalize a 600 DPI em um scanner, ou tire uma foto bem iluminada e nítida do original, evitando reflexos e sombras. Quanto mais resolução e detalhe nas bordas das manchas, mais a IA consegue reconstruir. Salve em JPG, PNG ou WEBP de boa qualidade e evite filtros ou compressão agressiva antes de enviar. No ArtImageHub, basta pagar $4.99 uma vez, enviar esse arquivo e a IA cuida do reparo de manchas, contraste e nitidez, devolvendo o resultado em HD no seu e-mail. Um bom scan é o fator que mais influencia a qualidade final." },
  ],

  finalCtaHeading: "Recupere sua foto danificada por água",
  finalCtaSubhead:
    "Pague $4.99 uma vez, envie a foto com manchas ou descoloração e baixe o resultado restaurado em HD. Sem plano mensal, sem renovação.",
  finalCtaTagline: "$4.99 pagamento único · Sem assinatura · Download em HD",

  relatedHeading: "Guias relacionados",
  relatedGuides: [
    { href: "/pt-BR/old-photo-restoration", title: "Ferramenta de Restauração", blurb: "Envie sua foto antiga e restaure com IA" },
    { href: "/pt-BR/preco-restauracao-fotos-antigas", title: "Preço de Restauração de Fotos Antigas", blurb: "Comparativo de custo entre IA, profissionais e assinaturas" },
    { href: "/pt-BR/restaurar-fotos-antigas-sem-assinatura", title: "Restaurar Sem Assinatura", blurb: "Fluxo pay-first sem plano mensal" },
    { href: "/fix-water-damaged-photos", title: "Fix Water-Damaged Photos", blurb: "Versão em inglês do guia de dano por água" },
  ],

  schemaName: "Restaurar Fotos Danificadas por Água",
  schemaDescription:
    "Guia buyer-intent para restaurar fotos danificadas por água, manchas, mofo e descoloração usando IA com pagamento único, comparado a restauradores profissionais.",
};

export const metadata: Metadata = {
  title: config.pageTitle,
  description: config.metaDescription,
  keywords: config.keywords,
  alternates: { canonical: `/${config.slug}` },
  openGraph: { title: config.ogTitle, description: config.ogDescription, type: "article", url: `https://artimagehub.com/${config.slug}` },
  twitter: { card: "summary_large_image", title: config.twitterTitle, description: config.twitterDescription },
};

export default async function RestaurarFotosDanificadasPorAguaPage({ params }: Props) {
  const { locale } = await params;
  assertPtBR(locale);
  return <BuyerGuideTemplate config={config} />;
}
