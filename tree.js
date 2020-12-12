class Tree {
    constructor(){
        this.body= Bodies.rectangle(x, y, width, height);
        this.image= loadImage("Images/tree.png");
        World.add(world, this.body);    
    }
    display(){
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0);
        pop();
    }
}