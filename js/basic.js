window.onload=function() {

	var faceBlocks = document.querySelectorAll('.face-row div');

	for (var i = 0; i<faceBlocks.length; i++) {
 		faceBlocks[i].style.margin = "0.15rem 0.5rem";
 		faceBlocks[i].style.margin = "0rem";
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