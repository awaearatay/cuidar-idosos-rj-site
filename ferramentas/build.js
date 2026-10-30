// Uso: node build.js   (executar dentro de "seo cuidar\ferramentas")
// Lê ../site-original e escreve ../site-seo. Nunca altera site-original.
const fs = require('fs'), path = require('path');
const { services, guides, U } = require('./content.js');
const { LOCAL, SRC_NOTE } = require('./content-local.js');
const SRC = path.resolve(__dirname, '../site-original');
const OUT = path.resolve(__dirname, '../site-seo');
const EXTRA_CSS = '<style>.prose p,.prose ul,.prose ol{max-width:860px}.prose ul,.prose ol{padding-left:24px}.prose li{margin-bottom:10px}.plain-steps{list-style:decimal}.cmp{width:100%;border-collapse:collapse;font-size:15px;margin:10px 0 24px}.cmp th,.cmp td{border:1px solid #c5ded6;padding:12px;text-align:left;vertical-align:top}.cmp thead th{background:#ddece6}.cmp-wrap{overflow-x:auto}.hosp-list{columns:2;column-gap:40px;padding-left:22px}.hosp-list li{margin-bottom:8px;break-inside:avoid}.local-region .note{font-size:14px;color:#4a5b60}.local-links a{color:#276c64;text-decoration:underline;text-underline-offset:3px}.guide-list{display:grid;gap:18px;max-width:900px}.guide-list article{border:1px solid #c5ded6;border-radius:14px;padding:22px;background:#fff}.guide-list h3 a{color:var(--ink)}@media(max-width:760px){.hosp-list{columns:1}}</style>';
const TODAY = '2026-10-17';
const PHONE = '+5521972025533';
const wa = t => 'https://wa.me/5521972025533' + (t ? '?text=' + encodeURIComponent(t) : '');
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const strip = s => s.replace(/<[^>]+>/g, '');

// ---------- copia (sem lixo que não deve ficar público) ----------
const SKIP = new Set(['Cuidar-Idosos-RJ-Publicar.zip', 'cuidar-idosos-site.zip', 'README.txt', 'htaccess-novo.txt',
  'sitemap-backup-20261017.xml', 'cuidador-de-idosos-vila-valqueire.html']);
