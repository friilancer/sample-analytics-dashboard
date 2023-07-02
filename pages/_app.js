import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="Dashboard" content="Dashboard" />
        <link rel="icon" href="/assets/icons/logo.png" />
      </Head>
      <Layout {...pageProps}>
        <Component />
      </Layout>
    </>
  )
}

export default MyApp
