var paisElegido = peru;
var nombrePais = "";
var historial = new Array();
var aleatorio = null;
var puntaje = 0;
var sede = null;
var nomPais = "";
var maximo;
var a;
var intentos =5;
$(document).ready(function() {
	pais();
	nombrePais = paisString();
	imagenCoder();
	comprobar();
});
function pais () {
	$("#eligeSede").on('change', function(){
		sede = ($("#eligeSede").val());
		if (sede === 1){
			paisElegido = mexico;
		} else {
			paisElegido = peru;
		}
		aleatorios();
	});
}
function paisString() {
	nomPais= (paisElegido === mexico) ? ("mexico") : ("peru");
	return nomPais;
}
function aleatorios() {
	maximo = paisElegido.length;
	var condicion = true;
	do {
		aleatorio = Math.floor(Math.random()*maximo)
		if(historial.length == maximo){
			aleatorio = -1
			condicion = false;
		} else if (historial.length == 0) {
			historial.push(aleatorio);
			condicion = false;
		} else {
			var nuevoNum = historial.indexOf(aleatorio);
			if (nuevoNum < 0){
				historial.push(aleatorio);
				condicion = false;
			}
			else {
				console.log(aleatorio+' repetido!')
			}
		}
	} while (condicion);
	return aleatorio;
}
function imagenCoder() {
	a =paisElegido[aleatorios()];
	var src = "fotos/"+paisString()+"/"+a.image;
	$("#fotoCoder").attr("src", src);
	return a;
}
function limpiar(){
	$("#nombreAlumna").val(null);
}
function comprobar() {
	$("#comprobarNombre").click(function(){
		if ($("#nombreAlumna").val().toLowerCase()===a.name.toLowerCase()) {
			limpiar();
		 	puntaje+=5;
		 	intentos = 5;
			$("#intentos").html("Tienes "+intentos+" intentos")
		 	$("#totalPuntaje").html(" "+puntaje+" puntos")
		 	$("#resultado").html("Genial! Acertaste :B")
		 	pais();
			imagenCoder();
			nombrePais = paisString();
		} else {
			if(intentos>1){
				puntaje--;
	 			intentos--;
	 			limpiar();
	 			$("#intentos").html("Tienes "+intentos+" intentos")
	 			$("#resultado").html("You know nothing, Jon Snow.")
			} else {
				intentos = 5;
				$("#intentos").html("Tienes "+intentos+" intentos")
			 	$("#totalPuntaje").html(+puntaje+" puntos")
			 	$("#resultado").html("Intentemoslo con alguien más")
			 	limpiar();
		 		pais();
		 		nombrePais = paisString();
				imagenCoder();
			}
		}
	});
}