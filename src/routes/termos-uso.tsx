import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/termos-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — CYTEI" },
      { name: "description", content: "Termos e condições de uso dos produtos e serviços digitais da CYTEI." },
    ],
  }),
  component: TermosUsoPage,
});

function TermosUsoPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Termos de Uso"
        subtitle="Leia com atenção os termos e condições que regem o uso dos produtos e serviços digitais da CYTEI."
      />

      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="prose prose-slate max-w-none">

            <Aviso />

            <Secao numero="1" titulo="Aceitação dos termos">
              <p>
                Estes Termos de Uso regulam a utilização dos produtos digitais operados pela{" "}
                <strong>CORREA E ASSOCIADOS TECNOLOGIA EM ENERGIA INOVADORA SUSTENTAVEL LTDA</strong>,
                inscrita no CNPJ sob o nº <strong>35.699.569/0001-71</strong>, com sede em{" "}
                <strong>SRTVS 701, Conjunto D, Bloco A, Sala 615, Brasília/DF</strong> ("CYTEI",
                "nós"), incluindo:
              </p>
              <ul>
                <li>Site institucional — cytei.com.br</li>
                <li>Calculadora de Economia de Energia — app.calculadora.cytei.com.br</li>
                <li>Plataforma CYTEI — app.cytei.com.br</li>
                <li>Gerador de Proposta — proposta.cytei.com.br</li>
              </ul>
              <p>
                Ao acessar ou utilizar qualquer um desses produtos, o usuário declara ter lido,
                compreendido e concordado integralmente com estes Termos de Uso e com a{" "}
                <Link to="/politica-privacidade" className="font-medium text-brand hover:underline">
                  Política de Privacidade
                </Link>{" "}
                da CYTEI. Caso não concorde, o usuário não deve utilizar os serviços.
              </p>
            </Secao>

            <Secao numero="2" titulo="Quem pode usar os serviços">
              <p>
                Os serviços da CYTEI destinam-se a maiores de 18 anos, com capacidade civil plena
                para celebrar contratos. Essa exigência decorre da natureza dos serviços, que
                envolvem simulação e contratação de produtos de geração distribuída de energia
                elétrica, regulados pela Lei 14.300/2022.
              </p>
            </Secao>

            <Secao numero="3" titulo="Descrição dos serviços">
              <SubSecao titulo="3.1 Site institucional">
                <p>
                  Ambiente informativo sobre a CYTEI, seus produtos, parcerias (incluindo a
                  Enercoop do Brasil) e canal de contato comercial.
                </p>
              </SubSecao>
              <SubSecao titulo="3.2 Calculadora de Economia de Energia">
                <p>
                  Ferramenta que, a partir de dados informados pelo usuário (valor de fatura,
                  distribuidora, UF), gera uma <strong>estimativa</strong> de economia com migração
                  para geração distribuída de energia solar. Os resultados são simulações e{" "}
                  <strong>não constituem garantia de economia efetiva</strong>, que depende de
                  fatores como perfil de consumo real, disponibilidade de geração na região e
                  condições contratuais específicas.
                </p>
              </SubSecao>
              <SubSecao titulo="3.3 Plataforma CYTEI">
                <p>
                  Ambiente de gestão para cooperados, cooperativas, usinas de geração distribuída
                  e unidades consumidoras, incluindo módulos de rateio de créditos de energia,
                  faturamento, qualificação de usuários e auditoria.
                </p>
              </SubSecao>
              <SubSecao titulo="3.4 Gerador de Proposta">
                <p>
                  Ferramenta de geração de propostas comerciais em formato de documento, a partir
                  de dados previamente informados pelo usuário ou por representante comercial da
                  CYTEI.
                </p>
              </SubSecao>
            </Secao>

            <Secao numero="4" titulo="Cadastro e responsabilidades do usuário">
              <p>
                Ao se cadastrar em qualquer produto que exija conta de acesso, o usuário se
                compromete a:
              </p>
              <ul>
                <li>Fornecer informações verdadeiras, completas e atualizadas;</li>
                <li>Manter a confidencialidade de suas credenciais de acesso;</li>
                <li>
                  Notificar a CYTEI imediatamente em caso de suspeita de uso não autorizado de
                  sua conta;
                </li>
                <li>
                  Não utilizar os serviços para fins ilícitos, fraudulentos ou que violem direitos
                  de terceiros.
                </li>
              </ul>
            </Secao>

            <Secao numero="5" titulo="Propriedade intelectual">
              <p>
                Todo o conteúdo disponibilizado nos produtos CYTEI — incluindo textos, logotipos,
                marca, layout, código-fonte, funcionalidades e materiais institucionais — é de
                propriedade da CYTEI ou de seus licenciadores, sendo protegido pela legislação de
                propriedade intelectual brasileira. É vedada a reprodução, distribuição ou uso
                comercial não autorizado desses conteúdos.
              </p>
            </Secao>

            <Secao numero="6" titulo="Limitação de responsabilidade">
              <SubSecao titulo="6.1 Sobre as estimativas da Calculadora">
                <p>
                  Os valores de economia apresentados pela Calculadora são estimativas baseadas nos
                  dados informados pelo usuário e em premissas de mercado. Não constituem garantia
                  contratual de resultado — a economia efetiva depende de fatores variáveis,
                  incluindo geração real da usina, consumo do usuário e alterações tarifárias
                  determinadas pela ANEEL ou pelas distribuidoras.
                </p>
              </SubSecao>
              <SubSecao titulo="6.2 Sobre a disponibilidade dos serviços">
                <p>
                  A CYTEI empenha-se para manter seus produtos disponíveis de forma contínua, mas
                  não garante disponibilidade ininterrupta, podendo ocorrer interrupções para
                  manutenção, atualização ou por motivos alheios ao seu controle (falhas de
                  provedores de hospedagem, infraestrutura de terceiros, etc.).
                </p>
              </SubSecao>
              <SubSecao titulo="6.3 Sobre integrações de terceiros">
                <p>
                  Os serviços da CYTEI utilizam integrações com terceiros, incluindo processamento
                  de OCR via Gemini API (Google), cobrança e pagamentos via Sicoob e envio de
                  formulários via EmailJS. A CYTEI não se responsabiliza por indisponibilidades,
                  falhas ou alterações nesses serviços que estejam fora de seu controle direto.
                </p>
              </SubSecao>
            </Secao>

            <Secao numero="7" titulo="Relação com a Enercoop do Brasil">
              <p>
                A CYTEI atua como parceira tecnológica da <strong>Enercoop do Brasil</strong>,
                cooperativa de geração distribuída de energia. Os dados coletados pela Calculadora
                de Economia podem ser compartilhados com a Enercoop para fins de contato comercial,
                conforme descrito na{" "}
                <Link to="/politica-privacidade" className="font-medium text-brand hover:underline">
                  Política de Privacidade
                </Link>
                .
              </p>
            </Secao>

            <Secao numero="8" titulo="Proteção de dados pessoais">
              <p>
                O tratamento de dados pessoais realizado pela CYTEI obedece à Lei nº 13.709/2018
                (LGPD) e está detalhado na{" "}
                <Link to="/politica-privacidade" className="font-medium text-brand hover:underline">
                  Política de Privacidade
                </Link>
                . O Encarregado de Dados (DPO) da CYTEI é <strong>Edson Corrêa</strong>, acessível
                pelo e-mail{" "}
                <a href="mailto:edson.correa@cytei.com.br" className="font-medium text-brand hover:underline">
                  edson.correa@cytei.com.br
                </a>
                .
              </p>
            </Secao>

            <Secao numero="9" titulo="Modificações nos termos">
              <p>
                A CYTEI pode alterar estes Termos de Uso a qualquer momento, mediante publicação
                da versão atualizada nesta página. O uso continuado dos serviços após a alteração
                implica concordância com os novos termos.
              </p>
            </Secao>

            <Secao numero="10" titulo="Rescisão">
              <p>
                A CYTEI reserva-se o direito de suspender ou encerrar o acesso de qualquer usuário
                a seus produtos, a qualquer momento, em caso de violação destes Termos de Uso, sem
                prejuízo de outras medidas cabíveis.
              </p>
            </Secao>

            <Secao numero="11" titulo="Foro e legislação aplicável">
              <p>
                Estes Termos de Uso são regidos pela legislação brasileira. Fica eleito o foro da
                comarca de <strong>Brasília/DF</strong> para dirimir quaisquer controvérsias, com
                renúncia a qualquer outro foro, por mais privilegiado que seja.
              </p>
            </Secao>

            <Secao numero="12" titulo="Contato">
              <p>
                Dúvidas sobre estes Termos de Uso:{" "}
                <a href="mailto:edson.correa@cytei.com.br" className="font-medium text-brand hover:underline">
                  edson.correa@cytei.com.br
                </a>
                .
              </p>
            </Secao>

          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

// ---------------------------------------------------------------------------
// Componentes internos de layout
// ---------------------------------------------------------------------------
function Aviso() {
  return (
    <div className="mb-10 rounded-xl border border-brand/30 bg-brand/5 px-6 py-5">
      <p className="text-sm text-muted-foreground">
        <strong className="text-primary">Última atualização: julho de 2026.</strong>{" "}
        Em caso de dúvidas, entre em contato com nosso DPO:{" "}
        <a href="mailto:edson.correa@cytei.com.br" className="font-medium text-brand hover:underline">
          edson.correa@cytei.com.br
        </a>
        .
      </p>
    </div>
  );
}

function Secao({ numero, titulo, children }: { numero: string; titulo: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="mb-4 flex items-center gap-3 font-display text-xl font-bold text-primary">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-brand-foreground">
          {numero}
        </span>
        {titulo}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground pl-11">
        {children}
      </div>
    </div>
  );
}

function SubSecao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="mb-2 font-semibold text-primary">{titulo}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
