import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Aside } from '../src/components/Aside'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { ItemMenu } from '../src/components/ItemMenu'
import { MenuTop } from '../src/components/MenuTop'
import { Link } from 'react-scroll'

import { GraphQLClient } from 'graphql-request'

interface CardProps {
  cardapios: [
    id: string,
    title: string,
    description: string,
    price: string,
    photo: [
      url: string,
    ],
    categoria: [
      title: string,
      slug: string
    ]
  ]
}

export const getStaticProps: GetStaticProps = async (context) => {
  const hygraphAPI = process.env.NEXT_PUPBLIC_HYGRAPH_ENDPOINT
  const hygraph = new GraphQLClient(`${hygraphAPI}`);

  //CARNES
  const { cardapios } = await hygraph.request(
    `
      {
        cardapios(first: 100) {
          id
          title
          description
          price
          photo {
            url
          }
          categoria {
            title
            slug
          }
        }
      }
    `
  );

  return {
    props: {
      cardapios,
    },
  };
}

const Home = ({ cardapios }: CardProps) => {
  console.log(cardapios)
  return (
    <div className="flex min-h-screen flex-col items-center w-full">
      <Head>
        <title>Cardápio | Carne de Sol do Edu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-start justify-center px-2 py-6 mt-14 w-full lg:flex-row lg:w-[1020px]">
        <Aside />
        <div className='flex flex-col w-full'>
          <MenuTop />
          <h2 id='carnes' className='text-2xl text-white uppercase font-bold my-2 mx-1'>Carnes</h2>
          {
            cardapios.map(item => {
              if (item.categoria.title === 'Carnes') {
                return (
                  <div key={item.id} className='flex bg-[#252727] justify-between rounded-md mb-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-full'>
                    <div className='flex flex-col justify-between p-2 py-2 lg:p-4'>
                      <h2 className='text-base font-bold text-slate-100 md:text-lg'>{item.title}</h2>
                      <p className='text-xs text-slate-300 md:text-base'>{item.description}</p>
                      <h2 className='text-sm md:text-lg text-[#FAE374]'>R$ {item.price}</h2>
                    </div>
                    <img src={item.photo.url} alt="carne de sol" className='w-[140px] rounded-tr-lg rounded-br-lg' />
                  </div>
                )
              }
            }
            )
          }

          <h2 id='entradas' className='text-2xl text-white uppercase font-bold my-2 mx-1'>Entradas</h2>
          {
            cardapios.map(item => {
              if (item.categoria.title === 'Entradas') {
                return (
                  <div key={item.id} className='flex bg-[#252727] justify-between rounded-md mb-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-full'>
                    <div className='flex flex-col justify-between p-2 py-2 lg:p-4'>
                      <h2 className='text-base font-bold text-slate-100 md:text-lg'>{item.title}</h2>
                      <p className='text-xs text-slate-300 md:text-base'>{item.description}</p>
                      <h2 className='text-sm md:text-lg text-[#FAE374]'>R$ {item.price}</h2>
                    </div>
                    <img src={item.photo.url} alt="carne de sol" className='w-[140px] rounded-tr-lg rounded-br-lg' />
                  </div>
                )
              }
            }
            )
          }

          <h2 id='acompanhamentos' className='text-2xl text-white uppercase font-bold my-2 mx-1'>Acompanhamentos</h2>
          {
            cardapios.map(item => {
              if (item.categoria.title === 'Acompanhamentos') {
                return (
                  <div key={item.id} className='flex bg-[#252727] justify-between rounded-md mb-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-full'>
                    <div className='flex flex-col justify-between p-2 py-2 lg:p-4'>
                      <h2 className='text-base font-bold text-slate-100 md:text-lg'>{item.title}</h2>
                      <p className='text-xs text-slate-300 md:text-base'>{item.description}</p>
                      <h2 className='text-sm md:text-lg text-[#FAE374]'>R$ {item.price}</h2>
                    </div>
                    <img src={item.photo.url} alt="carne de sol" className='w-[140px] rounded-tr-lg rounded-br-lg' />
                  </div>
                )
              }
            }
            )
          }

          <h2 id='porcoes' className='text-2xl text-white uppercase font-bold my-2' mx-1>Porções</h2>
          {
            cardapios.map(item => {
              if (item.categoria.title === 'Porções') {
                return (
                  <div key={item.id} className='flex bg-[#252727] justify-between rounded-md mb-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-full'>
                    <div className='flex flex-col justify-between p-2 py-2 lg:p-4'>
                      <h2 className='text-base font-bold text-slate-100 md:text-lg'>{item.title}</h2>
                      <p className='text-xs text-slate-300 md:text-base'>{item.description}</p>
                      <h2 className='text-sm md:text-lg text-[#FAE374]'>R$ {item.price}</h2>
                    </div>
                    <img src={item.photo.url} alt="carne de sol" className='w-[140px] rounded-tr-lg rounded-br-lg' />
                  </div>
                )
              }
            }
            )
          }

          <h2 id='bebidas' className='text-2xl text-white uppercase font-bold my-2 mx-1'>Bebidas</h2>
          {
            cardapios.map(item => {
              if (item.categoria.title === 'Bebidas') {
                return (
                  <div key={item.id} className='flex bg-[#252727] justify-between rounded-md mb-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-full'>
                    <div className='flex flex-col justify-between p-2 py-2 lg:p-4'>
                      <h2 className='text-base font-bold text-slate-100 md:text-lg'>{item.title}</h2>
                      <p className='text-xs text-slate-300 md:text-base'>{item.description}</p>
                      <h2 className='text-sm md:text-lg text-[#FAE374]'>R$ {item.price}</h2>
                    </div>
                    <img src={item.photo.url} alt="carne de sol" className='w-[140px] rounded-tr-lg rounded-br-lg' />
                  </div>
                )
              }
            }
            )
          }

          <h2 id='sobremesas' className='text-2xl text-white uppercase font-bold my-2 mx-1'>Sobremesas</h2>
          {
            cardapios.map(item => {
              if (item.categoria.title === 'Sobremesas') {
                return (
                  <div key={item.id} className='flex bg-[#252727] justify-between rounded-md mb-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-full'>
                    <div className='flex flex-col justify-between p-2 py-2 lg:p-4'>
                      <h2 className='text-base font-bold text-slate-100 md:text-lg'>{item.title}</h2>
                      <p className='text-xs text-slate-300 md:text-base'>{item.description}</p>
                      <h2 className='text-sm md:text-lg text-[#FAE374]'>R$ {item.price}</h2>
                    </div>
                    <img src={item.photo.url} alt="carne de sol" className='w-[140px] rounded-tr-lg rounded-br-lg' />
                  </div>
                )
              }
            }
            )
          }
        </div>
      </main>

      <Link to="carnes" spy={true} smooth={true} offset={-140} duration={500}>
        <button className=' bg-[#FAE374] p-2 bottom-4 right-4 fixed border-none rounded-full hover:bg-amber-400 transition-all'><img src="/back-to-top.png" alt="to top" /></button>
      </Link>

      <Footer />
    </div>
  )
}

export default Home
