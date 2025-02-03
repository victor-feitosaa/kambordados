import React from "react";
import { useInView } from "react-intersection-observer";

export default function Sobre() {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: floresRef, inView: floresInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="min-h-screen bg-verde-claro fonte-secundaria flex flex-col lg:flex-row relative  bege">
      {/* Div decorativa superior */}
      <div className="bg-verde-claro w-1/2 h-64 absolute top-0 rounded-tl-[350px] z-10"></div>
      <div className="bg-verde-escuro w-1/2 h-64 absolute top-0 z-5"></div>

      {/* Div decorativa inferior */}
      <div className="bg-verde-claro w-full h-[20vh] lg:h-[30vh] absolute bottom-0 rounded-bl-[350px] z-10"></div>
      <div className="bg-verde-escuro w-full h-[20vh] lg:h-[30vh] absolute bottom-0 z-5"></div>


      <img ref={floresRef} src="assets/floresbg2.png" className={`absolute z-20 -top-16 lg:-top-30 right-0   h-[20vh] lg:h-[45vh]  transition-opacity duration-1000 ${
              floresInView
                ? "animate-fade animate-once animate-duration-[1550ms]"
                : "opacity-0"
            }`} />


      {/* Conteúdo principal */}
      <div className="flex flex-1 flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-[86px] relative z-20">
        {/* Imagem */}
        <div ref={imgRef} className="w-full lg:w-1/2 flex justify-center">
          <img
            src="assets\carolsemfundo2.png"
            alt="Foto de Carol"
            className={`bg-laranja-escuro w-[40%] lg:w-[70%] max-w-[558px] rounded-[100%] shadow-lg transition-opacity duration-1000 ${
              imgInView
                ? "animate-fade animate-once animate-duration-[1550ms]"
                : "opacity-0"
            }`}
          />
        </div>

        {/* Texto */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
          <h2
            ref={titleRef}
            className={`fonte-principal text-3xl lg:text-4xl text-center transition-opacity duration-1000 ${
              titleInView
                ? "animate-fade animate-once animate-duration-[1550ms]"
                : "opacity-0"
            }`}
          >
            Sobre Mim
          </h2>
          <div
            ref={textRef}
            className={`text-md lg:text-xl leading-relaxed text-center flex flex-col justify-center transition-opacity duration-1000 ${
              textInView
                ? "animate-fade animate-once animate-duration-[1550ms]"
                : "opacity-0"
            }`}
          >
            <p>
              Me chamo Caroline Bandeira, eu sou a artista responsável por
              eternizar momentos por meio de bordados afetivos. Bordo desde
              dezembro de 2020, e desde então já fiz mais de 250 bordados.
            </p>
            <p>
              Sou Acreana, apaixonada pela cultura do Norte, e graduanda em
              Pedagogia na Ufac, com uma grande paixão pela educação. Como
              artista estou sempre em busca de evolução para entregar trabalhos
              de ótima qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}