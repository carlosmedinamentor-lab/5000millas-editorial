/**
 * SECCIÓN 6: Sobre Carlos Medina (El Autor Detrás del Sistema)
 * Función: Confianza. Mostrar que hay un ser humano real, con historia.
 * Foto profesional elegante + bio breve
 * Tono: Cero victimismo, cero ego. Solo testimonio y servicio.
 * "Soy un hombre bendecido que descubrió su vocación en la escritura."
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AUTHOR_IMG = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663384742163/dGLfXMzzBMtFUJqS.JPG?Expires=1803647988&Signature=rOUO2pWebn5Rq-K5Sb~t72Xi~oZFJ9gaNs73tYx55LwVWL381OE6en2DlXVCoiHYjZK9bwjSP9FhFDNTeswY0vXedjSAMZpVCLf5KtECAE8LDzvnwtgYk-ucvwkz1p6IjW~VsyoYH1TZTanv8DVtYvqAkf-At9fwP8q19VQAjVBBxyBnOGHJoQzxPyApsFJVJVlk3nnbfaUgFmOnATlhji7EI9BEU9Bvo0lpfDi5vdB3emzdNB3V6MPj2EYreHJadeES25ihDzZgs3CSbePrV6XrXVlf2tr~2mKyIF7D8YNndR9EEaRP81VF-9lyCfn~4Ej9Q7Ms-e469LL4FY2G~g__&Key-Pair-Id=K2HSFNDJXOU9YS";

export default function AuthorSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="nosotros" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-xs mx-auto lg:mx-0">
              {/* Offset gold frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3" style={{ border: '1px solid rgba(200, 160, 74, 0.12)' }} />
              <div className="relative overflow-hidden">
                <img
                  src={AUTHOR_IMG}
                  alt="Carlos Medina — Fundador de 5.000 Millas Editorial"
                  className="w-full aspect-[3/4] object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 via-transparent to-transparent" />
              </div>
              {/* Name overlay */}
              <div className="absolute bottom-5 left-5">
                <div className="font-display text-sm tracking-[0.15em]" style={{ color: '#c8a04a' }}>
                  Carlos Medina
                </div>
                <div className="font-body text-[9px] tracking-[0.12em] uppercase mt-0.5" style={{ color: 'rgba(245, 240, 230, 0.35)' }}>
                  Fundador, 5.000 Millas
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-[11px] tracking-[0.35em] uppercase font-medium block mb-4"
              style={{ color: 'rgba(200, 160, 74, 0.6)' }}
            >
              El Autor Detrás del Sistema
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.02em] leading-[1.15] mb-5"
              style={{ color: '#f5f0e6' }}
            >
              Un hombre bendecido que descubrió su vocación{" "}
              <span className="font-quote italic" style={{ color: '#c8a04a' }}>
                en la escritura.
              </span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="gold-line-left w-16 mb-7"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-sm md:text-base leading-relaxed font-light mb-6 max-w-lg"
              style={{ color: 'rgba(245, 240, 230, 0.5)' }}
            >
              Después de escribir 10 libros y transformar su propia vida a través de la
              escritura, Carlos decidió que su don no podía ser solo para él. 5.000 Millas
              Editorial nació para que tu conocimiento no muera contigo.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-body text-sm md:text-base leading-relaxed font-light mb-8 max-w-lg"
              style={{ color: 'rgba(245, 240, 230, 0.4)' }}
            >
              Autor de 10 libros publicados, creador de 62 sistemas integrados de
              transformación personal y profesional, y fundador de un conglomerado de
              empresas con propósito eterno. Colombiano radicado en España. Hombre de fe,
              padre, esposo.
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pl-5 relative"
              style={{ borderLeft: '1px solid rgba(200, 160, 74, 0.3)' }}
            >
              <p className="font-quote text-lg md:text-xl italic leading-relaxed" style={{ color: 'rgba(245, 240, 230, 0.6)' }}>
                "Soy un hombre increíblemente bendecido por el solo hecho de estar vivo,
                de tener una familia. Mis heridas me obligaron a buscar mi propia fuerza.
                Y en esa búsqueda, encontré un propósito más grande que yo mismo: servir."
              </p>
              <footer className="mt-4">
                <span className="font-body text-[10px] tracking-[0.2em] uppercase" style={{ color: '#c8a04a' }}>
                  — Carlos Medina
                </span>
              </footer>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
