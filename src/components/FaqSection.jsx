import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPix, FaMoneyBillWave, FaCreditCard } from "react-icons/fa6";
import OrganicCurvesHybrid from "./OrganicCurvesHybrid";

const faqData = [
  {
    question: "Dra. a Rinomodelação é definitiva?",
    answer: "É um procedimento permanente. Não há necessidade de realizar mais de uma vez.",
  },
  {
    question: "O Protocolo Definer é preciso refazer anualmente ou apenas 1x?",
    answer:
      "O Protocolo Definer é realizado somente uma vez! Tem uma longa durabilidade, mas não é um procedimento definitivo pois estamos em constante processo de envelhecimento, varia de paciente para paciente.",
  },
  {
    question: "Ao realizar algum procedimento preciso me ausentar das atividades de rotina?",
    answer:
      "Não, todos os procedimentos realizados aqui na clínica são minimamente invasivos, portanto não há necessidade de se ausentar das atividades de rotina para nenhum procedimento.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: (
      <div className="flex flex-col gap-2 text-sm text-[#3b2e26]">
        <div className="flex items-center gap-2"><FaPix className="text-primary" /> Pix</div>
        <div className="flex items-center gap-2"><FaMoneyBillWave className="text-primary" /> Dinheiro</div>
        <div className="flex items-center gap-2"><FaCreditCard className="text-primary" /> Débito e Crédito</div>
      </div>
    ),
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-soft py-20 px-6">
        <OrganicCurvesHybrid className="top-0 left-0" />
      <motion.h2
        className="text-4xl md:text-5xl font-playfair text-center text-primary mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Perguntas Frequentes
      </motion.h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {faqData.map((faq, index) => {
          const isOpen = index === activeIndex;

          return (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md border border-beige cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="flex justify-between items-center p-6"
                onClick={() => setActiveIndex(isOpen ? null : index)}
              >
                <h3 className="text-lg md:text-xl font-medium text-secondary">
                  {faq.question}
                </h3>
                <span className="text-2xl text-accent">
                  {isOpen ? "-" : "+"}
                </span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    className="px-6 pb-6 text-[#5e4a3d] text-base leading-relaxed overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
