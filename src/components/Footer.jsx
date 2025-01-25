import { RiExternalLinkLine } from "react-icons/ri";

export default function Footer() {
    return (
      <footer className="bg-gray-100 py-10 text-gray-800 min-h-80">
        <div className="container mx-auto px-4 text-center">

          <div className="mb-6">
            <p className="text-lg font-bold">BannerCraft</p>
            <p>Create banners that convert</p>
            <p>© 2024 - All rights reserved</p>
            <a
                    href="https://github.com/Eliott133"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-effect flex items-center">
                    Repo link <RiExternalLinkLine className="ml-1" />
            </a>
          </div>
  
          <div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-800 transition">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition">
                Contact
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition">
                Terms of Use
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  