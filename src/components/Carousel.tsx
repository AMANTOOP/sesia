"use client"
import { useRef } from "react";
import Image from "next/image";

const carouselItems = [
  {
    title: "INFINITY POOL",
    description:
      "A tranquil oasis blending seamlessly with the horizon, offering spaces for relaxation and laps.",
    image: "/carousel-1.png",
  },
  {
    title: "CONCIERGE & LOBBY",
    description:
      "A welcoming hub offering personalized services in a refined and elegant setting.",
    image: "/carousel-2.png",
  },
  {
    title: "INDOOR GYM & FITNESS STUDIO",
    description:
      "State-of-the-art equipment and serene spaces designed for physical well-being and mental rejuvenation.",
    image: "/carousel-3.png",
  },
  {
    title: "BBQ SPACE & OPEN DINING",
    description:
      "Host gatherings in beautifully designed areas with stunning outdoor settings.",
    image: "/carousel-4.png",
  },
];

export function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 350; // Adjust for scroll distance
      carouselRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide space-x-4 snap-x scroll-smooth pb-4"
      >
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-[400px] snap-start relative bg-black rounded-lg overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
            <div className="absolute flex flex-col justify-between p-4 text-white">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons (Positioned Below) */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          className="bg-blue-500 text-white p-2 rounded-full shadow-md w-10 h-10 flex items-center justify-center"
          onClick={() => handleScroll("left")}
        >
          ◀
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-full shadow-md w-10 h-10 flex items-center justify-center"
          onClick={() => handleScroll("right")}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
