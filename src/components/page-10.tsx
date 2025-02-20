import { Carousel } from "./Carousel";

export function Page10() {
  return (
    <div className="w-full">
      {/* Top Half - Carousel */}
      <div className="h-[50vh]">
        <Carousel />
      </div>

      {/* Bottom Half - Text Section */}
      <div className="px-6 md:px-24 lg:px-40 py-16 grid grid-cols-2">
        <div className="grid-cols-1">
        <h4 className="text-sm uppercase tracking-wide text-gray-600 text-center">
          Additional Amenities
        </h4>
        <h2 className="text-4xl font-light text-center mt-2">
          Discover More Moments <i>to Savour</i>
        </h2>
        <p className="text-center text-gray-700 mt-4">
          Whether gathering with friends, embracing peaceful solitude, or
          exploring new pursuits, these spaces invite meaningful and memorable
          experiences.
        </p>
        </div>
        
        <div className="grid-cols-1">
            {/* Amenities List */}
        <div className="mt-6 text-center">
          <ul className="text-gray-700 space-y-1">
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
        {/* Register Interest Button */}
        <div className="text-center mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full">
            REGISTER INTEREST
          </button>
        </div>
        </div>
     
      </div>
    </div>
  );
}
