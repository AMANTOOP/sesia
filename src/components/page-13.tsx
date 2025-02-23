import Image from "next/image";

export function Page13() {
  return (
    <section className="relative h-screen py-24 bg-[#f8f8f8]">
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

          <div className="relative text-center">
            <span className="text-sm tracking-wider text-gray-600 font-commuters">
              Developer
            </span>

            <h2 className="mt-[4rem] text-3xl md:text-4xl font-light font-utile">
              Visionary design <br />
              <span className="font-playground italic">meets</span> modern luxury
            </h2>

            <p className="mt-[2rem] text-gray-600 leading-relaxed font-commuters">
              BEYOND is a new premium real estate brand under OMNIYAT GROUP,
              specializing in wider luxury markets and creating homes that blend
              innovation, nature, and luxury.
            </p>

            <p className="mt-[2rem] text-gray-600 leading-relaxed font-franklin">
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
