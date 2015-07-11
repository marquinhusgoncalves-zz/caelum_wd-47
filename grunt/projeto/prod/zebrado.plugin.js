(function($){

	//console.dir($.fn);
	$.fn.zebrado = function(corPar, corImpar){
		//console.log(this);
		//this.css("background", "tomato"); //$(this) melhor para leitura
		$(this).find("tbody tr:odd").css("background", corPar).end().find("tbody tr:even").css("background", corImpar);

	};

})(jQuery);