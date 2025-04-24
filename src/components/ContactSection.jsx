import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="bg-light py-24 px-6 font-playfair overflow-hidden">
      <div className="max-w-6xl mx-auto text-[#3b2e26]">
        {/* Título com animação */}
        <motion.h2
          className="text-4xl md:text-5xl text-primary mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Entre em Contato
        </motion.h2>

        {/* Grid de Contato */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ContactCard
            icon={<FaInstagram />}
            label="@dracamillaleutz"
            link="https://instagram.com/dracamillaleutz"
          />

          <ContactCard
            icon={<FaWhatsapp />}
            label="(13) 9 9806-6235"
            link="https://wa.me/551398062635"
          />

          <ContactCard
            icon={<FaEnvelope />}
            label="clinicaleutz@outloock.com"
            link="mailto:clinicaleutz@outloock.com"
          />

          <ContactCard
            icon={<FaMapMarkerAlt />}
            label="Olynto Rodrigues Dantas 343, sala 72, Santos - SP"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, link }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-6 border border-beige rounded-xl bg-white shadow-sm hover:shadow-md transition duration-300">
      <div className="text-white bg-primary p-4 rounded-full text-2xl">{icon}</div>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-[16px] font-light leading-snug hover:text-secondary transition"
        >
          {label}
        </a>
      ) : (
        <p className="text-[16px] font-light leading-snug">{label}</p>
      )}
    </div>
  );
}
