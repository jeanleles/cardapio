import type { NextPage } from 'next'
import Head from 'next/head'
import { Aside } from '../src/components/Aside'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { ItemMenu } from '../src/components/ItemMenu'
import { MenuTop } from '../src/components/MenuTop'

import { GraphQLClient } from 'graphql-request'



const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center w-full">
      <Head>
        <title>Cardápio | Carne de Sol do Edu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-start px-2 py-6 mt-14 w-full lg:flex-row lg:w-[1010px]">
        <Aside />
        <div className='flex flex-col w-full'>
          <MenuTop />
          <h2 className='text-2xl text-white uppercase font-bold my-2'>Carnes</h2>
          <ItemMenu />
          <ItemMenu />
          <ItemMenu />
          <ItemMenu />
          <ItemMenu />
          <ItemMenu />
          <ItemMenu />
          <ItemMenu />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
