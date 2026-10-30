// Trechos de JavaScript para colar na ferramenta de "executar JavaScript" do navegador,
// com a aba em https://business.google.com/locations (conta do usuário já logada).
// Cada bloco é independente: copie só o bloco do passo atual.
// O editor de postagem roda num IFRAME de mesma origem; por isso tudo procura o iframe que tem input[type=file].

// ===== PASSO A: abrir o editor de postagem no perfil CERTO =====
// O perfil do site cuidaridososrj.com.br é "Cuidador de Idosos RJ Mariano", código 10765087741570372227.
// NÃO use o perfil "cuidaridosos" (Itaguaí) nem "Cuidar Idosos" (suspenso).
for (let i = 0; i < 20 && !document.querySelector('[aria-label="Criar postagem"]'); i++) await new Promise(r => setTimeout(r, 1000));
const linha = b => b.closest('tr,[role=row],[role=listitem]');
const botao = [...document.querySelectorAll('[aria-label="Criar postagem"]')].find(b => linha(b) && linha(b).innerText.includes('10765087741570372227'));
if (!botao) throw new Error('Perfil 10765087741570372227 não encontrado na lista');
botao.click();
let fr; for (let i = 0; i < 20 && !fr; i++) { fr = [...document.querySelectorAll('iframe')].find(x => { try { return x.contentDocument.querySelector('input[type=file]') } catch (e) { return false } }); if (!fr) await new Promise(r => setTimeout(r, 1000)); }
'editor aberto: ' + !!fr + ' | perfil: ' + linha(botao).innerText.replace(/\s+/g, ' ').slice(0, 60);

// ===== PASSO B: anexar a arte (servida por servir-imagem.js em 127.0.0.1:8765) =====
// Na 1ª vez o Chrome pode mostrar "permitir acesso à rede local": o usuário precisa clicar em Permitir.
const f = [...document.querySelectorAll('iframe')].find(x => { try { return x.contentDocument.querySelector('input[type=file]') } catch (e) { return false } });
const ac = new AbortController(); setTimeout(() => ac.abort(), 20000);
try {
  const w = f.contentWindow, d = f.contentDocument;
  const blob = await fetch('http://127.0.0.1:8765/arte?' + Date.now(), { signal: ac.signal }).then(r => r.blob());
  const file = new w.File([blob], 'cuidar-idosos.' + (blob.type.includes('png') ? 'png' : 'jpg'), { type: blob.type });
  const dt = new w.DataTransfer(); dt.items.add(file);
  const inp = d.querySelector('input[type=file]'); inp.files = dt.files; inp.dispatchEvent(new w.Event('change', { bubbles: true }));
  await new Promise(r => setTimeout(r, 4000));
  // Confira: bytes == tamanho do arquivo da arte (mostrado pelo servir-imagem.js) e fotos == 1.
  'imagem anexada: ' + blob.size + ' bytes | fotos no editor: ' + d.querySelectorAll('[aria-label="Excluir foto"]').length;
} catch (e) { 'ERRO (provavelmente falta permitir a rede local no Chrome): ' + e.message }

// ===== PASSO C: focar a caixa de descrição =====
// Depois deste bloco, DIGITE o texto com a ferramenta de teclado (type). Definir .value por JS não é confiável.
const f2 = [...document.querySelectorAll('iframe')].find(x => { try { return x.contentDocument.querySelector('input[type=file]') } catch (e) { return false } });
f2.focus(); f2.contentDocument.querySelector('textarea').focus();
f2.contentDocument.activeElement.tagName;

// ===== PASSO D: adicionar botão "Saiba mais" =====
// D1: clicar em "Botão" e devolver as coordenadas (na página) do seletor de tipo de botão.
const f3 = [...document.querySelectorAll('iframe')].find(x => { try { return x.contentDocument.querySelector('input[type=file]') } catch (e) { return false } });
const d3 = f3.contentDocument;
[...d3.querySelectorAll('button')].find(b => b.innerText.trim() === 'Botão').click();
await new Promise(r => setTimeout(r, 1000));
const sel = [...d3.querySelectorAll('[jsname=bEC2Oe]')].find(e => e.getBoundingClientRect().height > 0);
sel.scrollIntoView({ block: 'center' }); await new Promise(r => setTimeout(r, 400));
const A = f3.getBoundingClientRect(), B = sel.getBoundingClientRect();
JSON.stringify([Math.round(A.x + B.x + B.width / 2), Math.round(A.y + B.y + B.height / 2)]);
// -> CLIQUE (mouse de verdade) nessas coordenadas para abrir a lista. Depois rode o D2.

