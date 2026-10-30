// Gera as artes das postagens (SVG dentro de HTML 1000x700). Uso: node gerar-artes.js
const fs = require('fs');
const posts = [
  { file: 'arte-1', kicker: 'DICA DE CUIDADO', l1: '3 cuidados que ajudam a', l2: 'prevenir quedas em casa', bullets: ['Boa iluminação, principalmente à noite', 'Tapetes soltos e fios fora do caminho', 'Apoio no banheiro e piso antiderrapante'] },
  { file: 'arte-2', kicker: 'VOCÊ SABIA?', l1: 'Cuidador ou técnico', l2: 'de enfermagem?', bullets: ['Cuidador: rotina, companhia e autonomia', 'Técnico: cuidados técnicos, com prescrição', 'Em muitos casos, os dois se completam'] }
];
for (const p of posts) {
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;background:#fff}svg{display:block}</style></head><body>
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="700" viewBox="0 0 1000 700" font-family="Arial, Helvetica, sans-serif">
<rect width="1000" height="700" fill="#173E4D"/>
<circle cx="900" cy="90" r="190" fill="#276c64" opacity=".55"/><circle cx="960" cy="640" r="130" fill="#8FD1C1" opacity=".18"/>
<path d="M105 120C70 98 60 78 60 62C60 44 74 32 90 32C98 32 106 36 110 44C114 36 122 32 130 32C146 32 160 44 160 62C160 78 150 98 115 120Z" transform="translate(-20 10) scale(1.1)" fill="#8FD1C1"/>
<text x="110" y="82" font-size="26" fill="#ffffff" font-weight="700" letter-spacing="3">CUIDAR IDOSOS</text>
<text x="60" y="190" font-size="22" fill="#8FD1C1" font-weight="700" letter-spacing="4">${p.kicker}</text>
<text x="60" y="262" font-size="60" fill="#ffffff" font-weight="700">${p.l1}</text>
<text x="60" y="334" font-size="60" fill="#8FD1C1" font-weight="700">${p.l2}</text>
${p.bullets.map((b, i) => `<circle cx="72" cy="${415 + i * 56}" r="9" fill="#8FD1C1"/><text x="98" y="${423 + i * 56}" font-size="29" fill="#e8f3f0">${b}</text>`).join('\n')}
<rect x="0" y="610" width="1000" height="90" fill="#0f2c37"/>
<text x="60" y="650" font-size="26" fill="#ffffff" font-weight="700">Fale com Mariano: (21) 97202-5533</text>
<text x="60" y="682" font-size="21" fill="#8FD1C1">cuidaridososrj.com.br · Rio de Janeiro</text>
</svg></body></html>`;
  fs.writeFileSync(__dirname + '/' + p.file + '.html', html);
}
console.log('ok');
