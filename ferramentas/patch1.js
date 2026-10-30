const fs = require('fs');
let c = fs.readFileSync('content.js', 'utf8');
if (!c.includes('content-extra')) {
  c = c.replace('module.exports = { services, guides, U };', "services.push(...require('./content-extra.js'));\nmodule.exports = { services, guides, U };");
  fs.writeFileSync('content.js', c);
}
let b = fs.readFileSync('build.js', 'utf8');
const rep = (a, z) => { if (!b.includes(a)) { console.log('NAO ACHOU:', a.slice(0, 60)); return; } b = b.replace(a, z); };
rep("<a href=\"/acompanhante-de-idosos-em-consultas-e-passeios-rj.html\">Consultas e passeios</a></div>';",
  "<a href=\"/acompanhante-de-idosos-em-consultas-e-passeios-rj.html\">Consultas e passeios</a>' +\n  '<a href=\"/terapia-naturopatia-para-idosos-rj.html\">Terapeuta naturopata</a></div>';");
rep("<h3>Links rápidos</h3><a href=\"/guias.html\">Guias para famílias</a>",
  "<h3>Links rápidos</h3><a href=\"/sobre-mariano-cuidador-tecnico-de-enfermagem-naturopata.html\">Sobre Mariano</a><a href=\"/guias.html\">Guias para famílias</a>");
rep("    faqLD(p.faq),\n    { ...crumbs",
  "    ...(p.about ? [{ '@type': 'Person', '@id': U + '/#mariano', name: 'Mariano', jobTitle: 'Cuidador de idosos, técnico de enfermagem e terapeuta naturopata', worksFor: { '@id': U + '/#empresa' }, url }] : []),\n    faqLD(p.faq),\n    { ...crumbs");
rep("[isGuide ? 'Guias' : 'Serviços', isGuide ? U + '/guias.html' : U + '/#servicos']",
  "[isGuide ? 'Guias' : p.about ? 'Sobre' : 'Serviços', isGuide ? U + '/guias.html' : U + '/#servicos']");
rep("|plantao-)/", "|plantao-|terapia-|sobre-)/");
rep("'<p>Para decidir com mais segurança, leia os guias:",
  "'<p>À frente da CUIDAR IDOSOS está <a href=\"/sobre-mariano-cuidador-tecnico-de-enfermagem-naturopata.html\">Mariano, cuidador de idosos, técnico de enfermagem e terapeuta naturopata</a>. Conheça também a <a href=\"/terapia-naturopatia-para-idosos-rj.html\">terapia naturopata para idosos</a>, como apoio complementar ao cuidado.</p>' +\n    '<p>Para decidir com mais segurança, leia os guias:");
fs.writeFileSync('build.js', b);
console.log('patch ok');
