import { notFound } from 'next/navigation'
import NewsGrid from '@/components/NewsGrid'

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
      
      <NewsGrid />
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    slug,
  }))
}