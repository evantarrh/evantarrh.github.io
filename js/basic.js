$(document).ready(function() {

   var colorArray = ['#3cc', '#6DFB31', '#D6803C', '#D6819C', '#3CB2D6', '#51665A', '#604C66', '#B5AAB6', '#911', '#006']
   var randomColor = 1 + Math.floor(Math.random() * 10);
   $('.icon').css('color', colorArray[randomColor]);
   

});