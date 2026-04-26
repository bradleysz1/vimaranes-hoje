# Guia do Painel Administrativo

## 🔐 Acesso

1. Acesse: https://vimaranes-hoje.netlify.app/admin
2. Senha: `vimaranes2026`

## ✍️ Criar Nova Notícia

### Campos Obrigatórios

1. **Título**
   - O título principal da notícia
   - Exemplo: "Nova ciclovia inaugurada em Guimarães"

2. **Resumo**
   - Breve descrição (2-3 linhas)
   - Aparece na lista de notícias
   - Exemplo: "A Câmara Municipal inaugurou hoje uma nova ciclovia que liga o centro histórico ao parque da cidade."

3. **Conteúdo Completo**
   - Texto principal da notícia
   - Pode usar HTML para formatar
   - Exemplo:
   ```html
   <p>A Câmara Municipal de Guimarães inaugurou hoje uma nova ciclovia que liga o centro histórico ao parque da cidade, promovendo a mobilidade sustentável.</p>
   
   <h2>Investimento de 500 mil euros</h2>
   <p>O projeto teve um investimento total de 500 mil euros e foi concluído em 6 meses.</p>
   
   <ul>
     <li>3 km de extensão</li>
     <li>Iluminação LED</li>
     <li>Sinalização moderna</li>
   </ul>
   
   <p><em>Fonte: Câmara Municipal de Guimarães</em></p>
   ```

4. **URL da Imagem**
   - Link completo da imagem
   - Pode usar imagens do Unsplash.com
   - Exemplo: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200`

5. **Categoria**
   - Selecione uma das categorias disponíveis:
     - Política
     - Cultura
     - Desporto
     - Economia
     - Eventos
     - Opinião
     - Educação
     - Segurança
     - Gastronomia

6. **Autor**
   - Nome do jornalista/autor
   - Exemplo: "Maria Silva"

### Campo Opcional

- **Destaque**: Marque esta opção se quiser que a notícia apareça em destaque na página inicial

## 📝 Dicas de Formatação HTML

### Parágrafos
```html
<p>Seu texto aqui.</p>
```

### Subtítulos
```html
<h2>Subtítulo Principal</h2>
<h3>Subtítulo Secundário</h3>
```

### Listas
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Texto em Itálico (para fontes)
```html
<p><em>Fonte: Câmara Municipal de Guimarães</em></p>
```

### Texto em Negrito
```html
<p><strong>Texto importante</strong></p>
```

### Links
```html
<p>Mais informações no <a href="https://exemplo.com">site oficial</a>.</p>
```

## 🖼️ Onde Encontrar Imagens

### Unsplash (Gratuito)
1. Acesse: https://unsplash.com
2. Pesquise por palavras-chave em inglês (ex: "city", "culture", "sports")
3. Clique na imagem desejada
4. Clique em "Download" (não precisa fazer login)
5. Copie o URL da imagem
6. Cole no campo "URL da Imagem"

### Dica
- Use imagens de alta qualidade (mínimo 1200px de largura)
- Prefira imagens horizontais (landscape)
- Evite imagens com muito texto

## ✅ Após Criar a Notícia

1. Clique em "Criar Notícia"
2. Aguarde a confirmação
3. Você será redirecionado para a página inicial
4. A notícia aparecerá automaticamente no site

## 🔄 Atualizar o Site

Após criar uma notícia, o site pode levar alguns minutos para atualizar devido ao cache do Netlify. Se não aparecer imediatamente:
1. Aguarde 2-3 minutos
2. Recarregue a página (F5 ou Ctrl+R)
3. Se ainda não aparecer, limpe o cache do navegador (Ctrl+Shift+Delete)

## ❓ Problemas Comuns

### "Erro ao criar notícia"
- Verifique se todos os campos obrigatórios estão preenchidos
- Verifique se a URL da imagem é válida (começa com https://)
- Tente novamente em alguns segundos

### Imagem não aparece
- Verifique se o URL está correto
- Teste o URL abrindo em uma nova aba do navegador
- Use imagens de sites confiáveis (Unsplash, etc.)

### Formatação HTML não funciona
- Verifique se as tags estão fechadas corretamente
- Use apenas tags HTML básicas (p, h2, h3, ul, li, em, strong, a)
- Evite CSS inline ou JavaScript

## 📞 Suporte

Para problemas técnicos ou dúvidas, entre em contato com o desenvolvedor.
