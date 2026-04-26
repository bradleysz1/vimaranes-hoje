'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Pencil, Trash2 } from 'lucide-react'

interface Noticia {
  id: number
  title: string
  slug: string
  excerpt: string
  image: string
  published_at: string
  featured: boolean
  categories: { name: string }
  authors: { name: string }
}

export default function EditarNoticiasPage() {
  const [noticias, setNoticias] = useState<Noticia[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    featured: false
  })

  useEffect(() => {
    carregarNoticias()
  }, [])

  const carregarNoticias = async () => {
    try {
      const response = await fetch('/api/noticias')
      const data = await response.json()
      setNoticias(data)
    } catch (error) {
      console.error('Erro ao carregar notícias:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = async (noticia: Noticia) => {
    setEditingId(noticia.id)
    setEditForm({
      title: noticia.title,
      excerpt: noticia.excerpt,
      content: '', // Precisaria buscar o conteúdo completo
      image: noticia.image,
      featured: noticia.featured
    })
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja apagar esta notícia?')) return

    try {
      const response = await fetch(`/api/noticias/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        alert('Notícia apagada com sucesso!')
        carregarNoticias()
      } else {
        alert('Erro ao apagar notícia')
      }
    } catch (error) {
      alert('Erro ao apagar notícia')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container-custom">
          <p className="text-center">Carregando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <Link
                href="/admin"
                className="inline-flex items-center text-guimaraes-blue hover:text-blue-700 mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Admin
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">
                Gerenciar Notícias
              </h1>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Notícia
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categoria
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Autor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {noticias.map((noticia) => (
                    <tr key={noticia.id}>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img
                            src={noticia.image}
                            alt={noticia.title}
                            className="w-16 h-16 object-cover rounded"
                            onError={(e) => {
                              e.currentTarget.src = 'https://via.placeholder.com/150?text=Sem+Imagem'
                            }}
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {noticia.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {noticia.excerpt.substring(0, 60)}...
                            </div>
                            {noticia.featured && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                Destaque
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {noticia.categories?.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {noticia.authors?.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(noticia.published_at).toLocaleDateString('pt-PT')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a
                          href={`https://supabase.com/dashboard/project/${process.env.NEXT_PUBLIC_SUPABASE_URL?.split('//')[1]?.split('.')[0]}/editor/${noticia.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-guimaraes-blue hover:text-blue-700 mr-4"
                          title="Editar no Supabase"
                        >
                          <Pencil className="w-4 h-4 inline" />
                        </a>
                        <button
                          onClick={() => handleDelete(noticia.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Apagar"
                        >
                          <Trash2 className="w-4 h-4 inline" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {noticias.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Nenhuma notícia encontrada</p>
              </div>
            )}
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">💡 Dica:</h3>
            <p className="text-blue-800 text-sm">
              Para editar uma notícia, clique no ícone de lápis. Você será redirecionado para o Supabase onde pode editar todos os campos.
              Para apagar, clique no ícone de lixeira.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
