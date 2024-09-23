'use client';
import './globals.css';
import WhatsappBubble from './components/WhatsappBubble';
import { UserLocationProvider } from '@/context/locationContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <UserLocationProvider>
          {children}
          <WhatsappBubble />
        </UserLocationProvider>
      </body>
    </html>
  );
}