if (fs.existsSync(OUT)) for (const e of fs.readdirSync(OUT)) fs.rmSync(path.join(OUT, e), { recursive: true, force: true });
(function cp(a, b) {
  fs.mkdirSync(b, { recursive: true });
  for (const e of fs.readdirSync(a, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const s = path.join(a, e.name), d = path.join(b, e.name);
    e.isDirectory() ? cp(s, d) : fs.copyFileSync(s, d);
  }
})(SRC, OUT);
// faixa verde com as letras que correm (home): anda sempre, também no celular (sem pausar ao tocar e mesmo com "reduzir animações")
fs.appendFileSync(path.join(OUT, 'style.css'), '\n/* faixa verde: carrossel infinito no celular */\n.ribbon-track{animation:marquee 30s linear infinite!important;will-change:transform}\n.ribbon:hover .ribbon-track,.ribbon:focus-within .ribbon-track{animation-play-state:running!important}\n');

// ---------- dados reutilizáveis ----------
const lb = () => ({
  '@type': 'LocalBusiness', '@id': U + '/#empresa', name: 'CUIDAR IDOSOS', url: U + '/', telephone: PHONE,
  image: U + '/assets/images/hero.webp', logo: U + '/assets/images/logo-original.png',
  address: { '@type': 'PostalAddress', streetAddress: 'Rua Macambira, 33-B, Bento Ribeiro', addressLocality: 'Rio de Janeiro', addressRegion: 'RJ', postalCode: '21331-320', addressCountry: 'BR' },
  geo: { '@type': 'GeoCoordinates', latitude: -22.8676, longitude: -43.358 },
  sameAs: ['https://www.facebook.com/cuidaridososrj', 'https://www.instagram.com/cuidadordeidosos.rj/'],
  areaServed: { '@type': 'City', name: 'Rio de Janeiro' },
  openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
  contactPoint: { '@type': 'ContactPoint', telephone: PHONE, contactType: 'atendimento', availableLanguage: 'pt-BR', url: 'https://wa.me/5521972025533' }
});
const faqLD = list => ({ '@type': 'FAQPage', mainEntity: list.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
const ld = o => '<script type="application/ld+json">' + JSON.stringify(o, null, 2) + '</script>';

const HOSP = {
  'Zona Norte e Grande Tijuca': ['Hospital Universitário Pedro Ernesto (Vila Isabel)', 'Hospital Federal do Andaraí (Andaraí)', 'Hospital Federal de Bonsucesso (Bonsucesso)', 'Hospital Municipal Salgado Filho (Méier)', 'Hospital Estadual Carlos Chagas (Marechal Hermes)', 'Hospital Estadual Getúlio Vargas (Penha)', "Hospital Quinta D'Or (São Cristóvão)", 'Hospital Badim (Maracanã)'],
  'Zona Sul': ["Hospital Copa D'Or (Copacabana)", 'Hospital São Lucas (Copacabana)', 'Hospital Samaritano (Botafogo)', 'Hospital Pró-Cardíaco (Botafogo)', 'Hospital Municipal Rocha Maia (Botafogo)', 'Hospital Municipal Miguel Couto (Gávea)', 'Hospital Federal da Lagoa (Lagoa)'],
  'Barra da Tijuca e Recreio': ["Hospital Barra D'Or (Barra da Tijuca)", "Hospital Rios D'Or (Barra da Tijuca)", 'Hospital Samaritano Barra (Barra da Tijuca)', 'Hospital Municipal Lourenço Jorge (Barra da Tijuca)'],
  'Jacarepaguá e região': ['Hospital Federal Cardoso Fontes (Freguesia)', 'Hospital Municipal Lourenço Jorge (Barra da Tijuca)', "Hospital Barra D'Or (Barra da Tijuca)", "Hospital Rios D'Or (Barra da Tijuca)"],
  'Ilha do Governador': ['Hospital Municipal Evandro Freire (Ribeira)', 'Hospital Universitário Clementino Fraga Filho (Ilha do Fundão)', 'Hospital Federal de Bonsucesso (Bonsucesso)'],
  'Realengo e região': ['Hospital Municipal Albert Schweitzer (Realengo)', 'Hospital Federal de Bangu (Bangu)', 'Hospital Estadual Rocha Faria (Campo Grande)']
};
const BARRA_EXTRA = new Set();
const BARRA = new Set(['barra-da-tijuca', 'recreio-dos-bandeirantes', 'vargem-grande', 'vargem-pequena']);
const REALENGO = new Set(['realengo']);
const WESTSET = () => WEST;
function regionOf(slug, label) {
  if (BARRA.has(slug) || BARRA_EXTRA.has(slug)) return 'Barra da Tijuca e Recreio';
  if (REALENGO.has(slug) || WEST.has(slug)) return 'Realengo e região';
  if (/ILHA/.test(label)) return 'Ilha do Governador';
  if (/JACAREPAGU/.test(label)) return 'Jacarepaguá e região';
  if (/ZONA SUL/.test(label)) return 'Zona Sul';
  return 'Zona Norte e Grande Tijuca';
}
const hospList = region => '<ul class="hosp-list">' + HOSP[region].map(h => '<li>' + esc(h).replace(/&quot;/g, '"') + '</li>').join('') + '</ul>';
const NOTE = 'Lista apenas como referência de localização. A CUIDAR IDOSOS não tem vínculo com essas instituições. Informe o hospital de interesse e consulte a disponibilidade e as regras de acompanhantes de cada unidade.';

// ---------- ajustes comuns em qualquer página existente ----------
const FAV = '<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="icon" href="/favicon.ico" sizes="48x48"><link rel="apple-touch-icon" href="/apple-touch-icon.png">';
const IG_URL = 'https://www.instagram.com/cuidadordeidosos.rj/';
const IG_SVG = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path fill="currentColor" d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.2-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/></svg>';
const IG_SVG_S = IG_SVG.replace('width="22" height="22"', 'width="16" height="16"');
const igA = (cls, svg) => '<a class="' + cls + '" href="' + IG_URL + '" target="_blank" rel="noopener me" aria-label="Instagram da Cuidar Idosos RJ" title="Siga no Instagram">' + svg + '</a>';
const FB_URL = 'https://www.facebook.com/cuidaridososrj';
const FB_SVG = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path fill="currentColor" d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>';
const FB_HEAD_ONLY = '<a class="fb-head" href="' + FB_URL + '" target="_blank" rel="noopener me" aria-label="Facebook da Cuidar Idosos RJ" title="Siga a Cuidar Idosos RJ no Facebook">' + FB_SVG + '</a>';
const FB_FLOAT_ONLY = '<a class="floating-fb" href="' + FB_URL + '" target="_blank" rel="noopener me" aria-label="Siga a Cuidar Idosos RJ no Facebook" title="Siga no Facebook">' + FB_SVG + '</a>';
const FB_SVG_S = FB_SVG.replace('width="22" height="22"', 'width="16" height="16"');
const FB_TOP_ONLY = '<a class="fb-top" href="' + FB_URL + '" target="_blank" rel="noopener me">' + FB_SVG_S + '<span>Siga no Facebook</span></a>';
const FB_FOOT_ONLY = '<p class="fb-foot-wrap"><a class="fb-foot" href="' + FB_URL + '" target="_blank" rel="noopener me">' + FB_SVG + '<span>Siga no Facebook</span></a></p>';
const FB_HEAD = FB_HEAD_ONLY + igA('ig-head', IG_SVG);
const FB_FLOAT = FB_FLOAT_ONLY + igA('floating-ig', IG_SVG);
const FB_TOP = '<span class="soc-top">' + FB_TOP_ONLY + igA('ig-top', IG_SVG_S) + '</span>';
const FB_FOOT = FB_FOOT_ONLY.replace('</a></p>', () => '</a>' + igA('ig-foot', IG_SVG) + '</p>');
const FB_SECTION = '<section class="section fb-area">' + FB_FOOT + '</section>';
const fbArea = h => { if (h.includes('class="fb-foot"')) return h; if (h.includes('Ver todos os bairros atendidos →</a></p>')) return h.replace('Ver todos os bairros atendidos →</a></p>', () => 'Ver todos os bairros atendidos →</a></p>' + FB_FOOT); const k = h.indexOf('<footer>'); const m = h.slice(0, k).match(/<\/main>\s*$/); if (m) return h.slice(0, k - m[0].length) + FB_SECTION + m[0] + h.slice(k); return h.replace('<footer>', () => FB_SECTION + '<footer>'); };
const topFb = h => h.includes('class="fb-top"') ? h : h.replace('</span><a href="tel:+5521972025533">', () => '</span>' + FB_TOP + '<a href="tel:+5521972025533">');
const FB_CSS = '<style>.fb-head{display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:50%;background:#1877f2;color:#fff;margin:0 8px;flex:none}.fb-head:hover{background:#0f5fcc}.floating-fb{display:flex;align-items:center;justify-content:center;position:fixed;bottom:80px;right:12px;z-index:10;width:46px;height:46px;color:#fff;background:#1877f2;border-radius:50%;box-shadow:0 6px 18px rgba(0,0,0,.3)}.floating-fb:hover{background:#0f5fcc}.fb-top{display:inline-flex;align-items:center;gap:6px;color:#fff;font-weight:700;white-space:nowrap;background:#1877f2;padding:4px 12px;border-radius:20px}.fb-top:hover{background:#0f5fcc;text-decoration:none}.fb-area{padding-top:0}.fb-top svg{flex:none}.fb-foot-wrap{margin:14px 0 0}a.fb-foot{display:inline-flex;width:auto;text-decoration:none;align-items:center;gap:10px;background:#1877f2;color:#fff!important;font-weight:700;padding:10px 16px;border-radius:30px}a.fb-foot:hover{background:#0f5fcc}.topbar{flex-wrap:wrap;gap:4px 14px}@media(max-width:600px){.fb-head{display:none}.topbar span{max-width:none}}.ig-grad{background:radial-gradient(circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%)}.ig-head,.ig-top,.ig-foot,.floating-ig{display:inline-flex;align-items:center;justify-content:center;color:#fff;border-radius:50%;background:radial-gradient(circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%)}.ig-head{width:42px;height:42px;margin:0 8px 0 0;flex:none}.ig-top{width:28px;height:28px;flex:none}.soc-top{display:inline-flex;align-items:center;gap:8px}.ig-foot{width:42px;height:42px;flex:none}.fb-foot-wrap{display:flex;align-items:center;gap:10px}.floating-ig{position:fixed;z-index:10;width:46px;height:46px;box-shadow:0 6px 18px rgba(0,0,0,.3)}@media(orientation:portrait){.floating-ig{bottom:134px;right:12px}}@media(orientation:landscape){.floating-ig{bottom:80px;right:66px}}@media(max-width:600px){.ig-head{display:none}}</style>';
const FOOT_SERV ='<h3>Nossos serviços</h3>' +
  '<a href="/cuidador-de-idosos-domiciliar-rj.html">Cuidador de idosos em casa</a>' +
  '<a href="/tecnico-de-enfermagem-para-idosos-rj.html">Técnico de enfermagem</a>' +
  '<a href="/acompanhante-hospitalar-para-idosos-rj.html">Acompanhante hospitalar</a>' +
  '<a href="/plantao-cuidador-de-idosos-rj.html">Plantões diurnos e noturnos</a>' +
  '<a href="/acompanhante-de-idosos-para-viagens.html">Viagens com idosos</a>' +
  '<a href="/acompanhante-de-idosos-em-consultas-e-passeios-rj.html">Consultas e passeios</a>' +
  '<a href="/curativos-em-casa-para-idosos-rj.html">Curativos em casa</a>' +
  '<a href="/terapia-naturopatia-para-idosos-rj.html">Terapeuta naturopata</a></div>';
function common(h) {
  if (!/rel="icon"/.test(h)) h = h.replace(/(<meta name="theme-color"[^>]*>)/, '$1' + FAV);
  if (!h.includes('hosp-list')) h = h.replace('</head>', EXTRA_CSS + '</head>');
  h = h.split('href="/cuidador-de-idosos-vila-valqueire.html"').join('href="/cuidador-de-idosos-vila-valqueire/"');
  h = h.replace(/<h3>Nossos serviços<\/h3>.*?<\/div>/s, FOOT_SERV);
  h = h.replace('<h3>Links rápidos</h3>', '<h3>Links rápidos</h3><a href="/sobre-mariano-cuidador-tecnico-de-enfermagem-naturopata.html">Sobre Mariano</a><a href="/guias.html">Guias para famílias</a><a href="/mapa-do-site.html">Mapa do site</a>');
  if (!h.includes('floating-fb')) {
    h = h.replace('</head>', FB_CSS + '</head>');
    h = h.replace('<button class="fullscreen"', () => FB_HEAD + '<button class="fullscreen"');
    h = h.replace('</body>', () => FB_FLOAT + '</body>');
  }
  h = h.replace(/(<footer>.*?<\/p>)/s, '$1<p class="foot-cred"><strong>Mariano</strong> · Cuidador de idosos · Técnico de Enfermagem (COREN-RJ 2014489-TE) · Terapeuta naturopata</p>');
  h = topFb(h);
  h = fbArea(h);
  return h;
}
function editLD(h, fn) {
  return h.replace(/<script type="application\/ld\+json">(.*?)<\/script>/s, (m, j) => {
    const o = JSON.parse(j); fn(o); return ld(o);
  });
}
function faqFromHtml(h) {
  return [...h.matchAll(/<details><summary>(.*?)<\/summary><p>(.*?)<\/p><\/details>/gs)].map(m => [strip(m[1]), strip(m[2])]);
}

// ---------- novas páginas de bairro (clonadas do modelo aprovado) ----------
const NEW_BAIRROS = {
  'ZONA NORTE E GRANDE TIJUCA': ['Acari','Água Santa','Anchieta','Barros Filho','Benfica','Brás de Pina','Caju','Catumbi','Cavalcanti','Cidade Nova','Coelho Neto','Colégio','Cordovil','Costa Barros','Del Castilho','Encantado','Engenheiro Leal','Engenho da Rainha','Estácio','Higienópolis','Inhaúma','Jacaré','Jardim América','Lins de Vasconcelos','Mangueira','Manguinhos','Maria da Graça','Parada de Lucas','Parque Anchieta','Pavuna','Riachuelo','Ricardo de Albuquerque','Rio Comprido','Sampaio','São Cristóvão','São Francisco Xavier','Todos os Santos','Tomás Coelho','Turiaçu','Usina','Vasco da Gama','Vaz Lobo','Vigário Geral','Vila Kosmos','Centro','Gamboa','Saúde','Santo Cristo','Complexo do Alemão','Penha','Padre Miguel'].filter(n => n !== 'Penha'),
  'ZONA SUL': ['Santa Teresa','Lapa','Joá','Itanhangá'].filter(n => n !== 'Joá' && n !== 'Itanhangá'),
  'JACAREPAGUÁ E REGIÃO': ['Camorim','Colônia','Rio das Pedras','Pau da Fome'],
  'RIO DE JANEIRO': ['Itanhangá','Joá','Bangu','Campo Grande','Santa Cruz','Sepetiba','Paciência','Senador Camará','Magalhães Bastos','Sulacap','Vila Militar','Deodoro','Jardim Sulacap','Senador Vasconcelos','Inhoaíba','Cosmos','Santíssimo','Guaratiba','Barra de Guaratiba','Pedra de Guaratiba','Gericinó','Campo dos Afonsos','Vila Kennedy','Mendanha']
};
const WEST = new Set();
{
  const slugify = n => n.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const model = fs.readFileSync(path.join(SRC, 'cuidador-de-idosos-meier.html'), 'utf8');
  const west = new Set(['Padre Miguel','Bangu','Campo Grande','Santa Cruz','Sepetiba','Paciência','Senador Camará','Magalhães Bastos','Sulacap','Vila Militar','Deodoro','Jardim Sulacap','Senador Vasconcelos','Inhoaíba','Cosmos','Santíssimo','Guaratiba','Barra de Guaratiba','Pedra de Guaratiba','Gericinó','Campo dos Afonsos','Vila Kennedy','Mendanha']);
  const barra = new Set(['Itanhangá','Joá']);
  let n = 0;
  for (const [label, list] of Object.entries(NEW_BAIRROS)) for (const nome of list) {
    const slug = slugify(nome);
    if (fs.existsSync(path.join(OUT, 'cuidador-de-idosos-' + slug + '.html')) || fs.existsSync(path.join(OUT, 'cuidador-de-idosos-' + slug))) continue;
    if (west.has(nome)) WEST.add(slug);
    if (barra.has(nome)) BARRA_EXTRA.add(slug);
    const h = model.split('Méier').join(nome).split('meier').join(slug).replace('ÁREA DE ATENDIMENTO · ZONA NORTE E GRANDE TIJUCA', 'ÁREA DE ATENDIMENTO · ' + label);
    fs.writeFileSync(path.join(OUT, 'cuidador-de-idosos-' + slug + '.html'), h); n++;
  }
  console.log('novos bairros:', n);
}

// ---------- páginas de bairro ----------
const SERV_LINKS = bairro => '<p class="local-links">Serviços para famílias de ' + bairro + ': ' + [
  ['/cuidador-de-idosos-domiciliar-rj.html', 'cuidador de idosos em casa'], ['/tecnico-de-enfermagem-para-idosos-rj.html', 'técnico de enfermagem'],
  ['/acompanhante-hospitalar-para-idosos-rj.html', 'acompanhante hospitalar'], ['/plantao-cuidador-de-idosos-rj.html', 'plantões diurnos e noturnos'],
  ['/acompanhante-de-idosos-para-viagens.html', 'viagens com idosos'], ['/acompanhante-de-idosos-em-consultas-e-passeios-rj.html', 'consultas e passeios'], ['/curativos-em-casa-para-idosos-rj.html', 'curativos em casa']
].map(([u, t]) => '<a href="' + u + '">' + t + '</a>').join(' · ') + '.</p>';

const REGPHRASE = { 'Zona Norte e Grande Tijuca': 'na Zona Norte do Rio', 'Zona Sul': 'na Zona Sul do Rio', 'Barra da Tijuca e Recreio': 'na região da Barra da Tijuca', 'Jacarepaguá e região': 'na região de Jacarepaguá', 'Ilha do Governador': 'na Ilha do Governador', 'Realengo e região': 'na Zona Oeste do Rio' };
function autoIntro(L, region, slug) {
  const n = L.nome, reg = REGPHRASE[region] || 'no Rio de Janeiro';
  const h = (slug.split('').reduce((a, ch) => a + ch.charCodeAt(0), 0));
  const names = L.hosp.map(x => x[0]);
  const list = (names.length > 3 ? names.slice(0, 3) : names);
  const lst = list.length > 1 ? list.slice(0, -1).join(', ') + ' e ' + list[list.length - 1] : list[0];
  const p1 = [
    n + ' fica ' + reg + ', e as famílias da região costumam organizar o cuidado de uma pessoa idosa pensando na distância até a unidade de saúde e na rotina da casa.',
    'Para quem mora em ' + n + ', ' + reg + ', combinar o apoio a uma pessoa idosa começa por duas perguntas: onde ela precisa de ajuda e qual unidade de saúde costuma atender a família.',
    'Famílias de ' + n + ' (' + reg.replace(/^na /, '').replace(/^no /, '') + ') procuram apoio em casa, acompanhamento em consultas ou presença durante internações, conforme a necessidade de cada pessoa.',
    'Atender em ' + n + ' começa por conhecer o endereço, o acesso ao imóvel e os serviços de saúde que a família já utiliza ' + reg + '.',
    'Em ' + n + ', ' + reg + ', o atendimento é combinado caso a caso: o endereço, os horários e a unidade de saúde de referência da família definem como o apoio será organizado.'
  ][h % 5];
  const p2 = [
    'Nos arredores e em bairros vizinhos aparecem unidades como ' + lst + ', segundo o Google Maps. Ao falar com Mariano, informe o endereço, a unidade de interesse e os períodos em que a família precisa de apoio.',
    'Segundo o Google Maps, há serviços de saúde como ' + lst + ' na região. Se a necessidade envolve consulta ou internação, diga qual unidade a família prefere e quais períodos precisam ser cobertos.',
    'Entre as referências de saúde da região estão ' + lst + ' (dados do Google Maps). Conte ao Mariano o endereço do atendimento e a rotina da pessoa idosa para consultar a disponibilidade.',
    'Para consultas e internações, a família costuma recorrer a unidades como ' + lst + ', conforme o Google Maps. Informe o local, a unidade e os horários desejados para combinar o acompanhamento.'
  ][(h >> 2) % 4];
  return [p1, p2];
}
// ---------- seção de curativos (bairros e home) ----------
const CUR_LI = '<ul><li><strong>Região sacra (sacro) e outras áreas de pressão:</strong> cuidados com lesões por pressão (escaras).</li><li><strong>Úlceras nas pernas:</strong> feridas venosas, arteriais ou ligadas ao diabetes.</li><li><strong>Pós-operatório:</strong> curativos de incisões de cirurgias.</li><li><strong>Pós-parto:</strong> curativos de cesárea e cuidados com pontos.</li><li><strong>Outras feridas:</strong> lesões na pele e feridas crônicas, após avaliação.</li></ul>';
const CUR_NOTE = '<p class="note">Os curativos são feitos por técnico de enfermagem (Mariano, COREN-RJ 2014489-TE), conforme a prescrição e a orientação do médico ou do enfermeiro responsável. Não substituem a avaliação médica; havendo febre, secreção, dor forte ou piora da ferida, procure uma unidade de saúde.</p>';
function CUR_BLOCK(nome, slug) {
  const h = slug.split('').reduce((a, ch) => a + ch.charCodeAt(0), 0);
  const lead = [
    'Quem mora em ' + nome + ' e cuida de uma pessoa com ferida pode consultar a troca de curativos em casa, sem precisar levá-la até uma unidade de saúde.',
    'Em ' + nome + ', o curativo pode ser feito no conforto de casa por técnico de enfermagem, o que evita deslocamentos para quem tem dificuldade de locomoção.',
    'Famílias de ' + nome + ' que precisam de curativos depois de uma cirurgia, de um parto ou por causa de uma úlcera podem consultar o atendimento em casa.',
    'Para quem está em ' + nome + ' e precisa trocar curativos com regularidade, é possível consultar o atendimento domiciliar, combinado conforme a orientação médica.'
  ][h % 4];
  return '<section class="section prose" id="curativos"><p class="eyebrow">CURATIVOS EM CASA</p><h2>Curativos em ' + nome + ': sacra, úlceras de perna, cirurgia e pós-parto</h2><p>' + lead + ' Entre os cuidados que podem ser consultados:</p>' + CUR_LI + CUR_NOTE +
    '<p>Informe o local da ferida e as orientações que recebeu. <a href="/curativos-em-casa-para-idosos-rj.html">Saiba mais sobre curativos em casa →</a> · <a href="' + wa('Olá, Mariano! Preciso de curativos em casa em ' + nome + '. Gostaria de consultar disponibilidade.') + '">Consultar pelo WhatsApp ↗</a></p></section>';
}
let bairros = 0;
const BLIST = [];
function doBairro(file, slug) {
  let h = fs.readFileSync(file, 'utf8');
  const nome = (h.match(/<h1>Cuidador de idosos em <em>(.*?)<\/em>/) || [])[1];
  if (!nome) return;
  const label = (h.match(/ÁREA DE ATENDIMENTO · ([^<]*)/) || [])[1] || '';
  const region = regionOf(slug, label);
  h = common(h);
  const faq = faqFromHtml(h);
  h = editLD(h, o => {
    o['@graph'] = o['@graph'].map(x => x['@type'] === 'LocalBusiness' ? { ...lb(), areaServed: [{ '@type': 'City', name: 'Rio de Janeiro' }, { '@type': 'Place', name: nome + ', Rio de Janeiro, RJ' }] } : x);
    if (faq.length) o['@graph'].push(faqLD(faq));
  });
  const block = '<section class="section local-region" id="hospitais-regiao"><p class="eyebrow">REFERÊNCIAS NA REGIÃO</p><h2>Hospitais perto de ' + nome + ' e acompanhamento hospitalar</h2>' +
    '<p>Se a necessidade envolve uma internação, informe o hospital e os períodos desejados para consultar o acompanhamento. Algumas unidades de saúde da região (' + region + '):</p>' +
    hospList(region) + '<p class="note">' + NOTE + '</p>' + SERV_LINKS(nome) + '</section>';
  if (/<section class="section"><p class="eyebrow">ÁREA DE ATENDIMENTO/.test(h)) h = h.replace(/(<section class="section"><p class="eyebrow">ÁREA DE ATENDIMENTO)/, block + '$1'); else h = h.replace('<footer>', () => block + '<footer>');
  fs.writeFileSync(file, h); bairros++; BLIST.push({ file, slug, nome, region, href: path.basename(file) === 'index.html' ? '/cuidador-de-idosos-' + slug + '/' : '/cuidador-de-idosos-' + slug + '.html' });
}
for (const f of fs.readdirSync(OUT)) {
  if (/^cuidador-de-idosos-.*\.html$/.test(f)) doBairro(path.join(OUT, f), f.replace(/^cuidador-de-idosos-|\.html$/g, ''));
}
for (const d of fs.readdirSync(OUT, { withFileTypes: true })) {
  if (d.isDirectory() && d.name.startsWith('cuidador-de-idosos-')) doBairro(path.join(OUT, d.name, 'index.html'), d.name.replace('cuidador-de-idosos-', ''));
}
// bloco local: mapa do bairro + bairros vizinhos da mesma região
BLIST.sort((a, b) => a.nome.localeCompare(b.nome, 'pt'));
for (const b of BLIST) {
  const same = BLIST.filter(x => x.region === b.region && x.slug !== b.slug);
  const i = same.findIndex(x => x.nome.localeCompare(b.nome, 'pt') > 0);
  const rot = i < 0 ? same : same.slice(i).concat(same.slice(0, i));
  const near = rot.slice(0, 8);
  const q = encodeURIComponent(b.nome + ', Rio de Janeiro, RJ');
  const blk = '<section class="section local-area" id="mapa-bairro"><p class="eyebrow">ONDE ATENDEMOS</p><h2>' + b.nome + ' e a região</h2>' +
    '<p>O atendimento em ' + b.nome + ' é combinado no endereço informado pela família. Veja o bairro no mapa e confira outros bairros da região (' + b.region + ') que também consultam a CUIDAR IDOSOS.</p>' +
    '<div class="local-map"><iframe title="Mapa de ' + esc(b.nome) + ', Rio de Janeiro" src="https://www.google.com/maps?q=' + q + '&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>' +
    (near.length ? '<p class="local-links"><strong>Outros bairros da região:</strong> ' + near.map(x => '<a href="' + x.href + '">' + x.nome + '</a>').join(' · ') + '. <a href="/bairros-atendidos.html">Ver todos →</a></p>' : '') + '</section>';
  let h = fs.readFileSync(b.file, 'utf8');
  const L = LOCAL[b.slug];
  const uniq = !L ? '' : '<section class="section prose local-unique" id="no-bairro"><p class="eyebrow">NO BAIRRO</p><h2>Cuidador de idosos em ' + L.nome + ': referências para organizar o atendimento</h2>' +
    (L.auto ? autoIntro(L, b.region, b.slug) : L.intro).map(p => '<p>' + p + '</p>').join('') +
    '<h3>Hospitais e unidades de saúde</h3><ul>' + L.hosp.map(([n, a]) => '<li><strong>' + esc(n).replace(/&quot;/g, '"') + '</strong> — ' + a + '</li>').join('') + '</ul>' +
    (L.refs.length ? '<h3>Praças, parques e ruas de referência</h3><ul>' + L.refs.map(([n, a]) => '<li><strong>' + n + '</strong> — ' + a + '</li>').join('') + '</ul>' : '') +
    '<p class="note">' + SRC_NOTE + '</p></section>';
  h = h.replace('<section class="section local-region" id="hospitais-regiao">', () => uniq + CUR_BLOCK(b.nome, b.slug) + blk + '<section class="section local-region" id="hospitais-regiao">');
  h = editLD(h, o => { o['@graph'].push({ '@type': 'Service', '@id': U + b.href + '#curativos', name: 'Curativos em casa em ' + b.nome, serviceType: 'Curativos em domicílio', provider: { '@id': U + '/#empresa' }, areaServed: { '@type': 'Place', name: b.nome + ', Rio de Janeiro, RJ' }, description: 'Curativos em casa por técnico de enfermagem: região sacra, úlceras de perna, pós-operatório e pós-parto, conforme orientação médica.' }); });
  h = h.replace('</head>', '<style>.local-map{margin:14px 0 18px;border-radius:14px;overflow:hidden;border:1px solid #c5ded6}.local-map iframe{display:block;width:100%;height:320px;border:0}</style></head>');
  fs.writeFileSync(b.file, h);
}
{
  const f = path.join(OUT, 'bairros-atendidos.html');
  const nomeDe = x => x.nome;
  const lst = BLIST.slice().sort((x, y) => x.nome.localeCompare(y.nome, 'pt'));
  const blk = '<section class="section"><p class="eyebrow">TODOS OS BAIRROS</p><h2>Cuidador de idosos em ' + lst.length + ' bairros do Rio de Janeiro</h2><ul class="site-map-cols">' + lst.map(x => '<li><a href="' + x.href + '">' + nomeDe(x) + '</a></li>').join('') + '</ul></section><style>.site-map-cols{columns:3 200px;column-gap:24px;list-style:none;padding:0}.site-map-cols li{break-inside:avoid;margin:0 0 6px}</style>';
  let h = fs.readFileSync(f, 'utf8');
  h = h.replace('<footer>', () => blk + '<footer>');
  fs.writeFileSync(f, h);
}
console.log('bairros atualizados:', bairros);

// ---------- bairros-atendidos ----------
{
  const f = path.join(OUT, 'bairros-atendidos.html');
  fs.writeFileSync(f, common(fs.readFileSync(f, 'utf8')));
}
// lista completa de bairros em bairros-atendidos (preenchida depois, ver abaixo)

// ---------- layout das novas páginas ----------
const tj = fs.readFileSync(path.join(SRC, 'cuidador-de-idosos-tijuca.html'), 'utf8');
const STYLE = tj.match(/<style>.*?<\/style>/s)[0];
const FOOTER = common(tj).match(/<footer>.*?<\/footer>/s)[0];
let HEADER = '<a class="skip" href="#principal">Ir para o conteúdo</a><div class="topbar"><span>⌖ Cuidado com respeito no Rio de Janeiro</span><a href="tel:+5521972025533">(21) 97202-5533</a></div>' +
  '<header><a class="brand" href="/" aria-label="Cuidar Idosos — início"><img class="logo-original" src="/assets/images/logo-original.png" alt="Cuidar Idosos — Mais vida em boas mãos" width="214" height="52"></a><button class="menu-button" aria-expanded="false" aria-controls="menu">☰ <span>Menu</span></button>' +
  '<nav id="menu" aria-label="Menu principal"><a href="/">Início</a><a href="/#servicos">Serviços</a><a href="/guias.html">Guias</a><a href="/bairros-atendidos.html">Bairros</a><a href="#duvidas">Dúvidas</a><a href="#contato">Contato</a></nav>' +
  FB_HEAD + '<button class="fullscreen" title="Entrar em tela cheia" aria-label="Entrar em tela cheia">⛶</button><a class="button header-cta" href="https://wa.me/5521972025533">Fale pelo WhatsApp ↗</a></header>';
HEADER = topFb(HEADER);
const crumbs = items => ({ '@type': 'BreadcrumbList', itemListElement: items.map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: u })) });

