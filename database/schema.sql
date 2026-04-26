-- Criação da tabela de categorias
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Criação da tabela de autores
CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  bio TEXT,
  avatar VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Criação da tabela de notícias
CREATE TABLE news (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content TEXT,
  image VARCHAR(500),
  category_id INTEGER REFERENCES categories(id),
  author_id INTEGER REFERENCES authors(id),
  slug VARCHAR(255) UNIQUE NOT NULL,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Inserção de categorias padrão
INSERT INTO categories (name, slug, description) VALUES
('Política', 'politica', 'Notícias sobre política local e municipal'),
('Cultura', 'cultura', 'Eventos culturais, património e tradições'),
('Desporto', 'desporto', 'Notícias desportivas locais'),
('Eventos', 'eventos', 'Agenda e cobertura de eventos'),
('Opinião', 'opiniao', 'Artigos de opinião e editoriais'),
('Economia', 'economia', 'Notícias económicas e empresariais'),
('Educação', 'educacao', 'Notícias sobre educação e ensino'),
('Segurança', 'seguranca', 'Notícias sobre segurança pública'),
('Gastronomia', 'gastronomia', 'Culinária e restauração local');

-- Inserção de autores exemplo
INSERT INTO authors (name, email, bio) VALUES
('Maria Silva', 'maria.silva@vimaraneshoje.pt', 'Jornalista especializada em cultura e património'),
('João Santos', 'joao.santos@vimaraneshoje.pt', 'Repórter de economia e política local'),
('Ana Costa', 'ana.costa@vimaraneshoje.pt', 'Correspondente de educação e eventos'),
('Pedro Oliveira', 'pedro.oliveira@vimaraneshoje.pt', 'Jornalista de desporto e segurança'),
('Carla Ferreira', 'carla.ferreira@vimaraneshoje.pt', 'Especialista em gastronomia local'),
('Luís Rodrigues', 'luis.rodrigues@vimaraneshoje.pt', 'Editor e colunista de opinião'),
('Sofia Mendes', 'sofia.mendes@vimaraneshoje.pt', 'Repórter de eventos e lifestyle');

-- Inserção de notícias exemplo
INSERT INTO news (title, excerpt, content, image, category_id, author_id, slug, featured, published, published_at) VALUES
(
  'Guimarães recebe festival de música tradicional este fim de semana',
  'O centro histórico da cidade vai acolher mais uma edição do festival que celebra as tradições musicais da região.',
  '<p>O centro histórico de Guimarães vai acolher, este fim de semana, mais uma edição do Festival de Música Tradicional, um evento que celebra as raízes musicais da região e promove a preservação do património cultural imaterial.</p><p>O festival, que decorre entre sexta-feira e domingo, vai contar com a participação de vários grupos folclóricos locais, bem como artistas convidados de outras regiões do país.</p>',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  2, 1, 'festival-musica-tradicional-guimaraes', true, true, NOW()
),
(
  'Nova ciclovia liga centro histórico ao parque da cidade',
  'Investimento municipal melhora mobilidade sustentável em Guimarães.',
  '<p>A Câmara Municipal de Guimarães inaugurou uma nova ciclovia que liga o centro histórico ao parque da cidade, promovendo a mobilidade sustentável.</p>',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  1, 2, 'nova-ciclovia-centro-parque', false, true, NOW() - INTERVAL '1 day'
);

-- Criação de índices para melhor performance
CREATE INDEX idx_news_published ON news(published, published_at DESC);
CREATE INDEX idx_news_category ON news(category_id);
CREATE INDEX idx_news_author ON news(author_id);
CREATE INDEX idx_news_slug ON news(slug);
CREATE INDEX idx_news_featured ON news(featured);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para atualizar updated_at
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_authors_updated_at BEFORE UPDATE ON authors FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Políticas RLS (Row Level Security) - opcional para segurança
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- Política para leitura pública das notícias publicadas
CREATE POLICY "Public news are viewable by everyone" ON news
  FOR SELECT USING (published = true);

-- Política para leitura pública das categorias
CREATE POLICY "Categories are viewable by everyone" ON categories
  FOR SELECT USING (true);

-- Política para leitura pública dos autores
CREATE POLICY "Authors are viewable by everyone" ON authors
  FOR SELECT USING (true);