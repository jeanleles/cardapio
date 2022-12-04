
export function Header() {
    return (
        <header className='w-full text-white flex justify-center bg-[#191a1a] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] fixed'>
            <div className='w-full flex items-center lg:w-[1020px] justify-between'>
                <a href="/" className="flex items-center">
                    <img src="/logo-sol.png" className="w-[70px] py-2" alt="Logo Carne de Sol do Edu" />
                    <h1 className="hidden font-bold text-4xl text-[#FAE374] md:flex">Carne de Sol do Edu</h1>
                </a>
                {/* <div className="border rounded-md p-1 flex items-center">
                    <input type="search" className="w-full bg-transparent outline-none px-1" placeholder="Pesquisar..." />
                    <button>
                        <img src="/search.png" alt="search" />
                    </button>
                </div> */}
                <ul className='flex'>
                    <li className='px-4 hover:opacity-80'>
                        <a href="tel:6232741039">
                            <img src="/phone-call.png" alt="telefone-cse" />
                        </a>
                    </li>
                    <li className='px-2 hover:opacity-80'>
                        <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5562983432898" target="_blank">
                            <img src="/whatsapp.png" alt="whatsapp-cse" />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}