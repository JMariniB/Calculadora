/*=============================================
OBJETO CON PROPIEDADES DE LA CALCULADORA
=============================================*/

var p = {

	teclas: document.querySelectorAll("#calculadora ul li"),
	accion: null,
	digito: null


}

/*=============================================
OBJETO CON MÉTODOS DE LA CALCULADORA
=============================================*/

var m = {

	inicio: function(){

		for(var i = 0; i < p.teclas.length; i++){
			p.teclas[i].addEventListener("click",m.oprimirTecla);
		}

	},

	oprimirTecla: function(e){
		p.accion = e.target.getAttribute("class");
		p.digito = e.target.innerHTML;
		console.log("p.digito", p.digito);
		m.calculadora(p.accion);
	},

	calculadora:function(accion){
		switch(accion){
			case "numero":
				console.log("numero");

				break;

			case "signo":

				console.log("signo");

				break;

			case "decimal":
				console.log("decimal");

				break;

			case "igual":

				console.log("igual");

				break;
		}
	}

}

m.inicio();