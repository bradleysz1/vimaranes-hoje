-- Apagar todas as notícias antigas
DELETE FROM news;

-- Verificar se está vazio
SELECT COUNT(*) as total_noticias FROM news;

-- Ver suas notícias (se houver)
SELECT id, title, slug, published_at FROM news ORDER BY published_at DESC;
