import React, { useState, useEffect } from "react";

export default function Card({ images, altText, title, description }) {
  const [currentImage, setCurrentImage] = useState(images[0]); // Define a imagem inicial
  const [fade, setFade] = useState(false); // Estado para controlar a animação de fade

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setFade(true); // Ativa o efeito de fade antes da troca
      setTimeout(() => {
        index = (index + 1) % images.length;
        setCurrentImage(images[index]);
        setFade(false); // Remove o efeito de fade após a troca
      }, 200); // Tempo da animação
    }, 5500); // Tempo de troca de imagem

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
  }, [images]);

  return (
    <div className="flex flex-col items-center justify-between w-full sm:w-[300px] md:w-[350px] lg:w-[400px] lg:h-[500px]">
      {/* Imagem com transição */}
      <div className="relative w-full flex justify-center px-[20%] lg:px-0 lg:border-[6px]  border-[#bc6c25] hover:border-[#efe7e1] rounded-[20px]">
        <img
          src={currentImage}
          alt={altText}
          className={`w-full h-[200px] lg:h-[356px] object-cover cursor-pointer border-[3px] border-[#bc6c25] lg:border-none shadow-md rounded-[15px] transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}
        />
      </div>

      {/* Conteúdo */}
      <div className="mt-8 text-center">
        <p className="text-lg lg:text-xl font-medium fonte-principal">{title}</p>
        <p className="text-xs lg:text-base fonte-secundaria">{description}</p>
      </div>
    </div>
  );
}
