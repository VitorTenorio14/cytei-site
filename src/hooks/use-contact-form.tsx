import * as React from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

// Lê as credenciais públicas do EmailJS das variáveis de ambiente do Vite.
// Configure em um arquivo .env na raiz do projeto (veja .env.example).
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export type ContactFormData = {
  nome: string;
  email: string;
  telefone: string;
  perfil: string;
  mensagem: string;
};

export type ContactFormStatus = "idle" | "sending" | "success" | "error";

const initialFormData: ContactFormData = {
  nome: "",
  email: "",
  telefone: "",
  perfil: "Sou consumidor",
  mensagem: "",
};

// Formata um telefone brasileiro progressivamente enquanto o usuário digita:
// (xx) xxxx-xxxx para fixo (10 dígitos) e (xx) xxxxx-xxxx para celular (11 dígitos).
// Sempre trabalha sobre os dígitos puros, então funciona bem com apagar/colar.
function formatPhoneBR(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;

  const ddd = digits.slice(0, 2);
  const rest = digits.slice(2);

  if (rest.length <= 4) return `(${ddd}) ${rest}`;

  // Até 10 dígitos totais: fixo, XXXX-XXXX. A partir do 11º: celular, XXXXX-XXXX.
  const splitAt = digits.length <= 10 ? 4 : 5;
  const firstPart = rest.slice(0, splitAt);
  const secondPart = rest.slice(splitAt);

  return secondPart ? `(${ddd}) ${firstPart}-${secondPart}` : `(${ddd}) ${firstPart}`;
}

// Hook compartilhado pelos formulários de contato (home e /contato).
// Centraliza o estado dos campos, a chamada ao EmailJS e o feedback de
// envio, evitando duplicar essa lógica em cada formulário.
export function useContactForm() {
  const [formData, setFormData] = React.useState<ContactFormData>(initialFormData);
  const [status, setStatus] = React.useState<ContactFormStatus>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const updateField = React.useCallback(
    (field: keyof ContactFormData) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const rawValue = e.target.value;
        const value = field === "telefone" ? formatPhoneBR(rawValue) : rawValue;
        setFormData((prev) => ({ ...prev, [field]: value }));
      },
    [],
  );

  const handleSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error(
          "EmailJS não configurado: defina VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID e VITE_EMAILJS_PUBLIC_KEY no .env",
        );
        setStatus("error");
        setErrorMessage("Formulário temporariamente indisponível. Tente novamente mais tarde.");
        return;
      }

      setStatus("sending");
      setErrorMessage(null);

      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            nome: formData.nome,
            email: formData.email,
            telefone: formData.telefone,
            perfil: formData.perfil,
            mensagem: formData.mensagem,
          },
          { publicKey: PUBLIC_KEY },
        );

        setStatus("success");
        setFormData(initialFormData);
      } catch (error) {
        const message =
          error instanceof EmailJSResponseStatus
            ? `Falha ao enviar (${error.status}). Tente novamente.`
            : "Não foi possível enviar sua mensagem. Tente novamente.";
        console.error("Erro ao enviar formulário de contato:", error);
        setStatus("error");
        setErrorMessage(message);
      }
    },
    [formData],
  );

  return { formData, updateField, handleSubmit, status, errorMessage };
}
