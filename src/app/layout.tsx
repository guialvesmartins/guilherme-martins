import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/language-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Guilherme Martins | Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack com mais de 8 anos de experiência em Java, Spring, Quarkus, React, TypeScript e ERP TOTVS Protheus. Baseado em Goiânia, GO.",
  keywords: [
    "Guilherme Martins",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "Quarkus",
    "React",
    "TypeScript",
    "Next.js",
    "TOTVS Protheus",
    "ADVPL",
    "Goiânia",
  ],
  authors: [{ name: "Guilherme Martins" }],
  creator: "Guilherme Martins",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["es_ES"],
    url: "https://guilhermemartins.dev.br",
    title: "Guilherme Martins | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack com mais de 8 anos de experiência em Java, Spring, React e ERP TOTVS Protheus.",
    siteName: "Guilherme Martins",
    images: [
      {
        url: "/avatar.png",
        width: 400,
        height: 400,
        alt: "Guilherme Martins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guilherme Martins | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack com mais de 8 anos de experiência em Java, Spring, React e ERP TOTVS Protheus.",
    images: ["/avatar.png"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://guilhermemartins.dev.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased font-sans bg-background text-foreground min-h-screen`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
