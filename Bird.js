class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':1,
          'density':2
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("red");
      strokeWeight(4);
      stroke("blue");
      ellipse(0, 0, this.width);
      pop();
    }
  }
  