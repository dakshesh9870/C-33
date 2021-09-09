class snow1 {
constructor(x,y,r){
var option={
    restitution:0.4,
    friction:0.5,
    density:100
    //isStatic: false
}
this.body=Bodies.circle(x,y,r,option)
World.add(world,this.body)
this.r = r
}

display(){
    push();
    translate(this.body.position.x , this.body.position.y)
    rotate(this.body.angle)
    fill("grey")
    ellipse(0,0,this.r)
    pop();

}
}