function page(p) {
  const url = U + '/' + p.slug;
  const faqHtml = p.faq.map(([q, a]) => '<details><summary>' + esc(q) + '</summary><p>' + esc(a) + '</p></details>').join('');
  const secs = p.sections.map(s => '<section class="section prose"><h2>' + s.h + '</h2>' + (/<table/.test(s.html) ? '<div class="cmp-wrap">' + s.html.replace(/(<table.*<\/table>)/s, '$1') + '</div>' : s.html) + '</section>').join('\n');
  const hosp = p.hospitals ? '<section class="section prose local-region" id="hospitais"><p class="eyebrow">HOSPITAIS DO RIO DE JANEIRO</p><h2>Acompanhamento em hospitais por região</h2><p>Consulte o acompanhamento em hospitais públicos e particulares da cidade. Alguns exemplos de unidades por região, como referência de localização:</p>' +
    Object.keys(HOSP).map(r => '<h3>' + r + '</h3>' + hospList(r)).join('') + '<p class="note">' + NOTE + '</p></section>' : '';
  const isGuide = p.kind === 'guide';
  const graph = [lb(),
    { '@type': 'WebPage', '@id': url + '#pagina', url, name: p.title, description: p.desc, inLanguage: 'pt-BR', isPartOf: { '@id': U + '/#website' }, breadcrumb: { '@id': url + '#breadcrumb' } },
    isGuide ? { '@type': 'Article', headline: strip(p.h1), description: p.desc, inLanguage: 'pt-BR', datePublished: TODAY, dateModified: TODAY, mainEntityOfPage: url, image: U + '/assets/images/' + p.img[0], author: { '@id': U + '/#empresa' }, publisher: { '@id': U + '/#empresa' } }
      : { '@type': 'Service', '@id': url + '#servico', name: p.name, serviceType: p.name, url, description: p.desc, provider: { '@id': U + '/#empresa' }, areaServed: { '@type': 'City', name: 'Rio de Janeiro' } },
    ...(p.about ? [{ '@type': 'Person', '@id': U + '/#mariano', name: 'Mariano', jobTitle: 'Cuidador de idosos, técnico de enfermagem e terapeuta naturopata', worksFor: { '@id': U + '/#empresa' }, url }] : []),
    faqLD(p.faq),
    { ...crumbs([['Início', U + '/'], [isGuide ? 'Guias' : p.about ? 'Sobre' : 'Serviços', isGuide ? U + '/guias.html' : U + '/#servicos'], [p.name, url]]), '@id': url + '#breadcrumb' }];
  const html = '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#173E4D">' + FAV +
    '<title>' + esc(p.title) + '</title><meta name="description" content="' + esc(p.desc) + '"><meta name="robots" content="index, follow, max-image-preview:large"><link rel="canonical" href="' + url + '"><link rel="stylesheet" href="/style.css">' +
    '<meta property="og:type" content="' + (isGuide ? 'article' : 'website') + '"><meta property="og:locale" content="pt_BR"><meta property="og:site_name" content="CUIDAR IDOSOS"><meta property="og:title" content="' + esc(p.title) + '"><meta property="og:description" content="' + esc(p.desc) + '"><meta property="og:url" content="' + url + '"><meta property="og:image" content="' + U + '/assets/images/' + p.img[0] + '"><meta property="og:image:alt" content="' + esc(p.img[1]) + '">' +
    '<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="' + esc(p.title) + '"><meta name="twitter:description" content="' + esc(p.desc) + '"><meta name="twitter:image" content="' + U + '/assets/images/' + p.img[0] + '">' +
    ld({ '@context': 'https://schema.org', '@graph': graph }) + STYLE + EXTRA_CSS + FB_CSS + '</head><body>' + HEADER +
    '<main id="principal" class="local-page"><nav class="local-breadcrumb" aria-label="Você está aqui"><a href="/">Início</a><span aria-hidden="true">/</span><a href="' + (isGuide ? '/guias.html">Guias' : '/#servicos">Serviços') + '</a><span aria-hidden="true">/</span><span aria-current="page">' + esc(p.name) + '</span></nav>' +
    '<section class="hero" id="inicio"><div class="hero-copy"><p class="eyebrow">' + p.eyebrow + '</p><h1>' + p.h1 + '</h1><p>' + p.lead + '</p><a class="button" href="' + wa(p.wa) + '">' + p.cta + '</a>' + (p.callLine ? '<p class="micro">Prefere ligar? <a href="tel:' + PHONE + '">(21) 97202-5533</a></p>' : '') + '<p class="micro">Fale com Mariano. Serviços e períodos sujeitos à disponibilidade.</p></div>' +
    '<div class="hero-photo"><img src="/assets/images/' + p.img[0] + '" alt="' + esc(p.img[1]) + '" fetchpriority="high"><div class="photo-label">Cuidado com respeito.<br><strong>Tranquilidade para a família.</strong></div></div></section>\n' +
    secs + '\n' + hosp +
    '<section class="section faq" id="duvidas"><p class="eyebrow">DÚVIDAS FREQUENTES</p><h2>Perguntas frequentes</h2>' + faqHtml + '</section>' +
    '<section class="section local-contact" id="contato"><div><p class="eyebrow">VAMOS CONVERSAR?</p><h2>' + (isGuide ? 'Precisa de ajuda para decidir?' : 'Consulte disponibilidade') + '</h2><p>Informe o tipo de apoio, o bairro ou o hospital e os períodos desejados. Mariano conversa com você sobre os próximos passos. Contato por telefone e WhatsApp 24 horas, todos os dias.</p></div><a class="button" href="' + wa(p.wa) + '">Falar com Mariano no WhatsApp ↗</a></section>' +
    '<section class="section"><p class="eyebrow">ÁREA DE ATENDIMENTO</p><h2>Atendimento em bairros do Rio de Janeiro</h2><p>Consulte a disponibilidade no seu bairro. <a href="/bairros-atendidos.html">Ver todos os bairros atendidos →</a></p>' + FB_FOOT + '</section></main>' +
    FOOTER + FB_FLOAT + '<a class="floating" href="' + wa(p.wa) + '" aria-label="Conversar com Mariano pelo WhatsApp">WhatsApp ↗</a><div id="status" role="status" class="sr-only"></div><script src="/script.js"></script></body></html>';
  fs.writeFileSync(path.join(OUT, p.slug), html);
}
[...services, ...guides].forEach(page);

