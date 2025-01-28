import React from "react";
import Card from "../Card";

export default function Produtos() {
    return (
        <section className="min-h-screen px-8 md:px-20 flex flex-col justify-center items-center bg-verde-escuro bege fonte-secundaria relative overflow-hidden">

            {/* Divs decorativas no topo direito */}
            <div className="bg-verde-escuro w-1/2 h-64 absolute top-0 right-0 rounded-tr-[350px] z-10"></div>
            <div className="bg-verde-claro w-1/2 h-64 absolute top-0 right-0  z-5"></div>

            {/* Conteúdo principal */}
            <div className="text-center py-20 z-20 relative">
                <h2 className="text-3xl md:text-5xl lg:text-[52px] font-bold fonte-principal">Bordados <br/>Personalizados</h2>
                <p className="text-lg">Com o melhor material no mercado</p>
            </div>

            <div className="flex flex-col justify-center items-center lg:flex-row gap-8 w-full pb-20 max-w-6xl z-20 relative">
                <Card
                    imageSrc="src/assets/Captura20de20tela202023-10-28200.png"
                    altText="Bordados Maxi"
                    title="Bordados Maxi"
                    description="Até 100% feito em linha, mesclando com céu em tinta"
                />
                <Card
                    imageSrc="src/assets/fefe21388c2e91a7b79fa9a0577d7ab0.png"
                    altText="Bordados com contornos"
                    title="Bordados com contornos em linha"
                    description="Podendo adicionar pintura em aquarela"
                />
                <Card
                    imageSrc="src/assets/images.png"
                    altText="Bordados com Pets"
                    title="Bordados com Pets"
                    description="Com bordados perfeitos para seu pet"
                />
            </div>

            {/* Outras divs decorativas (se necessário) */}
            {/* <div className="bg-verde-escuro w-1/2 h-64 absolute bottom-0 left-0 rounded-tr-[350px] z-10"></div>
            <div className="bg-verde-claro w-1/2 h-64 absolute bottom-0 left-0 rounded-tr-[350px] z-5"></div> */}

        </section>
    );
}