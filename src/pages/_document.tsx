import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

type JSXElement = JSX.Element

class MyDocument extends Document {
  render(): JSXElement {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
