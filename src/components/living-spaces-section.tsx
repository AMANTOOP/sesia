import Image from "next/image"
import { Button } from "@/components/ui/button"

export function LivingSpacesSection () {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image src="/image.png" alt="Decorative image" width={400} height={400} className="rounded-lg" />
          </div>

          <div className="text-center md:text-left">
            <span className="text-sm tracking-wider text-gray-600">Project</span>

            <h2 className="mt-4 text-3xl md:text-4xl font-light">
            Graceful Lines,<br />
            Elevated Living
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
            Rising 36 storeys above Dubai Maritime City, Sensia offers residences designed to harmonize with nature. With cascading greenery and panoramic sea views, it features thoughtfully crafted 1- to 4- bedroom units, duplexes, and a penthouse.
            </p>

            <p className="mt-6">A peaceful haven of modern urban sophistication.</p>

            <Button className="mt-8">REGISTER INTEREST</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

