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
  slug: "pt-BR/restaurar-fotos-desbotadas",
  pageTitle: "Restaurar Fotos Desbotadas: Recuperar Cor e Nitidez (2026)",
  metaDescription:
    "Restaure fotos desbotadas, amareladas e com baixo contraste. ArtImageHub usa $4.99 pagamento único para recuperar cor, contraste e nitidez por IA, sem assinatura.",
  ogTitle: "Restaurar Fotos Desbotadas — Recuperar Cor por IA",
  ogDescription:
    "Como recuperar fotos desbotadas pelo tempo e pelo sol: fluxo $4.99 pagamento único comparado a apps mensais e edição manual.",
  twitterTitle: "Restaurar Fotos Desbotadas",
  twitterDescription:
    "Recuperação por IA de fotos desbotadas, amareladas e sem contraste — $4.99 pagamento único, sem assinatura.",
  keywords: [
    "restaurar fotos desbotadas",
    "recuperar foto desbotada",
    "restaurar foto antiga desbotada",
    "recuperar cor de foto antiga",
    "foto amarelada como restaurar",
    "restaurar foto sem contraste",
    "recuperar foto apagada pelo tempo",
    "restaurar foto desbotada pelo sol",
    "melhorar foto antiga desbotada",
    "restauracao de fotos desbotadas online",
  ],

  heroBadge: "Desbotamento",
  heroEyebrow: "Recuperar cor e contraste",
  heroH1: "Restaurar Fotos Desbotadas",
  heroSubhead:
    "Fotos perdem cor com o tempo, a luz e o calor: ficam amareladas, com baixo contraste e tons apagados. O ArtImageHub usa $4.99 pagamento único para recuperar cor, contraste e nitidez por IA, sem assinatura.",
  heroReadTime: "10 min de leitura",
  heroTestedNote: "Tipos de desbotamento comparados",

  quickPicks: [
    { label: "Melhor para cor e contraste", tool: "ArtImageHub", toolHref: "/pt-BR/old-photo-restoration", description: "$4.99 pagamento único, recupera cor e nitidez em HD" },
    { label: "Melhor para controle manual", tool: "Edição (Photoshop)", description: "$22.99/mês quando você quer ajustar curvas e níveis você mesmo" },
    { label: "Melhor para uso recorrente", tool: "Remini", description: "$9.99/mês pode fazer sentido para melhorar rostos com frequência" },
    { label: "Melhor para muitos scans", tool: "Topaz Photo AI", description: "$199 licença única se você trata muitas fotos no desktop" },
  ],

  introParagraphs: [
    "Quem busca restaurar fotos desbotadas geralmente tem retratos antigos que perderam cor: ficaram amarelados, com tons apagados, baixo contraste ou uma camada esbranquiçada por cima. É o efeito natural do tempo, da exposição à luz e do calor sobre o papel fotográfico e os corantes.",
    "Ao contrário de manchas ou rasgos, o desbotamento raramente apaga informação por completo — ele reduz a saturação e o contraste, mas a imagem ainda está lá. Por isso é um dos danos que a IA recupera melhor. O ArtImageHub usa um fluxo pay-first: $4.99 pagamento único, sem assinatura, para desbloquear envio, recuperação de cor e contraste por IA, e download em HD.",
    "Esta página explica o que causa o desbotamento, o que a IA consegue devolver, e como digitalizar a foto desbotada para um resultado mais forte antes de pagar por qualquer ferramenta.",
  ],

  comparisonHeading: "Como recuperar cada tipo de desbotamento?",
  comparisonItems: [
    { position: 1, name: "ArtImageHub", bestFor: "Cor apagada, amarelado e baixo contraste", pricing: "$4.99 pagamento único", pricingNote: "Sem assinatura", aiQuality: "★★★★★", aiQualityScore: "4.8/5", easeOfUse: "★★★★★", easeOfUseScore: "5/5", platform: "Web", highlight: true },
    { position: 2, name: "Edição manual (Photoshop)", bestFor: "Controle total de cor", pricing: "$22.99/mês", aiQuality: "★★★★★", aiQualityScore: "Depende da habilidade", easeOfUse: "★★☆☆☆", easeOfUseScore: "Curva alta", platform: "Mac, Windows" },
    { position: 3, name: "Topaz Photo AI", bestFor: "Lotes no desktop", pricing: "$199 licença", aiQuality: "★★★★★", aiQualityScore: "4.5/5", easeOfUse: "★★★★☆", easeOfUseScore: "4/5", platform: "Mac, Windows" },
    { position: 4, name: "Vivid-Pix Restore", bestFor: "Ajuste manual rápido", pricing: "$39.99 licença", aiQuality: "★★★★☆", aiQualityScore: "4.0/5", easeOfUse: "★★★★☆", easeOfUseScore: "4/5", platform: "Mac, Windows" },
    { position: 5, name: "Remini", bestFor: "Melhoria de rostos no celular", pricing: "$9.99/mês", aiQuality: "★★★★★", aiQualityScore: "4.6/5 em rostos", easeOfUse: "★★★★★", easeOfUseScore: "5/5", platform: "iOS, Android" },
    { position: 6, name: "Restaurador profissional", bestFor: "Foto rara e valiosa", pricing: "$50-$300+ por foto", aiQuality: "★★★★★", aiQualityScore: "Melhor em casos extremos", easeOfUse: "★★★☆☆", easeOfUseScore: "Orçamento + espera", platform: "Serviço" },
  ],
  comparisonNote:
    "Como o desbotamento preserva a estrutura da imagem, a IA costuma recuperar cor e contraste muito bem por um preço baixo. Edição manual e serviço humano só compensam quando você precisa de controle total ou a foto é insubstituível.",

  detailedHeading: "Melhores formas de recuperar fotos desbotadas",
  detailedReviews: [
    {
      position: 1,
      name: "ArtImageHub",
      tagline: "Melhor recuperação de cor com pagamento único",
      rating: "★★★★★",
      reviewCount: "4.8/5 em valor",
      isWinner: true,
      costNote: "$4.99 pagamento único, sem assinatura",
      body: [
        "é a forma mais direta de restaurar fotos desbotadas sem assinar plano. Pague $4.99 uma vez, envie a foto amarelada ou com tons apagados, deixe a IA recuperar saturação, corrigir o tom de cor, reforçar o contraste e melhorar a nitidez, e baixe o resultado em HD.",
        "O desbotamento é o cenário ideal para IA: como a informação ainda está na imagem, o modelo só precisa reequilibrar cor e contraste, sem inventar partes que não existem. Por isso o resultado costuma ser forte e natural, especialmente em retratos.",
        "Use o ArtImageHub quando a foto perdeu cor, mas ainda está legível. Para danos físicos somados ao desbotamento, o mesmo fluxo também ajuda, e casos extremos podem pedir um restaurador humano.",
      ],
      pros: ["$4.99 pagamento único", "Recupera cor e saturação", "Corrige amarelado", "Download em HD"],
      cons: ["Não é editor manual de curvas", "Processamento online"],
      bestFor: ["Fotos amareladas", "Tons apagados", "Baixo contraste"],
    },
    {
      position: 2,
      name: "Edição manual (Photoshop)",
      tagline: "Melhor quando você quer controle total",
      rating: "★★★★☆",
      costNote: "$22.99/mês",
      body: [
        "Um editor manual permite ajustar curvas, níveis e balanço de cor exatamente como você quer, corrigindo o amarelado e recuperando o contraste à mão.",
        "O preço é uma assinatura mensal e a curva de aprendizado é alta. Faz sentido para quem já domina a ferramenta ou precisa de controle fino em fotos específicas.",
      ],
      pros: ["Controle total de cor", "Ajuste fino de curvas", "Padrão profissional"],
      cons: ["Assinatura mensal", "Exige conhecimento", "Lento por foto"],
      bestFor: ["Editores experientes", "Controle fino", "Fotos específicas"],
    },
    {
      position: 3,
      name: "Software desktop",
      tagline: "Útil para muitos scans desbotados",
      rating: "★★★★☆",
      costNote: "$39.99-$199 inicial",
      body: [
        "Topaz Photo AI e Vivid-Pix Restore ajudam quem tem muitos scans desbotados e quer ajustar cada imagem com licença local, sem assinatura.",
        "O custo inicial é maior que o de uma ferramenta web. Para um único projeto de família, costuma ser mais do que o necessário.",
      ],
      pros: ["Licença sem assinatura", "Trabalho offline", "Controle por imagem"],
      cons: ["Custo inicial maior", "Precisa instalar", "Exige aprendizado"],
      bestFor: ["Muitos scans", "Trabalho recorrente", "Ajuste local"],
    },
  ],

  otherHeading: "O que verificar antes de recuperar a cor",
  otherReviews: [
    { position: 4, name: "Amarelado vs perda real de cor", tagline: "Nem todo desbotamento é igual", body: "Amarelado por papel envelhecido se corrige reequilibrando o tom; perda de saturação por luz exige reconstruir cor. A IA lida bem com os dois, mas o resultado varia conforme o caso.", proTag: "Recuperável", conTag: "Varia por foto" },
    { position: 5, name: "Digitalização em alta resolução", tagline: "Mais informação, melhor cor", body: "Um scan a 600 DPI dá à IA mais detalhe para reequilibrar tons. Fotos fotografadas com celular devem ter boa luz e foco para não perder informação.", proTag: "Mais detalhe", conTag: "Arquivo maior", conTagColor: "yellow" },
    { position: 6, name: "Prévia com marca d'água", tagline: "Comum em ferramentas gratuitas", body: "Muitas ferramentas grátis mostram a cor recuperada só em prévia e cobram plano para baixar em HD. Confirme o que está incluído antes de investir tempo.", proTag: "Dá para testar", conTag: "HD bloqueado", conTagColor: "yellow" },
  ],

  buyingGuideHeading: "Como restaurar uma foto desbotada",
  buyingGuideSteps: [
    { number: 1, title: "Digitalize em alta resolução", body: "Use um scan a 600 DPI ou uma foto bem iluminada e nítida. Quanto mais detalhe, melhor a IA reequilibra cor e contraste.", borderColor: "amber" },
    { number: 2, title: "Não corrija a cor antes de enviar", body: "Evite aplicar filtros ou autocorreção antes. A IA trabalha melhor a partir do original desbotado do que de uma imagem já alterada.", borderColor: "blue" },
    { number: 3, title: "Pague para desbloquear o processamento", body: "No ArtImageHub, $4.99 pagamento único desbloqueia envio, recuperação por IA e download em HD no seu e-mail.", borderColor: "green" },
    { number: 4, title: "Baixe e compare", body: "Verifique tons de pele, contraste e nitidez. Se a foto também tem dano físico, o mesmo resultado já vem mais limpo.", borderColor: "purple" },
  ],

  showBeforeAfter: true,
  beforeAfterHeading: "O que a recuperação de fotos desbotadas deve entregar",
  beforeAfterCaption1: "Antes: foto amarelada, tons apagados e baixo contraste",
  beforeAfterCaption2: "Depois: cor recuperada, contraste reforçado, resultado em HD",

  faqHeading: "Restaurar fotos desbotadas: perguntas frequentes",
  faqItems: [
    { question: "É possível recuperar a cor de uma foto desbotada?", answer: "Sim, e o desbotamento é um dos danos que a IA recupera melhor. Diferente de manchas ou rasgos, ele raramente apaga a imagem por completo: o tempo, a luz e o calor reduzem a saturação e o contraste e deixam um tom amarelado, mas a estrutura da foto continua lá. Por isso a IA só precisa reequilibrar cor e contraste, sem inventar partes que não existem. No ArtImageHub, $4.99 pagamento único, sem assinatura, desbloqueia o envio, a recuperação automática de cor, contraste e nitidez, e o download em HD. O resultado costuma ser forte e natural em retratos e cenas com bom detalhe original. Quando o desbotamento é extremo e quase não há cor restante, a IA aproxima os tons, mas a fidelidade depende da informação que sobrou. Um bom scan em alta resolução é o que mais ajuda a recuperar a cor." },
    { question: "Por que as fotos antigas ficam amareladas e desbotadas?", answer: "O desbotamento acontece porque os corantes e o papel fotográfico se degradam com o tempo. A exposição à luz, especialmente ao sol, quebra os pigmentos e reduz a saturação; o calor e a umidade aceleram esse processo; e certos papéis e produtos químicos de revelação envelhecem deixando um tom amarelado ou alaranjado. Fotos guardadas em álbuns plásticos baratos ou expostas em molduras na parede costumam desbotar mais rápido. O resultado é uma imagem com cores apagadas, baixo contraste e uma camada de cor dominante por cima. A boa notícia é que, na maioria dos casos, isso é uma alteração de cor e contraste, não uma perda de detalhe — e é exatamente o tipo de problema que a IA do ArtImageHub corrige bem por $4.99, reequilibrando os tons e devolvendo profundidade à imagem sem precisar de edição manual." },
    { question: "Quanto custa restaurar uma foto desbotada?", answer: "Com IA, o ArtImageHub usa $4.99 pagamento único, sem assinatura, para desbloquear o envio, a recuperação de cor e contraste e o download em HD. Esse é o caminho mais econômico e rápido para fotos amareladas e com tons apagados. A edição manual em Photoshop custa $22.99 por mês de assinatura e exige conhecimento técnico. Software de desktop com licença única fica entre $39.99 e $199, fazendo sentido para quem trata muitos scans. A restauração profissional, de $50 a $300 ou mais por foto, raramente é necessária só para desbotamento, já que a estrutura da imagem está preservada — ela se justifica mais quando há dano físico somado. Para um lote de fotos de família desbotadas, o pagamento único de IA é quase sempre o mais barato e o mais prático, porque você paga uma vez e processa todas." },
    { question: "A IA fica melhor que corrigir a cor manualmente?", answer: "Para a maioria das pessoas, sim, em velocidade e facilidade. Corrigir manualmente uma foto desbotada exige ajustar curvas, níveis e balanço de cor em um editor como o Photoshop, o que dá controle total mas leva tempo e conhecimento. A IA do ArtImageHub faz esse reequilíbrio automaticamente: ela analisa a imagem, corrige o tom dominante, recupera saturação e reforça o contraste em segundos, sem nenhuma habilidade técnica. Para um lote de fotos de família, isso é muito mais prático. A edição manual ainda tem vantagem quando você quer um controle artístico específico — um look exato, uma cor de pele ajustada à mão — ou quando uma foto rara merece atenção individual. Uma boa estratégia é deixar a IA fazer o trabalho pesado em todo o lote e, se alguma imagem precisar de ajuste fino, refinar manualmente só essa. Assim você combina rapidez com controle onde realmente importa." },
    { question: "Como digitalizar uma foto desbotada para o melhor resultado?", answer: "Comece com a maior resolução possível: use um scanner a 600 DPI ou tire uma foto bem iluminada e nítida do original, evitando reflexos, sombras e flash direto, que achatam o contraste. Quanto mais detalhe a IA receber, melhor ela consegue reequilibrar os tons. Um ponto importante: não tente corrigir a cor antes de enviar. Filtros, autocorreção do celular ou ajustes manuais aplicados de antemão podem confundir o modelo, que trabalha melhor a partir do original desbotado. Salve em JPG, PNG ou WEBP de boa qualidade, sem compressão agressiva. No ArtImageHub, basta pagar $4.99 uma vez, enviar esse arquivo, e a IA cuida de recuperar saturação, corrigir o amarelado, reforçar o contraste e melhorar a nitidez, devolvendo o resultado em HD no seu e-mail. A qualidade do scan é o fator que mais influencia a recuperação final da cor." },
  ],

  finalCtaHeading: "Recupere suas fotos desbotadas",
  finalCtaSubhead:
    "Pague $4.99 uma vez, envie a foto amarelada ou com tons apagados e baixe o resultado com cor recuperada em HD. Sem plano mensal, sem renovação.",
  finalCtaTagline: "$4.99 pagamento único · Sem assinatura · Download em HD",

  relatedHeading: "Guias relacionados",
  relatedGuides: [
    { href: "/pt-BR/old-photo-restoration", title: "Ferramenta de Restauração", blurb: "Envie sua foto antiga e restaure com IA" },
    { href: "/pt-BR/colorizar-fotos-antigas", title: "Colorizar Fotos Antigas", blurb: "Dê cor a retratos em preto e branco" },
    { href: "/pt-BR/restaurar-fotos-danificadas-por-agua", title: "Restaurar Fotos Danificadas por Água", blurb: "Reparo de manchas, mofo e descoloração" },
    { href: "/restore-faded-photos", title: "Restore Faded Photos", blurb: "Versão em inglês do guia de fotos desbotadas" },
  ],

  schemaName: "Restaurar Fotos Desbotadas",
  schemaDescription:
    "Guia buyer-intent para restaurar fotos desbotadas, amareladas e com baixo contraste usando IA com pagamento único, comparado a edição manual e software desktop.",
};

export const metadata: Metadata = {
  title: config.pageTitle,
  description: config.metaDescription,
  keywords: config.keywords,
  alternates: { canonical: `/${config.slug}` },
  openGraph: { title: config.ogTitle, description: config.ogDescription, type: "article", url: `https://artimagehub.com/${config.slug}` },
  twitter: { card: "summary_large_image", title: config.twitterTitle, description: config.twitterDescription },
};

export default async function RestaurarFotosDesbotadasPage({ params }: Props) {
  const { locale } = await params;
  assertPtBR(locale);
  return <BuyerGuideTemplate config={config} />;
}
