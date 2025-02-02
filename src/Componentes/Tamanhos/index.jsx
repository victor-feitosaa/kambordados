import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../Card";

export default function Tamanhos() {
    const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.5 });
    const { ref: cardsRef, inView: cardsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: noteRef, inView: noteInView } = useInView({ triggerOnce: true, threshold: 0.5 });

    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="min-h-screen px-10 lg:px-20 flex flex-col justify-center items-center bg-verde-escuro bege fonte-secundaria relative overflow-hidden">
            {/* Título */}
            <div ref={titleRef} className={`text-center py-20 z-20 transition-opacity duration-1000 ${titleInView ? 'animate-fade animate-once animate-duration-[1550ms]' : 'opacity-0'}`}>
                <h2 className="text-3xl lg:text-[52px] font-bold fonte-principal">Tamanhos</h2>
                <p className="text-lg pt-5">Temos três tamanhos disponíveis:</p>
            </div>

            {/* Cards */}
            <div 
                ref={cardsRef} 
                className={`flex flex-col items-center justify-center lg:flex-row gap-[80px] lg:gap-10 w-full pb-20 max-w-6xl z-20 transition-opacity duration-1000 ${cardsInView ? 'animate-fade animate-once animate-duration-[1550ms]' : 'opacity-0'}`}
            >
                {/* Card 1 */}
                <div 
                    className="relative"
                    onMouseEnter={() => setHoveredCard(1)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
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
                        images={["assets/chavbase.png", "assets/chav1.jpg", "assets/chav2.jpg", "assets/chav3.jpg", "assets/chav4.jpg", "assets/chav5.jpeg", "assets/chav6.jpeg"]}
                        altText="Chaveiros"
                        title="Chaveiro (5cm): a partir de R$30"
                        description=""
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
                        images={["assets/Kambordados2.jpg", "assets/medio1.jpg", "assets/medio2.jpg", "assets/medio3.jpg"]}
                        altText="Tamanho médio"
                        title="16cm: a partir de R$150"
                        description=""
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
                        images={["assets/Kambordados2.jpg", "assets/grande1.jpg", "assets/grande2.jpg", "assets/grande3.jpg"]}
                        altText="Tamanho grande"
                        title="22cm: a partir de R$200"
                        description=""
                    />
                </div>
            </div>

            {/* Nota */}
            <div ref={noteRef} className={`pb-20 z-20 transition-opacity duration-1000 ${noteInView ? 'animate-fade animate-once animate-duration-[1550ms]' : 'opacity-0'}`}>
                <h4>*Valores podem variar dependendo da complexidade e material usados.</h4>
            </div>

            {/* Decoração */}
            <div className="bg-verde-escuro w-1/2 h-64 absolute bottom-0 right-0 rounded-br-[350px] z-10"></div>
            <div className="bg-verde-claro w-1/2 h-64 absolute bottom-0 right-0 z-5"></div>
        </section>
    );
}