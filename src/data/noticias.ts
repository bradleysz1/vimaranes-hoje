export interface Noticia {
  id: number
  slug: string
  titulo: string
  resumo: string
  conteudo: string
  imagem: string
  categoria: string
  autor: string
  data: string
  destaque: boolean
}

export const noticias: Noticia[] = [
  {
    id: 1,
    slug: 'guimaraes-mobilidade-sustentavel-2026',
    titulo: 'Guimarães Completa Rede de Ciclovias e Autocarros Elétricos Reduzem Emissões em 35%',
    resumo: 'A Câmara Municipal de Guimarães celebra o sucesso do plano de mobilidade sustentável com resultados que superaram as expectativas.',
    conteudo: `
      <p>A Câmara Municipal de Guimarães celebra esta semana a conclusão bem-sucedida do plano de mobilidade sustentável, que transformou significativamente a forma como os vimaranenses se deslocam pela cidade.</p>

      <h2>Resultados Alcançados</h2>
      <p>O projeto superou as metas iniciais:</p>
      <ul>
        <li><strong>Ciclovias Completas:</strong> 18 km de ciclovias ligam agora o centro histórico a todos os bairros principais</li>
        <li><strong>Frota Elétrica:</strong> 25 autocarros elétricos em operação, com redução de 35% nas emissões</li>
        <li><strong>Hubs de Mobilidade:</strong> 6 estações de bicicletas partilhadas com 300 bicicletas em circulação</li>
        <li><strong>Estacionamento Inteligente:</strong> Sistema implementado com ocupação reduzida em 40%</li>
      </ul>

      <h2>Impacto Ambiental e Social</h2>
      <p>Os resultados demonstram o compromisso de Guimarães com a sustentabilidade. A utilização de transportes sustentáveis aumentou 45%, superando a meta de 40%. O número de ciclistas diários cresceu de 200 para 1.200.</p>

      <p>"Este sucesso é resultado do trabalho conjunto da câmara, empresas locais e cidadãos. Guimarães é agora um exemplo nacional de mobilidade sustentável", afirmou o presidente da Câmara Municipal.</p>

      <h2>Próximas Fases</h2>
      <p>A câmara planeia expandir o projeto com a introdução de 15 novos autocarros elétricos e a criação de 3 novos hubs de mobilidade nos próximos 18 meses.</p>

      <h2>Reconhecimento Internacional</h2>
      <p>O projeto foi reconhecido pela Comissão Europeia como um dos melhores exemplos de mobilidade sustentável em cidades médias europeias.</p>

      <p><em>Fontes: Câmara Municipal de Guimarães, Relatório de Mobilidade Sustentável 2026, Comissão Europeia</em></p>
    `,
    imagem: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    categoria: 'Política',
    autor: 'João Santos',
    data: '2026-04-20',
    destaque: true,
  },
  {
    id: 2,
    slug: 'vitoria-sc-taca-portugal-2026',
    titulo: 'Vitória SC Conquista Taça de Portugal e Garante Participação na Liga dos Campeões',
    resumo: 'O clube vimaranense celebra uma época histórica com a conquista da Taça de Portugal e qualificação para a Liga dos Campeões 2026/2027.',
    conteudo: `
      <p>O Vitória Sport Clube celebra uma época histórica após conquistar a Taça de Portugal e garantir a participação na Liga dos Campeões 2026/2027, marcando um momento de ouro para o clube vimaranense.</p>

      <h2>Conquistas da Época</h2>
      <p>O clube alcançou resultados notáveis:</p>
      <ul>
        <li><strong>Taça de Portugal:</strong> Vitória 2-1 na final contra o Benfica</li>
        <li><strong>Campeonato Nacional:</strong> 3º lugar com 72 pontos</li>
        <li><strong>Liga dos Campeões:</strong> Qualificação garantida para a fase de grupos</li>
      </ul>

      <h2>Declarações do Treinador</h2>
      <p>"Esta é uma época que ficará para a história do Vitória. Os jogadores demonstraram qualidade, determinação e espírito de equipa. Estamos preparados para competir na Liga dos Campeões", afirmou o treinador principal.</p>

      <h2>Impacto para a Cidade</h2>
      <p>A conquista da Taça de Portugal trouxe grande alegria aos vimaranenses, com celebrações no centro histórico que reuniram mais de 50.000 adeptos. A participação na Liga dos Campeões coloca Guimarães no mapa do futebol europeu.</p>

      <h2>Próximos Desafios</h2>
      <p>O clube prepara-se para a pré-época com vista à participação na Liga dos Campeões. Estão previstos reforços estratégicos para competir ao mais alto nível europeu.</p>

      <p><em>Fontes: Vitória Sport Clube, Federação Portuguesa de Futebol</em></p>
    `,
    imagem: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    categoria: 'Desporto',
    autor: 'Pedro Oliveira',
    data: '2026-04-18',
    destaque: true,
  },
  {
    id: 3,
    slug: 'vimaranes-hub-dois-anos-2026',
    titulo: 'Vimaranes Hub Completa Dois Anos com 150 Empresas Instaladas e 500 Postos de Trabalho',
    resumo: 'O espaço de coworking consolidou-se como um motor de inovação e empreendedorismo em Guimarães.',
    conteudo: `
      <p>O Vimaranes Hub celebra dois anos de funcionamento com números impressionantes que confirmam o seu papel crucial no ecossistema de inovação de Guimarães.</p>

      <h2>Números Alcançados</h2>
      <p>Em dois anos de operação:</p>
      <ul>
        <li><strong>Empresas Instaladas:</strong> 150 startups e PMEs</li>
        <li><strong>Postos de Trabalho:</strong> 500 empregos criados</li>
        <li><strong>Investimento Atraído:</strong> €5 milhões em financiamento</li>
        <li><strong>Taxa de Sucesso:</strong> 85% das startups continuam ativas após 2 anos</li>
      </ul>

      <h2>Histórias de Sucesso</h2>
      <p>Várias empresas que começaram no hub já expandiram para outras cidades e países. Uma startup de software foi adquirida por uma empresa internacional por €2 milhões.</p>

      <h2>Expansão Planeada</h2>
      <p>Devido ao sucesso, está planeada a abertura de um segundo hub com 100 postos de trabalho adicionais no próximo ano.</p>

      <p><em>Fontes: Vimaranes Hub, Câmara Municipal de Guimarães</em></p>
    `,
    imagem: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    categoria: 'Economia',
    autor: 'Maria Silva',
    data: '2026-04-15',
    destaque: false,
  },
  {
    id: 4,
    slug: 'festival-gastronomia-2026',
    titulo: 'Festival de Gastronomia Tradicional Regressa em Maio com Recordes de Visitantes',
    resumo: 'O "Sabores do Berço" atrai 15.000 visitantes e gera €500 mil em receita para restaurantes locais.',
    conteudo: `
      <p>O Festival de Gastronomia Tradicional "Sabores do Berço" regressa em maio com uma edição que promete bater recordes de participação e receita.</p>

      <h2>Edição Anterior</h2>
      <p>Na edição anterior, o festival atraiu 15.000 visitantes e gerou €500 mil em receita para os restaurantes locais, consolidando-se como um dos maiores eventos gastronómicos do norte de Portugal.</p>

      <h2>Novidades para 2026</h2>
      <p>Esta edição incluirá:</p>
      <ul>
        <li>40 restaurantes participantes (aumento de 33%)</li>
        <li>20 chefs convidados internacionais</li>
        <li>Workshops de culinária molecular</li>
        <li>Mercado de produtores biológicos locais</li>
      </ul>

      <h2>Impacto Turístico</h2>
      <p>O festival consolidou Guimarães como destino gastronómico de referência, atraindo turistas de toda a Europa.</p>

      <p><em>Fontes: Associação de Restaurantes de Guimarães, Câmara Municipal</em></p>
    `,
    imagem: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    categoria: 'Cultura',
    autor: 'Carla Ferreira',
    data: '2026-04-12',
    destaque: false,
  },
  {
    id: 5,
    slug: 'guimaraes-empreendedor-primeira-edicao',
    titulo: 'Programa Guimarães Empreendedor Completa Primeira Edição com 25 Startups Apoiadas',
    resumo: 'O programa de apoio a startups superou expectativas com 25 empresas financiadas e 200 postos de trabalho criados.',
    conteudo: `
      <p>O programa "Guimarães Empreendedor" completa a sua primeira edição com resultados que superaram todas as expectativas iniciais.</p>

      <h2>Resultados da Primeira Edição</h2>
      <p>O programa apoiou:</p>
      <ul>
        <li><strong>Startups Financiadas:</strong> 25 empresas (meta era 20)</li>
        <li><strong>Investimento Total:</strong> €1,2 milhões (orçamento era €1 milhão)</li>
        <li><strong>Postos de Trabalho:</strong> 200 empregos criados</li>
        <li><strong>Taxa de Sobrevivência:</strong> 92% das startups continuam ativas</li>
      </ul>

      <h2>Segunda Edição</h2>
      <p>Devido ao sucesso, foi aprovada uma segunda edição com orçamento aumentado para €1,5 milhões e meta de 30 startups.</p>

      <p><em>Fontes: Câmara Municipal de Guimarães, Programa Guimarães Empreendedor</em></p>
    `,
    imagem: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    categoria: 'Economia',
    autor: 'João Santos',
    data: '2026-04-10',
    destaque: false,
  },
  {
    id: 6,
    slug: 'castelo-guimaraes-restauracao-2026',
    titulo: 'Castelo de Guimarães Reabre Após Restauração com Novos Espaços de Interpretação',
    resumo: 'O projeto de restauração de €2 milhões foi concluído com sucesso, reforçando as estruturas medievais e melhorando a experiência dos visitantes.',
    conteudo: `
      <p>O Castelo de Guimarães, Patrimônio da Humanidade, reabre após conclusão bem-sucedida do projeto de restauração de €2 milhões.</p>

      <h2>Melhorias Implementadas</h2>
      <p>O projeto incluiu:</p>
      <ul>
        <li>Reforço completo das muralhas medievais</li>
        <li>Restauração de todas as torres e bastiões</li>
        <li>Novos espaços de interpretação histórica com tecnologia interativa</li>
        <li>Acessibilidade melhorada para pessoas com mobilidade reduzida</li>
        <li>Sistemas de segurança modernos</li>
      </ul>

      <h2>Impacto Turístico</h2>
      <p>Após a reabertura, o número de visitantes aumentou 50%, atingindo 300.000 visitantes anuais. O castelo consolidou-se como o monumento mais visitado do norte de Portugal.</p>

      <p><em>Fontes: Câmara Municipal de Guimarães, UNESCO, Instituto da Conservação e Restauro</em></p>
    `,
    imagem: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    categoria: 'Cultura',
    autor: 'Luís Rodrigues',
    data: '2026-04-08',
    destaque: false,
  },
]
