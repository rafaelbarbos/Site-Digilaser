import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Digi Laser — Conserto de Placas de Ar Condicionado em Goiânia',
  description:
    'Desde 1992, a Digi Laser é especialista em recuperação e manutenção de placas eletrônicas de ar condicionado em Goiânia. Diagnóstico grátis e garantia no serviço.',
  keywords: 'conserto placa ar condicionado, manutenção ar condicionado Goiânia, reparo placa eletrônica AC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}