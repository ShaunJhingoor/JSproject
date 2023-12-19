class Pilli{
    constructor(ctx,x,y,speed,width) {
        this.ctx = ctx 
        this.x = x
        this.y = y
        this.consty = this.y
        this.changey = this.consty + 5
        this.speed = speed
        this.direction = 1
        this.time = 0
        this.width = width 

    }

    draw(){
        this.ctx.fillStyle = "black";

        for (let i = 0; i < 40; i++) {
            const height = 2 * Math.sin(this.time + i / 4);
            
            this.ctx.fillRect(this.x + i * this.width, this.y + height / 2, this.width, height);;
        }
    }

    update(){
        this.y += this.speed * this.direction;
         
        if (this.y + 1 >= this.changey|| this.y <= this.consty) {
            this.direction *= -1; 
        }
    }

    animate(){
        this.draw()
        this.update()
    }
}
export default Pilli