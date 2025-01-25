import React from 'react';


export default function Header() {
    return (
        <div className='px-[86px] pt-[22px] flex flex-row items-center bg-verde-claro bege'>
            <div className="w-1/2 fonte-principal text-[24px] font-bold" >
                <p>KamBordados</p>           
            </div>

            <div className=' w-1/2'>
                <ul className='flex flex-row justify-between font-semibold'>
                    
                    <li><a>Home</a></li>
                    <li><a>Produtos</a></li>
                    <li><a>Sobre Mim</a></li>
                    <li><a>Contato</a></li>

                </ul>
            </div>

        </div>
    )
}