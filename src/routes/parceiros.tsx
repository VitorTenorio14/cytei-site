import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/parceiros")({
  head: () => ({ meta: [
    { title: "Parceiros — CYTEI" },
    { name: "description", content: "Empresas parceiras do ecossistema CYTEI." },
  ] }),
  component: ParceirosPage,
});

const parceiros = [
  { name: "Bloxs", logo: "https://cytei.com.br/wp-content/uploads/2021/04/bloxs-300x116.png" },
  { name: "S2B", logo: "https://cytei.com.br/wp-content/uploads/2021/04/s2b-300x169.png" },
  { name: "Valyoot", logo: "https://cytei.com.br/wp-content/uploads/2021/04/valyoot-300x150.png" },
  { name: "Thesis", logo: "https://cytei.com.br/wp-content/uploads/2021/05/Thesis_-_Logo_01-removebg-preview-300x107.png" },
  { name: "Parceiro 5", logo: "https://cytei.com.br/wp-content/uploads/2025/02/WhatsApp_Image_2024-12-11_at_16.16.09__1_-removebg-preview-300x140.png" },
  { name: "SB Solar", logo: "https://cytei.com.br/wp-content/uploads/2025/12/SB_SOLAR_LOGO_FINAL_VERT_TRANSP-300x152.png" },
  { name: "Parceiro 7", logo: "https://cytei.com.br/wp-content/uploads/2025/12/Captura_de_tela_2025-09-04_094838-removebg-preview-300x121.png" },
  { name: "Parceiro 8", logo: "https://cytei.com.br/wp-content/uploads/2025/12/Captura_de_tela_2025-09-04_095204-removebg-preview.png" },
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
