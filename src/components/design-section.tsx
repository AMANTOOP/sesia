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

      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
        <h2 className="text-3xl md:text-5xl font-light max-w-4xl leading-relaxed">
          A TASTEFUL BLEND <span className="italic">of</span> THOUGHTFUL
          <br />
          DESIGN <span className="italic">and</span> NATURAL BEAUTY
        </h2>

        <button className="mt-8 border border-white px-6 py-3 flex items-center gap-2 hover:bg-white/10 transition-colors">
          <Eye className="w-5 h-5" />
          <span className="text-sm tracking-wider">VIEW MORE</span>
        </button>
      </div>
    </section>
  )
}

