// Serve UMA imagem local em http://127.0.0.1:8765/ (com CORS liberado) para o editor do Google pegar via fetch.
// Uso: node servir-imagem.js caminho/da/arte.png     (deixe rodando em segundo plano; encerre depois de postar)
const http = require('http'), fs = require('fs'), path = require('path');
const file = path.resolve(process.argv[2] || 'arte.png');
if (!fs.existsSync(file)) { console.error('Arquivo não encontrado:', file); process.exit(1); }
const type = /\.png$/i.test(file) ? 'image/png' : 'image/jpeg';
http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', type);
  res.end(fs.readFileSync(file));
}).on('error', e => {
  // Porta ocupada = outro servidor antigo ainda serve OUTRA imagem. Pare-o antes; senão posta a arte errada.
  console.error(e.code === 'EADDRINUSE' ? 'ERRO: porta 8765 já ocupada por outro servidor. Encerre-o e rode de novo.' : e.message);
  process.exit(1);
}).listen(8765, '127.0.0.1', () => console.log('Servindo', file, `(${fs.statSync(file).size} bytes) em http://127.0.0.1:8765/`));
