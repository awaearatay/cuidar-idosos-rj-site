'use strict';
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');
menuButton.addEventListener('click', () => { const opened = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(opened)); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded','false'); }));
document.addEventListener('keydown', event => { if(event.key === 'Escape'){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');} });
document.querySelectorAll('[data-service]').forEach(link => {link.href = 'https://wa.me/5521972025533?text=' + encodeURIComponent('Olá, Mariano! Gostaria de consultar o serviço de ' + link.dataset.service + '.');});
document.querySelector('#year').textContent = new Date().getFullYear();
const fullButton = document.querySelector('.fullscreen');
if (!document.fullscreenEnabled) fullButton.hidden = true;
fullButton.addEventListener('click', async () => { try { if(document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); } catch {document.querySelector('#status').textContent='A tela cheia não está disponível neste navegador.';} });
document.addEventListener('fullscreenchange', () => {const label = document.fullscreenElement ? 'Sair da tela cheia' : 'Entrar em tela cheia';fullButton.title=label;fullButton.setAttribute('aria-label',label);});

document.querySelectorAll('[data-region]').forEach(link => {link.href = 'https://wa.me/5521972025533?text=' + encodeURIComponent('Olá, Mariano! Gostaria de confirmar a disponibilidade de atendimento em ' + link.dataset.region + '.');});
