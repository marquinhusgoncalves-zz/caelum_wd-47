$(document).ready(function(){

	var getCostumersSuccess = function(costumers){
		//console.table(costumers);
		$.each(costumers, function(index, costumer){
			console.log(costumer);
		});
	};

	var getCostumersError = function(){
		console.log("Error");
	};


	var getCostumers = function(){
		$.ajax({
			url: "http://www.mocky.io/v2/5598316e6344714e0c576736"
			, dataType: "jsonp"
			, success: getCostumersSuccess
			, error: getCostumersError

		});

	};

	getCostumers();

});