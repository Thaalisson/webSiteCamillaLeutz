import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import OrganicCurvesHybrid from "./OrganicCurvesHybrid";

const services = [
  {
    title: "Rinomodelação com Fios:",
    desc: "Técnica personalizada e pouco invasiva que remodela o nariz, corrigindo imperfeições."
  },
  {
    title: "Protocolo Definer e Lipo de Papada:",
    desc: "Procedimentos que rejuvenescem e devolvem o contorno do pescoço, eliminando flacidez e gordura localizada."
  },
  {
    title: "Lifting Temporal Não Cirúrgico:",
    desc: "Técnica que levanta e rejuvenesce, sem a necessidade de cirurgia invasiva."
  },
  {
    title: "Preenchimento Labial e Facial:",
    desc: "Tratamentos com ácido hialurônico para dar volume, corrigir assimetrias e devolver juventude ao rosto."
  },
  {
    title: "Toxina Botulínica:",
    desc: "Suaviza rugas e linhas de expressões, oferecendo um aspecto jovem e descansado, com uma aplicação precisa e personalizada."
  }
];

export default function Services() {
  return (
    <section className="relative bg-soft py-20 px-4 md:px-10 lg:px-20 overflow-hidden">
      {/* Linhas animadas de fundo */}
      <OrganicCurvesHybrid className="top-0 left-0" />
      {/* SVG decorativo sutil ao fundo */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ccb194"
          d="M0,192L48,181.3C96,171,192,149,288,138.7C384,128,480,128,576,122.7C672,117,768,107,864,117.3C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-primary mb-12">
          Nossos Principais Procedimentos Incluem:
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotate: 0.2 }}
              className="bg-primary rounded-2xl p-6 text-soft shadow-md hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="bg-beige w-8 h-8 flex items-center justify-center rounded-md mb-4">
                <FaStar className="text-primary text-sm" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-sm text-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 max-w-3xl mx-auto text-center relative z-10"
        >
          <p className="text-base md:text-lg text-[#3b2e26]">
            <span className="font-semibold text-black">
              Na Clínica Leutz, acreditamos que a verdadeira beleza está na confiança que cada paciente sente ao se olhar no espelho.
            </span>{" "}
            Todos os tratamentos são personalizados para garantir que os resultados estejam em sintonia com seus desejos e expectativas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}