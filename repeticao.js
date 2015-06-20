//Como descubrir os comandos 
//console.dir(Array.prototype);
var alfabeto = [];
var contador = 97;
while(contador <= 122) {
	console.log(contador, String.fromCharCode(contador));
	alfabeto.push(String.fromCharCode(contador));
	contador += 1;
}
console.dir(alfabeto);
console.log(alfabeto.join(", "));

for (var i = 0; i < alfabeto.length; i++) {
	console.log(i, alfabeto[i]);
};

for (var x = alfabeto.length - 1; x >= 0; x--) {
	console.log(x, alfabeto[x]);
};

console.log(frutas);
frutas.forEach(function(fruta) {
	console.log("chamou", arguments, fruta);
})

alfabeto.forEach(function(letra) {
	console.log(letra);
})