(function(){
	var img = document.createElement("img");
	console.log(img);
	img.setAttribute("src", "http://www.lorempixel.com/200/200");
	img.alt = "Texto Alternativo";
	document.body.appendChild(img);
	var h2 = document.createElement("h2");
	var conteudo = document.createTextNode("Caelum");
	h2.appendChild(conteudo);
	console.log(h2);
	document.body.appendChild(h2);

	var p = document.createElement("p");
	p.textContent = "Marcus Gonçalves";
	document.body.appendChild(p);

	var ul = document.createElement("ul");
	for (var i = 1; i <= 10; i++) {
		var li = document.createElement("li");
		li.textContent = "Item " + i;
		ul.appendChild(li);
	}
	document.body.appendChild(ul);

	var cursos = [{cod:"FJ-11", instrutor: "Jovian"}, {cod:"WD-43", instrutor: "Marco"}];
	var tbody = document.createElement("tbody");
	cursos.forEach(function(curso){
		var tr = document.createElement("tr");
		var tdCod = document.createElement("td");
		var tdInstru = document.createElement("td");
		tdCod.textContent = curso.cod;
		tdInstru.textContent = curso.instrutor;
		tr.appendChild(tdCod);
		tr.appendChild(tdInstru);
		tbody.appendChild(tr);
	});
	document.querySelector("table").appendChild(tbody);

	//Navegando pelo DOM
	document.querySelector("h1").parentNode.parentNode.children[0].firstElementChild.nextElementSibling.previousElementSibling.parentNode.nextElementSibling.firstChild.nextElementSibling.textContent="Javascript";

	document.querySelector("img").style.border="5px solid";
	document.querySelector("h1").style.backgroundColor="tomato";

})();