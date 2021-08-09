/*=============================================
OBJETO CON PROPIEDADES DE LA CALCULADORA
=============================================*/

var p = {

	teclas: document.querySelectorAll("#calculadora ul li"),
	accion: null,
	digito: null,
	operaciones: document.querySelector("#operaciones"),
	ctdSignos: 0

}

/*=============================================
OBJETO CON MÉTODOS DE LA CALCULADORA
=============================================*/

var m = {

	inicio: function() {

		for (var i = 0; i < p.teclas.length; i++) {
			p.teclas[i].addEventListener("click", m.oprimirTecla);
		}

	},

	oprimirTecla: function(e) {
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
					p.operaciones.innerHTML += digito;
				}

				break;

			case "signo":

				p.ctdSignos++;

				if (p.ctdSignos == 1) {
					if (p.operaciones.innerHTML == 0) {
						p.operaciones.innerHTML = 0;
					} else {
						p.operaciones.innerHTML += digito;
					}
				}

				break;

			case "decimal":
				console.log("decimal");

				break;

			case "igual":

				console.log("igual");

				break;
		}
	},
	borrarCalculadora: function() {
		p.operaciones.innerHTML = 0;
	}

}

m.inicio();