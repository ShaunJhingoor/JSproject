class Rougher{
    constructor(ctx){
        this.ctx = ctx 
        this.image = new Image();
        this.image.onload = this.draw.bind(this)

        
        this.x = 200;
        this.y = 277;
        this.speed = .011; 
        this.direction = 1;
    }
    setImageSource(imageSource){
        this.image.src = imageSource
    }

    draw() {
        // this.ctx.rotate(5)
        this.ctx.drawImage(this.image,this.x,this.y,120,80)
    }

    update(){
            this.x = this.x + this.speed * this.direction;
            // this.y = this.y + this.speed * this.direction;
            if (this.x + 1 >= 202|| this.x <= 200) {
                this.direction *= -1; 
            }
        }

    animate(){
          this.draw()
          this.update()
    }
}
export default Rougher