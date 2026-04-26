# Vimaranes Hoje

Site de notícias de Guimarães desenvolvido com Next.js 15, TypeScript, Tailwind CSS e Supabase.

## 🚀 Deploy

O site está hospedado no Netlify: https://vimaranes-hoje.netlify.app/

## 📝 Como Adicionar Notícias

### Opção 1: Painel Administrativo (Recomendado)

1. Acesse: https://vimaranes-hoje.netlify.app/admin
2. Digite a senha: `vimaranes2026`
3. Preencha o formulário com:
   - **Título**: Título da notícia
   - **Resumo**: Breve descrição que aparece na lista
   - **Conteúdo Completo**: Texto principal (pode usar HTML: `<p>`, `<h2>`, `<ul>`, `<li>`)
   - **URL da Imagem**: Link da imagem (pode usar Unsplash.com)
   - **Categoria**: Selecione uma categoria
   - **Autor**: Nome do autor
   - **Destaque**: Marque para aparecer em destaque na homepage
4. Clique em "Criar Notícia"

### Opção 2: Diretamente no Supabase

Acesse o painel do Supabase e insira dados na tabela `news`.

## 🗄️ Banco de Dados

O site usa Supabase (PostgreSQL) com as seguintes tabelas:
- `news`: Notícias
- `categories`: Categorias
- `authors`: Autores

Execute o script `database/schema.sql` no seu projeto Supabase para criar as tabelas.

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
# Copie .env.example para .env.local e preencha com suas credenciais do Supabase

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
npm start
```

## 📦 Tecnologias

- **Next.js 15**: Framework React
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Estilização
- **Supabase**: Banco de dados PostgreSQL
- **Netlify**: Hospedagem

## 🎨 Cores do Tema

- **Azul Guimarães**: `#1e40af`
- **Dourado**: `#d4af37`
- **Verde**: `#059669`

## 🔐 Segurança

A senha do painel administrativo está definida no código (`vimaranes2026`). Para produção, considere implementar autenticação mais robusta com Supabase Auth.

## 📄 Licença

Projeto desenvolvido para Vimaranes Hoje.
