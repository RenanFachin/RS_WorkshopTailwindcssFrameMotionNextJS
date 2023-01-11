import '../styles/tailwind.css'
import '../styles/globals.css'
import { AppProps } from 'next/app'

import { Inter } from '@next/font/google'


const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500' ,'700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
