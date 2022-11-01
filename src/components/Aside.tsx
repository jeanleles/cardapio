
export function Aside() {
    return (
        <aside className='bg-[#252727] mr-4 flex flex-col w-full items-center order-last text-center rounded-md lg:order-first'>
            <img src="/fachada.jpg" className='w-full rounded-t-md' alt="fachada" />

            <div className="p-5 flex flex-col items-center text-center">
                <div className='flex flex-col items-center border-b border-[#575c5c] pb-4'>
                    <p>Siga-nos nas redes sociais</p>
                    <ul className='flex justify-around w-full m-2 px-5'>                        
                        <li className='px-4 hover:opacity-80'>
                            <a href="https://instagram.com/carnedesoldoedu" target="_blank">
                                <img src="/instagram1.png" alt="instagram carne de sol" />
                            </a>
                        </li>
                        <li className='px-4 hover:opacity-80'>
                            <a href="https://www.tiktok.com/@carnedesoldoedu" target="_blank">
                                <img src="/tiktok.png" alt="tiktok carne de sol" />
                            </a>
                        </li>
                        <li className='px-4 hover:opacity-80'>
                            <a href="https://www.facebook.com/carnedesoldoedu" target="_blank">
                                <img src="/facebook.png" alt="facebook carne de sol" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col items-center border-b border-[#575c5c] p-4'>
                    <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5562983432898" className='bg-[#2bc48a] text-white w-[250px] px-8 m-2 h-12 font-semibold flex items-center justify-center gap-2 rounded-md hover:bg-[#51e4ab]' target="_blank">
                        <img src="/whatsapp.png" alt="whatsapp" />
                        Chama no Zap
                    </a>
                    <a href="tel:6232741039" className='bg-sky-800 text-white w-[250px] px-8 m-2 h-12 font-semibold flex items-center justify-center gap-2 rounded-md hover:bg-sky-600'>
                        <img src="/phone-call.png" alt="telefone" />
                        Ligar
                    </a>
                </div>
                <div className='flex flex-col items-center p-4'>
                    <p>
                        Rua Ouro Preto, 413, Qd. 17, Lt. 2<br />
                        Praça Minas Gerais, Jardim Ana Lúcia<br />
                        74.315-220 - Goiânia-GO
                    </p>
                    <a href="https://www.google.com/maps/place/Carne+de+Sol+do+Edu/@-16.7002322,-49.3106263,17z/data=!4m5!3m4!1s0x935ef69141aa6f47:0x4abcdad4bf127b5e!8m2!3d-16.700285!4d-49.310606?hl=pt-BR"
                        className='bg-violet-900 text-white w-[250px] px-8 m-2 h-12 font-semibold flex items-center justify-center gap-2 rounded-md hover:bg-violet-700' 
                        target="_blank">
                        <img src="/local.png" alt="localização" />
                        Localização
                    </a>
                </div>
            </div>
        </aside>
    )
}