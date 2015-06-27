var APP = (function(){
	console.log("init module");
	var box = {};
	box.count = 0;
	box.addCount = function(){
		return box.count += 1;
	}
	box.getCount = function(){
		return box.count;
	}
	box.resetCount = function() {
		return box.count = 0;
	}

	return {
		add: box.addCount,
		get: box.getCount,
		reset: box.resetCount
	};
})();