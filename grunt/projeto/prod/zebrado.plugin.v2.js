(function($){

	$.fn.zebrado = function(userSkin){
		var skin = {
			bgPar: "#dadada"
			,bgImpar: "#ccc"
			,fgPar: "#666"
			,fgImpar: "#000"
		}

		$.extend(skin, userSkin);

		$(this)
			.find("tbody tr:odd").css({background: skin.bgPar, color: skin.fgPar}).end()
			.find("tbody tr:even").css({background: skin.bgImpar, color: skin.fgImpar});

	};

})(jQuery);