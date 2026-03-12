/**
 * Home — Landing Editorial 5.000 Millas
 * Estructura exacta del brief creativo:
 * 1. Hero Principal (dolor + CTA)
 * 2. El Problema (empatía, método socrático)
 * 3. La Solución (3 líneas de producto)
 * 4. Cómo Funciona (proceso 5 pasos)
 * 5. Prueba Social (datos + testimonios)
 * 6. Sobre Carlos Medina
 * 7. FAQ
 * 8. CTA Final + Footer
 *
 * Estética: Ultra Lujo Intelectual
 * Paleta: Navy #0a1628 | Dorado #c8a04a | Crema #f5f0e6
 * Tipografías: Playfair Display | DM Sans | Cormorant Garamond
 */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ProductsSection from "@/components/ProductsSection";
import ProcessSection from "@/components/ProcessSection";
import SocialProofSection from "@/components/SocialProofSection";
import AuthorSection from "@/components/AuthorSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#0a1628' }}>
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <ProductsSection />
      <ProcessSection />
      <SocialProofSection />
      <AuthorSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
