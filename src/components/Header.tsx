'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Política', href: '/categoria/politica' },
    { name: 'Cultura', href: '/categoria/cultura' },
    { name: 'Desporto', href: '/categoria/desporto' },
    { name: 'Eventos', href: '/categoria/eventos' },
    { name: 'Opinião', href: '/categoria/opiniao' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-guimaraes-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Vimaranes Hoje
              </h1>
              <p className="text-sm text-gray-600">Cidade Berço</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-guimaraes-blue font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-guimaraes-blue">
              <Search className="w-5 h-5" />
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-guimaraes-blue font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}