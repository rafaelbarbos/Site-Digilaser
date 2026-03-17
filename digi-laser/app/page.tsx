import { Navbar }              from '@/components/layout/Navbar';
import { Footer }              from '@/components/layout/Footer';
import { HeroSection }         from '@/components/sections/HeroSection';
import { ServicesSection }     from '@/components/sections/ServicesSection';
import { WhyChooseSection }    from '@/components/sections/WhyChooseSection';
import { GallerySection }      from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection }      from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="font-['Inter',sans-serif] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}