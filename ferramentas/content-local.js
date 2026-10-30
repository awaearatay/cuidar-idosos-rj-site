// Textos locais dos bairros principais. Hospitais, ruas e praças vieram de consulta ao Google Maps (18/10/2026).
// Nada de preços, depoimentos, anos de experiência ou promessas: só referências de localização e orientação para o contato.
const SRC_NOTE = 'Referências de localização consultadas no Google Maps em outubro de 2026. A CUIDAR IDOSOS não tem vínculo com essas instituições. Confirme horários e regras de acompanhante diretamente com cada unidade.';

const LOCAL = {
  'grajau': {
    nome: 'Grajaú',
    intro: [
      'O Grajaú é um bairro arborizado da Zona Norte, junto ao Maciço da Tijuca, e muitas famílias da região preferem manter a pessoa idosa na própria casa, com apoio durante o dia ou à noite. Quando há internação ou consulta, o bairro conta com o Hospital Clínica Grajaú, e hospitais da Tijuca e de Vila Isabel ficam próximos.',
      'Ao falar com Mariano, informe a rua, se o imóvel tem escada ou elevador e em quais horários a família precisa de apoio. Para quem gosta de sair, as praças e o parque do bairro, listados abaixo, são referências para combinar passeios acompanhados, respeitando a disposição e a mobilidade de cada pessoa.'
    ],
    hosp: [['Hospital Clínica Grajaú', 'R. Barão do Bom Retiro, 2484']],
    refs: [['Parque Estadual do Grajaú', 'R. Comendador Martineli, 742'], ['Praça Edmundo Rêgo', 'Grajaú'], ['Praça Professor Darcy Pereira', 'R. Carena, 850'], ['Praça Nobel', 'R. Campinas, 143']]
  },
  'jacarepagua': {
    nome: 'Jacarepaguá',
    intro: [
      'Jacarepaguá é um bairro extenso da Zona Oeste, com áreas bem diferentes entre si. Por isso, na hora de combinar o atendimento, o endereço exato e o acesso ao imóvel fazem diferença no planejamento do deslocamento e dos horários.',
      'Há hospitais e centros de saúde dentro do próprio bairro, como o Hospital de Clínicas de Jacarepaguá e o Centro Hospitalar Amep Jacarepaguá. Se a necessidade envolve uma internação, diga qual unidade e quais períodos a família quer cobrir; o acompanhamento segue as regras de acesso do hospital.'
    ],
    hosp: [['Hospital de Clínicas de Jacarepaguá', 'R. Bacairis, 499'], ['Centro Hospitalar Amep Jacarepaguá', 'Estr. Marechal Miguel Salazar Mendes de Moraes, 254']],
    refs: [['Bosque da Freguesia', 'Av. Ten.-Cel. Muniz de Aragão, 280'], ['Praça da CEDAE', 'R. Sampaio Corrêa, 106'], ['ParkJacarepaguá', 'Estr. de Jacarepaguá, 6069']]
  },
  'meier': {
    nome: 'Méier',
    intro: [
      'O Méier é um dos centros comerciais da Zona Norte, com ruas de grande movimento, como a Dias da Cruz, e muitos serviços de saúde reunidos em poucos quarteirões. Para famílias do bairro, isso facilita combinar acompanhamento em consultas, exames e internações sem grandes deslocamentos.',
      'O bairro tem hospitais públicos e particulares, como o Hospital Municipal Salgado Filho, o Hospital Pasteur e o Hospital Marcos Moraes. Ao entrar em contato, informe a rua do atendimento, o hospital ou clínica de interesse e os períodos desejados.'
    ],
    hosp: [['Hospital Municipal Salgado Filho', 'R. Arquias Cordeiro, 370'], ['Hospital Pasteur', 'Av. Amaro Cavalcanti, 495'], ['Hospital Marcos Moraes', 'R. Aristides Caire, 27'], ['Hospital Assim', 'R. Ten. Costa, 160'], ['Centro Municipal de Saúde Cesar Pernetta', 'R. Ana Barbosa, 21']],
    refs: [['Praça Agripino Grieco', 'R. Dias da Cruz'], ['Praça Jardim do Méier', 'Méier'], ['Coreto do Méier', 'Méier'], ['Praça Amambaí', 'Méier']]
  },
  'madureira': {
    nome: 'Madureira',
    intro: [
      'Madureira é um dos grandes polos comerciais e culturais da Zona Norte e reúne em seu entorno o Parque Madureira, usado por moradores para caminhadas e atividades ao ar livre. Para famílias da região, o bairro oferece hospitais e pronto-atendimento a curta distância.',
      'Entre as referências de saúde estão o Hospital Norte D\'Or, a UPA Madureira e a Maternidade Herculano Pinheiro. Ao conversar com Mariano, explique onde a pessoa idosa mora, como é o acesso ao imóvel e se o apoio é em casa, em hospital ou em compromissos fora de casa.'
    ],
    hosp: [['Hospital Norte D\'Or', 'R. Carolina Machado, 38'], ['UPA Madureira', 'Praça dos Lavradores, s/n'], ['Hospital Maternidade Herculano Pinheiro', 'Av. Min. Edgard Romero, 276']],
    refs: [['Parque Madureira', 'R. Soares Caldeira, 115'], ['Praça Inácio do Canto', 'Madureira'], ['Praça do Patriarca (Campinho)', 'Campinho']]
  },
  'tijuca': {
    nome: 'Tijuca',
    intro: [
      'A Tijuca é um bairro tradicional da Zona Norte, ao lado do Parque Nacional da Tijuca, com muitos prédios residenciais e vários hospitais próximos entre si. Famílias do bairro costumam procurar apoio tanto em apartamentos, onde o acesso por portaria e elevador precisa ser alinhado, quanto em internações.',
      'Entre as referências de saúde da região estão o Hospital São Vicente de Paulo, o Hospital Pan-Americano, o Hospital Badim e o Hospital Israelita Albert Sabin. Informe ao Mariano o endereço, o hospital de interesse e os períodos, para consultar a disponibilidade.'
    ],
    hosp: [['Hospital São Vicente de Paulo', 'R. Dr. Satamini, 333'], ['Hospital Pan-Americano', 'R. Moura Brito, 138'], ['Hospital Badim', 'R. São Francisco Xavier, 390'], ['Hospital Israelita Albert Sabin', 'R. Prof. Gabizo, 319'], ['Hospital São Francisco na Providência de Deus', 'R. Conde de Bonfim, 1033']],
    refs: [['Praça Comandante Xavier de Brito', 'Tijuca'], ['Parque Nacional da Tijuca', 'Estr. da Cascatinha'], ['Praça Barão de Corumbá', 'R. Homem de Melo, 172']]
  },
  'vila-valqueire': {
    nome: 'Vila Valqueire',
    intro: [
      'Vila Valqueire é um bairro residencial da Zona Oeste, vizinho de Campinho, Madureira e Bento Ribeiro. A região é atendida por unidades de saúde ao longo da Avenida Jambeiro e da Estrada Intendente Magalhães, o que ajuda a planejar consultas e acompanhamentos.',
      'Há referências de saúde no próprio bairro e nas vizinhanças, como o Hospital Memorial Urmed e o Hospital Estadual Carlos Chagas. Para combinar o atendimento, passe o endereço, as características do imóvel e os horários em que a família precisa de apoio.'
    ],
    hosp: [['Hospital Memorial Urmed', 'Av. Jambeiro, 48'], ['Centro Ambulatorial Valqueire', 'Av. Jambeiro, 72'], ['Camim Clínica Médica Campinho', 'Estr. Intendente Magalhães, 488'], ['Hospital Estadual Carlos Chagas', 'Av. Gen. Osvaldo Cordeiro de Farias, 466']],
    refs: [['Avenida Jambeiro', 'Vila Valqueire'], ['Estrada Intendente Magalhães', 'Campinho']]
  },
  'bangu': {
    nome: 'Bangu',
    intro: [
      'Bangu é um dos maiores bairros da Zona Oeste, com comércio próprio e hospitais na região, o que evita que as famílias precisem ir até outras zonas da cidade para cuidar da saúde dos mais velhos. O deslocamento entre ruas do bairro pode variar bastante, por isso o endereço exato é importante.',
      'Entre as referências de saúde estão o Hospital Bangu, o Hospital São Matheus, a UPA Bangu e a Clínica Médica Amep Bangu. Ao entrar em contato, informe o local do atendimento, a unidade de saúde de interesse e os períodos desejados.'
    ],
    hosp: [['Hospital Bangu', 'R. Francisco Real, 752'], ['Hospital São Matheus', 'R. Silva Cardoso, 689'], ['UPA Bangu', 'R. Figueiredo Camargo, s/n'], ['Clínica Médica Amep Bangu', 'R. 12 de Fevereiro, 213']],
    refs: [['Praça Primeiro de Maio', 'Bangu']]
  },
  'campo-grande': {
    nome: 'Campo Grande',
    intro: [
      'Campo Grande é um dos maiores bairros da Zona Oeste e tem hospitais públicos e particulares espalhados por vias importantes, como a Avenida Cesário de Melo. Como a área é grande, o combinado de endereço e de deslocamento é parte essencial do atendimento.',
      'Entre as referências de saúde estão o Hospital Municipal Rocha Faria, o Hospital Oeste D\'Or, o Hospital Eduardo Rabello e o Hospital Di Camp. Informe ao Mariano onde a pessoa idosa mora, a unidade de interesse e os períodos em que a família precisa de apoio.'
    ],
    hosp: [['Hospital Municipal Rocha Faria', 'Av. Cesário de Melo, 3215'], ['Hospital Oeste D\'Or', 'R. Olinda Ellis, 93'], ['Hospital Eduardo Rabello', 'Est. do Pré, s/n'], ['Hospital Di Camp', 'Av. Albardão, 630'], ['Hospital Nossa Senhora do Carmo', 'R. Jaguaruna, 105']],
    refs: [['Avenida Cesário de Melo', 'Campo Grande']]
  },
  'bento-ribeiro': {
    nome: 'Bento Ribeiro',
    intro: [
      'Bento Ribeiro é onde fica a base da CUIDAR IDOSOS, na Rua Macambira, 33-B. Estar no bairro facilita o contato com famílias de Bento Ribeiro e dos bairros vizinhos, como Campinho, Marechal Hermes e Oswaldo Cruz.',
      'Perto do bairro estão o Hospital Estadual Carlos Chagas, a UPA 24H Marechal Hermes e o Hospital Memorial Urmed. Se o apoio é em casa, informe a rua e as características do imóvel; se é em hospital, diga a unidade e os períodos desejados.'
    ],
    hosp: [['Hospital Estadual Carlos Chagas', 'Av. Gen. Osvaldo Cordeiro de Farias, 466'], ['UPA 24H Marechal Hermes', 'R. Xavier Curado, s/n'], ['Hospital Memorial Urmed', 'Av. Jambeiro, 48'], ['Camim Clínica Médica Campinho', 'Estr. Intendente Magalhães, 488']],
    refs: []
  },
  'barra-da-tijuca': {
    nome: 'Barra da Tijuca',
    intro: [
      'A Barra da Tijuca é um bairro de grandes avenidas e condomínios, e o deslocamento entre um ponto e outro costuma ser longo, o que torna o combinado de endereço, portaria e horários parte importante do atendimento. Muitas famílias procuram apoio dentro de apartamentos, onde a rotina da pessoa idosa pode seguir no próprio lar.',
      'Há vários hospitais na região, como o Hospital Rio Barra, o Hospital Barra D\'Or e o Hospital Samaritano Barra. Ao falar com Mariano, informe o endereço, o hospital ou clínica de interesse e os períodos em que a família precisa de apoio.'
    ],
    hosp: [['Hospital Samaritano Barra', 'Av. Jorge Curi, 550'], ['Hospital Rio Barra', 'Av. Cândido Portinari, 555'], ['Hospital Barra D\'Or', 'Av. Nelson Mufarrej Filho, 255'], ['Hospital Municipal Lourenço Jorge', 'Av. Ayrton Senna, 2.000'], ['Barra Day Hospital', 'Av. Armando Lombardi, 1000']],
    refs: [['Bosque da Barra', 'Av. das Américas, 6000'], ['Parque Natural Municipal Marapendi', 'Av. Alfredo Balthazar da Silveira, 639'], ['Praça do Pomar', 'Praça Prof. José Bernardino']]
  },
  'copacabana': {
    nome: 'Copacabana',
    intro: [
      'Copacabana é um bairro de ruas movimentadas e prédios residenciais, com muitas pessoas idosas morando em apartamentos. Nesses casos, é importante alinhar o acesso por portaria e elevador, além de horários que respeitem a rotina do prédio.',
      'O bairro conta com o Hospital São Lucas Copacabana, o Hospital Copa D\'Or e o CopaStar, entre outros serviços de saúde. Informe ao Mariano o endereço, a unidade de interesse e os períodos desejados para consultar a disponibilidade.'
    ],
    hosp: [['Hospital São Lucas Copacabana', 'Tv. Frederico Pamplona, 32'], ['Hospital Copa D\'Or', 'R. Figueiredo de Magalhães, 875'], ['CopaStar', 'R. Figueiredo de Magalhães, 700']],
    refs: [['Praça do Lido', 'Copacabana'], ['Praça Serzedelo Corrêa', 'Av. Nossa Sra. de Copacabana, 540'], ['Praça Edmundo Bitencourt', 'Bairro Peixoto'], ['Parque Estadual da Chacrinha', 'R. Guimarães Natal']]
  },
  'recreio-dos-bandeirantes': {
    nome: 'Recreio dos Bandeirantes',
    intro: [
      'O Recreio dos Bandeirantes é um bairro de ruas amplas e áreas verdes na Zona Oeste, com casas e condomínios. Como as distâncias costumam ser maiores, o endereço exato e o acesso ao imóvel são parte do combinado do atendimento.',
      'Para saúde, o bairro conta com clínicas e centros médicos ao longo da Avenida das Américas e com o Centro Municipal de Saúde Harvey Ribeiro de Souza Filho. Para internações, a família costuma consultar também hospitais da Barra da Tijuca. Informe ao Mariano a unidade de interesse e os períodos.'
    ],
    hosp: [['Centro Municipal de Saúde Harvey Ribeiro de Souza Filho', 'Av. Guiomar Novaes, 133'], ['Centro Médico Pastore Recreio', 'Av. das Américas, 17145'], ['Hospital Calren', 'R. Gen. Orlando Geisel, 100']],
    refs: [['Parque Natural Municipal Chico Mendes', 'Av. Jarbas de Carvalho, 679'], ['Praça Miguel Osório', 'Recreio'], ['Praça Augusto Ruschi', 'Recreio']]
  },
  'realengo': {
    nome: 'Realengo',
    intro: [
      'Realengo é um bairro da Zona Oeste com comércio ao longo da Avenida de Santa Cruz e unidades de saúde dentro do próprio bairro, o que ajuda famílias a organizar consultas e internações sem depender de grandes deslocamentos.',
      'Entre as referências estão o Hospital Municipal Albert Schweitzer, a UPA Realengo, a UPA Jardim Novo Realengo e a Clínica Camim Realengo. Ao entrar em contato, diga o endereço do atendimento, a unidade de saúde de interesse e os períodos desejados.'
    ],
    hosp: [['Hospital Municipal Albert Schweitzer', 'R. Nilópolis, 239'], ['UPA Realengo', 'R. Mal. Joaquim Inácio, s/n'], ['UPA Jardim Novo Realengo', 'Av. Pirpirituba, 98'], ['Clínica Camim Realengo', 'Av. de Santa Cruz, 598']],
    refs: [['Parque Realengo Susana Naspolini', 'R. Prof. Carlos Wenceslau, 290'], ['Praça de Realengo', 'Av. de Santa Cruz, 1125'], ['Praça do Canhão', 'Realengo']]
  },
  'santa-cruz': {
    nome: 'Santa Cruz',
    intro: [
      'Santa Cruz fica no extremo da Zona Oeste e é um bairro extenso, onde a distância até o hospital pode pesar na decisão da família. Por isso, na hora de pedir apoio, vale informar com precisão o endereço, o acesso e a unidade de saúde de interesse.',
      'O bairro tem hospitais como o Hospital Municipal Pedro II, o Hospital Cemeru de Santa Cruz e o Hospital Casa Santa Cruz. Informe ao Mariano os períodos em que a família precisa de apoio, em casa ou no hospital.'
    ],
    hosp: [['Hospital Municipal Pedro II', 'R. do Prado, 325'], ['Hospital Cemeru de Santa Cruz', 'R. Felipe Cardoso, 1027'], ['Hospital Casa Santa Cruz', 'R. Nestor, 131'], ['Memorial Santa Cruz', 'R. Felipe Cardoso, 759']],
    refs: [['Vila Olímpica Cidade das Crianças Leonel Brizola', 'Rod. Rio-Santos, km 1'], ['Praça Hugo Peres', 'Largo do Matadouro, 133']]
  },
  'penha': {
    nome: 'Penha',
    intro: [
      'A Penha é um bairro tradicional da Zona Norte, com comércio ativo e referências conhecidas, como o Largo da Penha. Muitas famílias da região buscam apoio em casa para quem prefere continuar na própria rua e entre vizinhos.',
      'O bairro tem o Hospital Estadual Getúlio Vargas, a UPA Penha e o Hospital Leopoldina, entre outras unidades. Ao falar com Mariano, informe o endereço, a unidade de interesse e os horários em que a família precisa de acompanhamento.'
    ],
    hosp: [['Hospital Estadual Getúlio Vargas', 'Av. Lobo Júnior, 2293'], ['UPA Penha', 'Av. Brás de Pina, s/n'], ['Hospital Leopoldina', 'Av. Lobo Júnior, 695'], ['Hospital Mário Kroeff', 'R. Magé, 326']],
    refs: [['Praça do Viseu', 'R. Carlos Chambeland'], ['Praça Santa Emiliana (IAPI)', 'R. Santa Engrácia'], ['Praça da Cetel', 'Praça Paulo Setúbal, 50']]
  },
  'iraja': {
    nome: 'Irajá',
    intro: [
      'Irajá é um bairro da Zona Norte com comércio e feiras tradicionais e uma rotina de bairro, onde muitas famílias preferem manter a pessoa idosa em casa. O endereço exato ajuda a organizar o deslocamento e os horários do atendimento.',
      'A região tem o Hospital Irajá e o Hospital Municipal Francisco da Silva Telles. Informe ao Mariano o local do atendimento, a unidade de saúde de interesse e os períodos desejados.'
    ],
    hosp: [['Hospital Irajá', 'R. Pereira de Araújo, 44'], ['Hospital Municipal Francisco da Silva Telles', 'Av. Ubirajara, 25']],
    refs: [['Praça Mato Grosso', 'R. Marquês de Aracati, 267'], ['Praça da Light', 'R. Calumbi'], ['Praça Ipupiara', 'R. Caiabu']]
  },
  'taquara': {
    nome: 'Taquara',
    intro: [
      'A Taquara é um bairro de Jacarepaguá, próximo ao Parque Estadual da Pedra Branca, e concentra comércio e serviços de saúde ao longo de suas principais ruas e estradas. Famílias da região costumam combinar apoio em casa e acompanhamento em consultas.',
      'Entre as referências de saúde estão a UPA de Jacarepaguá, o Hospital de Clínicas de Jacarepaguá, o Centro Hospitalar Amep Jacarepaguá e o Centro Médico Rios D\'Or Taquara. Ao entrar em contato, informe o endereço e os períodos em que a família precisa de apoio.'
    ],
    hosp: [['UPA de Jacarepaguá', 'R. André Rocha'], ['Hospital de Clínicas de Jacarepaguá', 'R. Bacairis, 499'], ['Centro Hospitalar Amep Jacarepaguá', 'Estr. Marechal Miguel Salazar Mendes de Moraes, 254'], ['Centro Médico Rios D\'Or Taquara', 'Estr. dos Bandeirantes, 363'], ['Amep Saúde Taquara', 'Av. Nelson Cardoso, 864']],
    refs: [['Parque Natural Municipal da Taquara', 'Estr. Cachoeira das Dores, 3465'], ['Praça Albert Sabin (Praça da Merck)', 'Taquara'], ['Praça Waldir Vieira', 'Estr. do Engenho Velho, 1090']]
  },
  'botafogo': {
    nome: 'Botafogo',
    intro: [
      'Botafogo é um bairro da Zona Sul de ruas movimentadas, prédios residenciais e vários hospitais próximos uns dos outros. Em apartamentos, é importante alinhar portaria, elevador e horários do prédio antes do primeiro atendimento.',
      'Entre as referências de saúde estão o Hospital Samaritano Botafogo, o Hospital Municipal Rocha Maia, o Hospital Pró-Cardíaco e a UPA Botafogo. Informe ao Mariano o endereço, a unidade de interesse e os períodos desejados.'
    ],
    hosp: [['Hospital Samaritano Botafogo', 'R. Bambina, 98'], ['Hospital Municipal Rocha Maia', 'R. Gen. Severiano, 91'], ['Hospital Pró-Cardíaco', 'R. General Polidoro, 192'], ['UPA Botafogo 24h', 'R. São Clemente, s/n'], ['Hospital São Zacharias', 'Av. Carlos Peixoto, 124']],
    refs: [['Parque Yitzhak Rabin (Morro do Pasmado)', 'Al. Embaixador Sanchez Gavito'], ['Praça General Leandro', 'R. Lauro Müller, 66'], ['Praça Guilherme Figueiredo', 'Av. Pasteur, 404']]
  },
  'vila-isabel': {
    nome: 'Vila Isabel',
    intro: [
      'Vila Isabel é um bairro tradicional da Zona Norte, com ruas arborizadas, prédios residenciais e hospitais de grande porte, como o Hospital Universitário Pedro Ernesto. Famílias do bairro costumam combinar apoio em apartamentos e também acompanhamento em internações.',
      'Perto do bairro estão o Hospital Universitário Pedro Ernesto, o Hospital Federal do Andaraí e o Hospital NotreCare Rio. Ao falar com Mariano, informe o endereço, a unidade de interesse e os períodos em que a família precisa de apoio.'
    ],
    hosp: [['Hospital Universitário Pedro Ernesto', 'Blvd. 28 de Setembro, 77'], ['Hospital Federal do Andaraí', 'R. Leopoldo, 280'], ['Hospital NotreCare Rio', 'R. Silva Teles, 52'], ['Hospital Clínica Grajaú', 'R. Barão do Bom Retiro, 2484']],
    refs: [['Parque Recanto do Trovador', 'R. Visc. de Santa Isabel, 272'], ['Praça Barão de Drumond', 'Vila Isabel'], ['Praça Professor Darcy Pereira', 'R. Carena, 850']]
  }
};

