class Dustbin{
    constructor(x,y,width,height,angle){
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
    this.angle = angle
    this.image = loadImage("sprites/dustbin.png")
    Body.setAngle(this.body,angle)
    World.add(world,this.body)
    }
     display(){
        var pos =this.body.position;
        var angle = this.body.angle
        imageMode(CENTER)
        
        fill("white");
        image(this.image,pos.x,pos.y, this.width, this.height);
       


}
}