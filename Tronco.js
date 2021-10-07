class Tronco {
    constructor(x, y, height, angle) {
      var options = {
          'restitution':0.6,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      Matter.Body.setAngle(this.body, angle);
      this.height = height;
      this.width = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("brown");
      strokeWeight(2);
      stroke("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  