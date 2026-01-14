import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { OverviewSection } from '@/components/sections/OverviewSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ResidencesSection } from '@/components/sections/ResidencesSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <FeaturesSection />
        <GallerySection />
        <ResidencesSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
