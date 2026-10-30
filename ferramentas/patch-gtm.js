const fs = require('fs');
let b = fs.readFileSync('build.js', 'utf8');
if (!b.includes('GTM-NBR5GF59')) {
  b += `
// ---------- Google Tag Manager (todas as páginas, exceto nada: 404 também) ----------
{
  const GTM = 'GTM-NBR5GF59';
  const head = '<!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer","' + GTM + '");</script><!-- End Google Tag Manager -->';
  const body = '<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' + GTM + '" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->';
  let n = 0;
  (function w(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) { if (e.name !== 'assets') w(p); continue; }
      if (!e.name.endsWith('.html')) continue;
      let h = fs.readFileSync(p, 'utf8');
      if (h.includes(GTM)) continue;
      h = h.replace('<meta charset="utf-8">', '<meta charset="utf-8">' + head).replace('<body>', '<body>' + body);
      fs.writeFileSync(p, h); n++;
    }
  })(OUT);
  console.log('GTM instalado em', n, 'páginas');
}
`;
  fs.writeFileSync('build.js', b);
}
console.log('ok');
