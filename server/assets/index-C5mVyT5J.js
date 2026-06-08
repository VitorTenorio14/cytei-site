import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout } from "./Layout-ChKi9QuW.js";
import { ArrowRight, BarChart3, Wrench, Users, Handshake, ChevronDown } from "lucide-react";
import { useState } from "react";
import "@tanstack/react-router";
const heroImg = "/assets/hero-energy-MGKBSfxp.jpg";
const solucoes = [{
  icon: BarChart3,
  title: "Gestão Energética",
  desc: "Monitore geração, compensação, créditos e faturamento de toda a sua operação em tempo real."
}, {
  icon: Wrench,
  title: "Serviços",
  desc: "Gestão e suporte técnico para cada etapa do seu projeto de energia."
}, {
  icon: Users,
  title: "Leads Qualificados",
  desc: "Conecta consumidores e oportunidades reais, segmentados por perfil e demanda energética."
}, {
  icon: Handshake,
  title: "Marketplace",
  desc: "Ambiente digital para conexão entre consumidores, integradoras, fornecedores e equipamentos qualificados."
}];
const passos = [{
  n: "01",
  t: "Cadastre-se",
  d: "Crie seu perfil gratuitamente como consumidor, integradora, investidor ou fornecedor."
}, {
  n: "02",
  t: "Conecte-se",
  d: "Acesse oportunidades, parceiros e serviços direcionados ao seu perfil."
}, {
  n: "03",
  t: "Energize",
  d: "Gestão e compensação de energia, acompanhe tudo em um único painel inteligente."
}];
const faqs = [{
  q: "O que é energia renovável?",
  a: "É energia gerada a partir de fontes naturais inesgotáveis como sol, vento, água e biomassa."
}, {
  q: "Quanto posso economizar com energia solar?",
  a: "A economia varia entre 80% e 95% da conta de luz, dependendo do consumo e do sistema instalado."
}, {
  q: "Preciso ter telhado próprio?",
  a: "Não. Você pode aderir a uma usina por assinatura ou cooperativa e receber créditos na sua conta."
}, {
  q: "Como funciona o marketplace da CYTEI?",
  a: "Conectamos você diretamente a integradoras e fornecedores qualificados, com cotações transparentes."
}];
function HomePage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxs("section", { id: "plataforma", className: "relative overflow-hidden bg-primary text-primary-foreground", children: [
      /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Painéis solares e turbinas eólicas ao amanhecer", width: 1920, height: 1080, className: "absolute inset-0 h-full w-full object-cover opacity-30" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-36", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block rounded-full bg-brand/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand", children: "Energia que conecta" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-5 max-w-3xl font-display text-4xl font-bold leading-tight lg:text-6xl", children: [
          "A Gestão completo de ponta a ponta da ",
          /* @__PURE__ */ jsx("span", { className: "text-brand", children: "energia renovável" }),
          " no Brasil."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-lg text-white/85", children: "A CYTEI é uma empresa de tecnologia e serviços para a completa gestão energética — conectando consumidores, integradoras, especialistas, investidores e fornecedores em uma única plataforma." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "https://app.cytei.com.br", target: "_blank", rel: "noreferrer", className: "group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-brand-foreground shadow-lg transition hover:brightness-110", children: [
            "Acesse a Plataforma",
            /* @__PURE__ */ jsx(ArrowRight, { size: 18, className: "transition group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "https://app.calculadora.cytei.com.br", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 font-semibold text-white transition hover:border-brand hover:text-brand", children: "Calcule sua economia" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-primary py-20 text-primary-foreground lg:py-28", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block rounded-full bg-brand/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand", children: "Parceria Estratégica" }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 flex items-center gap-4", children: /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl font-bold lg:text-4xl", children: [
          "CYTEI + ",
          /* @__PURE__ */ jsx("span", { className: "text-brand", children: "Enercoop do Brasil" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 inline-block rounded-xl bg-white px-4 py-2", children: /* @__PURE__ */ jsx("img", { src: "/logo-enercoop.png", alt: "Enercoop do Brasil", className: "h-12 w-auto object-contain" }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg text-white/80", children: "A CYTEI firmou parceria com a Enercoop do Brasil para conectar geração de energia a uma base real de consumidores cooperados — transformando energia disponível em receita." }),
        /* @__PURE__ */ jsx("a", { href: "/ecossistema", className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline", children: "Conheça nosso ecossistema →" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-white p-10 text-center shadow-2xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-display text-6xl font-bold text-primary lg:text-7xl", children: [
          "~80",
          /* @__PURE__ */ jsx("span", { className: "text-brand", children: ".000" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-lg font-semibold text-primary", children: "cooperados esperando energia" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Se você tem energia disponível para ser compensada, essa é a sua oportunidade. Conecte sua geração a uma demanda real de consumo." }),
        /* @__PURE__ */ jsx("a", { href: "https://willianruaswr.wixstudio.com/enercoop-v0", target: "_blank", rel: "noreferrer", className: "mt-6 inline-block rounded-full bg-brand px-8 py-3.5 font-semibold text-brand-foreground shadow-lg transition hover:brightness-110", children: "Fale com a Enercoop do Brasil" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-20 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-brand", children: "Soluções" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-3xl font-bold text-primary lg:text-4xl", children: "Tudo o que sua jornada de energia precisa" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Da geração à compensação, ferramentas pensadas para cada perfil do mercado." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: solucoes.map(({
        icon: Icon,
        title,
        desc
      }) => /* @__PURE__ */ jsxs("div", { className: "group rounded-2xl border bg-card p-7 transition hover:-translate-y-1 hover:border-brand hover:shadow-xl", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-brand transition group-hover:bg-brand group-hover:text-brand-foreground", children: /* @__PURE__ */ jsx(Icon, { size: 22 }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-xl font-semibold text-primary", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: desc })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[var(--surface)] py-20 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-brand", children: "Como funciona" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-3xl font-bold text-primary lg:text-4xl", children: "Em 3 passos simples" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-8 md:grid-cols-3", children: passos.map((p) => /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl bg-card p-8 shadow-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-5xl font-bold text-brand", children: p.n }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-xl font-semibold text-primary", children: p.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.d })
      ] }, p.n)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-20 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-brand", children: "Conheça a CYTEI" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-3xl font-bold text-primary lg:text-4xl", children: "Nossos vídeos" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-8 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-4 text-center font-display text-lg font-semibold text-primary", children: "Institucional CYTEI" }),
          /* @__PURE__ */ jsx("div", { className: "aspect-video overflow-hidden rounded-2xl bg-primary shadow-2xl", children: /* @__PURE__ */ jsx("iframe", { className: "h-full w-full", src: "https://www.youtube.com/embed/pON5ypZLqhk", title: "CYTEI Institucional", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-4 text-center font-display text-lg font-semibold text-primary", children: "Plataforma CYTEI" }),
          /* @__PURE__ */ jsx("div", { className: "aspect-video overflow-hidden rounded-2xl bg-primary shadow-2xl", children: /* @__PURE__ */ jsx("iframe", { className: "h-full w-full", src: "https://www.youtube.com/embed/VIDEO_PLATAFORMA", title: "CYTEI Plataforma", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[var(--surface)] py-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: [
      /* @__PURE__ */ jsx("p", { className: "text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "Parceiros que confiam na CYTEI" }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-2 items-center gap-8 md:grid-cols-4", children: [{
        name: "Bloxs",
        logo: "https://cytei.com.br/wp-content/uploads/2021/04/bloxs-300x116.png"
      }, {
        name: "S2B",
        logo: "https://cytei.com.br/wp-content/uploads/2021/04/s2b-300x169.png"
      }, {
        name: "Valyoot",
        logo: "https://cytei.com.br/wp-content/uploads/2021/04/valyoot-300x150.png"
      }, {
        name: "Thesis",
        logo: "https://cytei.com.br/wp-content/uploads/2021/05/Thesis_-_Logo_01-removebg-preview-300x107.png"
      }].map((p) => /* @__PURE__ */ jsx("div", { className: "flex h-20 items-center justify-center rounded-xl bg-white px-6 shadow-sm", children: /* @__PURE__ */ jsx("img", { src: p.logo, alt: p.name, className: "max-h-12 max-w-full object-contain" }) }, p.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-20 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-brand", children: "FAQ" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-3xl font-bold text-primary lg:text-4xl", children: "Perguntas frequentes" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsx(FAQItem, { ...f }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-primary py-20 text-primary-foreground lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-brand", children: "Fale conosco" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-3xl font-bold lg:text-4xl", children: "Pronto para acelerar sua jornada renovável?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-white/80", children: "Conte com o time CYTEI para encontrar a melhor solução para o seu perfil." })
      ] }),
      /* @__PURE__ */ jsxs("form", { className: "space-y-4 rounded-2xl bg-white p-8 text-foreground shadow-2xl", children: [
        /* @__PURE__ */ jsx("input", { className: "w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand", placeholder: "Nome completo" }),
        /* @__PURE__ */ jsx("input", { className: "w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand", placeholder: "E-mail", type: "email" }),
        /* @__PURE__ */ jsx("input", { className: "w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand", placeholder: "Telefone" }),
        /* @__PURE__ */ jsx("textarea", { rows: 4, className: "w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand", placeholder: "Como podemos ajudar?" }),
        /* @__PURE__ */ jsx("button", { type: "button", className: "w-full rounded-full bg-brand py-3.5 font-semibold text-brand-foreground transition hover:brightness-110", children: "Enviar mensagem" })
      ] })
    ] }) })
  ] });
}
function FAQItem({
  q,
  a
}) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-xl border bg-card", children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => setOpen(!open), className: "flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-primary", children: [
      q,
      /* @__PURE__ */ jsx(ChevronDown, { size: 18, className: `transition ${open ? "rotate-180" : ""}` })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "px-5 pb-4 text-sm text-muted-foreground", children: a })
  ] });
}
export {
  HomePage as component
};
