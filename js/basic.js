$(document).ready(function() {
   console.log("I like butts");
   var randomColor = 1 + Math.floor(Math.random() * 10);
   console.log(randomColor);
   if (randomColor == 1) {
   	$('.icon').css('color', '#3cc')
   }
   if (randomColor == 2) {
   	$('.icon').css('color', '#6D4B31');
   }
   if (randomColor == 3) {
   	$('.icon').css('color', '#D6803C');
   }
   if (randomColor == 4) {
   	$('.icon').css('color', '#D6819C');
   }
   if (randomColor ==  5) {
   	$('.icon').css('color', '#3CB2D6');
   }
   if (randomColor ==  6) {
   	$('.icon').css('color', '#51665A');
   }
   if (randomColor == 7) {
   	$('.icon').css('color', '#604C66');
   }
   if (randomColor == 8) {
   	$('.icon').css('color', '#B5AAB6');
   }
   if (randomColor == 9) {
   	$('.icon').css('color', '#911');
   }
   if (randomColor == 10) {
   	$('.icon').css('color', '#006');
   }

});