import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Page13() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/page-13.png"
              alt="Decorative image"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div className="text-center">
            <span className="text-sm tracking-wider text-gray-600 font-commuters">
              Developer
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-light font-utile">
              Visionary design <br />
              <span className="font-playground italic">meets</span> modern luxury
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed font-commuters">
              BEYOND is a new premium real estate brand under OMNIYAT GROUP,
              specializing in wider luxury markets and creating homes that blend
              innovation, nature, and luxury.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed font-franklin">
              Our commitment to quality and design ensures that every
              development is more than just a place to live; it's an experience
              that redefines modern living. With a focus on delivering on-time,
              thoughtfully designed homes, we provide spaces that resonate with
              the personal values of our residents, enhancing their quality of
              life. From lush landscapes to state-of-the-art technology, BEYOND
              offers a lifestyle where every detail has been curated to provide
              unparalleled comfort, convenience, and well-being. Our mission is
              to go beyond expectations and deliver homes that inspire, uplift,
              and resonate with modern urban values.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
