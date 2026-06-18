import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Calendar, ExternalLink, BookOpen, Scale, TrendingUp, Zap, DollarSign, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — CYTEI" },
      { name: "description", content: "Últimas notícias sobre energia renovável e o setor de geração distribuída no Brasil." },
    ],
  }),
  component: NoticiasPage,
});

// ---------------------------------------------------------------------------
// Tipos
// ---------------------------------------------------------------------------
type Categoria = "Regulatório" | "Mercado" | "Educação" | "Tendências" | "Investimento";

interface Post {
  titulo: string;
  categoria: Categoria;
  data: string;
  resumo: string;
  fonte?: string;
  link?: string;
  destaque?: boolean; // ocupa coluna dupla no grid
}

// ---------------------------------------------------------------------------
// Cores por categoria (alinhadas ao design system CYTEI)
// ---------------------------------------------------------------------------
const categoriaCor: Record<Categoria, string> = {
  "Regulatório":  "bg-blue-100 text-blue-700",
  "Mercado":      "bg-emerald-100 text-emerald-700",
  "Educação":     "bg-amber-100 text-amber-700",
  "Tendências":   "bg-purple-100 text-purple-700",
  "Investimento": "bg-rose-100 text-rose-700",
};

// Gradiente de capa por categoria
const categoriaGradiente: Record<Categoria, string> = {
  "Regulatório":  "from-blue-800 via-blue-600 to-blue-400",
  "Mercado":      "from-emerald-800 via-emerald-600 to-emerald-400",
  "Educação":     "from-amber-700 via-amber-500 to-yellow-400",
  "Tendências":   "from-purple-800 via-purple-600 to-purple-400",
  "Investimento": "from-rose-800 via-rose-600 to-rose-400",
};

// Ícone representativo por categoria
const categoriaIcone: Record<Categoria, LucideIcon> = {
  "Regulatório":  Scale,
  "Mercado":      TrendingUp,
  "Educação":     BookOpen,
  "Tendências":   Zap,
  "Investimento": DollarSign,
};

