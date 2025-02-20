import Image from "next/image";

export function Page5() {
  return (
    <div className="w-full">
      <div className="grid grid-flow-col grid-rows-2 grid-cols-10  h-[50vh]">
    
        <div className="relative row-span-2 col-span-1">
          <Image
            src="/page5-1.png" 
            alt="Serenity 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative row-span-1 col-span-2">
          <Image
            src="/page5-2.png" 
            alt="Serenity 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative row-span-1 col-span-2">
          <Image
            src="/page5-3.png"
            alt="Serenity 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative row-span-2 col-span-7">
          <Image
            src="/page5-4.png"
            alt="Serenity 4"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="px-6 md:px-24 lg:px-40 py-16 grid grid-cols-2">
        <div className="col-span-1">
        <h4 className="text-sm uppercase tracking-wide text-gray-600 m-5">
          Interiors
        </h4>
        <h2 className="text-4xl font-light">
          Living Spaces Shaped <br /><i>by Serenity</i>
        </h2>
        </div>
        <div className="col-span-1">
        <p className="mt-4 text-gray-700">
          Immerse yourself in warmth, sophistication, and seamless indoor-outdoor flow.
        </p>
        <p className="mt-4 text-gray-700">
          Floor-to-ceiling windows flood rooms with <strong>natural light</strong>, revealing breathtaking vistas. 
          <strong> Timeless interiors, refined finishes</strong>, and <strong>airy spaces</strong> offer a tranquil escape, 
          where every detail fosters an environment for relaxed, sumptuous comfort.
        </p>
        </div>
        
      </div>
    </div>
  );
};

