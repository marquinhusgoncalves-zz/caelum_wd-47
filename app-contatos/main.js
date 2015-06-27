(function(){
	var box = {};

	//propriedades
	box.email = document.querySelector("#email");
	box.add = document.querySelector(".pure-button");
	box.list = document.querySelector("ul");
	//metodos

	box.validade = function(e){
		//console.log(e.target);
		//e.preventDefault();
		//console.log(this);
		e.preventDefault();
		console.log(box.email.value);
		if(/^(\w|\.|\-)+\@\w+\.\w{2,3}(.\w{2})?$/.test(box.email.value)) {
			//console.log("Válido");
			box.email.classList.remove("error");
			box.persist(box.email.value);
			box.email.value = "";
		}else {
			//console.log("Inválido")
			box.email.classList.add("error");
		}
		box.email.focus();
	};

	box.persist = function(mail){
		//console.log(mail);
		if(localStorage) {
			if(localStorage.contatos){
				var lista = JSON.parse(localStorage.contatos);
			}else {
				var lista = [];
			}
			lista.push({email:mail});
			localStorage.contatos = JSON.stringify(lista);
			box.refresh();
		}
	};

	box.refresh = function(){
		if(localStorage && localStorage.contatos) {
			var lista = JSON.parse(localStorage.contatos);
			console.table(lista);
		}
	};

	box.init = function(){
		//box.add.onclick = box.validade;
		box.add.addEventListener("click", box.validade);

	}();

	console.dir(box);

})();