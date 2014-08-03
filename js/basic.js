window.onload=function() {
	console.log("Look ma, no jQuery!");
	var colorArray = ['#3cc', '#504', '#D6803C', '#D681AB', '#3CB2D6', '#3CB2A1', '#604C66', '#B5AAB6', '#911', '#704807']
	var randomColor = Math.floor(Math.random() * 9);

	var iconArray = [],
	    list = document.querySelectorAll(".icon");

	for (var i = 0; i < list.length; i++ ) {
	  iconArray[ i ] = list[ i ];
	}

	for (var i = 0; i < iconArray.length; i++ ) {
	  iconArray[ i ].style.color = colorArray[ randomColor ];
	}

	function wink(){
		console.log("for the love of god test");
		setTimeout(function () {
			console.log("test");
			for (var i = 0; i < iconArray.length; i++ ) {
				iconArray[i].addClass("hover");
				console.log("Test1");
			};
		}, 900);
		setTimeout(function () {
			console.log("testy");
			for (var i = 0; i < iconArray.length; i++ ) {
				iconArray[i].removeClass("hover");
				console.log("Test2");
			};
		}, 1000);
	}

	wink();

}