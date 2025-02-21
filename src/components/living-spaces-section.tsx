import Image from "next/image"
import { Button } from "@/components/ui/button"

export function LivingSpacesSection () {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image src="/image.png" alt="Decorative image" width={400} height={800} className="rounded-lg" />
          </div>

          <div className="text-center md:text-left">
            <span className="text-sm tracking-wider text-gray-600 ml-[10rem] font-commuters">PROJECT</span>

            <h2 className="mt-4 text-3xl md:text-4xl font-light font-utile">
            Graceful Lines,<br />
            Elevated Living
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed font-inter ml-[15rem]">
            Rising 36 storeys above Dubai Maritime City, Sensia offers residences designed to harmonize with nature. With cascading greenery and panoramic sea views, it features thoughtfully crafted 1- to 4- bedroom units, duplexes, and a penthouse.
            </p>

            <p className="mt-6 ml-[15rem] font-franklin">A peaceful haven of modern urban sophistication.</p>
            
            <Button 
              variant="outline" 
              className="h-9 px-4 border-[#e3f2fd] text-[13px] font-normal 
                hover:bg-[#e3f2fd] hover:border-[#e3f2fd] transition-all duration-300 mt-8 ml-[15rem]"
            >
              REGISTER INTEREST
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

