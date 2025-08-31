import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppButton from '@/components/layout/whatsapp-button';
import { ThemeProvider } from '@/components/layout/theme-provider';

const siteName = 'Ceylon Bonsai Museum';
const siteDescription = 'Discover the Art of Patience and Legacy in Miniature. Explore our collection of masterpiece bonsai, shop for trees and tools, and learn from our expert resources.';
const siteUrl = new URL('https://ceylon-bonsai-museum-landing.web.app'); // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: ['Bonsai', 'Ceylon Bonsai', 'Sri Lanka Bonsai', 'Bonsai Museum', 'Bonsai Trees', 'Bonsai for sale', 'Bonsai tools'],
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: 'https://i.postimg.cc/ydw0FRz8/Generated-Image-September-01-2025-2-46-AM.jpg', // Main hero image
        width: 1200,
        height: 630,
        alt: 'A beautiful collection of bonsai trees',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: ['https://i.postimg.cc/ydw0FRz8/Generated-Image-September-01-2025-2-46-AM.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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
