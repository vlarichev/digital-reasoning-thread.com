import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const ogImage = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: 'Digital Reasoning Thread - Modern System Architecture Platform',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://digital-reasoning-thread.com'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  title: "Digital Reasoning Thread - Modern System Architecture Platform",
  description: "Explore the architecture of modern systems through our comprehensive platform. Learn about system design, scalability, and best practices for building robust applications.",
  manifest: '/site.webmanifest',
  keywords: ['system architecture', 'software design', 'scalability', 'modern systems'],
  openGraph: {
    title: 'Digital Reasoning Thread - Modern System Architecture Platform',
    description: 'Discover modern system architecture principles and practices. Our platform provides in-depth insights into building scalable, resilient, and efficient software systems.',
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
    siteName: 'Digital Reasoning Thread',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Reasoning Thread - Modern System Architecture Platform',
    description: 'Discover modern system architecture principles and practices. Our platform provides in-depth insights into building scalable, resilient, and efficient software systems.',
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
  },
  applicationName: 'Digital Reasoning Thread',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Digital Reasoning Thread' }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    'og:image': '/og.png',
    'og:image:width': '1200',
    'og:image:height': '630',
  },
} satisfies Metadata;

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
