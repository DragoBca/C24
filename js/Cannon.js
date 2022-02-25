class Cannon{
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.a = angle;
        this.baseImage = loadImage("./assets/cannon_base.png");
        this.cannonImage = loadImage("./assets/canon.png");
    }
    display(){

        if (keyIsDown(RIGHT_ARROW) && this.a < 55) {
            this.a = this.a + 1;
        }

        if (keyIsDown(LEFT_ARROW) && this.a > -45) {
            this.a = this.a - 1;
        }

        //Cano do Canhão
        push();
        translate(this.x,this.y);
        rotate(this.a);
        imageMode(CENTER);
        image(this.cannonImage,0,0,this.w,this.h);
        pop();

        //Base do Canhão
        image(this.baseImage,70,20,200,200);
    }
}
