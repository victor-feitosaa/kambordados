import React from "react";

export default function HeroSec(){
    return(
        <section className="h-[800px] relative">
            <div className="h-full px-[86px] flex flex-row  bg-verde-claro bege">
                <div className="w-1/2 flex flex-col justify-center items-center gap-[64px]">
                    <h1 className="fonte-principal text-center text-[52px]">Transforme suas memórias em arte!</h1>
                    <div>
                        <button className="bg-laranja-escuro h-[76px] w-[269px] rounded-[42px] shadow-lg font-semibold">
                            FAÇA SEU ORCAMENTO
                        </button>
                    </div>
                </div>

                <div className="w-1/2 flex justify-center items-center">
                    <img src="src\assets\carolsemfundo.png" alt="Foto de Carol" className="bg-laranja-escuro w-[558px] h-[558px] rounded-[100%] shadow-lg relative z-20 " />
                    
                </div>

                <div className="absolute bottom-0 left-0 w-full h-50 bg-verde-escuro  "></div>

                <div className="absolute bottom-0 left-0 w-full h-50 bg-verde-claro rounded-bl-[350px] "></div>
            </div>
        </section>
    )
}