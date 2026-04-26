export interface NewsArticle {
  id: number
  title: string
  excerpt: string
  content?: string
  image: string
  category: string
  author: string
  publishedAt: string
  slug: string
  featured?: boolean
}

export interface Category {
  id: number
  name: string
  slug: string
  description?: string
}

export interface Author {
  id: number
  name: string
  email: string
  bio?: string
  avatar?: string
}