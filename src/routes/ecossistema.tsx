import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ExternalLink, Building2, Shield, Truck, Users } from "lucide-react";

export const Route = createFileRoute("/ecossistema")({
  head: () => ({ meta: [
    { title: "Ecossistema — CYTEI" },
    { name: "description", content: "Conheça as empresas que fazem parte do ecossistema CYTEI — cooperativa, integradora, seguro solar e fornecedor." },
  ] }),
  component: EcossistemaPage,
});

const empresas = [
  {
    categoria: "Cooperativa",
    icon: Users,
    name: "Enercoop do Brasil",
    desc: "Cooperativa de energia renovável com modelo colaborativo para geração compartilhada. Mais de 80 mil cooperados aguardando energia compensada — um mercado pronto para quem tem energia disponível.",
    url: "https://willianruaswr.wixstudio.com/enercoop-v0",
    color: "bg-emerald-500",
  },
  {
    categoria: "Empresa Integradora",
    icon: Building2,
    name: "JSN Energia",
    desc: "Soluções completas em energia renovável — projetos, instalação e manutenção de usinas solares, auditoria de contas energéticas e armazenamento BESS.",
    url: "https://www.jsnenergia.com.br/",
    color: "bg-blue-600",
  },
  {
    categoria: "Seguro Solar",
    icon: Shield,
    name: "Sinergia Solar",
    desc: "Energia Full Service — proteção e seguro para usinas solares fotovoltaicas, atendendo o segmento de energia 360° com economia e praticidade.",
    url: "https://www.sinergiaempresarial.com.br/",
    color: "bg-amber-500",
  },
  {
    categoria: "Fornecedor",
    icon: Truck,
    name: "SB Solar",
    desc: "Distribuidora de energia solar — módulos, inversores, kits completos, sistemas híbridos e baterias para integradores, geradores e consumidores.",
    url: "https://www.sbsolar.com.br/",
    color: "bg-orange-500",
  },
];

function EcossistemaPage() {
  return (
    <SiteLayout>
      <PageHero title="Ecossistema CYTEI" subtitle="Empresas e soluções que constroem o futuro da energia renovável no Brasil." />

      {/* GRID DE EMPRESAS — ESTILO JSN */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Soluções do Ecossistema</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary lg:text-4xl">
              Energia como negócio: parceiros para cada necessidade
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {empresas.map((e) => (
              <a
                key={e.name}
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:border-brand hover:shadow-2xl"
              >
                {/* Barra de categoria */}
                <div className={`${e.color} px-6 py-3`}>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <e.icon size={16} />
                    {e.categoria}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-2xl font-bold text-primary transition group-hover:text-brand">
                    {e.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Conhecer <ExternalLink size={14} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA ENERCOOP */}
      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <span className="inline-block rounded-full bg-brand/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            Oportunidade
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold lg:text-5xl">
            ~80.000 cooperados esperando <span className="text-brand">energia</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            A Enercoop do Brasil possui uma base com aproximadamente 80 mil cooperados aguardando energia para ser compensada. Se você tem energia disponível, essa é a sua oportunidade de conectar geração a consumo real.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://willianruaswr.wixstudio.com/enercoop-v0"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-brand-foreground shadow-lg transition hover:brightness-110"
            >
              Fale com a Enercoop do Brasil
            </a>
            <a
              href="/contato"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white transition hover:border-brand hover:text-brand"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
