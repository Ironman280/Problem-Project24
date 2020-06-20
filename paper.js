class Paper{
constructor(x,y){
   var options={
     restitution: 1
   }
  this.body = Bodies.circle(200,600,25, options); 
  
   
  
  World.add(world,this.body);
}
  
    display(){
      var pos = this.body.position;
      fill("purple");
      ellipseMode(RADIUS)
      ellipse(pos.x, pos.y,20,20);
    }
    }