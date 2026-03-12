/**
 * SECCIÓN 1: Hero Principal — Landing Editorial
 * Eslogan: "Si de verdad conoces tu valor, publica un libro"
 * CTA principal → Calendly
 * Trilogía visual: 5.000 Millas (rojo) + El Diamante (negro) + El León Interior (azul)
 * Fórmula: BARCO + DIAMANTE = LEÓN
 */

import { motion } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/carlosmedinamentor/llamada-de-30-minutos";

const BOOK_5000 = "https://private-us-east-1.manuscdn.com/sessionFile/YcthyPkPZO50JZDDdtI97p/sandbox/pISWcsBMxmutexZJXmxt8k-img-1_1772112080000_na1fn_Ym9vay01MDAwbWlsbGFz.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWN0aHlQa1BaTzUwSlpERGR0STk3cC9zYW5kYm94L3BJU1djc0JNeG11dGV4WkpYbXh0OGstaW1nLTFfMTc3MjExMjA4MDAwMF9uYTFmbl9ZbTl2YXkwMU1EQXdiV2xzYkdGei5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dnoviM8cK5aPOvB6e4LoJXLmPfRw9fZLZkEEF0qn53D9aayD9J1VRY~kqjDpPhxxUFaQ6~Lt05wHB7XL0zGDoYa912cAp2ag50Zj6aVAYaQ3Dxx9xZJzrKdCN3xiuNUMMFCyc6tN~FF-vTahhh7B5hNPsPNM2lstRFSxXa7Lkbtn06caHx80JnODEB0t2JC-AOVLO6LBnIgC7rwdCnfF~S2SjgG1Di62-vXTkzuqMx573cfPuX~gHOySjpllqhS7~LOtfmV~P-LDCRHnljkUmF9RXB88sQuzPciVMd2PiJ1enr-3MQbtJoxRnu2u3m4IKHH1Rnv6Hmec~NW~czQ8dQ__";

const BOOK_DIAMANTE = "https://private-us-east-1.manuscdn.com/sessionFile/YcthyPkPZO50JZDDdtI97p/sandbox/pISWcsBMxmutexZJXmxt8k-img-2_1772112068000_na1fn_Ym9vay1kaWFtYW50ZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWN0aHlQa1BaTzUwSlpERGR0STk3cC9zYW5kYm94L3BJU1djc0JNeG11dGV4WkpYbXh0OGstaW1nLTJfMTc3MjExMjA2ODAwMF9uYTFmbl9ZbTl2YXkxa2FXRnRZVzUwWlEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SMZ~OSeNNVuEnVSM2MRhHtHn3bqwhv4TPjCyBOXD-~AxtBeG6ZpLjqFtUPvy6rBrg9OkF35bvnvJlx7Dg-KAkjZNnnD0nTHG5qS8n9enrksAAR8krBlORVBOmlig9zdevDjRFdmeXns1ctnduZo59r4~cZ1qhFGP1Wqne0tpxqaNc74s8U6yExcgbaGTQwulA2X5WUeUqgTuPre46yCdvGWTBMDZNZB085f2A4B~nZ092K8OY49KQYv8VjUMYWNfFCAFrCtdfKxED-bc-3G9eUWzJAMTWHKjGf8jMq5wVoAbYMKXCngEHUZgGimqHoW4qSQDCdV0Hu09ZMxVN2XmXw__";

