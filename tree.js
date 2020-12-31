class Tree{
    constructor(x, y, width, height){
        var Option={
            isStattic:false,
        }
      this.width=width
      this.height=height
      this.image=loadImage("Plucking mangoes/tree.png")
       this.body= Bodies.rectangle(x,y,width,height, Option)
       
        World.add(world,this.body)
    }

    display(){
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.width, this.height)
    }   
}