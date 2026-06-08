import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/assets/styles-CsRP04Wr.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CYTEI — Plataforma de Energia Renovável" },
      { name: "description", content: "Ecossistema brasileiro de energia renovável que conecta consumidores, fornecedores, investidores, especialistas e integradoras." },
      { property: "og:title", content: "CYTEI — Plataforma de Energia Renovável" },
      { property: "og:description", content: "Conectando todo o mercado de energia renovável do Brasil." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$6 = () => import("./sobre-cuHxxQUz.js");
const Route$6 = createFileRoute("/sobre")({
  head: () => ({
    meta: [{
      title: "Sobre Nós — CYTEI"
    }, {
      name: "description",
      content: "Conheça a missão, valores e história da CYTEI."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./servicos-CfeFmbNX.js");
const Route$5 = createFileRoute("/servicos")({
  head: () => ({
    meta: [{
      title: "Serviços — CYTEI"
    }, {
      name: "description",
      content: "Conheça todos os serviços oferecidos pela CYTEI para a gestão energética completa."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./parceiros-DWaO9JPZ.js");
const Route$4 = createFileRoute("/parceiros")({
  head: () => ({
    meta: [{
      title: "Parceiros — CYTEI"
    }, {
      name: "description",
      content: "Empresas parceiras do ecossistema CYTEI."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./noticias-CUEA7Bzx.js");
const Route$3 = createFileRoute("/noticias")({
  head: () => ({
    meta: [{
      title: "Notícias — CYTEI"
    }, {
      name: "description",
      content: "Últimas notícias sobre energia renovável e a CYTEI."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./ecossistema-CNUeOE9i.js");
const Route$2 = createFileRoute("/ecossistema")({
  head: () => ({
    meta: [{
      title: "Ecossistema — CYTEI"
    }, {
      name: "description",
      content: "Conheça as empresas que fazem parte do ecossistema CYTEI — cooperativa, integradora, seguro solar e fornecedor."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./contato-fcaVTidP.js");
const Route$1 = createFileRoute("/contato")({
  head: () => ({
    meta: [{
      title: "Contato — CYTEI"
    }, {
      name: "description",
      content: "Entre em contato com a equipe CYTEI."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-C5mVyT5J.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "CYTEI — Plataforma Brasileira de Energia Renovável"
    }, {
      name: "description",
      content: "A CYTEI é uma empresa de tecnologia e serviços para a completa gestão energética."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SobreRoute = Route$6.update({
  id: "/sobre",
  path: "/sobre",
  getParentRoute: () => Route$7
});
const ServicosRoute = Route$5.update({
  id: "/servicos",
  path: "/servicos",
  getParentRoute: () => Route$7
});
const ParceirosRoute = Route$4.update({
  id: "/parceiros",
  path: "/parceiros",
  getParentRoute: () => Route$7
});
const NoticiasRoute = Route$3.update({
  id: "/noticias",
  path: "/noticias",
  getParentRoute: () => Route$7
});
const EcossistemaRoute = Route$2.update({
  id: "/ecossistema",
  path: "/ecossistema",
  getParentRoute: () => Route$7
});
const ContatoRoute = Route$1.update({
  id: "/contato",
  path: "/contato",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  ContatoRoute,
  EcossistemaRoute,
  NoticiasRoute,
  ParceirosRoute,
  ServicosRoute,
  SobreRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
