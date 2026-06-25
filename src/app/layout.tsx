import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "Tischlerei Michael Krüger | Berlin & Brandenburg",
  description:
    "Tischlerei Michael Krüger – Ihr Spezialist für historische Fenster & Türen in Berlin und Brandenburg. Meisterbetrieb seit 2016, 25+ Jahre Erfahrung. Restaurierung, Anfertigung und Einbau nach Maß.",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
