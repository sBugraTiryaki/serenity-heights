import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { LocationSection } from '@/components/sections/LocationSection';
import { FloorPlansSection } from '@/components/sections/FloorPlansSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        <LocationSection />
        <FloorPlansSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
