import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout, P as PageHero } from "./Layout-ChKi9QuW.js";
import { Users, Building2, Shield, Truck, ExternalLink } from "lucide-react";
import "@tanstack/react-router";
import "react";
const empresas = [{
  categoria: "Cooperativa",
  icon: Users,
  name: "Enercoop do Brasil",
  desc: "Cooperativa de energia renovável com modelo colaborativo para geração compartilhada. Mais de 80 mil cooperados aguardando energia compensada — um mercado pronto para quem tem energia disponível.",
  url: "https://willianruaswr.wixstudio.com/enercoop-v0",
  color: "bg-emerald-500"
}, {
  categoria: "Empresa Integradora",
  icon: Building2,
  name: "JSN Energia",
  desc: "Soluções completas em energia renovável — projetos, instalação e manutenção de usinas solares, auditoria de contas energéticas e armazenamento BESS.",
  url: "https://www.jsnenergia.com.br/",
  color: "bg-blue-600"
}, {
  categoria: "Seguro Solar",
  icon: Shield,
  name: "Sinergia Solar",
  desc: "Energia Full Service — proteção e seguro para usinas solares fotovoltaicas, atendendo o segmento de energia 360° com economia e praticidade.",
  url: "https://www.sinergiaempresarial.com.br/",
  color: "bg-amber-500"
}, {
  categoria: "Fornecedor",
  icon: Truck,
  name: "SB Solar",
  desc: "Distribuidora de energia solar — módulos, inversores, kits completos, sistemas híbridos e baterias para integradores, geradores e consumidores.",
  url: "https://www.sbsolar.com.br/",
  color: "bg-orange-500"
}];
function EcossistemaPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHero, { title: "Ecossistema CYTEI", subtitle: "Empresas e soluções que constroem o futuro da energia renovável no Brasil." }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-20 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-brand", children: "Soluções do Ecossistema" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-3xl font-bold text-primary lg:text-4xl", children: "Energia como negócio: parceiros para cada necessidade" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-8 md:grid-cols-2", children: empresas.map((e) => /* @__PURE__ */ jsxs("a", { href: e.url, target: "_blank", rel: "noreferrer", className: "group flex flex-col overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:border-brand hover:shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: `${e.color} px-6 py-3`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold text-white", children: [
          /* @__PURE__ */ jsx(e.icon, { size: 16 }),
          e.categoria
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-primary transition group-hover:text-brand", children: e.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 flex-1 text-sm text-muted-foreground leading-relaxed", children: e.desc }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand", children: [
            "Conhecer ",
            /* @__PURE__ */ jsx(ExternalLink, { size: 14 })
          ] })
        ] })
      ] }, e.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-primary py-20 text-primary-foreground lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4 text-center lg:px-8", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block rounded-full bg-brand/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand", children: "Oportunidade" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-5 font-display text-3xl font-bold lg:text-5xl", children: [
        "~80.000 cooperados esperando ",
        /* @__PURE__ */ jsx("span", { className: "text-brand", children: "energia" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-lg text-white/80", children: "A Enercoop do Brasil possui uma base com aproximadamente 80 mil cooperados aguardando energia para ser compensada. Se você tem energia disponível, essa é a sua oportunidade de conectar geração a consumo real." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "https://willianruaswr.wixstudio.com/enercoop-v0", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-brand-foreground shadow-lg transition hover:brightness-110", children: "Fale com a Enercoop do Brasil" }),
        /* @__PURE__ */ jsx("a", { href: "/contato", className: "inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white transition hover:border-brand hover:text-brand", children: "Entre em contato" })
      ] })
    ] }) })
  ] });
}
export {
  EcossistemaPage as component
};
