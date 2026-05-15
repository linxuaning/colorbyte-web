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
  slug: "pt-BR/preco-restauracao-fotos-antigas",
  pageTitle: "Preço de Restauração de Fotos Antigas: IA vs Profissional (2026)",
  metaDescription:
    "Compare o preço da restauração de fotos antigas: ArtImageHub $4.99 pagamento único, serviços profissionais $50–$300+ por foto e apps com assinatura.",
  ogTitle: "Preço de Restauração de Fotos Antigas — Comparativo 2026",
  ogDescription:
    "Veja quanto custa restaurar fotos antigas antes de pagar: $4.99 com IA, $50–$300+ com restauração manual, assinaturas e softwares de desktop.",
  twitterTitle: "Preço de Restauração de Fotos Antigas",
  twitterDescription:
    "Comparativo de preço para restaurar fotos antigas com IA, profissionais, assinaturas e softwares.",
  keywords: [
    "preço restauração de fotos antigas",
    "preco restauracao de fotos antigas",
    "quanto custa restauração de fotos antigas",
    "quanto custa restaurar foto antiga",
    "restauração de fotos antigas preço",
    "restaurar fotos antigas preço",
    "preço restauração foto antiga online",
    "restauração de fotos antigas pagamento único",
    "restauração de fotos antigas sem assinatura",
    "restauração de fotos antigas barata",
  ],

  heroBadge: "Guia de Preço",
  heroEyebrow: "Comparativo 2026",
  heroH1: "Preço de Restauração de Fotos Antigas",
  heroSubhead:
    "Restaurar uma foto antiga pode custar $4.99 uma única vez, $50–$300+ por foto com um profissional, ou centenas por ano em assinaturas. Este guia compara o custo real para você não pagar mais do que precisa.",
  heroReadTime: "12 min de leitura",
  heroTestedNote: "6 modelos de preço comparados",

  quickPicks: [
    { label: "Menor custo para fotos de família", tool: "ArtImageHub", toolHref: "/pt-BR/old-photo-restoration", description: "$4.99 pagamento único, sem assinatura, com download em HD" },
    { label: "Melhor para dano severo", tool: "Restaurador profissional", description: "$50–$300+ por foto quando há partes faltando ou reconstrução manual" },
    { label: "Melhor licença desktop", tool: "Vivid-Pix Restore", description: "$39.99 uma vez para quem quer software instalado e controles manuais" },
    { label: "Melhor suíte profissional", tool: "Topaz Photo AI", description: "$199 uma vez se restauração fizer parte de um fluxo contínuo de edição" },
  ],

  introParagraphs: [
    "Quem pesquisa preço de restauração de fotos antigas normalmente quer uma resposta direta: quanto vou pagar para recuperar uma foto de família sem cair numa assinatura? A resposta depende do dano. Uma foto desbotada, riscada ou com baixa nitidez é muito diferente de uma imagem com metade do rosto faltando.",
    "Para danos comuns de álbum de família, o ArtImageHub usa um modelo pay-first claro: $4.99 pagamento único, sem assinatura. Esse pagamento desbloqueia envio, processamento por IA e download em HD no seu e-mail. Não é teste com cobrança recorrente depois, nem plano mensal escondido.",
    "Serviços profissionais continuam importantes quando a foto tem valor histórico ou dano extremo. Mas para a maioria dos casos — desbotamento, riscos, manchas, baixa resolução, contraste fraco e rostos suaves — a restauração por IA costuma entregar o melhor custo-benefício.",
  ],

  comparisonHeading: "Quanto custa cada opção de restauração?",
  comparisonItems: [
    { position: 1, name: "ArtImageHub", bestFor: "Restauração de fotos antigas com IA", pricing: "$4.99 pagamento único", pricingNote: "Sem assinatura", aiQuality: "★★★★★", aiQualityScore: "4.8/5", easeOfUse: "★★★★★", easeOfUseScore: "5/5", platform: "Web", highlight: true },
    { position: 2, name: "Restaurador profissional", bestFor: "Reconstrução manual severa", pricing: "$50–$300+ por foto", aiQuality: "★★★★★", aiQualityScore: "Melhor para partes faltando", easeOfUse: "★★★☆☆", easeOfUseScore: "Orçamento + espera", platform: "Serviço" },
    { position: 3, name: "Vivid-Pix Restore", bestFor: "Correção offline de digitalizações", pricing: "$39.99 licença", aiQuality: "★★★★☆", aiQualityScore: "4.0/5", easeOfUse: "★★★★☆", easeOfUseScore: "4/5", platform: "Mac, Windows" },
    { position: 4, name: "Topaz Photo AI", bestFor: "Suíte profissional", pricing: "$199 uma vez", aiQuality: "★★★★★", aiQualityScore: "4.5/5", easeOfUse: "★★★★☆", easeOfUseScore: "4/5", platform: "Mac, Windows" },
    { position: 5, name: "Remini", bestFor: "Aprimoramento facial no celular", pricing: "$9.99/mês", aiQuality: "★★★★★", aiQualityScore: "4.6/5 em rostos", easeOfUse: "★★★★★", easeOfUseScore: "5/5", platform: "iOS, Android" },
    { position: 6, name: "MyHeritage Photo Tools", bestFor: "Pacote de genealogia", pricing: "$129–$299/ano", aiQuality: "★★★★☆", aiQualityScore: "4.3/5", easeOfUse: "★★★★☆", easeOfUseScore: "4/5", platform: "Web, mobile" },
  ],
  comparisonNote:
    "Resumo: uma única foto restaurada manualmente pode custar 10–60× mais do que o ArtImageHub. Pague por trabalho humano quando há conteúdo faltando; use IA para danos comuns de fotos antigas.",

  detailedHeading: "Melhores opções por custo-benefício",
  detailedReviews: [
    {
      position: 1,
      name: "ArtImageHub",
      tagline: "Melhor preço fixo para fotos antigas comuns",
      rating: "★★★★★",
      reviewCount: "4.8/5 em valor",
      isWinner: true,
      costNote: "$4.99 pagamento único, sem assinatura",
      body: [
        "é a opção mais direta para quem quer restaurar fotos antigas sem pedir orçamento ou assinar um app. O preço é fixo: $4.99 pagamento único para envio, processamento por IA e download em HD.",
        "O melhor encaixe é dano leve a moderado: foto desbotada, arranhões, manchas, contraste fraco, baixa nitidez e rostos suavizados pelo tempo. Esses são exatamente os casos em que uma ferramenta de IA especializada costuma vencer em custo.",
        "Se a foto tem metade do rosto faltando, mofo severo ou valor histórico/documental, um restaurador humano pode justificar o custo maior. Para um lote familiar comum, o pagamento único evita orçamento por foto e assinatura mensal.",
      ],
      pros: ["$4.99 pagamento único", "Sem assinatura", "Download em HD", "Fluxo web rápido"],
      cons: ["Não substitui reconstrução manual extrema", "Requer processamento online"],
      bestFor: ["Fotos de família", "Baixo custo", "Dano leve a moderado"],
    },
    {
      position: 2,
      name: "Restaurador profissional",
      tagline: "Melhor quando precisão manual importa mais que preço",
      rating: "★★★★☆",
      costNote: "$50–$300+ por foto",
      body: [
        "Um restaurador profissional cobra caro porque o trabalho exige julgamento humano: reconstruir partes faltando, pintar fundos rasgados, corrigir mofo, combinar textura e preparar arquivo para impressão.",
        "Isso faz sentido para uma foto insubstituível. Mas para 30 fotos levemente danificadas, um orçamento de $75 por foto vira $2.250 rapidamente.",
      ],
      pros: ["Melhor para partes faltando", "Julgamento humano", "Arquivo pronto para impressão"],
      cons: ["Custo alto por foto", "Prazo maior", "Orçamento varia"],
      bestFor: ["Dano severo", "Fotos históricas", "Retoque manual"],
    },
    {
      position: 3,
      name: "Software desktop",
      tagline: "Bom se você vai restaurar fotos com frequência",
      rating: "★★★★☆",
      costNote: "$39.99–$199 upfront",
      body: [
        "Ferramentas de desktop podem valer a pena para quem restaura fotos regularmente e quer arquivos locais, processamento em lote ou controles manuais.",
        "Para um projeto único de família, o custo inicial e a curva de aprendizado geralmente são maiores do que o necessário.",
      ],
      pros: ["Licença única", "Uso offline", "Controles manuais"],
      cons: ["Custo inicial maior", "Instalação", "Curva de aprendizado"],
      bestFor: ["Usuários desktop", "Lotes grandes", "Edição recorrente"],
    },
  ],

  otherHeading: "Custos que parecem baixos, mas podem surpreender",
  otherReviews: [
    { position: 4, name: "Apps mensais", tagline: "Primeiro mês barato, renovação cara", body: "Um app de $9.99/mês pode funcionar para uso diário, mas vira cerca de $120/ano se você esquecer de cancelar após restaurar seu lote.", proTag: "Boa UX mobile", conTag: "Cobrança recorrente" },
    { position: 5, name: "Ferramentas por crédito", tagline: "Flexíveis, mas difíceis de prever", body: "Créditos evitam assinatura, mas o custo final depende de quantos créditos cada download em HD consome.", proTag: "Flexível", conTag: "Cálculo confuso", conTagColor: "yellow" },
    { position: 6, name: "Lojas locais", tagline: "Úteis para digitalizar, variáveis para restaurar", body: "Lojas locais podem ajudar com digitalização e impressão, mas nem sempre fazem restauração severa internamente.", proTag: "Ajuda local", conTag: "Escopo varia", conTagColor: "yellow" },
  ],

  buyingGuideHeading: "Como não pagar caro demais",
  buyingGuideSteps: [
    { number: 1, title: "Separe fotos por gravidade", body: "Use IA para desbotamento, riscos, manchas e nitidez baixa. Reserve retoque humano para rostos faltando, mofo severo ou valor histórico.", borderColor: "amber" },
    { number: 2, title: "Calcule o custo do lote", body: "Um orçamento de $75 por foto vira $2.250 em 30 fotos. Pagamento único combina melhor com arquivos familiares finitos.", borderColor: "blue" },
    { number: 3, title: "Evite assinatura para projeto único", body: "Se você só vai restaurar fotos uma vez, uma assinatura mensal pode continuar cobrando depois que o projeto acabou.", borderColor: "green" },
    { number: 4, title: "Pague por humano quando a IA falhar", body: "Teste IA para dano comum. Escale para profissional quando houver conteúdo faltando ou exigência histórica.", borderColor: "purple" },
  ],

  showBeforeAfter: true,
  beforeAfterHeading: "O que a restauração de baixo custo deve resolver",
  beforeAfterCaption1: "Antes: foto desbotada com riscos, baixa nitidez e contraste fraco",
  beforeAfterCaption2: "Depois: rosto mais nítido, contraste limpo e download em HD",

  faqHeading: "Preço da restauração de fotos antigas: perguntas frequentes",
  faqItems: [
    { question: "Quanto custa restaurar fotos antigas?", answer: "Com IA, pode custar $4.99 pagamento único no ArtImageHub. Serviços profissionais manuais costumam cobrar $50–$300+ por foto, dependendo da gravidade do dano e do prazo." },
    { question: "Por que restauração profissional é tão cara?", answer: "Porque envolve trabalho humano. O restaurador pode passar horas reconstruindo detalhes, corrigindo pele, removendo manchas e preparando arquivo para impressão." },
    { question: "A restauração por IA é barata demais para ser boa?", answer: "Não necessariamente. Para danos repetitivos como riscos, desbotamento e baixa nitidez, a IA costuma entregar resultado forte rapidamente. A limitação aparece quando há partes importantes totalmente ausentes." },
    { question: "Quando devo pagar um profissional?", answer: "Pague um profissional quando houver rosto faltando, rasgo grande, mofo severo, valor histórico ou necessidade de impressão museológica." },
    { question: "O ArtImageHub tem assinatura?", answer: "Não. O fluxo é pay-first: $4.99 pagamento único, sem assinatura, para desbloquear envio, processamento por IA e download em HD." },
    { question: "Qual é a opção mais barata que ainda faz sentido?", answer: "Para fotos antigas comuns de família, o ArtImageHub é a opção prática mais barata aqui: $4.99 pagamento único, sem assinatura e sem marca d'água no download em HD." },
  ],

  finalCtaHeading: "Restaure fotos antigas por $4.99 uma vez",
  finalCtaSubhead:
    "Sem orçamento por foto e sem plano mensal. Pague uma vez, envie sua foto antiga e baixe o resultado restaurado em HD.",
  finalCtaTagline: "$4.99 pagamento único · Sem assinatura · Download em HD",

  relatedHeading: "Guias relacionados",
  relatedGuides: [
    { href: "/pt-BR/restaurar-fotos-antigas-sem-assinatura", title: "Restaurar Fotos Antigas Sem Assinatura", blurb: "Fluxo sem plano mensal para restaurar fotos antigas online" },
    { href: "/pt-BR/old-photo-restoration", title: "Ferramenta de Restauração", blurb: "Envie sua foto antiga e restaure com IA" },
    { href: "/pt-BR/blog/photo-restoration-cost-guide", title: "Guia Completo de Custos", blurb: "Explicação detalhada dos níveis de preço" },
    { href: "/photo-restoration-cost", title: "Photo Restoration Cost", blurb: "Versão em inglês do guia de custo" },
  ],

  schemaName: "Preço de Restauração de Fotos Antigas",
  schemaDescription:
    "Comparativo de preço para restauração de fotos antigas com IA, serviços profissionais, assinaturas e softwares de desktop.",
};

export const metadata: Metadata = {
  title: config.pageTitle,
  description: config.metaDescription,
  keywords: config.keywords,
  alternates: { canonical: `/${config.slug}` },
  openGraph: { title: config.ogTitle, description: config.ogDescription, type: "article", url: `https://artimagehub.com/${config.slug}` },
  twitter: { card: "summary_large_image", title: config.twitterTitle, description: config.twitterDescription },
};

export default async function PrecoRestauracaoFotosAntigasPage({ params }: Props) {
  const { locale } = await params;
  assertPtBR(locale);
  return <BuyerGuideTemplate config={config} />;
}
