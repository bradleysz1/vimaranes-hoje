'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Senha simples (depois pode mudar)
    if (password === 'vimaranes2026') {
      setIsAuthenticated(true)
    } else {
      alert('Senha incorreta!')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Painel Administrativo
          </h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Senha de Acesso
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-guimaraes-blue focus:border-transparent"
                placeholder="Digite a senha"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-guimaraes-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Criar Nova Notícia
            </h1>
            
            <NoticiaForm />
          </div>
        </div>
      </div>
    </div>
  )
}

function NoticiaForm() {
  const [formData, setFormData] = useState({
    titulo: '',
    resumo: '',
    conteudo: '',
    imagem: '',
    categoria: 'Política',
    autor: '',
    destaque: false,
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/noticias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        alert('Notícia criada com sucesso!')
        router.push('/')
      } else {
        alert('Erro ao criar notícia: ' + (data.error || 'Erro desconhecido'))
        console.error('Erro detalhado:', data)
      }
    } catch (error) {
      alert('Erro ao criar notícia: ' + (error instanceof Error ? error.message : 'Erro desconhecido'))
      console.error('Erro:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Título *
        </label>
        <input
          type="text"
          value={formData.titulo}
          onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-guimaraes-blue"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Resumo *
        </label>
        <textarea
          value={formData.resumo}
          onChange={(e) => setFormData({ ...formData, resumo: e.target.value })}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-guimaraes-blue"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Conteúdo Completo *
        </label>
        <textarea
          value={formData.conteudo}
          onChange={(e) => setFormData({ ...formData, conteudo: e.target.value })}
          rows={10}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-guimaraes-blue"
          placeholder="Use HTML para formatar: <p>, <h2>, <ul>, <li>, etc."
          required
        />
        <p className="text-sm text-gray-500 mt-1">
          Dica: Use tags HTML como &lt;p&gt;, &lt;h2&gt;, &lt;ul&gt;, &lt;li&gt; para formatar
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          URL da Imagem *
        </label>
        <input
          type="url"
          value={formData.imagem}
          onChange={(e) => setFormData({ ...formData, imagem: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-guimaraes-blue"
          placeholder="https://..."
          required
        />
        <p className="text-sm text-gray-500 mt-1">
          Pode usar imagens do Unsplash.com
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Categoria *
          </label>
          <select
            value={formData.categoria}
            onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-guimaraes-blue"
          >
            <option>Política</option>
            <option>Cultura</option>
            <option>Desporto</option>
            <option>Economia</option>
            <option>Eventos</option>
            <option>Opinião</option>
            <option>Educação</option>
            <option>Segurança</option>
            <option>Gastronomia</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Autor *
          </label>
          <input
            type="text"
            value={formData.autor}
            onChange={(e) => setFormData({ ...formData, autor: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-guimaraes-blue"
            required
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="destaque"
          checked={formData.destaque}
          onChange={(e) => setFormData({ ...formData, destaque: e.target.checked })}
          className="w-4 h-4 text-guimaraes-blue border-gray-300 rounded focus:ring-guimaraes-blue"
        />
        <label htmlFor="destaque" className="ml-2 text-sm text-gray-700">
          Destacar na página inicial
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-guimaraes-blue text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {loading ? 'Criando...' : 'Criar Notícia'}
      </button>
    </form>
  )
}