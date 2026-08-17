import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/politica-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — CYTEI" },
      { name: "description", content: "Saiba como a CYTEI coleta, usa e protege seus dados pessoais em conformidade com a LGPD." },
    ],
  }),
  component: PoliticaPrivacidadePage,
});

function PoliticaPrivacidadePage() {
  return (
    <SiteLayout>
      <PageHero
        title="Política de Privacidade"
        subtitle="Saiba como tratamos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)."
      />

      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="prose prose-slate max-w-none">

            <Aviso />

            <Secao numero="1" titulo="Introdução">
              <p>
                Esta Política de Privacidade descreve como a <strong>CORREA E ASSOCIADOS TECNOLOGIA
                EM ENERGIA INOVADORA SUSTENTAVEL LTDA</strong>, inscrita no CNPJ sob o nº{" "}
                <strong>35.699.569/0001-71</strong>, com sede em{" "}
                <strong>SRTVS 701, Conjunto D, Bloco A, Sala 615, Brasília/DF</strong>{" "}
                ("CYTEI", "nós"), coleta, usa, armazena, compartilha e protege os dados pessoais
                dos usuários de seus produtos e serviços, em conformidade com a Lei nº 13.709/2018
                (Lei Geral de Proteção de Dados Pessoais — LGPD).
              </p>
              <p>Esta política aplica-se a todos os produtos e ambientes digitais operados pela CYTEI:</p>
              <ul>
                <li><strong>Site institucional</strong> — cytei.com.br</li>
                <li><strong>Calculadora de Economia de Energia</strong> — app.calculadora.cytei.com.br</li>
                <li><strong>Plataforma CYTEI</strong> — app.cytei.com.br</li>
                <li><strong>Gerador de Proposta</strong> — proposta.cytei.com.br</li>
              </ul>
            </Secao>

            <Secao numero="2" titulo="Encarregado de Dados (DPO)">
              <p>
                Em conformidade com o Art. 41 da LGPD, a CYTEI designa como Encarregado pelo
                Tratamento de Dados Pessoais:
              </p>
              <ul>
                <li><strong>Nome:</strong> Edson Corrêa</li>
                <li>
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:edson.correa@cytei.com.br">edson.correa@cytei.com.br</a>
                </li>
              </ul>
              <p>
                Qualquer titular de dados pode entrar em contato por este canal para exercer os
                direitos previstos no Art. 18 da LGPD (confirmação de tratamento, acesso, correção,
                anonimização, eliminação, portabilidade, entre outros).
              </p>
            </Secao>

            <Secao numero="3" titulo="Dados tratados no site institucional (cytei.com.br)">
              <SubSecao titulo="3.1 O que coletamos">
                <p>Ao preencher o formulário de contato, coletamos:</p>
                <ul>
                  <li>Nome completo</li>
                  <li>E-mail</li>
                  <li>Telefone (opcional)</li>
                  <li>Perfil declarado (consumidor, integradora, investidor, fornecedor, outro)</li>
                  <li>Conteúdo da mensagem</li>
                </ul>
              </SubSecao>
              <SubSecao titulo="3.2 Finalidade">
                <p>
                  Esses dados são usados exclusivamente para responder ao contato realizado pelo
                  usuário.
                </p>
              </SubSecao>
              <SubSecao titulo="3.3 Como são processados">
                <p>
                  O envio é realizado através do serviço EmailJS, que encaminha a mensagem para a
                  caixa de e-mail interna da CYTEI (contato.site@cytei.com.br). O EmailJS não
                  armazena o conteúdo das mensagens em painel próprio — atua exclusivamente como
                  canal de transmissão.
                </p>
              </SubSecao>
              <SubSecao titulo="3.4 Cookies e rastreamento">
                <p>
                  O site institucional da CYTEI utiliza cookies próprios e de terceiros para fins
                  de análise de navegação e melhoria da experiência do usuário. Ao acessar o site,
                  o usuário poderá gerenciar suas preferências através do banner de consentimento
                  disponível na página.
                </p>
              </SubSecao>
              <SubSecao titulo="3.5 Base legal (Art. 7º, LGPD)">
                <p>
                  Formulário de contato: <strong>legítimo interesse</strong> (Art. 7º, IX) — o
                  tratamento é necessário para atender à solicitação espontânea do próprio titular.
                </p>
              </SubSecao>
            </Secao>

            <Secao numero="4" titulo="Dados tratados na Calculadora de Economia de Energia">
              <SubSecao titulo="4.1 O que coletamos">
                <ul>
                  <li>Nome</li>
                  <li>Telefone</li>
                  <li>E-mail</li>
                  <li>UF (estado)</li>
                  <li>Distribuidora de energia</li>
                  <li>Valor da fatura de energia</li>
                  <li>Estimativas de economia calculadas a partir dos dados informados</li>
                </ul>
              </SubSecao>
              <SubSecao titulo="4.2 Finalidade">
                <p>
                  Os dados são utilizados para: (i) calcular a estimativa de economia com migração
                  para geração distribuída de energia solar; e (ii) qualificar o lead para contato
                  comercial subsequente.
                </p>
              </SubSecao>
              <SubSecao titulo="4.3 Compartilhamento com terceiros">
                <p>
                  Os dados coletados pela Calculadora são compartilhados exclusivamente com a{" "}
                  <strong>Enercoop do Brasil</strong>, cooperativa de geração distribuída de energia
                  e parceira da CYTEI, para fins de contato comercial e apresentação de proposta
                  de associação. Nenhum outro terceiro tem acesso a esses dados.
                </p>
              </SubSecao>
              <SubSecao titulo="4.4 Retenção">
                <p>
                  Os dados de leads não convertidos são mantidos pelo prazo de{" "}
                  <strong>1 (um) ano</strong> a partir da data de coleta, após o qual são
                  eliminados da base.
                </p>
              </SubSecao>
              <SubSecao titulo="4.5 Base legal (Art. 7º, LGPD)">
                <ul>
                  <li>
                    <strong>Consentimento</strong> (Art. 7º, I) — o usuário fornece os dados
                    voluntariamente ao utilizar a ferramenta, ciente de que podem ser utilizados
                    para contato comercial.
                  </li>
                  <li>
                    <strong>Legítimo interesse</strong> (Art. 7º, IX) — para o tratamento
                    necessário à qualificação do lead e à operação da ferramenta.
                  </li>
                </ul>
              </SubSecao>
            </Secao>

            <Secao numero="5" titulo="Dados tratados na Plataforma CYTEI (app.cytei.com.br)">
              <SubSecao titulo="5.1 Cadastro e perfis de usuário">
                <p>
                  A Plataforma opera com múltiplos perfis de usuário (cooperado, associação,
                  consumidor, investidor, usineiro, setor público, entre outros), podendo coletar:
                </p>
                <ul>
                  <li>Dados pessoais: nome completo, CPF, RG, estado civil, profissão</li>
                  <li>Dados de pessoa jurídica: CNPJ, razão social, data de abertura</li>
                  <li>
                    Dados financeiros: conta corrente, número de contrato, client ID e chave Pix
                    (armazenados de forma criptografada)
                  </li>
                  <li>Certificado digital de integração (armazenado de forma criptografada)</li>
                  <li>Endereço completo</li>
                  <li>Dados de contato: telefone e e-mail</li>
                </ul>
              </SubSecao>
              <SubSecao titulo="5.2 Processamento de contas de energia (OCR)">
                <p>
                  A Plataforma utiliza reconhecimento óptico de caracteres (OCR) para extrair
                  automaticamente dados de contas de energia enviadas pelo usuário (número da UC,
                  consumo, valores, distribuidora, entre outros). Os arquivos enviados são
                  armazenados na infraestrutura da CYTEI para disponibilização posterior ao
                  próprio usuário.
                </p>
                <p>
                  <strong>Transferência internacional de dados:</strong> o processamento OCR é
                  realizado através da API Gemini 2.0 Flash (Google), cujos servidores estão
                  localizados fora do Brasil. Essa transferência internacional é realizada com base
                  nas <strong>garantias adequadas oferecidas pelo Google Cloud</strong>, nos termos
                  do Art. 33, inciso II da LGPD, incluindo as políticas de proteção de dados e
                  cláusulas contratuais padrão aplicáveis aos serviços Google Cloud Platform.
                </p>
              </SubSecao>
              <SubSecao titulo="5.3 Módulo financeiro">
                <p>
                  A Plataforma processa cobranças (boleto e PIX) através de integração com o
                  Sicoob. A CYTEI armazena em seu banco de dados os seguintes dados financeiros,
                  todos criptografados em repouso e em trânsito:
                </p>
                <ul>
                  <li>Conta corrente</li>
                  <li>Número do contrato</li>
                  <li>Client ID</li>
                  <li>Chave Pix</li>
                  <li>Certificado digital de integração</li>
                </ul>
                <p>
                  Esses dados são utilizados exclusivamente para operacionalizar as integrações
                  financeiras (emissão de boleto, PIX, DRE e fluxo de caixa) no contexto da
                  gestão cooperativista.
                </p>
              </SubSecao>
              <SubSecao titulo="5.4 Módulo de auditoria">
                <p>
                  A Plataforma mantém registros de auditoria (logs) das ações realizadas pelos
                  usuários, incluindo identificação do responsável, timestamp e entidade afetada,
                  para fins de rastreabilidade e conformidade regulatória.
                </p>
              </SubSecao>
              <SubSecao titulo="5.5 Retenção">
                <p>
                  Os dados são mantidos durante toda a vigência do vínculo do usuário/cooperado
                  com a Plataforma e por <strong>5 (cinco) anos</strong> após o encerramento desse
                  vínculo, em conformidade com obrigações legais e fiscais aplicáveis — ou até que
                  o titular solicite formalmente a eliminação, o que ocorrer primeiro, respeitados
                  os limites de retenção obrigatória previstos em lei.
                </p>
              </SubSecao>
              <SubSecao titulo="5.6 Base legal (Art. 7º, LGPD)">
                <ul>
                  <li>
                    <strong>Execução de contrato</strong> (Art. 7º, V) — o tratamento é necessário
                    para a prestação dos serviços contratados pelo cooperado/usuário.
                  </li>
                  <li>
                    <strong>Cumprimento de obrigação legal ou regulatória</strong> (Art. 7º, II) —
                    especialmente para dados tratados no contexto da regulação do setor elétrico
                    (ANEEL, Lei 14.300/2022, Lei 5.764/1971).
                  </li>
                  <li>
                    <strong>Legítimo interesse</strong> (Art. 7º, IX) — para dados de auditoria e
                    segurança da Plataforma.
                  </li>
                </ul>
              </SubSecao>
            </Secao>

            <Secao numero="6" titulo="Dados tratados no Gerador de Proposta (proposta.cytei.com.br)">
              <SubSecao titulo="6.1 O que coletamos">
                <p>
                  Para geração de propostas comerciais, são utilizados dados do cliente final —
                  incluindo nome, endereço e dados de consumo de energia — frequentemente originados
                  da Calculadora de Economia.
                </p>
              </SubSecao>
              <SubSecao titulo="6.2 Armazenamento">
                <p>
                  Os dados utilizados para gerar as propostas são armazenados no banco de dados do
                  Gerador de Proposta após a geração do documento.
                </p>
              </SubSecao>
              <SubSecao titulo="6.3 Finalidade">
                <p>
                  Geração de documento comercial (proposta) para apresentação ao cliente final, em
                  conformidade com os requisitos da Lei 14.300/2022.
                </p>
              </SubSecao>
              <SubSecao titulo="6.4 Base legal (Art. 7º, LGPD)">
                <ul>
                  <li>
                    <strong>Consentimento</strong> (Art. 7º, I) — dados fornecidos voluntariamente
                    pelo titular para fins de recebimento de proposta comercial.
                  </li>
                  <li>
                    <strong>Execução de contrato ou procedimentos preliminares</strong> (Art. 7º, V)
                    — quando a proposta decorre de solicitação do próprio titular.
                  </li>
                </ul>
              </SubSecao>
            </Secao>

            <Secao numero="7" titulo="Segurança da informação">
              <p>A CYTEI adota as seguintes medidas técnicas e organizacionais de proteção:</p>
              <ul>
                <li>
                  <strong>Criptografia em trânsito:</strong> todas as comunicações entre o usuário
                  e os sistemas CYTEI utilizam protocolo HTTPS/TLS.
                </li>
                <li>
                  <strong>Criptografia em repouso:</strong> dados sensíveis (financeiros e
                  credenciais de integração) são armazenados de forma criptografada no banco de
                  dados.
                </li>
                <li>
                  <strong>Controle de acesso por perfil:</strong> o acesso aos dados é restrito por
                  perfil de usuário, garantindo que cada pessoa acesse apenas as informações
                  pertinentes à sua função.
                </li>
                <li>
                  <strong>Autenticação segura:</strong> a Plataforma utiliza autenticação baseada
                  em tokens JWT (JSON Web Token) com prazo de expiração controlado.
                </li>
                <li>
                  <strong>Backups regulares:</strong> cópias de segurança dos dados são realizadas
                  periodicamente para garantir disponibilidade e recuperação em caso de incidentes.
                </li>
              </ul>
            </Secao>

            <Secao numero="8" titulo="Direitos do titular de dados">
              <p>Nos termos do Art. 18 da LGPD, o titular tem direito a:</p>
              <ul>
                <li>Confirmação da existência de tratamento;</li>
                <li>Acesso aos dados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>
                  Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em
                  desconformidade;
                </li>
                <li>Portabilidade dos dados a outro fornecedor;</li>
                <li>Eliminação dos dados tratados com consentimento;</li>
                <li>Informação sobre compartilhamentos realizados;</li>
                <li>Revogação do consentimento.</li>
              </ul>
              <p>
                Para exercer qualquer desses direitos, entre em contato com o DPO:{" "}
                <a href="mailto:edson.correa@cytei.com.br">edson.correa@cytei.com.br</a>.
              </p>
            </Secao>

            <Secao numero="9" titulo="Alterações nesta política">
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente. A data da última
                atualização estará sempre indicada no topo deste documento. Recomendamos a revisão
                periódica desta página.
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
        Esta política aplica-se a todos os produtos digitais operados pela CYTEI. Em caso de
        dúvidas, entre em contato com nosso DPO:{" "}
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
