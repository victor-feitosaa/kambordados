import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function Contato() {
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: contentRef, inView: contentInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: buttonsRef, inView: buttonsInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: birdRef, inView: birdInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <section className="flex  justify-center items-center min-h-screen bege bg-verde-escuro px-6 lg:px-[86px] py-10 lg:py-0 z-20 ">
            <div className="w-full lg:w-[60%] max-w-6xl">
                {/* Título */}
                <div ref={titleRef} className={`w-full mb-8 lg:mb-15 transition-opacity duration-1000 ${titleInView ? 'animate-fade animate-once animate-duration-[1550ms]' : 'opacity-0'}`}>
                    <h2 className="fonte-principal text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-10 text-center lg:text-left">
                        Entre em contato
                    </h2>
                    <span className="font-bold text-2xl sm:text-3xl text-center lg:text-left block">
                        Entregamos para todo Brasil!
                    </span>
                </div>

                {/* Conteúdo */}
                <div ref={contentRef} className={`transition-opacity duration-1000 ${contentInView ? 'animate-fade animate-once animate-duration-[1550ms]' : 'opacity-0'}`}>
                    <p className="mt-6 lg:mt-8 font-semibold text-xl sm:text-2xl text-left">
                        Para clientes do Acre:
                    </p>
                    <ul className="list-disc px-10 text-md sm:text-xl">
                        <li>O valor do frete varia (R$5 - R$20), dependendo do bairro ou município.</li>
                    </ul>
                    <p className="mt-6 lg:mt-8 font-semibold text-xl sm:text-2xl  text-left">
                        Para outros estados:
                    </p>
                    <ul className="list-disc px-10 text-md sm:text-xl">
                        <li>O envio é realizado via PAC-Correios (para produtos maiores) e Mini Envio (para chaveiros).</li>
                        <li>O valor do frete varia (R$10 - R$60), dependendo do estado de destino.</li>
                        <li>Quer saber o valor exato do frete? Envie seu CEP por DM ou WhatsApp que calculamos para você!</li>
                    </ul>
                </div>

                {/* Botões */}
                <div ref={buttonsRef} className={`w-full flex flex-col-reverse sm:flex-row gap-8 lg:gap-[40px] items-center justify-center mt-10 lg:mt-15 transition-opacity duration-1000 ${buttonsInView ? 'animate-fade animate-once animate-duration-[1550ms]' : 'opacity-0'}`}>
                    <div>
                        <a href="https://wa.me/556899710654" target="_blank">
                            <button className="flex  gap-4 px-13 sm:px-10  border-b-green-100 border-7 lg:shadow-2xl text-xl sm:text-2xl font-bold items-center h-[80px] sm:h-[100px] w-full sm:w-[280px] lg:w-[320px] rounded-[150px] cursor-pointer text-white bg-gradient-to-r from-green-400 to-lime-500 hover:bg-gradient-to-l hover:from-green-300 hover:to-lime-400 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-teal-700">
                                <IoLogoWhatsapp className="w-8 h-8 sm:w-10 sm:h-10" />
                                WhatsApp
                                <FaExternalLinkAlt className="w-6 h-6" />
                            </button>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.instagram.com/kambordados/" target="_blank">
                            <button className="flex gap-4 px-13 sm:px-10 border-b-pink-100 border-7 lg:shadow-2xl text-xl sm:text-2xl font-bold items-center h-[80px] sm:h-[100px] w-full sm:w-[280px] lg:w-[320px] rounded-[150px] cursor-pointer text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                <FaInstagram className="w-8 h-8 sm:w-10 sm:h-10" />
                                Instagram
                                <FaExternalLinkAlt className="w-6 h-6" />                
                            </button> 
                        </a>
                    </div>
                </div>

            </div >

            <div className="lg:w-[40%]  scale-[100%] " ref={birdRef}>
                <img src="assets/bird.jpg" className={`hidden w-full lg:flex lg:justify-center lg:items-center lg:visible max-w-6xl rounded-[20px] shadow-2xl transition-opacity duration-1000 ${birdInView ? 'animate-fade animate-once animate-duration-[1550ms]' : 'opacity-0'}`}/>
            </div>

        </section>
    );
} 