import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/all.min.css"></link>
      </Head>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  ) 
}
