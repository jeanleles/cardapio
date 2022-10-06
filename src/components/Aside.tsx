
export function Aside() {
    return (
        <aside className='bg-[#252727] mr-4 p-5 flex flex-col items-center text-center rounded-md'>
            <div className='flex flex-col items-center border-b border-slate-400 pb-4'>
                <img src="/logo-sol.png" className='w-40' alt="logo-cse" />
                <h2 className='font-bold text-3xl text-[#F4F2ED] mb-5'>Carne de Sol do Edu</h2>
                <p>Siga-nos nas redes sociais</p>
                <ul className='flex justify-around w-full m-2 px-5'>
                    <li className='px-4'>
                        <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5562983432898" target="_blank">
                            <img src="/whatsapp.png" alt="whatsapp-cse" />
                        </a>
                    </li>
                    <li className='px-4'>
                        <a href="tel:6232741039">
                            <img src="/phone-call.png" alt="telefone-cse" />
                        </a>
                    </li>
                    <li className='px-4'>
                        <a href="https://instagram.com/carnedesoldoedu" target="_blank">
                            <img src="/instagram.png" alt="instagram-cse" />
                        </a>
                    </li>
                    <li className='px-4'>
                        <a href="tel:6232741039">
                            <img src="/phone-call.png" alt="telefone-cse" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col items-center border-b border-slate-400 p-4'>
                <button type="submit" className='bg-[#2bc48a] text-white w-[250px] px-8 m-2 h-12 font-semibold flex items-center justify-center gap-2 rounded-md hover:bg-emerald-700'>
                    <img src="/whatsapp.png" alt="whatsapp" />
                    Chama no Zap
                </button>
                <button type="submit" className='bg-[#F0D870] text-white w-[250px] px-8 m-2 h-12 font-semibold flex items-center justify-center gap-2 rounded-md hover:bg-[#e9c72f]'>
                    <img src="/phone-call.png" alt="telefone" />
                    Ligar
                </button>
            </div>
            <div className='flex flex-col items-center p-4'>
                <p>
                    Rua Ouro Preto, 413, Qd. 17, Lt. 2<br />
                    Praça Minas Gerais, Jardim Ana Lúcia<br />
                    74.315-220 - Goiânia-GO
                </p>
                <button type="submit" className='bg-orange-400 text-white w-[250px] px-8 m-2 h-12 font-semibold flex items-center justify-center gap-2 rounded-md hover:bg-emerald-700'>
                    <img src="/local.png" alt="localização" />
                    Localização
                </button>
            </div>
        </aside>
    )
}