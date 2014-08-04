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
		setTimeout(function () {
			for (var i = 0; i < iconArray.length; i++ ) {
				iconArray[i].classList.add("hoveredicon");
			};
		}, 600);
		setTimeout(function () {
			for (var i = 0; i < iconArray.length; i++ ) {
				iconArray[i].classList.remove("hoveredicon");
			};
		}, 750);
		setTimeout(function () {
			for (var i = 0; i < iconArray.length; i++ ) {
				iconArray[i].classList.add("hoveredicon");
			};
		}, 900);
		setTimeout(function () {
			for (var i = 0; i < iconArray.length; i++ ) {
				iconArray[i].classList.remove("hoveredicon");
			};
		}, 1050);
	}

	wink();

}