$(document).ready(function(){

	var getCostumersSuccess = function(costumers){
		//console.table(costumers);
		$.each(costumers, function(index, costumer){
			//console.log(costumer);
			var source = $("#linha").html();
			var template = Handlebars.compile(source);
			var html = template({cliente:costumers});
			//console.log(html);
			$("tbody").html(html);
			$("table").zebrado({bgPar: "purple", fgPar: "white"}); //$("table").zebrado("green", "yellow");para funcionar com zebrado.plugin
		});
	};

	var getCostumersError = function(){
		//console.log("Error");
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