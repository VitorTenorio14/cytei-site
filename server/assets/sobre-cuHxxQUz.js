import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout, P as PageHero } from "./Layout-ChKi9QuW.js";
import { Target, Eye, Heart } from "lucide-react";
import "@tanstack/react-router";
import "react";
function SobrePage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHero, { title: "Sobre a CYTEI", subtitle: "Nascemos para conectar todo o ecossistema da energia renovável brasileira em um só lugar." }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-3 lg:px-8", children: [{
      icon: Target,
      t: "Missão",
      d: "Democratizar o acesso à energia renovável conectando todos os agentes do mercado em uma plataforma única e transparente."
    }, {
      icon: Eye,
      t: "Visão",
      d: "Ser a maior plataforma de energia renovável da América Latina, transformando a forma como o setor se conecta."
    }, {
      icon: Heart,
      t: "Valores",
      d: "Sustentabilidade, transparência, inovação, colaboração e impacto positivo para pessoas e planeta."
    }].map(({
      icon: Icon,
      t,
      d
    }) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border bg-card p-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-brand", children: /* @__PURE__ */ jsx(Icon, { size: 26 }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-2xl font-semibold text-primary", children: t }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: d })
    ] }, t)) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[var(--surface)] py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4 lg:px-8", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-brand", children: "Nossa história" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-3xl font-bold text-primary lg:text-4xl", children: "Uma jornada movida pelo sol" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-5 text-muted-foreground", children: [
        /* @__PURE__ */ jsx("p", { children: "A CYTEI nasceu da percepção de que o mercado brasileiro de energia renovável estava fragmentado: consumidores, integradoras, investidores e fornecedores operavam em ilhas isoladas, sem ferramentas comuns que facilitassem o diálogo e a geração de negócios." }),
        /* @__PURE__ */ jsx("p", { children: "Reunimos especialistas em energia, tecnologia e finanças para criar uma plataforma modular capaz de unir todos esses atores em um único ecossistema digital — simples, fácil e econômico. Hoje, a CYTEI oferece módulos para gestão de usinas, créditos de carbono, consórcios, cooperativas, marketplace de kits e equipamentos, e muito mais." }),
        /* @__PURE__ */ jsx("p", { children: "Acreditamos que a transição energética só acontece quando todo o ecossistema avança junto. Por isso, seguimos construindo ferramentas que conectam quem gera, quem consome, quem investe e quem viabiliza a energia renovável no Brasil." })
      ] })
    ] }) })
  ] });
}
export {
  SobrePage as component
};
