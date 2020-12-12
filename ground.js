class Ground {
    constructor(x, y, width, height){
        this.body= Bodies.rectangle(x, y, width, height);
        this.width= width;
        this.height= height;
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        fill(165, 42, 42);
        rect(0, 0, this.width, this.height);
    }
}