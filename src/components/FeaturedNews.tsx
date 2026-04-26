import Image from 'next/image'
import Link from 'next/link'
import { Clock, User } from 'lucide-react'

// Dados de exemplo - depois vamos buscar do Supabase
const featuredNews = {
  id: 1,
  title: 'Guimarães recebe festival de música tradicional este fim de semana',
  excerpt: 'O centro histórico da cidade vai acolher mais uma edição do festival que celebra as tradições musicais da região.',
  image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  category: 'Cultura',
  author: 'Maria Silva',
  publishedAt: '2024-01-15',
  slug: 'festival-musica-tradicional-guimaraes'
}

const sideNews = [
  {
    id: 2,
    title: 'Nova ciclovia liga centro histórico ao parque da cidade',
    category: 'Infraestrutura',
    publishedAt: '2024-01-14',
    slug: 'nova-ciclovia-centro-parque'
  },
  {
    id: 3,
    title: 'Vitória SC apresenta reforços para a nova época',
    category: 'Desporto',
    publishedAt: '2024-01-13',
    slug: 'vitoria-sc-reforcos-nova-epoca'
  },
  {
    id: 4,
    title: 'Câmara aprova orçamento de 50 milhões para 2024',
    category: 'Política',
    publishedAt: '2024-01-12',
    slug: 'camara-orcamento-2024'
  }
]

export default function FeaturedNews() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Notícia Principal */}
      <div className="lg:col-span-2">
        <article className="card group cursor-pointer">
          <Link href={`/noticia/${featuredNews.slug}`}>
            <div className="relative h-64 md:h-80">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-guimaraes-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featuredNews.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-guimaraes-blue transition-colors">
                {featuredNews.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {featuredNews.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{featuredNews.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{new Date(featuredNews.publishedAt).toLocaleDateString('pt-PT')}</span>
                </div>
              </div>
            </div>
          </Link>
        </article>
      </div>

      {/* Notícias Laterais */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900 border-b-2 border-guimaraes-gold pb-2">
          Outras Notícias
        </h3>
        {sideNews.map((news) => (
          <article key={news.id} className="group">
            <Link href={`/noticia/${news.slug}`} className="block">
              <div className="border-l-4 border-gray-200 group-hover:border-guimaraes-blue pl-4 transition-colors">
                <span className="text-xs text-guimaraes-blue font-medium uppercase tracking-wide">
                  {news.category}
                </span>
                <h4 className="font-semibold text-gray-900 group-hover:text-guimaraes-blue transition-colors mt-1 mb-2">
                  {news.title}
                </h4>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {new Date(news.publishedAt).toLocaleDateString('pt-PT')}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}