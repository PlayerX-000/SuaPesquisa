import './styles/globals.css'
import Head from 'next/head';

function Aplicacao({ Component, pageProps }) {
  return (
    <>
    <Head>
  <title>SuaPesquisa.com</title>
</Head>
  <Component {...pageProps} />
  </>
  )
}

export default Aplicacao
