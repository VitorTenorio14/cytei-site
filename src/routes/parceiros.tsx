import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/parceiros")({
  head: () => ({
    meta: [
      { title: "Parceiros — CYTEI" },
      { name: "description", content: "Empresas parceiras do ecossistema CYTEI." },
    ],
  }),
  component: ParceirosPage,
});

// Base URL das imagens hospedadas no GitHub
const BASE = "https://raw.githubusercontent.com/CYTEI/cytei-site/main/public/parceiros";

const parceiros = [
  {
    name: "Bloxs",
    logo: `${BASE}/bloxs.png`,
  },
  {
    name: "S2B — Solutions to Business",
    logo: `${BASE}/s2b.png`,
  },
  {
    name: "Valyoot Energia",
    logo: `${BASE}/valyoot.png`,
  },
  {
    name: "Thesis Business Solutions",
    logo: `${BASE}/Thesis_-_Logo_01-removebg-preview.png`,
  },
  {
    name: "JSN Energia",
    logo: `${BASE}/WhatsApp_Image_2024-12-11_at_16_16_09__1_-removebg-preview__1_.png`,
  },
  {
    name: "SB Solar",
    logo: `${BASE}/SB_SOLAR_LOGO_FINAL_VERT_TRANSP__1_.png`,
  },
  {
    name: "JSN Energia",
    logo: `${BASE}/Captura_de_tela_2025-09-04_094838-removebg-preview__2_.png`,
  },
  {
    name: "Sinergia Solar",
    logo: `${BASE}/Captura_de_tela_2025-09-04_095204-removebg-preview__2_.png`,
  },
];

function ParceirosPage() {
  return (
    <SiteLayout>
      <PageHero title="Nossos Parceiros" subtitle="Empresas que constroem o futuro da energia renovável ao nosso lado." />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {parceiros.map((p) => (
              <div key={p.name} className="flex h-28 items-center justify-center rounded-2xl border bg-card px-6 transition hover:border-brand hover:shadow-md">
                <img src={p.logo} alt={p.name} className="max-h-16 max-w-full object-contain" />
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-primary p-10 text-center text-primary-foreground">
            <h2 className="font-display text-2xl font-bold lg:text-3xl">Quer fazer parte?</h2>
            <p className="mt-2 text-white/80">Junte-se ao maior ecossistema de energia renovável do Brasil.</p>
            <a href="/contato" className="mt-6 inline-block rounded-full bg-brand px-7 py-3 font-semibold text-brand-foreground transition hover:brightness-110">
              Seja parceiro
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
