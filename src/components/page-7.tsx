import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Page7() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left max-w-[35rem]">
            <span className="text-sm tracking-wider text-gray-600 font-inter">
              PERSONAL SANCTUARIES WITH <br />
              PANORAMIC SURROUNDINGS
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-light font-utile uppercase">
              Awaken <span className="italic font-playground">to</span>{" "}
              expansive
              <br />
              views framed <span className="italic font-playground">
                by
              </span>{" "}
              serene
              <br /> landscapes, where
              <br />
              comfort <span className="italic font-playground">and</span> bliss
              define
              <br /> every waking moment
            </h2>

            <Button
              variant="outline"
              className="h-9 px-4 border-[#e3f2fd] text-[13px] font-normal 
                hover:bg-[#e3f2fd] hover:border-[#e3f2fd] transition-all duration-300 mt-8"
            >
              REGISTER INTEREST
            </Button>
          </div>

          <div className="relative">
            <Image
              src="/page-7.png"
              alt="Decorative image"
              width={800}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
