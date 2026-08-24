import type { Metadata } from 'next'
import { Noto_Sans_Georgian } from 'next/font/google'
import './globals.css'

const notoGeorgian = Noto_Sans_Georgian({
  subsets: ['georgian', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SENA — ამხანაგობის ციფრული სისტემა',
  description:
    'ბალანსი, გადახდები, კენჭისყრები, სამეზობლო ჩატი და გადაუდებელი დახმარება — ყველაფერი ერთ აპლიკაციაში, ქართულ ენაზე.',
}

export const viewport = {
  themeColor: '#14151a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ka">
      <body className={notoGeorgian.className}>{children}</body>
    </html>
  )
}
