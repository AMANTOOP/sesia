import Image from "next/image";
import { Button } from "@/components/ui/button";

export function LivingSpacesSection() {
  return (
    <section className="py-24 bg-[#f8f8f8] relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/b0c4/9374/88a629ca90f1928d488e64bc59a1eaf7?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aeUqsyDRXyWSjhVloOOPVAIzdU10IA5gN~QOvN~1sB9Di-nqyiQTXeVgha7PSoGkLYSWDAb0ZULIeajLyEUATyoWgFMRTUtfja8wIMhr6Lp6csz8jnKKYIWnzdCdQpCNeas3zsLEsnZuRwYtZMuvtid0rxbygotihaqS8rDz0R~oUfOHJc12JPtFDHfwbLvbdfgZqTMrZtgFqy1J8aKm~jOSYWvZ4frfC-nCBCHdnE97VWJKLpOi6brkodldzkeKRZhhZoIeQiZIBFcQeo3JNk15P5eGOfhLYtnOz0OYTnE2-XDOjBJ4yh5Tc--vXgNJrqwQnu44QsoyUeaQ8LExSQ__')`,
          backgroundBlendMode: "overlay",
          backgroundColor: "#E5C5B8",
        }}
      >
        
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] w-[500px]">
            <Image
              src="/image.png"
              alt="Decorative image"
              fill
              className="object-cover"
            />
          </div>

          {/* Wrapped content in a div with flex justify-end to align right */}
          <div className="text-center md:text-left">
            <span className="text-sm tracking-wider text-gray-600 ml-[10rem] font-commuters">
              PROJECT
            </span>

            <h2 className="mt-[4rem] text-3xl md:text-5xl font-normal font-utile">
              Graceful Lines,
              <br />
              Elevated Living
            </h2>

            <p className="mt-[4rem] text-gray-600 leading-relaxed font-inter ml-[15rem]">
              Rising 36 storeys above Dubai Maritime City, Sensia offers
              residences designed to harmonize with nature. With cascading
              greenery and panoramic sea views, it features thoughtfully crafted
              1- to 4- bedroom units, duplexes, and a penthouse.
            </p>

            <p className="mt-6 ml-[15rem] font-franklin">
              A peaceful haven of modern urban sophistication.
            </p>

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
  );
}
