import Head from 'next/head'
import About from '../src/components/about'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Predrag Glavas</title>
        <meta name="google-site-verification" content="900a7fag5_0syZn3-Gp3H8ETdYj15lDpmoMyGwuoOog" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin='true'></link>
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
      </Head>
      <About />
    </div>
  )
}
