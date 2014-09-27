window.onload=function() {
	var colorArray = ['#3cc', '#504', '#D6803C', '#D681AB', '#3CB2D6', '#3CB2A1', '#604C66', '#B5AAB6', '#911', '#704807']
	var randomColor = Math.floor(Math.random() * 9);

	var faceBlocks = document.querySelectorAll('.face-row div');

	for (var i = 0; i<faceBlocks.length; i++) {
 		faceBlocks[i].style.margin = "0.15rem 0.5rem";
 		faceBlocks[i].style.margin = "0rem";
	}

	var iconArray = [],
	    list = document.querySelectorAll(".icon");

	for (var i = 0; i < list.length; i++ ) {
	  iconArray[ i ] = list[ i ];
	}

	for (var i = 0; i < iconArray.length; i++ ) {
	  iconArray[ i ].style.color = colorArray[ randomColor ];
	}

	var glasses = document.querySelectorAll(".outer");
	var eyes = document.querySelectorAll(".eyes");



	function blink(){
		setTimeout(function () {
			for (var i = 0; i < glasses.length; i++ ) {
				glasses[i].style.backgroundColor = "#f7e7e2";
				if (i < 4) {
					eyes[i].style.backgroundColor = "#000";
				}
			};
		}, 600);
		setTimeout(function () {
			for (var i = 0; i < glasses.length; i++ ) {
				glasses[i].style.backgroundColor = "#000";
				if (i < 4) {
					eyes[i].style.backgroundColor = "#fff";
				}
			};
		}, 700);
		setTimeout(function () {
			for (var i = 0; i < glasses.length; i++ ) {
				glasses[i].style.backgroundColor = "#f7e7e2";
				if (i < 4) {
					eyes[i].style.backgroundColor = "#000";
				}
			};
		}, 800);
		setTimeout(function () {
			for (var i = 0; i < glasses.length; i++ ) {
				glasses[i].style.backgroundColor = "#000";
				if (i < 4) {
					eyes[i].style.backgroundColor = "#fff";
				}
			};
		}, 900);
	}


	blink();

}