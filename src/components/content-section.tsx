import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ContentSection() {
  return (
    <section className="relative h-screen flex items-end justify-center pb-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/0997/00a9/500bb8c13acb8532e6ff2bf40a97f447?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l1piK-xD6t4PMz64kFwcko77WHTlNYsOUuA7kl20fzoLC8QOaZau9AJZMdNgGceI2pvPskdV8Nhu0ppI85bZ7KKHyV2goaQp0Enm0-sz1h5jXhUJKvGpvnrzUBTfxiNic9zgXqObqxKJzb8rmt45CJUg0hPfbPIVTlKximgLPsI~Md5khOE46yTG4u082ZRBw2l4ZSgfJYrt4dGO1AG-UkRgcK8CW7e1hnsAFiFbkYrxR~N2gLGEdIpjkelC21Ak6iMqouwKY3i45WJI3gixgdEL9akHLSjsL3XSRQ8bU-ZPJYDI3UjnrLLf1RD77JODl2OTaO1dpMvH~bdX4nnMvQ__')`,
          backgroundBlendMode: "overlay",
          backgroundColor: "#E5C5B8", 
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-white/50 mix-blend-overlay" />
        <div className="absolute inset-0 bg-white/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Text Container */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <span className="text-sm tracking-wider text-gray-300">
          BREATHTAKING SCENERY, ELEVATED LIVING
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-light">
          A Picturesque Retreat <span className="italic">by</span> the Water
        </h2>

        <p className="mt-6 text-gray-200 leading-relaxed">
          Every day at Sensia begins and ends with a breathtaking waterfront
          vista. Imagine the serenity between the shores where every angle
          turned reveals views of the shimmering sea, the sprawling greenery,
          and Dubai Maritime City's vibrant pulse while you hear the soothing
          flow of the waves. Here, the peaceful ambience of the tranquil
          parkland and the shoreline sets the tone for a timeless retreat by the
          water's edge.
        </p>

        <Button className="mt-8">REGISTER INTEREST</Button>
      </div>
    </section>
  );
}
