function Worm() { // Worm class
 
  this.r = 0; //red
  this.g = 0; //green
  this.b = 0; //blue
  this.p = 0; //changing variable that works with the noise()
  this.breath  = 50 + 35 * sin(frameCount * 0.05);


  //*** i used the tutorial http://genekogan.com/code/p5js-perlin-noise/ to learn about noise and 

  this.display = function() {

    //*** Using the noise(),i create smooth random change in the position and color
   
    this.r = 255 * noise(this.p + 10);
    this.g = 255 * noise(this.p + 15);
    this.b = 255 * noise(this.p + 20);

    //These 3 variables varies the points positiom on the worm's head
    // the 'breath' make sure that the points stay on the head of the worm
    // while it getting bigger and smaller
    var cxr_1 = -(this.breath + 30) * 0.3;
    var cyr_1 = (this.breath - 30) * 0.3;
    var cxr_2 = this.breath * 0.3;


   
    noStroke();
    fill(this.r, this.g, this.b); // color changing using noise()
    ellipse(mouseX, mouseY, this.breath + 50, this.breath); //Drawing  the ellipse - the X and Y are moving by the niose and multipliers.

    this.p += 0.01; // changing the value that effect the noise()

    //creating points on the worm's head
    for (var r = 0; r < 5; r++) {
      stroke(random(100));
      strokeWeight(random(2, 5));
      point(mouseX + random(cxr_1, cyr_1), mouseY + random(cxr_2, -cxr_2));
    }
  }
  }
