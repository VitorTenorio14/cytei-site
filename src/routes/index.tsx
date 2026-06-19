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
  { n: "01", t: "Cadastre-se", d: "Crie seu perfil gratuitamente como associação, cooperativa, consumidor, integradora ou investidor." },
  { n: "02", t: "Conecte-se", d: "Acesse oportunidades, parceiros, serviços e soluções sob medida direcionados ao seu perfil." },
  { n: "03", t: "Energize", d: "Gestão de energia, acompanhe tudo em um único painel inteligente." },
];

const faqs = [
  { q: "O que é energia renovável?", a: "É energia gerada a partir de fontes naturais inesgotáveis como sol, vento, água e biomassa." },
  { q: "Quanto posso economizar com energia solar?", a: "A economia varia entre 80% e 95% da conta de luz, dependendo do consumo e do sistema instalado." },
  { q: "Preciso ter telhado próprio?", a: "Não. Você pode aderir a uma usina por assinatura ou cooperativa e receber créditos na sua conta." },
  { q: "Como funciona o marketplace da CYTEI?", a: "Conectamos você diretamente a integradoras e fornecedores qualificados, com cotações transparentes." },
];

function BotaoEnercoop({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://app.calculadora.cytei.com.br/"
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-2.5 rounded-full border-2 border-white bg-brand px-7 py-3.5 font-semibold text-white shadow-lg transition hover:brightness-110 ${className}`}
    >
      {/* Lâmpada com pulso verde/vermelho */}
      <span className="relative flex h-5 w-5 items-center justify-center">
        <span
          className="absolute inset-0 rounded-full opacity-40"
          style={{ animation: "lampGlowGR 2s ease-in-out infinite", background: "currentColor" }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative z-10 h-4 w-4"
          style={{ animation: "lampColorGR 2s ease-in-out infinite" }}
        >
          <path d="M12 2a7 7 0 0 1 5.292 11.584c-.668.8-1.292 1.56-1.292 2.416v.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V16c0-.856-.624-1.616-1.292-2.416A7 7 0 0 1 12 2zm2.5 15.5h-5V19h5v-1.5zm-5 2h5v.5a2.5 2.5 0 0 1-5 0V19.5z" />
        </svg>
      </span>

      Calcule sua economia com a Enercoop

      <style>{`
        @keyframes lampColorGR {
          0%   { color: #22c55e; filter: drop-shadow(0 0 6px #22c55e); }
          50%  { color: #ef4444; filter: drop-shadow(0 0 6px #ef4444); }
          100% { color: #22c55e; filter: drop-shadow(0 0 6px #22c55e); }
        }
        @keyframes lampGlowGR {
          0%   { background: #22c55e; transform: scale(1);   opacity: 0.35; }
          50%  { background: #ef4444; transform: scale(1.3); opacity: 0.25; }
          100% { background: #22c55e; transform: scale(1);   opacity: 0.35; }
        }
      `}</style>
    </a>
  );
}

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
            A Gestão completa da <span className="text-brand">energia renovável</span> no Brasil, de ponta a ponta.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            A CYTEI é uma empresa de tecnologia e serviços para a completa gestão energética — conectando consumidores, integradoras, especialistas, investidores usineiros e fornecedores em uma única plataforma.
          </p>

          <div className="mt-8 flex flex-wrap items-end gap-4 lg:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://app.cytei.com.br"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-white bg-[#222F66] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:brightness-110"
              >
                Acesse a Plataforma
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </a>

              <a
                href="https://proposta.cytei.com.br"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-white bg-[#222F66] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:brightness-110"
              >
                <span className="relative flex h-6 w-6 items-center justify-center">
                  {/* Brilho pulsante atrás da lâmpada */}
                  <span
                    className="absolute inset-0 animate-ping rounded-full opacity-40"
                    style={{ animation: "lampGlow 2s ease-in-out infinite", background: "currentColor" }}
                  />
                  {/* Ícone lâmpada SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="relative z-10 h-5 w-5"
                    style={{ animation: "lampColor 3s ease-in-out infinite" }}
                  >
                    <path d="M12 2a7 7 0 0 1 5.292 11.584c-.668.8-1.292 1.56-1.292 2.416v.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V16c0-.856-.624-1.616-1.292-2.416A7 7 0 0 1 12 2zm2.5 15.5h-5V19h5v-1.5zm-5 2h5v.5a2.5 2.5 0 0 1-5 0V19.5z" />
                  </svg>
                </span>

                Gerar economia

                <style>{`
                  @keyframes lampColor {
                    0%   { color: #22c55e; filter: drop-shadow(0 0 6px #22c55e); }
                    33%  { color: #eab308; filter: drop-shadow(0 0 6px #eab308); }
                    66%  { color: #ef4444; filter: drop-shadow(0 0 6px #ef4444); }
                    100% { color: #22c55e; filter: drop-shadow(0 0 6px #22c55e); }
                  }
                  @keyframes lampGlow {
                    0%   { background: #22c55e; transform: scale(1);   opacity: 0.3; }
                    33%  { background: #eab308; transform: scale(1.4); opacity: 0.2; }
                    66%  { background: #ef4444; transform: scale(1.2); opacity: 0.25; }
                    100% { background: #22c55e; transform: scale(1);   opacity: 0.3; }
                  }
                `}</style>
              </a>
            </div>

            {/* Espaçador — empurra o bloco Enercoop para a direita em telas largas */}
            <div className="hidden flex-1 lg:block" />

            {/* Logo + botão na mesma coluna — logo sempre centrada em relação ao botão */}
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-xl bg-white px-6 py-4 shadow-md lg:px-7 lg:py-5">
                <img
                  src="/logo-enercoop.png"
                  alt="Enercoop do Brasil"
                  className="h-10 w-auto object-contain lg:h-16"
                />
              </div>
              <BotaoEnercoop />
            </div>
          </div>
        </div>
      </section>

      {/* PARCERIA ENERCOOP */}
      <section className="bg-gradient-to-br from-[#243872] via-[#1A4A6A] to-[#0E6B5E] py-20 text-primary-foreground lg:py-28">
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
                A CYTEI é parceira da Enercoop do Brasil para conectar geração de energia a uma base real de cooperados — transformando energia disponível em receita.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="https://enercoop.com.br/"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-brand tracking-wider"
                >
                  Conheça a Enercoop do Brasil →
                </a>
              </div>

              <div className="mt-6">
                <BotaoEnercoop />
              </div>
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
                href="https://enercoop.com.br/"
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
    </SiteLayout>
  );
}
