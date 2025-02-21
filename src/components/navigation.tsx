import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-lg font-light tracking-widest"
          >
            /EN/IA
          </Link>

          {/* All right-aligned items */}
          <div className="flex items-center ml-auto space-x-8">
            {/* Main Navigation Links */}
            {[
              ["PROJECT", "/project"],
              ["INTERIORS", "/interiors"],
              ["AMENITIES", "/amenities"],
              ["LOCATION", "/location"],
              ["DEVELOPER", "/developer"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-[13px] text-gray-800 hover:text-gray-600"
              >
                {label}
              </Link>
            ))}

            {/* CTA Buttons */}
            <Button 
              variant="outline" 
              className="h-9 px-4 border-[#e3f2fd] text-[13px] font-normal 
                hover:bg-[#e3f2fd] hover:border-[#e3f2fd] transition-all duration-300"
            >
              BECOME AN AGENT
            </Button>
            <Button 
              variant="outline"
              className="h-9 px-4 border-[#e3f2fd] text-[13px] font-normal text-black 
                hover:bg-[#e3f2fd] hover:border-[#e3f2fd] transition-all duration-300"
            >
              REGISTER INTEREST
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;