import type { Metadata } from 'next'
import { Header } from '@/components/header'
import './globals.css'

export const metadata: Metadata = {
  title: 'N3T',
  description: 'N3T Decentralized Raffles'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-[1920px] mx-auto">
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  )
}
