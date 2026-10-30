# Cuidar Idosos RJ — backup do site

Backup do site **https://cuidaridososrj.com.br** (HTML, CSS e JS estáticos) e de tudo o que foi usado para montá-lo e divulgá-lo.
Repositório privado. Não há senhas nem chaves aqui (conferido antes do envio).

## O que tem em cada pasta

| Pasta / arquivo | Para que serve |
|---|---|
| `site-seo/` | **O site publicado**, exatamente como está no ar (178 páginas HTML, `style.css`, `script.js`, `assets/`, `sitemap.xml`, `robots.txt`, `.htaccess`). É essa pasta que vai para o `public_html` da Hostinger. |
| `site-original/` | O site antes de qualquer mudança de SEO (ponto de partida do build). |
| `ferramentas/` | Gerador do site: `build.js` (+ `content*.js`, dados em `dados/`) lê `site-original/` e escreve `site-seo/`. |
| `postagens/` | Artes e textos das postagens (Google Meu Negócio, Facebook, Instagram) e o `log.md`. |
| `skills/` | Instruções usadas para automatizar postagens. |
| `olx-imagens/`, `imagens/`, `banner-*.png` | Imagens de apoio. |
| `manual-pdf/` | Manual em PDF. |
| `public_html-backup.zip` | Cópia do servidor antes das mudanças de SEO (17/10/2026). |
| `site-seo-publicar.zip` | Pacote antigo de publicação (17/10/2026). |
| `paginas-de-bairro.csv/.md`, `links-do-site.md`, `urls.txt`, `kit-diretorios-locais.md`, `mensagem-pedido-de-avaliacao.md` | Planilhas e textos de apoio. |

## Como reconstruir o site

Precisa de Node.js. A partir da raiz do projeto:

```bash
cd ferramentas
node build.js
```

O `build.js` apaga o conteúdo de `site-seo/` e gera tudo de novo (178 páginas, sitemap, dados estruturados, botões do Facebook/Instagram, faixa animada da home).

## Como visualizar localmente

```bash
cd site-seo
npx serve .
```

(ou abra `site-seo/index.html` no navegador; alguns caminhos usam `/` na raiz, então o servidor local é o mais fiel).

## Como publicar

Enviar o conteúdo de `site-seo/` para `public_html/` na Hostinger (Gerenciador de Arquivos > Upload > "Replace all").
