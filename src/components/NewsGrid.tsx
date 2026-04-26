import Image from 'next/image'
import Link from 'next/link'
import { Clock, User } from 'lucide-react'

// Dados de exemplo - depois vamos buscar do Supabase
const newsData = [
  {
    id: 5,
    title: 'Mercado de Guimarães renova espaços comerciais',
    excerpt: 'Investimento de 2 milhões de euros vai modernizar as instalações do tradicional mercado.',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Economia',
    author: 'João Santos',
    publishedAt: '2024-01-11',
    slug: 'mercado-guimaraes-renovacao'
  },
  {
    id: 6,
    title: 'Escola de música abre inscrições para novos cursos',
    excerpt: 'Conservatório oferece formação em instrumentos tradicionais e modernos.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Educação',
    author: 'Ana Costa',
    publishedAt: '2024-01-10',
    slug: 'escola-musica-inscricoes'
  },
  {
    id: 7,
    title: 'Bombeiros recebem nova viatura de combate a incêndios',
    excerpt: 'Equipamento moderno vai reforçar a capacidade de resposta da corporação.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Segurança',
    author: 'Pedro Oliveira',
    publishedAt: '2024-01-09',
    slug: 'bombeiros-nova-viatura'
  },
  {
    id: 8,
    title: 'Festival gastronómico celebra sabores regionais',
    excerpt: 'Restaurantes locais apresentam pratos típicos durante todo o mês.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Gastronomia',
    author: 'Carla Ferreira',
    publishedAt: '2024-01-08',
    slug: 'festival-gastronomico-sabores'
  },
  {
    id: 9,
    title: 'Biblioteca municipal amplia horário de funcionamento',
    excerpt: 'Novos horários permitem maior acesso aos serviços e recursos disponíveis.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Cultura',
    author: 'Luís Rodrigues',
    publishedAt: '2024-01-07',
    slug: 'biblioteca-horario-ampliado'
  },
  {
    id: 10,
    title: 'Parque urbano ganha novo equipamento desportivo',
    excerpt: 'Circuito de manutenção e área de calistenia já estão disponíveis.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Desporto',
    author: 'Sofia Mendes',
    publishedAt: '2024-01-06',
    slug: 'parque-equipamento-desportivo'
  }
]

export default function NewsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsData.map((news) => (
        <article key={news.id} className="card group cursor-pointer">
          <Link href={`/noticia/${news.slug}`}>
            <div className="relative h-48">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 text-guimaraes-blue px-2 py-1 rounded text-xs font-medium">
                  {news.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-guimaraes-blue transition-colors line-clamp-2">
                {news.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {news.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <User className="w-3 h-3" />
                  <span>{news.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{new Date(news.publishedAt).toLocaleDateString('pt-PT')}</span>
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}