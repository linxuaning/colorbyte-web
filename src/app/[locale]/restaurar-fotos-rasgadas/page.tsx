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
  slug: "pt-BR/restaurar-fotos-rasgadas",
  pageTitle: "Restaurar Fotos Rasgadas: Reparar Rasgos e Vincos (2026)",
  metaDescription:
    "Restaure fotos rasgadas, com vincos e pedaços faltando. ArtImageHub usa $4.99 pagamento único para reconstruir rasgos por IA e baixar em HD, sem assinatura.",
  ogTitle: "Restaurar Fotos Rasgadas — Reparo de Rasgos por IA",
  ogDescription:
    "Como reparar fotos rasgadas, com vincos e cantos faltando: fluxo $4.99 pagamento único comparado a restauradores profissionais.",
  twitterTitle: "Restaurar Fotos Rasgadas",
  twitterDescription:
    "Reparo por IA de fotos rasgadas, com vincos e pedaços faltando — $4.99 pagamento único, sem assinatura.",
  keywords: [
    "restaurar fotos rasgadas",
    "reparar foto rasgada",
    "consertar foto rasgada",
    "restaurar foto com pedaco faltando",
    "recuperar foto rasgada ao meio",
    "reparar foto com vinco",
    "restaurar foto antiga rasgada",
    "juntar foto rasgada",
    "restaurar foto dobrada e rasgada",
    "como consertar uma foto rasgada",
  ],

  heroBadge: "Rasgos e Vincos",
  heroEyebrow: "Reparo físico por IA",
  heroH1: "Restaurar Fotos Rasgadas",
  heroSubhead:
    "Rasgos, vincos, cantos faltando e fotos partidas ao meio são alguns dos danos mais difíceis. O ArtImageHub usa $4.99 pagamento único para reconstruir essas áreas por IA e devolver a foto em HD, sem assinatura.",
  heroReadTime: "11 min de leitura",
  heroTestedNote: "Tipos de rasgo comparados",

  quickPicks: [
    { label: "Melhor para rasgos e vincos", tool: "ArtImageHub", toolHref: "/pt-BR/old-photo-restoration", description: "$4.99 pagamento único, reconstrói linhas de rasgo e vincos em HD" },
    { label: "Melhor para pedaços faltando", tool: "Restaurador profissional", description: "$50-$300+ por foto quando falta uma parte grande da imagem e precisa redesenho manual" },
    { label: "Melhor para controle manual", tool: "Edição (Photoshop)", description: "$22.99/mês quando você quer clonar e reconstruir você mesmo" },
    { label: "Melhor para muitos scans", tool: "Topaz Photo AI", description: "$199 licença única se você trata muitas fotos danificadas no desktop" },
  ],

  introParagraphs: [
    "Quem busca restaurar fotos rasgadas geralmente tem um retrato antigo partido ao meio, com um vinco profundo, um canto faltando ou pequenos rasgos nas bordas. É um dano físico: o papel se separou, e às vezes parte da imagem se perdeu junto.",
    "Esse é um dos danos mais difíceis, mas grande parte é recuperável. O ArtImageHub usa um fluxo pay-first: $4.99 pagamento único, sem assinatura. Esse pagamento desbloqueia o envio da foto, a reconstrução por IA — que une as bordas do rasgo, suaviza vincos e preenche pequenas áreas faltando — e o download em HD.",
    "Esta página explica o que a IA consegue reconstruir em rasgos e vincos, quando uma parte faltando exige um restaurador humano, e como digitalizar uma foto rasgada para o melhor resultado antes de pagar por qualquer ferramenta.",
  ],

  comparisonHeading: "Como reparar cada tipo de rasgo?",
  comparisonItems: [
    { position: 1, name: "ArtImageHub", bestFor: "Rasgos, vincos e pequenas áreas faltando", pricing: "$4.99 pagamento único", pricingNote: "Sem assinatura", aiQuality: "★★★★★", aiQualityScore: "4.8/5", easeOfUse: "★★★★★", easeOfUseScore: "5/5", platform: "Web", highlight: true },
    { position: 2, name: "Restaurador profissional", bestFor: "Partes grandes faltando e reconstrução manual", pricing: "$50-$300+ por foto", aiQuality: "★★★★★", aiQualityScore: "Melhor em perda severa", easeOfUse: "★★★☆☆", easeOfUseScore: "Orçamento + espera", platform: "Serviço" },
    { position: 3, name: "Edição manual (Photoshop)", bestFor: "Clonagem e reconstrução à mão", pricing: "$22.99/mês", aiQuality: "★★★★★", aiQualityScore: "Depende da habilidade", easeOfUse: "★★☆☆☆", easeOfUseScore: "Curva alta", platform: "Mac, Windows" },
    { position: 4, name: "Topaz Photo AI", bestFor: "Lotes no desktop", pricing: "$199 licença", aiQuality: "★★★★☆", aiQualityScore: "4.3/5 em rasgos", easeOfUse: "★★★★☆", easeOfUseScore: "4/5", platform: "Mac, Windows" },
    { position: 5, name: "Vivid-Pix Restore", bestFor: "Ajuste de cor pós-reparo", pricing: "$39.99 licença", aiQuality: "★★★☆☆", aiQualityScore: "3.5/5 em rasgos", easeOfUse: "★★★★☆", easeOfUseScore: "4/5", platform: "Mac, Windows" },
    { position: 6, name: "Apps mobile (Remini etc.)", bestFor: "Melhoria de rosto, não rasgo", pricing: "$9.99/mês", aiQuality: "★★★☆☆", aiQualityScore: "Fraco em rasgo", easeOfUse: "★★★★★", easeOfUseScore: "5/5", platform: "iOS, Android" },
  ],
  comparisonNote:
    "Para rasgos, vincos e pequenas perdas, a IA costuma reconstruir bem e barato. Quando falta uma parte grande — metade de um rosto, por exemplo — um restaurador humano redesenha à mão com mais fidelidade.",

  detailedHeading: "Melhores formas de reparar fotos rasgadas",
  detailedReviews: [
    {
      position: 1,
      name: "ArtImageHub",
      tagline: "Melhor opção para rasgos, vincos e pequenas perdas",
      rating: "★★★★★",
      reviewCount: "4.8/5 em valor",
      isWinner: true,
      costNote: "$4.99 pagamento único, sem assinatura",
      body: [
        "é a forma mais direta de reparar fotos rasgadas sem pagar caro nem assinar plano. Pague $4.99 uma vez, envie a foto rasgada ou vincada, deixe a IA unir as bordas do rasgo, suavizar o vinco e preencher pequenas áreas faltando, e baixe o resultado em HD.",
        "A IA é forte em rasgos onde os dois lados ainda existem e podem ser reconectados, e em vincos que cruzam a imagem. Ela reconstrói a textura ao longo da linha de dano usando o contexto ao redor, deixando a emenda quase invisível em muitos casos.",
        "Use o ArtImageHub para rasgos, vincos e cantos pequenos faltando. Quando uma parte grande da imagem desapareceu, a IA aproxima, mas um restaurador humano pode redesenhar com mais precisão.",
      ],
      pros: ["$4.99 pagamento único", "Une bordas de rasgo", "Suaviza vincos", "Download em HD"],
      cons: ["Áreas grandes faltando são aproximadas", "Processamento online"],
      bestFor: ["Rasgos reconectáveis", "Vincos", "Cantos pequenos faltando"],
    },
    {
      position: 2,
      name: "Restaurador profissional",
      tagline: "Melhor quando falta uma parte grande",
      rating: "★★★★☆",
      costNote: "$50-$300+ por foto",
      body: [
        "Quando uma parte grande da foto se perdeu — um rosto pela metade, um pedaço inteiro arrancado — um restaurador humano redesenha a área à mão usando referências, anatomia e contexto histórico.",
        "O custo por foto é alto, então faz mais sentido para uma única imagem insubstituível. Para vários rasgos leves, mesmo $75 por foto se acumula rápido.",
      ],
      pros: ["Redesenha partes faltando", "Decisão manual em zonas difíceis", "Preparo para impressão"],
      cons: ["Preço alto por foto", "Mais demorado", "Custo depende do orçamento"],
      bestFor: ["Perda severa", "Foto única e valiosa", "Impressão e arquivo"],
    },
    {
      position: 3,
      name: "Edição manual (Photoshop)",
      tagline: "Útil para quem domina clonagem",
      rating: "★★★★☆",
      costNote: "$22.99/mês",
      body: [
        "Photoshop permite reparar rasgos com clonagem, carimbo e máscaras, dando controle total sobre cada parte da emenda — mas exige tempo e habilidade.",
        "Faz sentido para quem já edita ou quer ajuste fino. Para um lote de fotos de família rasgadas, a IA costuma ser mais rápida e mais barata.",
      ],
      pros: ["Controle total", "Clonagem manual precisa", "Padrão profissional"],
      cons: ["Assinatura mensal", "Exige habilidade", "Lento por foto"],
      bestFor: ["Editores experientes", "Ajuste fino", "Fotos específicas"],
    },
  ],

  otherHeading: "Erros comuns ao reparar fotos rasgadas",
  otherReviews: [
    { position: 4, name: "Colar a foto com fita", tagline: "Pode danificar mais", body: "Fita adesiva amarela e gruda na emulsão com o tempo. Não cole os pedaços: alinhe-os e digitalize juntos, deixando a IA unir a imagem.", proTag: "Preserva o original", conTag: "Exige cuidado" },
    { position: 5, name: "Descartar pedaços soltos", tagline: "Cada fragmento ajuda", body: "Mesmo um canto solto contém informação. Guarde e digitalize todos os pedaços; quanto mais a IA recebe, melhor reconstrói a emenda.", proTag: "Mais informação", conTag: "Junte tudo antes", conTagColor: "yellow" },
    { position: 6, name: "Digitalizar em baixa resolução", tagline: "Limita a reconstrução", body: "Um scan de baixa resolução dá menos detalhe à IA ao longo do rasgo. Digitalize a 600 DPI com os pedaços alinhados sobre o vidro do scanner.", proTag: "Mais detalhe", conTag: "Arquivo maior", conTagColor: "yellow" },
  ],

  buyingGuideHeading: "Como restaurar uma foto rasgada",
  buyingGuideSteps: [
    { number: 1, title: "Alinhe os pedaços sem colar", body: "Junte as partes rasgadas sobre o vidro do scanner, alinhando as bordas. Não use fita nem cola: a IA une a imagem digitalmente.", borderColor: "amber" },
    { number: 2, title: "Digitalize em alta resolução", body: "Use um scanner a 600 DPI ou uma foto nítida e bem iluminada. Quanto mais detalhe ao longo do rasgo, melhor a reconstrução.", borderColor: "blue" },
    { number: 3, title: "Pague para desbloquear o processamento", body: "No ArtImageHub, $4.99 pagamento único desbloqueia envio, reconstrução por IA e download em HD no seu e-mail.", borderColor: "green" },
    { number: 4, title: "Baixe e avalie o resultado", body: "Verifique a emenda do rasgo, vincos e bordas. Para partes grandes faltando, considere complementar com um restaurador humano.", borderColor: "purple" },
  ],

  showBeforeAfter: true,
  beforeAfterHeading: "O que o reparo de fotos rasgadas deve entregar",
  beforeAfterCaption1: "Antes: foto rasgada, com vinco profundo ou canto faltando",
  beforeAfterCaption2: "Depois: rasgo unido, vinco suavizado, resultado em HD",

  faqHeading: "Restaurar fotos rasgadas: perguntas frequentes",
  faqItems: [
    { question: "É possível restaurar uma foto rasgada?", answer: "Sim, na maioria dos casos é possível, principalmente quando os dois lados do rasgo ainda existem e podem ser reconectados. Rasgos, vincos e pequenas áreas faltando estão entre os danos físicos que a IA recupera bem, porque ela reconstrói a textura ao longo da linha de dano usando o contexto ao redor. No ArtImageHub, $4.99 pagamento único, sem assinatura, desbloqueia o envio, a reconstrução automática e o download em HD. O resultado costuma ser uma emenda quase invisível em rasgos limpos e vincos que cruzam a imagem. O limite aparece quando uma parte grande da foto se perdeu de vez — metade de um rosto, por exemplo: aí a IA aproxima, mas não há informação original para recuperar com fidelidade total, e um restaurador humano pode ser necessário. Para o rasgo típico de fotos de família, o fluxo de IA entrega uma recuperação forte por um preço baixo." },
    { question: "A IA consegue juntar uma foto rasgada ao meio?", answer: "Sim, quando as duas metades existem e você as digitaliza alinhadas. A IA do ArtImageHub identifica a linha de separação e reconstrói a textura ao longo dela, unindo as metades de forma que a emenda fique discreta. O segredo está na digitalização: alinhe os dois pedaços sobre o vidro do scanner, com as bordas o mais próximas possível, sem usar fita nem cola, e digitalize tudo junto em alta resolução. Quanto melhor o alinhamento e mais detalhe nas bordas, mais natural fica a junção. Se a linha do rasgo arrancou uma faixa fina de imagem no meio, a IA preenche essa lacuna com base no que existe ao redor. Se a faixa perdida for larga ou cruzar um rosto, a reconstrução vira aproximação, e pode valer um restaurador humano para o trecho crítico. Para a maioria das fotos partidas ao meio com perda mínima, o resultado por $4.99 costuma ser muito satisfatório." },
    { question: "Quando preciso de um restaurador humano para um rasgo?", answer: "Você deve considerar um restaurador humano quando o rasgo levou embora uma parte grande e importante da imagem, e não apenas separou o papel. Se metade de um rosto desapareceu, se um pedaço inteiro foi perdido ou se a foto se fragmentou e faltam vários trechos, não há informação original suficiente para a IA reconstruir com fidelidade. Nesses casos, um profissional redesenha as áreas à mão, usando referências, conhecimento de anatomia e contexto histórico para recriar o que faltou. Também vale chamar um humano para fotos insubstituíveis de alto valor, onde a precisão importa mais que o custo. Para rasgos onde os dois lados existem, vincos, dobras e pequenos cantos faltando, a IA do ArtImageHub costuma resolver bem por uma fração do preço. A melhor estratégia é começar pela IA e recorrer ao restaurador apenas para o trecho que ficar insatisfatório." },
    { question: "Quanto custa restaurar uma foto rasgada?", answer: "Com IA, o ArtImageHub usa $4.99 pagamento único, sem assinatura, para desbloquear o envio, a reconstrução automática e o download em HD. Esse é o caminho mais econômico para rasgos, vincos e pequenas áreas faltando. A restauração manual profissional costuma custar entre $50 e $300 ou mais por foto, dependendo de quanta imagem precisa ser redesenhada à mão. A edição em Photoshop é uma assinatura de $22.99 por mês e exige habilidade com clonagem. Software de desktop com licença única fica entre $39.99 e $199, fazendo sentido para quem trata muitos scans. Para um lote de fotos de família rasgadas, o pagamento único de IA é quase sempre o mais barato; o serviço humano se justifica quando uma foto específica perdeu uma parte grande que precisa de reconstrução manual. Avalie quanto da imagem realmente se perdeu antes de decidir, e comece pelo caminho mais barato." },
    { question: "Como digitalizar uma foto rasgada para o melhor resultado?", answer: "Primeiro, não cole os pedaços: fita e cola amarelam e danificam a emulsão com o tempo. Em vez disso, junte as partes rasgadas sobre o vidro do scanner, alinhando as bordas o mais próximo possível, como um quebra-cabeça. Guarde e inclua todos os fragmentos, mesmo cantos pequenos, porque cada um contém informação que ajuda a IA. Digitalize tudo junto a 600 DPI, ou tire uma foto nítida e bem iluminada com os pedaços alinhados sobre uma superfície plana, evitando sombras na linha do rasgo. Salve em JPG, PNG ou WEBP de boa qualidade. No ArtImageHub, basta pagar $4.99 uma vez, enviar esse arquivo, e a IA cuida de unir as bordas, suavizar vincos e preencher pequenas lacunas, devolvendo o resultado em HD no seu e-mail. Um bom alinhamento e uma alta resolução são os fatores que mais influenciam a qualidade da emenda final." },
  ],

  finalCtaHeading: "Repare sua foto rasgada",
  finalCtaSubhead:
    "Pague $4.99 uma vez, envie a foto rasgada ou vincada e baixe o resultado restaurado em HD. Sem plano mensal, sem renovação.",
  finalCtaTagline: "$4.99 pagamento único · Sem assinatura · Download em HD",

  relatedHeading: "Guias relacionados",
  relatedGuides: [
    { href: "/pt-BR/old-photo-restoration", title: "Ferramenta de Restauração", blurb: "Envie sua foto antiga e restaure com IA" },
    { href: "/pt-BR/restaurar-fotos-danificadas-por-agua", title: "Restaurar Fotos Danificadas por Água", blurb: "Reparo de manchas, mofo e descoloração" },
    { href: "/pt-BR/restaurar-fotos-desbotadas", title: "Restaurar Fotos Desbotadas", blurb: "Recuperar cor, contraste e nitidez" },
    { href: "/restore-damaged-photos", title: "Restore Damaged Photos", blurb: "Versão em inglês do guia de fotos danificadas" },
  ],

  schemaName: "Restaurar Fotos Rasgadas",
  schemaDescription:
    "Guia buyer-intent para restaurar fotos rasgadas, com vincos e pedaços faltando usando IA com pagamento único, comparado a restauradores profissionais e edição manual.",
};

export const metadata: Metadata = {
  title: config.pageTitle,
  description: config.metaDescription,
  keywords: config.keywords,
  alternates: { canonical: `/${config.slug}` },
  openGraph: { title: config.ogTitle, description: config.ogDescription, type: "article", url: `https://artimagehub.com/${config.slug}` },
  twitter: { card: "summary_large_image", title: config.twitterTitle, description: config.twitterDescription },
};

export default async function RestaurarFotosRasgadasPage({ params }: Props) {
  const { locale } = await params;
  assertPtBR(locale);
  return <BuyerGuideTemplate config={config} />;
}
