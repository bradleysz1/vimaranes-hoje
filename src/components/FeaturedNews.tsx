import Image from 'next/image'
import Link from 'next/link'
import { Clock, User } from 'lucide-react'
import { noticias } from '@/data/noticias'

export default function FeaturedNews() {
  const featured = noticias.find(n => n.destaque)
  const sideNews = noticias.filter(n => !n.destaque).slice(0, 3)

  if (!featured) return null

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Notícia Principal */}
      <div className="lg:col-span-2">
        <article className="card group cursor-pointer">
          <Link href={`/noticia/${featured.slug}`}>
            <div className="relative h-64 md:h-80">
              <Image
                src={featured.imagem}
                alt={featured.titulo}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-guimaraes-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featured.categoria}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-guimaraes-blue transition-colors">
                {featured.titulo}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {featured.resumo}
              </p>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{featured.autor}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{new Date(featured.data).toLocaleDateString('pt-PT')}</span>
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
        {sideNews.map((noticia) => (
          <article key={noticia.id} className="group">
            <Link href={`/noticia/${noticia.slug}`} className="block">
              <div className="border-l-4 border-gray-200 group-hover:border-guimaraes-blue pl-4 transition-colors">
                <span className="text-xs text-guimaraes-blue font-medium uppercase tracking-wide">
                  {noticia.categoria}
                </span>
                <h4 className="font-semibold text-gray-900 group-hover:text-guimaraes-blue transition-colors mt-1 mb-2">
                  {noticia.titulo}
                </h4>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {new Date(noticia.data).toLocaleDateString('pt-PT')}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}