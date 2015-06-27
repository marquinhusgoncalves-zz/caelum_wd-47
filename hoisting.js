var escopo = "global";
function executa() {
	console.log(escopo);
	var escopo = "local";
	console.log(escopo);
}
executa();