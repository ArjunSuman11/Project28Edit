class Mango{
    constructor(){
        this.body=Bodies.circle(x, y, radius);
        this.image=loadImage("Images/mango.png");
        World.add(world, this.body);
    }
    display(){
        var pos= this.body.postion;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0);
        pop();
    }
}