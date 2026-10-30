// Gera a arte da postagem no padrão visual do Cuidar Idosos (ver assets/exemplo-mobilidade-autonomia.jpg).
// Uso: node gerar-arte.js config.json
// config.json (todos os caminhos absolutos ou relativos ao config):
// {
//   "foto": "foto.jpg",                 // foto de fundo (pessoa idosa + cuidador). Obrigatória.
//   "focoFoto": "70% 40%",              // object-position da foto (onde fica a pessoa). Padrão "70% 40%".
//   "kicker": "MOBILIDADE E AUTONOMIA", // tema curto, em maiúsculas
//   "titulo": ["Movimento com", "apoio e respeito", "ao seu ritmo."], // 2 a 4 linhas curtas
//   "subtitulo": "Incentivo para uma rotina mais ativa.",              // 1 frase, até ~45 letras
//   "whatsapp": "(21) 97202-5533",
//   "saida": "arte.png",
//   "largura": 1080, "altura": 1350      // padrão 1080x1350 (4:5), igual ao exemplo
// }
// Renderiza um HTML com o Chrome/Edge em modo headless e salva um PNG.
const fs = require('fs'), path = require('path'), os = require('os'), { execFileSync } = require('child_process');

const cfgPath = path.resolve(process.argv[2] || 'config.json');
const base = path.dirname(cfgPath);
const c = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
const W = c.largura || 1080, H = c.altura || 1350;
const abs = p => path.isAbsolute(p) ? p : path.join(base, p);
const dataUri = p => { const ext = path.extname(p).slice(1).toLowerCase().replace('jpg', 'jpeg'); return `data:image/${ext};base64,` + fs.readFileSync(p).toString('base64'); };
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const foto = dataUri(abs(c.foto));
const logo = dataUri(path.join(__dirname, '..', 'assets', 'logo-cuidar-idosos.png'));
const titulo = (Array.isArray(c.titulo) ? c.titulo : String(c.titulo).split('\n')).map(esc).join('<br>');
// Escala as medidas do layout base (1080x1350) para o tamanho pedido.
const sx = W / 1080, sy = H / 1350, s = Math.min(sx, sy);
const P = pts => pts.map(([x, y]) => `${(x * sx).toFixed(0)}px ${(y * sy).toFixed(0)}px`).join(',');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;height:${H}px;overflow:hidden;font-family:Arial,Helvetica,sans-serif}
.foto{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:${c.focoFoto || '70% 40%'}}
.claro{position:absolute;inset:0;background:rgba(247,246,238,.90);clip-path:polygon(${P([[0,0],[500,0],[452,845],[0,940]])})}
.navy{position:absolute;inset:0;background:#0f2b55;clip-path:polygon(${P([[0,1040],[722,858],[838,1350],[0,1350]])})}
.faixa{position:absolute;inset:0;background:#0b8a74;clip-path:polygon(${P([[432,762],[478,744],[760,1350],[706,1350]])})}
.logo{position:absolute;left:${40*sx}px;top:${40*sy}px;width:${315*s}px;height:${124*s}px;background:#fff;border-radius:${22*s}px;display:flex;align-items:center;justify-content:center}
.logo img{width:${268*s}px}
.kicker{position:absolute;left:${59*sx}px;top:${236*sy}px;color:#0b8a74;font-weight:700;font-size:${20*s}px;letter-spacing:.3px}
.barra{position:absolute;left:${59*sx}px;top:${278*sy}px;width:${226*s}px;height:${7*s}px;background:#0b8a74}
.titulo{position:absolute;left:${59*sx}px;top:${322*sy}px;width:${400*sx}px;color:#0f2b55;font-weight:700;font-size:${44*s}px;line-height:1.36;letter-spacing:.5px}
.marca{position:absolute;left:${65*sx}px;top:${1080*sy}px;color:#9fd8c8;font-weight:700;font-size:${20*s}px}
.sub{position:absolute;left:${65*sx}px;top:${1122*sy}px;width:${480*sx}px;color:#fff;font-weight:700;font-size:${28*s}px;line-height:1.5}
.zap{position:absolute;left:${65*sx}px;top:${1284*sy}px;color:#fff;font-weight:700;font-size:${24*s}px}
</style></head><body>
<img class="foto" src="${foto}">
<div class="claro"></div><div class="navy"></div><div class="faixa"></div>
<div class="logo"><img src="${logo}"></div>
<div class="kicker">${esc(c.kicker || '')}</div><div class="barra"></div>
<div class="titulo">${titulo}</div>
<div class="marca">CUIDAR IDOSOS</div>
<div class="sub">${esc(c.subtitulo || '')}</div>
<div class="zap">WhatsApp ${esc(c.whatsapp || '(21) 97202-5533')}</div>
</body></html>`;

const tmpHtml = path.join(os.tmpdir(), 'arte-cuidar-' + Date.now() + '.html');
fs.writeFileSync(tmpHtml, html);
const out = abs(c.saida || 'arte.png');
const browsers = [process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'].filter(Boolean);
const bin = browsers.find(b => fs.existsSync(b));
if (!bin) throw new Error('Chrome/Edge não encontrado. Defina CHROME_PATH.');
execFileSync(bin, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
  `--user-data-dir=${path.join(os.tmpdir(), 'arte-cuidar-profile')}`,
  `--window-size=${W},${H}`, `--screenshot=${out}`, 'file:///' + tmpHtml.replace(/\\/g, '/')], { stdio: 'ignore' });
fs.unlinkSync(tmpHtml);
console.log('Arte gerada:', out, `${W}x${H}`);
