class Box {
    constructor(x, y, width, height) {
        this.x=x;
        this.y=y;
        this.dustbinWidth=200;
        this.dustbinHeight=100;
        this.wallThickness=20;
        this.angle=0;
      
      this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true});
      this.leftWallBody = Bodies.rectangele(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, {isStatic:true});
      Matter.Body.setAngle(this.leftWallBody, this.angle)
      this.rightWallBody = Bodies.rectangele(this.x-this.dustbinWidth/2, this.y+this.dustbinHeight/2, this.wallThickness, {isStatic:true});
      Matter.Body.setAngle(this.rightWallBody, -1*this.angle)
      Worldd.add(world, this.bottomBody);
      Worldd.add(world, this.leftWallBody);
      Worldd.add(world, this.rightWallBody);
    }
    display(){
      var posBottom =this.bottomBody.position;
      var posLeft =this.leftWallBody.position;
      var posRight =this.rightWallBody.position;

      push();
      translate(posLeft.x, posLeft.y);
      rotate(angle);
      rectMode(CENTER);
  
      angleMode(RADIANS);
      strokeWeight(4);
      stroke(255);
      fill(255);
      rotate(this.angle)
      rect(0, 0, this.wallThickness, this.dustbinHeight);
      pop();

      push();
      translate(posRight.x, posRight.y);
      rotate(angle);
      rectMode(CENTER);
  
      angleMode(RADIANS);
      strokeWeight(4);
      stroke(255);
      fill(255);
      
      rect(0, 0, this.wallThickness, this.dustbinHeight);
      pop();

      push();
      translate(posBottom.x, posBottom.y);
      rotate(angle);
      rectMode(CENTER);
  
      angleMode(RADIANS);
      strokeWeight(4);
      stroke(255);
      fill(255);
      rect(0, 0, this.wallThickness, this.dustbinHeight);
      pop();
    }
  };
