function carros($scope){
	//$scope.empresa = "Roma";
	$scope.addItem = function(){
		//alert("Clicou");
		if(localStorage){
			var carro = {
				fabricante: $scope.fabricante 
				,modelo: $scope.modelo
				,ano: $scope.ano
			};
			if(localStorage.carros){
				var listaCarros = JSON.parse(localStorage.carros);
			}else {
				var listaCarros = [];
			}
			listaCarros.push(carro);
			localStorage.carros = JSON.stringify(listaCarros);
		}
	};

	$scope.updateList = function(){
		$scope.fabricante = "";
		$scope.modelo = "";
		$scope.ano = "";
		if(localStorage && localStorage.carros){
			$scope.carros = JSON.parse(localStorage.carros)
		} 
	};

	$scope.removeItem = function(id, event){
		//console.log(id);
		event.preventDefault();
		var listaCarros = JSON.parse(localStorage.carros);
		listaCarros.splice(id,1);
		localStorage.carros = JSON.stringify(listaCarros);
		$scope.updateList();
	};

	$scope.editItem = function(id, event){
		event.preventDefault();
		$scope.fabricante = $scope.carros[id].fabricante;
		$scope.modelo = $scope.carros[id].modelo;
		$scope.ano = $scope.carros[id].ano;
		$scope.btAdd = false;
		$scope.btUpd = true;
		$scope.currentId = id;
	};

	$scope.updateItem = function(){
		var carro = {
			fabricante: $scope.fabricante 
			,modelo: $scope.modelo
			,ano: $scope.ano
		};
		var listaCarros = JSON.parse(localStorage.carros);
		listaCarros[$scope.currentId] = carro;
		localStorage.carros = JSON.stringify(listaCarros);
		$scope.updateList();
		$scope.btAdd = true;
		$scope.btUpd = false;
	};

	$scope.init = function(){
		$scope.empresa = "Roma";
		$scope.btAdd = true;
		$scope.updateList();
	}();

}