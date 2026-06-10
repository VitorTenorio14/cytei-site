import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Mail, Phone, MessageCircle, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: [
    { title: "Contato — CYTEI" },
    { name: "description", content: "Entre em contato com a equipe CYTEI." },
  ] }),
  component: ContatoPage,
});

const canais = [
  {
    icon: Mail,
    label: "E-mail",
    valor: "contato@cytei.com.br",
    href: "mailto:contato@cytei.com.br",
  },
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    valor: "+55 61 99822-1316",
    href: "https://wa.me/556198221316",
  },
  {
    icon: MapPin,
    label: "Endereço",
    valor: "SRTVS Centro Empresarial Brasília, Bloco A Sala 615 — Asa Sul, Brasília - DF, 70340-907",
    href: "https://maps.google.com/?q=SRTVS+Centro+Empresarial+Brasilia+Bloco+A+Sala+615",
  },
];

const redesSociais = [
  { icon: Instagram, href: "https://www.instagram.com/cytei_oficial/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/cyteitecnologia/", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/cytei/", label: "LinkedIn" },
];

function ContatoPage() {
  return (
    <SiteLayout>
      <PageHero title="Vamos conversar?" subtitle="Estamos prontos para ajudar você a dar o próximo passo na energia renovável." />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-primary">Canais de atendimento</h2>
            <div className="mt-8 space-y-5">
              {canais.map(({ icon: Icon, label, valor, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-brand">
                    <Icon size={20} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-sm font-semibold text-primary">{label}</div>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-muted-foreground transition hover:text-brand"
                    >
                      {valor}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Redes sociais</div>
              <div className="mt-4 flex gap-3">
                {redesSociais.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition hover:bg-brand"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="space-y-4 rounded-2xl border bg-card p-8 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-primary">Envie sua mensagem</h3>
            <input className="w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand" placeholder="Nome completo" />
            <input className="w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand" placeholder="E-mail" type="email" />
            <input className="w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand" placeholder="Telefone" />
            <select className="w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand">
              <option>Sou consumidor</option>
              <option>Sou integradora</option>
              <option>Sou investidor</option>
              <option>Sou fornecedor</option>
              <option>Outro</option>
            </select>
            <textarea rows={5} className="w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand" placeholder="Como podemos ajudar?" />
            <button type="button" className="w-full rounded-full bg-brand py-3.5 font-semibold text-brand-foreground transition hover:brightness-110">
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