// ---------------------------------------------------------------------------
// Posts
// ---------------------------------------------------------------------------
const posts: Post[] = [
  // --- Artigos informativos CYTEI ---
  {
    titulo: "Lei 14.300/2022: o marco legal que garante seus direitos na geração distribuída",
    categoria: "Educação",
    data: "Jun 2026",
    resumo:
      "Sancionada em janeiro de 2022, a Lei 14.300 instituiu o marco legal da micro e minigeração distribuída no Brasil, criando o Sistema de Compensação de Energia Elétrica (SCEE) e o Programa de Energia Renovável Social (PERS). Quem protocolou conexão até janeiro de 2023 mantém as regras antigas de compensação tarifária até 2045. Para os novos entrantes, a transição do Fio B é gradual e escalonada. Entenda o que muda, o que permanece e como isso afeta cooperativas de GD como a Enercoop.",
    fonte: "CYTEI",
    destaque: true,
  },
  {
    titulo: "Decreto 12.955/2026 e a reforma tributária: o que muda para cooperativas de energia?",
    categoria: "Regulatório",
    data: "Mai 2026",
    resumo:
      "Publicado em 29 de abril de 2026, o Decreto 12.955 regulamenta a Contribuição Social sobre Bens e Serviços (CBS) no âmbito da reforma tributária brasileira. Para o setor de energia, o decreto trata especificamente das cooperativas de geração compartilhada: o repasse da cooperativa aos seus associados dos valores decorrentes das operações de compensação não integra a base de cálculo da CBS, preservando a viabilidade econômica do modelo cooperativista. Saiba o que muda na prática para cooperados e para usinas de GD.",
    fonte: "CYTEI",
    destaque: false,
  },

  // --- Notícias externas atualizadas ---
  {
    titulo: "GD deve crescer 15% em 2026 e alcançar 50 GW instalados no Brasil",
    categoria: "Mercado",
    data: "Jan 2026",
    resumo:
      "A Associação Brasileira de Geração Distribuída (ABGD) projeta crescimento de 15% na potência instalada de GD em 2026. O setor chega ao ano com 3,87 milhões de sistemas conectados em 5.565 municípios, somando 43,5 GW e beneficiando 21 milhões de pessoas. A projeção de 50 GW depende de previsibilidade regulatória e investimentos na infraestrutura de rede.",
    fonte: "Canal Solar",
    link: "https://canalsolar.com.br/geracao-distribuida-projecao-de-crescimento-abgd/",
  },
  {
    titulo: "ANEEL prevê expansão de 9,1 GW na matriz elétrica brasileira em 2026",
    categoria: "Regulatório",
    data: "Jan 2026",
    resumo:
      "A ANEEL projeta crescimento de 9.142 MW na potência instalada do Brasil em 2026 — 23,4% acima do resultado de 2025. A energia solar centralizada será responsável por quase metade dessa expansão, com 4,56 GW previstos. A geração distribuída deve adicionar outros 6,5 GW no mesmo período.",
    fonte: "ANEEL / Gov.br",
    link: "https://www.gov.br/aneel/pt-br/assuntos/noticias/2026/aneel-preve-crescimento-de-9-1-gw-na-matriz-eletrica-brasileira-em-2026",
  },
  {
    titulo: "Brasil encerra 2025 com 64 GW solar e mais de R$ 87 bi em arrecadação pública",
    categoria: "Mercado",
    data: "Jan 2026",
    resumo:
      "A ABSOLAR confirmou que o Brasil adicionou 10,6 GW de energia solar em 2025, com investimentos superiores a R$ 32,9 bilhões. A fonte solar é hoje a segunda maior da matriz elétrica nacional, representando 24,5% de toda a capacidade de geração do país.",
    fonte: "ABSOLAR",
    link: "https://www.absolar.org.br/home/energia-solar-avanca-no-brasil-e-adiciona-106-gw-em-2025-com-mais-de-r-329-bi-em-investimentos/",
  },
  {
    titulo: "Financiamento de renováveis cresce 10,6% em 2025, mas GD mostra maior resiliência",
    categoria: "Investimento",
    data: "Jun 2026",
    resumo:
      "Levantamento do IPESI aponta crescimento de 10,6% no financiamento de energias renováveis em 2025. A geração distribuída solar manteve-se na faixa de R$ 13 a 14,7 bilhões entre 2023 e 2025, mostrando resiliência mesmo com juros elevados e incertezas regulatórias que afetaram a geração centralizada.",
    fonte: "IPESI",
    link: "https://ipesi.com.br/financiamento-para-energias-renovaveis-no-brasil-cresce-106-em-2025/",
  },
  {
    titulo: "Lei 15.269/2025: o que muda no setor elétrico e por que a Lei 14.300 continua intacta",
    categoria: "Regulatório",
    data: "Nov 2025",
    resumo:
      "A Lei 15.269/2025, sancionada em novembro, reformou o setor elétrico brasileiro sem alterar a Lei 14.300. As regras da geração distribuída permanecem intactas. A nova lei foca em armazenamento de energia, com incentivos fiscais para baterias e marco legal específico para sistemas híbridos — abrindo oportunidades para o modelo cooperativista.",
    fonte: "Portal Solar",
    link: "https://solardospomares.com.br/lei-14300-22-da-energia-solar-ainda-vale-pena/",
  },
  {
    titulo: "Mercado livre de energia: mais de 4,4 mil novos consumidores em apenas dois meses",
    categoria: "Mercado",
    data: "Mar 2024",
    resumo:
      "Nos dois primeiros meses de 2024, 4.403 consumidores notificaram sua intenção de migrar para o mercado livre de energia entre 2024 e 2025. O ritmo acelerado reflete a abertura progressiva do mercado e as vantagens econômicas para consumidores de médio e grande porte.",
    fonte: "Canal Solar",
    link: "https://canalsolar.com.br/dois-meses-consumidores-mercado-livre-energia/",
  },
  {
    titulo: "Geração solar centralizada cresce 41% em fevereiro de 2024",
    categoria: "Mercado",
    data: "Mar 2024",
    resumo:
      "Em fevereiro de 2024, a geração de energia solar centralizada atingiu 2.956 MWmed, crescimento de 41% em relação ao mesmo período do ano anterior, conforme dados da CCEE. O resultado reforça a consolidação da fonte solar como protagonista na matriz elétrica brasileira.",
    fonte: "Canal Solar",
    link: "https://canalsolar.com.br/geracao-energia-solar-centralizada-fevereiro/",
  },
  {
    titulo: "Brasil bate recorde: 93% da energia gerada em 2023 veio de fontes renováveis",
    categoria: "Tendências",
    data: "Fev 2024",
    resumo:
      "O Brasil registrou em 2023 o maior percentual histórico de energia limpa na sua matriz: 93,1% de toda a eletricidade gerada no ano veio de fontes renováveis, segundo a CCEE. O resultado posiciona o Brasil entre os países com a matriz elétrica mais limpa do mundo.",
    fonte: "G1 / CCEE",
    link: "https://g1.globo.com/economia/noticia/2024/02/02/energia-limpa-brasil-bate-recorde-com-93percent-da-energia-gerada-em-2023-vindo-de-fontes-renovaveis-diz-ccee.ghtml",
  },
  {
    titulo: "Minigeração ganha isenção de impostos federais com novo regime especial",
    categoria: "Regulatório",
    data: "Jun 2024",
    resumo:
      "O Ministério de Minas e Energia publicou portaria com as condições para enquadramento no Regime Especial de Incentivos para o Desenvolvimento da Infraestrutura, garantindo isenção de impostos federais para projetos de minigeração distribuída. A medida amplia a atratividade de novos empreendimentos no setor.",
    fonte: "Canal Solar",
    link: "https://canalsolar.com.br/minigeracao-isencao-impostos-federais/",
  },
  {
    titulo: "Mercado livre de energia movimentou R$ 100 bilhões em 2023",
    categoria: "Investimento",
    data: "Abr 2024",
    resumo:
      "A ABRACEEL divulgou balanço do mercado livre de energia em 2023: R$ 100 bilhões movimentados, consolidando o ambiente de contratação livre como alternativa relevante para grandes consumidores que buscam preços competitivos e maior previsibilidade nos custos de energia.",
    fonte: "Canal Solar",
    link: "https://canalsolar.com.br/mercado-livre-de-energia/",
  },
  {
    titulo: "Energia solar fica 31% mais barata no Brasil em um ano, aponta Solfácil",
    categoria: "Tendências",
    data: "Fev 2024",
    resumo:
      "O preço médio da energia solar no Brasil caiu 31% entre 2022 e 2023, passando de R$ 4,22/Wp para R$ 2,91/Wp. A redução amplia o acesso à tecnologia e melhora o retorno financeiro de novos projetos de geração distribuída para consumidores residenciais e comerciais.",
    fonte: "Canal Solar",
    link: "https://canalsolar.com.br/energia-solar-no-brasil-fica-31-mais-barata-em-um-ano-aponta-solfacil/",
  },
];

