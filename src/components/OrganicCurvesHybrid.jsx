import React from "react";
import { motion, useScroll, useTransform, useAnimationFrame } from "framer-motion";

export default function OrganicCurvesHybrid({ className = "" }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 20]);

  const [offsetL, setOffsetL] = React.useState(0);
  const [offsetR, setOffsetR] = React.useState(0);

  useAnimationFrame((t) => {
    setOffsetL((t / 10) % 1440); // esquerda → direita
    setOffsetR((t / 10) % 1440); // direita → esquerda
  });

  return (
    <motion.svg
      style={{ y }}
      className={`absolute w-full h-full z-0 opacity-20 ${className}`}
      viewBox="0 0 1440 500"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Gradientes */}
      <defs>
        <radialGradient id="sparkleGradient" r="50%" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#a73939" stopOpacity="1" />
          <stop offset="100%" stopColor="#a73939" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b19e8d" />
          <stop offset="100%" stopColor="#9b7f67" />
        </linearGradient>
      </defs>

      {/* Linha Wave da ESQUERDA → DIREITA */}
      <motion.path
        d={`
          M ${-1440 + offsetL},460 
          Q ${-1260 + offsetL},440 ${-1080 + offsetL},460 
          T ${-720 + offsetL},460 
          T ${-360 + offsetL},460 
          T ${0 + offsetL},460 
          T ${360 + offsetL},460 
          T ${720},460
        `}
        stroke="url(#waveGradient)"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Linha Wave da DIREITA → ESQUERDA */}
      <motion.path
        d={`
          M ${2880 - offsetR},460 
          Q ${2700 - offsetR},440 ${2520 - offsetR},460 
          T ${2160 - offsetR},460 
          T ${1800 - offsetR},460 
          T ${1440 - offsetR},460 
          T ${1080 - offsetR},460 
          T ${720},460
        `}
        stroke="url(#waveGradient)"
        strokeWidth="1.2"
        fill="none"
      />

      {/* ✨ Brilho no ponto de encontro (aparece com atraso) */}
      <motion.circle
        cx="720"
        cy="460"
        r="18"
        fill="url(#sparkleGradient)"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
