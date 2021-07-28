
import './styles/main.scss';

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
  link.addEventListener('click', e => {
    e.preventDefault();
    const quale = e.target.getAttribute('href');
    $$(`.info:not(${quale})`).forEach(info => info.classList.remove('aperto'));
    $(quale).classList.toggle('aperto');
  });
});

// Redirect al sito cliccato
const vai = (destinazione) => location.href = destinazione;

// Effetti al click su un riquadro
$$('.box a').forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const box = e.currentTarget.parentNode;
    const altri = [...$$(`.box`)].filter((e,i) => i !== index);
    
    let ritardo = 0;
    const aumento = 50;

    altri.forEach((elem,i) => {
      setTimeout(() => elem.classList.add('out'), ritardo);
      ritardo += aumento;
    });

    box.classList.add('zoom');
    setTimeout(() => vai(link.getAttribute('href')) , ritardo + 300);
  });
});