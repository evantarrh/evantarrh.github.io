window.onload=function() {
	console.log("Look ma, no jQuery!");
	var colorArray = ['#3cc', '#504', '#D6803C', '#D6819C', '#3CB2D6', '#51665A', '#604C66', '#B5AAB6', '#911', '#006']
	var randomColor = 1 + Math.floor(Math.random() * 10);

	var iconArray = [],
	    list = document.querySelectorAll(".icon");

	for (var i = 0; i < list.length; i++ ) {
	  iconArray[ i ] = list[ i ];
	}

	for (var i = 0; i < iconArray.length; i++ ) {
	  iconArray[ i ].style.color = colorArray[ randomColor ];
	}
}