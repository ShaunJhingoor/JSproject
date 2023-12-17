class Membrane{
    constructor(ctx){
        this.ctx = ctx
        this.x = 225;
        this.y = 275
        this.speed = 0.1
        this.direction = 1
    }
    draw() {
       this.ctx.strokeStyle = "rgb(244,180,111)"; 
       this.ctx.lineWidth = 7;
       this.ctx.stroke();
    
    }

    update(){
        this.x = this.x + this.speed * this.direction;
        this.y = this.y + this.speed * this.direction;
        if (this.x + 1 >= 280 || this.x <= 275 && this.y + 1 >= 280 || this.y <= 275) {
            this.direction *= -1; 
        }
    }

    animate(){
        this.update()
        this.draw()
    }
}
export default Membrane
