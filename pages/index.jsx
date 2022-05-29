import Head from 'next/head'
import Image from 'next/image'
import About from '../src/components/about'
import Contact from './contact'
import Projects from './projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Predrag Glavas</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin='true'></link>
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
      </Head>
        <About />
    </div>
  )
}