// D2: escolher "Saiba mais" disparando eventos na opção (clique por coordenada já escolheu a opção errada).
const f4 = [...document.querySelectorAll('iframe')].find(x => { try { return x.contentDocument.querySelector('input[type=file]') } catch (e) { return false } });
const d4 = f4.contentDocument, w4 = f4.contentWindow;
await new Promise(r => setTimeout(r, 800));
const op = [...d4.querySelectorAll('[role=option],li')].find(e => e.getBoundingClientRect().height > 0 && e.textContent.trim() === 'Saiba mais');
if (op) for (const t of ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click']) op.dispatchEvent(new w4.MouseEvent(t, { bubbles: true, cancelable: true, view: w4 }));
await new Promise(r => setTimeout(r, 800));
const url = d4.querySelector('input[type=url]'); if (url) { f4.focus(); url.focus(); }
'tipo: ' + [...d4.querySelectorAll('[jsname=WjL7X]')].map(e => e.textContent.trim()).join('|') + ' | campo de link focado: ' + !!url;
// -> se aparecer "Saiba mais", DIGITE (teclado) https://cuidaridososrj.com.br/

// ===== PASSO E: conferir tudo e pegar a posição do botão "Postagem" =====
const f5 = [...document.querySelectorAll('iframe')].find(x => { try { return x.contentDocument.querySelector('input[type=file]') } catch (e) { return false } });
const d5 = f5.contentDocument;
JSON.stringify({
  texto: d5.querySelector('textarea').value.length + ' letras',
  fotos: d5.querySelectorAll('[aria-label="Excluir foto"]').length,
  botao: [...d5.querySelectorAll('[jsname=WjL7X]')].map(e => e.textContent.trim()).filter(Boolean).join('|'),
  link: d5.querySelector('input[type=url]')?.value
});
// -> só siga se fotos=1, botao=Saiba mais e link certo.

// ===== PASSO E2: publicar (clique por JS no botão "Postagem") =====
// NÃO clique por coordenada: a janela muda de tamanho e o clique cai fora do editor, abrindo "Descartar as alterações?".
// Se esse aviso aparecer, clique em "Cancelar" (nunca em "OK").
const f7 = [...document.querySelectorAll('iframe')].find(x => { try { return x.contentDocument.querySelector('input[type=file]') } catch (e) { return false } });
const d7 = f7.contentDocument, w7 = f7.contentWindow;
const pb = [...d7.querySelectorAll('button')].find(b => b.innerText.trim() === 'Postagem');
for (const t of ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click']) pb.dispatchEvent(new w7.MouseEvent(t, { bubbles: true, cancelable: true, view: w7 }));
let fc; for (let i = 0; i < 15 && !fc; i++) { await new Promise(r => setTimeout(r, 1000)); fc = [...document.querySelectorAll('iframe')].find(x => { try { return /Copiar postagem/.test(x.contentDocument.body.innerText) } catch (e) { return false } }); }
'tela de copiar apareceu: ' + !!fc;

// ===== PASSO F: tela "Copiar postagem" -> conferir o perfil e pegar a posição de "Pular" =====
// O perfil onde você postou NÃO aparece nesta lista. Se "Cuidador de Idosos RJ Mariano" aparecer, você postou no perfil errado.
const f6 = [...document.querySelectorAll('iframe')].find(x => { try { return /Copiar postagem/.test(x.contentDocument.body.innerText) } catch (e) { return false } });
const t6 = f6.contentDocument.body.innerText;
const certo = !t6.includes('Cuidador de Idosos RJ Mariano');
const w6 = f6.contentWindow, pu = [...f6.contentDocument.querySelectorAll('button')].find(b => b.innerText.trim() === 'Pular');
for (const t of ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click']) pu.dispatchEvent(new w6.MouseEvent(t, { bubbles: true, cancelable: true, view: w6 }));
'postou no perfil certo: ' + certo + ' | clicou em Pular';
// Nunca copie para outros perfis.

// ===== PASSO G: confirmar que foi publicado =====
await new Promise(r => setTimeout(r, 5000));
[...document.querySelectorAll('iframe')].map(x => { try { return x.contentDocument.body.innerText.replace(/\s+/g, ' ').slice(0, 500) } catch (e) { return '' } }).filter(Boolean).join('\n');
// Deve aparecer "Suas postagens" com o seu texto no topo e "Publicado: há X segundos" (ou "Pendente", em análise).
