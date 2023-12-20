class Cellwall{
    constructor(ctx){
        this.ctx = ctx;
        this.x = 225;
        this.y = 250;
        this.radius = 70; 
        this.width = 140; 
        this.height = 249;
        this.speed = 0.1;
        this.direction = 1;
    }

    draw() {
        this.ctx.beginPath();

    
        this.ctx.arc(this.x, this.y - this.height / 2, this.radius, Math.PI, 0);

       
        this.ctx.arc(this.x, this.y + this.height / 2, this.radius, 0, Math.PI);

       
        this.ctx.lineTo(this.x - this.width / 2, this.y - this.height / 2);

    
        this.ctx.lineTo(this.x - this.width / 2, this.y - this.height / 2);

        this.ctx.strokeStyle = "orange";
        this.ctx.lineWidth = 5;

        this.ctx.closePath();

        this.ctx.stroke();
    }


  
    animate(){
        this.draw()
    }
}
export default Cellwall