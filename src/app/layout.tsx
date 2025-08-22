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
        <title>Digital Reasoning Thread – A Reasoning Architecture for Industrial Systems</title>
        <meta name="description" content="The Digital Reasoning Thread introduces a new architectural layer that connects context, assumptions, logic, and outcomes across tools and processes. It turns reasoning into a traceable, auditable, and reusable asset across the industrial value chain." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Digital Reasoning Thread – A Reasoning Architecture for Industrial Systems" />
        <meta property="og:description" content="The Digital Reasoning Thread introduces a new architectural layer that connects context, assumptions, logic, and outcomes across tools and processes. It turns reasoning into a traceable, auditable, and reusable asset across the industrial value chain." />
        <meta name="image" property="og:image" content="/og.png" />
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
