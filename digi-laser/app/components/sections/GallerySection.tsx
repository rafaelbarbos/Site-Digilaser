'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { GALLERY_IMAGES } from '@/lib/constants';

export function GallerySection() {
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Galeria de Trabalhos"
          subtitle="Antes e depois de alguns dos nossos reparos"
        />

        {/* Masonry via CSS columns — sem dependência */}
        <div className="columns-2 md:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl break-inside-avoid cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Placa Recuperada</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary">Ver Mais</Button>
        </div>
      </div>
    </section>
  );
}