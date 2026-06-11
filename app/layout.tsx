import type { Metadata } from "next";
import "./globals.css"; // Certifique-se de manter o import do seu CSS aqui

export const metadata: Metadata = {
  title: "Sueli Lopes | Psicóloga Clínica em Itapetininga",
  description: "Psicóloga clínica em Itapetininga, SP. Atendimento humanizado para crianças, adolescentes e adultos. Agende sua consulta para transformar sua história.",
  keywords: "Psicóloga, Itapetininga, Saúde Mental, Terapia, Sueli Lopes, Psicóloga Clínica, Bem-estar",
  authors: [{ name: "Sueli Lopes" }],
  openGraph: {
    title: "Sueli Lopes | Psicóloga Clínica em Itapetininga",
    description: "Cuidar da sua saúde mental é transformar a sua história. Atendimento clínico humanizado.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}