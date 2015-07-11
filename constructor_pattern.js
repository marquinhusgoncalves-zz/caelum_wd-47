function Conta(titular, saldo){
	this.saldo = saldo || 0;
	this.titular = titular || null;
};

//console.log(new Conta());
Conta.prototype.deposita = function(valor){

	return this.saldo += valor || 0;
};
Conta.prototype.saca = function(valor){

	return this.saldo -= valor || 0;
};	



 var joao = new Conta("João Silva", 5000);

 var maria = new Conta("Maria Braga", 250);

 var pedro = new Conta("Pedro Mariano");

 console.log(joao);

 console.log(maria);

 console.log(pedro);

 String.prototype.bold = function(){
 	return "<strong>" + this + "</strong>";
 }