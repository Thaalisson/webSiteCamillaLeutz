import React, { useState, useEffect } from "react";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 font-light">
    {/* Topbar */}
    
  
    {/* Main Navbar */}
    <nav
      className={`transition-all duration-300 ${
        isScrolled
          ? "bg-[#9b7f67] text-white shadow-md"
          : "bg-transparent text-[#3b2e26]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-playfair tracking-widest">Dra. Camilla Leutz</div>
  
        <ul className="hidden md:flex gap-8 uppercase text-sm font-medium">
          <li className="hover:text-[#ccb194] transition">Início</li>
          <li className="hover:text-[#ccb194] transition">Sobre</li>
          <li className="hover:text-[#ccb194] transition">Serviços</li>
          <li className="hover:text-[#ccb194] transition">Contato</li>
        </ul>
  
        {/* Mobile toggle */}
        <div className="md:hidden">
          <button className="focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
  
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-[#3b2e26] shadow-md text-white">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li className="hover:text-[#ccb194] transition">Início</li>
            <li className="hover:text-[#ccb194] transition">Sobre</li>
            <li className="hover:text-[#ccb194] transition">Serviços</li>
            <li className="hover:text-[#ccb194] transition">Contato</li>
          </ul>
        </div>
      )}
    </nav>
  </header>
  
  );
}
