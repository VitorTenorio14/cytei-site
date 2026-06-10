import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoCytei from '../../assets/logo-cytei.png';

const nav = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/ecossistema", label: "Ecossistema" },
  { to: "/noticias", label: "Notícias" },
  { to: "/parceiros", label: "Parceiros" },
  { to: "/contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center">
            <div className="inline-block rounded-xl bg-white px-4 py-2">
              <img
                src={logoCytei}
                alt="CYTEI"
                className="h-12 w-auto object-contain"
              />
            </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="text-sm font-medium text-white/85 transition hover:text-white"
              activeProps={{ className: "text-white font-semibold" }}
              activeOptions={{ exact: i.to === "/" }}
            >
              {i.label}
            </Link>
          ))}
          <a
            href="https://app.cytei.com.br"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-brand-foreground shadow-md transition hover:brightness-110"
          >
            Plataforma
          </a>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-primary px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/10"
              >
                {i.label}
              </Link>
            ))}
            <a
              href="https://app.cytei.com.br"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-brand-foreground"
            >
              Acesse a Plataforma
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
