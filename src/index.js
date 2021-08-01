
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



/**
 * 2012 version

// Variabili globali
var aperture = 400,
	ritardo = 0,
	aumento = 50,
	destinazione;

// Precaricamento pagina
$(window).on("load",function(){
	$("header img").animate({top:"0px"},200);
	$("#servizi,nav,footer").fadeIn(500);
	$("header .carica").hide();
});

// Accordion voci di menu
$("nav a").on("click",function(e){
	e.preventDefault();
	var quale = $(this).attr("href");
	$(".info").slideUp(aperture);
	if($(quale).hasClass("aperto")){
		$(quale).removeClass("aperto").slideUp(aperture);
	}else{
		$(quale).addClass("aperto").slideDown(aperture);
	}

});

// Effetti al click su un riquadro
$(".box a").on("click",function(e){
	e.preventDefault();
	var box = $(this).parent(".box");
	var altri = $(box).siblings();
	destinazione = $(this).attr("href");
	altri.each(function(i){
		$(this).delay(ritardo).transition({scale: 0,rotate:'45deg' });
		ritardo += aumento;
	});
	$(box).transition({scale:1.6},(aumento * altri.legth,vai));
});

// Redirect al sito cliccato
function vai(){
	location.href = destinazione;
}

*/