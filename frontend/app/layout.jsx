import Head from './cabecera'
import { Nunito } from '@next/font/google'
import './globals.css'

const nunito = Nunito()
//se deberia agregar un subset
export default function RootLayout({ children }) {
  return (
    <html lang="es" className={nunito.className}>
      <Head />
      <body style={{backgroundColor:'#d5cfbe'}}>{children}</body>
    </html>
  )
}
