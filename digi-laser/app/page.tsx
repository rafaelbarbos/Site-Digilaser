import { Navbar }              from '../app/components/layout/Navbar';
import { Footer }              from '../app/components/layout/Footer';
import { HeroSection }         from '../app/components/sections/HeroSection';
import { ServicesSection }     from '../app/components/sections/ServiceSection';
import { WhyChooseSection }    from '../app/components/sections/WhyChooseSection';
import { GallerySection }      from '../app/components/sections/GallerySection';
import { TestimonialsSection } from '../app/components/sections/TestimonialsSection';
import { ContactSection }      from '../app/components/sections/ContactSection';

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