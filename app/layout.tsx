import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import './globals.css'

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mulish',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Row Quintero Studio | Sitios Web Estratégicos',
  description:
    'Diseño web estratégico que convierte visitantes en clientes. Combinamos 10 años de experiencia senior con la agilidad de la IA para diseñar sitios web que son verdaderos activos de marca.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={mulish.variable}>
      <body className={mulish.className}>{children}</body>
    </html>
  )
}
