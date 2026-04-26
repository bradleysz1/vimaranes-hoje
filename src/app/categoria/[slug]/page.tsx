import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, User } from 'lucide-react'
import { supabase } from '@/lib/supabase'

// Forçar revalidação a cada requisição
export const dynamic = 'force-dynamic'
export const revalidate = 0

const categories = {
  'politica': 'Política',
  'cultura': 'Cultura',
  'desporto': 'Desporto',
  'eventos': 'Eventos',
  'opiniao': 'Opinião',
  'economia': 'Economia',
  'educacao': 'Educação',
  'seguranca': 'Segurança',
  'gastronomia': 'Gastronomia'
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const categoryName = categories[slug as keyof typeof categories]
  
  if (!categoryName) {
    notFound()
  }

  // Buscar notícias da categoria
  const { data: categoryNews } = await supabase
    .from('news')
    .select(`
      *,
      categories!inner(name, slug),
      authors(name)
    `)
    .eq('categories.slug', slug)
    .eq('published', true)
    .order('published_at', { ascending: false })

  return (
    <div className="container-custom py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {categoryName}
        </h1>
        <p className="text-gray-600">
          Todas as notícias sobre {categoryName.toLowerCase()} em Guimarães
        </p>
      </div>
      
      {!categoryNews || categoryNews.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Nenhuma notícia disponível nesta categoria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryNews.map((noticia) => (
            <article key={noticia.id} className="card group cursor-pointer">
              <Link href={`/noticia/${noticia.slug}`}>
                <div className="relative h-48">
                  <Image
                    src={noticia.image}
                    alt={noticia.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-guimaraes-blue px-2 py-1 rounded text-xs font-medium">
                      {noticia.categories?.name}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-guimaraes-blue transition-colors line-clamp-2">
                    {noticia.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {noticia.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{noticia.authors?.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{new Date(noticia.published_at).toLocaleDateString('pt-PT')}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    slug,
  }))
}