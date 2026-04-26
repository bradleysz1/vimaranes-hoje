# Vimaranes Hoje

Portal de notícias local da cidade de Guimarães, desenvolvido com Next.js, Tailwind CSS e Supabase.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com SSR/SSG
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Supabase** - Backend-as-a-Service (PostgreSQL)
- **Lucide React** - Ícones modernos

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd vimaranes-hoje
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Edite o arquivo `.env.local` com suas credenciais do Supabase.

5. Execute o projeto:
```bash
npm run dev
```

## 🗄️ Estrutura da Base de Dados

### Tabela `news`
```sql
CREATE TABLE news (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content TEXT,
  image VARCHAR(500),
  category VARCHAR(100),
  author VARCHAR(100),
  slug VARCHAR(255) UNIQUE,
  featured BOOLEAN DEFAULT false,
  published_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## 🎨 Cores do Tema

- **Azul Guimarães**: `#1e40af`
- **Dourado**: `#d4af37`
- **Verde**: `#059669`

## 📱 Funcionalidades

- ✅ Design responsivo
- ✅ SEO otimizado
- ✅ Navegação por categorias
- ✅ Sistema de busca
- ✅ Newsletter
- ✅ Redes sociais
- 🔄 Sistema de comentários (em desenvolvimento)
- 🔄 Painel administrativo (em desenvolvimento)

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Netlify
1. Conecte seu repositório ao Netlify
2. Configure as variáveis de ambiente
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📄 Licença

Este projeto está sob a licença MIT.