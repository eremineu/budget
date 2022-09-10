import { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className="app">
        <CssBaseline />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
