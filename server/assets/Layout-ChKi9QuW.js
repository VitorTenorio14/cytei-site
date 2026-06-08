import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { X, Menu, Instagram, Linkedin, Facebook, Mail, MessageCircle, MapPin } from "lucide-react";
const nav = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/ecossistema", label: "Ecossistema" },
  { to: "/noticias", label: "Notícias" },
  { to: "/parceiros", label: "Parceiros" },
  { to: "/contato", label: "Contato" }
];
function Header() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 bg-primary text-primary-foreground shadow-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/logo-cytei.png",
          alt: "CYTEI",
          className: "h-12 w-auto object-contain brightness-0 invert"
        }
      ) }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden items-center gap-7 lg:flex", children: [
        nav.map((i) => /* @__PURE__ */ jsx(
          Link,
          {
            to: i.to,
            className: "text-sm font-medium text-white/85 transition hover:text-white",
            activeProps: { className: "text-white font-semibold" },
            activeOptions: { exact: i.to === "/" },
            children: i.label
          },
          i.to
        )),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://app.cytei.com.br",
            target: "_blank",
            rel: "noreferrer",
            className: "rounded-full bg-brand px-5 py-2 text-sm font-semibold text-brand-foreground shadow-md transition hover:brightness-110",
            children: "Plataforma"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "lg:hidden",
          onClick: () => setOpen(!open),
          "aria-label": "Menu",
          children: open ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
        }
      )
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "border-t border-white/10 bg-primary px-4 pb-6 pt-2 lg:hidden", children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col gap-1", children: [
      nav.map((i) => /* @__PURE__ */ jsx(
        Link,
        {
          to: i.to,
          onClick: () => setOpen(false),
          className: "rounded-md px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/10",
          children: i.label
        },
        i.to
      )),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://app.cytei.com.br",
          target: "_blank",
          rel: "noreferrer",
          onClick: () => setOpen(false),
          className: "mt-3 rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-brand-foreground",
          children: "Acesse a Plataforma"
        }
      )
    ] }) })
  ] });
}
const logoCytei = "/assets/logo-cytei-CTADB6Ep.png";
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-primary text-primary-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-4 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: logoCytei,
            alt: "CYTEI",
            className: "h-14 w-auto object-contain brightness-0 invert"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-white/75", children: "A CYTEI é uma empresa de tecnologia e serviços para a completa gestão energética." }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 flex gap-3", children: [
          { icon: Instagram, href: "https://www.instagram.com/cytei_oficial/" },
          { icon: Linkedin, href: "https://www.linkedin.com/company/cytei/" },
          { icon: Facebook, href: "https://www.facebook.com/cyteitecnologia/", label: "Facebook" }
        ].map(({ icon: Icon, href }, i) => /* @__PURE__ */ jsx(
          "a",
          {
            href,
            target: "_blank",
            rel: "noreferrer",
            className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand hover:text-brand-foreground",
            children: /* @__PURE__ */ jsx(Icon, { size: 18 })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-semibold uppercase tracking-wider text-brand", children: "Navegação" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-white/80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-brand", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/sobre", className: "hover:text-brand", children: "Sobre Nós" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ecossistema", className: "hover:text-brand", children: "Ecossistema" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/noticias", className: "hover:text-brand", children: "Notícias" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-semibold uppercase tracking-wider text-brand", children: "Institucional" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-white/80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/parceiros", className: "hover:text-brand", children: "Parceiros" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contato", className: "hover:text-brand", children: "Contato" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://app.cytei.com.br", target: "_blank", rel: "noreferrer", className: "hover:text-brand", children: "Plataforma" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-brand", children: "Política de Privacidade" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-brand", children: "Termos de Uso" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-semibold uppercase tracking-wider text-brand", children: "Contato" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { size: 16, className: "mt-0.5 shrink-0 text-brand" }),
            /* @__PURE__ */ jsx("span", { children: "contato@cytei.com.br" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(MessageCircle, { size: 16, className: "mt-0.5 shrink-0 text-brand" }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/556198221316", target: "_blank", rel: "noreferrer", className: "hover:text-brand", children: "+55 61 9822-11316" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 16, className: "mt-0.5 shrink-0 text-brand" }),
            /* @__PURE__ */ jsx("span", { children: "SRTVS Centro Empresarial Brasília, Bloco A Sala 615 — Asa Sul, Brasília - DF, 70340-907" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/60 lg:px-8", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " CYTEI — Todos os direitos reservados."
    ] }) })
  ] });
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function PageHero({ title, subtitle }) {
  return /* @__PURE__ */ jsx("section", { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl font-bold leading-tight lg:text-5xl", children: title }),
    subtitle && /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-lg text-white/80", children: subtitle }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 h-1 w-20 rounded-full bg-brand" })
  ] }) });
}
export {
  PageHero as P,
  SiteLayout as S
};
