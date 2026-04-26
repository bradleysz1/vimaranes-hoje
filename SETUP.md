# Guia de Configuração - Vimaranes Hoje

## 1. Configuração do Supabase

### Criar Projeto no Supabase
1. Aceda a [supabase.com](https://supabase.com)
2. Crie uma conta gratuita
3. Clique em "New Project"
4. Escolha um nome (ex: "noticias-guimaraes")
5. Defina uma password segura para a base de dados
6. Selecione a região mais próxima (Europe West)

### Configurar Base de Dados
1. No dashboard do Supabase, vá a "SQL Editor"
2. Copie e cole o conteúdo do arquivo `database/schema.sql`
3. Execute o script clicando em "Run"

### Obter Credenciais
1. Vá a "Settings" > "API"
2. Copie a "Project URL" e "anon public key"

## 2. Configuração do Projeto

### Variáveis de Ambiente
1. Copie o arquivo `.env.example` para `.env.local`:
```bash
cp .env.example .env.local
```

2. Edite `.env.local` com as suas credenciais:
```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Instalar Dependências
```bash
npm install
```

### Executar Projeto
```bash
npm run dev
```

O site estará disponível em http://localhost:3000

## 3. Deploy Gratuito

### Vercel (Recomendado)
1. Faça push do código para GitHub
2. Aceda a [vercel.com](https://vercel.com)
3. Importe o repositório
4. Configure as variáveis de ambiente
5. Deploy automático!

### Netlify
1. Faça push do código para GitHub
2. Aceda a [netlify.com](https://netlify.com)
3. Conecte o repositório
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Configure as variáveis de ambiente

## 4. Domínio Gratuito

### Freenom
1. Aceda a [freenom.com](https://freenom.com)
2. Procure um domínio disponível (.tk, .ml, .ga)
3. Registe gratuitamente
4. Configure DNS para apontar para Vercel/Netlify

## 5. Gestão de Conteúdo

### Adicionar Notícias
1. Aceda ao dashboard do Supabase
2. Vá a "Table Editor" > "news"
3. Clique em "Insert row"
4. Preencha os campos necessários
5. Defina `published = true` para publicar

### Estrutura de uma Notícia
- **title**: Título da notícia
- **excerpt**: Resumo breve
- **content**: Conteúdo completo (HTML)
- **image**: URL da imagem
- **category_id**: ID da categoria
- **author_id**: ID do autor
- **slug**: URL amigável (único)
- **featured**: Destacar na página inicial
- **published**: Publicar ou manter como rascunho

## 6. Otimizações

### SEO
- Títulos únicos e descritivos
- Meta descriptions relevantes
- URLs amigáveis (slugs)
- Imagens otimizadas

### Performance
- Imagens do Cloudinary ou Supabase Storage
- Cache do Vercel/Netlify
- Lazy loading automático do Next.js

### Segurança
- Validação de dados
- Sanitização de HTML
- Rate limiting (futuro)
- HTTPS automático

## 7. Próximos Passos

### Funcionalidades Futuras
- [ ] Sistema de comentários
- [ ] Newsletter automática
- [ ] Painel administrativo
- [ ] Sistema de busca avançada
- [ ] PWA (Progressive Web App)
- [ ] Analytics integrado

### Monetização
- [ ] Google AdSense
- [ ] Publicidade local
- [ ] Conteúdo premium
- [ ] Eventos patrocinados

## Suporte

Para dúvidas ou problemas:
1. Consulte a documentação do Next.js
2. Verifique a documentação do Supabase
3. Procure soluções no Stack Overflow
4. Entre em contacto através do GitHub Issues