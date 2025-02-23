export function Page11() {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/101f/afea/72a811f94a3c71f10640ed709ca24a43?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F0F6O7~OcvkEnJ9LF3r0tQqOW0YPpibJxdMwdO~YpCCWNY8~rAPRgmg1~PkVL2W7JXgtUxPUYgCNgYOlwFvJC-d394ZNhSRb1kGhu8iHlnJOrHZTM6NQXBrUjrm7o2EfCJlbqHSA6GlpM~16adflAQ58paLg1O0nRCBFymDB2x~J5R6VEvgCNHcakYPmmWeTeiepXbyAkHmlXGreSsNOhuhXv2GwCAxK3ak0rzG40UYsjU2A1E9RgMLKWpnTf7A9SnZtLtIXBxWFh0zo~xDjOJuGTzrEXG-kuJJN4H-OUC8OHipn68Kf~nrBet5wMn9ncyvsGbRqsQvAyFVMTz--og__')`,
        }}
      >
        <div className="absolute inset-0" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-start text-black text-center space-y-6">
        <div className="text-center max-w-3xl mx-auto mt-[4rem]">
          <span className="text-sm tracking-wider text-black uppercase mt-[6rem]">
            Location
          </span>

          <h2 className="mt-[3rem] text-3xl md:text-4xl font-light">
            <span className="italic">at</span> Your Fingertips{" "}
            <span className="italic">a</span> World Awaits
          </h2>

          <div className="grid grid-cols-2 gap-x-16">
          <p className="mt-[4rem] text-black leading-loose max-w-[20rem] mx-auto">
            Just minutes from Dubai’s vibrant heart, Sensia perfectly balances
            the lively with the serene.
          </p>

          <p className="mt-[4rem] text-black leading-loose max-w-[25rem] mx-auto">
            Effortless access to the city offers residents the dynamic energy of
            urban life while maintaining the peaceful atmosphere of this
            exclusive waterfront sanctuary.
          </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
