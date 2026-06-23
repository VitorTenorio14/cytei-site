import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Target, Eye, Heart, User } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — CYTEI" },
      { name: "description", content: "Conheça a missão, valores e história da CYTEI." },
    ],
  }),
  component: SobrePage,
});

// ---------------------------------------------------------------------------
// Dados dos fundadores 
// ---------------------------------------------------------------------------
const fundadores = [
  {
    nome: "Edson Moreira Corrêa Filho",
    cargo: "Founder & CEO",
    bio: "Sócio fundador da CYTEI Tecnologia em Energia Inovadora Sustentável, desde 2029. Economista, com especializações e MBA em Negócios, Finanças, Estruturação e Gestão de Projetos Estratégicos e Tecnológicos para o setor Bancário e Financeiro. Concursado do Banco do Brasil, onde trabalho por 35 anos. Exerceu diversas funções e cargos destacando-se, entre eles, o de constituição de Joint Venture para estruturação de uma rede de distribuição de produtos e atendimento para o público não bancarizado, desenvolvimento e gestão da estratégia de atuação e apoio do Banco do Brasil no Desenvolvimento Regional Sustentável, consultoria em O&M para a estrutura do Banco do Brasil no exterior. Foi Gerente de Projetos Sr. na Capegimini atuando no projeto de estruturação tecnológica para um grade banco brasileiro.",
    foto: "https://res.cloudinary.com/dj2ws9gmi/image/upload/v1782225441/edson-moreira_sqym3v.jpg"
  },
  {
    nome: "Willian Gabriel Ruas", 
    cargo: "Diretor de Tecnologia",
    bio: "Formado em Sistemas de Informação com MBA em Finanças, Controladoria e Auditoria. Atua no mercado de Tecnologia desde 2011 e no mercado de energias renováveis desde 2015, com ampla experiência computacional e passagem por multinacional norte-americana do setor solar, onde desenvolveu sistemas estratégicos e ferramentas de análise financeira para projetos fotovoltaicos.",
    foto: "https://res.cloudinary.com/dj2ws9gmi/image/upload/v1782231138/Captura_de_tela_2026-06-23_131311_uldcvs.png"
  },
];

// ---------------------------------------------------------------------------
// Componente principal
// ---------------------------------------------------------------------------
function SobrePage() {
  return (
    <SiteLayout>
      <PageHero
        title="Sobre a CYTEI"
        subtitle="Nascemos para conectar todo o ecossistema da energia renovável brasileira em um só lugar."
      />

      {/* ------------------------------------------------------------------ */}
      {/* Missão · Visão · Valores                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-3 lg:px-8">
          {[
            {
              icon: Target,
              t: "Missão",
              d: "Democratizar o acesso à energia renovável conectando todos os agentes do mercado em uma plataforma única e transparente.",
            },
            {
              icon: Eye,
              t: "Visão",
              d: "Ser a maior plataforma de energia renovável da América Latina, transformando a forma como o setor se conecta.",
            },
            {
              icon: Heart,
              t: "Valores",
              d: "Sustentabilidade, transparência, inovação, colaboração e impacto positivo para pessoas e planeta.",
            },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-brand">
                <Icon size={26} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-primary">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Nossa história                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Nossa história
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary lg:text-4xl">
            Uma jornada movida pelo sol
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground">
            <p>
              A CYTEI nasceu da percepção de que o mercado brasileiro de energia renovável estava
              fragmentado: consumidores, integradoras, investidores e fornecedores operavam em ilhas
              isoladas, sem ferramentas comuns que facilitassem o diálogo e a geração de negócios.
            </p>
            <p>
              Reunimos especialistas em energia, tecnologia e finanças para criar uma plataforma
              modular capaz de unir todos esses atores em um único ecossistema digital — simples,
              fácil e econômico. Hoje, a CYTEI oferece módulos para gestão de usinas, créditos de
              carbono, consórcios, cooperativas, marketplace de kits e equipamentos, e muito mais.
            </p>
            <p>
              Acreditamos que a transição energética só acontece quando todo o ecossistema avança
              junto. Por isso, seguimos construindo ferramentas que conectam quem gera, quem consome,
              quem investe e quem viabiliza a energia renovável no Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Fundadores                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          {/* Cabeçalho da seção — mesmo padrão de "Nossa história" */}
          <div className="mb-12 text-center">
            <h2 className="mt-2 font-display text-3xl font-bold text-primary lg:text-4xl">
              Conheça o Time Executivo
            </h2>
          </div>

          {/* Grid 2 colunas em desktop, 1 em mobile */}
          <div className="grid gap-10 md:grid-cols-2">
            {fundadores.map((f) => (
              <div
                key={f.nome}
                className="flex flex-col gap-6 rounded-2xl border bg-card p-8 sm:flex-row sm:gap-8"
              >
                {/* Foto — espaço reservado; */}
                <div className="flex-shrink-0">
                  {f.foto ? (
                    <img
                      src={f.foto}
                      alt={`Foto de ${f.nome}`}
                      className="h-32 w-32 rounded-xl object-cover"
                    />
                  ) : (
                    /* Placeholder visual até a foto ser adicionada */
                    <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-primary/10">
                      <User size={48} className="text-primary/40" />
                    </div>
                  )}
                </div>

                {/* Texto */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-display text-xl font-semibold text-primary">
                    {f.nome}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand">{f.cargo}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