// ---------- guias.html (hub) ----------
{
  const items = guides.map(g => '<article><h3><a href="/' + g.slug + '">' + g.name + '</a></h3><p>' + g.desc + '</p><a href="/' + g.slug + '">Ler o guia →</a></article>').join('');
  const p = { slug: 'guias.html', kind: 'guide', name: 'Guias para famílias', title: 'Guias para Famílias de Idosos no Rio de Janeiro | CUIDAR IDOSOS', desc: 'Guias práticos para famílias de pessoas idosas: como escolher um cuidador, diferenças entre cuidador e técnico de enfermagem, custos e alta hospitalar.', eyebrow: 'GUIAS PARA FAMÍLIAS', h1: 'Guias para <em>famílias de pessoas idosas</em>', lead: 'Informações práticas para ajudar a organizar o cuidado com mais segurança e clareza.', img: ['familia.webp', 'Homem idoso abraçado por duas familiares'], wa: 'Olá, Mariano! Gostaria de conversar sobre o cuidado de uma pessoa idosa.', cta: 'Conversar pelo WhatsApp ↗', sections: [{ h: 'Guias', html: '<div class="guide-list">' + items + '</div>' }], faq: [['Os guias substituem a orientação médica?', 'Não. Os guias são orientações gerais para organizar o cuidado e não substituem a avaliação de médicos, enfermeiros e outros profissionais de saúde.'], ['Posso tirar dúvidas pelo WhatsApp?', 'Sim. Mariano conversa com você sobre a sua situação e sobre os serviços e a disponibilidade.']] };
  page(p);
  // hub não é "Article"
  const f = path.join(OUT, 'guias.html');
  let h = fs.readFileSync(f, 'utf8');
  h = editLD(h, o => { o['@graph'] = o['@graph'].map(x => x['@type'] === 'Article' ? { '@type': 'CollectionPage', name: p.name, url: U + '/guias.html', description: p.desc, inLanguage: 'pt-BR' } : x); });
  h = h.replace(/<a href="\/guias.html">Guias<\/a><span aria-hidden="true">\/<\/span><span aria-current="page">Guias para famílias/, '<span aria-current="page">Guias para famílias');
  fs.writeFileSync(f, h);
}

