import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Funções helper para as notícias
export async function getNews() {
  const { data, error } = await supabase
    .from('news')
    .select(`
      *,
      categories(name, slug),
      authors(name, email)
    `)
    .eq('published', true)
    .order('published_at', { ascending: false })
  
  if (error) {
    console.error('Erro ao buscar notícias:', error)
    return []
  }
  
  return data
}

export async function getFeaturedNews() {
  const { data, error } = await supabase
    .from('news')
    .select(`
      *,
      categories(name, slug),
      authors(name, email)
    `)
    .eq('featured', true)
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(1)
    .single()
  
  if (error) {
    console.error('Erro ao buscar notícia em destaque:', error)
    return null
  }
  
  return data
}

export async function getNewsByCategory(categorySlug: string) {
  const { data, error } = await supabase
    .from('news')
    .select(`
      *,
      categories!inner(name, slug),
      authors(name, email)
    `)
    .eq('categories.slug', categorySlug)
    .eq('published', true)
    .order('published_at', { ascending: false })
  
  if (error) {
    console.error('Erro ao buscar notícias por categoria:', error)
    return []
  }
  
  return data
}

export async function getNewsBySlug(slug: string) {
  const { data, error } = await supabase
    .from('news')
    .select(`
      *,
      categories(name, slug),
      authors(name, email)
    `)
    .eq('slug', slug)
    .eq('published', true)
    .single()
  
  if (error) {
    console.error('Erro ao buscar notícia:', error)
    return null
  }
  
  return data
}

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name')
  
  if (error) {
    console.error('Erro ao buscar categorias:', error)
    return []
  }
  
  return data
}