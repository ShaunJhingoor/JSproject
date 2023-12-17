class Flagella{
    constructor(ctx) {
        this.ctx = ctx 

        this.image = new Image();
        this.image.onload = this.draw.bind(this)

        this.x = 210;
        this.y = 450;
        this.speed = 0.1
        this.direction = 1
    }

    setImageSource(imageSource){
        this.image.src = imageSource
    }

    draw() {
        this.ctx.drawImage(this.image,this.x,this.y,30,60)
    }

    update(){
        this.x = this.x + this.speed * this.direction;
        // this.y = this.y + this.speed * this.direction;
        if (this.x + 1 >= 215 || this.x <= 210) {
            this.direction *= -1; 
        }
    }

    animate(){
        this.draw()
        this.update()
  }
}
export default Flagella