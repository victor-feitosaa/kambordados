import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../Card";

export default function Produtos() {
    const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.5 });
    const { ref: cardsRef, inView: cardsInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    // Estado para controlar qual card está com hover ativo
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="min-h-screen px-10 md:px-20 flex flex-col justify-center items-center bg-verde-escuro bege fonte-secundaria relative overflow-hidden">

            {/* Decoração topo direito */}
            <div className="bg-verde-escuro w-1/2 h-64 absolute top-0 right-0 rounded-tr-[350px] z-10"></div>
            <div className="bg-verde-claro w-1/2 h-64 absolute top-0 right-0 z-5"></div>

            {/* Conteúdo principal */}
            <div ref={titleRef} className={`text-center pb-10 pt-20 z-20 relative transition-opacity duration-1000 ${titleInView ? 'animate-fade animate-once animate-duration-[1550ms]' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl lg:text-[52px] font-bold fonte-principal">Bordados <br/>Personalizados</h2>
                <p className="text-lg pt-5">Com o melhor material no mercado</p>
            </div>


            <div 
                ref={cardsRef} 
                className={`flex flex-col justify-center items-center lg:flex-row gap-8 w-full pb-20 max-w-6xl z-20 relative transition-opacity duration-1000 
                ${cardsInView ? 'animate-fade animate-once animate-duration-[1550ms]' : 'opacity-0'}`}
            >
                {/* Card 1 */}
                <div 
                    className="relative"
                    onMouseEnter={() => setHoveredCard(1)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    {/* Imagem decorativa atrás do Card */}
                    <img 
                        src="assets/flowericonnn.png" 
                        className={`absolute left-10  transform -translate-x-1/2 h-[40px] transition-opacity transition-transform duration-1000 ease-in-out
                            ${hoveredCard === 1 ? 'opacity-100 zigzagSmooth' : 'opacity-0'}`} 
                    />
                    <img 
                        src="assets/flowericonnn.png" 
                        className={`absolute left-1/2 transform -translate-x-1/2 h-[40px] transition-opacity transition-transform duration-1000 ease-in-out
                            ${hoveredCard === 1 ? 'opacity-100 zigzagSmooth' : 'opacity-0'}`} 
                    />
                    <img 
                        src="assets/flowericonnn.png" 
                        className={`absolute right-0 transform -translate-x-1/2 h-[40px] transition-opacity transition-transform duration-1000 ease-in-out
                            ${hoveredCard === 1 ? 'opacity-100 zigzagSmooth' : 'opacity-0'}`} 
                    />

                    <Card 
                        images={["assets/maxi1.jpeg", "assets/maxi2.jpeg", "assets/maxi3.jpg", "assets/maxi4.jpg"]}
                        altText="Bordados Maxi"
                        title="Bordados Maxi"
                        description="Até 100% feito em linha, mesclando com céu em tinta"
                    />
                </div>

                {/* Card 2 */}
                <div 
                    className="relative"
                    onMouseEnter={() => setHoveredCard(2)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <img 
                        src="assets/flowericonnn.png" 
                        className={`absolute left-10  transform -translate-x-1/2 h-[40px] transition-opacity transition-transform duration-1000 ease-in-out
                            ${hoveredCard === 2 ? 'opacity-100 zigzagSmooth' : 'opacity-0'}`} 
                    />
                    <img 
                        src="assets/flowericonnn.png" 
                        className={`absolute left-1/2 transform -translate-x-1/2 h-[40px] transition-opacity transition-transform duration-1000 ease-in-out
                            ${hoveredCard === 2 ? 'opacity-100 zigzagSmooth' : 'opacity-0'}`} 
                    />
                    <img 
                        src="assets/flowericonnn.png" 
                        className={`absolute right-0 transform -translate-x-1/2 h-[40px] transition-opacity transition-transform duration-1000 ease-in-out
                            ${hoveredCard === 2 ? 'opacity-100 zigzagSmooth' : 'opacity-0'}`} 
                    />
                    <Card 
                        images={["assets/linha1.jpeg", "assets/linha3.png", "assets/linha4.jpg", "assets/linha5.jpg", "assets/linha2.jpeg"]}
                        altText="Bordados contorno em linha"
                        title="Bordados com contornos em linha"
                        description="Podendo adicionar pintura em aquarela"
                    />
                </div>

                {/* Card 3 */}
                <div 
                    className="relative"
                    onMouseEnter={() => setHoveredCard(3)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <img 
                        src="assets/flowericonnn.png" 
                        className={`absolute left-10  transform -translate-x-1/2 h-[40px] transition-opacity transition-transform duration-1000 ease-in-out
                            ${hoveredCard === 3 ? 'opacity-100 zigzagSmooth' : 'opacity-0'}`} 
                    />
                    <img 
                        src="assets/flowericonnn.png" 
                        className={`absolute left-1/2 transform -translate-x-1/2 h-[40px] transition-opacity transition-transform duration-1000 ease-in-out
                            ${hoveredCard === 3 ? 'opacity-100 zigzagSmooth' : 'opacity-0'}`} 
                    />
                    <img 
                        src="assets/flowericonnn.png" 
                        className={`absolute right-0 transform -translate-x-1/2 h-[40px] transition-opacity transition-transform duration-1000 ease-in-out
                            ${hoveredCard === 3 ? 'opacity-100 zigzagSmooth' : 'opacity-0'}`} 
                    />
                    <Card 
                        images={["assets/pet1.jpeg", "assets/pet2.jpeg", "assets/pet3.jpeg", "assets/pets4.jpg"]}
                        altText="Bordados com Pets"
                        title="Bordados com Pets"
                        description="Com bordados perfeitos para seus pets"
                    />
                </div>
            </div>
        </section>
    );
}
