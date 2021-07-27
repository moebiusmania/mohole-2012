
import './styles/main.scss';

// Variabili globali
const aperture = 400; 
const ritardo = 0;
const aumento = 50;

// Utilities
const $ = (selettore) => document.querySelector(selettore);
const $$ = (selettore) => document.querySelectorAll(selettore);

// Precaricamento pagina
document.addEventListener('DOMContentLoaded', () => {
  $("header img").style.top = 0;
  $$("#servizi,nav,footer").forEach(e => e.style.display = 'block');
  $("header .carica").style.display = 'none';
});

// Accordion voci di menu
$$('nav a').forEach(link => {
  $$('.info').forEach(info => info.classList.remove('aperto'));
  link.addEventListener('click', e => {
    e.preventDefault();
    const quale = e.target.getAttribute('href');
    $(quale).classList.toggle('aperto');
  });
});