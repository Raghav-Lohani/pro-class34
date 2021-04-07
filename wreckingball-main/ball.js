class Ball {
    constructor(x,y,radius){
        var options = {
            friction : 0.5,
            density : 1
        
        }
    this.radius = radius 
    this.body = Bodies.circle(x,y,radius,options)
   this.image = loadImage("hero.png")
    World.add(world,this.body)

}
display(){
    var  pos = this.body.position
    pos.x = mouseX
    pos.y = mouseY
    var angle = this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    fill ("yellow")
    imageMode(RADIUS)
   image(this.image,0,0,this.radius+100,this.radius+50)
    pop();
   
}
}