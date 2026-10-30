// Conteúdo das novas páginas (serviços e guias). Textos escritos sem inventar dados da empresa:
// nada de preços, anos de experiência, depoimentos ou parcerias. Disponibilidade sempre "sujeita a consulta".
const U = 'https://cuidaridososrj.com.br';

const services = [
  {
    slug: 'cuidador-de-idosos-domiciliar-rj.html',
    kind: 'service',
    name: 'Cuidador de idosos em casa',
    short: 'Cuidador de idosos em casa',
    title: 'Cuidador de Idosos em Casa no Rio de Janeiro | CUIDAR IDOSOS',
    desc: 'Cuidador de idosos domiciliar no Rio de Janeiro: companhia, apoio à rotina e respeito à autonomia, com horários combinados com a família. Consulte bairros e disponibilidade.',
    eyebrow: 'CUIDADOR DOMICILIAR · RIO DE JANEIRO',
    h1: 'Cuidador de idosos <em>em casa</em> no Rio de Janeiro',
    lead: 'Companhia e apoio à rotina da pessoa idosa dentro da própria casa, com respeito à autonomia e horários combinados com a família.',
    img: ['domiciliar.webp', 'Mulher idosa e cuidadora conversando'],
    wa: 'Olá, Mariano! Procuro cuidador de idosos em casa. Gostaria de consultar serviços e disponibilidade.',
    cta: 'Consultar cuidador em casa ↗',
    sections: [
      { h: 'O que faz um cuidador de idosos em casa', html: `
<p>O cuidador de pessoas idosas é o profissional que acompanha a rotina de quem precisa de apoio no dia a dia, sem que isso signifique tirar a pessoa de casa nem de suas rotinas. A atuação é combinada com a família e muda conforme o grau de dependência de cada pessoa. Em geral, o apoio pode incluir:</p>
<ul><li>companhia, conversa e estímulo a atividades de que a pessoa gosta;</li><li>apoio à higiene pessoal, ao vestir-se e à alimentação, respeitando o que ela ainda consegue fazer sozinha;</li><li>auxílio na locomoção dentro de casa e atenção à prevenção de quedas;</li><li>lembrar os horários de medicamentos já prescritos, conforme orientação da família e do médico;</li><li>acompanhamento a consultas, exames e pequenas saídas, quando combinado;</li><li>comunicação com a família sobre como foi o dia e sobre qualquer mudança que chame atenção.</li></ul>` },
      { h: 'Para quem o cuidador domiciliar costuma ser indicado', html: `
<p>Famílias costumam procurar esse apoio quando a pessoa idosa passa boa parte do dia sozinha, quando os filhos trabalham e precisam de tranquilidade, quando houve uma internação e a volta para casa exige mais atenção, ou quando a mobilidade e a memória pedem alguém por perto. Também é uma opção para quem busca companhia e estímulo, mesmo sem uma doença específica.</p>
<p>Cada situação é diferente. Por isso, o primeiro passo é conversar sobre a rotina, o histórico de saúde que a família deseja compartilhar e o que a pessoa idosa aceita bem. Esse alinhamento evita surpresas e ajuda a escolher o formato mais adequado: algumas horas por dia, <a href="/plantao-cuidador-de-idosos-rj.html">plantões diurnos ou noturnos</a> ou períodos em dias específicos.</p>` },
      { h: 'O que não é função do cuidador', html: `
<p>Cuidador e técnico de enfermagem têm atuações diferentes. Procedimentos técnicos de saúde, como aplicar injeções, fazer curativos que exigem técnica, manejar sondas ou outros cuidados que dependem de formação em enfermagem, devem ser feitos por profissional habilitado, dentro das atribuições da profissão. Se a pessoa idosa precisa desse tipo de cuidado, veja a página de <a href="/tecnico-de-enfermagem-para-idosos-rj.html">técnico de enfermagem para idosos</a> ou leia o guia <a href="/cuidador-ou-tecnico-de-enfermagem-diferencas.html">cuidador ou técnico de enfermagem: qual a diferença?</a>.</p>` },
      { h: 'Como combinar o atendimento', html: `
<ol class="plain-steps"><li><strong>Conte a rotina.</strong> Horários de acordar, refeições, medicamentos, atividades de que a pessoa gosta e o que ela costuma recusar.</li><li><strong>Informe o bairro e o acesso.</strong> Endereço, escadas ou elevador, portaria e quem será o contato responsável na família.</li><li><strong>Defina dias e horários.</strong> Inclua fins de semana e feriados, se necessário.</li><li><strong>Combine as responsabilidades.</strong> O que o cuidador fará, o que continua com a família e como serão passadas as informações do dia.</li></ol>
<p>Veja também os <a href="/bairros-atendidos.html">bairros atendidos</a> e consulte a disponibilidade para a sua região.</p>` }
    ],
    faq: [
      ['Cuidador de idosos pode dar remédios?', 'O cuidador pode lembrar os horários e auxiliar no que for combinado com a família, seguindo a prescrição médica. Procedimentos técnicos, como injeções, devem ser feitos por profissional habilitado, como o técnico de enfermagem. Combine esse ponto antes de iniciar o atendimento.'],
      ['Posso contratar o cuidador só por algumas horas?', 'É possível consultar atendimento por hora, diária ou plantão. A organização depende do serviço, da região e da disponibilidade; confirme os detalhes com Mariano pelo WhatsApp.'],
      ['O cuidador atende idosos acamados ou com dificuldade de locomoção?', 'Informe o nível de dependência e de mobilidade da pessoa idosa na conversa inicial. Assim, é possível avaliar o apoio necessário e indicar se o caso pede também o acompanhamento de um técnico de enfermagem.'],
      ['Como saber se vocês atendem o meu bairro?', 'Envie o bairro pelo WhatsApp. Atendemos diversas regiões do Rio de Janeiro e a cobertura e a disponibilidade são confirmadas na conversa.'],
      ['Posso conversar antes de decidir?', 'Sim. A conversa inicial serve justamente para entender a rotina, esclarecer dúvidas e combinar os detalhes antes de começar.']
    ]
  },
  {
    slug: 'tecnico-de-enfermagem-para-idosos-rj.html',
    kind: 'service',
    name: 'Técnico de enfermagem para idosos',
    short: 'Técnico de enfermagem',
    title: 'Técnico de Enfermagem para Idosos em Casa no RJ | CUIDAR IDOSOS',
    desc: 'Técnico de enfermagem para idosos no Rio de Janeiro: cuidados técnicos em casa por profissional habilitado, dentro de suas atribuições. Consulte procedimentos e disponibilidade.',
    eyebrow: 'TÉCNICO DE ENFERMAGEM · RIO DE JANEIRO',
    h1: 'Técnico de enfermagem <em>para idosos</em> no Rio de Janeiro',
    lead: 'Cuidados técnicos em casa realizados por profissional habilitado, dentro de suas atribuições e conforme a orientação do médico ou do enfermeiro responsável.',
    img: ['tecnico.webp', 'Profissional de saúde conversando com um homem idoso'],
    wa: 'Olá, Mariano! Procuro técnico de enfermagem para idosos. Gostaria de consultar procedimentos e disponibilidade.',
    cta: 'Consultar técnico de enfermagem ↗',
    sections: [
      { h: 'Quando a família procura um técnico de enfermagem', html: `
<p>O técnico de enfermagem é indicado quando a pessoa idosa precisa de cuidados de saúde que vão além do apoio à rotina. É comum a procura depois de uma alta hospitalar, em tratamentos prolongados, em situações de dependência maior ou quando há prescrição médica de procedimentos a serem feitos em casa.</p>
<p>A atuação depende do que foi prescrito e do que a família combina com o profissional. Por isso, a conversa inicial é importante: informe o diagnóstico que deseja compartilhar, as orientações do médico e os horários dos cuidados.</p>` },
      { h: 'O que um técnico de enfermagem pode fazer', html: `
<p>A profissão de enfermagem é regulamentada em lei (Lei nº 7.498/1986 e Decreto nº 94.406/1987), e o técnico de enfermagem atua dentro das atribuições definidas para a categoria, sob orientação e supervisão do enfermeiro. Em casa, o trabalho pode envolver, conforme a prescrição e as orientações recebidas:</p>
<ul><li>aferição de sinais vitais, como pressão arterial, temperatura e frequência cardíaca;</li><li>administração de medicamentos prescritos, nas vias e formas permitidas à categoria;</li><li>curativos e cuidados com a pele, conforme orientação;</li><li>apoio à higiene e ao conforto de quem tem mais dependência;</li><li>observação de mudanças no estado da pessoa e registro das informações para a família e para a equipe de saúde.</li></ul>
<p>Consulte cada procedimento antes de contratar. Nem todo cuidado é permitido a todo profissional, e a disponibilidade varia conforme o serviço e a região.</p>` },
      { h: 'O que a família deve confirmar', html: `
<ul><li><strong>Registro profissional.</strong> O técnico de enfermagem deve ter inscrição ativa no Conselho Regional de Enfermagem (COREN-RJ). Você pode pedir os dados e consultar a situação no site do conselho.</li><li><strong>Prescrição e orientações.</strong> Tenha em mãos receitas, relatório de alta e orientações médicas para que o profissional siga o que foi indicado.</li><li><strong>Horários e responsabilidades.</strong> Combine plantões, trocas e quem será o contato da família durante o período.</li></ul>
<p>Se o apoio necessário é principalmente de companhia e rotina, veja a página de <a href="/cuidador-de-idosos-domiciliar-rj.html">cuidador de idosos em casa</a>. Para entender as diferenças, leia o guia <a href="/cuidador-ou-tecnico-de-enfermagem-diferencas.html">cuidador ou técnico de enfermagem</a>.</p>` },
      { h: 'Técnico de enfermagem no hospital e em plantões', html: `
<p>Além do atendimento em casa, a família pode consultar <a href="/acompanhante-hospitalar-para-idosos-rj.html">acompanhamento hospitalar</a> e <a href="/plantao-cuidador-de-idosos-rj.html">plantões diurnos e noturnos</a>. Dentro do hospital, a atuação segue as regras da unidade e não substitui a equipe de saúde responsável pelo paciente.</p>` }
    ],
    faq: [
      ['Qual a diferença entre cuidador e técnico de enfermagem?', 'O cuidador acompanha a rotina, a companhia e o apoio nas atividades diárias. O técnico de enfermagem realiza cuidados técnicos de saúde dentro das atribuições da profissão, conforme prescrição e orientação. Leia o guia completo na página de diferenças entre os dois profissionais.'],
      ['Preciso de receita ou relatório médico?', 'Para procedimentos técnicos, é importante ter a prescrição e as orientações médicas ou do enfermeiro responsável. Tenha em mãos receitas e o relatório de alta, se houver.'],
      ['O técnico de enfermagem pode ficar em plantão noturno?', 'É possível consultar plantões diurnos e noturnos. A disponibilidade depende do serviço, da região e do período desejado; confirme com Mariano pelo WhatsApp.'],
      ['Como verifico o registro do profissional?', 'Peça o número de inscrição no COREN-RJ e consulte a situação no site do conselho regional. É uma boa prática para qualquer profissional de enfermagem contratado.'],
      ['Vocês atendem em qual região?', 'Atendemos bairros de diversas regiões do Rio de Janeiro. Consulte a lista de bairros atendidos e envie o seu bairro pelo WhatsApp para confirmar a disponibilidade.']
    ]
  },
  {
    slug: 'acompanhante-hospitalar-para-idosos-rj.html',
    kind: 'service',
    name: 'Acompanhante hospitalar para idosos',
    short: 'Acompanhante hospitalar',
    title: 'Acompanhante Hospitalar para Idoso no RJ | Plantão Dia e Noite',
    desc: 'Seu familiar idoso está internado no Rio? Acompanhante hospitalar em plantão de dia ou de noite, para ele não ficar sozinho. Fale com Mariano no WhatsApp.',
    eyebrow: 'ACOMPANHAMENTO HOSPITALAR · RIO DE JANEIRO',
    h1: 'Acompanhante hospitalar <em>para idosos</em> no Rio de Janeiro',
    lead: 'Seu familiar idoso está internado e a família não consegue ficar no hospital? Mariano faz o plantão de dia ou de noite para ele não ficar sozinho, sempre seguindo as regras do hospital.',
    img: ['hospital.webp', 'Profissional ao lado de um homem idoso em leito hospitalar'],
    wa: 'Olá, Mariano! Preciso de acompanhante hospitalar para um idoso. Gostaria de consultar disponibilidade. Hospital: ',
    cta: 'Chamar Mariano no WhatsApp agora ↗',
    callLine: true,
    hospitals: true,
    sections: [
      { h: 'O direito do idoso a acompanhante na internação', html: `
<p>O Estatuto da Pessoa Idosa (Lei nº 10.741/2003) assegura à pessoa idosa internada ou em observação o direito a acompanhante, e o órgão de saúde deve oferecer condições adequadas para a permanência em tempo integral, segundo critério médico. Na prática, cada hospital tem regras próprias sobre o número de acompanhantes, horários de troca, identificação e acomodações.</p>
<p>Quando os familiares não conseguem se revezar, muitas famílias contam com um acompanhante contratado para garantir que a pessoa idosa não fique sozinha, principalmente à noite.</p>` },
      { h: 'Como funciona o acompanhamento hospitalar', html: `
<p>A atuação é de presença e apoio. O acompanhante faz companhia, observa o conforto da pessoa idosa, avisa a família sobre o que acontece e chama a equipe do hospital quando necessário. Ele não substitui médicos, enfermeiros ou técnicos de enfermagem do hospital e segue as normas da unidade.</p>
<ul><li><strong>Plantão diurno ou noturno.</strong> Os períodos são combinados com a família e dependem da disponibilidade.</li><li><strong>Comunicação.</strong> Combine como e quando a família receberá notícias, por exemplo, em horários definidos pelo WhatsApp.</li><li><strong>Regras do hospital.</strong> Informe o hospital, o setor e o quarto, se já souber. Cada unidade pode pedir identificação, autorização ou documentos.</li></ul>
<p>Se a pessoa idosa precisar de cuidados técnicos durante a internação, peça orientação ao hospital sobre o que é permitido a acompanhantes particulares. Veja também <a href="/tecnico-de-enfermagem-para-idosos-rj.html">técnico de enfermagem para idosos</a> e <a href="/plantao-cuidador-de-idosos-rj.html">plantões</a>.</p>` },
      { h: 'Informações para pedir o acompanhante', html: `
<ol class="plain-steps"><li><strong>Hospital e setor.</strong> Nome da unidade, andar ou enfermaria e, se possível, o número do quarto.</li><li><strong>Períodos desejados.</strong> Dias, horários e se haverá troca entre acompanhantes.</li><li><strong>Estado e necessidades.</strong> Mobilidade, se há risco de quedas, necessidades de alimentação e o que a equipe do hospital orientou.</li><li><strong>Contato da família.</strong> Quem receberá as informações e quem autoriza as combinações com o hospital.</li></ol>` },
      { h: 'Alta hospitalar e volta para casa', html: `
<p>Depois da internação, o cuidado em casa costuma ser diferente do cuidado no hospital. Veja o <a href="/alta-hospitalar-idoso-cuidados-em-casa.html">guia de alta hospitalar do idoso</a> para se preparar e consulte o apoio de <a href="/cuidador-de-idosos-domiciliar-rj.html">cuidador em casa</a> na volta.</p>` }
    ],
    faq: [
      ['Em quais hospitais vocês fazem acompanhamento?', 'Informe o hospital pelo WhatsApp. O atendimento depende da disponibilidade, das condições combinadas e das regras de acesso de cada unidade, em hospitais públicos e particulares do Rio de Janeiro.'],
      ['O acompanhante pode ficar à noite?', 'É possível consultar plantões noturnos. Cada hospital tem regras sobre acompanhantes à noite; informe a unidade para confirmar o que é permitido.'],
      ['O acompanhante substitui a equipe de enfermagem do hospital?', 'Não. O acompanhante faz companhia e apoio e comunica a família e a equipe quando necessário. Os cuidados de saúde continuam sendo da equipe do hospital.'],
      ['Quanto tempo antes preciso avisar?', 'Quanto antes você informar hospital e períodos, maior a chance de organizar a disponibilidade. Em situações urgentes, converse com Mariano pelo WhatsApp, que atende 24 horas para contato.'],
      ['Planos de saúde cobrem o acompanhante contratado?', 'A cobertura depende do plano e do contrato. O acompanhante particular normalmente é combinado diretamente com a família. Confirme com o seu plano o que é coberto e com o hospital o que é permitido.']
    ]
  },
  {
    slug: 'plantao-cuidador-de-idosos-rj.html',
    kind: 'service',
    name: 'Plantão de cuidador de idosos',
    short: 'Plantões diurnos e noturnos',
    title: 'Plantão de Cuidador de Idosos no RJ | Diurno, Noturno e 24h',
    desc: 'Plantão de cuidador de idosos no Rio de Janeiro: períodos diurnos, noturnos e outros formatos combinados com a família, em casa ou no hospital. Consulte disponibilidade.',
    eyebrow: 'PLANTÕES · RIO DE JANEIRO',
    h1: 'Plantão de cuidador de idosos <em>diurno e noturno</em> no Rio de Janeiro',
    lead: 'Apoio em períodos definidos pela família, em casa ou no hospital, para que a pessoa idosa tenha alguém por perto na hora em que mais precisa.',
    img: ['domiciliar.webp', 'Pessoa idosa acompanhada em ambiente domiciliar'],
    wa: 'Olá, Mariano! Gostaria de consultar plantão de cuidador de idosos. Período desejado: ',
    cta: 'Consultar plantão ↗',
    sections: [
      { h: 'Quando o plantão faz sentido', html: `
<p>O plantão é uma forma de organizar o cuidado por períodos. Ele é muito procurado para cobrir a noite, para substituir a família em dias específicos, para acompanhar uma internação ou para os primeiros dias depois de uma alta hospitalar, quando a rotina em casa ainda está sendo ajustada.</p>
<ul><li><strong>Plantão diurno:</strong> companhia, apoio na rotina e acompanhamento durante o dia.</li><li><strong>Plantão noturno:</strong> presença durante a noite, para dar segurança à pessoa idosa e tranquilidade à família.</li><li><strong>Fins de semana e feriados:</strong> cobertura em dias em que a família precisa se ausentar.</li><li><strong>Períodos mais longos:</strong> consulte formatos como 12 horas ou 24 horas, conforme a disponibilidade.</li></ul>` },
      { h: 'Em casa ou no hospital', html: `
<p>O plantão pode ser em casa, com o <a href="/cuidador-de-idosos-domiciliar-rj.html">cuidador de idosos</a>, ou no hospital, com o <a href="/acompanhante-hospitalar-para-idosos-rj.html">acompanhante hospitalar</a>. Quando há necessidade de cuidados técnicos, a família também pode consultar o <a href="/tecnico-de-enfermagem-para-idosos-rj.html">técnico de enfermagem</a>. Informe o local e o período para saber o que é possível.</p>` },
      { h: 'Como organizar bem um plantão', html: `
<ol class="plain-steps"><li><strong>Descreva a rotina da noite e do dia.</strong> Horários de remédios, higiene, refeições, hábitos para dormir e o que costuma incomodar a pessoa.</li><li><strong>Deixe as informações acessíveis.</strong> Uma folha com contatos da família, médicos, medicamentos e orientações ajuda quem chega para o plantão.</li><li><strong>Combine a passagem de plantão.</strong> Quando houver troca de profissional, é importante que as informações do período anterior sejam repassadas.</li><li><strong>Defina como a família será avisada.</strong> Por mensagem em horários fixos ou apenas quando houver mudança, conforme a preferência.</li></ol>` },
      { h: 'Preço e condições', html: `
<p>O valor e as condições dependem do tipo de profissional, do período, do local e da necessidade da pessoa idosa. Para entender o que influencia o orçamento, leia o guia <a href="/quanto-custa-cuidador-de-idosos-rj.html">quanto custa um cuidador de idosos no Rio de Janeiro</a>.</p>` }
    ],
    faq: [
      ['Vocês fazem plantão noturno?', 'É possível consultar plantões noturnos, em casa ou no hospital. A disponibilidade depende do período, da região e do serviço; confirme com Mariano pelo WhatsApp.'],
      ['Posso contratar plantão só no fim de semana?', 'Sim, você pode consultar a cobertura de fins de semana e feriados. Informe os dias e horários desejados para verificar a disponibilidade.'],
      ['Existe plantão de 24 horas?', 'Consulte esse formato diretamente. A organização depende do serviço, da necessidade da pessoa idosa e da disponibilidade para o período.'],
      ['O plantão pode ser feito no hospital?', 'Sim, é possível consultar plantões de acompanhamento hospitalar, respeitando as regras da unidade. Informe o hospital e o período.'],
      ['O que acontece se o profissional não puder comparecer?', 'Combine antecipadamente como será tratada uma eventual substituição. Alinhar esse ponto antes de começar dá mais segurança para a família.']
    ]
  },
  {
    slug: 'acompanhante-de-idosos-para-viagens.html',
    kind: 'service',
    name: 'Acompanhante de idosos em viagens',
    short: 'Acompanhamento em viagens',
    title: 'Acompanhante de Idosos para Viagens | CUIDAR IDOSOS',
    desc: 'Acompanhante para idosos viajarem com tranquilidade: apoio em viagens e deslocamentos, com planejamento prévio de horários e necessidades. Saindo do Rio de Janeiro.',
    eyebrow: 'VIAGENS COM IDOSOS · RIO DE JANEIRO',
    h1: 'Acompanhante para <em>idosos em viagens</em>',
    lead: 'Apoio durante viagens e deslocamentos, com planejamento prévio dos horários, do trajeto e das necessidades da pessoa idosa.',
    img: ['familia.webp', 'Homem idoso abraçado por duas familiares'],
    wa: 'Olá, Mariano! Gostaria de consultar acompanhante para viagem com idoso. Destino e datas: ',
    cta: 'Consultar acompanhamento em viagens ↗',
    sections: [
      { h: 'Viajar com a pessoa idosa, com mais segurança', html: `
<p>Viagens para visitar a família, tratamentos em outra cidade ou passeios de lazer podem ser cansativos e exigem atenção a detalhes que no dia a dia passam despercebidos. Um acompanhante ajuda a organizar o trajeto, a manter a rotina de medicamentos e alimentação e a dar mais tranquilidade a quem viaja e a quem fica.</p>
<p>O acompanhamento é combinado caso a caso. Informe o destino, as datas, o meio de transporte e as necessidades da pessoa idosa para consultar a disponibilidade.</p>` },
      { h: 'O que combinar antes da viagem', html: `
<ul><li><strong>Roteiro e horários.</strong> Saída, conexões, paradas e tempo de descanso. Evite trechos muito longos sem pausa.</li><li><strong>Medicamentos.</strong> Leve receitas, mantenha os remédios na bagagem de mão e preserve os horários de uso.</li><li><strong>Documentos.</strong> Identidade, cartão do plano de saúde e contatos de emergência da família e dos médicos.</li><li><strong>Mobilidade.</strong> Se a pessoa usa bengala, andador ou cadeira de rodas, planeje o deslocamento em aeroportos, rodoviárias e hospedagem.</li><li><strong>Saúde.</strong> Converse com o médico antes de viagens longas e leve relatórios importantes.</li><li><strong>Hospedagem.</strong> Prefira acessos simples, banheiro adaptado e quartos próximos da entrada, se possível.</li></ul>` },
      { h: 'Viagens de avião e de ônibus', html: `
<p>As companhias aéreas oferecem atendimento prioritário e assistência especial a pessoas idosas e a quem tem mobilidade reduzida. Solicite o serviço com antecedência na companhia, informando as necessidades da pessoa. Em viagens de ônibus, verifique as paradas, a acessibilidade dos veículos e os horários de embarque.</p>
<p>Combine antes quem fica responsável pelos custos de deslocamento e hospedagem do acompanhante, para que não haja dúvidas durante a viagem.</p>` },
      { h: 'Saindo do Rio de Janeiro', html: `
<p>Atendemos famílias do Rio de Janeiro. Se a viagem sai de um dos <a href="/bairros-atendidos.html">bairros atendidos</a>, informe o ponto de saída e o destino. Para passeios mais curtos e consultas na cidade, veja <a href="/acompanhante-de-idosos-em-consultas-e-passeios-rj.html">acompanhamento em consultas e passeios</a>.</p>` }
    ],
    faq: [
      ['Vocês acompanham idosos em viagens longas?', 'É possível consultar o acompanhamento. Informe destino, datas, meio de transporte e necessidades da pessoa idosa para avaliar a disponibilidade e o planejamento necessário.'],
      ['Quem paga as despesas do acompanhante na viagem?', 'É comum combinar antecipadamente o que será de responsabilidade da família, como passagens, hospedagem e alimentação durante a viagem. Alinhe tudo antes de confirmar.'],
      ['Posso contratar para viagens dentro do estado do Rio?', 'Sim, consulte também deslocamentos mais curtos. Informe o ponto de saída, o destino e o tempo previsto.'],
      ['A viagem pode ser de avião?', 'Sim, é possível consultar. Peça assistência especial à companhia aérea com antecedência e leve os documentos e medicamentos na bagagem de mão.'],
      ['E se a pessoa idosa precisar de cuidados técnicos na viagem?', 'Informe essa necessidade desde o início. A família pode consultar o apoio de um técnico de enfermagem, conforme a prescrição e a disponibilidade.']
    ]
  },
  {
    slug: 'acompanhante-de-idosos-em-consultas-e-passeios-rj.html',
    kind: 'service',
    name: 'Acompanhante de idosos em consultas e passeios',
    short: 'Consultas, passeios e concierge',
    title: 'Acompanhante de Idosos em Consultas e Passeios no RJ',
    desc: 'Acompanhante de idosos para consultas, exames, passeios e compromissos no Rio de Janeiro. Apoio na locomoção e organização da rotina. Consulte disponibilidade.',
    eyebrow: 'CONSULTAS · PASSEIOS · CONCIERGE',
    h1: 'Acompanhante de idosos em <em>consultas e passeios</em>',
    lead: 'Companhia e apoio para consultas, exames, visitas e passeios, e ajuda na organização da rotina e dos compromissos da pessoa idosa.',
    img: ['familia.webp', 'Homem idoso abraçado por duas familiares'],
    wa: 'Olá, Mariano! Gostaria de consultar acompanhante para consulta, exame ou passeio. Local de saída e destino: ',
    cta: 'Consultar acompanhamento ↗',
    sections: [
      { h: 'Acompanhar vai além de levar', html: `
<p>Ir ao médico, fazer exames ou participar de um evento em família pode ser cansativo para a pessoa idosa. O acompanhante ajuda no deslocamento, fica atento ao conforto durante a espera e pode anotar as orientações do profissional de saúde para repassar à família.</p>` },
      { h: 'Consultas e exames', html: `
<ul><li>Leve documentos, carteirinha do plano e a lista dos medicamentos em uso.</li><li>Anote antes as dúvidas e os sintomas que a família quer relatar ao médico.</li><li>Combine quem receberá as orientações e as receitas do dia.</li><li>Pergunte ao laboratório ou à clínica sobre preparo, jejum e tempo de espera.</li></ul>
<p>O acompanhante não substitui a presença da família quando uma decisão médica importante precisa ser tomada. Combine com antecedência como serão repassadas as informações.</p>` },
      { h: 'Passeios, visitas e atividades de lazer', html: `
<p>Caminhadas, idas à igreja, a um café, ao parque ou a uma visita a parentes ajudam a manter a vida social e a autonomia. O ritmo do passeio é o da pessoa idosa, e o acompanhante apoia na locomoção e na segurança.</p>` },
      { h: 'Concierge e organização da rotina', html: `
<p>Algumas famílias consultam apoio para organizar compromissos: agendamento de consultas, lembretes de horários, organização de documentos e da rotina da semana, sempre em conjunto com a família e respeitando as decisões da pessoa idosa. Consulte os detalhes e a disponibilidade pelo WhatsApp.</p>
<p>Para períodos mais longos de presença, veja <a href="/plantao-cuidador-de-idosos-rj.html">plantões</a> e <a href="/cuidador-de-idosos-domiciliar-rj.html">cuidador de idosos em casa</a>. Para viagens, veja <a href="/acompanhante-de-idosos-para-viagens.html">acompanhamento em viagens</a>.</p>` }
    ],
    faq: [
      ['Vocês levam o idoso a consultas e exames?', 'É possível consultar o acompanhamento. Informe o local de saída, o destino, os horários e a necessidade de apoio à mobilidade. Combine também a forma de deslocamento.'],
      ['Como fica o transporte?', 'Alinhe separadamente como será o deslocamento e quem arcará com os custos, como táxi, aplicativo ou transporte da família.'],
      ['O acompanhante fala com o médico?', 'O acompanhante pode ajudar a relatar o que a família orientou e anotar as orientações recebidas. Decisões médicas importantes devem envolver a família e o responsável pela pessoa idosa.'],
      ['Posso contratar para um único passeio?', 'Sim, consulte o acompanhamento por período ou por compromisso. Informe data, horário e local para verificar a disponibilidade.'],
      ['O que é concierge?', 'É o apoio na organização de rotina, consultas e compromissos da pessoa idosa, em conjunto com a família. Consulte os detalhes e a disponibilidade.']
    ]
  }
];

