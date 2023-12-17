class Cellwall{
    constructor(ctx){
        this.ctx = ctx;
        this.x = 225;
        this.y = 250;
        this.radius = 70; // Adjust the radius to control the curvature of the pill shape
        this.width = 140; // Adjust the width of the pill shape
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

        this.ctx.strokeStyle = "blue";
        this.ctx.lineWidth = 5;

        this.ctx.closePath();

        this.ctx.stroke();
    }


  
    animate(){
        this.draw()
    }
}
export default Cellwall