// bairros restantes: dados do Google Maps em dados/auto.jsonl; o texto é montado no build (autoIntro)
const fsx = require('fs'), pathx = require('path');
const AUTO = pathx.join(__dirname, 'dados', 'auto.jsonl');
if (fsx.existsSync(AUTO)) for (const line of fsx.readFileSync(AUTO, 'utf8').split(/\r?\n/)) {
  if (!line.trim()) continue;
  const o = JSON.parse(line);
  if (!LOCAL[o.slug]) LOCAL[o.slug] = { nome: o.nome, auto: true, hosp: o.hosp, refs: o.refs || [] };
}

{
  const by = {};
  for (const o of fsx.readFileSync(AUTO, 'utf8').split(String.fromCharCode(10)).filter(l => l.trim()).map(l => JSON.parse(l))) by[o.slug] = o;
  require('./content-local-20.js')(LOCAL, by);
  require('./content-local-20.js')(LOCAL, by, require('./content-local-20b.js'));
  require('./content-local-20.js')(LOCAL, by, require('./content-local-20c.js'));
  require('./content-local-20.js')(LOCAL, by, require('./content-local-20d.js'));
  require('./content-local-20.js')(LOCAL, by, require('./content-local-20e.js'));
  require('./content-local-20.js')(LOCAL, by, require('./content-local-20f.js'));
  require('./content-local-20.js')(LOCAL, by, require('./content-local-20g.js'));
}

module.exports = { LOCAL, SRC_NOTE };
