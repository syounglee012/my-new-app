import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sam Lee</title>
        <meta name="description" content="A lawfrim website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
