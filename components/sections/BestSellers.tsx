import FadeIn from "@/components/ui/FadeIn";
import { productsData } from "@/data";
import ProductCard from "@/components/cards/ProductCard";

/**
 * BestSellers — Grilla de productos destacados en la Home
 * Muestra tarjetas de producto reutilizando el componente ProductCard.
 *
 * Datos: `productsData` de data.tsx.
 * Muestra los primeros 4 productos del catálogo principal.
 */
export default function BestSellers() {
    return (
        <div className="py-24 w-full max-w-7xl mx-auto px-4">
            <FadeIn>
                <div className="flex flex-col items-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-5 text-neutral-900 drop-shadow-md tracking-tight">
                        Productos <span className="text-red-700">Destacados</span>
                    </h2>
                    <div className="w-32 h-1.5 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.6)]"></div>
                </div>
            </FadeIn>

            <div className="flex flex-col gap-12 md:gap-20">
                {productsData.slice(0, 4).map((product, index) => {
                    const isImageRight = index % 2 === 0;
                    return (
                        <FadeIn 
                            key={product.id} 
                            delay={index * 0.1} 
                            direction={isImageRight ? "right" : "left"} 
                            className="w-full"
                        >
                            <ProductCard 
                                product={product} 
                                isHorizontal={true} 
                                imageRight={isImageRight} 
                            />
                        </FadeIn>
                    );
                })}
            </div>
        </div>
    );
}
