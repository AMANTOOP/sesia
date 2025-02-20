import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Page9() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/page-9.png"
              alt="Decorative image"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div className="text-center md:text-left">
            <span className="text-sm tracking-wider text-gray-600">
              AMENITIES
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-light">
              Luxury That Nurtures
              <br />
              Well-Being
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              The thoughtfully curated amenities harmonize well-being, comfort,
              and leisure, offering a lifestyle that elevates relaxation while
              fostering vibrant social interactions in an elegant and tranquil
              setting.
            </p>

            <Button className="mt-8">REGISTER INTEREST</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
