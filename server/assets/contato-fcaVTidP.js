import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout, P as PageHero } from "./Layout-ChKi9QuW.js";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import "@tanstack/react-router";
import "react";
const canais = [{
  icon: Mail,
  label: "E-mail",
  valor: "contato@cytei.com.br",
  href: "mailto:contato@cytei.com.br"
}, {
  icon: Phone,
  label: "Telefone / WhatsApp",
  valor: "+55 61 9822-11316",
  href: "https://wa.me/556198221316"
}, {
  icon: MapPin,
  label: "Endereço",
  valor: "SRTVS Centro Empresarial Brasília, Bloco A Sala 615 — Asa Sul, Brasília - DF, 70340-907",
  href: "https://maps.google.com/?q=SRTVS+Centro+Empresarial+Brasilia+Bloco+A+Sala+615"
}];
const redesSociais = [{
  icon: Instagram,
  href: "https://www.instagram.com/cytei_oficial/",
  label: "Instagram"
}, {
  icon: Facebook,
  href: "https://www.facebook.com/cyteitecnologia/",
  label: "Facebook"
}, {
  icon: Linkedin,
  href: "https://www.linkedin.com/company/cytei/",
  label: "LinkedIn"
}];
function ContatoPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHero, { title: "Vamos conversar?", subtitle: "Estamos prontos para ajudar você a dar o próximo passo na energia renovável." }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-primary", children: "Canais de atendimento" }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-5", children: canais.map(({
          icon: Icon,
          label,
          valor,
          href
        }) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-brand", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-primary", children: label }),
            /* @__PURE__ */ jsx("a", { href, target: href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", className: "text-muted-foreground transition hover:text-brand", children: valor })
          ] })
        ] }, label)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "Redes sociais" }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 flex gap-3", children: redesSociais.map(({
            icon: Icon,
            href,
            label
          }) => /* @__PURE__ */ jsx("a", { href, target: "_blank", rel: "noreferrer", "aria-label": label, className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition hover:bg-brand", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }, label)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("form", { className: "space-y-4 rounded-2xl border bg-card p-8 shadow-sm", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-primary", children: "Envie sua mensagem" }),
        /* @__PURE__ */ jsx("input", { className: "w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand", placeholder: "Nome completo" }),
        /* @__PURE__ */ jsx("input", { className: "w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand", placeholder: "E-mail", type: "email" }),
        /* @__PURE__ */ jsx("input", { className: "w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand", placeholder: "Telefone" }),
        /* @__PURE__ */ jsxs("select", { className: "w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand", children: [
          /* @__PURE__ */ jsx("option", { children: "Sou consumidor" }),
          /* @__PURE__ */ jsx("option", { children: "Sou integradora" }),
          /* @__PURE__ */ jsx("option", { children: "Sou investidor" }),
          /* @__PURE__ */ jsx("option", { children: "Sou fornecedor" }),
          /* @__PURE__ */ jsx("option", { children: "Outro" })
        ] }),
        /* @__PURE__ */ jsx("textarea", { rows: 5, className: "w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand", placeholder: "Como podemos ajudar?" }),
        /* @__PURE__ */ jsx("button", { type: "button", className: "w-full rounded-full bg-brand py-3.5 font-semibold text-brand-foreground transition hover:brightness-110", children: "Enviar mensagem" })
      ] })
    ] }) })
  ] });
}
export {
  ContatoPage as component
};
