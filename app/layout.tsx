import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/next"

// Metadata for different languages
const metadataEn: Metadata = {
  /* URL helpers -------------------------------------------------- */
  metadataBase: new URL('https://zaczkie.art'),
  alternates: { canonical: '/' },

  /* Essential tags ---------------------------------------------- */
  title: {
    default: 'Bartosz Żak - Photographer, Designer & Artist',
    template: '%s | Bartosz Żak Portfolio',
  },
  description:
    `Portfolio of Bartosz Żak, a photographer and designer from Poland. Specializing in photography, graphic design, illustration, and poster design. Graduate of Design from Lodz University of Technology.`,

  keywords: [
    'Bartosz Żak', 'photographer', 'designer', 'portfolio', 'Poland',
    'photography', 'graphic design', 'illustration', 'poster design',
    'Lodz University of Technology', 'visual arts', 'creative design',
  ],

  /* Author & ownership ------------------------------------------ */
  authors: [{ name: 'Bartosz Żak' }],
  creator: 'Bartosz Żak',
  other: { publisher: 'RabbitTale' },

  /* Open Graph & Twitter cards ---------------------------------- */
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Bartosz Żak - Photographer, Designer & Artist',
    description:
      `Portfolio of Bartosz Żak, a photographer and designer from Poland. Specializing in photography, graphic design, illustration, and poster design.`,
    siteName: 'Bartosz Żak Portfolio',
    images: [{
      url: '/og.webp',
      alt: 'Bartosz Żak - Photographer, Designer & Artist Portfolio',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bartosz Żak - Photographer, Designer & Artist',
    description:
      `Portfolio of Bartosz Żak, a photographer and designer from Poland. Specializing in photography, graphic design, illustration, and poster design.`,
    images: ['/og.webp'],
    creator: '@zaczkie',
  },

  /* Robots / format detection ----------------------------------- */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
}

const metadataPl: Metadata = {
  /* URL helpers -------------------------------------------------- */
  metadataBase: new URL('https://zaczkie.art'),
  alternates: { canonical: '/' },

  /* Essential tags ---------------------------------------------- */
  title: {
    default: 'Bartosz Żak - Fotograf, Projektant & Artysta',
    template: '%s | Portfolio Bartosza Żaka',
  },
  description:
    `Portfolio Bartosza Żaka, fotografa i projektanta z Polski. Specjalizuje się w fotografii, projektowaniu graficznym, ilustracji i projektowaniu plakatów. Absolwent Wzornictwa na Politechnice Łódzkiej.`,

  keywords: [
    'Bartosz Żak', 'fotograf', 'projektant', 'portfolio', 'Polska',
    'fotografia', 'projektowanie graficzne', 'ilustracja', 'projektowanie plakatów',
    'Politechnika Łódzka', 'sztuki wizualne', 'projektowanie kreatywne',
  ],

  /* Author & ownership ------------------------------------------ */
  authors: [{ name: 'Bartosz Żak' }],
  creator: 'Bartosz Żak',
  other: { publisher: 'RabbitTale' },

  /* Open Graph & Twitter cards ---------------------------------- */
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: '/',
    title: 'Bartosz Żak - Fotograf, Projektant & Artysta',
    description:
      `Portfolio Bartosza Żaka, fotografa i projektanta z Polski. Specjalizuje się w fotografii, projektowaniu graficznym, ilustracji i projektowaniu plakatów.`,
    siteName: 'Portfolio Bartosza Żaka',
    images: [{
      url: '/og.webp',
      alt: 'Bartosz Żak - Fotograf, Projektant & Artysta Portfolio',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bartosz Żak - Fotograf, Projektant & Artysta',
    description:
      `Portfolio Bartosza Żaka, fotografa i projektanta z Polski. Specjalizuje się w fotografii, projektowaniu graficznym, ilustracji i projektowaniu plakatów.`,
    images: ['/og.webp'],
    creator: '@zaczkie',
  },

  /* Robots / format detection ----------------------------------- */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Export both metadata objects for use in pages
export { metadataEn, metadataPl };

// Default to English metadata
export const metadata: Metadata = metadataEn;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col select-none cursor-none`}
      >
        <Analytics />
        <LanguageProvider>
          <div className="flex flex-col min-h-dvh">
            <Header />
            {children}
            <Footer />
          </div>
          <LanguageSelector variant="floating" />
          <CustomCursor />
        </LanguageProvider>
      </body>
    </html>
  );
}
