import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-light tracking-wider">
            SENSIA
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/project" className="text-sm hover:text-primary">
              PROJECT
            </Link>
            <Link href="/interiors" className="text-sm hover:text-primary">
              INTERIORS
            </Link>
            <Link href="/amenities" className="text-sm hover:text-primary">
              AMENITIES
            </Link>
            <Link href="/location" className="text-sm hover:text-primary">
              LOCATION
            </Link>
            <Link href="/developer" className="text-sm hover:text-primary">
              DEVELOPER
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              BECOME AN AGENT
            </Button>
            <Button>REGISTER INTEREST</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

