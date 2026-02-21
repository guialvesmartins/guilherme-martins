"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon, X, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  images: string[];
  altPrefix: string;
}

export function ProjectCarousel({ images, altPrefix }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Navegação por teclado para o modal (Esc para fechar, setas para trocar de imagem)
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, images.length]);

  // Se a barra de rolagem do body incomodar ao abrir o modal, desativamos
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  if (!images || images.length === 0) {
    return null;
  }

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="relative group w-full mb-8 rounded-lg overflow-hidden border border-border bg-muted/10">
        {/* Container com a proporção exata solicitada (1754 x 1218) */}
        <div 
          className="relative aspect-[1754/1218] w-full flex items-center justify-center cursor-pointer bg-background"
          onClick={() => setIsModalOpen(true)}
        >
          {/* Fallback de carregamento ou quebra de imagem */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <ImageIcon className="w-12 h-12 text-muted-foreground/30" />
          </div>

          {/* Imagem Atual */}
          <img
            src={images[currentIndex]}
            alt={`${altPrefix} print ${currentIndex + 1}`}
            className="w-full h-full object-cover sm:object-contain transition-opacity duration-300"
          />

          {/* Overlay que aparece ao passar o mouse para indicar clique */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
            <div className="bg-background/90 text-foreground backdrop-blur-md p-3.5 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl border border-border">
              <Maximize2 className="h-5 w-5" />
            </div>
          </div>

          {/* Navegação Carrossel Normal */}
          {images.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-border shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10 h-10 w-10"
                onClick={prevSlide}
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-border shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10 h-10 w-10"
                onClick={nextSlide}
                aria-label="Próxima imagem"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}
        </div>

        {/* Indicadores (Bolinhas) */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-full bg-background/60 backdrop-blur-md border border-border/50 z-10 shadow-sm">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => goToSlide(idx, e)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  idx === currentIndex
                    ? "bg-foreground w-6"
                    : "bg-muted-foreground w-2 hover:bg-foreground/80"
                )}
                aria-label={`Ir para o slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal Tela Cheia (Lightbox) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-200">
          
          {/* Botão Fechar Modal */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground hover:bg-background/20 z-50 h-12 w-12 rounded-full"
            onClick={() => setIsModalOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Container da Imagem Fullscreen */}
          <div 
            className="absolute inset-0 flex items-center justify-center p-4 sm:p-12 cursor-zoom-out"
            onClick={() => setIsModalOpen(false)}
          >
            <img
              src={images[currentIndex]}
              alt={`${altPrefix} print ${currentIndex + 1} em tela cheia`}
              className="max-w-full max-h-full object-contain cursor-default rounded-lg shadow-2xl border border-border/50 animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>

          {/* Controles do Modal */}
          {images.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background border-border shadow-xl h-12 w-12 sm:h-14 sm:w-14 rounded-full z-50 transition-transform hover:scale-105"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background border-border shadow-xl h-12 w-12 sm:h-14 sm:w-14 rounded-full z-50 transition-transform hover:scale-105"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
              </Button>
            </>
          )}
          
          {/* Contador de Imagens no Modal */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-background/50 border border-border backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium z-50 shadow-lg">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}
