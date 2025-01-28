import React from "react";
import Card from "../Card";

export default function Tamanhos() {
    return (
        <section className="min-h-screen px-8 lg:px-20 flex flex-col justify-center items-center bg-verde-escuro bege fonte-secundaria relative overflow-hidden">


            {/* <div className="bg-verde-escuro w-full h-55 absolute top-342 rounded-br-[350px] z-10"></div>

<div className="bg-verde-claro w-full h-55 absolute top-342 z-5"></div> */}
           



            <div className="text-center py-20 z-20">
                <h2 className="text-3xl lg:text-[52px] font-bold fonte-principal ">Tamanhos</h2>
                <p className="text-lg ">temos três tamanhos disponíveis:</p>
            </div>

            <div className="flex flex-col items-center justify-center lg:flex-row gap-8 w-full pb-20 max-w-6xl z-20">
                <Card
                    imageSrc="src\assets\Kambordados-01-23-2025_07_07_PM.png"
                    altText="chaveiro"
                    title="Chaveiro (5cm): a partir de R$30"
                    description=""
                />
                <Card
                    imageSrc="src/assets/Kambordados2.png"
                    altText="Tamanho médio"
                    title="16cm: a partir de R$150"
                    description=""
                />
                <Card
                    imageSrc="src/assets/Kambordados3.png"
                    altText="Tamanho grande"
                    title="22cm: a partir de R$200"
                    description=""
                />

                
            </div>

            <div className="pb-20 z-20">
                <h4>*Valores podem variar dependendo da complexidade e material usados.</h4>
            </div>


            <div className="bg-verde-escuro w-1/2 h-64 absolute bottom-0 right-0 rounded-br-[350px] z-10"></div>

            <div className="bg-verde-claro w-1/2 h-64 absolute bottom-0 right-0 z-5"></div>

            <div className="bg-verde-escuro w-1/2 h-64 absolute top-600 rounded-bl-[350px] z-10"></div>

            <div className="bg-verde-claro w-1/2 h-64 absolute top-600 z-5"></div>

        </section>
    );
}
