//FIXME: linter should warn here
import { AppProps, AppInitialProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const test = 123; //FIXME: linter should warn here
  return (
    <>
      <Head>
        <title>Welcome to test!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
