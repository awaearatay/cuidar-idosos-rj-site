// Serve em http://127.0.0.1:8765/ a imagem indicada no arquivo atual.txt (uma por vez), com CORS liberado.
// Para trocar a arte, é só gravar outro nome em atual.txt (o servidor relê a cada pedido).
const http = require('http'), fs = require('fs'), path = require('path');
const dir = __dirname;
http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const nome = path.basename(fs.readFileSync(path.join(dir, 'atual.txt'), 'utf8').trim());
    const file = path.join(dir, nome);
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('X-Arquivo', nome);
    res.end(fs.readFileSync(file));
  } catch (e) { res.statusCode = 500; res.end(String(e.message)); }
}).on('error', e => { console.error(e.code === 'EADDRINUSE' ? 'ERRO: porta 8765 ocupada' : e.message); process.exit(1); })
  .listen(8765, '127.0.0.1', () => console.log('servidor-lote no ar em http://127.0.0.1:8765/'));
