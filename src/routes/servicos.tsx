import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Sun, MapPin, Users, Building2, Handshake, BarChart3, Lightbulb, Megaphone } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({ meta: [
    { title: "Serviços — CYTEI" },
    { name: "description", content: "Conheça todos os serviços oferecidos pela CYTEI para a gestão energética completa." },
  ] }),
  component: ServicosPage,
});

const servicos = [
  { icon: Sun, t: "Autoconsumo Local", d: "Microgeração e minigeração fotovoltaica para consumo no próprio local — residências, empresas e indústrias." },
  { icon: MapPin, t: "Autoconsumo Remoto", d: "Geração em local diferente do consumo dentro da mesma concessão, com alocação de créditos entre unidades do mesmo titular." },
  { icon: Users, t: "Geração Compartilhada", d: "Reunião de consumidores via consórcio, cooperativa, condomínio ou associação civil para compartilhar uma central geradora." },
  { icon: Building2, t: "EMUC", d: "Empreendimento com Múltiplas Unidades Consumidoras — geração junto à carga em condomínios e loteamentos." },
  { icon: Handshake, t: "Marketplace", d: "Ambiente digital para conexão entre consumidores, integradoras, fornecedores e equipamentos qualificados." },
  { icon: BarChart3, t: "Gestão Energética", d: "Plataforma completa para monitorar geração, compensação, créditos, faturamento e performance da operação." },
  { icon: Lightbulb, t: "Consultoria", d: "Assessoria estratégica para estruturação, enquadramento e viabilidade de projetos de energia renovável." },
  { icon: Megaphone, t: "Anúncios", d: "Espaço de mídia para empresas do setor alcançarem o público certo dentro do ecossistema CYTEI." },
];

function ServicosPage() {
  return (
    <SiteLayout>
      <PageHero title="Nossos Serviços" subtitle="Soluções completas para cada elo da cadeia de energia renovável." />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {servicos.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-brand transition group-hover:bg-brand group-hover:text-brand-foreground">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VÍDEOS */}
      <section className="bg-[var(--surface)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Conheça a CYTEI</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary lg:text-4xl">Nossos vídeos</h2>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-center font-display text-lg font-semibold text-primary">Institucional CYTEI</h3>
              <div className="aspect-video overflow-hidden rounded-2xl bg-primary shadow-2xl">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/pON5ypZLqhk"
                  title="CYTEI Institucional"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-center font-display text-lg font-semibold text-primary">Plataforma CYTEI</h3>
              <div className="aspect-video overflow-hidden rounded-2xl bg-primary shadow-2xl">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/VIDEO_PLATAFORMA"
                  title="CYTEI Plataforma"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
