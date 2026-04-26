import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vimaranes Hoje - Notícias de Guimarães',
  description: 'O seu portal de notícias local de Guimarães. Fique a par dos últimos acontecimentos, eventos e novidades da cidade berço.',
  keywords: 'Vimaranes Hoje, notícias Guimarães, acontecimentos Guimarães, eventos Guimarães, cidade berço, vimaranenses',
  authors: [{ name: 'Vimaranes Hoje' }],
  openGraph: {
    title: 'Vimaranes Hoje',
    description: 'Portal de notícias local de Guimarães',
    type: 'website',
    locale: 'pt_PT',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}