class Plasmamemembrane{
    constructor(ctx){
        this.ctx = ctx;
        this.x = 225;
        this.y = 250;
        this.radius = 65; 
        this.width = 130; 
        this.height = 250;
    }

    draw() {
        this.ctx.beginPath();

    
        this.ctx.arc(this.x, this.y - this.height / 2, this.radius, Math.PI, 0);

       
        this.ctx.arc(this.x, this.y + this.height / 2, this.radius, 0, Math.PI);

       
        this.ctx.lineTo(this.x - this.width / 2, this.y - this.height / 2);

    
        this.ctx.lineTo(this.x - this.width / 2, this.y - this.height / 2);

        this.ctx.strokeStyle = "green";
        this.ctx.lineWidth = 4;

        this.ctx.closePath();

        this.ctx.stroke();
    }
  
    animate(){
        this.draw()
    }
}
export default Plasmamemembrane
