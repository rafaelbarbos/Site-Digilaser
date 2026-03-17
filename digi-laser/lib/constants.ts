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
    title: 'Atualização de Firmware',
    description:
      'Atualização e regravação de software embarcado nas unidades controladoras.',
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
  { src: 'https://images.unsplash.com/photo-1769839272014-089cd3bbc274?w=1080', alt: 'Placa eletrônica recuperada 1' },
  { src: 'https://images.unsplash.com/photo-1735875530804-d661ca2001da?w=1080', alt: 'Microchip após reparo' },
  { src: 'https://images.unsplash.com/photo-1767448068187-5be3cbc848c7?w=1080', alt: 'Soldagem eletrônica' },
  { src: 'https://images.unsplash.com/photo-1769085795297-b45cc8c92f5b?w=1080', alt: 'Motherboard recuperada' },
  { src: 'https://images.unsplash.com/photo-1758295745926-88faff7ec2f2?w=1080', alt: 'Diagnóstico eletrônico' },
  { src: 'https://images.unsplash.com/photo-1739025738498-9caddd7ab489?w=1080', alt: 'PCB closeup' },
];

// --- CONTATO ---
export const WHATSAPP_URL = 'https://wa.me/5562999999999';

export const NAV_LINKS = [
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre',    href: '#sobre' },
  { name: 'Galeria',  href: '#galeria' },
  { name: 'Contato',  href: '#contato' },
];