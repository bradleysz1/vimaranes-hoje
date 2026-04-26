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
  // Adicione suas notícias reais aqui
  // Exemplo:
  // {
  //   id: 1,
  //   slug: 'slug-da-noticia',
  //   titulo: 'Título da Notícia',
  //   resumo: 'Resumo breve da notícia',
  //   conteudo: '<p>Conteúdo completo em HTML</p>',
  //   imagem: 'URL da imagem',
  //   categoria: 'Categoria',
  //   autor: 'Nome do Autor',
  //   data: '2026-04-26',
  //   destaque: false,
  // },
]
