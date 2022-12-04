import { Link } from 'react-scroll'

export function MenuTop() {
    return (
        <div id='top' className='flex flex-nowrap justify-start w-full bg-[#121619] uppercase text-[#FAE374] overflow-auto sticky top-[60px] md:justify-between'>
            <Link to="carnes" spy={true} smooth={true} offset={-120} duration={500} className='text-base font-bold cursor-pointer mt-1 mb-1 p-2 bg-[#252727] rounded-lg hover:bg-[#4a4d4d]'>Carnes</Link>
            <Link to="entradas" spy={true} smooth={true} offset={-120} duration={500} className='text-base font-bold cursor-pointer mt-1 mb-1 p-2 bg-[#252727] rounded-lg hover:bg-[#4a4d4d]'>Entradas</Link>
            <Link to="acompanhamentos" spy={true} smooth={true} offset={-120} duration={500} className='text-base font-bold cursor-pointer mt-1 mb-1 p-2 bg-[#252727] rounded-lg hover:bg-[#4a4d4d]'>Acompanhamentos</Link>
            <Link to="porcoes" spy={true} smooth={true} offset={-120} duration={500} className='text-base font-bold cursor-pointer mt-1 mb-1 p-2 bg-[#252727] rounded-lg hover:bg-[#4a4d4d]'>Porções</Link>
            <Link to="bebidas" spy={true} smooth={true} offset={-120} duration={500} className='text-base font-bold cursor-pointer mt-1 mb-1 p-2 bg-[#252727] rounded-lg hover:bg-[#4a4d4d]'>Bebidas</Link>
            <Link to="sobremesas" spy={true} smooth={true} offset={-120} duration={500} className='text-base font-bold cursor-pointer mt-1 mb-1 p-2 bg-[#252727] rounded-lg hover:bg-[#4a4d4d]'>Sobremesas</Link>
        </div>
    )
}