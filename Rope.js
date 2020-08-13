class Rope {
    // Object A and B are Bodies in World
    constructor(objectA, objectB, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        // Options for our Constraint Chain
        var constraint_options = {
            bodyA: objectA,
            bodyB: objectB,
            pointB: {
                x:this.offsetX,
                y:this.offsetY
            }
        }
        // Creates Constraint Chain
        this.rope = Constraint.create(constraint_options);

        // Adds Chain to World
        World.add(world, this.rope);
    }

    // Displays Line Between Both Objects
    display() {

        var bodyAPos = this.rope.bodyA.position;
        var bodyBPos = this.rope.bodyB.position;
        strokeWeight(2);
        var anchor1X = bodyAPos.x;
        var anchor1Y = bodyAPos.y;
        var anchor2X = bodyBPos.x + this.offsetX;
        var anchor2Y = bodyBPos.y + this.offsetY;
        line(anchor1X, anchor1Y, anchor2X, anchor2Y);
    }
}
