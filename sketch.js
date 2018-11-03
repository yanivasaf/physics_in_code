//Sketch 4

// press 'w' , 'g', or press the mouse to bring up the worm

var w1;// worm object

//creating variables for the forces
var wind;
var geyser;
var gravity;

var cs = []// array to create creatures


function setup() {
  noCursor();
  createCanvas(windowWidth, windowHeight);    

  //assigning a vector to each one of the forces
 wind = createVector(0.5,0);
 geyser = createVector(0,-0.8);
 gravity = createVector(0,0.3)
  
 // creating 6 creatures
  for (var i = 0; i < 6; i++) {
    cs[i] = new Creature();
  }
 //creating a worm
  w1 = new Worm();
 
} 

function draw() {
  
  background(50);
  
 
  // going through the creatures - for each one:
  for (var i = 0; i < cs.length; i++) {
  //applying gravity
    cs[i].force(gravity);
 //if press 'w' - applying wind
   if (key == 'w'){
       cs[i].force(wind);
    }
 // if press 'g' - applying geyser
    if (key == 'g'){
       cs[i].force(geyser);
    }

    if (mouseIsPressed){
    	cs[i].mouse();
    	w1.display();
    }

  cs[i].update();
  cs[i].checkEdge();
  cs[i].display();
  
  }

 }
