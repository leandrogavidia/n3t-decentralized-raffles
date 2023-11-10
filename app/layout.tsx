import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'N3T',
  description: 'Decentralized Raffles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
