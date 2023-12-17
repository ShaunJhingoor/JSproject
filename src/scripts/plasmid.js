class Plasmid{
    constructor(ctx){
        this.ctx = ctx;
        this.x = 225;
        this.y = 340;
        this.radius = 20; 
    
        this.speed =.03;
        this.rotate = 0;
        this.direction = 1;
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)   
        this.ctx.lineWidth = 7; 
        this.ctx.strokeStyle = "rgb(92,206,250)"; 
        this.ctx.stroke()
    
    }

    update(){
        this.rotate = this.rotate + this.speed * this.direction;
        this.y = this.y + this.speed * this.direction;
        if ( this.y + 1 >= 350 || this.y <= 340 && this.rotate + 1 >=350 || this.rotate <= 0) {
            this.direction *= -1; 
        }
    }

    animate(){
        this.update()
        this.draw()
    }
}
export default Plasmid