var INTERVAL = 50;
var DEBUG = false; //true;

var canvas;             // The canvas shown on the page.
var ctx;                // The context, used to access the canvas.

var SpriteRow = 0;      // Row of the graphic to show
var SpriteCol = 0;      // Col of the graphic to show
var MaxSpriteRow = 8;   // How many rows of images
var MaxSpriteCol = 8;  // How many columns of images
var tileWidth = 32;    // Size of each tile (32x32)
var tileHeight = 32;
var goal_found = false;
var goal_count = 0
var GOALTILE = 5;      // Which tile is the goal


// Start the sprite on an even boundary (divisible by 32)
var SpriteX = 96;      // Position of sprite on the canvas
var SpriteY = 96;
var SpriteWidth = 25;   // Width, Height of each subimage
var SpriteHeight = 25;

var WIDTH = 850;    // of the canvas
var HEIGHT = 640;    // of the canvas
var MAXROW = 20;
var MAXCOL = 26;
var moved = false; // Did the user move the square?
var myX = 100;  // Where the square should go on the canvas
var myY = 100;  // Where the square should go on the canvas
var moveAmount = 8;  // How many pixels to move per update.
var squareWidth = 10;   // Width, Height of the square
var squareHeight = 10;

var SpriteImage = new Image();   // Sprite sheet
SpriteImage.src   = "sprite_0.png";

var blueImage = new Image();   // Sprite sheet
blueImage.src   = "bluesquare.png";

var featureImage = new Image();   // feature sheet
featureImage.src   = "features.png";


// Set up a timer to execute every 50 ms.
// Begin code from 
//   http://www.w3schools.com/jsref/met_win_setinterval.asp
var myInterval;
// End code from www.w3schools.com

// A wall is a feature code of 1 
// (i.e. 1 place right of left-most feature image)
// Make this array 15 rows by 20 columns 
// (each square is 32x32, so 15*32, 20*32 = 480, 640
// 
// There are other ways to do this. I like this way because
// I can see where the features are in relation to each other.
// Each value corresponds to a subimage of "features.png"
// blank, wall, tree, ice, boulder, goal.
var myarray = [ 
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
  1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 
  1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 
  1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 5, 0, 0, 1, 0, 1, 0, 0, 0, 1, 
  1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 
  1, 0, 1, 0, 0, 2, 2, 2, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 
  1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 
  1, 5, 1, 1, 1, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 
  1, 0, 1, 0, 1, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 1, 0, 1, 0, 1, 1, 1, 
  1, 0, 1, 0, 1, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 
  1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 4, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 
  1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 5, 1, 0, 1, 
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 5, 1, 
  1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 
  1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 
  1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 
  1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 
  1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,];



// 
// Change the background screen color to green.
//
function green() {
  switch(goal_count)
  {
    case 0: 
      var q1 = prompt("Do you choose this is that?"); 
      console.log(q1);
      break;
    case 1: 
     var q2 = prompt("Stay in bed or go to work?");
     console.log(q2);
      break;
    case 3:
      var q3 = prompt("Snitch or not?")
      console.log(q3);
      break;
    case 4: 
     var q4 =  prompt("What have you accomplished?")
     console.log(q4);
      window.location.href = "my_game_lvl2.html";
      break;
  }
  goal_count++; 
  
  
}


function eraseSprite() {
  // erase sprite
  ctx.clearRect(myX, myY, 32, 32);
}


// Look at each tile location. Draw the tile.
function drawTiles() {
  var index = 0;
  var str;
  for (var r=0; r<MAXROW; r++) {
    // str = '';
    for (var c=0; c<MAXCOL; c++) {
      tile = myarray[index]; // [r* MAXCOL + c];
      // str += tile + ' ';
      ctx.drawImage(featureImage, 
         // What part of the image (0 because there is only one row of images)
         tile*tileWidth, 0, tileWidth, tileHeight, 
         // Where it goes on the canvas
         c*tileWidth, r*tileHeight, tileWidth, tileHeight); 

      index++;
    }
    // console.log(str);
  }
}


