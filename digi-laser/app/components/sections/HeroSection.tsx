'use client';

import { motion } from 'framer-motion';
import { Zap, CheckCircle, Shield } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/constants';

const STATS = [
  { number: '30+',    label: 'Anos de Experiência' },
  { number: '5.000+', label: 'Placas Recuperadas' },
  { number: '100%',   label: 'Garantia de Qualidade' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628]">

      {/* Grade estilo circuit board */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1E88E5 1px, transparent 1px),
            linear-gradient(to bottom, #1E88E5 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Orb animado */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,176,255,0.4) 0%, rgba(21,101,192,0.2) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* Coluna esquerda — texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#1E88E5]/20 border border-[#1E88E5] px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-[#00B0FF]" />
            <span className="text-[#00B0FF] text-sm font-medium uppercase tracking-wider">
              Especialistas em Eletrônica de A/C
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
            Conserto de Placas de Ar Condicionado com Precisão Técnica
          </h1>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Desde 1992 em Goiânia, a Digi Laser recupera e recondiciona placas eletrônicas
            de ar condicionado com diagnóstico avançado e garantia no serviço.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="whatsapp" href={WHATSAPP_URL}>
              Solicitar Orçamento no WhatsApp
            </Button>
            <Button variant="ghost" href="#servicos">
              Ver Nossos Serviços
            </Button>
          </div>

          {/* Barra de credibilidade */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1565C0]/20 border border-[#1565C0] flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#00B0FF]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.number}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coluna direita — imagem */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00B0FF]/30 to-[#1565C0]/30 rounded-2xl blur-3xl" />
          <img
            src="https://images.pexels.com/photos/6477204/pexels-photo-6477204.jpeg"
            alt="Placa eletrônica de ar condicionado"
            className="relative rounded-2xl shadow-2xl w-full"
          />

          {/* Badge flutuante */}
          <motion.div
            className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/40"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1565C0] to-[#00B0FF] flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-[#0D1B2A]">Garantia</p>
                <p className="text-sm text-[#1565C0]">Certificada</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}