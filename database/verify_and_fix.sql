-- Verificar e inserir categorias que estão faltando
INSERT INTO categories (name, slug, description) 
SELECT 'Política', 'politica', 'Notícias sobre política local e municipal'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE slug = 'politica');

INSERT INTO categories (name, slug, description) 
SELECT 'Cultura', 'cultura', 'Eventos culturais, património e tradições'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE slug = 'cultura');

INSERT INTO categories (name, slug, description) 
SELECT 'Desporto', 'desporto', 'Notícias desportivas locais'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE slug = 'desporto');

INSERT INTO categories (name, slug, description) 
SELECT 'Eventos', 'eventos', 'Agenda e cobertura de eventos'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE slug = 'eventos');

INSERT INTO categories (name, slug, description) 
SELECT 'Opinião', 'opiniao', 'Artigos de opinião e editoriais'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE slug = 'opiniao');

INSERT INTO categories (name, slug, description) 
SELECT 'Economia', 'economia', 'Notícias económicas e empresariais'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE slug = 'economia');

INSERT INTO categories (name, slug, description) 
SELECT 'Educação', 'educacao', 'Notícias sobre educação e ensino'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE slug = 'educacao');

INSERT INTO categories (name, slug, description) 
SELECT 'Segurança', 'seguranca', 'Notícias sobre segurança pública'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE slug = 'seguranca');

INSERT INTO categories (name, slug, description) 
SELECT 'Gastronomia', 'gastronomia', 'Culinária e restauração local'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE slug = 'gastronomia');

-- Verificar categorias cadastradas
SELECT * FROM categories ORDER BY name;
