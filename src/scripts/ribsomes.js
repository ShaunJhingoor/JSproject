class Ribsomes {
    constructor(ctx,x,y,speed = 0){
        this.ctx = ctx
        this.canvas = this.ctx.canvas
        this.x = x;
        this.y = y;
        this.speed = speed
        this.direction = 1
        this.constx = this.x 
        this.consty = this.y 
        this.changex = this.constx + 5 
        this.changey = this.constx + 5
    }

    draw() {
       this.ctx.beginPath()
       this.ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI)
    
       this.ctx.fillStyle = "red";
       this.ctx.fill();
    
    }

    update(){
        this.x += this.speed * this.direction;
         this.y += this.speed * this.direction;
        if (this.x + 1 >= this.changex || this.x <= this.constx && this.y + 1 >= this.changey|| this.y <= this.consty) {
            this.direction *= -1; 
        }
    }

    animate(){
        this.update()
        this.draw()
    }
    
}
export default Ribsomes;