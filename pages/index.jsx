import Head from 'next/head'
import Image from 'next/image'
import About from '../src/components/about'
import Contact from '../src/components/contact'
import Projects from '../src/components/projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ReactJS with reactstrap</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div id='about'>
        <About />
      </div>
      <div id='projects'>
        <Projects/>
      </div>
      <div id='contact'>
        <Contact/>
      </div>
    </div>
  )
}
