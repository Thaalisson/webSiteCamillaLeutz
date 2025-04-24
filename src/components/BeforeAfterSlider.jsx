import React, { useRef, useState } from "react";

export default function BeforeAfterSlider({ before, after }) {
  const containerRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const startDrag = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const stopDrag = () => setIsDragging(false);

  const handleMove = (e) => {
    if (!isDragging) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const x = e.clientX || e.touches?.[0]?.clientX;
    if (!x) return;
    const relativeX = ((x - bounds.left) / bounds.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, relativeX)));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden cursor-ew-resize select-none rounded-lg shadow-lg"
      onMouseDown={startDrag}
      onMouseMove={handleMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchStart={startDrag}
      onTouchMove={handleMove}
      onTouchEnd={stopDrag}
    >
      {/* AFTER (sempre visível) */}
      <img
        src={after}
        alt="Depois"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* BEFORE (cortado dinamicamente) */}
      <div
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={before}
          alt="Antes"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Linha vertical */}
      <div
        className="absolute top-0 h-full z-10"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-1px)" }}
      >
        <div className="w-[2px] h-full bg-[#7f634b] opacity-70"></div>
      </div>

      {/* Bolinha de controle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 z-20 cursor-grab"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-6 h-6 rounded-full bg-[#7f634b] border-2 border-white shadow-md"></div>
      </div>
    </div>
  );
}
