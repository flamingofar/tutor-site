import { Html, Head, Main, NextScript } from 'next/document';
import Header from '../modules/Header/Header';
import Footer from '../modules/Footer/Footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex flex-col min-h-screen">
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