function drawSprite() {
  // drawImage( image to draw,
  //            topCornerX in that image, topCornerY in that image, 
  //            offsetToBottomX, offsetToBottomY,
  //            where to put it on the canvasX, where to put it on the canvasY,
  //            offsetToBottomCanvasX, offsetToBottomCanvasY )
  // ctx implies the canvas, so image to draw is the sprite sheet (or just
  //   an image)
  // The offsets are usually the same, but it will shrink/expand the subimage
  //   if they are different.
  // draw blue square
   ctx.drawImage(SpriteImage, 
     // What part of the image 
     SpriteCol*32, SpriteRow*32, SpriteWidth, SpriteHeight, 
     // Where it goes on the canvas
     myX, myY, SpriteWidth, SpriteHeight);
}


function Tick() {

  if (moved) {
    moved = false;
  }
}


function loadComplete() {
  console.log("Load is complete."); 
  canvas = document.getElementById("theCanvas");
  ctx = canvas.getContext("2d");

  drawTiles();
  drawSprite();
  //myInterval = self.setInterval("Tick()", INTERVAL);
}


// Do the new coordinates cause a collision?
function checkCollision(newX, newY) {
  // Use floor since result should be integer
  var tempRow = Math.floor(newY / tileWidth);
  var tempCol = Math.floor(newX / tileHeight);
  // So tempRow, tempCol are integer offsets into array.
  // Is there a non-0 feature there?
  if (myarray[tempRow * MAXCOL + tempCol] == 0)
    return true;

  // Did we get to the goal?
  
  if (!goal_found && (myarray[tempRow * MAXCOL + tempCol] == GOALTILE)) {
    green(); 

  }
  
  return false;
}

// What to do when the user presses a key.
function whenKeyPressed(key) {
    // Erase the sprite from its current location.
  eraseSprite();
  // Remember the old x,y values
  var newX = myX;
  var newY = myY;

  switch (key) {
    case 28:  // Right arrow was pressed 
      // Go right 
	  SpriteRow=1;
	  SpriteCol+=1;
	  if(SpriteCol>7){
		SpriteCol=0;
	  }
      newX = newX + moveAmount;
      if (newX + squareWidth > WIDTH)
        newX = WIDTH - squareWidth;
      moved = true;
      break;
    case 29:  // Left arrow, ASCII 29 
      // Go left 
	  SpriteRow=0
	  SpriteCol-=1;
	  if(SpriteCol<0){
		SpriteCol=7;
	  }
      newX = newX - moveAmount;
      if (newX < 0)
        newX = 0;
      moved = true;
      break;
    case 30:  // Up arrow was pressed 
      // Go up 
	  SpriteRow=2
	  SpriteCol-=1;
	  if(SpriteCol<0){
		SpriteCol=7;
	  }
      newY = newY - moveAmount;
      if (newY < 0)
        newY = 0;
      moved = true;
      break;
    case 31:  // Down arrow was pressed 
      // Go down 
	  SpriteRow=3;
	  SpriteCol+=1;
	  if(SpriteCol>7){
		SpriteCol=0;
	  }
      newY = newY + moveAmount;
      if (newY + squareHeight > HEIGHT)
        newY = HEIGHT - squareWidth;
      moved = true;
      break;
  }
  // Check the new coords
  // newX, newY is just the upper-left corner. 
  // Also check the upper-right, lower-left, and lower-right corners.
  if ((checkCollision(newX, newY)) && 
      (checkCollision(newX + SpriteWidth, newY)) &&
      (checkCollision(newX, newY + SpriteHeight)) && 
      (checkCollision(newX + SpriteWidth, newY + SpriteHeight))) {
    myX = newX;
    myY = newY;
  } else {
    console.log("could not move there");
  }
  // Show a new image
  drawSprite();    
}
