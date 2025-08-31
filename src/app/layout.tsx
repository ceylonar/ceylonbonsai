import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppButton from '@/components/layout/whatsapp-button';
import { ThemeProvider } from '@/components/layout/theme-provider';

export const metadata: Metadata = {
  title: 'Ceylon Bonsai Museum',
  description: 'Discover the Art of Patience and Legacy in Miniature',
  icons: {
    icon: 'https://i.postimg.cc/pVw8zG7N/bonsai-icon-new.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&family=Rajdhani:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
