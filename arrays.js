var frutas = ["uva", "banana", "abacate"];
frutas.push("laranja");//adiciona no final
frutas.unshift("abacaxi");//adiciona no inicio
frutas.splice(2, 0, "pêra");//adiciona e mantem 
frutas.splice(1, 1, "morango")//adiciona e remove
frutas.pop();//remove a última
frutas.shift();//remove o primeiro

console.log(frutas);
console.log(frutas.sort());
console.log(frutas.reverse());
console.log(frutas.length);

frutas = frutas.concat(["maça", "mamão"]);
console.log(frutas);

console.dir(frutas);//mostra em lista
console.log(frutas[1]);

console.log(frutas.join("; "));
var fruits = "melão;melancia;kiwi";
console.log(fruits.split(";"));