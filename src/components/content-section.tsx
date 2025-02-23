import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ContentSection() {
  return (
    <section className="relative h-screen flex items-center justify-center px-8">
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

      <div className="absolute top-20 left-20 w-60 h-80">
        <Image
          src="/page-2.png"
          alt="Flowing Red Fabric"
          width={240}
          height={320}
        />
      </div>

      <div className="absolute bottom-20 right-20 w-60 h-80">
        <Image
          src="/page2-2.png"
          alt="Woman in Red Dress"
          width={240}
          height={320}
        />
      </div>

      <div className="relative z-10 text-center text-black flex flex-col justify-center items-center mt-[4rem]">
        <div className="relative z-10 text-center text-black flex flex-col justify-center items-center">
          <span className="text-sm tracking-wide uppercase text-gray-500 mt-[2rem] mb-[2rem]">
            BREATHTAKING SCENERY, ELEVATED LIVING
          </span>
          <h2 className="mt-4 text-8xl md:text-6xl font-light mb-12">
            A Picturesque Retreat <span className="italic">by</span> the Water
          </h2>
        </div>
        <div className="relative z-10 text-center text-black max-w-5xl flex flex-col justify-center items-center">
          <p className="mt-[2rem] text-gray-600 leading-relaxed p-4 font-commuters max-w-[400px]">
            Every day at Sensia begins and ends with a breathtaking waterfront
            vista.
          </p>
          <p className="mt-[1rem] text-gray-600 leading-relaxed p-4 max-w-[400px] font-franklin">
            Imagine the serenity between the shores where every angle turned
            reveals views of the <strong>shimmering sea</strong>, the sprawling
            greenery, and Dubai Maritime City’s vibrant pulse while you hear the
            soothing flow of the waves. Here, the peaceful ambience of the{" "}
            <strong>tranquil parkland </strong>
            and the shoreline sets the tone for a timeless retreat by the
            water’s edge.
          </p>
          <Button
            variant="outline"
            className="h-9 px-4 border-[#e3f2fd] text-[13px] font-normal 
                hover:bg-[#e3f2fd] hover:border-[#e3f2fd] transition-all duration-300"
          >
            REGISTER INTEREST
          </Button>
        </div>
      </div>
    </section>
  );
}
