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
  slug: "pt-BR/restaurar-fotos-antigas-sem-assinatura",
  pageTitle: "Restaurar Fotos Antigas Sem Assinatura: Pagamento Único (2026)",
  metaDescription:
    "Restaure fotos antigas sem assinatura. ArtImageHub usa $4.99 pagamento único para envio, restauração por IA e download em HD — sem plano mensal.",
  ogTitle: "Restaurar Fotos Antigas Sem Assinatura — Pagamento Único",
  ogDescription:
    "Compare o fluxo sem assinatura para restaurar fotos antigas online: $4.99 pagamento único, apps mensais e serviços profissionais.",
  twitterTitle: "Restaurar Fotos Antigas Sem Assinatura",
  twitterDescription:
    "Fluxo pay-first para restaurar fotos antigas online sem plano mensal.",
  keywords: [
    "restaurar fotos antigas sem assinatura",
    "restauração de fotos sem assinatura",
    "restaurar fotos antigas pagamento único",
    "restauração de fotos pagamento único",
    "restaurar fotos antigas sem plano mensal",
    "restaurar foto antiga sem assinatura",
    "restaurar fotos antigas online sem assinatura",
    "restauração de fotos antigas sem assinatura",
    "app restaurar fotos sem assinatura",
    "restaurar fotos antigas pay once",
  ],

  heroBadge: "Sem Assinatura",
  heroEyebrow: "Fluxo Pay-First",
  heroH1: "Restaurar Fotos Antigas Sem Assinatura",
  heroSubhead:
    "Se você só precisa recuperar fotos antigas de família, uma assinatura mensal costuma ser excesso. O ArtImageHub usa $4.99 pagamento único, sem assinatura, para desbloquear envio, restauração por IA e download em HD.",
  heroReadTime: "11 min de leitura",
  heroTestedNote: "Fluxos com e sem assinatura comparados",

  quickPicks: [
    { label: "Melhor fluxo sem assinatura", tool: "ArtImageHub", toolHref: "/pt-BR/old-photo-restoration", description: "$4.99 pagamento único, sem plano mensal, com download em HD" },
    { label: "Melhor se você usa todo dia", tool: "Remini", description: "$9.99/mês pode fazer sentido para aprimoramento facial recorrente no celular" },
    { label: "Melhor pacote genealógico", tool: "MyHeritage", description: "$129–$299/ano se você também usa árvore genealógica" },
    { label: "Melhor opção desktop", tool: "Vivid-Pix Restore", description: "$39.99 licença única para quem quer software instalado" },
  ],

  introParagraphs: [
    "A busca por \"restaurar fotos antigas sem assinatura\" tem uma intenção clara: você quer recuperar uma foto de família sem começar um plano mensal. A maioria das pessoas não restaura fotos todos os dias; elas têm um lote finito de retratos antigos, fotos de casamento, imagens dos avós ou álbuns digitalizados.",
    "O ArtImageHub foi desenhado para esse caso. O fluxo é pay-first: $4.99 pagamento único, sem assinatura. Esse pagamento desbloqueia o envio da foto, o processamento por IA e o download em HD no seu e-mail. Não há teste com renovação automática, plano anual ou etapa de cancelamento depois.",
    "Esta página é diferente do guia de preço. Aqui o foco é workflow: como restaurar fotos antigas online sem entrar em assinatura, quando um app mensal ainda faz sentido, e o que verificar antes de pagar por qualquer ferramenta de restauração.",
  ],

  comparisonHeading: "Como os fluxos sem assinatura se comparam?",
  comparisonItems: [
    { position: 1, name: "ArtImageHub", bestFor: "Restauração sem assinatura", pricing: "$4.99 pagamento único", pricingNote: "Sem renovação", aiQuality: "★★★★★", aiQualityScore: "4.8/5", easeOfUse: "★★★★★", easeOfUseScore: "5/5", platform: "Web", highlight: true },
    { position: 2, name: "Vivid-Pix Restore", bestFor: "Licença desktop", pricing: "$39.99 uma vez", aiQuality: "★★★★☆", aiQualityScore: "4.0/5", easeOfUse: "★★★★☆", easeOfUseScore: "4/5", platform: "Mac, Windows" },
    { position: 3, name: "Topaz Photo AI", bestFor: "Edição profissional", pricing: "$199 uma vez", aiQuality: "★★★★★", aiQualityScore: "4.5/5", easeOfUse: "★★★★☆", easeOfUseScore: "4/5", platform: "Mac, Windows" },
    { position: 4, name: "Hotpot.ai", bestFor: "Créditos avulsos", pricing: "Pacotes de crédito", aiQuality: "★★★★☆", aiQualityScore: "4.0/5", easeOfUse: "★★★★★", easeOfUseScore: "5/5", platform: "Web" },
    { position: 5, name: "Remini", bestFor: "Uso diário no celular", pricing: "$9.99/mês", aiQuality: "★★★★★", aiQualityScore: "4.6/5 em rostos", easeOfUse: "★★★★★", easeOfUseScore: "5/5", platform: "iOS, Android" },
    { position: 6, name: "MyHeritage Photo Tools", bestFor: "Genealogia", pricing: "$129–$299/ano", aiQuality: "★★★★☆", aiQualityScore: "4.3/5", easeOfUse: "★★★★☆", easeOfUseScore: "4/5", platform: "Web, mobile" },
  ],
  comparisonNote:
    "Para projetos finitos de família, sem assinatura normalmente é melhor: você paga uma vez, restaura as fotos e termina. Assinaturas só fazem sentido quando restauração ou aprimoramento facial é uso recorrente.",

  detailedHeading: "Melhores formas de restaurar sem plano mensal",
  detailedReviews: [
    {
      position: 1,
      name: "ArtImageHub",
      tagline: "Melhor fluxo sem assinatura para fotos antigas",
      rating: "★★★★★",
      reviewCount: "4.8/5 em valor",
      isWinner: true,
      costNote: "$4.99 pagamento único, sem assinatura",
      body: [
        "é a opção mais direta para quem quer restaurar fotos antigas sem assinatura. O fluxo é simples: pague $4.99 uma vez, envie a foto antiga, deixe a IA corrigir riscos, desbotamento, manchas e baixa nitidez, e baixe o resultado em HD.",
        "A principal vantagem é não haver plano mensal. Você não precisa lembrar de cancelar, não paga por meses sem uso e não compra um pacote de recursos que não precisa. Isso combina com a forma real de muitos projetos de família: restaurar um lote e encerrar.",
        "Use o ArtImageHub quando suas fotos ainda têm informação visual suficiente para a IA recuperar. Para danos extremos com partes faltando, um restaurador humano pode ser necessário.",
      ],
      pros: ["$4.99 pagamento único", "Sem assinatura", "Download em HD", "Fluxo web rápido"],
      cons: ["Não é editor manual em camadas", "Processamento online"],
      bestFor: ["Projetos finitos", "Fotos de família", "Evitar plano mensal"],
    },
    {
      position: 2,
      name: "Vivid-Pix Restore",
      tagline: "Boa licença única para quem prefere desktop",
      rating: "★★★★☆",
      costNote: "$39.99 licença",
      body: [
        "Vivid-Pix Restore evita assinatura e funciona bem para usuários que preferem software instalado, arquivos locais e controles manuais de cor e exposição.",
        "O custo inicial é maior do que uma ferramenta web, então faz mais sentido se você tem muitos scans e quer ajustar cada imagem manualmente.",
      ],
      pros: ["Licença única", "Uso offline", "Controles manuais"],
      cons: ["Custo inicial maior", "Menos automático em dano severo"],
      bestFor: ["Desktop", "Lotes escaneados", "Controle manual"],
    },
    {
      position: 3,
      name: "Remini / MyHeritage",
      tagline: "Bons produtos quando a assinatura faz parte de outro uso",
      rating: "★★★☆☆",
      costNote: "$9.99/mês ou $129–$299/ano",
      body: [
        "Remini é forte em aprimoramento facial no celular. MyHeritage é útil se genealogia também é o objetivo. O problema é que ambos são menos alinhados com quem quer apenas restaurar fotos antigas uma vez.",
        "Se você assina por outros motivos, eles podem entrar no fluxo. Se a única tarefa é recuperar um conjunto de fotos antigas, a assinatura tende a ser custo e atrito desnecessários.",
      ],
      pros: ["Bons ecossistemas", "Experiência mobile/genealogia", "Uso recorrente"],
      cons: ["Cobrança recorrente", "Caro para projeto único"],
      bestFor: ["Usuários recorrentes", "Genealogia", "Mobile"],
    },
  ],

  otherHeading: "Armadilhas comuns em fluxos com assinatura",
  otherReviews: [
    { position: 4, name: "Teste com renovação automática", tagline: "Parece simples, mas exige cancelamento", body: "Se a ferramenta pede cartão para teste e renova automaticamente, ela não atende bem a intenção sem assinatura.", proTag: "Teste inicial", conTag: "Cancelamento obrigatório" },
    { position: 5, name: "Download em baixa resolução", tagline: "Prévia útil, resultado final bloqueado", body: "Alguns fluxos deixam ver uma prévia, mas exigem plano mensal para baixar sem marca d'água ou em HD.", proTag: "Dá para testar", conTag: "HD bloqueado", conTagColor: "yellow" },
    { position: 6, name: "Pacote amplo demais", tagline: "Você paga por recursos que não usa", body: "Apps de edição e genealogia podem ser ótimos, mas são caros se você só precisa restaurar fotos antigas uma vez.", proTag: "Recursos extras", conTag: "Excesso para uso único", conTagColor: "yellow" },
  ],

  buyingGuideHeading: "Como restaurar fotos antigas sem assinatura",
  buyingGuideSteps: [
    { number: 1, title: "Escolha um fluxo com preço fixo", body: "Procure pagamento único, sem assinatura e sem renovação. O preço precisa estar claro antes de você começar.", borderColor: "amber" },
    { number: 2, title: "Pague para desbloquear o processamento", body: "No ArtImageHub, $4.99 pagamento único desbloqueia envio, IA e download em HD no seu e-mail.", borderColor: "blue" },
    { number: 3, title: "Envie a foto antiga", body: "Use uma digitalização ou foto nítida do original. JPG, PNG e WEBP funcionam melhor quando a imagem está bem iluminada.", borderColor: "green" },
    { number: 4, title: "Baixe o resultado em HD", body: "Depois do processamento por IA, salve a versão restaurada para imprimir, compartilhar ou arquivar com a família.", borderColor: "purple" },
  ],

  showBeforeAfter: true,
  beforeAfterHeading: "O que um fluxo sem assinatura deve entregar",
  beforeAfterCaption1: "Antes: foto antiga desbotada, riscada ou com baixa nitidez",
  beforeAfterCaption2: "Depois: restauração em HD, sem plano mensal",

  faqHeading: "Restaurar fotos antigas sem assinatura: perguntas frequentes",
  faqItems: [
    { question: "Posso restaurar fotos antigas sem assinatura?", answer: "Sim. O ArtImageHub usa $4.99 pagamento único, sem assinatura, para desbloquear envio, restauração por IA e download em HD." },
    { question: "O que significa pagamento único?", answer: "Significa que não há cobrança mensal ou anual. Você paga uma vez para desbloquear o fluxo de restauração e download em HD no seu e-mail." },
    { question: "Por que não usar um app mensal?", answer: "Apps mensais fazem sentido para uso recorrente. Para um lote finito de fotos antigas, eles podem continuar cobrando depois que o projeto terminou." },
    { question: "Sem assinatura significa custo zero?", answer: "Não. Neste caso significa $4.99 pagamento único, sem assinatura. O foco é preço claro e sem renovação, não promessa de custo zero." },
    { question: "A qualidade é pior sem assinatura?", answer: "Não necessariamente. A qualidade depende do modelo e da foto. Para riscos, desbotamento, manchas e baixa nitidez, IA especializada pode entregar resultado forte sem plano mensal." },
    { question: "Quando uma assinatura vale a pena?", answer: "Quando você melhora fotos toda semana, usa recursos de genealogia ou precisa de um app mobile recorrente. Para restauração avulsa, pagamento único costuma ser mais adequado." },
  ],

  finalCtaHeading: "Restaure fotos antigas sem assinatura",
  finalCtaSubhead:
    "Pague $4.99 uma vez, envie sua foto antiga e baixe o resultado restaurado em HD. Sem plano mensal, sem renovação, sem etapa de cancelamento.",
  finalCtaTagline: "$4.99 pagamento único · Sem assinatura · Download em HD",

  relatedHeading: "Guias relacionados",
  relatedGuides: [
    { href: "/pt-BR/preco-restauracao-fotos-antigas", title: "Preço de Restauração de Fotos Antigas", blurb: "Comparativo de custo entre IA, profissionais e assinaturas" },
    { href: "/pt-BR/old-photo-restoration", title: "Ferramenta de Restauração", blurb: "Envie sua foto antiga e restaure com IA" },
    { href: "/pt-BR/blog/photo-restoration-cost-guide", title: "Guia de Preços", blurb: "Análise detalhada de custo para restauração" },
    { href: "/photo-restoration-no-subscription", title: "Photo Restoration Without Subscription", blurb: "Versão em inglês do guia sem assinatura" },
  ],

  schemaName: "Restaurar Fotos Antigas Sem Assinatura",
  schemaDescription:
    "Guia buyer-intent para restaurar fotos antigas sem assinatura usando pagamento único, comparado com apps mensais e serviços profissionais.",
};

export const metadata: Metadata = {
  title: config.pageTitle,
  description: config.metaDescription,
  keywords: config.keywords,
  alternates: { canonical: `/${config.slug}` },
  openGraph: { title: config.ogTitle, description: config.ogDescription, type: "article", url: `https://artimagehub.com/${config.slug}` },
  twitter: { card: "summary_large_image", title: config.twitterTitle, description: config.twitterDescription },
};

export default async function RestaurarFotosAntigasSemAssinaturaPage({ params }: Props) {
  const { locale } = await params;
  assertPtBR(locale);
  return <BuyerGuideTemplate config={config} />;
}
