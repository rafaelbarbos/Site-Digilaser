import { NAV_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Col 1 — Marca */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1565C0] to-[#00B0FF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DL</span>
              </div>
              <span className="font-bold text-xl">Digi Laser</span>
            </div>
            <p className="text-gray-400 text-sm">
              Especialistas em Eletrônica de Ar Condicionado desde 1992
            </p>
          </div>

          {/* Col 2 — Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-[#00B0FF] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 — Contato */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Goiânia, Goiás</p>
              <p>(62) 3XXX-XXXX</p>
              <p>contato@digilaser.com.br</p>
            </div>
            <div className="flex gap-4 mt-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-[#1565C0]/20 border border-[#1565C0] hover:bg-[#1565C0] transition-colors cursor-pointer"
                />
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Digi Laser. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}