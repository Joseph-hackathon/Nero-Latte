import type { Metadata } from 'next'
import "../globals.css"
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Nero Dashboard',
  description: 'Nero Dashboard with DeFi portfolio management',
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
