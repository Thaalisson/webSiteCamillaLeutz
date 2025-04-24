import React from "react";
import OrganicCurvesHybrid from "./OrganicCurvesHybrid";
import FloatingFace from "./FloatingFace";
import logo from "../assets/images/mainLogo.png"; // 👈 logo importado

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#f8f4f1] flex items-center overflow-hidden px-6">
      {/* Curva animada do fundo */}
      <OrganicCurvesHybrid className="top-0 left-0" />

      {/* LOGO MARCA D’ÁGUA */}
      <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
        <img
          src={logo}
          alt="Marca d'água logo Camilla Leutz"
          className="w-[600px] sm:w-[700px] md:w-[800px] opacity-5 object-contain"
        />
      </div>

      {/* Rosto flutuante com animação */}
      <FloatingFace />

      {/* Conteúdo textual principal */}
      <div className="relative z-10 max-w-2xl text-left">
        <p className="uppercase text-sm tracking-widest text-[#a68a6b] font-light mb-2">
          Nós priorizamos o seu
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-[#3b2e26] leading-tight font-playfair">
          Seu <span className="text-[#b19e8d]">Novo</span> Sorriso
        </h1>
        <p className="mt-4 text-[#5e4a3d] text-base font-light max-w-md">
          Estética avançada com essência feminina e naturalidade.
        </p>
        <button className="mt-8 px-8 py-3 bg-[#7f634b] hover:bg-[#9b7f67] text-white rounded-full shadow-lg transition-all duration-300">
          Agende sua consulta
        </button>
      </div>
    </section>
  );
}
