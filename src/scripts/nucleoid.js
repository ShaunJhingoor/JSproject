class Nucleoid{
    constructor(ctx) {
        this.ctx = ctx 

        this.image = new Image();
        this.image.onload = this.draw.bind(this)

        this.x = 200;
        this.y = 150;
        this.speed = 0.03
        this.direction = 1
    }

    setImageSource(imageSource){
        this.image.src = imageSource
    }

    draw() {
        this.ctx.drawImage(this.image,this.x,this.y,60,150)
    }

    update(){
        this.x = this.x + this.speed * this.direction;
        this.y = this.y + this.speed * this.direction;
        if (this.x + 1 >= 205 || this.x <= 200 && this.y + 1 >= 155 || this.y <= 150) {
            this.direction *= -1; 
        }
    }

    animate(){
        this.draw()
        this.update()
  }
}
export default Nucleoid