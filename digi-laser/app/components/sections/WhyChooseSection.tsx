'use client';

import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/Button';
import { FEATURES, WHATSAPP_URL } from '@/lib/constants';

export function WhyChooseSection() {
  return (
    <section id="sobre" className="py-20 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B0FF]/30 to-[#1565C0]/30 rounded-2xl blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1768633647910-7e6fb53e5b0f?w=1080"
              alt="Técnico em bancada eletrônica"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[#1E88E5]/20 border border-[#1E88E5] px-4 py-2 rounded-full mb-6">
              <span className="text-[#00B0FF] text-sm font-medium uppercase tracking-wider">
                Por Que Nos Escolher
              </span>
            </div>

            <h2 className="text-3xl sm:text-[40px] font-bold text-white mb-6 leading-tight">
              Mais de 30 Anos Consertando o Que Outros Descartam
            </h2>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Desde 1992 em Goiânia, somos especialistas em recuperação de placas eletrônicas
              de ar condicionado. Nossa expertise técnica permite que salvemos componentes que
              outras empresas considerariam perdidos.
            </p>

            <div className="space-y-6 mb-8">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#1565C0]/20 border border-[#1565C0] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#00B0FF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="whatsapp" href={WHATSAPP_URL}>
              Fale com um Técnico Agora
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}