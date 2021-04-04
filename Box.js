class Box{
    constructor(x,y,w,h){
        var box_options ={
            restitution: 1.0
        }
    
        this.body = Bodies.rectangle(x,y,w,h,box_options);
        World.add(world,this.body);
        this.width = w;
        this.height = h;  
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red")
        rect (pos.x,pos.y, this.width,this.height)
    }
}