function sumar(numero1, numero2) {
	return numero1 + numero2;
}

function restar(numero1, numero2, idName) {
	document.getElementById(idname).innerHTML = numero1 - numero2;
}

function multiplicar(numero1, numero2) {
	return numero1*  numero2
}

function dividir(numero1, numero2) {
	if(numero2 > 0)
	{
		return numero1/numero2;
	}
}

function myFunction(numero1,numero2) {
	//alert(numero1 + numero2);
 document.getElementById("demo").innerHTML = numero1 + numero2;
}