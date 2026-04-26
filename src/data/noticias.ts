export interface Noticia {
  id: number
  slug: string
  titulo: string
  resumo: string
  conteudo: string
  imagem: string
  categoria: string
  autor: string
  data: string
  destaque: boolean
}

export const noticias: Noticia[] = [
  // Exemplo de como adicionar uma notícia:
  {
    id: 1,
    slug: 'exemplo-noticia-guimaraes', // URL amigável (sem espaços, acentos ou caracteres especiais)
    titulo: 'Título da Sua Notícia Aqui',
    resumo: 'Um resumo breve da notícia que aparece na lista de notícias.',
    conteudo: `
      <p>Primeiro parágrafo da notícia com o conteúdo principal.</p>
      
      <h2>Subtítulo da Notícia</h2>
      <p>Mais conteúdo aqui. Pode usar HTML para formatar:</p>
      <ul>
        <li>Item de lista 1</li>
        <li>Item de lista 2</li>
      </ul>
      
      <p>Outro parágrafo com mais informações.</p>
      
      <p><em>Fontes: Câmara Municipal de Guimarães</em></p>
    `,
    imagem: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    categoria: 'Política', // Opções: Política, Cultura, Desporto, Economia, Eventos, Opinião
    autor: 'Nome do Autor',
    data: '2026-04-26', // Formato: YYYY-MM-DD
    destaque: true, // true = aparece em destaque na homepage, false = aparece na lista normal
  },
  // Adicione mais notícias aqui seguindo o mesmo formato
]
