import Image from 'next/image'
import Link from 'next/link'
import { Clock, User } from 'lucide-react'
import { noticias } from '@/data/noticias'

export default function NewsGrid() {
  const allNews = noticias.filter(n => !n.destaque)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {allNews.map((noticia) => (
        <article key={noticia.id} className="card group cursor-pointer">
          <Link href={`/noticia/${noticia.slug}`}>
            <div className="relative h-48">
              <Image
                src={noticia.imagem}
                alt={noticia.titulo}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 text-guimaraes-blue px-2 py-1 rounded text-xs font-medium">
                  {noticia.categoria}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-guimaraes-blue transition-colors line-clamp-2">
                {noticia.titulo}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {noticia.resumo}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <User className="w-3 h-3" />
                  <span>{noticia.autor}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{new Date(noticia.data).toLocaleDateString('pt-PT')}</span>
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}