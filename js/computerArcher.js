    class computerArcher{
        constructor(x,y,width,height){
    var options={
        isStatic:true,
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.heigh=height;
    this.image=loadImage("assets/computerArcher.png")

    World.add(world,this.body)
    Matter.Body.setAngle(this.body,-PI/2)
    if(keyIsDown(UP_ARROW)&& this.angle<1.77){
        angleValue=0.1
    }
    
    if(keyIsDown(DOWN_ARROW)&& this.angle>1.47){
        angleValue=-0.1
   
    }

        }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle; 
    push ();
    translate (pos.x,pos.y)
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height)
    pop ();
    }
    }