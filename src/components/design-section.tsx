import { Eye } from "lucide-react"

export function DesignSection() {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/d616/65a0/863b5d0eb424af4eb077dfe93e75daf4?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AqtpJ62RZBfVJgbprtBdAjMvgCsVKJAeBDHKixNav3NoWHIvxwkO7gSXbjI8VweyynffOv~FWVmXYs5Stpr3HAKwoft6nX~TouS9SumDhquUsjVC029ruV4glMTAk0jAmpDfocztNGbogIEKASgK4EsMYdCKfkrExa6xDFLZMP65oGcQPRYY4CLDEDYhHHghmWvleUqHJV1q7SJxJmnamJeTdqvxzmmT4qR6sOj-LoXRLeqqj6JhyxZvlqPVhQKFGjeCbeLWleInzQR85omgNE~K5KkjjDb7btWdwQPWVEf5nU2gPVehRtqvZTsvt~pq6KM0eSI5bsGLjra84bOi0Q__')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-end text-white text-center">
        <h2 className="font-utile font-normal text-[38.91px] leading-[40px] tracking-[0%] max-w-4xl">
          A TASTEFUL BLEND <span className="italic font-utile">of</span> THOUGHTFUL
          <br />
          DESIGN <span className="italic font-utile">and</span> NATURAL BEAUTY
        </h2>

        <button className="mt-12 border border-white px-6 py-3 flex items-center gap-2 hover:bg-white/10 transition-colors mb-16">
          <Eye className="w-5 h-5" />
          <span className="text-sm tracking-wider font-commuters">VIEW MORE</span>
        </button>
      </div>
    </section>
  )
}

