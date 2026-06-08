import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout, P as PageHero } from "./Layout-ChKi9QuW.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
const parceiros = [{
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
}, {
  name: "Parceiro 5",
  logo: "https://cytei.com.br/wp-content/uploads/2025/02/WhatsApp_Image_2024-12-11_at_16.16.09__1_-removebg-preview-300x140.png"
}, {
  name: "SB Solar",
  logo: "https://cytei.com.br/wp-content/uploads/2025/12/SB_SOLAR_LOGO_FINAL_VERT_TRANSP-300x152.png"
}, {
  name: "Parceiro 7",
  logo: "https://cytei.com.br/wp-content/uploads/2025/12/Captura_de_tela_2025-09-04_094838-removebg-preview-300x121.png"
}, {
  name: "Parceiro 8",
  logo: "https://cytei.com.br/wp-content/uploads/2025/12/Captura_de_tela_2025-09-04_095204-removebg-preview.png"
}];
function ParceirosPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHero, { title: "Nossos Parceiros", subtitle: "Empresas que constroem o futuro da energia renovável ao nosso lado." }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4", children: parceiros.map((p) => /* @__PURE__ */ jsx("div", { className: "flex h-28 items-center justify-center rounded-2xl border bg-card px-6 transition hover:border-brand hover:shadow-md", children: /* @__PURE__ */ jsx("img", { src: p.logo, alt: p.name, className: "max-h-16 max-w-full object-contain" }) }, p.name)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 rounded-2xl bg-primary p-10 text-center text-primary-foreground", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold lg:text-3xl", children: "Quer fazer parte?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-white/80", children: "Junte-se ao maior ecossistema de energia renovável do Brasil." }),
        /* @__PURE__ */ jsx("a", { href: "/contato", className: "mt-6 inline-block rounded-full bg-brand px-7 py-3 font-semibold text-brand-foreground transition hover:brightness-110", children: "Seja parceiro" })
      ] })
    ] }) })
  ] });
}
export {
  ParceirosPage as component
};
