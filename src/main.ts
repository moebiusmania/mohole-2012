import "./styles/main.scss";

// Utilities
const $ = (selettore: string): HTMLElement =>
  document.querySelector(selettore) as HTMLElement;

const $$ = (selettore: string): NodeListOf<HTMLElement> =>
  document.querySelectorAll(selettore);

// Precaricamento pagina
document.addEventListener("DOMContentLoaded", (): void => {
  $("header img").style.top = 0 + "px";
  $$("#servizi,nav,footer").forEach(
    (e: HTMLElement): string => (e.style.display = "block")
  );
  $("header .carica").style.display = "none";
});

// Accordion voci di menu
$$("nav a").forEach((link: HTMLElement): void => {
  link.addEventListener("click", (e: MouseEvent): void => {
    e.preventDefault();
    const target: HTMLElement = e.target as HTMLElement;
    const quale: string = target.getAttribute("href") as string;
    $$(`.info:not(${quale})`).forEach((info: HTMLElement): void =>
      info.classList.remove("aperto")
    );
    $(quale).classList.toggle("aperto");
  });
});

// Redirect al sito cliccato
const vai = (destinazione: string): string => (location.href = destinazione);

// Effetti al click su un riquadro
$$(".box a").forEach((link: HTMLElement, index: number): void => {
  link.addEventListener("click", (e: MouseEvent): void => {
    e.preventDefault();

    const target: HTMLElement = e.currentTarget as HTMLElement;
    const box: HTMLElement = target.parentNode as HTMLElement;

    const altri: HTMLElement[] = [...$$(`.box`)].filter(
      // @ts-ignore
      (e: HTMLElement, i: number): boolean => i !== index
    );

    let ritardo: number = 0;
    const aumento: number = 50;

    altri.forEach((elem: HTMLElement): void => {
      setTimeout((): void => elem.classList.add("out"), ritardo);
      ritardo += aumento;
    });

    box.classList.add("zoom");
    setTimeout(
      (): string => vai(link.getAttribute("href") as string),
      ritardo + 300
    );
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
