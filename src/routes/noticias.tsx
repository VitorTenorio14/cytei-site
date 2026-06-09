import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Calendar } from "lucide-react";

export const Route = createFileRoute("/noticias")({
  head: () => ({ meta: [
    { title: "Notícias — CYTEI" },
    { name: "description", content: "Últimas notícias sobre energia renovável e a CYTEI." },
  ] }),
  component: NoticiasPage,
});

const posts = [
  { t: "Energia solar bate recorde no Brasil", c: "Mercado", d: "Jun 2026", r: "O segmento de geração distribuída ultrapassou marca histórica de 40 GW instalados no país, consolidando o Brasil entre os líderes mundiais." },
  { t: "Como funcionam os créditos de carbono", c: "Educação", d: "Jun 2026", r: "Entenda como sua usina pode gerar receita adicional vendendo créditos de carbono no mercado voluntário." },
  { t: "Cooperativas: o futuro da energia compartilhada", c: "Tendências", d: "Mai 2026", r: "Modelo cooperativo cresce expressivamente e democratiza o acesso à energia limpa para consumidores de baixa renda." },
  { t: "Investir em usinas solares vale a pena?", c: "Investimento", d: "Mai 2026", r: "Análise dos retornos médios e prazos de payback no atual cenário regulatório brasileiro." },
  { t: "O&M digital reduz custos operacionais", c: "Tecnologia", d: "Abr 2026", r: "Monitoramento remoto e inteligência artificial estão transformando a operação de usinas no Brasil." },
  { t: "Geração distribuída: o que muda em 2026", c: "Regulatório", d: "Abr 2026", r: "Novas regras da ANEEL trazem impactos diretos para consumidores e investidores do setor." },
];

function NoticiasPage() {
  return (
    <SiteLayout>
      <PageHero title="Notícias" subtitle="Insights, tendências e novidades do mundo da energia renovável." />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {posts.map((p) => (
            <article key={p.t} className="group overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-primary via-primary to-brand" />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-brand/15 px-3 py-1 font-semibold text-brand">{p.c}</span>
                  <span className="flex items-center gap-1 text-muted-foreground"><Calendar size={12} /> {p.d}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary transition group-hover:text-brand">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.r}</p>
                <button className="mt-4 text-sm font-semibold text-brand hover:underline">Ler artigo →</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
