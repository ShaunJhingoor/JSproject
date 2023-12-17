class Cellwall{
    constructor(ctx){
        this.ctx = ctx 
        this.x = 225; 

        this.y = 280
        this.speed = 0.1
        this.direction = 1
    }

    draw(){
        this.ctx.beginPath();
    
        this.ctx.arc(this.x, this.y - 200 / 2, 200 / 2, Math.PI, 0);
       
        this.ctx.arc(this.x, this.y + 200 / 2, 200 / 2, 0, Math.PI);
        
        this.ctx.rect(this.x - 200 / 2, this.y - 200 / 2, 200,200);
    
        this.ctx.rect(this.x + 100, 275 - 80 / 2, 30, 80);
      
        this.ctx.strokeStyle = "green";
        this.ctx.lineWidth = 7;
    
        this.ctx.closePath();

        // this.ctx.fillStyle = "rgb(236,227,255)";

        // this.ctx.fill();
        this.ctx.stroke();
    }

    // update(){
    //     this.x = this.x + this.speed * this.direction;
    //     this.y = this.y + this.speed * this.direction;
    //     if (this.x + 1 >= this.y || this.x <= 275 && this.y + 1 >= this.y || this.y <= 275) {
    //         this.direction *= -1; 
    //     }
    // }

    animate(){
        // this.update()
        this.draw()
    }
}
export default Cellwall