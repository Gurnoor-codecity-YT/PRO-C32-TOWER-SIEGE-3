class Polygon {
    constructor(x, y, radius) {
        var options = {
           
            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage('Sprites/polygon.jpg');
        this.image.scale= 0.4;
        World.add(world, this.body);
    }
    display(color, border) {
        var pos = this.body.position;
        var angle = this.angle;
        push();
        translate(pos.x, pos.y);
        fill("blue");
        strokeWeight(4);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}