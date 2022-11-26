export function MenuTop() {
    return (
        <div className='flex flex-nowrap justify-start w-full uppercase rounded-md text-[#FAE374] overflow-auto md:justify-around'>
            <a href="#carnes" className='text-lg font-bold m-1 p-2 bg-[#252727] rounded-lg hover:bg-[#4a4d4d]'>Carnes</a>
            <a href="#entradas" className='text-lg font-bold m-1 p-2 bg-[#252727] rounded-lg hover:bg-[#4a4d4d]'>Entradas</a>
            <a href="#acompanhamentos" className='text-lg font-bold m-1 p-2 bg-[#252727] rounded-lg hover:bg-[#4a4d4d]'>Acompanhamentos</a>
            <a href="#porcoes" className='text-lg font-bold m-1 p-2 bg-[#252727] rounded-lg hover:bg-[#4a4d4d]'>Porções</a>
            <a href="#bebidas" className='text-lg font-bold m-1 p-2 bg-[#252727] rounded-lg hover:bg-[#4a4d4d]'>Bebidas</a>
            <a href="#sobremesas" className='text-lg font-bold m-1 p-2 bg-[#252727] rounded-lg hover:bg-[#4a4d4d]'>Sobremesas</a>
        </div>
    )
}