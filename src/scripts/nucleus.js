class Nucleus{
    constructor(ctx) {
        this.ctx = ctx 

        this.image = new Image();
        this.image.onload = this.draw.bind(this)

        this.x = 200;
        this.y = 0;
    }

    setImageSource(imageSource){
        this.image.src = imageSource
    }

    draw() {
        this.ctx.drawImage(this.image,this.x,this.x,100,100)
    }

    animate(){
        this.draw()
  }
}
export default Nucleus