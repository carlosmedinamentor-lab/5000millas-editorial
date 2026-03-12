/**
 * SECCIÓN 8: CTA Final + Footer
 * Función CTA: El último empujón
 * Título: "Tu conocimiento merece ser publicado. Tu legado merece ser eterno."
 * CTA grande dorado + secundario
 * Fondo: gradiente dorado sutil o imagen océano desaturada
 * Footer: Limpio, línea divisora dorada superior sutil, navy oscuro
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/YcthyPkPZO50JZDDdtI97p/sandbox/7X0WGpeN2E8YEAgzrRZ84h-img-1_1772107637000_na1fn_aGVyby1tYWlu.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWN0aHlQa1BaTzUwSlpERGR0STk3cC9zYW5kYm94LzdYMFdHcGVOMkU4WUVBZ3pyUlo4NGgtaW1nLTFfMTc3MjEwNzYzNzAwMF9uYTFmbl9hR1Z5YnkxdFlXbHUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AUkwVtax69OEzlcYJKSJcztcjHZUGxfe53t3Ig-93d5LLFDXTnR3rGHUV-IYNG0-0cDdH27kwgVXaJaU-IjDKdOSK3oouN7ty7LHxDpCMjePSmMN-pewFTAxm6D0YsJaqRkztflXlw4NRAoByYpYPS00R1kKS9NEM1mjllVeiJeXLR2np56ptgEb1stA~jLGsOFNq-wNVEIbJMcIF2y1gLqxmD6knraf4uxxZtTjmzM9xj9-NGfiokwjEtIJzeITDntBOzXS5e-aQ8MdvHYzsn-WRijlihdIbRK~CpS9xhcJYjVRBCleOLc0buVCiwGQkMl1upRyS1QRG8MgUtE-OQ__";

export default function FooterSection() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* CTA Final Section */}
      <section id="cta-final" ref={ctaRef} className="relative py-28 md:py-36 overflow-hidden">
        {/* Background: ocean image desaturated */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt=""
            className="w-full h-full object-cover opacity-[0.08]"
            loading="lazy"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, #0a1628, rgba(10, 22, 40, 0.85), #0a1628)'
          }} />
          {/* Gold radial glow */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(200, 160, 74, 0.06), transparent 70%)'
          }} />
        </div>

        <div className="container relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-body text-[11px] tracking-[0.35em] uppercase font-medium block mb-6"
            style={{ color: 'rgba(200, 160, 74, 0.6)' }}
          >
            Da el Primer Paso
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] tracking-[0.02em] leading-[1.15] max-w-3xl mx-auto mb-5"
            style={{ color: '#f5f0e6' }}
          >
            Tu conocimiento merece ser publicado.
            <br />
            Tu legado merece ser{" "}
            <span className="font-quote italic" style={{ color: '#c8a04a' }}>
              eterno.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-sm md:text-base leading-relaxed font-light max-w-lg mx-auto mb-10"
            style={{ color: 'rgba(245, 240, 230, 0.45)' }}
          >
            Reserva tu llamada estratégica gratuita y descubre cómo convertir tu
            experiencia en el libro que posiciona tu autoridad.
          </motion.p>

          {/* Gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="gold-line w-20 mx-auto mb-10"
          />

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://calendly.com/carlosmedinamentor/llamada-de-30-minutos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm tracking-[0.15em]"
            >
              Reservar mi llamada estratégica
            </a>
            <a href="/libreria" className="btn-ghost">
              Ver librería
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12" style={{ borderTop: '1px solid rgba(200, 160, 74, 0.08)' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Brand */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-3">
                <img src="https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663384742163/tLrrKguLXZSctesy.png?Expires=1803647988&Signature=ThCncN~5SfR0u78Kiebstk5V4EIHuWP7QoIvs-nGSwj9Bv8tV5dT6gUUXGfwIdhzrD9bszhk6VqH2AEh~OgyfDILP65yfyr-mrjN3xKHdLblznrLREBwpiIulWpuK3kRAntMMY5gQtBCbH2SZ7qdFY~13zYN1WIwHWZ5EpKQyFzOjuMJiK2NtIS1~dRQeylxxXyoEaoZ6ucbloX3a7601C4K596BgDOtJ7qcG79ebX-dgajojgNS0w0UzrPRoSIsyPcCqoIADaH3NTLHuWLwjUdufxBPa3y12OY8B-KE9~~jPsxTu9Mgbkzj2GrxA5AFw1HLNBbONeLcAwLU2gq2ng__&Key-Pair-Id=K2HSFNDJXOU9YS" alt="" className="h-7 w-auto" />
                <span className="font-display text-base tracking-[0.08em] font-semibold" style={{ color: '#c8a04a' }}>5.000 Millas</span>
              </div>
              <p className="font-body text-xs leading-relaxed font-light max-w-xs" style={{ color: 'rgba(245, 240, 230, 0.25)' }}>
                Editorial de transformación personal. Publicamos libros que posicionan
                expertos como líderes de su industria.
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <div className="font-body text-[9px] tracking-[0.25em] uppercase mb-3" style={{ color: 'rgba(245, 240, 230, 0.2)' }}>
                Navegación
              </div>
              <nav className="space-y-2">
                {[
                  { label: "Servicios", href: "#servicios" },
                  { label: "Proceso", href: "#proceso" },
                  { label: "Nosotros", href: "#nosotros" },
                  { label: "Librería", href: "/libreria" },
                  { label: "FAQ", href: "#faq" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block font-body text-xs transition-colors duration-500"
                    style={{ color: 'rgba(245, 240, 230, 0.35)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#c8a04a')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245, 240, 230, 0.35)')}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div className="md:col-span-3">
              <div className="font-body text-[9px] tracking-[0.25em] uppercase mb-3" style={{ color: 'rgba(245, 240, 230, 0.2)' }}>
                Conecta
              </div>
              <div className="space-y-2">
                {[
                  { label: "Instagram", href: "https://instagram.com/oficialcarlosmedina" },
                  { label: "TikTok", href: "https://tiktok.com/@oficialcarlosmedina" },
                  { label: "YouTube", href: "https://youtube.com/@oficialcarlosmedina" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-body text-xs transition-colors duration-500"
                    style={{ color: 'rgba(245, 240, 230, 0.35)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#c8a04a')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245, 240, 230, 0.35)')}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="md:col-span-2">
              <div className="font-body text-[9px] tracking-[0.25em] uppercase mb-3" style={{ color: 'rgba(245, 240, 230, 0.2)' }}>
                Legal
              </div>
              <div className="space-y-2">
                <a href="#" className="block font-body text-xs transition-colors duration-500"
                  style={{ color: 'rgba(245, 240, 230, 0.35)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#c8a04a')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245, 240, 230, 0.35)')}>
                  Privacidad
                </a>
                <a href="mailto:contacto@5000millas.com" className="block font-body text-xs transition-colors duration-500"
                  style={{ color: 'rgba(245, 240, 230, 0.35)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#c8a04a')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245, 240, 230, 0.35)')}>
                  Contacto
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(200, 160, 74, 0.04)' }}>
            <div className="font-body text-[9px] tracking-[0.12em]" style={{ color: 'rgba(245, 240, 230, 0.12)' }}>
              &copy; {new Date().getFullYear()} 5.000 Millas Editorial. Todos los derechos reservados.
            </div>
            <div className="font-body text-[9px] tracking-[0.12em] font-quote italic" style={{ color: 'rgba(245, 240, 230, 0.12)' }}>
              Dios al centro. Siempre.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