// ---------- 404 ----------
{
  const h = '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Página não encontrada | CUIDAR IDOSOS</title>' + FAV + '<link rel="stylesheet" href="/style.css">' + STYLE + EXTRA_CSS + FB_CSS + '</head><body>' + HEADER +
    '<main id="principal" class="local-page"><section class="section prose"><p class="eyebrow">ERRO 404</p><h1>Não encontramos essa página</h1><p>O endereço pode ter mudado. Veja abaixo os caminhos mais procurados ou fale com Mariano pelo WhatsApp.</p><ul><li><a href="/">Página inicial</a></li><li><a href="/bairros-atendidos.html">Bairros atendidos</a></li><li><a href="/cuidador-de-idosos-domiciliar-rj.html">Cuidador de idosos em casa</a></li><li><a href="/acompanhante-hospitalar-para-idosos-rj.html">Acompanhante hospitalar</a></li><li><a href="/guias.html">Guias para famílias</a></li></ul><a class="button" href="https://wa.me/5521972025533">Falar com Mariano no WhatsApp ↗</a></section>' + FB_SECTION + '</main>' + FOOTER + FB_FLOAT + '<div id="status" role="status" class="sr-only"></div><script src="/script.js"></script></body></html>';
  fs.writeFileSync(path.join(OUT, '404.html'), h);
}

