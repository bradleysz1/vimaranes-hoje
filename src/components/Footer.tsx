import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-guimaraes-gold rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold">G</span>
              </div>
              <h3 className="text-xl font-bold">Vimaranes Hoje</h3>
            </div>
            <p className="text-gray-300 mb-4">
              O seu portal de notícias local de Guimarães. Mantemos os vimaranenses informados sobre 
              todos os acontecimentos da nossa cidade berço.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-guimaraes-gold">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-guimaraes-gold">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-guimaraes-gold">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-guimaraes-gold">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/publicidade" className="text-gray-300 hover:text-white">
                  Publicidade
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-gray-300 hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/categoria/politica" className="text-gray-300 hover:text-white">
                  Política
                </Link>
              </li>
              <li>
                <Link href="/categoria/cultura" className="text-gray-300 hover:text-white">
                  Cultura
                </Link>
              </li>
              <li>
                <Link href="/categoria/desporto" className="text-gray-300 hover:text-white">
                  Desporto
                </Link>
              </li>
              <li>
                <Link href="/categoria/eventos" className="text-gray-300 hover:text-white">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Vimaranes Hoje. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}