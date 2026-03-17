'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/constants';

const CONTACT_ITEMS = [
  { icon: MapPin, text: 'Rua José Gomes Bailão, Qd. 16a Lt. 13 - Cidade Jardim, Goiânia - GO, 74423-342' },
  { icon: Phone,  text: '(62) 98481-6914' },
  { icon: Clock,  text: 'Seg–Sex 8h–18h | Sáb 8h–13h' },
  { icon: Mail,   text: 'contato@digilaser.com.br' },
];

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Card de contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A1628] rounded-2xl p-8 lg:p-12 text-white"
          >
            <h2 className="text-3xl sm:text-[40px] font-bold mb-8">Fale Conosco</h2>

            <Button variant="whatsapp" href={WHATSAPP_URL} className="w-full justify-center mb-8">
              Solicitar Orçamento pelo WhatsApp
            </Button>

            <div className="space-y-6">
              {CONTACT_ITEMS.map(({ icon: Icon, text }, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1565C0]/20 border border-[#1565C0] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#00B0FF]" />
                  </div>
                  <p className="text-gray-300">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-[#00B0FF] font-medium">Atendemos toda a Grande Goiânia</p>
            </div>
          </motion.div>

          {/* Card de localização */}
          <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg flex flex-col"
          >
            {/* Mapa — sem padding, ocupa tudo */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.943502979086!2d-49.318437524591445!3d-16.         679710384091877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.        1!3m3!1m2!1s0x935ef43a8086a475%3A0xa2b16355e1a81bb5!2sDIGILASER%20ELETR%C3%94NICA!5e0!3m2!1spt-BR!2sbr!4v1773758155724!5m2!1spt-BR!2sb        r"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Botão — área separada com padding próprio */}
            <div className="p-4 bg-white">
              <Button
                variant="maps"
                href="https://maps.google.com/?q=DIGILASER+ELETRÔNICA+Goiânia"
                target="_blank"
                className='mt-6'
              >
                Ver no Google Maps
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}