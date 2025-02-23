import { ChevronDown } from "lucide-react"



export function HeroSection() {
  return (
    <section className="font-utile font-normal text-[38.91px] leading-[40px] tracking-[0%] relative h-screen flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/8c7b/b26b/75f56edbbadb3306236b7dd5e20d8932?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ggph-tGO4~KZ~V5kLBqteVs6Qcrgnk3da3YckMX1pcgEzWFtIU4S1S9HYMotlrREvYU~F62Jb30wplIS7fhDtsr73JO~cxzWCQ1YlFTYNmOnGgOVSUna4XUm75Qb5rCh3z6ieyJbxqkHu~-DoKLbuDhjVsh1LQkBY~u2sDaLyGDkfMrP3QZunJpEcZ2YX~mQwvfUgLxs-MuezGZXOHjeQ0wkLht04Q8xp~DWy5N3aM1cxuwbHRpVsP12YHDnUKCWHzr5e0hlQi0A2t2LwhOlkwTtVgV2wXYkSsW5DUwnGQJW6n0WgfV-AtjRIEuUnCA3RYs~QQnoKTzTq2hv1tnzJg__')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center">
        <h1 className="max-w-4xl">
          <span className="block mb-2">ARCHITECTURAL ELEGANCE</span>
          <span className="block">
            ABOVE <span className="font-custom font-medium text-[40px] leading-[40px] italic">the</span> HORIZON
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl font-medium font-inter">
          DISCOVER A TIMELESS RETREAT WHERE CITY MEETS SEA&apos;S CALM
        </p>

        <button className="absolute left-[43%] bottom-[-35vh] -translate-x-1/2 text-white flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm">Discover more</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}

