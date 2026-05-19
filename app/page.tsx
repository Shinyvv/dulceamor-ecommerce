import { CustomCakesSection } from "@/components/sections/custom-cakes-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MainWhatsAppCta } from "@/components/sections/main-whatsapp-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProductsSection />
      <ExperienceSection />
      <CustomCakesSection />
      <MainWhatsAppCta />
    </>
  );
}

