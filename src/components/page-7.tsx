import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Page7() {
  return (
    <section className="py-24 bg-[#f8f8f8] relative">
      {/* Background Image with Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/0997/00a9/500bb8c13acb8532e6ff2bf40a97f447?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l1piK-xD6t4PMz64kFwcko77WHTlNYsOUuA7kl20fzoLC8QOaZau9AJZMdNgGceI2pvPskdV8Nhu0ppI85bZ7KKHyV2goaQp0Enm0-sz1h5jXhUJKvGpvnrzUBTfxiNic9zgXqObqxKJzb8rmt45CJUg0hPfbPIVTlKximgLPsI~Md5khOE46yTG4u082ZRBw2l4ZSgfJYrt4dGO1AG-UkRgcK8CW7e1hnsAFiFbkYrxR~N2gLGEdIpjkelC21Ak6iMqouwKY3i45WJI3gixgdEL9akHLSjsL3XSRQ8bU-ZPJYDI3UjnrLLf1RD77JODl2OTaO1dpMvH~bdX4nnMvQ__')`,
          backgroundBlendMode: "overlay",
          backgroundColor: "#E5C5B8",
        }}
      >
        <div className="absolute inset-0 bg-white/50 mix-blend-overlay" />
        <div className="absolute inset-0 bg-white/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between gap-12">
          <div className="text-center md:text-left max-w-[35rem]">
            <span className="text-sm tracking-wider text-gray-600 font-inter font-normal">
              PERSONAL SANCTUARIES WITH <br />
              PANORAMIC SURROUNDINGS
            </span>

            <h2 className="mt-16 text-3xl md:text-4xl font-normal font-utile uppercase">
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
                hover:bg-[#e3f2fd] hover:border-[#e3f2fd] transition-all duration-300 mt-16"
            >
              REGISTER INTEREST
            </Button>
          </div>

          <div className="relative h-[600px] w-[720px] flex-shrink-0">
            <Image
              src="/page-7.png"
              alt="Decorative image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
