var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var iniciar = document.getElementById("inicio");
var detener = document.getElementById("parar");
iniciar.addEventListener("click", inicio);
detener.addEventListener("click", reinicio);
var imageUrlParar= "url(img/cancelar.svg)";
var imageUrliniciar= "url(img/iniciar.svg)";
var imageUrlPararPresionado ="url(img/cancelar_oprimido.svg)";
var imageUrliniciarPresionado= "url(img/iniciar_oprimido.svg)";


function inicio () {
	control = setInterval(cronometro,10);
	iniciar.style.backgroundImage=imageUrliniciarPresionado;
	detener.style.backgroundImage=imageUrlParar;
}
function parar () {
	clearInterval(control);
	detener.style.backgroundImage=imageUrlPararPresionado;
	iniciar.style.backgroundImage=imageUrliniciar;
    
}
function reinicio () {
	clearInterval(control);
	detener.style.backgroundImage=imageUrlPararPresionado;
	iniciar.style.backgroundImage=imageUrliniciar;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
}
function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
	
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}