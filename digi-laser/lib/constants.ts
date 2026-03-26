import {
  Search, Wrench, Droplets, Upload, Cpu, Shield,
  Settings, Package, CheckCircle, LucideIcon,
} from 'lucide-react';

// --- SERVIÇOS ---
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: Search,
    title: 'Diagnóstico Eletrônico',
    description:
      'Identificação precisa de falhas em placas de qualquer fabricante com equipamentos especializados.',
  },
  {
    icon: Wrench,
    title: 'Recuperação de Placa',
    description:
      'Soldagem, substituição de componentes e reparo completo de circuitos danificados.',
  },
  {
    icon: Droplets,
    title: 'Limpeza Técnica',
    description:
      'Remoção de corrosão, umidade e oxidação que afetam o desempenho da placa.',
  },
  {
    icon: Upload,
    title: 'Reparo de Placa Inverter',
    description:
      'Diagnóstico e recuperação de placas inversoras responsáveis pelo controle de velocidade do compressor.',
  },
  {
    icon: Cpu,
    title: 'Teste de Bancada',
    description:
      'Simulação do funcionamento real da placa antes da devolução ao cliente.',
  },
  {
    icon: Shield,
    title: 'Manutenção Preventiva',
    description:
      'Inspeção e conservação de placas para evitar falhas futuras.',
  },
];

// --- DIFERENCIAIS (seção "Por que nos escolher") ---
export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  { icon: Settings,      title: 'Técnicos especializados',   description: 'Formação em eletrônica de potência' },
  { icon: Package,       title: 'Atendemos todas as marcas', description: 'Midea, LG, Samsung, Daikin, Carrier e mais' },
  { icon: Shield,        title: 'Garantia no serviço',       description: 'Segurança pós-reparo documentada' },
  { icon: CheckCircle,   title: 'Orçamento transparente',    description: 'Valores claros e sem surpresas' },
];

// --- DEPOIMENTOS ---
export interface Testimonial {
  quote: string;
  name: string;
  city: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Levei a placa da minha LG que havia queimado. Em 2 dias estava pronta e funcionando perfeitamente. Super recomendo!',
    name: 'Marcos A.',
    city: 'Goiânia, GO',
  },
  {
    quote: 'Serviço muito profissional. O conserto saiu bem mais barato que trocar a placa nova e com garantia.',
    name: 'Fernanda R.',
    city: 'Goiânia, GO',
  },
  {
    quote: 'Atendimento excelente, técnicos muito experientes. A placa do meu Daikin foi recuperada sem problemas.',
    name: 'Carlos M.',
    city: 'Goiânia, GO',
  },
];

// --- GALERIA ---
export const GALLERY_IMAGES: { src: string; alt: string }[] = [
  { src: 'https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg', alt: 'Técnico em eletrônica' },
  { src: 'https://images.unsplash.com/photo-1718203862467-c33159fdc504?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Placa eletrônica' },
  { src: 'https://images.unsplash.com/photo-1722010811002-a772b2066890?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Soldagem eletrônica' },
  { src: 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg', alt: 'Componentes eletrônicos' },
  { src: 'https://images.unsplash.com/photo-1757219525975-03b5984bc6e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Diagnóstico eletrônico' },
  { src: 'https://imgs.search.brave.com/FwQW4rhBg2EgHFQyYq5Rrfn3iLhJJvYQIZ4RjfTwg2g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3RpL2ZvdG9z/LWdyYXRpcy90Mi82/ODQ4MDg0LW1vZGVy/bm8tdGV0by1tb250/YWRvLWNhc3NldGUt/dGlwby1hci1jb25k/aWNpb25hZG8tc2lz/dGVtYS1uby1jYWZl/LWdyYXRpcy1mb3Rv/LmpwZw', alt: 'Reparo técnico' },
];

// --- CONTATO ---
export const WHATSAPP_URL = 'https://wa.me/5562984816914?text=Olá%20Digi%20Laser%2C%20gostaria%20de%20solicitar%20um%20orçamento%20para%20o%20reparo%20da%20minha%20placa.';

export const NAV_LINKS = [
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre',    href: '#sobre' },
  { name: 'Galeria',  href: '#galeria' },
  { name: 'Contato',  href: '#contato' },
];