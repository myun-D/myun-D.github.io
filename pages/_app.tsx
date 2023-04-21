import Head from 'next/head'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import '@/styles/fonts.css'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  ) 
}