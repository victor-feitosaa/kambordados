import React from 'react';


export default function Header() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className='px-[86px] py-[22px] flex flex-row items-center bg-verde-claro bege '>
            <div className="w-full flex justify-center items-center lg:justify-start lg:w-1/2 fonte-principal text-[24px]  font-bold cursor-pointer " >
                <p>KamBordados</p>           
            </div>

            <div className='lg:w-1/2'>
                <ul className='hidden lg:visible lg:flex lg:flex-row lg:justify-between lg:font-semibold text-lg ' >
                    
                <li><button className='cursor-pointer' onClick={() => scrollToSection('home')}>Início</button></li>
                <li><button className='cursor-pointer' onClick={() => scrollToSection('produtos')}>Produtos</button></li>
                <li><button className='cursor-pointer' onClick={() => scrollToSection('tamanhos')}>Tamanhos</button></li>
                <li><button className='cursor-pointer' onClick={() => scrollToSection('sobre')}>Sobre</button></li>
                <li><button className='cursor-pointer' onClick={() => scrollToSection('contato')}>Contato</button></li>

                </ul>
            </div>

        </div>
    )
}