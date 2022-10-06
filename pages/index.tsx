import type { NextPage } from 'next'
import Head from 'next/head'
import { Aside } from '../src/components/Aside'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { MenuItem } from '../src/components/MenuItem'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>Cardápio | Carne de Sol do Edu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex items-start w-[1010px] py-6 mt-14">
        <Aside />
        <div className='flex flex-col'>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
