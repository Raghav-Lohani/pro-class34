class Building {
    constructor(x,y,width,height){
        var options = {
           'restitution':0.8,
        
           ' friction' : 1,
            'density' : 0.4
           
        }
    this.width = width
    this.height = height
    this.body = Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body)

}
display(){
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    rotate(this.body.angle)
   fill("red")
    rect (0,0,this.width,this.height)
    pop();
   
}
}