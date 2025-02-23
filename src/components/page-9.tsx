import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Page9() {
  return (
    <section
      className="py-24 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/b0c4/9374/88a629ca90f1928d488e64bc59a1eaf7?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aeUqsyDRXyWSjhVloOOPVAIzdU10IA5gN~QOvN~1sB9Di-nqyiQTXeVgha7PSoGkLYSWDAb0ZULIeajLyEUATyoWgFMRTUtfja8wIMhr6Lp6csz8jnKKYIWnzdCdQpCNeas3zsLEsnZuRwYtZMuvtid0rxbygotihaqS8rDz0R~oUfOHJc12JPtFDHfwbLvbdfgZqTMrZtgFqy1J8aKm~jOSYWvZ4frfC-nCBCHdnE97VWJKLpOi6brkodldzkeKRZhhZoIeQiZIBFcQeo3JNk15P5eGOfhLYtnOz0OYTnE2-XDOjBJ4yh5Tc--vXgNJrqwQnu44QsoyUeaQ8LExSQ__')`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/page-9.png"
              alt="Decorative image"
              width={500}
              height={600}
            />
          </div>
          <div className="text-center md:text-left">
            <span className="text-sm tracking-wider text-gray-600 ml-[12rem] font-commuters">
              AMENITIES
            </span>

            <h2 className="mt-[5rem] text-3xl md:text-5xl font-normal font-utile text-center ml-[-2rem]">
              Luxury That Nurtures
              <br />
              <span className="md:text-center">Well-Being</span>
            </h2>

            <p className="mt-[4rem] text-gray-600 leading-relaxed font-inter ml-[15rem]">
              The thoughtfully curated amenities harmonize well-being, comfort,
              and leisure, offering a lifestyle that elevates relaxation while
              fostering vibrant social interactions in an elegant and tranquil
              setting.
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
