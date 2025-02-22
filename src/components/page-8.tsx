import { Eye } from "lucide-react"

export function Page8() {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/46e7/6f0c/12de92ea27ee9a4dd8637434f91b485a?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ACF-d-xE2C~HX4EeK286JLmWhHzvMC1~6jfu0ArUN3xxdXq3oqH7GzbXUAnCkUMoyXeQ~vkh6SCgnWhgIE3iTD64ymCL1olxRr4eytFXWPcBEePN1Je-aESPjImmnLkKMWXP~MR3Xm0AtpjRbmzZU0SVGTs-RAD85OK45Gp8jqq8Sklb41AD60XplPEGKqf4pQKms2-LseYLZ-A70saTj8g8Aghx6Smfp7wNmBoB6ZjzSA35Apd0yquH9zMstWrwsqMpUqkxPdzQqD5gtXm8VWkp~4dA-beIfBKO~vpXolcZsQ8zu2q7WdQWCym4LcVD2jpu6dmy6bwL6nXRxfqVFQ__')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-end justify-center text-white text-center">
      <button className="mt-8 border border-white px-6 py-3 flex items-center gap-2 hover:bg-white/10 transition-colors mb-8">
        <Eye className="w-5 h-5" />
        <span className="text-sm tracking-wider">VIEW MORE</span>
      </button>
      </div>
    </section>
  );
}
