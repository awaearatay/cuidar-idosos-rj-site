---
name: postar-google-cuidar-idosos
description: Cria a arte de uma postagem no padrão visual do Cuidar Idosos (cuidaridososrj.com.br) e publica no Perfil da Empresa no Google (Google Meu Negócio / Google Business / Google Local), no perfil "Cuidador de Idosos RJ Mariano". Use sempre que o usuário pedir para criar, fazer, gerar ou publicar um post, banner, arte ou atualização do Cuidar Idosos ou do cuidador de idosos no Google, ou mandar uma imagem e pedir para "publicar no Google". "Cuidar idosos" e "cuidador de idosos" SEMPRE significam o site cuidaridososrj.com.br e esse negócio.
---

# Postar no Google: Cuidar Idosos

Negócio: **Cuidar Idosos**, site https://cuidaridososrj.com.br/. É o Mariano, cuidador de idosos e técnico de enfermagem em Bento Ribeiro, Rio de Janeiro. WhatsApp **(21) 97202-5533**.
Perfil certo no Google: **"Cuidador de Idosos RJ Mariano"**, código **10765087741570372227**.
A conta tem outros perfis com nomes parecidos, que NÃO são para postar: "cuidaridosos" (Itaguaí) e "Cuidar Idosos" (suspenso), além de outros negócios.

Exemplo completo de uma postagem real: `references/exemplo-postagem.md` e `assets/exemplo-mobilidade-autonomia.jpg`.

## 1. Conteúdo

Se o usuário mandou uma arte pronta, pule para o passo 3. Senão, defina:
- **kicker**: o tema, em MAIÚSCULAS, até ~25 letras (ex.: "MOBILIDADE E AUTONOMIA").
- **titulo**: 2 a 4 linhas curtas, até ~17 letras cada, terminando em ponto.
- **subtitulo**: uma frase de até ~45 letras.
- **descrição** da postagem, de 200 a 400 letras. Ela fala do serviço no Rio de Janeiro e termina com "Fale com Mariano pelo WhatsApp (21) 97202-5533 ou acesse cuidaridososrj.com.br".

Regras: não invente preços, depoimentos, credenciais, prazos nem promessas médicas. Escreva em português do Brasil, com tom acolhedor e direto.

## 2. Arte

1. **Foto**: precisa de uma foto realista de uma pessoa idosa, de preferência com cuidador, em cena clara (casa, varanda, parque, hospital). A pessoa deve ficar do centro para a direita, porque o lado esquerdo recebe o texto. Use a foto que o usuário mandar ou gere uma com a ferramenta de imagem que você tiver. Não use fotos com marca d'água nem de bancos pagos.
2. Crie um `config.json`, igual ao do exemplo em `references/exemplo-postagem.md`.
3. Rode `node scripts/gerar-arte.js config.json`. O script precisa do Node e do Chrome ou Edge instalados (se o navegador não for achado, defina `CHROME_PATH`). Ele gera um PNG de 1080x1350 com o layout do exemplo:
   - logo do Cuidar Idosos (`assets/logo-cuidar-idosos.png`) numa caixa branca;
   - kicker verde com sublinhado e título azul-marinho sobre o painel claro;
   - painel azul-marinho embaixo com a faixa verde diagonal, "CUIDAR IDOSOS", o subtítulo e o WhatsApp.
4. **Olhe a imagem gerada** antes de postar. Confira se o texto não está cortado, se o rosto não ficou coberto e se não há erro de português. Se o rosto ficou coberto, ajuste `focoFoto` (ex.: "80% 30%").

## 3. Publicar no Google (navegador com a conta do usuário já logada)

Nunca digite senha. Se o Google pedir login, peça ao usuário para entrar. Os trechos de JavaScript estão em `scripts/gbp-snippets.js` (passos A a G). Rode cada um com a ferramenta de executar JavaScript, na aba `https://business.google.com/locations`.

1. Rode `node scripts/servir-imagem.js caminho/da/arte.png` em segundo plano. Ele serve a arte em `http://127.0.0.1:8765/` e mostra o tamanho do arquivo em bytes.
   - Antes, encerre qualquer servidor antigo na porta 8765. Se a porta estiver ocupada, o script dá erro. Se você ignorar esse erro, o servidor velho continua servindo a arte ANTERIOR e ela é postada no lugar da nova (já aconteceu).
   - No passo B, confira que os bytes anexados são iguais ao tamanho mostrado aqui.
   - Por que esse passo: o editor do Google fica num iframe, e enviar o arquivo pelo seletor normal de upload NÃO funciona nele. A arte entra por fetch + DataTransfer.
2. Abra `https://business.google.com/locations` (o link /n/... antigo dá 404).
3. **Passo A**: abre o editor no perfil 10765087741570372227. Não confie em "find" ou ref para achar o botão "Criar postagem", porque uma vez ele apontou para a linha errada. O trecho localiza a linha pelo código.
4. **Passo B**: anexa a arte. Se der erro ou ficar parado, o Chrome está pedindo "acesso à rede local". Peça ao usuário para clicar em **Permitir** e rode de novo.
5. **Passo C**: foca a descrição. Depois **digite** o texto com a ferramenta de teclado.
6. **Passo D1**: clica em "Botão" e devolve as coordenadas do seletor. Clique ali com o mouse. **Passo D2**: seleciona "Saiba mais" por JS e foca o campo de link. Depois **digite** `https://cuidaridososrj.com.br/`.
7. **Passo E**: confere as fotos (tem que ser 1), o texto, o botão e o link. **Passo E2**: publica, clicando por JS no botão "Postagem". O usuário pediu a publicação, então não precisa pedir de novo, mas só publique depois da conferência. Se aparecer "Descartar as alterações?", clique em **Cancelar**.
8. **Passo F**: na tela "Copiar postagem", confere o perfil e clica em **Pular**, também por JS. Nunca copie para outros perfis.
9. **Passo G**: confirme que a postagem aparece em "Suas postagens" ("Publicado: há X segundos" ou "Pendente", em análise).
10. Encerre o servidor (`servir-imagem.js`) e feche a aba que abriu.

Dicas:
- A captura de tela às vezes não mostra o editor (ele fica num iframe por cima) ou trava. Confie no que os trechos de JS informam.
- Se usar uma arte pronta do usuário, procure o arquivo em Downloads ou na pasta que ele indicar. Confira que é a mesma imagem, abrindo o arquivo.
- Clique por coordenada na lista do botão já escolheu "Inscrever-se" no lugar de "Saiba mais". Por isso a escolha é feita pelo passo D2.
- Se postar no perfil errado, NÃO apague sozinho. Avise o usuário qual perfil recebeu a postagem por engano, para ele excluir.

## 4. Relatório ao usuário

Diga em poucas linhas:
- em qual perfil publicou e o status ("Publicado" ou "Pendente");
- o texto usado;
- o botão e o link;
- onde está salvo o PNG da arte.

Não diga que publicou sem ter visto a confirmação do passo G.
