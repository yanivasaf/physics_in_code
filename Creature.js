// I looked at Shiffman'a force tutorials and used some stuff from there in here.

function Creature () {
  //random mass vector is created for each creature. we use the mass as part of an equation with an external force . the mass is also controling the size of the creatue
  // and by that we create a relationship between the size and the mass.
  this.mass = random(0.2,8);
  
  this.position = createVector(width/2,height/2);//Start position of the creature middle of the screen
  this.velocity = createVector(0,0);//creating velocity vector
  this.acceleration =createVector(0,0) ;//creating acceleration  vector
  this.topspeed = 8;// create a limit variable

  // this method recive different forces, divide them by the mass and adding to the acc.
  this.force = function(f){
    var t = p5.Vector.div(f, this.mass); //creaing a vector which is the result of the force divided by the mass.
    this.acceleration.add(t);//adding the variable to the acc
    t.mult(0);//restarting he variable
  }
  
  // this method reciving mouse's X and Y location, and calculates the creature way towards it
  this.mouse = function(){
 
  	var mouse = createVector(mouseX,mouseY);// creating a vector with mouse's X and Y
    this.acceleration = p5.Vector.sub(mouse,this.position);//calculating the vector between the mouse to the creature
    this.acceleration.setMag(0.2);// setting up the magnitude (same thing as doing normalize and the mult).
  }
  // this method updates the creature's position
  this.update = function() {
   
    this.velocity.add(this.acceleration);//adding the acc to the vel
    this.velocity.limit(this.topspeed);//limiting the velocity to 8
    this.position.add(this.velocity);// adding the vel to the position
    this.acceleration.mult(0);// reseting the acc
  }
  // this method checks if the creature gets to one of the edges, and if so, reversing the velocity
  this.checkEdge = function(){
     if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }else if (this.position.y < 0) {
      this.velocity.y *= -1;
      this.position.y = 0;
  }
}

  //this method is drawing the creature
  //mass is used to affect the size
  this.display = function() {
     beginShape();
    fill(256,86,0);
    vertex(this.position.x - 20, this.position.y);
    vertex(this.position.x - 15, this.position.y - 5);
    vertex(this.position.x - this.mass*3, this.position.y - this.mass*3);
    vertex(this.position.x - 5, this.position.y - 25);
    vertex(this.position.x, this.position.y - this.mass*3);
    vertex(this.position.x + 5, this.position.y - 25);
    vertex(this.position.x + this.mass*3, this.position.y - this.mass*3);
    vertex(this.position.x + 15, this.position.y - 5);
    vertex(this.position.x + 20, this.position.y);
    vertex(this.position.x + 15, this.position.y + 5);
    vertex(this.position.x + this.mass*3, this.position.y + this.mass*3);
    vertex(this.position.x, this.position.y + this.mass*3);
    vertex(this.position.x - this.mass*3, this.position.y + this.mass*3);
    vertex(this.position.x - 15, this.position.y + 5);
    vertex(this.position.x - 20, this.position.y);
    endShape();

    fill(177,255,145);
    strokeWeight(2);
    ellipse(this.position.x, this.position.y, 14, 8);
  }
}
