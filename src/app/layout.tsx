import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sharuk & Misbha Wedding invitation',
  description: "Shahrukh & Misbah's Wedding on 17th September 2023 at the Municipal Town Hall, Thalassery.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
      <body style={{margin:0}}>{children}</body>
    </html>
  )
}
