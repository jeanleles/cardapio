export function ItemMenu() {
    return (
        <div className='flex bg-[#252727] justify-between rounded-md mb-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-full'>
            <div className='flex flex-col justify-around p-2 py-2 lg:p-4'>
                <h2 className='text-base font-bold text-slate-100 md:text-lg'>1/2 Carne de Sol Simples</h2>
                <p className='text-xs text-slate-300 md:text-base'>Acompanha: Mandioca e manteiga do sertão. Meia porção serve serve 3 pessoas.</p>
                <h2 className='text-sm md:text-lg  text-[#FAE374]'>R$108,00</h2>
            </div>
            <img src="/CSE01.jpg" alt="carne de sol" className='w-[140px] rounded-tr-lg rounded-br-lg' />
        </div>
    )
}