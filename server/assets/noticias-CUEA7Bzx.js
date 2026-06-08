import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout, P as PageHero } from "./Layout-ChKi9QuW.js";
import { Calendar } from "lucide-react";
import "@tanstack/react-router";
import "react";
const posts = [{
  t: "Energia solar bate recorde no Brasil",
  c: "Mercado",
  d: "Jun 2026",
  r: "O segmento de geração distribuída ultrapassou marca histórica de 40 GW instalados no país, consolidando o Brasil entre os líderes mundiais."
}, {
  t: "Como funcionam os créditos de carbono",
  c: "Educação",
  d: "Jun 2026",
  r: "Entenda como sua usina pode gerar receita adicional vendendo créditos de carbono no mercado voluntário."
}, {
  t: "Cooperativas: o futuro da energia compartilhada",
  c: "Tendências",
  d: "Mai 2026",
  r: "Modelo cooperativo cresce expressivamente e democratiza o acesso à energia limpa para consumidores de baixa renda."
}, {
  t: "Investir em usinas solares vale a pena?",
  c: "Investimento",
  d: "Mai 2026",
  r: "Análise dos retornos médios e prazos de payback no atual cenário regulatório brasileiro."
}, {
  t: "O&M digital reduz custos operacionais",
  c: "Tecnologia",
  d: "Abr 2026",
  r: "Monitoramento remoto e inteligência artificial estão transformando a operação de usinas no Brasil."
}, {
  t: "Geração distribuída: o que muda em 2026",
  c: "Regulatório",
  d: "Abr 2026",
  r: "Novas regras da ANEEL trazem impactos diretos para consumidores e investidores do setor."
}];
function NoticiasPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHero, { title: "Notícias", subtitle: "Insights, tendências e novidades do mundo da energia renovável." }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-8", children: posts.map((p) => /* @__PURE__ */ jsxs("article", { className: "group overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-xl", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-video bg-gradient-to-br from-primary via-primary to-brand" }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs", children: [
          /* @__PURE__ */ jsx("span", { className: "rounded-full bg-brand/15 px-3 py-1 font-semibold text-brand", children: p.c }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Calendar, { size: 12 }),
            " ",
            p.d
          ] })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-lg font-semibold text-primary transition group-hover:text-brand", children: p.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.r }),
        /* @__PURE__ */ jsx("button", { className: "mt-4 text-sm font-semibold text-brand hover:underline", children: "Ler artigo →" })
      ] })
    ] }, p.t)) }) })
  ] });
}
export {
  NoticiasPage as component
};
