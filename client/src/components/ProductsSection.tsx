/**
 * SECCIÓN 3: La Solución (Las 3 Líneas de Producto)
 * Función: Presentar las opciones con claridad y jerarquía
 * Título: "Tres caminos, un mismo destino: tu autoridad publicada."
 * 3 cards: Autoridad Pro (RECOMENDADO, borde dorado, más grande), Publicación 21 Días, Librería
 * NO incluir pricing de Autoridad Pro (high-ticket)
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const products = [
  {
    id: "pub21",
    name: "Publicación en 21 Días",
    subtitle: "El acceso",
    description: "Producción del libro con IA guiada, edición profesional, diseño de portada, formato KDP y publicación en Amazon. Para quien quiere su libro publicado profesionalmente y rápido.",
    includes: [
      "Escritura con IA guiada + edición profesional",
      "Diseño de portada profesional",
      "Formato Amazon KDP",
      "Publicación en Amazon",
      "Guía de lanzamiento básica",
    ],
    cta: "Publicar mi libro",
    ctaHref: "https://calendly.com/carlosmedinamentor/llamada-de-30-minutos",
    featured: false,
    iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    id: "autoridad",
    name: "Autoridad Pro",
    subtitle: "El buque insignia",
    description: "El sistema completo de transformación. Carlos escribe personalmente tu libro basado en tu expertise. Incluye publicación, landing page, estrategia de lanzamiento y acompañamiento de posicionamiento.",
    includes: [
      "Carlos escribe tu libro personalmente",
      "Publicación en Amazon KDP",
      "Landing page profesional del autor",
      "Estrategia de lanzamiento completa",
      "Acompañamiento ejecutivo de posicionamiento",
    ],
    cta: "Reservar llamada estratégica",
    ctaHref: "https://calendly.com/carlosmedinamentor/llamada-de-30-minutos",
    featured: true,
    badge: "Recomendado",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    id: "libreria",
    name: "Librería 5.000 Millas",
    subtitle: "El escaparate",
    description: "Catálogo completo de libros publicados: los 10 de Carlos Medina y los de nuestros autores. Cada libro con sinopsis, portada, link a Amazon y opción PDF.",
    includes: [
      "10 libros de Carlos Medina",
      "Catálogo de autores publicados",
      "Formato PDF y Amazon",
      "Sinopsis y portadas profesionales",
    ],
    cta: "Ver catálogo",
    ctaHref: "/libreria",
    featured: false,
    iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="servicios" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden grain-overlay">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #0a1628, #081220, #0a1628)'
      }} />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <span className="font-body text-[11px] tracking-[0.35em] uppercase font-medium" style={{ color: 'rgba(200, 160, 74, 0.6)' }}>
            Nuestros Servicios
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.02em] leading-[1.15] text-center mb-4"
          style={{ color: '#f5f0e6' }}
        >
          Tres caminos, un mismo destino:
          <br />
          <span className="font-quote italic" style={{ color: '#c8a04a' }}>
            tu autoridad publicada.
          </span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="gold-line w-16 mx-auto mb-16"
        />

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 items-stretch">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col p-7 md:p-8 transition-all duration-700 ${
                product.featured ? "lg:-mt-4 lg:mb-0 lg:pb-10" : ""
              }`}
              style={{
                border: product.featured
                  ? '1px solid rgba(200, 160, 74, 0.3)'
                  : '1px solid rgba(200, 160, 74, 0.08)',
                background: product.featured
                  ? 'rgba(200, 160, 74, 0.04)'
                  : 'rgba(15, 31, 56, 0.5)',
              }}
              onMouseEnter={(e) => {
                if (!product.featured) {
                  e.currentTarget.style.borderColor = 'rgba(200, 160, 74, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                } else {
                  e.currentTarget.style.borderColor = 'rgba(200, 160, 74, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!product.featured) {
                  e.currentTarget.style.borderColor = 'rgba(200, 160, 74, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                } else {
                  e.currentTarget.style.borderColor = 'rgba(200, 160, 74, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              {/* Badge */}
              {product.featured && product.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 font-semibold"
                    style={{ background: '#c8a04a', color: '#0a1628' }}>
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="mb-5 mt-1">
                <svg className="w-8 h-8" fill="none" stroke={product.featured ? '#c8a04a' : 'rgba(200, 160, 74, 0.5)'} strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={product.iconPath} />
                </svg>
              </div>

              {/* Name */}
              <h3 className="font-display text-xl md:text-2xl tracking-[0.02em] mb-1" style={{ color: '#f5f0e6' }}>
                {product.name}
              </h3>

              {/* Subtitle */}
              <p className="font-body text-xs tracking-[0.15em] uppercase mb-5" style={{ color: 'rgba(200, 160, 74, 0.5)' }}>
                {product.subtitle}
              </p>

              {/* Description */}
              <p className="font-body text-sm leading-relaxed font-light mb-6" style={{ color: 'rgba(245, 240, 230, 0.45)' }}>
                {product.description}
              </p>

              {/* Includes */}
              <div className="mb-8 flex-1">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: 'rgba(245, 240, 230, 0.25)' }}>
                  Incluye
                </p>
                <ul className="space-y-2.5">
                  {product.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <svg className="w-3.5 h-3.5 mt-0.5 shrink-0" fill="none" stroke={product.featured ? '#c8a04a' : 'rgba(200, 160, 74, 0.4)'} strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-body text-xs leading-relaxed" style={{ color: 'rgba(245, 240, 230, 0.4)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price / CTA */}
              <div className="mt-auto">
                {product.featured ? (
                  <>
                    <p className="font-body text-xs mb-4" style={{ color: 'rgba(245, 240, 230, 0.3)' }}>
                      Inversión personalizada. Reserva tu llamada para evaluarlo.
                    </p>
                    <a href={product.ctaHref} target={product.ctaHref.startsWith('http') ? '_blank' : undefined} rel={product.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined} className="btn-gold w-full justify-center text-center">
                      {product.cta}
                    </a>
                  </>
                ) : (
                  <a href={product.ctaHref} target={product.ctaHref.startsWith('http') ? '_blank' : undefined} rel={product.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined} className="btn-ghost w-full justify-center text-center">
                    {product.cta}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
