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
            className="relative min-w-[200px] md:min-w-[250px] lg:min-w-[400px] h-[500px] snap-start overflow-hidden"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="opacity-80"
            />

            {/* Gradient Overlay for Better Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

            {/* Title at the Top */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center max-w-[20rem]">
              <h3 className="text-white text-lg tracking-wide font-normal leading-[28px]">{item.title}</h3>
            </div>

            {/* Description at the Bottom */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4 font-light text-[20px]">
              <p className="text-white text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end mt-4 space-x-4">
        <button
          className="bg-[#D5F0FA] text-black p-2 shadow-md w-10 h-10 flex items-center justify-center"
          onClick={() => handleScroll("left")}
        >
          &lt;
        </button>
        <button
          className="bg-[#D5F0FA] text-black p-2 shadow-md w-10 h-10 flex items-center justify-center"
          onClick={() => handleScroll("right")}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
