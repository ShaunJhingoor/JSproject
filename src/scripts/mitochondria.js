class Mitochondria{
    constructor(ctx){
        this.ctx = ctx
        this.image = new Image()
        this.image.onload = this.draw.bind(this)
    }

    setImageSource(imageSource){
        this.image.src = imageSource
    }

    draw() {
        this.ctx.drawImage(this.image,140,140,100,100)
    }
}
// const mitochondria = new Mitochondria() 
// const imageSource = 'https://as2.ftcdn.net/v2/jpg/04/80/60/45/1000_F_480604502_iUcg5SG7KqSX51xiNwZAUfXNwhkjShU0.jpg';
// mitochondria.setImageSource(imageSource)
export default Mitochondria