import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import WhatsappBubble from './components/WhatsappBubble';

export const metadata: Metadata = {
  title: 'Estudios laboratoriales',
  description: 'App para solicitar estudios laboratoriales online',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <WhatsappBubble />
      </body>
    </html>
  );
}
