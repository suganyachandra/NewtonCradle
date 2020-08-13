class Bob {
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius
        var options ={
            'isStatic': false,
            'restitution': 1,
            'friction': 0,
            'density': 0.8
            
        }
        this.body = Bodies.circle(this.x, this.y ,this.radius/2, options);
        World.add(world, this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        translate(pos.x, pos.y);
        fill("red");
        rectMode(CENTER)
        ellipse(0, 0, this.radius, this.radius);
        pop()
    }
}