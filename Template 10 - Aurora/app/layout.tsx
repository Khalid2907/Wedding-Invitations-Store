import type { Metadata } from 'next';
import { Cairo, Amiri, Cormorant_Garamond, Outfit } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cairo',
  display: 'swap',
});

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tareq & Layla — Aurora Luxury Digital Invitation | RAB6',
  description: 'Digital wedding invitation for Tareq & Layla, October 24, 2026 at Four Seasons Hotel Cairo at Nile Plaza.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Tareq & Layla — Royal Wedding Invitation',
    description: 'Join us for the celebration of Tareq & Layla at Four Seasons Nile Plaza Cairo.',
    images: ['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${amiri.variable} ${cormorant.variable} ${outfit.variable}`}
    >
      <body className="font-arabicSans bg-[#040D0A] text-[#F5F9F8] selection:bg-[#8EEBE3]/30">
        {children}
      </body>
    </html>
  );
}
