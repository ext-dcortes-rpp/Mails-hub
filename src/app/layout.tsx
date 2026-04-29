import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VISION — MailForge OS",
  description:
    "Sistema de generación de mails Braze para Rappi. Componentes de LEGO para construir mails consistentes, escalables y compatibles con Braze.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
