import React, { FC } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import '../styles/global.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp
