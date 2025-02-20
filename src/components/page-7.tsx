import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Page7() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="text-sm tracking-wider text-gray-600">
              PERSONAL SANCTUARIES WITH PANORAMIC SURROUNDINGS
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-light">
              Awaken to expansive views framed by serene landscapes, where
              comfort and bliss define every waking moment
            </h2>

            

            <Button className="mt-8">REGISTER INTEREST</Button>
          </div>

          <div className="relative">
            <Image
              src="/page-7.png"
              alt="Decorative image"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
