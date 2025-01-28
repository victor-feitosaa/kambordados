import React from "react";

export default function Sobre() {
  return (
    <section className="min-h-screen bg-verde-claro fonte-secundaria flex flex-col lg:flex-row relative overflow-hidden">
      {/* Div decorativa superior */}
      <div className="bg-verde-claro w-full h-[20vh] lg:h-[30vh] absolute top-0 rounded-tl-[350px] z-10"></div>
      <div className="bg-verde-escuro w-full h-[20vh] lg:h-[30vh] absolute top-0 z-5"></div>

      {/* Div decorativa inferior */}
      <div className="bg-verde-claro w-full h-[20vh] lg:h-[30vh] absolute bottom-0 rounded-bl-[350px] z-10"></div>
      <div className="bg-verde-escuro w-full h-[20vh] lg:h-[30vh] absolute bottom-0 z-5"></div>

      {/* Conteúdo principal */}
      <div className="flex flex-1 flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-[86px] relative z-20">
        {/* Imagem */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="src/assets/carolsemfundo.png"
            alt="Foto de Carol"
            className="bg-laranja-escuro w-[70%] max-w-[558px] rounded-full shadow-lg"
          />
        </div>

        {/* Texto */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
          <h2 className="fonte-principal text-4xl lg:text-5xl">Sobre Mim</h2>
          <div className="text-lg lg:text-2xl leading-relaxed">
            <p>
              Me chamo Caroline Bandeira, eu sou a artista responsável por eternizar momentos por meio de bordados afetivos. Bordo desde dezembro de 2020, e desde então já fiz 250 bordados.
            </p>
            <p>
              Sou Acreana, apaixonada pela cultura do Norte, e graduanda em Pedagogia na Ufac, com uma grande paixão pela educação. Como artista estou sempre em busca de evolução para entregar trabalhos de ótima qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
