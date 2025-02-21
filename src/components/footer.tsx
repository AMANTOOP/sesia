import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaPhone,
} from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#F4E7E3] text-gray-700">
      {/* Upper Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
        <Link 
            href="/" 
            className="text-lg font-light tracking-widest"
          >
            /EN/IA
          </Link>
          <div className="text-xl font-light tracking-wide mt-4 md:mt-0">
            BEYOND
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          {/* Links on the Left */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:underline">
              Sensia&copy; 2025
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Cookie Policy
            </a>
          </div>

          {/* Social Media Icons on the Right */}
          <div className="flex space-x-6 text-gray-700">
            <a href="#" className="hover:text-gray-900">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 my-4" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <p className="text-xs text-gray-600 leading-relaxed">
          Interior renders: These renders are non-binding, for illustrative
          purposes only, and subject to change without notice. Final materials,
          finishes, and configurations may differ based on availability, design
          updates, and approvals. Loose furniture, fixtures, lighting, wall
          cladding, and mounted items are NOT included. In case of conflict,
          contractual documents, including the Sale and Purchase Agreement
          (SPA), will prevail. THE DEVELOPER SHALL NOT BE HELD RESPONSIBLE FOR
          ANY DISCREPANCIES, INACCURACIES, ERRORS, OR OMISSIONS IN THE RENDERS,
          NOR FOR ANY CONSEQUENCES, LOSSES, OR DAMAGES RESULTING FROM RELIANCE
          ON THEM AND MAKES NO GUARANTEES OF THEIR ACCURACY OR COMPLETENESS.
          Exterior Renders: These renders are non-binding, for illustrative
          purposes only, and subject to change without notice. In case of
          conflict, contractual documents, including the Sale and Purchase
          Agreement (SPA), will prevail. THE DEVELOPER SHALL NOT BE HELD
          RESPONSIBLE FOR ANY DISCREPANCIES, INACCURACIES, ERRORS, OR OMISSIONS
          IN THE RENDERS, NOR FOR ANY CONSEQUENCES, LOSSES, OR DAMAGES RESULTING
          FROM RELIANCE ON THEM AND MAKES NO GUARANTEES OF THEIR ACCURACY OR
          COMPLETENESS.
        </p>
      </div>

    
      <div className="bg-[#D5F0FACC] py-4 font-commuters">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6">
          <button className="flex items-center space-x-2 px-6 py-2 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition">
            <MdOutlineMailOutline size={18} />
            <span>REGISTER INTEREST</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-2 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition">
            <IoLogoWhatsapp size={18} />
            <span>WHATSAPP</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-2 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition">
            <FaPhone size={18} />
            <span>CALL</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
