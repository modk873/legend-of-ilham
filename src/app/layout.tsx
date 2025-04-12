import type { Metadata } from 'next'
import { Noto_Sans_Arabic } from 'next/font/google'
import './globals.css'

const notoSansArabic = Noto_Sans_Arabic({ subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'أسطورة إلهام - لعبة قتال أسطورية',
  description: 'لعبة قتال فردي تجمع بين القتال السريع واختيار الأسلحة والألوان الشخصية',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={notoSansArabic.className}>
        <main className="min-h-screen bg-gradient-to-b from-dark to-primary">
          {children}
        </main>
      </body>
    </html>
  )
} 