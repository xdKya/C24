class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':0.6,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(0, 0, this.width);
      pop();
    }
  }
  