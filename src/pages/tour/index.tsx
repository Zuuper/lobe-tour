import type { NextPage } from 'next'
import Head from 'next/head'
import Thumbnail from '../assets/images/Video.jpg'
import Image from 'next/future/image'
import { Footer, Header } from '../../components/navigations'
import { ButtonDefault } from '../../components/button'
const Home: NextPage = () => {
  return (
    <div className='relative'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className='container mx-auto text-stone-700 md:max-w-4xl lg:max-w-7xl px-8 md:px-16 flex flex-col gap-10 mb-16'>
        <section aria-labelledby='about-us'>
          <h1 className='text-4xl md:text-6xl mb-4 text-center font-bold'> Lobe <span className='text-emerald-400'>Tour</span> </h1>
          <p className="text-center text-lg md:text-2xl">Build your first machine learning model in ten minutes. No code or experience required.</p>
        </section>
        <section aria-labelledby='video-tour' className='rounded-2xl hover:scale-105 hover:shadow-2xl  h-fit w-fit transform ease-in-out duration-300 mb-4 md:mb-10'>
          <Image src={Thumbnail} alt="video thumbnail" className='rounded-2xl'/>
        </section>
        <section className='call-to-action text-center '>
          <h1 className='text-4xl mb-16 font-bold lg:px-52'>Train yout app with Lobe</h1>
          <ButtonDefault title='download' className='text-white bg-emerald-400 text-lg capitalize'/>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
