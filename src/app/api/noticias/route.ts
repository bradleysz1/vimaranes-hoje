import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Função para gerar slug a partir do título
function generateSlug(titulo: string): string {
  return titulo
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
    .trim()
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
}

// GET - Listar todas as notícias
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('news')
      .select(`
        *,
        categories(name, slug),
        authors(name)
      `)
      .order('published_at', { ascending: false })

    if (error) {
      console.error('Erro ao buscar notícias:', error)
      return NextResponse.json(
        { error: 'Erro ao buscar notícias: ' + error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(data || [])
  } catch (error) {
    console.error('Erro no servidor:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// POST - Criar nova notícia
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { titulo, resumo, conteudo, imagem, categoria, autor, destaque } = body

    console.log('Recebendo requisição:', { titulo, categoria, autor })

    // Validação básica
    if (!titulo || !resumo || !conteudo || !imagem || !categoria || !autor) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Verificar se Supabase está configurado
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error('Variáveis de ambiente do Supabase não configuradas')
      return NextResponse.json(
        { error: 'Configuração do banco de dados não encontrada' },
        { status: 500 }
      )
    }

    // Gerar slug único
    const baseSlug = generateSlug(titulo)
    let slug = baseSlug
    let counter = 1

    console.log('Gerando slug:', baseSlug)

    // Verificar se o slug já existe e adicionar número se necessário
    while (true) {
      const { data: existing, error: checkError } = await supabase
        .from('news')
        .select('slug')
        .eq('slug', slug)
        .single()

      if (checkError && checkError.code !== 'PGRST116') {
        console.error('Erro ao verificar slug:', checkError)
      }

      if (!existing) break
      slug = `${baseSlug}-${counter}`
      counter++
    }

    console.log('Slug final:', slug)

    // Buscar category_id pelo nome da categoria
    const { data: categoryData, error: categoryError } = await supabase
      .from('categories')
      .select('id')
      .eq('name', categoria)
      .single()

    if (categoryError || !categoryData) {
      console.error('Erro ao buscar categoria:', categoryError)
      return NextResponse.json(
        { error: 'Categoria não encontrada: ' + categoria },
        { status: 400 }
      )
    }

    console.log('Categoria encontrada:', categoryData)

    // Buscar ou criar autor
    let authorId: number
    const { data: existingAuthor } = await supabase
      .from('authors')
      .select('id')
      .eq('name', autor)
      .single()

    if (existingAuthor) {
      authorId = existingAuthor.id
      console.log('Autor existente:', authorId)
    } else {
      // Criar novo autor com email gerado
      const authorEmail = `${generateSlug(autor)}@vimaraneshoje.pt`
      const { data: newAuthor, error: authorError } = await supabase
        .from('authors')
        .insert({
          name: autor,
          email: authorEmail,
          bio: `Jornalista do Vimaranes Hoje`
        })
        .select('id')
        .single()

      if (authorError || !newAuthor) {
        console.error('Erro ao criar autor:', authorError)
        return NextResponse.json(
          { error: 'Erro ao criar autor: ' + (authorError?.message || 'desconhecido') },
          { status: 500 }
        )
      }
      authorId = newAuthor.id
      console.log('Novo autor criado:', authorId)
    }

    // Inserir notícia
    const newsData = {
      title: titulo,
      excerpt: resumo,
      content: conteudo,
      image: imagem,
      category_id: categoryData.id,
      author_id: authorId,
      slug: slug,
      featured: destaque,
      published: true,
      published_at: new Date().toISOString()
    }

    console.log('Inserindo notícia:', newsData)

    const { data, error } = await supabase
      .from('news')
      .insert(newsData)
      .select()
      .single()

    if (error) {
      console.error('Erro ao criar notícia:', error)
      return NextResponse.json(
        { error: 'Erro ao criar notícia: ' + error.message },
        { status: 500 }
      )
    }

    console.log('Notícia criada com sucesso:', data)
    return NextResponse.json({ success: true, data }, { status: 201 })
  } catch (error) {
    console.error('Erro no servidor:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor: ' + (error instanceof Error ? error.message : 'desconhecido') },
      { status: 500 }
    )
  }
}
