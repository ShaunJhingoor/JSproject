class Capsule{
    constructor(ctx){
        this.ctx = ctx;
        this.x = 225;
        this.y = 250;
        this.radius = 75; 
        this.width = 150; 
        this.height = 250;
        this.speed = 1;
        this.direction = 1;
    }

    draw() {
        this.ctx.beginPath();

    
        this.ctx.arc(this.x, this.y - this.height / 2, this.radius, Math.PI, 0);

       
        this.ctx.arc(this.x, this.y + this.height / 2, this.radius, 0, Math.PI);

       
        this.ctx.lineTo(this.x - this.width / 2, this.y - this.height / 2);

    
        this.ctx.lineTo(this.x - this.width / 2, this.y - this.height / 2);

        this.ctx.strokeStyle = "orange";
        this.ctx.lineWidth = 3;

        this.ctx.closePath();

        this.ctx.stroke();
    }
  
    animate(){
        this.draw()
    }
}
export default Capsule