class Cytoplasm{
    constructor(ctx){
        this.ctx = ctx;
        this.x = 225;
        this.y = 250;
        this.radius = 63; 
        this.width = 126; 
        this.height = 250;
    }

    draw() {
        this.ctx.beginPath();

    
        this.ctx.arc(this.x, this.y - this.height / 2, this.radius, Math.PI, 0);

       
        this.ctx.arc(this.x, this.y + this.height / 2, this.radius, 0, Math.PI);

       
        this.ctx.lineTo(this.x - this.width / 2, this.y - this.height / 2);

    
        this.ctx.lineTo(this.x - this.width / 2, this.y - this.height / 2);

        this.ctx.fillStyle = "rgb(226,241,250)";  
        this.ctx.fill();

        this.ctx.closePath();
    }
  
    animate(){
        this.draw()
    }
}
export default Cytoplasm
