class Cytoplasm {
    constructor(ctx){
        this.ctx = ctx
        this.canvas = this.ctx.canvas
        this.x = 225;
        this.y = 275
        this.speed = 0.1
        this.direction = 1
    }

    draw() {
       this.ctx.beginPath()
       this.ctx.arc(this.x, this.y, 200, 0, 2 * Math.PI)
    
       this.ctx.fillStyle = "rgb(226,241,250)";
       this.ctx.fill();
    
    }

    update(){
        this.x = this.x + this.speed * this.direction;
        this.y = this.y + this.speed * this.direction;
        if (this.x + 1 >= 276 || this.x <= 275 && this.y + 1 >= 276 || this.y <= 275) {
            this.direction *= -1; 
        }
    }

    animate(){
        this.update()
        this.draw()
    }
    
}
export default Cytoplasm;