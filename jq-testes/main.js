$(document).ready(function(){
	console.log($("h1").text("jQuery").css("color", "red"));
	$("<img>").attr("src","http://lorempixel.com/200/200").appendTo("body");
	$("<h2>").text("Caelum").appendTo("body");
	$("<p>").text("Marcus").insertBefore("img");
	$("h2").parent().children().eq(3).next();//vai ate a imagem
	// $("h2").parent().closest("html").find("img").fadeOut().delay(3000).fadeIn();   efeitos
	$("h2").parent().closest("html").find("img").slideUp().delay(3000).slideDown();



});