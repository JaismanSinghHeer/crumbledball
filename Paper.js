class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            'restitution' : 0.2,
            'friction' : 0,
            'density' : 1.3
        }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;

      World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);

        fill("#ff00ff");

        circle(this.body.position.x,this.body.position.y,this.radius);
    }
};