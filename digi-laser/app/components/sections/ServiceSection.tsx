'use client';
import { ServiceCard } from '@/app/components/ui/ServiceCard';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { SERVICES } from '@/lib/constants';

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nossos Serviços"
          subtitle="Soluções completas para placas eletrônicas de todas as marcas e modelos"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}