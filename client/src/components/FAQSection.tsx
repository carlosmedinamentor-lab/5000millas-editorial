/**
 * SECCIÓN 7: FAQ
 * Función: Matar objeciones con elegancia
 * Acordeones con línea dorada separando cada pregunta
 * Al expandir, la respuesta aparece con animación suave
 * Estética: Elegante, no infantil. Método Socrático.
 */

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "¿Y si no soy escritor?",
    answer: "No necesitas serlo. Carlos escribe por ti. Tú pones el conocimiento, nosotros las palabras. Cada frase refleja tu voz, tu experiencia, tu autoridad. El resultado es un libro que suena a ti, porque nace de ti.",
  },
  {
    question: "¿Realmente en 21 días?",
    answer: "Sí. El sistema está probado. No es magia, es método. Un proceso estructurado de producción editorial que combina tu expertise con nuestra capacidad de ejecución. 21 días desde que arrancamos hasta que tu libro está publicado en Amazon.",
  },
  {
    question: "¿Un libro sirve de algo para mi negocio?",
    answer: "Si tú ahora mismo estuvieras comenzando y alguien te ofreciera un libro de una persona con 20 años de experiencia en tu campo, ¿eso te sería útil? Un libro es la herramienta de posicionamiento más poderosa que existe. Trabaja por ti 24/7, genera confianza antes de la primera conversación, y te diferencia de toda tu competencia.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer: "Depende del servicio. Publicación en 21 Días tiene precio fijo. Autoridad Pro es una inversión personalizada porque incluye un sistema completo de posicionamiento. Reserva tu llamada estratégica gratuita para que podamos evaluarlo juntos.",
  },
  {
    question: "¿Qué pasa después de publicar?",
    answer: "Tu libro trabaja 24/7 como tu mejor tarjeta de presentación. Con Autoridad Pro, además recibes acompañamiento post-publicación para maximizar el impacto: estrategia de contenido, posicionamiento en redes, y optimización continua de tu autoridad.",
  },
  {
    question: "¿Usas IA para escribir?",
    answer: "La IA es un instrumento, como un piano. El músico eres tú. Carlos usa IA como escriba inteligente para canalizar TU voz auténtica, nunca para generar contenido genérico. El resultado es un libro que solo tú podrías haber escrito, producido con la eficiencia del siglo XXI.",
  },
];

function FAQItem({ faq, index, isOpen, onToggle }: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ borderBottom: '1px solid rgba(200, 160, 74, 0.08)' }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group transition-colors duration-500"
      >
        <span className="font-display text-base md:text-lg tracking-[0.02em] pr-4 transition-colors duration-500"
          style={{ color: isOpen ? '#c8a04a' : '#f5f0e6' }}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 w-6 h-6 flex items-center justify-center"
        >
          <svg className="w-4 h-4" fill="none" stroke={isOpen ? '#c8a04a' : 'rgba(245, 240, 230, 0.3)'} strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm leading-relaxed font-light pb-6 pr-10 max-w-2xl" style={{ color: 'rgba(245, 240, 230, 0.45)' }}>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #0a1628, #0d1b30, #0a1628)'
      }} />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <span className="font-body text-[11px] tracking-[0.35em] uppercase font-medium" style={{ color: 'rgba(200, 160, 74, 0.6)' }}>
              Preguntas Frecuentes
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl tracking-[0.02em] leading-[1.15] text-center mb-4"
            style={{ color: '#f5f0e6' }}
          >
            Lo que necesitas{" "}
            <span className="font-quote italic" style={{ color: '#c8a04a' }}>
              saber.
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="gold-line w-16 mx-auto mb-12"
          />

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ borderTop: '1px solid rgba(200, 160, 74, 0.08)' }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
