import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://digital-reasoning-thread.com'),
  title: "Digital Reasoning Thread",
  description: "Explore the architecture of modern systems",
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Digital Reasoning Thread',
    description: 'Explore the architecture of modern systems',
    url: 'https://digital-reasoning-thread.com',
    siteName: 'Digital Reasoning Thread',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Digital Reasoning Thread',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Reasoning Thread',
    description: 'Explore the architecture of modern systems',
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ]
  },
  themeColor: '#7033ff',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Digital Reasoning Thread'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen bg-background dark`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
