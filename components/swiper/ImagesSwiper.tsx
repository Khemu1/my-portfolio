import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImagesSwiper: React.FC<{ images: string[]; title: string }> = ({
  images,
  title,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);
  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [images]);
  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <ScrollArea>
      <div className="relative w-full flex flex-col gap-4 sm:px-6">
        <h3 className="text-accent font-semibold text-xl">{title}</h3>

        <div className="relative w-full max-w-[1000px] mx-auto flex items-center justify-center aspect-[4/3] sm:h-[650px]">
          <Image
            src={images[currentIndex]}
            alt={`Project image ${currentIndex + 1}`}
            priority={currentIndex === 0}
            fill
            className="object-contain rounded-md shadow-lg"
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1000px"
          />

          {/* Navigation Buttons */}
          <Button
            onClick={goPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white z-10"
          >
            <ChevronLeft />
          </Button>

          <Button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white z-10"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};

export default ImagesSwiper;
