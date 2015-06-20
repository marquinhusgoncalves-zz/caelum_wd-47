var idade = prompt("Digite sua idade");

if (idade <= 12) {
	console.log(idade, "é uma criança");
}else if (idade <= 17) {
	console.log(idade, "é um adolescente");
}else if (idade <= 59) {
	console.log(idade, "é um adulto");
}else{
	console.log(idade, "é um idoso");
}

//operador ternario

var resp = (idade <= 12) ?"criança" :(idade <= 17) ?"adolescente" :"adulto";
console.log(idade, resp);

//switch/case
var diaDaSemana = prompt("Digite o dia da semana");
switch (diaDaSemana) {
	case "1":
		console.log("Dom");
		break;
	case "2":
		console.log("Seg");
		break;
	case "3":
		console.log("Ter");
		break;
	default:
		console.log("Inválido");
		break;
}