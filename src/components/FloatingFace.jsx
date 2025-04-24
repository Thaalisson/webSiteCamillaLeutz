import React from "react";
import { motion, useAnimationFrame } from "framer-motion";
import AnimatedFaceSvg from "./AnimatedFaceSvg"; 

export default function FloatingFace() {
  const [offset, setOffset] = React.useState(0);

  useAnimationFrame((t) => {
    setOffset(Math.sin(t / 1000) * 8);
  });

  return (
    <motion.div
    style={{ translateY: offset }}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2 }}
    className="absolute right-0 top-[15%] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] text-primary z-0 pointer-events-none" // <- aplica a cor
  >
    <AnimatedFaceSvg />
  </motion.div>
  
  );
}
