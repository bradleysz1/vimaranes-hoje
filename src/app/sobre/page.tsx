import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre o Vimaranes Hoje
          </h1>
          <p className="text-xl text-gray-600">
            O seu portal de notícias local de Guimarães
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              A Nossa Missão
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              O Vimaranes Hoje nasceu com o objetivo de ser a principal fonte de informação 
              local da cidade berço. Acreditamos que uma comunidade informada é uma comunidade 
              mais forte e participativa.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Comprometemo-nos a fornecer notícias precisas, imparciais e relevantes sobre todos 
              os acontecimentos que moldam o dia a dia dos vimaranenses.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Desde política local até eventos culturais, desde desporto até economia, 
              cobrimos todos os aspetos da vida em Guimarães com rigor jornalístico e 
              proximidade à comunidade.
            </p>
          </div>
          
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Equipa de jornalistas"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Os Nossos Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-guimaraes-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Rigor Jornalístico
              </h3>
              <p className="text-gray-600">
                Verificamos sempre as nossas fontes e apresentamos os factos de forma 
                objetiva e imparcial.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-guimaraes-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Proximidade Local
              </h3>
              <p className="text-gray-600">
                Conhecemos Guimarães e a sua gente. As nossas notícias refletem 
                as preocupações e interesses da comunidade.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-guimaraes-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Transparência
              </h3>
              <p className="text-gray-600">
                Somos transparentes sobre as nossas fontes e métodos, 
                construindo confiança com os nossos leitores.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Junte-se à Nossa Comunidade
          </h2>
          <p className="text-gray-700 text-center mb-6 leading-relaxed">
            Tem uma notícia para partilhar? Quer colaborar connosco? 
            Estamos sempre abertos a sugestões e contribuições da comunidade.
          </p>
          <div className="text-center">
            <a 
              href="/contacto" 
              className="btn-primary bg-guimaraes-blue hover:bg-blue-700 inline-block"
            >
              Entre em Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}