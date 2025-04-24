import React from "react";
import { motion } from "framer-motion";
import OrganicCurvesHybrid from "./OrganicCurvesHybrid";
import { FaCalendarAlt } from "react-icons/fa";
import aboutImage from "../assets/images/Testhero.png";

const title = "Sobre a Dra. Camilla Leutz";

export default function About() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative w-full bg-[#f8f4f1] py-28 px-6 overflow-hidden">
            {/* Fundo animado */}
            <OrganicCurvesHybrid className="top-0 left-0" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Foto */}
                <motion.div
                    className="w-full max-w-lg mx-auto mt-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={aboutImage}
                        alt="Dra. Camilla Leutz"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>

                {/* Texto */}
                <motion.div
                    className="text-[#3b2e26] text-base md:text-lg font-light leading-relaxed"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* Título com animação letra por letra */}
                    <motion.h2
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        className="text-4xl md:text-5xl font-playfair mb-4 text-secondary flex flex-wrap"
                        viewport={{ once: true }}
                    >
                        {[...title].map((char, i) => (
                            <motion.span key={i} variants={letter} className="mr-[0.5px]">
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h2>

                    <p className="text-accent text-base font-normal mb-6">
                        Conheça a profissional responsável por transformar autoestima com naturalidade.
                    </p>

                    <p className="mb-4 text-[#5e4a3d]">
                        <strong>Cirurgiã dentista</strong> especialista em <strong>Harmonização Orofacial</strong> e{" "}
                        <strong>Rinomodelação com fios</strong>. Formada pela Universidade Santa Cecília e graduanda em Cirurgia Bucomaxilofacial.
                    </p>

                    <p className="mb-4 text-[#5e4a3d]">
                        Há <strong>mais de 5 anos</strong> na área, com mais de <strong>50.000 procedimentos</strong> realizados,
                        Camilla foca em elevar a autoestima de forma <span className="text-secondary font-medium">elegante e natural</span>.
                    </p>

                    <p className="mb-6 text-[#5e4a3d]">
                        Aqui na <strong>Clínica Leutz</strong>, os protocolos são <span className="text-secondary font-medium">personalizados</span> e decididos junto ao paciente após uma avaliação cuidadosa.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="mt-4 px-8 py-3 bg-primary hover:bg-secondary text-white rounded-full shadow-lg flex items-center gap-3 transition-all duration-300"
                    >
                        <FaCalendarAlt className="text-sm" />
                        Agendar uma consulta
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
