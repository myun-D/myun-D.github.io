import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { MDXProvider } from '@mdx-js/react'
import path from 'path'

let fs = require('fs');

export default function Home() {

  return (
    <MDXProvider>
      <h1>
        메인 페이지!!!!
      </h1>
    </MDXProvider>
  )
}

export const getStaticProps = async() => {
  const files = fs.readdirSync(path.join('','posts'))

  console.log(files)
  
  return {
    props: {
      
    }
  }
}