// ---------------------------------------------------------------------------
// Componente
// ---------------------------------------------------------------------------
function NoticiasPage() {
  const [filtro, setFiltro] = useState<Categoria | "Todos">("Todos");
  const categorias: Array<Categoria | "Todos"> = [
    "Todos", "Regulatório", "Mercado", "Educação", "Tendências", "Investimento",
  ];
  const postsFiltrados = filtro === "Todos" ? posts : posts.filter((p) => p.categoria === filtro);

  return (
    <SiteLayout>
      <PageHero
        title="Notícias"
        subtitle="Insights, tendências e atualizações do setor de energia renovável e geração distribuída."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          {/* Filtro de categorias */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                className={[
                  "rounded-full px-4 py-1.5 text-sm font-medium transition",
                  filtro === cat
                    ? "bg-primary text-white shadow-sm"
                    : "border bg-card text-muted-foreground hover:border-primary hover:text-primary",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {postsFiltrados.map((p) => (
              <article
                key={p.titulo}
                className={[
                  "group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl",
                  p.destaque ? "md:col-span-2 lg:col-span-1" : "",
                ].join(" ")}
              >
                {/* Capa com gradiente + ícone centralizado */}
                {(() => {
                  const Icone = categoriaIcone[p.categoria];
                  return (
                    <div
                      className={[
                        "relative flex items-center justify-center bg-gradient-to-br",
                        categoriaGradiente[p.categoria],
                        p.destaque ? "aspect-[3/1]" : "aspect-video",
                      ].join(" ")}
                    >
                      {/* Ícone central */}
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/20">
                        <Icone size={32} className="text-white drop-shadow" />
                      </div>

                      {/* Badge CYTEI no canto inferior esquerdo */}
                      {p.fonte === "CYTEI" && (
                        <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                          <BookOpen size={11} />
                          Artigo CYTEI
                        </span>
                      )}
                    </div>
                  );
                })()}

                {/* Conteúdo */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className={["rounded-full px-3 py-1 font-semibold", categoriaCor[p.categoria]].join(" ")}>
                      {p.categoria}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar size={11} />
                      {p.data}
                    </span>
                    {p.fonte && p.fonte !== "CYTEI" && (
                      <span className="text-muted-foreground">· {p.fonte}</span>
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-primary transition group-hover:text-brand">
                    {p.titulo}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-4">
                    {p.resumo}
                  </p>

                  {/* CTA */}
                  <div className="mt-5">
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                      >
                        Ler na fonte
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                        <BookOpen size={13} />
                        Conteúdo CYTEI
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