const BOOK_LEON = "https://private-us-east-1.manuscdn.com/sessionFile/YcthyPkPZO50JZDDdtI97p/sandbox/pISWcsBMxmutexZJXmxt8k-img-3_1772112092000_na1fn_Ym9vay1sZW9u.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWN0aHlQa1BaTzUwSlpERGR0STk3cC9zYW5kYm94L3BJU1djc0JNeG11dGV4WkpYbXh0OGstaW1nLTNfMTc3MjExMjA5MjAwMF9uYTFmbl9ZbTl2YXkxc1pXOXUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fuwAxIegvFEW9D4amhWe0p~DwLOv6bEWQNiVHvAPe3RoH9XqBYQ2YV5XEPABSj6Iu4zA~SpN5cFN7tFAOGEId4ccw04yxtpB3kmCQ944tJFzPx~4gOkgw~6x0mQlf0MmMsKKJqGlIxct~MbQ83K8Giibgm7yu8PNS6D-7EtLdxwPYrRNqhA59QYVm7FwJ6rSeZhdIOO6a2h1PhSH6MAcg-DZ5HbvZL6vIhMG0eHSNV~WsprUq3J8-HppTAxtPYQ1-Q3GeBIDiDTB99XQOQxdLOFu8zTAA9qtsWLeChMuvtcOqfNtXuTXe5Y0nc0lXKn6KjEIe9pfjo7eiBO9Gg21wg__";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden nautical-grid grain-overlay">
      {/* Radial gold glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200, 160, 74, 0.04), transparent 70%)'
      }} />

      <div className="container relative z-10 pt-24 pb-10 md:pt-28 md:pb-14">
        {/* Main hero content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="font-body text-[11px] tracking-[0.35em] uppercase font-medium" style={{ color: '#c8a04a' }}>
                5.000 Millas Editorial
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] tracking-[0.02em] mb-4"
              style={{ color: '#f5f0e6' }}
            >
              Si de verdad conoces tu valor,{" "}
              <span className="font-quote italic" style={{ color: '#c8a04a' }}>
                publica un libro.
              </span>
            </motion.h1>

            {/* Eslogan secundario */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="font-quote italic text-lg md:text-xl mb-6"
              style={{ color: 'rgba(200, 160, 74, 0.6)' }}
            >
              Los libros que te hacen pensar en grande.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-base md:text-lg leading-relaxed font-light max-w-xl mb-10"
              style={{ color: 'rgba(245, 240, 230, 0.55)' }}
            >
              Publicamos libros que posicionan expertos como líderes de su industria.
              En 21 días, tu conocimiento se convierte en tu activo más poderoso.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
                Quiero publicar mi libro
              </a>
              <a href="#servicios" className="btn-ghost">
                Ver servicios
              </a>
            </motion.div>
          </div>

          {/* Right: Trilogy visual — 3 books */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative flex items-end justify-center gap-3 md:gap-4 px-4">
              {/* Book 1: 5.000 Millas (Red) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative group"
                style={{ transform: 'rotate(-4deg)' }}
              >
                <img
                  src={BOOK_5000}
                  alt="5.000 Millas — Conócete a Ti Mismo"
                  className="w-32 sm:w-36 md:w-44 rounded-sm shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                  loading="eager"
                />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <span className="font-body text-[9px] tracking-[0.15em] uppercase" style={{ color: 'rgba(200, 160, 74, 0.7)' }}>El Barco</span>
                </div>
              </motion.div>

              {/* Plus sign */}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="font-display text-xl md:text-2xl self-center mb-8"
                style={{ color: 'rgba(200, 160, 74, 0.5)' }}
              >
                +
              </motion.span>

              {/* Book 2: El Diamante (Black) — center, slightly elevated */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
                className="relative group -mt-4"
              >
                <img
                  src={BOOK_DIAMANTE}
                  alt="El Diamante — Salud Heptadimensional"
                  className="w-32 sm:w-36 md:w-44 rounded-sm shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                  loading="eager"
                />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <span className="font-body text-[9px] tracking-[0.15em] uppercase" style={{ color: 'rgba(200, 160, 74, 0.7)' }}>El Diamante</span>
                </div>
              </motion.div>

              {/* Equals sign */}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="font-display text-xl md:text-2xl self-center mb-8"
                style={{ color: 'rgba(200, 160, 74, 0.5)' }}
              >
                =
              </motion.span>

              {/* Book 3: El León Interior (Blue) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="relative group"
                style={{ transform: 'rotate(4deg)' }}
              >
                <img
                  src={BOOK_LEON}
                  alt="El León Interior — Despierta Tu Fuerza"
                  className="w-32 sm:w-36 md:w-44 rounded-sm shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                  loading="eager"
                />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <span className="font-body text-[9px] tracking-[0.15em] uppercase" style={{ color: 'rgba(200, 160, 74, 0.7)' }}>El León</span>
                </div>
              </motion.div>
            </div>

            {/* Formula label below books */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="text-center mt-10"
            >
              <p className="font-quote italic text-sm md:text-base" style={{ color: 'rgba(200, 160, 74, 0.45)' }}>
                Barco + Diamante = León
              </p>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: 'rgba(245, 240, 230, 0.25)' }}>
                La trilogía de la transformación
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <span className="font-body text-[9px] tracking-[0.3em] uppercase" style={{ color: 'rgba(200, 160, 74, 0.4)' }}>
            Descubre
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8"
            style={{ background: 'linear-gradient(to bottom, #c8a04a, transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
