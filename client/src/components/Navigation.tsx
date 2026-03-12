/**
 * Navigation — Fixed top nav
 * Design: Ultra Lujo Intelectual — Navy/Dorado/Crema
 * Logo velero dorado + "5.000 Millas"
 * Links: Servicios, Proceso, Nosotros, Librería, FAQ
 * CTA: "Reservar Llamada" → Calendly
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/carlosmedinamentor/llamada-de-30-minutos";
const LOGO_URL = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663384742163/tLrrKguLXZSctesy.png?Expires=1803647988&Signature=ThCncN~5SfR0u78Kiebstk5V4EIHuWP7QoIvs-nGSwj9Bv8tV5dT6gUUXGfwIdhzrD9bszhk6VqH2AEh~OgyfDILP65yfyr-mrjN3xKHdLblznrLREBwpiIulWpuK3kRAntMMY5gQtBCbH2SZ7qdFY~13zYN1WIwHWZ5EpKQyFzOjuMJiK2NtIS1~dRQeylxxXyoEaoZ6ucbloX3a7601C4K596BgDOtJ7qcG79ebX-dgajojgNS0w0UzrPRoSIsyPcCqoIADaH3NTLHuWLwjUdufxBPa3y12OY8B-KE9~~jPsxTu9Mgbkzj2GrxA5AFw1HLNBbONeLcAwLU2gq2ng__&Key-Pair-Id=K2HSFNDJXOU9YS";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Librería", href: "/libreria" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          background: scrolled ? "rgba(10, 22, 40, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(200, 160, 74, 0.08)" : "1px solid transparent",
        }}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo with sailboat */}
          <a href="/" className="flex items-center gap-2.5 group">
            <img
              src={LOGO_URL}
              alt="5.000 Millas Editorial"
              className="h-8 md:h-9 w-auto transition-transform duration-500 group-hover:scale-105"
            />
            <span className="font-display text-lg md:text-xl tracking-[0.06em] font-semibold" style={{ color: '#c8a04a' }}>
              5.000 Millas
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-xs tracking-[0.12em] uppercase transition-colors duration-500"
                style={{ color: 'rgba(245, 240, 230, 0.5)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#c8a04a')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245, 240, 230, 0.5)')}
              >
                {link.label}
              </a>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.12em] uppercase px-5 py-2.5 transition-all duration-500"
              style={{ border: '1px solid rgba(200, 160, 74, 0.4)', color: '#c8a04a' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#c8a04a';
                e.currentTarget.style.background = 'rgba(200, 160, 74, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(200, 160, 74, 0.4)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Reservar Llamada
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menú"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1px]"
              style={{ background: '#c8a04a' }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[1px]"
              style={{ background: '#c8a04a' }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1px]"
              style={{ background: '#c8a04a' }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: 'rgba(10, 22, 40, 0.98)' }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="font-display text-2xl tracking-[0.06em]"
                style={{ color: '#f5f0e6' }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="btn-gold mt-4"
            >
              Reservar Llamada
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