// ---------- home ----------
{
  const f = path.join(OUT, 'index.html');
  let h = common(fs.readFileSync(f, 'utf8'));
  const T = 'Cuidador de Idosos no Rio de Janeiro | Plantão e Acompanhante Hospitalar';
  const D = 'Cuidador de idosos no Rio de Janeiro, técnico de enfermagem, acompanhante hospitalar, plantões diurnos e noturnos e viagens com idosos. Consulte bairros e disponibilidade.';
  h = h.replace(/Cuidador de Idosos no Rio de Janeiro \| CUIDAR IDOSOS/g, T)
    .replace(/Procura cuidador de idosos no Rio de Janeiro\? Conheça o apoio domiciliar e o acompanhamento hospitalar da CUIDAR IDOSOS\. Consulte bairros e disponibilidade\./g, D);
  h = h.replace('<h1>Cuidado para pessoas idosas com <em>respeito e atenção</em> no Rio de Janeiro</h1><p>Apoio para a rotina em casa e acompanhamento hospitalar, com atenção à autonomia e às necessidades de cada pessoa.</p>',
    '<h1>Cuidador de idosos no Rio de Janeiro, com <em>respeito e atenção</em></h1><p>Cuidador em casa, técnico de enfermagem, acompanhante hospitalar, plantões diurnos e noturnos e apoio em viagens e consultas, com atenção à autonomia e às necessidades de cada pessoa.</p>');
  // cards de serviço -> páginas próprias
  const map = { 'cuidado domiciliar': ['/cuidador-de-idosos-domiciliar-rj.html', 'Saiba mais sobre cuidador em casa'], 'técnico de enfermagem': ['/tecnico-de-enfermagem-para-idosos-rj.html', 'Saiba mais sobre técnico de enfermagem'], 'acompanhamento hospitalar': ['/acompanhante-hospitalar-para-idosos-rj.html', 'Saiba mais sobre acompanhamento hospitalar'], 'plantões': ['/plantao-cuidador-de-idosos-rj.html', 'Saiba mais sobre plantões'], 'suporte à internação': ['/acompanhante-hospitalar-para-idosos-rj.html', 'Saiba mais sobre suporte à internação'], 'concierge e organização da rotina': ['/acompanhante-de-idosos-em-consultas-e-passeios-rj.html', 'Saiba mais sobre concierge e rotina'], 'acompanhamento em passeios': ['/acompanhante-de-idosos-em-consultas-e-passeios-rj.html', 'Saiba mais sobre passeios e consultas'], 'acompanhamento em viagens': ['/acompanhante-de-idosos-para-viagens.html', 'Saiba mais sobre viagens com idosos'] };
  // só nos cards (fora do rodapé, que já foi trocado)
  h = h.replace(/<a data-service="([^"]+)" href="[^"]*"( aria-label="[^"]*")?>Consultar serviço →<\/a>/g, (m, k) => map[k] ? '<a href="' + map[k][0] + '" aria-label="' + map[k][1] + '">Saiba mais →</a>' : m);
  h = h.replace('<a href="#servicos">Serviços</a><a href="#como-funciona">Como funciona</a><a href="#regioes">Regiões</a>', '<a href="#servicos">Serviços</a><a href="#como-funciona">Como funciona</a><a href="#regioes">Regiões</a><a href="/guias.html">Guias</a>');
  // FAQ ampliada
  const extraFaq = [
    ['Vocês têm cuidador de idosos para plantão noturno?', 'É possível consultar plantões noturnos, em casa ou no hospital. A disponibilidade depende do período, da região e do serviço; confirme com Mariano pelo WhatsApp.'],
    ['Qual a diferença entre cuidador e técnico de enfermagem?', 'O cuidador acompanha a rotina e a companhia; o técnico de enfermagem realiza cuidados técnicos de saúde dentro das atribuições da profissão, conforme prescrição. Veja o guia completo sobre as diferenças.'],
    ['Vocês acompanham idosos em viagens?', 'É possível consultar o acompanhamento em viagens e deslocamentos, com planejamento prévio. Informe destino, datas e as necessidades da pessoa idosa.'],
    ['Como consultar valores?', 'Envie a Mariano o tipo de apoio, o bairro ou o hospital e os períodos desejados. O valor e as condições são informados conforme o serviço solicitado.']
  ];
  h = h.replace(/(<section id="duvidas" class="section faq">.*?)(<\/section>)/s, (m, a, b) => a + extraFaq.map(([q, an]) => '<details><summary>' + esc(q) + '</summary><p>' + esc(an) + '</p></details>').join('') + b);
  const faqAll = faqFromHtml(h.match(/<section id="duvidas".*?<\/section>/s)[0]);
  // texto de apoio com palavras-chave e links internos
  const intro = '<section class="section prose" id="sobre-servicos"><p class="eyebrow">CUIDADO PARA IDOSOS NO RIO DE JANEIRO</p><h2>Cuidador de idosos, técnico de enfermagem e acompanhante hospitalar</h2>' +
    '<p>A CUIDAR IDOSOS conecta famílias do Rio de Janeiro ao apoio de que a pessoa idosa precisa. Você pode consultar <a href="/cuidador-de-idosos-domiciliar-rj.html">cuidador de idosos em casa</a> para companhia e apoio à rotina, <a href="/tecnico-de-enfermagem-para-idosos-rj.html">técnico de enfermagem</a> para cuidados técnicos, <a href="/acompanhante-hospitalar-para-idosos-rj.html">acompanhante hospitalar</a> durante internações e <a href="/plantao-cuidador-de-idosos-rj.html">plantões diurnos e noturnos</a>.</p>' +
    '<p>Também é possível consultar o <a href="/acompanhante-de-idosos-para-viagens.html">acompanhamento em viagens</a> e em <a href="/acompanhante-de-idosos-em-consultas-e-passeios-rj.html">consultas, exames e passeios</a>. Atendemos <a href="/bairros-atendidos.html">bairros da Zona Norte, Zona Sul, Jacarepaguá, Barra da Tijuca, Ilha do Governador e Realengo</a>, e o contato por telefone e WhatsApp funciona 24 horas, todos os dias.</p>' +
    '<p>À frente da CUIDAR IDOSOS está <a href="/sobre-mariano-cuidador-tecnico-de-enfermagem-naturopata.html">Mariano, cuidador de idosos, técnico de enfermagem e terapeuta naturopata</a>. Conheça também a <a href="/terapia-naturopatia-para-idosos-rj.html">terapia naturopata para idosos</a>, como apoio complementar ao cuidado.</p>' +
    '<p>Para decidir com mais segurança, leia os guias: <a href="/cuidador-ou-tecnico-de-enfermagem-diferencas.html">cuidador ou técnico de enfermagem</a>, <a href="/como-escolher-cuidador-de-idosos.html">como escolher um cuidador</a>, <a href="/quanto-custa-cuidador-de-idosos-rj.html">quanto custa</a> e <a href="/alta-hospitalar-idoso-cuidados-em-casa.html">alta hospitalar do idoso</a>.</p></section>\n';
  const curHome = '<section class="section prose" id="curativos"><p class="eyebrow">CURATIVOS EM CASA</p><h2>Curativos em casa: sacra, úlceras de perna, cirurgia e pós-parto</h2><p>Além do cuidado domiciliar, a CUIDAR IDOSOS oferece a consulta de <a href="/curativos-em-casa-para-idosos-rj.html">curativos em casa</a>, feitos por técnico de enfermagem. Entre os cuidados que podem ser consultados:</p>' + CUR_LI + CUR_NOTE + '</section>\n';
  h = h.replace('<section id="duvidas" class="section faq">', intro + curHome + '<section id="duvidas" class="section faq">');
  const mapName = { 'Cuidador de idosos em casa': '/cuidador-de-idosos-domiciliar-rj.html', 'Técnico de enfermagem': '/tecnico-de-enfermagem-para-idosos-rj.html', 'Acompanhamento hospitalar': '/acompanhante-hospitalar-para-idosos-rj.html', 'Plantões e apoio em casa': '/plantao-cuidador-de-idosos-rj.html', 'Suporte à internação': '/acompanhante-hospitalar-para-idosos-rj.html', 'Concierge e organização da rotina': '/acompanhante-de-idosos-em-consultas-e-passeios-rj.html', 'Acompanhamento em passeios': '/acompanhante-de-idosos-em-consultas-e-passeios-rj.html', 'Acompanhamento em viagens': '/acompanhante-de-idosos-para-viagens.html' };
  h = editLD(h, o => {
    o['@graph'] = o['@graph'].map(x => {
      if (x['@type'] === 'LocalBusiness') {
        const n = lb(); n.hasOfferCatalog = x.hasOfferCatalog;
        n.hasOfferCatalog.itemListElement.forEach(of => { const m = mapName[of.itemOffered.name]; if (m) of.itemOffered.url = U + m; });
        return n;
      }
      if (x['@type'] === 'WebPage') { x.name = T; x.description = D; }
      return x;
    });
    o['@graph'].push(faqLD(faqAll));
  });
  fs.writeFileSync(f, h);
}

