import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Digital Reasoning Thread - Modern System Architecture Platform</title>
        <meta name="description" content="Explore the architecture of modern systems through our comprehensive platform. Learn about system design, scalability, and best practices for building robust applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Digital Reasoning Thread - Modern System Architecture Platform" />
        <meta property="og:description" content="Discover modern system architecture principles and practices. Our platform provides in-depth insights into building scalable, resilient, and efficient software systems." />
        <meta name="image" property="og:image" content="/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
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
