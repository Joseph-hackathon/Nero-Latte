import type React from "react"
import "../globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Nero Dashboard</title>
        <meta name="description" content="Nero Dashboard with DeFi portfolio management" />
      </head>
      <body>{children}
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
