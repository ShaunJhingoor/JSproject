class Membrane{
    constructor(ctx){
        this.ctx = ctx
        this.x = 225;
        this.y = 275
        this.radius = 200
        this.speed = 0.05
        this.direction = 1
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)   
        this.ctx.lineWidth = 7; 
        this.ctx.strokeStyle = "orange"; 
        this.ctx.stroke()
    
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
