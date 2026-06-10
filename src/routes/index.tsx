import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/hero-energy.jpg";
import { ArrowRight, BarChart3, Wrench, Users, Handshake, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CYTEI — Plataforma Brasileira de Energia Renovável" },
      { name: "description", content: "A CYTEI é uma empresa de tecnologia e serviços para a completa gestão energética." },
    ],
  }),
  component: HomePage,
});

const solucoes = [
  { icon: BarChart3, title: "Gestão Energética", desc: "Monitore geração, compensação, créditos e faturamento de toda a sua operação em tempo real." },
  { icon: Wrench, title: "Serviços", desc: "Gestão e suporte técnico para cada etapa do seu projeto de energia." },
  { icon: Users, title: "Leads Qualificados", desc: "Conecta consumidores e oportunidades reais, segmentados por perfil e demanda energética." },
  { icon: Handshake, title: "Marketplace", desc: "Ambiente digital para conexão entre consumidores, integradoras, fornecedores e equipamentos qualificados." },
];

const passos = [
  { n: "01", t: "Cadastre-se", d: "Crie seu perfil gratuitamente como consumidor, integradora, investidor ou fornecedor." },
  { n: "02", t: "Conecte-se", d: "Acesse oportunidades, parceiros e serviços direcionados ao seu perfil." },
  { n: "03", t: "Energize", d: "Gestão e compensação de energia, acompanhe tudo em um único painel inteligente." },
];

const faqs = [
  { q: "O que é energia renovável?", a: "É energia gerada a partir de fontes naturais inesgotáveis como sol, vento, água e biomassa." },
  { q: "Quanto posso economizar com energia solar?", a: "A economia varia entre 80% e 95% da conta de luz, dependendo do consumo e do sistema instalado." },
  { q: "Preciso ter telhado próprio?", a: "Não. Você pode aderir a uma usina por assinatura ou cooperativa e receber créditos na sua conta." },
  { q: "Como funciona o marketplace da CYTEI?", a: "Conectamos você diretamente a integradoras e fornecedores qualificados, com cotações transparentes." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section id="plataforma" className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImg}
          alt="Painéis solares e turbinas eólicas ao amanhecer"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-36">
          <span className="inline-block rounded-full bg-brand/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            Energia que conecta
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight lg:text-6xl">
            A Gestão completo de ponta a ponta da <span className="text-brand">energia renovável</span> no Brasil.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            A CYTEI é uma empresa de tecnologia e serviços para a completa gestão energética — conectando consumidores, integradoras, especialistas, investidores e fornecedores em uma única plataforma.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://app.cytei.com.br" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-brand-foreground shadow-lg transition hover:brightness-110">
              Acesse a Plataforma
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a href="https://app.calculadora.cytei.com.br" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 font-semibold text-white transition hover:border-brand hover:text-brand">
              Calcule sua economia
            </a>
          </div>
        </div>
      </section>


      {/* PARCERIA ENERCOOP */}
      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-brand/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
                Parceria Estratégica
              </span>
              <div className="mt-5 flex items-center gap-4">
                <h2 className="font-display text-3xl font-bold lg:text-4xl">
                  CYTEI + <span className="text-brand">Enercoop do Brasil</span>
                </h2>
              </div>
              <div className="mt-4 inline-block rounded-xl bg-white px-4 py-2">
                <img src="/logo-enercoop.png" alt="Enercoop do Brasil" className="h-12 w-auto object-contain" />
              </div>
              <p className="mt-5 text-lg text-white/80">
                A CYTEI firmou parceria com a Enercoop do Brasil para conectar geração de energia a uma base real de consumidores cooperados — transformando energia disponível em receita.
              </p>
              <a
                href="/ecossistema"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
              >
                Conheça nosso ecossistema →
              </a>
            </div>

            {/* CARD 80 MIL COOPERADOS */}
            <div className="rounded-2xl bg-white p-10 text-center shadow-2xl">
              <div className="font-display text-6xl font-bold text-primary lg:text-7xl">
                <span className="text-brand">~80.000</span>
              </div>
              <p className="mt-3 text-lg font-semibold text-primary">cooperados esperando energia</p>
              <p className="mt-4 text-sm text-muted-foreground">
                Se você tem energia disponível para ser compensada, essa é a sua oportunidade. Conecte sua geração a uma demanda real de consumo.
              </p>
              <a
                href="https://willianruaswr.wixstudio.com/enercoop-v0"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-full bg-brand px-8 py-3.5 font-semibold text-brand-foreground shadow-lg transition hover:brightness-110"
              >
                Fale com a Enercoop do Brasil
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Soluções</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary lg:text-4xl">
              Tudo o que sua jornada de energia precisa
            </h2>
            <p className="mt-3 text-muted-foreground">
              Da geração à compensação, ferramentas pensadas para cada perfil do mercado.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solucoes.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border bg-card p-7 transition hover:-translate-y-1 hover:border-brand hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-brand transition group-hover:bg-brand group-hover:text-brand-foreground">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-[var(--surface)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Como funciona</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary lg:text-4xl">Em 3 passos simples</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {passos.map((p) => (
              <div key={p.n} className="relative rounded-2xl bg-card p-8 shadow-sm">
                <div className="font-display text-5xl font-bold text-brand">{p.n}</div>
                <h3 className="mt-4 font-display text-xl font-semibold text-primary">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VÍDEOS */}
      <section className="bg-background py-20 lg:py-28">
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
                      src="https://www.youtube.com/embed/bF25UkRnB_4?rel=0"
                      title="CYTEI Plataforma"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARCEIROS */}
      <section className="bg-[var(--surface)] py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Parceiros que confiam na CYTEI
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-8 md:grid-cols-4">
            {[
              { name: "Bloxs", logo: "https://cytei.com.br/wp-content/uploads/2021/04/bloxs-300x116.png" },
              { name: "S2B", logo: "https://cytei.com.br/wp-content/uploads/2021/04/s2b-300x169.png" },
              { name: "Valyoot", logo: "https://cytei.com.br/wp-content/uploads/2021/04/valyoot-300x150.png" },
              { name: "Thesis", logo: "https://cytei.com.br/wp-content/uploads/2021/05/Thesis_-_Logo_01-removebg-preview-300x107.png" },
            ].map((p) => (
              <div key={p.name} className="flex h-20 items-center justify-center rounded-xl bg-white px-6 shadow-sm">
                <img src={p.logo} alt={p.name} className="max-h-12 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">FAQ</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary lg:text-4xl">Perguntas frequentes</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => <FAQItem key={i} {...f} />)}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Fale conosco</span>
            <h2 className="mt-2 font-display text-3xl font-bold lg:text-4xl">Pronto para acelerar sua jornada renovável?</h2>
            <p className="mt-4 text-white/80">
              Conte com o time CYTEI para encontrar a melhor solução para o seu perfil.
            </p>
          </div>
          <form className="space-y-4 rounded-2xl bg-white p-8 text-foreground shadow-2xl">
            <input className="w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand" placeholder="Nome completo" />
            <input className="w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand" placeholder="E-mail" type="email" />
            <input className="w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand" placeholder="Telefone" />
            <textarea rows={4} className="w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:border-brand" placeholder="Como podemos ajudar?" />
            <button type="button" className="w-full rounded-full bg-brand py-3.5 font-semibold text-brand-foreground transition hover:brightness-110">
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-primary">
        {q}
        <ChevronDown size={18} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-4 text-sm text-muted-foreground">{a}</div>}
    </div>
  );
}
