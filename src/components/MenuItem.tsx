export function MenuItem() {
    return (
        <div className='flex bg-[#252727] rounded-md mb-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <div className='flex flex-col justify-around px-4 py-2'>
                <h2 className='text-xl font-bold text-slate-100'>1/2 Carne de Sol Simples</h2>
                <p className='text-sm'>Acompanha: Mandioca e manteiga do sertão. Meia porção serve serve 3 pessoas e porção inteira serve 4 pessoas</p>
                <h2 className='text-lg  text-yellow-200'>R$108,00</h2>
            </div>
            <img src="/CSE01.jpg" alt="carne de sol" className='w-[150px] rounded-tr-lg rounded-br-lg' />
        </div>
    )
}