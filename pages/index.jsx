import Head from 'next/head'
import Image from 'next/image'
import About from '../src/components/about'
import Contact from './contact'
import Projects from './projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ReactJS with reactstrap</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
        <About />
    </div>
  )
}
