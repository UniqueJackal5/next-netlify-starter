import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import {BsGithub, BsYoutube} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>This is Santosh Adhikari aka UJ5!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Santosh Adhikari website under construction" />
        <p className="description">
         Thank you for visiting.
          You can contact me ASAP through email at santoshadhikari486@gmail.com
        </p>
        <div className="links">
          <a target="_blank" href="https://github.com/UniqueJackal5"><BsGithub size={30}/></a>                   
          <a target="_blank" href="https://www.youtube.com/channel/UCe3q73KaQVdFVcqPuAdXQkA"><BsYoutube size={30}/></a>
          <a target="_blank" href="https://www.instagram.com/santosh18_/"><FaInstagram size={30}/></a>	  
        </div>
      </main>

      <Footer />
    </div>
  )
}
