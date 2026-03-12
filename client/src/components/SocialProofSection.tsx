/**
 * SECCIÓN 5: Prueba Social
 * Función: Cerrar dudas con evidencia
 * Título: "Más de 20 expertos ya publicaron con nosotros."
 * Datos duros + testimonios
 * Estética: Elegante, sobria, sin exageración
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: "10", label: "Libros propios" },
  { number: "20+", label: "Autores publicados" },
  { number: "1.000+", label: "Vidas impactadas" },
  { number: "5", label: "Años de experiencia" },
];

const testimonials = [
  {
    quote: "Tenía el conocimiento pero no sabía cómo convertirlo en un libro. Carlos no solo escribió mi historia, la elevó. Hoy mi libro es mi mejor tarjeta de presentación.",
    name: "Profesional del sector salud",
    role: "Autora publicada",
  },
  {
    quote: "El proceso fue impecable. En 21 días pasé de tener una idea a tener un libro publicado en Amazon. La calidad superó todas mis expectativas.",
    name: "Consultor de negocios",
    role: "Autor publicado",
  },
  {
    quote: "Autoridad Pro cambió mi posicionamiento por completo. No solo tengo un libro, tengo un sistema de diferenciación que trabaja por mí cada día.",
    name: "Mentor de liderazgo",
    role: "Autor publicado",
  },
];

export default function SocialProofSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="prueba-social" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #0a1628, #0d1b30, #0a1628)'
      }} />

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
            Prueba Social
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.02em] leading-[1.15] mb-4"
            style={{ color: '#f5f0e6' }}
          >
            Más de 20 expertos ya{" "}
            <span className="font-quote italic" style={{ color: '#c8a04a' }}>
              publicaron con nosotros.
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="gold-line w-16 mx-auto"
          />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl mb-1 gold-gradient">
                {stat.number}
              </div>
              <div className="font-body text-[10px] tracking-[0.2em] uppercase" style={{ color: 'rgba(245, 240, 230, 0.3)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-7 transition-all duration-700"
              style={{ border: '1px solid rgba(200, 160, 74, 0.08)', background: 'rgba(15, 31, 56, 0.3)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(200, 160, 74, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(200, 160, 74, 0.08)';
              }}
            >
              {/* Quote mark */}
              <div className="font-display text-5xl leading-none absolute top-4 right-5" style={{ color: 'rgba(200, 160, 74, 0.06)' }}>
                "
              </div>

              <p className="font-quote text-base leading-relaxed italic mb-6" style={{ color: 'rgba(245, 240, 230, 0.5)' }}>
                "{testimonial.quote}"
              </p>

              <div className="gold-line-left w-8 mb-4" />

              <div>
                <p className="font-body text-xs font-medium tracking-wide" style={{ color: 'rgba(245, 240, 230, 0.6)' }}>
                  {testimonial.name}
                </p>
                <p className="font-body text-[10px] tracking-[0.1em] uppercase mt-0.5" style={{ color: 'rgba(200, 160, 74, 0.4)' }}>
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
