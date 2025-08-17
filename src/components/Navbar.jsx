import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-primary-600 flex items-center gap-2">
          <span className="material-symbols-outlined">summarize</span>
          AI Meeting Summarizer
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          {["Home", "Summarize", "History", "About"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {link}
            </a>
          ))}
          
        </div>

        <div className="md:hidden">
          <details className="relative">
            <summary className="cursor-pointer">
              <span className="material-symbols-outlined text-2xl text-gray-700">
                menu
              </span>
            </summary>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
              {["Home", "Summarize", "History", "About"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50"
                >
                  {link}
                </a>
              ))}
              <hr className="my-2" />
              <a
                href="#"
                className="block px-4 py-2 text-primary-600 font-medium"
              >
                Login / Sign Up
              </a>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
