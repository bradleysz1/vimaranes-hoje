-- Remover políticas RLS restritivas existentes
DROP POLICY IF EXISTS "Public news are viewable by everyone" ON news;
DROP POLICY IF EXISTS "Categories are viewable by everyone" ON categories;
DROP POLICY IF EXISTS "Authors are viewable by everyone" ON authors;

-- Criar políticas que permitem leitura pública
CREATE POLICY "Enable read access for all users" ON news
  FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON categories
  FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON authors
  FOR SELECT USING (true);

-- Criar políticas que permitem inserção pública (para o admin funcionar)
CREATE POLICY "Enable insert for all users" ON news
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable insert for all users" ON categories
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable insert for all users" ON authors
  FOR INSERT WITH CHECK (true);

-- Criar políticas que permitem atualização pública
CREATE POLICY "Enable update for all users" ON news
  FOR UPDATE USING (true);

CREATE POLICY "Enable update for all users" ON categories
  FOR UPDATE USING (true);

CREATE POLICY "Enable update for all users" ON authors
  FOR UPDATE USING (true);

-- Verificar políticas
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('news', 'categories', 'authors')
ORDER BY tablename, policyname;
