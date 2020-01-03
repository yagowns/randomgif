//lista de gifs possiveis a carregar na homepage
var showcaseArray = [
	'img/1.gif',
	'img/2.gif',
	'img/3.webp',
	'img/4.gif',
];

$(document).ready(function(){
    var randomShowcase = showcaseArray[Math.floor(Math.random()*showcaseArray.length)];
    $('#showcase').attr({ src: randomShowcase});
});