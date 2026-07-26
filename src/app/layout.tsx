import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import OrganizationSchema from "@/components/OrganizationSchema";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--ff-display",
  weight: ["400", "500", "600", "700"],
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--ff-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://michael-krueger-seite.vercel.app'),
  title: {
    default: 'Tischlerei Michael Krüger | Historische Fenster & Türen | Berlin & Brandenburg',
    template: '%s | Tischlerei Krüger Berlin',
  },
  description:
    'Tischlerei Michael Krüger – Meisterbetrieb für historische Fenster, Türen & Treppen in Berlin und Brandenburg. Seit 1997. Kastenfenster restaurieren, denkmalgerechte Sanierung, Festpreise. Kostenlose Ersteinschätzung.',
  keywords: [
    'Tischlerei Berlin', 'historische Fenster', 'Kastenfenster restaurieren',
    'Altbaufenster Berlin', 'Denkmalschutz Fenster', 'historische Türen',
    'Fensterrestaurierung Berlin', 'Meisterbetrieb Tischler Berlin',
    'Kastenfenster sanieren', 'historische Bauelemente', 'Tischlerei Brandenburg',
    'Fenster Altbau', 'denkmalgerechte Sanierung', 'Tischlermeister Berlin',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Tischlerei Michael Krüger',
    title: 'Tischlerei Michael Krüger | Historische Fenster & Türen',
    description: 'Meisterbetrieb für historische Fenster, Türen & Treppen in Berlin und Brandenburg. 25+ Jahre Erfahrung. Kostenlose Ersteinschätzung.',
    images: [{
      url: '/images/hero-kastenfenster-altbau.jpg',
      width: 1200,
      height: 630,
      alt: 'Historische Kastenfenster restauriert von Tischlerei Krüger in Berlin',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tischlerei Michael Krüger | Berlin & Brandenburg',
    description: 'Historische Fenster & Türen restaurieren statt ersetzen – Meisterbetrieb seit 2016.',
    images: ['/images/hero-kastenfenster-altbau.jpg'],
  },
  alternates: {
    canonical: 'https://michael-krueger-seite.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${sourceSans3.variable}`}
    >
      <body className="min-h-full">
        <OrganizationSchema />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
