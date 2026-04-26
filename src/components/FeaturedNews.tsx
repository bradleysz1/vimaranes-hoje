import Image from 'next/image'
import Link from 'next/link'
import { Clock, User } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default async function FeaturedNews() {
  // Buscar notícia em destaque
  const { data: featured } = await supabase
    .from('news')
    .select(`
      *,
      categories(name, slug),
      authors(name)
    `)
    .eq('featured', true)
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(1)
    .single()

  // Buscar outras notícias
  const { data: sideNews } = await supabase
    .from('news')
    .select(`
      *,
      categories(name, slug),
      authors(name)
    `)
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(4)

  if (!featured) return null

  const otherNews = sideNews?.filter(n => n.id !== featured.id).slice(0, 3) || []

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Notícia Principal */}
      <div className="lg:col-span-2">
        <article className="card group cursor-pointer">
          <Link href={`/noticia/${featured.slug}`}>
            <div className="relative h-64 md:h-80">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-guimaraes-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featured.categories?.name}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-guimaraes-blue transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{featured.authors?.name}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{new Date(featured.published_at).toLocaleDateString('pt-PT')}</span>
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
        {otherNews.map((noticia) => (
          <article key={noticia.id} className="group">
            <Link href={`/noticia/${noticia.slug}`} className="block">
              <div className="border-l-4 border-gray-200 group-hover:border-guimaraes-blue pl-4 transition-colors">
                <span className="text-xs text-guimaraes-blue font-medium uppercase tracking-wide">
                  {noticia.categories?.name}
                </span>
                <h4 className="font-semibold text-gray-900 group-hover:text-guimaraes-blue transition-colors mt-1 mb-2">
                  {noticia.title}
                </h4>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {new Date(noticia.published_at).toLocaleDateString('pt-PT')}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}