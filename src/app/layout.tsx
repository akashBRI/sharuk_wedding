import './globals.css'
import type { Metadata } from 'next'


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
      <body style={{margin:0}} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
