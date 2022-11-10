import { GetStaticProps } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import { Aside } from '../src/components/Aside'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { ItemMenu } from '../src/components/ItemMenu'
import { MenuTop } from '../src/components/MenuTop'

import { GraphQLClient } from 'graphql-request'

interface CarnesProps {
  carnes: [
    id: string,
    title: string,
    description: string,
    price: string,
  ]
}

export const getStaticProps: GetStaticProps = async (context) => {
  const hygraph = new GraphQLClient(
    'https://api-sa-east-1.hygraph.com/v2/cl8kvkg2w263601ulgfni5j80/master'
  );

  const { carnes } = await hygraph.request(
    `
      {
        carnes {
          id
          title
          description
          price
          amountPeople
          photo {
            url
          }
        }
      }
    `
  );

  return {
    props: {
      carnes,
    },
  };
}



const Home = ({ carnes }: CarnesProps) => {
  console.log(carnes)
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
          {            
            carnes.map((carne) => (
              <div className='flex bg-[#252727] justify-between rounded-md mb-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-full'>
                <div className='flex flex-col justify-around p-2 py-2 lg:p-4'>
                  <h2 className='text-base font-bold text-slate-100 md:text-lg'>{carne.title}</h2>
                  <p className='text-xs text-slate-300 md:text-base'>{carne.description}</p>
                  <h2 className='text-sm md:text-lg  text-[#FAE374]'>{carne.price}</h2>
                </div>
                <img src="/CSE01.jpg" alt="carne de sol" className='w-[140px] rounded-tr-lg rounded-br-lg' />
              </div>
            ))
          }

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
