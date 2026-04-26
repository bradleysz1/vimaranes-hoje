import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, User, ArrowLeft } from 'lucide-react'

interface NewsPageProps {
  params: Promise<{
    slug: string
  }>
}

// Dados de exemplo - depois vamos buscar do Supabase
const newsData = {
  'festival-musica-tradicional-guimaraes': {
    id: 1,
    title: 'Guimarães recebe festival de música tradicional este fim de semana',
    content: `
      <p>O centro histórico de Guimarães vai acolher, este fim de semana, mais uma edição do Festival de Música Tradicional, um evento que celebra as raízes musicais da região e promove a preservação do património cultural imaterial.</p>
      
      <p>O festival, que decorre entre sexta-feira e domingo, vai contar com a participação de vários grupos folclóricos locais, bem como artistas convidados de outras regiões do país. As atuações terão lugar em diversos pontos emblemáticos da cidade, incluindo o Largo da Oliveira, o Paço dos Duques e o Castelo de Guimarães.</p>
      
      <p>"Este festival é uma oportunidade única para os vimaranenses e visitantes conhecerem melhor as nossas tradições musicais", afirmou o presidente da Câmara Municipal durante a apresentação do evento.</p>
      
      <p>Para além das atuações musicais, o festival inclui também workshops de instrumentos tradicionais, exposições temáticas e uma feira de artesanato local. A entrada é gratuita em todas as atividades.</p>
      
      <p>O programa completo está disponível no site oficial da Câmara Municipal de Guimarães e nas redes sociais do evento.</p>
    `,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Cultura',
    author: 'Maria Silva',
    publishedAt: '2024-01-15',
  }
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { slug } = await params
  const news = newsData[slug as keyof typeof newsData]
  
  if (!news) {
    notFound()
  }

  return (
    <article className="container-custom py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-guimaraes-blue hover:text-blue-700 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao início
        </Link>
      </div>

      {/* Header */}
      <header className="mb-8">
        <div className="mb-4">
          <Link 
            href={`/categoria/${news.category.toLowerCase()}`}
            className="inline-block bg-guimaraes-blue text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            {news.category}
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {news.title}
        </h1>
        
        <div className="flex items-center text-gray-600 space-x-6">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span className="font-medium">{news.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>{new Date(news.publishedAt).toLocaleDateString('pt-PT', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-96 md:h-[500px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />
      </div>

      {/* Share Section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Partilhar esta notícia
        </h3>
        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Facebook
          </button>
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Twitter
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            WhatsApp
          </button>
        </div>
      </div>
    </article>
  )
}