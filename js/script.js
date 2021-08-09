/*=============================================
OBJETO CON PROPIEDADES DE LA CALCULADORA
=============================================*/

var p = {

	es: document.querySelectorAll("#calculadora ul li"),
	accion: null,
	digito: null,
	operaciones: document.querySelector("#operaciones"),
	ctdSignos: 0,
	ctdDecimales: false,
	resultado: false

}

/*=============================================
OBJETO CON MÉTODOS DE LA CALCULADORA
=============================================*/

var m = {

	inicio: function() {

		//Añadir eventos en botones de la calculador
		for (var i = 0; i < p.es.length; i++) {
			p.es[i].addEventListener("click", m.oprimire);
		}

	},

	edo: function() {

		//Añadir eventos de pulsación de edo
		document.addEventListener("keydown", m.oprimir);
	},

	oprimir:function(e){

		if (e.keyCode == 48 || e.keyCode == 96) {

			p.accion = "numero";
			p.digito = 0;
		}

		else if (e.keyCode == 49 || e.keyCode == 97) {

			p.accion = "numero";
			p.digito = 1;
		}

		else if (e.keyCode == 50 || e.keyCode == 98) {

			p.accion = "numero";
			p.digito = 2;
		}

		else if (e.keyCode == 51 || e.keyCode == 99) {

			p.accion = "numero";
			p.digito = 3;
		}

		else if (e.keyCode == 52 || e.keyCode == 100) {

			p.accion = "numero";
			p.digito = 4;
		}

		else if (e.keyCode == 53 || e.keyCode == 101) {

			p.accion = "numero";
			p.digito = 5;
		}

		else if (e.keyCode == 54 || e.keyCode == 102) {

			p.accion = "numero";
			p.digito = 6;
		}

		else if (e.keyCode == 55 || e.keyCode == 103) {

			p.accion = "numero";
			p.digito = 7;
		}

		else if (e.keyCode == 56 || e.keyCode == 104) {

			p.accion = "numero";
			p.digito = 8;
		}

		else if (e.keyCode == 57 || e.keyCode == 105) {

			p.accion = "numero";
			p.digito = 9;
		}

		else if (e.keyCode == 187 || e.keyCode == 107) {

			p.accion = "signo";
			p.digito = "+";
		}

		else if (e.keyCode == 189 || e.keyCode == 109) {

			p.accion = "signo";
			p.digito = "-";
		}

		else if (e.keyCode == 88 || e.keyCode == 106) {

			p.accion = "signo";
			p.digito = "*";
		}

		else if (e.keyCode == 111) {

			p.accion = "signo";
			p.digito = "/";
		}

		else if (e.keyCode == 190 || e.keyCode == 110) {

			p.accion = "decimal";
			p.digito = ".";
		}

		else if (e.keyCode == 13) {

			p.accion = "igual";
		}

		else if (e.keyCode == 8) {

			p.accion = "";
			m.borrarCalculadora();
		}

		else{
			p.accion = "";
			p.digito = "";

		}

		m.calculadora(p.accion,p.digito);
	},

	oprimire: function(e) {
		p.accion = e.target.getAttribute("class");
		p.digito = e.target.innerHTML;

		m.calculadora(p.accion, p.digito);
	},

	calculadora: function(accion, digito) {
		switch (accion) {
			case "numero":

				p.ctdSignos = 0;

				if (p.operaciones.innerHTML == 0) {
					p.operaciones.innerHTML = digito;
				} else {
					if (p.resultado) {
						p.resultado = false;
						p.operaciones.innerHTML = digito;
					} else {
						p.operaciones.innerHTML += digito;
					}
				}

				break;

			case "signo":

				p.ctdSignos++;

				if (p.ctdSignos == 1) {
					if (p.operaciones.innerHTML == 0) {
						p.operaciones.innerHTML = 0;
					} else {
						p.resultado = false;
						p.operaciones.innerHTML += digito;
						p.ctdDecimales = false;
					}
				}

				break;

			case "decimal":

				if (!p.ctdDecimales) {
					p.resultado = false;
					p.operaciones.innerHTML += digito;
					p.ctdDecimales = true;
				}

				break;

			case "igual":

				p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
				p.resultado = true;

				break;
		}
	},
	borrarCalculadora: function() {
		p.operaciones.innerHTML = 0;
		p.ctdDecimales = false;
		p.resultado
	}

}

m.inicio();
m.edo();