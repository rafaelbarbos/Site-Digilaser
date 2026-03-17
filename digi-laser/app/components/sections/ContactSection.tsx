'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/constants';

const CONTACT_ITEMS = [
  { icon: MapPin, text: 'Goiânia, Goiás — Brasil' },
  { icon: Phone,  text: '(62) 3XXX-XXXX' },
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
            className="bg-[#F4F7FB] rounded-2xl p-8 flex items-center justify-center relative overflow-hidden"
          >
            <div className="text-center relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-[#1565C0] to-[#00B0FF] rounded-full mx-auto mb-6 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-2">Goiânia, GO</h3>
              <p className="text-[#546E7A] mb-6">Atendemos toda a região metropolitana</p>
              <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md">
                <MapPin className="w-5 h-5 text-[#1565C0]" />
                <span className="font-medium text-[#0D1B2A]">Digi Laser</span>
              </div>
            </div>

            {/* Círculos decorativos */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-[#1565C0]/10 rounded-full" />
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#00B0FF]/10 rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}