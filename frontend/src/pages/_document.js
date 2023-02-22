import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from "../modules/Header/Header";
import { Footer } from "../modules/Footer/Footer"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
