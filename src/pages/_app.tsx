import '../styles/tailwind.css'
import '../styles/globals.css'
import { AppProps } from 'next/app'

import { Layout } from '../components/Layout'
import { AnimateSharedLayout } from 'framer-motion'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  )
}
