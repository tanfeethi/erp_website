import { useState } from "react";

interface Partner {
  id: number;
  logo: string;
  link: string;
}

interface CarouselProps {
  items: Partner[];
  itemsPerSlide?: number;
  height?: string;
}

const CustomCarousel = ({
  items,
  itemsPerSlide = 4,
  height = "h-[400px]",
}: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const createSlides = (items: Partner[]) => {
    const slides: Partner[][] = [];
    for (let i = 0; i < items.length; i += itemsPerSlide) {
      slides.push(items.slice(i, i + itemsPerSlide));
    }
    return slides;
  };

  const slides = createSlides(items);
  const total = slides.length;

  const handleSlideChange = (newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => handleSlideChange((current - 1 + total) % total);
  const nextSlide = () => handleSlideChange((current + 1) % total);

  if (!items.length) {
    return (
      <div className="text-center py-10 text-gray-400">
        No items to display.
      </div>
    );
  }

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-lg p-5">
      {/* Carousel container */}
      <div className={`relative w-full ${height} overflow-hidden`}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              slideIndex === current
                ? "opacity-100 translate-x-0"
                : slideIndex < current
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div
              className={`grid gap-4 h-full p-4 ${
                itemsPerSlide === 1
                  ? "grid-cols-1"
                  : itemsPerSlide === 2
                  ? "grid-cols-2"
                  : itemsPerSlide === 3
                  ? "grid-cols-3"
                  : "grid-cols-4"
              }`}
            >
              {slide.map((partner) => (
                <a
                  key={partner.id}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
                >
                  <img
                    src={partner.logo}
                    alt={`Partner ${partner.id}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 ease-in-out" />
                </a>
              ))}

              {slide.length < itemsPerSlide &&
                Array.from({ length: itemsPerSlide - slide.length }).map(
                  (_, idx) => (
                    <div
                      key={`empty-${idx}`}
                      className="relative overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center"
                    >
                      <div className="text-gray-400 text-4xl">📷</div>
                    </div>
                  )
                )}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className={`btn rounded-lg bg-[var(--primary)]/60 hover:bg-[var(--primary)] border-0 shadow-lg pointer-events-auto transition-all duration-200 ease-in-out hover:scale-110 ${
            isTransitioning ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
        >
          <span className="text-lg font-bold text-white">❮</span>
        </button>
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className={`btn rounded-lg bg-[var(--primary)]/60 hover:bg-[var(--primary)] border-0 shadow-lg pointer-events-auto transition-all duration-200 ease-in-out hover:scale-110 ${
            isTransitioning ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
        >
          <span className="text-lg font-bold text-white">❯</span>
        </button>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
              current === index
                ? "bg-[var(--primary)] scale-125 shadow-lg"
                : "bg-[var(--primary)]/20 hover:bg-[var(--primary)]"
            } ${isTransitioning ? "cursor-not-allowed" : "cursor-pointer"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;