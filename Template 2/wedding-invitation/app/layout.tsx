import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond, Cairo, Amiri } from "next/font/google";
import { LanguageProvider } from "./components/LanguageContext";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Layla & Omar — The Wedding Invitation",
  description: "Join us in celebrating the love and marriage of Layla and Omar. December 20, 2026 | Al Bustan, Cairo. Please RSVP by November 20, 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorantGaramond.variable} ${cairo.variable} ${amiri.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal selection:bg-romantic-red/10 selection:text-romantic-red">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
