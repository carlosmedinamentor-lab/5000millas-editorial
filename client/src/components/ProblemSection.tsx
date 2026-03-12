/**
 * SECCIÓN 2: El Problema (Empatía)
 * Función: Hacer que el visitante sienta que le estamos leyendo la mente. Método Socrático.
 * Título: "La paradoja del experto invisible"
 * 3-4 bloques de dolor en segunda persona
 * Cierre puente: "Si alguna de estas frases te describe, sigue leyendo."
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const painPoints = [
  {
    text: "Tienes 20 años de experiencia, has transformado decenas de vidas, pero cuando alguien busca un experto en tu área... no te encuentra.",
  },
  {
    text: "Publicas contenido gratis a diario, pero los clientes siguen llegando por precio, no por valor. Tu autoridad se diluye en un mar de ruido digital.",
  },
  {
    text: "Sabes que un libro cambiaría tu posicionamiento, pero no tienes tiempo, no sabes cómo empezar, o ya lo intentaste y quedó a medias.",
  },
  {
    text: "Ves a otros con menos experiencia que tú posicionándose como referentes. Y te preguntas: ¿cuándo me toca a mí?",
  },
];

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #0a1628, #0d1b30, #0a1628)'
      }} />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <span className="font-body text-[11px] tracking-[0.35em] uppercase font-medium" style={{ color: 'rgba(200, 160, 74, 0.6)' }}>
              ¿Te suena esto?
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.02em] leading-[1.15] text-center mb-4"
            style={{ color: '#f5f0e6' }}
          >
            La paradoja del{" "}
            <span className="font-quote italic" style={{ color: '#c8a04a' }}>
              experto invisible
            </span>
          </motion.h2>

          {/* Gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="gold-line w-16 mx-auto mb-14"
          />

          {/* Pain points */}
          <div className="space-y-8">
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-5 items-start"
              >
                {/* Gold dash */}
                <div className="mt-3 shrink-0">
                  <div className="w-5 h-[1px]" style={{ background: 'rgba(200, 160, 74, 0.4)' }} />
                </div>
                <p className="font-quote text-lg md:text-xl leading-relaxed italic" style={{ color: 'rgba(245, 240, 230, 0.55)' }}>
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bridge close */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-14 text-center"
          >
            <div className="gold-line w-12 mx-auto mb-8" />
            <p className="font-body text-sm md:text-base tracking-wide" style={{ color: '#c8a04a' }}>
              Si alguna de estas frases te describe, sigue leyendo.
              <br />
              <span style={{ color: 'rgba(245, 240, 230, 0.4)' }}>
                Esto fue diseñado para ti.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
