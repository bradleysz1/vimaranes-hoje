# 🎨 Como Adicionar a Logo ao Site

## Passo a Passo:

### 1. **Salvar a imagem da logo**
   - Salve a imagem da logo que você me enviou
   - Nome do arquivo: `logo.png`
   - Local: pasta `public` na raiz do projeto

### 2. **Estrutura de pastas**
```
site de noticia teste/
├── public/
│   └── logo.png  ← Coloque a imagem aqui
├── src/
├── package.json
└── ...
```

### 3. **Fazer upload para o GitHub**

Depois de salvar a logo na pasta `public`, execute:

```bash
git add public/logo.png
git commit -m "Adicionar logo do site"
git push origin main
```

### 4. **Aguardar deploy**
- O Netlify vai fazer deploy automaticamente (2-3 minutos)
- A logo aparecerá no header e footer do site

## ✅ Resultado:

- **Header**: Logo no canto superior esquerdo
- **Footer**: Logo em branco no rodapé
- **Tamanho**: Ajustado automaticamente para ficar proporcional

## 🔧 Se a logo não aparecer:

1. Verifique se o arquivo está em `public/logo.png`
2. Verifique se o nome está correto (minúsculas)
3. Limpe o cache do navegador (Ctrl+Shift+Delete)
4. Aguarde alguns minutos para o deploy completar

## 📝 Formatos aceitos:

- PNG (recomendado - com fundo transparente)
- JPG
- SVG
- WebP

**Tamanho recomendado**: 400x160 pixels ou proporção similar
