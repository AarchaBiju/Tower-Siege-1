class Box {
 
  constructor(x,y,width,height) {
    console.log("hi");
    var options = {
        isStatic: false,
        restitution:1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("green");
    rect(pos.x, pos.y, this.width, this.height);
  }
};
