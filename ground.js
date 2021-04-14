class Ground{
  constructor(x,y,width,height){
     var options = {
         isStatic:true
     }
     this.ground = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     pos.x = this.ground.position.x;
     pos.y = this.ground.position.y;

     World.add(world,this.ground);
  }display(){
      rect(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
  }
}