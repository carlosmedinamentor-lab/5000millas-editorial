/**
 * SECCIÓN 4: Cómo Funciona (El Proceso)
 * Función: Eliminar la incertidumbre. Mostrar que hay un SISTEMA, no improvisación.
 * Título: "De la idea al libro publicado en 21 días."
 * Timeline vertical con 5 pasos, línea dorada conectora
 * Estética: Números grandes en serif, elegante, no infantil
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Conversación estratégica",
    description: "Entendemos tu expertise, tu audiencia y tu objetivo. Diseñamos juntos la estructura del libro que te posicionará.",
    iconPath: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    tag: null,
  },
  {
    number: "02",
    title: "Producción",
    description: "Carlos escribe tu libro basado en tus conocimientos. Cada palabra es tuya, amplificada. Tu voz, tu autoridad.",
    iconPath: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
    tag: null,
  },
  {
    number: "03",
    title: "Diseño y publicación",
    description: "Portada profesional, formato Amazon KDP, publicación en la plataforma. Tu libro listo para el mundo.",
    iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    tag: null,
  },
  {
    number: "04",
    title: "Lanzamiento y posicionamiento",
    description: "Landing page, estrategia de lanzamiento, sistema de diferenciación. Tu libro como herramienta de autoridad.",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    tag: "Solo Autoridad Pro",
  },
  {
    number: "05",
    title: "Seguimiento post-publicación",
    description: "Tu libro trabaja para ti 24/7. Acompañamiento para maximizar el impacto y las oportunidades que genera.",
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    tag: "Solo Autoridad Pro",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="proceso" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-body text-[11px] tracking-[0.35em] uppercase font-medium block mb-4"
            style={{ color: 'rgba(200, 160, 74, 0.6)' }}
          >
            El Proceso
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.02em] leading-[1.15] mb-4"
            style={{ color: '#f5f0e6' }}
          >
            De la idea al libro publicado{" "}
            <span className="font-quote italic" style={{ color: '#c8a04a' }}>
              en 21 días.
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="gold-line w-16 mx-auto"
          />
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto relative">
          {/* Vertical gold line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px] origin-top"
            style={{ background: 'linear-gradient(to bottom, #c8a04a, rgba(200, 160, 74, 0.1))' }}
          />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 md:gap-8 relative"
              >
                {/* Number circle */}
                <div className="shrink-0 w-12 md:w-16 h-12 md:h-16 flex items-center justify-center relative z-10"
                  style={{ background: '#0a1628', border: '1px solid rgba(200, 160, 74, 0.2)' }}>
                  <span className="font-display text-sm md:text-base tracking-wider" style={{ color: '#c8a04a' }}>
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1 md:pt-3 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="rgba(200, 160, 74, 0.5)" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={step.iconPath} />
                    </svg>
                    <h3 className="font-display text-lg md:text-xl tracking-[0.02em]" style={{ color: '#f5f0e6' }}>
                      {step.title}
                    </h3>
                    {step.tag && (
                      <span className="font-body text-[8px] tracking-[0.15em] uppercase px-2 py-0.5 shrink-0"
                        style={{ border: '1px solid rgba(200, 160, 74, 0.2)', color: 'rgba(200, 160, 74, 0.5)' }}>
                        {step.tag}
                      </span>
                    )}
                  </div>
                  <p className="font-body text-sm leading-relaxed font-light" style={{ color: 'rgba(245, 240, 230, 0.4)' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