// ---------- favicon ----------
fs.writeFileSync(path.join(OUT, 'favicon.svg'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#173E4D"/><path d="M32 54C10 38 6 26 6 19C6 11 12 6 19 6C25 6 29 9 32 14C35 9 39 6 45 6C52 6 58 11 58 19C58 26 54 38 32 54Z" fill="#8FD1C1" transform="translate(9.600 10) scale(.7)"/></svg>');
{
  // PNGs gerados sem dependências (zlib) para favicon.ico (48), apple-touch-icon (180)
  const zlib = require('zlib');
  const crcT = (() => { const t = []; for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  const crc = b => { let c = 0xFFFFFFFF; for (const x of b) c = crcT[(c ^ x) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
  const chunk = (t, d) => { const l = Buffer.alloc(4); l.writeUInt32BE(d.length); const td = Buffer.concat([Buffer.from(t), d]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([l, td, c]); };
  const png = (S) => {
    const raw = Buffer.alloc((S * 4 + 1) * S);
    for (let y = 0; y < S; y++) {
      raw[y * (S * 4 + 1)] = 0;
      for (let x = 0; x < S; x++) {
        const nx = (x + .5) / S * 2 - 1, ny = -((y + .5) / S * 2 - 1) + .1; // coração
        const X = nx * 1.25, Y = ny * 1.25;
        const inHeart = Math.pow(X * X + Y * Y - 1, 3) - X * X * Y * Y * Y <= 0;
        const rx = Math.max(Math.abs((x + .5) / S - .5) - .36, 0), ry = Math.max(Math.abs((y + .5) / S - .5) - .36, 0);
        const inSq = Math.hypot(rx, ry) <= .14;
        const o = y * (S * 4 + 1) + 1 + x * 4;
        if (!inSq) { raw[o + 3] = 0; continue; }
        const col = inHeart ? [143, 209, 193] : [23, 62, 77];
        raw[o] = col[0]; raw[o + 1] = col[1]; raw[o + 2] = col[2]; raw[o + 3] = 255;
      }
    }
    const ih = Buffer.alloc(13); ih.writeUInt32BE(S, 0); ih.writeUInt32BE(S, 4); ih[8] = 8; ih[9] = 6;
    return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ih), chunk('IDAT', zlib.deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]);
  };
  const p48 = png(48), p180 = png(180);
  fs.writeFileSync(path.join(OUT, 'apple-touch-icon.png'), p180);
  const hdr = Buffer.alloc(22); hdr.writeUInt16LE(0, 0); hdr.writeUInt16LE(1, 2); hdr.writeUInt16LE(1, 4);
  hdr[6] = 48; hdr[7] = 48; hdr.writeUInt16LE(1, 10); hdr.writeUInt16LE(32, 12); hdr.writeUInt32LE(p48.length, 14); hdr.writeUInt32LE(22, 18);
  fs.writeFileSync(path.join(OUT, 'favicon.ico'), Buffer.concat([hdr, p48]));
}

// ---------- .htaccess ----------
fs.writeFileSync(path.join(OUT, '.htaccess'), `# Redirecionamento 301 - duplicidade Vila Valqueire
Redirect 301 /cuidador-de-idosos-vila-valqueire.html https://cuidaridososrj.com.br/cuidador-de-idosos-vila-valqueire/

# www -> sem www (evita conteúdo duplicado)
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\\.(.+)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [R=301,L]
</IfModule>

# Página 404 própria
ErrorDocument 404 /404.html

# Compressão
<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml application/xml application/ld+json
</IfModule>

# Cache de arquivos estáticos
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/webp "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType image/svg+xml "access plus 1 month"
ExpiresByType image/x-icon "access plus 1 month"
ExpiresByType text/css "access plus 1 week"
ExpiresByType application/javascript "access plus 1 week"
</IfModule>
`);

// ---------- mapa-do-site.html (todas as páginas) ----------
{
  const dirs = fs.readdirSync(OUT, { withFileTypes: true }).filter(d => d.isDirectory() && fs.existsSync(path.join(OUT, d.name, 'index.html'))).map(d => d.name + '/');
  const all = fs.readdirSync(OUT).filter(n => n.endsWith('.html') && !['404.html', 'index.html', 'mapa-do-site.html'].includes(n)).concat(dirs);
  const ttl = n => { const m = fs.readFileSync(path.join(OUT, n.endsWith('/') ? n + 'index.html' : n), 'utf8').match(/<title>(.*?)<\/title>/s); return m ? m[1].split(' | ')[0].trim() : n; };
  const li = n => '<li><a href="/' + n + '">' + ttl(n) + '</a></li>';
  const guideSet = new Set(guides.map(g => g.slug).concat(['guias.html']));
  const isBairro = n => /^cuidador-de-idosos-/.test(n) && n !== 'cuidador-de-idosos-domiciliar-rj.html';
  const bairros = all.filter(isBairro).sort((a, b) => ttl(a).localeCompare(ttl(b), 'pt'));
  const guiasL = all.filter(n => guideSet.has(n));
  const servicosL = all.filter(n => !isBairro(n) && !guideSet.has(n) && n !== 'bairros-atendidos.html');
  const html = '<h3>Página inicial</h3><ul><li><a href="/">CUIDAR IDOSOS — Cuidador de idosos no Rio de Janeiro</a></li><li><a href="/bairros-atendidos.html">Bairros atendidos</a></li></ul>' +
    '<h3>Serviços e sobre</h3><ul>' + servicosL.map(li).join('') + '</ul>' +
    '<h3>Guias para famílias</h3><ul>' + guiasL.map(li).join('') + '</ul>' +
    '<h3>Cuidador de idosos por bairro (' + bairros.length + ')</h3><ul class="site-map-cols">' + bairros.map(li).join('') + '</ul>';
  const p = { slug: 'mapa-do-site.html', kind: 'guide', name: 'Mapa do site', title: 'Mapa do Site | CUIDAR IDOSOS — Cuidador de Idosos no Rio de Janeiro', desc: 'Todas as páginas do site CUIDAR IDOSOS: serviços, guias para famílias e cuidador de idosos em cada bairro do Rio de Janeiro.', eyebrow: 'MAPA DO SITE', h1: 'Todas as páginas da <em>CUIDAR IDOSOS</em>', lead: 'Serviços, guias e atendimento em cada bairro do Rio de Janeiro, em um só lugar.', img: ['familia.webp', 'Homem idoso abraçado por duas familiares'], wa: 'Olá, Mariano! Gostaria de conversar sobre o cuidado de uma pessoa idosa.', cta: 'Conversar pelo WhatsApp ↗', sections: [{ h: 'Páginas do site', html: html }], faq: [['Como encontro o meu bairro?', 'Procure o nome do bairro na lista acima ou consulte a página de bairros atendidos. Se não encontrar, fale com Mariano pelo WhatsApp para confirmar a disponibilidade.']] };
  page(p);
  const f = path.join(OUT, 'mapa-do-site.html');
  let h = fs.readFileSync(f, 'utf8');
  h = editLD(h, o => { o['@graph'] = o['@graph'].map(x => x['@type'] === 'Article' ? { '@type': 'CollectionPage', name: p.name, url: U + '/mapa-do-site.html', description: p.desc, inLanguage: 'pt-BR' } : x); });
  h = h.replace(/<a href="\/guias.html">Guias<\/a><span aria-hidden="true">\/<\/span><span aria-current="page">Mapa do site/, '<span aria-current="page">Mapa do site');
  h = h.replace('</head>', '<style>.site-map-cols{columns:3 220px;column-gap:24px;list-style:none;padding:0}.site-map-cols li{break-inside:avoid;margin:0 0 6px}</style></head>');
  fs.writeFileSync(f, h);
}

// ---------- sitemap + robots ----------
{
  const files = [];
  (function w(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) w(p); else if (e.name.endsWith('.html')) files.push(p); } })(OUT);
  const urls = files.map(f => path.relative(OUT, f).split(path.sep).join('/')).filter(r => r !== '404.html' && !/^css\/|^js\//.test(r))
    .map(r => r === 'index.html' ? '' : r.endsWith('/index.html') ? r.slice(0, -10) : r);
  const prio = u => u === '' ? '1.0' : /^(cuidador-de-idosos-domiciliar|tecnico-de|acompanhante-|plantao-|terapia-|sobre-)/.test(u) ? '0.9' : /^(guias|como-|quanto-|cuidador-ou|alta-)/.test(u) ? '0.7' : u === 'bairros-atendidos.html' ? '0.8' : '0.6';
  urls.sort((a, b) => prio(b) - prio(a) || a.localeCompare(b));
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map(u => '<url><loc>' + U + '/' + u + '</loc><lastmod>' + TODAY + '</lastmod><priority>' + prio(u) + '</priority></url>').join('\n') + '\n</urlset>\n');
  console.log('urls no sitemap:', urls.length);
}
fs.writeFileSync(path.join(OUT, 'robots.txt'), 'User-agent: *\nAllow: /\n\nSitemap: https://cuidaridososrj.com.br/sitemap.xml\n');

// ---------- ajuste de títulos e descrições longos (limite do Google) ----------
{
  const SHORT = {
    'alta-hospitalar-idoso-cuidados-em-casa.html': ['Alta Hospitalar do Idoso: Como Preparar os Cuidados em Casa', null],
    'cuidador-de-idosos-domiciliar-rj.html': [null, 'Cuidador de idosos domiciliar no Rio de Janeiro: companhia, apoio à rotina e respeito à autonomia, com horários combinados com a família.'],
    'cuidador-de-idosos-freguesia-de-jacarepagua.html': ['Cuidador de Idosos em Freguesia de Jacarepaguá | CUIDAR IDOSOS', 'Cuidador de idosos em Freguesia de Jacarepaguá, RJ. Apoio em casa e acompanhamento hospitalar. Consulte disponibilidade com Mariano pelo WhatsApp.'],
    'cuidador-de-idosos-recreio-dos-bandeirantes.html': ['Cuidador de Idosos em Recreio dos Bandeirantes | CUIDAR IDOSOS', 'Cuidador de idosos em Recreio dos Bandeirantes, RJ. Apoio em casa e acompanhamento hospitalar. Consulte disponibilidade com Mariano pelo WhatsApp.'],
    'cuidador-de-idosos-ricardo-de-albuquerque.html': [null, 'Cuidador de idosos em Ricardo de Albuquerque, RJ. Apoio em casa e acompanhamento hospitalar. Consulte disponibilidade com Mariano pelo WhatsApp.'],
    'cuidador-ou-tecnico-de-enfermagem-diferencas.html': [null, 'Entenda a diferença entre cuidador de idosos, técnico de enfermagem e acompanhante hospitalar e como escolher o apoio certo para a sua família.'],
    'index.html': ['Cuidador de Idosos no RJ | Plantão e Acompanhante Hospitalar', 'Cuidador de idosos no Rio de Janeiro, técnico de enfermagem, acompanhante hospitalar e plantões diurnos e noturnos. Consulte bairros e disponibilidade.'],
    'mapa-do-site.html': ['Mapa do Site | CUIDAR IDOSOS — Cuidador de Idosos no RJ', null],
    'plantao-cuidador-de-idosos-rj.html': [null, 'Plantão de cuidador de idosos no Rio de Janeiro: períodos diurnos, noturnos e outros formatos combinados com a família, em casa ou no hospital.'],
    'quanto-custa-cuidador-de-idosos-rj.html': [null, 'O que influencia o valor de um cuidador de idosos no Rio de Janeiro: tipo de profissional, período, local e grau de dependência. Veja como pedir orçamento.'],
    'sobre-mariano-cuidador-tecnico-de-enfermagem-naturopata.html': ['Sobre Mariano | Cuidador, Técnico de Enfermagem e Naturopata', 'Conheça Mariano, cuidador de idosos, técnico de enfermagem e terapeuta naturopata da CUIDAR IDOSOS no Rio de Janeiro. Forma de trabalho e áreas de atuação.'],
    'tecnico-de-enfermagem-para-idosos-rj.html': [null, 'Técnico de enfermagem para idosos no Rio de Janeiro: cuidados técnicos em casa por profissional habilitado, dentro de suas atribuições. Consulte disponibilidade.'],
    'terapia-naturopatia-para-idosos-rj.html': ['Terapeuta Naturopata para Idosos no RJ | CUIDAR IDOSOS', 'Terapia naturopata para idosos no Rio de Janeiro: práticas naturais complementares ao cuidado e ao bem-estar. Não substitui o tratamento médico.']
  };
  for (const [f, [t, d]] of Object.entries(SHORT)) {
    const p = path.join(OUT, f); let h = fs.readFileSync(p, 'utf8');
    if (t) { const o = h.match(/<title>(.*?)<\/title>/s)[1]; h = h.split(o).join(t); }
    if (d) { const o = h.match(/<meta name="description" content="(.*?)"/)[1]; h = h.split(o).join(d); }
    fs.writeFileSync(p, h);
  }
}

// ---------- CSS: pequenos acréscimos usados pelas novas seções ----------
console.log('ok');

// ---------- Google Tag Manager (todas as páginas, exceto nada: 404 também) ----------
{
  const GTM = 'GTM-NBR5GF59';
  const head = '<!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];var go=function(){w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i;f.parentNode.insertBefore(j,f);};if(d.readyState==="complete")go();else w.addEventListener("load",function(){setTimeout(go,200)});})(window,document,"script","dataLayer","' + GTM + '");</script><!-- End Google Tag Manager -->';
  const body = '<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' + GTM + '" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->';
  let n = 0;
  (function w(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) { if (e.name !== 'assets') w(p); continue; }
      if (!e.name.endsWith('.html')) continue;
      let h = fs.readFileSync(p, 'utf8');
      if (h.includes(GTM)) continue;
      const pre = /<img src="\/?assets\/images\/hero\.webp"[^>]*fetchpriority/.test(h) ? '<link rel="preload" as="image" href="/assets/images/hero.webp" fetchpriority="high">' : '';
      h = h.replace('<meta charset="utf-8">', '<meta charset="utf-8">' + pre + head).replace('<body>', '<body>' + body);
      fs.writeFileSync(p, h); n++;
    }
  })(OUT);
  console.log('GTM instalado em', n, 'páginas');
}

// versão no link do CSS da home (a faixa verde nova): evita que o celular use o style.css antigo do cache
{
  const f = path.join(OUT, 'index.html');
  fs.writeFileSync(f, fs.readFileSync(f, 'utf8').replace('href="style.css"', 'href="style.css?v=20261029"'));
}
