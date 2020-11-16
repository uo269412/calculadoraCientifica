class Calculadora {
	constructor() {
		this.valorEnMemoria = 0;
	}
	añadirAResultados(valor) {
		document.getElementById('ventanaResultados').value += valor;
	}	

	borrarDatos(valor) {
		document.getElementById('ventanaResultados').value = valor;
	}

	calcularResultados() {
		try {
			var result = eval(document.getElementById('ventanaResultados').value);
			document.getElementById('ventanaResultados').value = result;
		} catch (err) {
			document.getElementById('ventanaResultados').value = "Error = " + err;
		}
	}

	calcularMas() {
		this.añadirAResultados("+");
		this.añadirAResultados(this.valorEnMemoria);
		this.calcularResultados();
	}
	calcularMenos() {
		this.añadirAResultados("-");
		this.añadirAResultados(this.valorEnMemoria);
		this.calcularResultados();
	}
	meterEnMemoria() {
		var result = eval(document.getElementById('ventanaResultados').value);
		document.getElementById('ventanaResultados').value = result;
		this.valorEnMemoria = result;
	}
}

class CalculadoraCientifica extends Calculadora {
    constructor (){
		super();
	}

	borrarValor() {
		var valoresActuales = document.getElementById('ventanaResultados').value;
		document.getElementById('ventanaResultados').value = valoresActuales.substring(0, valoresActuales.length - 1);
	}

	exponencial(form) {
		document.getElementById('ventanaResultados').value = Math.exp(document.getElementById('ventanaResultados').value);
	}

	elevarACuadrado() {
		document.getElementById('ventanaResultados').value = eval(document.getElementById('ventanaResultados').value) * eval(document.getElementById('ventanaResultados').value);
	}

	cambiarSignos() {
	if(document.getElementById('ventanaResultados').value.substring(0, 1) == "-") {
		document.getElementById('ventanaResultados').value = document.getElementById('ventanaResultados').value.substring(1, document.getElementById('ventanaResultados').value.length);
	} else {
		document.getElementById('ventanaResultados').value = "-" + document.getElementById('ventanaResultados').value;
		}
	}

	raiz() {
		document.getElementById('ventanaResultados').value = Math.sqrt(document.getElementById('ventanaResultados').value);
	}

	logaritmoNeperiano() {
		document.getElementById('ventanaResultados').value = Math.log(document.getElementById('ventanaResultados').value);
	}

	coseno() {
		document.getElementById('ventanaResultados').value = Math.cos(document.getElementById('ventanaResultados').value);
	}

	seno() {
		document.getElementById('ventanaResultados').value = Math.sin(document.getElementById('ventanaResultados').value);
	}

	tangente() {
		document.getElementById('ventanaResultados').value = Math.tan(document.getElementById('ventanaResultados').value);
	}

	potencial() {
		document.getElementById('ventanaResultados').value = Math.pow(document.getElementById('ventanaResultados').value);
	}

	arcocoseno() {
		document.getElementById('ventanaResultados').value = Math.acos(document.getElementById('ventanaResultados').value);
	}

	arcoseno() {
		document.getElementById('ventanaResultados').value = Math.asin(document.getElementById('ventanaResultados').value);
	}

	arcotangente() {
		document.getElementById('ventanaResultados').value = Math.atan(document.getElementById('ventanaResultados').value);
	}

	logaritmoBase10() {
		document.getElementById('ventanaResultados').value = Math.log10(document.getElementById('ventanaResultados').value);
	}
}
var calculadoraScript = new CalculadoraCientifica();

