import React from 'react';


export default function Header() {
    return (
        <div className='px-[86px] py-[22px] flex flex-row items-center bg-verde-claro bege '>
            <div className="w-full flex justify-center items-center lg:justify-start lg:w-1/2 fonte-principal text-[24px]  font-bold cursor-pointer " >
                <p>KamBordados</p>           
            </div>

            <div className='lg:w-1/2'>
                <ul className='hidden lg:visible lg:flex lg:flex-row lg:justify-between lg:font-semibold text-lg'>
                    
                    <li className='cursor-pointer'><a>Home</a></li>
                    <li className='cursor-pointer'><a>Produtos</a></li>
                    <li className='cursor-pointer'><a>Sobre Mim</a></li>
                    <li className='cursor-pointer'><a>Contato</a></li>

                </ul>
            </div>

        </div>
    )
}