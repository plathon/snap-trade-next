import React, { FC } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp
