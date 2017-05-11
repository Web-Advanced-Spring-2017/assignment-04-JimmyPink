var socket ;
var img ;
var trees = [];
var imageX = 10;
var imageY = 30;
var start = true; 
var randomTree;
var title;
var titleX= 10;
var titleY= 30;

var song;

// // var x = random(low number, high number)
// preloads all of the images could be put in setup also
function preload(){
	for (var i = 0; i < 56; i++) {
		trees[i] = loadImage('images/tree' + i + '.jpg');
	}
	song = loadSound('Dynamic-good-electronic-music.mp3');

	title=loadImage('images/title.jpg');


// // img = loadImage('images/tree0.jpg');	
}

function setup(){
// picks a random number and ave. down for a whole number
createCanvas(1200, 800);
 randomTree = floor(random(0,2)) ;

 frameRate(10); // speed of the images twitching
song.play();
// background(255);
// text("Drive-by Trees of NYC");
// delay(1000);
}

// // socket = io.connect('http//localhost:3000');

function draw(){
	if (start){
		
	background(150);
	
	for(var i = 0 ; i < 56 ; i++) {

		image(title, titleX, titleY);
		titleX = titleX + .5;
		// var randomTree = floor(random(0,19)) ;
		image(trees[randomTree], imageX, imageY) ;

		var randomTree2 = floor(random(0,55)) ;
		image(trees[randomTree2], imageX-i*250, imageY) ;
		// frameRate(10);  -i*410
	}
	// speed of pictures sroll
	imageX = imageX + 2;
	if(imageX > 2000) { // scrolls across and resets
		imageX = 0 ;
	}
  }   else { 
		noLoop();}
		
}

	function mousePressed(){
		start = !start;
			song.stop();
   
  } 
// function Title(){
	// rect(500, 500, imageX, imageY,);
	// background(255);
	// text("Drive-by Trees of NYC");
// }
	




