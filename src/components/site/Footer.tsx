import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, MessageCircle, Mail, MapPin, Facebook } from "lucide-react";
import logoCytei from '../../assets/logo-cytei-2.png';



export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/">
            <div className="inline-block rounded-xl bg-white px-4 py-2">
              <img
                src={logoCytei}
                alt="CYTEI"
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>
          <p className="mt-4 text-sm text-white/75">
            A CYTEI é uma empresa de tecnologia e serviços para a completa gestão energética.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Instagram, href: "https://www.instagram.com/cytei_oficial/" },
              { icon: Linkedin, href: "https://www.linkedin.com/company/cytei/" },
              { icon: Facebook, href: "https://www.facebook.com/cyteitecnologia/", label: "Facebook" },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand hover:text-brand-foreground">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">Navegação</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-brand">Home</Link></li>
            <li><Link to="/sobre" className="hover:text-brand">Sobre Nós</Link></li>
            <li><Link to="/ecossistema" className="hover:text-brand">Ecossistema</Link></li>
            <li><Link to="/noticias" className="hover:text-brand">Notícias</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">Institucional</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/parceiros" className="hover:text-brand">Parceiros</Link></li>
            <li><Link to="/contato" className="hover:text-brand">Contato</Link></li>
            <li><a href="https://app.cytei.com.br" target="_blank" rel="noreferrer" className="hover:text-brand">Plataforma</a></li>
            <li><a href="https://cytei.com.br/politica-privacidade/" className="hover:text-brand">Política de Privacidade</a></li>
            <li><a href="https://cytei.com.br/politica-privacidade/" className="hover:text-brand">Termos de Uso</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">Contato</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-brand" />
              <span>contato@cytei.com.br</span>
            </li>
            <li className="flex gap-2">
              <MessageCircle size={16} className="mt-0.5 shrink-0 text-brand" />
              <a href="https://wa.me/556198221316" target="_blank" rel="noreferrer" className="hover:text-brand">
                +55 61 99822-1316
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
              <span>SRTVS Centro Empresarial Brasília, Bloco A Sala 615 — Asa Sul, Brasília - DF, 70340-907</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/60 lg:px-8">
          © {new Date().getFullYear()} CYTEI — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
