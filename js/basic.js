window.onload=function() {

	var glasses = document.querySelectorAll(".outer");
	var innerGlasses = document.querySelectorAll(".inner");
	var eyes = document.querySelectorAll(".eyes");
	var face = document.getElementById("face-wrapper");

	var firstDrool = document.querySelectorAll(".drool-1");
	var secondDrool = document.querySelectorAll(".drool-2");
	var thirdDrool = document.querySelectorAll(".drool-3");

	var snoozeInterval;
	var snoozeId;
	var wakeBool = false;

	face.addEventListener("click", blink, false);

	function blink(){
		clearTimeout(snoozeId);
		snooze();
		setTimeout(function () {
			for (var i = 0; i < glasses.length; i++) {
				glasses[i].style.backgroundColor = "#f7e7e2";
			}
			for (var i = 0; i < eyes.length; i++) {
				eyes[i].style.backgroundColor = "#000";
			}
			setTimeout(function () {
				for (var i = 0; i < glasses.length; i++) {
					glasses[i].style.backgroundColor = "#000";
				}
				for (var i = 0; i < eyes.length; i++) {
					eyes[i].style.backgroundColor = "#fff";
				}
			}, 100);
		}, 200);
	}

	function landingBlink(){
		setTimeout(function () {
			blink();
			setTimeout(function() {
				blink();
				}, 200);
		}, 400);
	}

	function snooze(){
		snoozeId = setTimeout(function() {

			//make face look asleep
			for (var i = 0; i < innerGlasses.length; i++) {
				innerGlasses[i].style.backgroundColor = "#f7e7e2";
			}
			for (var i = 0; i < glasses.length; i++) {
				glasses[i].style.backgroundColor = "#f7e7e2";
			}
			for (var i = 0; i < eyes.length; i++) {
				eyes[i].style.backgroundColor = "#000"
			}

			//now if you click the face, it will wake()
			wakeBool = false;
			face.removeEventListener("click", blink, false);
			face.addEventListener("click", wake, false);

			drool();
			snoozeInterval = setInterval(drool, 4500);
		}, 8000);
	}

	function drool(){
		//wakeBool will exit the nested setTimeout, so that it doesn't keep drooling
		//after the face has been clicked
		setTimeout(function() {
			if (!wakeBool) {
				firstDrool[0].style.backgroundColor = "#e6f7fb";
			}
			setTimeout(function() {
				if (!wakeBool) {
					secondDrool[0].style.backgroundColor = "#e6f7fb";
				}
				setTimeout(function() {
					if (!wakeBool) {
						thirdDrool[0].style.backgroundColor = "#e6f7fb";
					}
				}, 1000);
			}, 1000);
		}, 1000);

		resetFace();
	}

	function wake(){
		wakeBool = true;
		face.removeEventListener("click", wake, false);
		face.addEventListener("click", blink, false);
		landingBlink();
		for (var i = 0; i < innerGlasses.length; i++) {
			innerGlasses[i].style.backgroundColor = "#000";
		}
		resetFace();
		clearInterval(snoozeInterval);
		snooze();
	}

	function resetFace(){
		firstDrool[0].style.backgroundColor = "#f7e7e2";
		secondDrool[0].style.backgroundColor = "#f7e7e2";
		thirdDrool[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
	}

	landingBlink();

	snooze();

}
