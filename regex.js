var cepDigitado = prompt("Digite seu CEP");
console.log(
	/^\d{5}\-?\d{3}$/.exec(cepDigitado)
	);
console.log(
	/^\d{5}\-?\d{3}$/.test(cepDigitado)
	);
console.log(
	cepDigitado.match(/^\d{5}\-?\d{3}$/)
	);
console.log(
	cepDigitado.replace(/\<\/?\w+\>/g, "")
	);