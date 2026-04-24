import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lume | Seu copiloto financeiro no WhatsApp",
  description:
    "Controle seus gastos pelo WhatsApp com IA. Sem planilhas, sem apps complicados, só uma conversa simples.",
  keywords: [
    "finanças pessoais",
    "controle financeiro",
    "IA",
    "WhatsApp",
    "orçamento",
    "assistente financeiro",
  ],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}