import React from "react";
import { motion } from "framer-motion";
import BeforeAfterSlider from "./BeforeAfterSlider";
import before from "../assets/images/before.png";
import after from "../assets/images/after.png";

export default function BeforeAfterSection() {
  return (
    <section className="bg-soft py-20 px-6 overflow-hidden">
      {/* Título com animação */}
      <motion.h2
        className="text-4xl md:text-5xl font-playfair text-center text-primary mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Conheça mais a fundo os nossos procedimentos:
      </motion.h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imagem comparativa com fade-in */}
        <motion.div
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <BeforeAfterSlider before={before} after={after} />
          <p className="mt-4 text-center text-base text-primary font-light">
            Resultados reais de procedimentos estéticos com foco em harmonia e naturalidade.
          </p>
        </motion.div>

        {/* Texto explicativo com animação */}
        <motion.div
          className="text-primary text-base leading-relaxed font-light"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-4 bg-accent text-light inline-block px-5 py-2 rounded">
            Rinomodelação com Fios
          </h3>

          <h4 className="font-semibold mb-4 underline text-secondary text-lg">
            O seu perfil te incomoda? Giba Alta? Ponta Bulbosa ou Caída?
          </h4>

          <p className="text-secondary text-base md:text-lg whitespace-pre-line">
            A Rinomodelação com Fios é uma técnica minimamente invasiva, que proporciona mudanças
            significativas no nariz sem a necessidade de se expor ao centro cirúrgico.

            {"\n\n"}
            Realizada apenas com anestesia local, é possível afinar a ponta do nariz, corrigir
            irregularidades no dorso e elevar o perfil nasal. O procedimento é realizado em
            consultório, com duração média de 60 minutos. A recuperação é rápida e não há
            necessidade de afastamento do trabalho ou das atividades de rotina.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
