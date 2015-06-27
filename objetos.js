var carro = {};

//Propriedades dot notation
//objeto.propriedade = valor; - define
//objeto.propriedade; - recupera

carro.cor = "vermelho";
carro.modelo = "Fox";
carro.fabricante = "VW"

//Propriedades brackets notation
//objeto["propriedade"] = valor; - define
//objeto["propriedade"]; - recupera

carro["ano"] = 2015;
carro["portas"] =5;
carro["motor"] = 1.6;

console.log(carro);

//Métodos dot notation
//objeto.metodo = function(){};
//objeto.metodo();

carro.ligar = function(){
	return("Ligando carro");
}

carro.desligar = function(){
	return("Desligando carro");
}

var pessoa = {
	nome: "João",
	sexo: "M",
	idade: 20,
	altura: 1.80,
	falar: function(){
		return this.nome + " disse bla bla";
	},
	dormir: function(){
		return this.nome + " esta dormindo zzz";
	}
};

//console.log(pessoa);

