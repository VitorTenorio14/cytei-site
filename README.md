# CYTEI — Site Institucional

Site institucional da **CYTEI**, plataforma brasileira de gestão de energia renovável.
Substitui o site anterior em WordPress/Hostgator e é construído com React, TanStack Router e Tailwind CSS v4.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework UI | React 19 |
| Roteamento | TanStack Router v1 (file-based) |
| Estilização | Tailwind CSS v4 + tw-animate-css |
| Componentes | shadcn/ui (Radix UI) |
| Bundler | Vite 7 |
| Linguagem | TypeScript 5.8 |
| Gerenciador de pacotes | npm / bun |
| Linting | ESLint 9 + Prettier |

---

## Pré-requisitos

- **Node.js** 20 ou superior
- **npm** 10+ (ou bun)

---

## Instalação e execução

```bash
# 1. Clone o repositório
git clone https://github.com/CYTEI/cytei-site.git
cd cytei-site

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`.

---

## Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Gera o build de produção na pasta `dist/` |
| `npm run preview` | Serve o build de produção localmente |
| `npm run lint` | Executa o ESLint |
| `npm run format` | Formata o código com Prettier |

---

## Estrutura do projeto

```
cytei-site/
├── public/
│   ├── logo-cytei.png          # Logo usada no Open Graph / favicon
│   └── logo-enercoop.png       # Logo da parceira Enercoop
├── src/
│   ├── assets/                 # Imagens importadas via bundler
│   │   ├── hero-energy.jpg
│   │   ├── logo-cytei.png
│   │   └── logo-enercoop.png
│   ├── components/
│   │   ├── site/               # Componentes de layout do site
│   │   │   ├── Header.tsx      # Cabeçalho com navegação responsiva
│   │   │   ├── Footer.tsx      # Rodapé com links, contato e redes sociais
│   │   │   └── Layout.tsx      # SiteLayout + PageHero reutilizáveis
│   │   └── ui/                 # Componentes shadcn/ui (não editar manualmente)
│   ├── hooks/
│   │   └── use-mobile.tsx      # Hook de detecção de viewport mobile
│   ├── lib/
│   │   └── utils.ts            # Utilitário cn() para classes condicionais
│   ├── routes/                 # Páginas — cada arquivo = uma rota
│   │   ├── __root.tsx          # Shell da aplicação + página 404
│   │   ├── index.tsx           # / — Home
│   │   ├── sobre.tsx           # /sobre — Sobre Nós + Time Executivo
│   │   ├── servicos.tsx        # /servicos — Serviços
│   │   ├── ecossistema.tsx     # /ecossistema — Ecossistema
│   │   ├── noticias.tsx        # /noticias — Notícias
│   │   ├── parceiros.tsx       # /parceiros — Parceiros
│   │   └── contato.tsx         # /contato — Contato
│   ├── routeTree.gen.ts        # Gerado automaticamente — não editar
│   ├── router.tsx              # Configuração do TanStack Router
│   ├── main.tsx                # Ponto de entrada da aplicação
│   └── styles.css              # Tokens de design CYTEI + Tailwind base
├── index.html                  # Template HTML raiz
├── vite.config.ts              # Configuração do Vite
├── tsconfig.json               # Configuração do TypeScript
├── vercel.json                 # Rewrite de SPA para deploy na Vercel
└── .prettierrc                 # Configuração de formatação
```

---

## Roteamento

O projeto usa **file-based routing** do TanStack Router. Cada arquivo `.tsx` em `src/routes/` vira uma rota automaticamente. O arquivo `routeTree.gen.ts` é **gerado pelo Vite** — nunca edite manualmente.

| Arquivo | URL |
|---|---|
| `index.tsx` | `/` |
| `sobre.tsx` | `/sobre` |
| `servicos.tsx` | `/servicos` |
| `ecossistema.tsx` | `/ecossistema` |
| `noticias.tsx` | `/noticias` |
| `parceiros.tsx` | `/parceiros` |
| `contato.tsx` | `/contato` |

Para criar uma nova página, adicione um arquivo `.tsx` em `src/routes/` seguindo o padrão:

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/nova-pagina")({
  head: () => ({
    meta: [{ title: "Nova Página — CYTEI" }],
  }),
  component: NovaPaginaPage,
});

function NovaPaginaPage() {
  return (
    <SiteLayout>
      <PageHero title="Nova Página" subtitle="Subtítulo aqui." />
      {/* conteúdo */}
    </SiteLayout>
  );
}
```

---

## Design system

As cores e tokens do design CYTEI estão definidos em `src/styles.css` via variáveis CSS:

| Token | Valor | Uso |
|---|---|---|
| `--cytei-blue` | `#222F66` | Cor primária — cabeçalho, botões, títulos |
| `--cytei-orange` | `#F69B1D` | Cor de destaque (`text-brand`, badges, CTAs) |
| `--cytei-gray` | `#F5F5F5` | Superfície alternada (`bg-[var(--surface)]`) |
| `--font-sans` | Inter | Texto corrido |
| `--font-display` | Poppins | Títulos e destaques |

As classes utilitárias do Tailwind mapeiam diretamente para esses tokens:
- `bg-primary` → azul CYTEI
- `text-brand` → laranja CYTEI
- `bg-[var(--surface)]` → cinza claro de fundo

---

## Deploy

### Hostgator (produção — cytei.com.br)

O build gera arquivos estáticos em `dist/`. Por ser uma SPA, todas as rotas precisam redirecionar para `index.html` via `.htaccess`.

```bash
npm run build
```

1. Suba o **conteúdo** da pasta `dist/` (não a pasta em si) para `public_html` via FTP ou Gerenciador de Arquivos do cPanel
2. Crie ou confirme o arquivo `public_html/.htaccess` com:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]
```

> **Dica:** adicione o `.htaccess` na pasta `public/` do projeto. O Vite copia automaticamente tudo de `public/` para `dist/` no build.

---

## Parceria Enercoop

O site exibe a seção de parceria com a **Enercoop do Brasil** (CNPJ 10.385.655/0001-89) na página inicial. O logo está em `public/logo-enercoop.png`. Links externos apontam para `https://enercoop.com.br/`.

---

## Contato e links

| | |
|---|---|
| Site | [cytei.com.br](https://cytei.com.br) |
| Plataforma | [app.cytei.com.br](https://app.cytei.com.br) |
| Gerador de Proposta | [proposta.cytei.com.br](https://proposta.cytei.com.br) |
| E-mail | contato@cytei.com.br |
| WhatsApp | +55 61 99822-1316 |
| Instagram | [@cytei_oficial](https://www.instagram.com/cytei_oficial/) |
| LinkedIn | [/company/cytei](https://www.linkedin.com/company/cytei/) |

---

© 2025 CYTEI — Todos os direitos reservados.
