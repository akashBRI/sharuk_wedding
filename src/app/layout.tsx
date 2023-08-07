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
      <body className="home page-template page-template-elementor_header_footer page page-id-258 theme-hello-elementor woocommerce-js theplus-preloader elementor-default elementor-template-full-width elementor-kit-7 elementor-page elementor-page-258 e--ua-blink e--ua-chrome e--ua-webkit">{children}</body>
    </html>
  )
}
