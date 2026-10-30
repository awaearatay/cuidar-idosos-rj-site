// Cole no javascript_tool com o editor de postagem do Google Meu Negócio ABERTO (tela "Adicionar postagem").
// Troque o objeto P pelos dados da postagem (kicker, l1, l2, bullets[3], name).
// O editor roda num iframe de mesma origem: gera a arte no canvas e entrega ao <input type=file> (o file_upload comum NÃO funciona nessa tela).
const f = [...document.querySelectorAll('iframe')].find(x => { try { return x.contentDocument.querySelector('input[type=file]') } catch (e) { return false } });
const d = f.contentDocument, w = f.contentWindow;
const P = { kicker: 'DICA DE CUIDADO', l1: 'Linha 1', l2: 'Linha 2', bullets: ['a', 'b', 'c'], name: 'arte.png' };
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="700" viewBox="0 0 1000 700" font-family="Arial, Helvetica, sans-serif"><rect width="1000" height="700" fill="#173E4D"/><circle cx="900" cy="90" r="190" fill="#276c64" opacity=".55"/><circle cx="960" cy="640" r="130" fill="#8FD1C1" opacity=".18"/><path d="M105 120C70 98 60 78 60 62C60 44 74 32 90 32C98 32 106 36 110 44C114 36 122 32 130 32C146 32 160 44 160 62C160 78 150 98 115 120Z" transform="translate(-20 10) scale(1.1)" fill="#8FD1C1"/><text x="110" y="82" font-size="26" fill="#ffffff" font-weight="700" letter-spacing="3">CUIDAR IDOSOS</text><text x="60" y="190" font-size="22" fill="#8FD1C1" font-weight="700" letter-spacing="4">${P.kicker}</text><text x="60" y="262" font-size="60" fill="#ffffff" font-weight="700">${P.l1}</text><text x="60" y="334" font-size="60" fill="#8FD1C1" font-weight="700">${P.l2}</text>${P.bullets.map((b, i) => `<circle cx="72" cy="${415 + i * 56}" r="9" fill="#8FD1C1"/><text x="98" y="${423 + i * 56}" font-size="29" fill="#e8f3f0">${b}</text>`).join('')}<rect x="0" y="610" width="1000" height="90" fill="#0f2c37"/><text x="60" y="650" font-size="26" fill="#ffffff" font-weight="700">Fale com Mariano: (21) 97202-5533</text><text x="60" y="682" font-size="21" fill="#8FD1C1">cuidaridososrj.com.br · Rio de Janeiro</text></svg>`;
const img = new w.Image();
await new Promise((ok, er) => { img.onload = ok; img.onerror = er; img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg) });
const c = d.createElement('canvas'); c.width = 1000; c.height = 700; c.getContext('2d').drawImage(img, 0, 0);
const blob = await new Promise(ok => c.toBlob(ok, 'image/png'));
const file = new w.File([blob], P.name, { type: 'image/png' });
const dt = new w.DataTransfer(); dt.items.add(file);
const inp = d.querySelector('input[type=file]'); inp.files = dt.files; inp.dispatchEvent(new w.Event('change', { bubbles: true }));
'ok ' + blob.size;
