import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-guimaraes-blue to-blue-800 text-white">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Vimaranes
              <span className="text-guimaraes-gold block">Hoje</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Fique a par de todos os acontecimentos da cidade berço. 
              Notícias locais, eventos, cultura e muito mais para os vimaranenses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/newsletter" 
                className="btn-primary bg-guimaraes-gold hover:bg-yellow-600 text-gray-900"
              >
                Subscrever Newsletter
              </Link>
              <Link 
                href="/sobre" 
                className="border-2 border-white text-white hover:bg-white hover:text-guimaraes-blue font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Saber Mais
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Castelo de Guimarães"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Castelo de Guimarães</p>
                <p className="text-xs text-gray-300">Símbolo da cidade berço</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}