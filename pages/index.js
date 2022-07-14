import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

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
      </main>

      <Footer />
    </div>
  )
}
