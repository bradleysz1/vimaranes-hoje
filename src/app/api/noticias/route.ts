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

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { titulo, resumo, conteudo, imagem, categoria, autor, destaque } = body

    // Validação básica
    if (!titulo || !resumo || !conteudo || !imagem || !categoria || !autor) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Gerar slug único
    const baseSlug = generateSlug(titulo)
    let slug = baseSlug
    let counter = 1

    // Verificar se o slug já existe e adicionar número se necessário
    while (true) {
      const { data: existing } = await supabase
        .from('news')
        .select('slug')
        .eq('slug', slug)
        .single()

      if (!existing) break
      slug = `${baseSlug}-${counter}`
      counter++
    }

    // Buscar category_id pelo nome da categoria
    const { data: categoryData, error: categoryError } = await supabase
      .from('categories')
      .select('id')
      .eq('name', categoria)
      .single()

    if (categoryError || !categoryData) {
      return NextResponse.json(
        { error: 'Categoria não encontrada' },
        { status: 400 }
      )
    }

    // Buscar ou criar autor
    let authorId: number
    const { data: existingAuthor } = await supabase
      .from('authors')
      .select('id')
      .eq('name', autor)
      .single()

    if (existingAuthor) {
      authorId = existingAuthor.id
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
        return NextResponse.json(
          { error: 'Erro ao criar autor' },
          { status: 500 }
        )
      }
      authorId = newAuthor.id
    }

    // Inserir notícia
    const { data, error } = await supabase
      .from('news')
      .insert({
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
      })
      .select()
      .single()

    if (error) {
      console.error('Erro ao criar notícia:', error)
      return NextResponse.json(
        { error: 'Erro ao criar notícia: ' + error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data }, { status: 201 })
  } catch (error) {
    console.error('Erro no servidor:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
