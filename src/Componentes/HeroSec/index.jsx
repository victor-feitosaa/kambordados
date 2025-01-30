import React from "react";

export default function HeroSec() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <section className="h-[600px] lg:h-[800px] relative overflow-hidden ">
            <div className="h-full px-[86px] flex flex-row  bg-verde-claro bege ">

                {/* Conteúdo principal */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-[64px] relative z-20 animate-fade-right animate-once">
                    <h1 className="fonte-principal text-center text-4xl md:text-5xl lg:text-[52px] md:leading-20">Transforme suas memórias em arte!</h1>
                    <div>
                        <button className="bg-[#bc6c25] hover:bg-[#a05b1f] h-[76px] w-[200px] md:h-[76px] md:w-[269px] rounded-[42px] shadow-lg font-bold cursor-pointer fonte-secundaria text-xs lg:text-lg" onClick={() => scrollToSection('contato')}>
                            FAÇA SEU ORÇAMENTO
                        </button>
                    </div>
                </div>

                {/* Imagem (visível apenas em telas grandes) */}
                <div className="hidden lg:w-1/2 lg:flex lg:justify-center lg:items-center lg:visible">
                    <img
                        src="assets\carolsemfundo.png"
                        alt="Foto de Carol"
                        className="bg-laranja-escuro w-full h-auto max-w-[558px] mx-auto rounded-[100%] shadow-lg relative z-20 animate-fade-left animate-once"
                    />
                </div>

                {/* Divs decorativas no canto inferior esquerdo */}
                <div className="absolute bottom-0 left-0 w-1/2 h-64 bg-verde-escuro z-5"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-64 bg-verde-claro rounded-bl-[350px] z-10"></div>
            </div>
        </section>
    );
}