import React from "react";

export default function Card({ imageSrc, altText, title, description }) {
  return (
    <div className="flex flex-col items-center justify-between w-full  sm:w-[300px] md:w-[350px] lg:w-[400px] lg:h-[500px]">
      {/* Imagem */}
      <div className="relative w-full flex justify-center px-[20%] lg:px-0">
        <img
          src={imageSrc}
          alt={altText}
          className=" w-full  h-[200px] lg:h-[356px] object-cover rounded-[20px] shadow-md border-[6px] border-[#bc6c25]"
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
