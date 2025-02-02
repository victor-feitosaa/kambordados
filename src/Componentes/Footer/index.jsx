import React from "react";

export default function Footer () {
    return (
        <section>
            <div className="w-full bg-verde-escuro h-[50px]"></div>
            <div className="flex justify-center items-center p-3 bg-black text-white fonte-secundaria w-full ">
                <h4>Desenvolvido por <a href="https://www.linkedin.com/in/victorfeitosalima/" target="_blank" className="font-bold underline underline-offset-4">Victor Feitosa</a></h4>
            </div>
        </section>
    )
}