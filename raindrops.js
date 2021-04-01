class raindrops{
constructor(x,y,width,height) 
    var options = {
        isStatic: true
    }
    this.body = Bodies.elipse (x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  
  display()
    var pos =this.body.position;
    elipseMode(CENTER);
    fill("blue");
    elipse(pos.x, pos.y, this.width, this.height);
  
