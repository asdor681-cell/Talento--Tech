import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: 'Cauca Raiz | Propiedades en el Cauca',
  description: 'Encuentra tu casa, lote o parcela ideal en el Cauca. Compra facil, rapido y con asesoria personalizada.',
  keywords: ['propiedades', 'cauca', 'popayan', 'lotes', 'casas', 'parcelas', 'bienes raices', 'colombia'],
  openGraph: {
    title: 'Cauca Raiz | Propiedades en el Cauca',
    description: 'Encuentra tu propiedad ideal en el Cauca',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#4a7c59',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
