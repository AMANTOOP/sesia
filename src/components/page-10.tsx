import { Button } from "@/components/ui/button";
import { Carousel } from "./Carousel";

export function Page10() {
  return (
    <div className="w-full">
      <div className="h-[50vh]">
        <Carousel />
      </div>

      <div className="px-6 md:px-24 lg:px-24 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 mt-[20rem] ml-[60px]">
        <div className="max-w-[30rem] mx-auto md:mx-0">
          <span className="text-sm tracking-wider text-gray-600 font-inter">
            Additional Amenities
          </span>

          <h2 className="mt-[4rem] text-3xl md:text-4xl font-light">
            Discover More<br></br> Moments <span className="italic">to</span> Savour
          </h2>

          <p className="text-gray-700 mt-10 max-w-[25rem]">
            Whether gathering with friends, embracing peaceful solitude, or
            exploring new pursuits, these spaces invite meaningful and memorable
            experiences.
          </p>

          
        </div>

        <div className="max-w-[30rem] ml-10 md:mx-0">
          {/* Amenities List */}
          <div className="mt-6">
            <ul className="text-gray-700 space-y-1 text-left font-commuters text-[20px]">
              <li>• Indoor Changing Facilities</li>
              <li>• Dining Bosque Plaza</li>
              <li>• Tea Pavilion</li>
              <li>• Sunrise Terraces</li>
              <li>• Outdoor Lounge</li>
              <li>• Garden Seating & Working Alcove</li>
              <li>• Gathering Lawn</li>
              <li>• Sunset Amphitheatre</li>
              <li>• Gathering Pavilion</li>
            </ul>
          </div>

          <Button
            variant="outline"
            className="h-9 px-4 border-[#e3f2fd] text-[13px] font-normal 
                hover:bg-[#e3f2fd] hover:border-[#e3f2fd] transition-all duration-300 mt-8"
          >
            REGISTER INTEREST
          </Button>
        </div>
      </div>
    </div>
  );
}
