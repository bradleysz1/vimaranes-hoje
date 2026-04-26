import Hero from '@/components/Hero'
import NewsGrid from '@/components/NewsGrid'
import FeaturedNews from '@/components/FeaturedNews'

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container-custom py-12">
        <FeaturedNews />
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Últimas Notícias
          </h2>
          <NewsGrid />
        </div>
      </div>
    </div>
  )
}