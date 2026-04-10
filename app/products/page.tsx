"use client"

import { useState, useEffect, Suspense } from "react";
import { productsData } from "@/data";
import { Search as SearchIcon, X } from "lucide-react";
import { siteConfig } from "@/config";

import { useSearchParams } from "next/navigation";
import FadeIn from "@/components/ui/FadeIn";
import ProductCard from "@/components/cards/ProductCard";

function ProductsContent() {
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);



    const filteredProducts = productsData.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesSearch;
    });

    return (
        <div className="min-h-screen relative">
            <div className="relative z-10 container mx-auto px-4 pt-32 pb-24">
                <FadeIn direction="down">
                    <div className="text-center mb-12 relative z-10 py-8">
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wide mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-neutral-400 drop-shadow-sm font-gotham">
                            Nuestros Productos
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto drop-shadow-sm font-sans">
                            Explorá nuestro catálogo exclusivo de productos premium y ediciones limitadas.
                        </p>
                    </div>



                    {/* Search Bar */}
                    <div className="flex flex-col md:flex-row gap-4 mb-16 max-w-2xl mx-auto p-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-primary/20 shadow-xl">
                        <div className="flex-1 relative group">
                            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 group-hover:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder={`Buscar en ...`}
                                className="w-full bg-transparent border-none rounded-xl py-4 pl-12 pr-4 text-black focus:outline-none placeholder:text-gray-400 font-sans"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </FadeIn>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product, index) => (
                        <FadeIn key={product.id} delay={index * 0.1} direction="up" className="h-full">
                            <ProductCard
                                product={product}
                                onImageClick={setSelectedImage}
                            />
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 transition-all duration-300 animate-in fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full h-full max-h-[90vh] flex items-center justify-center">
                        <button
                            className="absolute top-2 right-2 md:-top-12 md:right-0 z-50 p-2 bg-black/50 md:bg-transparent rounded-full md:rounded-none text-white md:text-white/50 hover:text-white hover:bg-black/70 md:hover:bg-transparent transition-all backdrop-blur-sm md:backdrop-blur-none"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Vista Previa"
                            className="w-full h-full object-contain rounded-lg shadow-2xl drop-shadow-[0_0_50px_rgba(192,192,192,0.2)]"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Cargando productos...</div>}>
            <ProductsContent />
        </Suspense>
    );
}
