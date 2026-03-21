/**
 * Página de Librería — Catálogo completo de libros
 * Design: Ultra Lujo Intelectual — Navy/Dorado/Crema
 * Dos secciones: "Biblioteca del Autor" (10 libros de Carlos) + "Autores Publicados"
 * Cada libro: portada, título, categoría, sinopsis, link a Amazon
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/carlosmedinamentor/llamada-de-30-minutos";
const LOGO_URL = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663384742163/tLrrKguLXZSctesy.png?Expires=1803647988&Signature=ThCncN~5SfR0u78Kiebstk5V4EIHuWP7QoIvs-nGSwj9Bv8tV5dT6gUUXGfwIdhzrD9bszhk6VqH2AEh~OgyfDILP65yfyr-mrjN3xKHdLblznrLREBwpiIulWpuK3kRAntMMY5gQtBCbH2SZ7qdFY~13zYN1WIwHWZ5EpKQyFzOjuMJiK2NtIS1~dRQeylxxXyoEaoZ6ucbloX3a7601C4K596BgDOtJ7qcG79ebX-dgajojgNS0w0UzrPRoSIsyPcCqoIADaH3NTLHuWLwjUdufxBPa3y12OY8B-KE9~~jPsxTu9Mgbkzj2GrxA5AFw1HLNBbONeLcAwLU2gq2ng__&Key-Pair-Id=K2HSFNDJXOU9YS";

// Trilogy book images
const BOOK_5000 = "https://private-us-east-1.manuscdn.com/sessionFile/YcthyPkPZO50JZDDdtI97p/sandbox/pISWcsBMxmutexZJXmxt8k-img-1_1772112080000_na1fn_Ym9vay01MDAwbWlsbGFz.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWN0aHlQa1BaTzUwSlpERGR0STk3cC9zYW5kYm94L3BJU1djc0JNeG11dGV4WkpYbXh0OGstaW1nLTFfMTc3MjExMjA4MDAwMF9uYTFmbl9ZbTl2YXkwMU1EQXdiV2xzYkdGei5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dnoviM8cK5aPOvB6e4LoJXLmPfRw9fZLZkEEF0qn53D9aayD9J1VRY~kqjDpPhxxUFaQ6~Lt05wHB7XL0zGDoYa912cAp2ag50Zj6aVAYaQ3Dxx9xZJzrKdCN3xiuNUMMFCyc6tN~FF-vTahhh7B5hNPsPNM2lstRFSxXa7Lkbtn06caHx80JnODEB0t2JC-AOVLO6LBnIgC7rwdCnfF~S2SjgG1Di62-vXTkzuqMx573cfPuX~gHOySjpllqhS7~LOtfmV~P-LDCRHnljkUmF9RXB88sQuzPciVMd2PiJ1enr-3MQbtJoxRnu2u3m4IKHH1Rnv6Hmec~NW~czQ8dQ__";
const BOOK_DIAMANTE = "https://private-us-east-1.manuscdn.com/sessionFile/YcthyPkPZO50JZDDdtI97p/sandbox/pISWcsBMxmutexZJXmxt8k-img-2_1772112068000_na1fn_Ym9vay1kaWFtYW50ZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWN0aHlQa1BaTzUwSlpERGR0STk3cC9zYW5kYm94L3BJU1djc0JNeG11dGV4WkpYbXh0OGstaW1nLTJfMTc3MjExMjA2ODAwMF9uYTFmbl9ZbTl2YXkxa2FXRnRZVzUwWlEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SMZ~OSeNNVuEnVSM2MRhHtHn3bqwhv4TPjCyBOXD-~AxtBeG6ZpLjqFtUPvy6rBrg9OkF35bvnvJlx7Dg-KAkjZNnnD0nTHG5qS8n9enrksAAR8krBlORVBOmlig9zdevDjRFdmeXns1ctnduZo59r4~cZ1qhFGP1Wqne0tpxqaNc74s8U6yExcgbaGTQwulA2X5WUeUqgTuPre46yCdvGWTBMDZNZB085f2A4B~nZ092K8OY49KQYv8VjUMYWNfFCAFrCtdfKxED-bc-3G9eUWzJAMTWHKjGf8jMq5wVoAbYMKXCngEHUZgGimqHoW4qSQDCdV0Hu09ZMxVN2XmXw__";
const BOOK_LEON = "https://private-us-east-1.manuscdn.com/sessionFile/YcthyPkPZO50JZDDdtI97p/sandbox/pISWcsBMxmutexZJXmxt8k-img-3_1772112092000_na1fn_Ym9vay1sZW9u.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWN0aHlQa1BaTzUwSlpERGR0STk3cC9zYW5kYm94L3BJU1djc0JNeG11dGV4WkpYbXh0OGstaW1nLTNfMTc3MjExMjA5MjAwMF9uYTFmbl9ZbTl2YXkxc1pXOXUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fuwAxIegvFEW9D4amhWe0p~DwLOv6bEWQNiVHvAPe3RoH9XqBYQ2YV5XEPABSj6Iu4zA~SpN5cFN7tFAOGEId4ccw04yxtpB3kmCQ944tJFzPx~4gOkgw~6x0mQlf0MmMsKKJqGlIxct~MbQ83K8Giibgm7yu8PNS6D-7EtLdxwPYrRNqhA59QYVm7FwJ6rSeZhdIOO6a2h1PhSH6MAcg-DZ5HbvZL6vIhMG0eHSNV~WsprUq3J8-HppTAxtPYQ1-Q3GeBIDiDTB99XQOQxdLOFu8zTAA9qtsWLeChMuvtcOqfNtXuTXe5Y0nc0lXKn6KjEIe9pfjo7eiBO9Gg21wg__";

interface Book {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string | null;
  trilogy: boolean;
  trilogySymbol?: string;
  amazonUrl?: string;
  author?: string;
  comingSoon?: boolean;
}

const carlosBooks: Book[] = [
  {
    title: "5.000 Millas",
    subtitle: "Conócete a Ti Mismo",
    category: "Trilogía Fundacional",
    description: "El viaje de autoconocimiento que inicia la transformación. Descubre quién eres realmente, más allá de las máscaras que el mundo te impuso.",
    image: "/covers/06-5000-millas-club-mentes-conscientes.jpg",
    trilogy: true,
    trilogySymbol: "El Barco",
  },
  {
    title: "El Método Diamante",
    subtitle: "Salud Heptadimensional",
    category: "Trilogía Fundacional",
    description: "Las 7 dimensiones de la salud integral: física, mental, emocional, espiritual, expresiva, interpersonal y financiera. Cultiva cada faceta de tu diamante interior.",
    image: "/covers/09-el-metodo-del-diamante.jpg",
    trilogy: true,
    trilogySymbol: "El Diamante",
  },
  {
    title: "El Método Simba",
    subtitle: "Despierta Tu Fuerza Interior",
    category: "Trilogía Fundacional",
    description: "Transformación en 21 días. Despierta al león que llevas dentro y toma el control de tu vida con acción decidida y propósito inquebrantable.",
    image: "/covers/07-el-metodo-simba.jpg",
    trilogy: true,
    trilogySymbol: "El León",
  },
  {
    title: "Despierta o Morirás Dos Veces",
    subtitle: "El despertar de la conciencia",
    category: "Transformación",
    description: "Un llamado urgente a despertar. No basta con estar vivo, hay que vivir despierto. Un libro que sacude y transforma desde la primera página.",
    image: "/covers/02-despierta-o-moriras-dos-veces.jpg",
    trilogy: false,
  },
  {
    title: "Ordenando el Ego",
    subtitle: "La batalla interior",
    category: "Transformación",
    description: "El ego no es tu enemigo, es tu herramienta más poderosa cuando aprendes a ordenarlo. Descubre cómo convertir tu mayor obstáculo en tu mayor aliado.",
    image: "/covers/08-ordenando-el-ego.jpg",
    trilogy: false,
  },
  {
    title: "Relaciones Sanas",
    subtitle: "El arte de conectar",
    category: "Identidad",
    description: "Las relaciones son el espejo de tu mundo interior. Aprende a construir vínculos que nutren, elevan y transforman desde la autenticidad.",
    image: null,
    trilogy: false,
  },
  {
    title: "El Arquetipo In",
    subtitle: "Tu identidad profunda",
    category: "Identidad",
    description: "Explora los arquetipos que habitan en ti y descubre cuál es la fuerza primordial que guía tu camino. Tu identidad más profunda, revelada.",
    image: "/covers/03-arquetipo-in.jpg",
    trilogy: false,
  },
  {
    title: "Anatomía del Alma",
    subtitle: "800 sonetos + arte IA",
    category: "Identidad",
    description: "Una obra monumental: 800 sonetos que diseccionan el alma humana, acompañados de arte generado por inteligencia artificial. Poesía y tecnología al servicio del espíritu.",
    image: "/covers/05-anatomia-del-alma.jpg",
    trilogy: false,
  },
  {
    title: "21 Lecciones de Sabiduría para Niños",
    subtitle: "Semillas de grandeza",
    category: "Sabiduría",
    description: "La sabiduría no tiene edad. 21 lecciones fundamentales para sembrar en los más pequeños las semillas de una vida extraordinaria.",
    image: "/covers/04-21-lecciones-sabiduria-ninos.jpg",
    trilogy: false,
  },
  {
    title: "Entiende la Escritura",
    subtitle: "El método Cervantes",
    category: "Mentalidad",
    description: "Domina el arte de escribir con propósito. Un método práctico para convertir tus ideas en textos que impactan, persuaden y transforman.",
    image: "/covers/01-cervantes-ha-llegado-tu-momento.jpg",
    trilogy: false,
  },
];

const publishedAuthors: Book[] = [
  {
    title: "Lo Jamás Contado",
    subtitle: "Una historia de valentía",
    category: "Testimonio",
    description: "Una historia poderosa que rompe el silencio. Irma comparte lo que nunca se atrevió a contar, con la fuerza de quien decide que su verdad merece ser escuchada.",
    image: null,
    trilogy: false,
    author: "Irma Blackman Lizardi",
  },
  {
    title: "El Arte de Comenzar de Nuevo",
    subtitle: "Reinventarse con propósito",
    category: "Transformación",
    description: "Comenzar de nuevo no es rendirse, es la decisión más valiente que puedes tomar. Una guía para reinventarte con propósito y convertir cada final en un nuevo comienzo.",
    image: null,
    trilogy: false,
    author: "Irma Blackman Lizardi",
  },
  {
    title: "TODO O NADA",
    subtitle: "Sin medias tintas",
    category: "Mentalidad",
    description: "65.000 palabras de pura determinación. Waldemar comparte su filosofía de vida sin filtros: o vas con todo, o no vayas. Un manifiesto para quienes no se conforman.",
    image: null,
    trilogy: false,
    author: "Waldemar Acuña Deza",
  },
  {
    title: "LeaderSHE",
    subtitle: "Liderazgo en femenino",
    category: "Liderazgo",
    description: "El liderazgo no tiene género, pero la perspectiva femenina lo transforma todo. Maylyn comparte las claves para liderar con autenticidad, empatía y poder.",
    image: null,
    trilogy: false,
    author: "Maylyn López",
  },
  {
    title: "El Arte de Habitar con Calma",
    subtitle: "Diseño interior consciente",
    category: "Diseño & Bienestar",
    description: "Tu hogar es reflejo de tu mundo interior. Rocío revela cómo el diseño de interiores consciente puede transformar no solo tu espacio, sino tu forma de vivir.",
    image: null,
    trilogy: false,
    author: "Rocío Marote",
  },
  {
    title: "Las Mujeres No Lloran, Facturan",
    subtitle: "Empoderamiento financiero",
    category: "Empoderamiento",
    description: "Un grito de guerra para mujeres que deciden tomar el control de su vida financiera. Kiara demuestra que el verdadero poder está en la independencia económica.",
    image: null,
    trilogy: false,
    author: "Kiara Fernández",
    comingSoon: true,
  },
];

function BookCard({ book, index, defaultAuthor = "Carlos Medina" }: { book: Book; index: number; defaultAuthor?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col transition-all duration-500"
      style={{
        border: book.trilogy ? '1px solid rgba(200, 160, 74, 0.2)' : '1px solid rgba(200, 160, 74, 0.06)',
        background: book.trilogy ? 'rgba(200, 160, 74, 0.03)' : 'rgba(15, 31, 56, 0.4)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(200, 160, 74, 0.3)';
        e.currentTarget.style.transform = 'translateY(-6px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = book.trilogy ? 'rgba(200, 160, 74, 0.2)' : 'rgba(200, 160, 74, 0.06)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Trilogy badge */}
      {book.trilogy && book.trilogySymbol && (
        <div className="absolute -top-3 left-4 z-10">
          <span className="font-body text-[9px] tracking-[0.2em] uppercase px-3 py-1"
            style={{ background: '#c8a04a', color: '#0a1628' }}>
            {book.trilogySymbol}
          </span>
        </div>
      )}

      {/* Coming soon badge */}
      {book.comingSoon && (
        <div className="absolute -top-3 right-4 z-10">
          <span className="font-body text-[9px] tracking-[0.2em] uppercase px-3 py-1"
            style={{ background: 'rgba(245, 240, 230, 0.15)', color: '#f5f0e6' }}>
            Próximamente
          </span>
        </div>
      )}

      {/* Book cover */}
      <div className="relative overflow-hidden aspect-[3/4]" style={{ background: '#0d1a30' }}>
        {book.image ? (
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* Placeholder cover for books without images */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center"
            style={{ background: 'linear-gradient(135deg, #0d1a30, #142240)' }}>
            <div className="w-12 h-[1px] mb-5" style={{ background: 'rgba(200, 160, 74, 0.3)' }} />
            <h4 className="font-display text-lg tracking-[0.04em] leading-tight mb-2" style={{ color: '#c8a04a' }}>
              {book.title}
            </h4>
            <p className="font-quote italic text-xs" style={{ color: 'rgba(200, 160, 74, 0.4)' }}>
              {book.subtitle}
            </p>
            <div className="w-12 h-[1px] mt-5" style={{ background: 'rgba(200, 160, 74, 0.3)' }} />
            <p className="font-body text-[9px] tracking-[0.2em] uppercase mt-4" style={{ color: 'rgba(245, 240, 230, 0.15)' }}>
              {book.author || defaultAuthor}
            </p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
      </div>

      {/* Book info */}
      <div className="p-5 flex flex-col flex-1">
        <span className="font-body text-[9px] tracking-[0.2em] uppercase mb-2" style={{ color: 'rgba(200, 160, 74, 0.5)' }}>
          {book.category}
        </span>
        <h3 className="font-display text-base md:text-lg tracking-[0.02em] mb-1" style={{ color: '#f5f0e6' }}>
          {book.title}
        </h3>
        <p className="font-quote italic text-xs mb-1" style={{ color: 'rgba(200, 160, 74, 0.5)' }}>
          {book.subtitle}
        </p>
        {book.author && (
          <p className="font-body text-[10px] tracking-[0.1em] mb-3" style={{ color: 'rgba(245, 240, 230, 0.35)' }}>
            por {book.author}
          </p>
        )}
        {!book.author && <div className="mb-2" />}
        <p className="font-body text-xs leading-relaxed font-light flex-1 mb-4" style={{ color: 'rgba(245, 240, 230, 0.35)' }}>
          {book.description}
        </p>

        {/* Amazon link placeholder */}
        <a
          href={book.amazonUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.15em] uppercase transition-colors duration-500 mt-auto"
          style={{ color: 'rgba(200, 160, 74, 0.6)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#c8a04a')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(200, 160, 74, 0.6)')}
          onClick={(e) => {
            if (!book.amazonUrl) {
              e.preventDefault();
              alert("Enlace a Amazon próximamente");
            }
          }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          Ver en Amazon
        </a>
      </div>
    </motion.div>
  );
}

export default function Libreria() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen" style={{ background: '#0a1628' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{ background: 'rgba(10, 22, 40, 0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(200, 160, 74, 0.08)' }}>
        <div className="container flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-2.5 group">
            <img src={LOGO_URL} alt="5.000 Millas Editorial" className="h-8 md:h-9 w-auto" />
            <span className="font-display text-lg md:text-xl tracking-[0.06em] font-semibold" style={{ color: '#c8a04a' }}>
              5.000 Millas
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="font-body text-xs tracking-[0.12em] uppercase transition-colors duration-500"
              style={{ color: 'rgba(245, 240, 230, 0.5)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c8a04a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245, 240, 230, 0.5)')}>
              Inicio
            </a>
            <a href="/#servicios" className="font-body text-xs tracking-[0.12em] uppercase transition-colors duration-500"
              style={{ color: 'rgba(245, 240, 230, 0.5)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c8a04a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245, 240, 230, 0.5)')}>
              Servicios
            </a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.12em] uppercase px-5 py-2.5 transition-all duration-500"
              style={{ border: '1px solid rgba(200, 160, 74, 0.4)', color: '#c8a04a' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#c8a04a'; e.currentTarget.style.background = 'rgba(200, 160, 74, 0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(200, 160, 74, 0.4)'; e.currentTarget.style.background = 'transparent'; }}>
              Reservar Llamada
            </a>
          </div>
          {/* Mobile: simple back link */}
          <a href="/" className="md:hidden font-body text-xs tracking-[0.12em] uppercase" style={{ color: '#c8a04a' }}>
            Inicio
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden nautical-grid grain-overlay">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200, 160, 74, 0.04), transparent 70%)'
        }} />
        <div className="container relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-body text-[11px] tracking-[0.35em] uppercase font-medium block mb-5"
            style={{ color: 'rgba(200, 160, 74, 0.6)' }}
          >
            Librería 5.000 Millas
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl tracking-[0.02em] leading-[1.1] mb-5"
            style={{ color: '#f5f0e6' }}
          >
            Los libros que te hacen{" "}
            <span className="font-quote italic" style={{ color: '#c8a04a' }}>
              pensar en grande.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-sm md:text-base leading-relaxed font-light max-w-lg mx-auto"
            style={{ color: 'rgba(245, 240, 230, 0.45)' }}
          >
            10 libros de Carlos Medina y un catálogo creciente de autores publicados.
            Cada libro es una herramienta de transformación.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={heroInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="gold-line w-16 mx-auto mt-8"
          />
        </div>
      </section>

      {/* Trilogy Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="font-body text-[11px] tracking-[0.35em] uppercase font-medium block mb-3"
              style={{ color: 'rgba(200, 160, 74, 0.6)' }}>
              La Trilogía Fundacional
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.02em] leading-[1.15] mb-3"
              style={{ color: '#f5f0e6' }}>
              Barco + Diamante ={" "}
              <span className="font-quote italic" style={{ color: '#c8a04a' }}>León</span>
            </h2>
            <p className="font-body text-sm font-light max-w-md mx-auto" style={{ color: 'rgba(245, 240, 230, 0.35)' }}>
              Tres libros. Un sistema completo de transformación personal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {carlosBooks.filter(b => b.trilogy).map((book, i) => (
              <BookCard key={book.title} book={book} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Full Catalog */}
      <section className="relative py-16 md:py-20 overflow-hidden grain-overlay">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #0a1628, #081220, #0a1628)'
        }} />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="font-body text-[11px] tracking-[0.35em] uppercase font-medium block mb-3"
              style={{ color: 'rgba(200, 160, 74, 0.6)' }}>
              Biblioteca del Autor
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.02em] leading-[1.15] mb-3"
              style={{ color: '#f5f0e6' }}>
              10 libros de{" "}
              <span className="font-quote italic" style={{ color: '#c8a04a' }}>Carlos Medina</span>
            </h2>
            <p className="font-body text-sm font-light max-w-md mx-auto" style={{ color: 'rgba(245, 240, 230, 0.35)' }}>
              Transformación, identidad, sabiduría y mentalidad. Cada libro es un paso más en el viaje.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {carlosBooks.filter(b => !b.trilogy).map((book, i) => (
              <BookCard key={book.title} book={book} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Published Authors Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="font-body text-[11px] tracking-[0.35em] uppercase font-medium block mb-3"
              style={{ color: 'rgba(200, 160, 74, 0.6)' }}>
              Autores Publicados
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.02em] leading-[1.15] mb-3"
              style={{ color: '#f5f0e6' }}>
              Expertos que ya publicaron{" "}
              <span className="font-quote italic" style={{ color: '#c8a04a' }}>con nosotros.</span>
            </h2>
            <p className="font-body text-sm font-light max-w-lg mx-auto" style={{ color: 'rgba(245, 240, 230, 0.35)' }}>
              Cada autor que publica con 5.000 Millas Editorial se convierte en referente de su industria.
              Próximamente aquí sus libros.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {publishedAuthors.map((book, i) => (
              <BookCard key={book.title} book={book} index={i} defaultAuthor="" />
            ))}
          </div>

          {/* CTA to publish */}
          <div className="text-center mt-12">
            <p className="font-body text-xs font-light mb-5" style={{ color: 'rgba(245, 240, 230, 0.3)' }}>
              ¿Quieres ver tu libro aquí?
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 transition-all duration-500"
              style={{ border: '1px solid rgba(200, 160, 74, 0.3)', color: '#c8a04a' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#c8a04a'; e.currentTarget.style.background = 'rgba(200, 160, 74, 0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(200, 160, 74, 0.3)'; e.currentTarget.style.background = 'transparent'; }}
            >
              Quiero publicar mi libro
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-20 md:py-28 overflow-hidden grain-overlay">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(200, 160, 74, 0.06), transparent 70%)'
        }} />
        <div className="container relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.02em] leading-[1.15] max-w-2xl mx-auto mb-5"
            style={{ color: '#f5f0e6' }}
          >
            Si de verdad conoces tu valor,{" "}
            <span className="font-quote italic" style={{ color: '#c8a04a' }}>publica un libro.</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={ctaInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="gold-line w-16 mx-auto mb-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Reservar llamada estratégica
            </a>
            <a href="/" className="btn-ghost">
              Volver al inicio
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10" style={{ borderTop: '1px solid rgba(200, 160, 74, 0.08)' }}>
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <img src={LOGO_URL} alt="" className="h-6 w-auto" />
            <span className="font-display text-sm tracking-[0.08em] font-semibold" style={{ color: '#c8a04a' }}>5.000 Millas Editorial</span>
          </div>
          <p className="font-body text-[9px] tracking-[0.12em]" style={{ color: 'rgba(245, 240, 230, 0.12)' }}>
            &copy; {new Date().getFullYear()} 5.000 Millas Editorial. Todos los derechos reservados.
          </p>
          <p className="font-quote italic text-[9px] mt-1" style={{ color: 'rgba(245, 240, 230, 0.12)' }}>
            Dios al centro. Siempre.
          </p>
        </div>
      </footer>
    </div>
  );
}