const guides = [
  {
    slug: 'cuidador-ou-tecnico-de-enfermagem-diferencas.html',
    kind: 'guide',
    name: 'Cuidador ou técnico de enfermagem: qual a diferença?',
    title: 'Cuidador ou Técnico de Enfermagem? Diferenças e Qual Escolher',
    desc: 'Entenda a diferença entre cuidador de idosos, técnico de enfermagem e acompanhante hospitalar, o que cada um pode fazer e como escolher o apoio certo para a sua família.',
    eyebrow: 'GUIA PARA FAMÍLIAS',
    h1: 'Cuidador de idosos ou <em>técnico de enfermagem</em>: qual a diferença?',
    lead: 'Saber o que cada profissional faz ajuda a escolher o apoio certo para a pessoa idosa e evita pedir o que o profissional não pode fazer.',
    img: ['tecnico.webp', 'Profissional de saúde conversando com um homem idoso'],
    wa: 'Olá, Mariano! Li o guia sobre cuidador e técnico de enfermagem e gostaria de ajuda para escolher o apoio certo.',
    cta: 'Tirar dúvidas pelo WhatsApp ↗',
    sections: [
      { h: 'Resumo rápido', html: `
<table class="cmp"><thead><tr><th></th><th>Cuidador de idosos</th><th>Técnico de enfermagem</th><th>Acompanhante hospitalar</th></tr></thead><tbody>
<tr><th>Foco</th><td>Rotina, companhia e autonomia</td><td>Cuidados técnicos de saúde</td><td>Presença durante a internação</td></tr>
<tr><th>Formação</th><td>Curso de cuidador e experiência</td><td>Curso técnico e registro no COREN</td><td>Cuidador ou familiar, conforme as regras do hospital</td></tr>
<tr><th>Procedimentos de enfermagem</th><td>Não realiza</td><td>Realiza dentro das atribuições da categoria</td><td>Não realiza</td></tr>
<tr><th>Onde atua</th><td>Em casa e em saídas combinadas</td><td>Em casa e em instituições</td><td>No hospital</td></tr>
</tbody></table>` },
      { h: 'Quando escolher cada um', html: `
<ul><li><strong>Cuidador de idosos:</strong> quando a necessidade é de companhia, apoio na higiene, alimentação, mobilidade e na rotina, sem procedimentos técnicos.</li><li><strong>Técnico de enfermagem:</strong> quando há prescrição de cuidados como aferição de sinais vitais, medicações específicas, curativos ou outros procedimentos de enfermagem.</li><li><strong>Acompanhante hospitalar:</strong> quando a pessoa idosa está internada e a família precisa garantir que ela tenha alguém por perto.</li></ul>
<p>Em muitos casos, a combinação funciona melhor. Por exemplo, o técnico de enfermagem em horários de procedimentos e o cuidador no restante do dia. Converse sobre a situação antes de decidir.</p>` },
      { h: 'Páginas com mais detalhes', html: `
<p>Veja os detalhes de cada serviço: <a href="/cuidador-de-idosos-domiciliar-rj.html">cuidador de idosos em casa</a>, <a href="/tecnico-de-enfermagem-para-idosos-rj.html">técnico de enfermagem para idosos</a> e <a href="/acompanhante-hospitalar-para-idosos-rj.html">acompanhante hospitalar</a>.</p>
<p>Este guia é uma orientação geral e não substitui a avaliação de um médico ou de um enfermeiro sobre as necessidades de saúde da pessoa idosa.</p>` }
    ],
    faq: [
      ['O cuidador pode fazer curativos?', 'Curativos que exigem técnica devem ser feitos por profissional de enfermagem. Pergunte ao médico ou ao enfermeiro o que a família pode fazer em casa e o que precisa de profissional habilitado.'],
      ['Quem pode dar injeções?', 'Aplicação de injeções é procedimento de enfermagem e deve ser feita por profissional habilitado, como o técnico de enfermagem, conforme prescrição.'],
      ['Preciso dos dois profissionais ao mesmo tempo?', 'Depende da necessidade. Algumas famílias combinam o técnico de enfermagem nos horários de procedimentos e o cuidador no restante da rotina. Converse sobre a situação para avaliar.'],
      ['Como sei qual escolher?', 'Veja se há prescrição de procedimentos técnicos. Se não houver, e a necessidade é de companhia e rotina, o cuidador costuma ser indicado. Em caso de dúvida, converse com o médico e com a equipe que acompanha a pessoa idosa.']
    ]
  },
  {
    slug: 'como-escolher-cuidador-de-idosos.html',
    kind: 'guide',
    name: 'Como escolher um cuidador de idosos',
    title: 'Como Escolher um Cuidador de Idosos: Guia e Checklist',
    desc: 'Checklist para escolher um cuidador de idosos com segurança: o que perguntar, como combinar a rotina, período de adaptação e cuidados com a formalização.',
    eyebrow: 'GUIA PARA FAMÍLIAS',
    h1: 'Como escolher um <em>cuidador de idosos</em>: checklist para a família',
    lead: 'Escolher quem vai cuidar de uma pessoa querida pede atenção. Veja o que perguntar e o que combinar antes de começar.',
    img: ['domiciliar.webp', 'Mulher idosa e cuidadora conversando'],
    wa: 'Olá, Mariano! Li o guia sobre como escolher um cuidador de idosos e gostaria de conversar sobre a necessidade da minha família.',
    cta: 'Conversar sobre a minha situação ↗',
    sections: [
      { h: 'Antes de procurar: entenda a necessidade', html: `
<ul><li>A pessoa idosa precisa de companhia, de apoio na rotina ou de cuidados técnicos de saúde?</li><li>Quais horários e dias de apoio a família precisa cobrir?</li><li>A pessoa está de acordo? Quanto mais ela participar da decisão, melhor a adaptação.</li></ul>` },
      { h: 'O que perguntar na conversa inicial', html: `
<ul><li>Como o atendimento é organizado e quem será o profissional?</li><li>Que tarefas o profissional faz e quais não faz?</li><li>Como a família é avisada sobre intercorrências?</li><li>Como funciona a substituição em caso de falta?</li><li>Quais referências e experiências o profissional tem com situações parecidas?</li></ul>` },
      { h: 'Combine a rotina e os limites', html: `
<p>Anote a rotina da pessoa idosa: horários de acordar, refeições, remédios, banho e atividades. Informe também gostos, manias e o que costuma incomodar. Defina o que o cuidador fará e o que continua com a família, além das regras da casa.</p>` },
      { h: 'Período de adaptação', html: `
<p>Os primeiros dias servem para a pessoa idosa e o profissional se conhecerem. Acompanhe de perto, ouça a opinião da pessoa idosa e ajuste o que for necessário.</p>` },
      { h: 'Formalização e responsabilidades', html: `
<p>A forma de contratação influencia direitos e obrigações. A legislação do trabalho doméstico (Lei Complementar nº 150/2015) considera empregado doméstico quem presta serviço contínuo, por mais de dois dias por semana, a uma pessoa ou família, em âmbito residencial. Converse com um contador ou com um profissional de confiança para entender o que se aplica à sua situação, e peça orientação sobre a formalização antes de começar.</p>` },
      { h: 'Sinais de alerta', html: `
<ul><li>Falta de clareza sobre quem é o profissional e como será o atendimento.</li><li>Resistência em combinar horários, tarefas ou a forma de comunicação.</li><li>Pedido de acesso a dados bancários ou documentos sem necessidade.</li></ul>
<p>Veja também <a href="/quanto-custa-cuidador-de-idosos-rj.html">o que influencia o preço</a> e as páginas de <a href="/cuidador-de-idosos-domiciliar-rj.html">cuidador em casa</a> e <a href="/plantao-cuidador-de-idosos-rj.html">plantões</a>.</p>` }
    ],
    faq: [
      ['Como saber se o cuidador é de confiança?', 'Converse antes de começar, peça referências e combine um período de adaptação. Observe como o profissional se comunica com a pessoa idosa e com a família.'],
      ['A pessoa idosa precisa concordar?', 'Sempre que possível, sim. Incluir a pessoa idosa na decisão e respeitar sua autonomia ajuda na adaptação e na confiança.'],
      ['Posso testar antes de contratar de forma definitiva?', 'Combine um período inicial de adaptação e revise os detalhes depois dos primeiros dias, ajustando o que for necessário.']
    ]
  },
  {
    slug: 'quanto-custa-cuidador-de-idosos-rj.html',
    kind: 'guide',
    name: 'Quanto custa um cuidador de idosos no Rio de Janeiro',
    title: 'Quanto Custa um Cuidador de Idosos no Rio de Janeiro?',
    desc: 'O que influencia o valor de um cuidador de idosos no Rio de Janeiro: tipo de profissional, período, plantão noturno, local e grau de dependência. Saiba como pedir um orçamento.',
    eyebrow: 'GUIA PARA FAMÍLIAS',
    h1: 'Quanto custa um <em>cuidador de idosos</em> no Rio de Janeiro?',
    lead: 'O preço varia conforme a necessidade da pessoa idosa. Entenda o que entra na conta e como comparar orçamentos.',
    img: ['familia.webp', 'Homem idoso abraçado por duas familiares'],
    wa: 'Olá, Mariano! Gostaria de pedir um orçamento. Tipo de apoio, bairro e períodos: ',
    cta: 'Pedir orçamento pelo WhatsApp ↗',
    sections: [
      { h: 'Por que não existe um preço único', html: `
<p>O valor de um cuidador de idosos depende de vários fatores. Dois atendimentos com a mesma carga horária podem ter custos diferentes, porque a necessidade, o local e a responsabilidade envolvidos mudam. Por isso, o valor é informado conforme o serviço solicitado, depois de entender a situação da família.</p>` },
      { h: 'O que influencia o valor', html: `
<ul><li><strong>Tipo de profissional.</strong> Cuidador, técnico de enfermagem ou acompanhante hospitalar têm formações e atribuições diferentes.</li><li><strong>Carga horária e formato.</strong> Algumas horas por dia, diárias, plantões de 12 ou 24 horas, ou apoio mensal.</li><li><strong>Período.</strong> Plantões noturnos, fins de semana e feriados costumam ter condições diferentes.</li><li><strong>Grau de dependência.</strong> Quanto maior a necessidade de apoio, mais responsabilidade e cuidado exigidos.</li><li><strong>Local.</strong> Bairro, acesso e distância; hospital ou domicílio.</li><li><strong>Duração.</strong> Atendimentos curtos, como uma internação, e contínuos podem ter condições diferentes.</li></ul>` },
      { h: 'Como comparar orçamentos', html: `
<ol class="plain-steps"><li>Descreva a mesma necessidade para todos: tipo de apoio, local, horários e duração.</li><li>Pergunte o que está incluído e o que não está, como deslocamento e alimentação.</li><li>Confirme como funciona a substituição em caso de falta.</li><li>Veja se há formalização e entenda as responsabilidades de cada parte.</li><li>Não escolha só pelo menor preço: considere a confiança e a clareza das combinações.</li></ol>` },
      { h: 'Como pedir um orçamento', html: `
<p>Envie a Mariano pelo WhatsApp o tipo de acompanhamento, o bairro ou o hospital, os dias e horários e uma breve descrição da rotina. A partir disso, os valores e as condições são informados conforme o serviço solicitado.</p>
<p>Veja também <a href="/como-escolher-cuidador-de-idosos.html">como escolher um cuidador de idosos</a> e o que cada serviço inclui em <a href="/cuidador-de-idosos-domiciliar-rj.html">cuidador em casa</a>, <a href="/plantao-cuidador-de-idosos-rj.html">plantões</a> e <a href="/acompanhante-hospitalar-para-idosos-rj.html">acompanhamento hospitalar</a>.</p>` }
    ],
    faq: [
      ['O plantão noturno é mais caro?', 'As condições de plantões noturnos podem ser diferentes das diurnas. Informe o período desejado para receber as condições conforme o serviço.'],
      ['O valor muda de acordo com o bairro?', 'O local, o acesso e o deslocamento podem influenciar as condições. Informe o bairro para consultar a disponibilidade e o valor.'],
      ['Posso contratar por poucos dias?', 'Sim, consulte a disponibilidade para períodos curtos, como uma internação ou a volta para casa. As condições são informadas conforme o serviço.'],
      ['O valor é informado antes de começar?', 'Sim. Combine valores, formato e responsabilidades antes de iniciar o atendimento.']
    ]
  },
  {
    slug: 'alta-hospitalar-idoso-cuidados-em-casa.html',
    kind: 'guide',
    name: 'Alta hospitalar do idoso: cuidados em casa',
    title: 'Alta Hospitalar do Idoso: Como Se Preparar para os Cuidados em Casa',
    desc: 'Checklist para a volta do idoso para casa após a internação: relatório de alta, medicamentos, adaptação da casa, prevenção de quedas e quando buscar ajuda.',
    eyebrow: 'GUIA PARA FAMÍLIAS',
    h1: 'Alta hospitalar do idoso: como <em>preparar a volta para casa</em>',
    lead: 'A alta é um momento de alívio e também de atenção. Organize o que é necessário antes da volta para evitar imprevistos.',
    img: ['hospital.webp', 'Profissional ao lado de um homem idoso em leito hospitalar'],
    wa: 'Olá, Mariano! Li o guia sobre alta hospitalar e gostaria de consultar apoio para a volta para casa.',
    cta: 'Consultar apoio na volta para casa ↗',
    sections: [
      { h: 'Antes da alta: o que pedir ao hospital', html: `
<ul><li>Relatório de alta com o diagnóstico, os procedimentos realizados e as orientações para casa.</li><li>Receitas dos medicamentos, com doses, horários e duração.</li><li>Orientações sobre dieta, atividade física, curativos e cuidados especiais.</li><li>Data e local de retornos e de exames de acompanhamento.</li><li>Contato para tirar dúvidas e sinais que exigem retorno ao hospital.</li></ul>` },
      { h: 'Adapte a casa', html: `
<ul><li>Retire tapetes soltos, fios e objetos no caminho, para reduzir o risco de quedas.</li><li>Garanta boa iluminação, principalmente à noite e no caminho até o banheiro.</li><li>Instale apoios no banheiro e use piso antiderrapante, se possível.</li><li>Organize os medicamentos em caixas por horário e mantenha uma lista visível.</li><li>Verifique se a cama e o assento têm a altura adequada para a pessoa se levantar com segurança.</li></ul>` },
      { h: 'Defina quem fará o quê', html: `
<p>Combine na família quem acompanhará os medicamentos, as refeições, o banho e as consultas. Se a família não conseguir cobrir todos os horários, consulte o apoio de <a href="/cuidador-de-idosos-domiciliar-rj.html">cuidador de idosos em casa</a>, <a href="/tecnico-de-enfermagem-para-idosos-rj.html">técnico de enfermagem</a> ou <a href="/plantao-cuidador-de-idosos-rj.html">plantões</a>, conforme as orientações recebidas na alta.</p>` },
      { h: 'Quando buscar ajuda', html: `
<p>Procure atendimento médico se houver sinais como falta de ar, dor no peito, confusão mental repentina, febre, queda com dor ou outro sinal indicado pela equipe do hospital. Em emergências, ligue para o SAMU, no telefone 192. Este guia é uma orientação geral e não substitui as orientações da equipe de saúde.</p>` }
    ],
    faq: [
      ['Quem pode acompanhar o idoso na volta para casa?', 'Um familiar ou um profissional combinado com a família. Se for contratar apoio, informe o horário da alta e as orientações recebidas.'],
      ['Preciso de técnico de enfermagem na volta?', 'Depende das orientações do médico. Se houver curativos, medicações específicas ou outros cuidados técnicos, é indicado um profissional de enfermagem.'],
      ['Como diminuir o risco de quedas em casa?', 'Retire tapetes, melhore a iluminação, instale apoios no banheiro e mantenha os caminhos livres. Converse com o médico sobre calçados e uso de apoios para caminhar.']
    ]
  }
];

services.push(...require('./content-extra.js'));
module.exports = { services, guides, U };
