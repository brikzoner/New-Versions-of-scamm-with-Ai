import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'AI Scam Awareness - Protect Yourself from AI-Powered Fraud',
    template: '%s | AI Scam Awareness',
  },
  description: 'Learn about AI-powered scams and fraud. Detect deepfakes, voice spoofing, phishing attacks, and more with our educational platform.',
  keywords: ['AI scams', 'deepfake', 'voice spoofing', 'phishing', 'fraud detection', 'cybersecurity', 'AI fraud', 'scam detection', 'online safety'],
  authors: [{ name: 'AI Scam Awareness' }],
  creator: 'AI Scam Awareness',
  publisher: 'AI Scam Awareness',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'AI Scam Awareness - Protect Yourself from AI-Powered Fraud',
    description: 'Learn about AI-powered scams and fraud. Detect deepfakes, voice spoofing, phishing attacks, and more.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AI Scam Awareness',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Scam Awareness',
    description: 'Protect yourself from AI-powered fraud and scams',
  },
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
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

