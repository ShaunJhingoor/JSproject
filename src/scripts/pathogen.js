class Pathogen{
    constructor(ctx) {
        this.ctx = ctx 

        this.image = new Image();
        this.image.onload = this.draw.bind(this)
        

        
        this.x = 155;
        this.y = 370;
        this.speed = .1
        this.direction = 1

        this.isVisible = true; 
        this.count = 315
        this.changeCount = this.count
    }
 

    setImageSource(imageSource){
        this.image.src = imageSource
    }

    draw() {
        if (this.isVisible) {
            this.ctx.drawImage(this.image, this.x, this.y, 30, 30);
        }
    }

    remove() {
        this.isVisible = false;
        this.changeCount = this.count
    }

    update(){
        this.x = this.x + this.speed * this.direction;
        this.y = this.y + this.speed * this.direction;

        if (this.x + 1 >= 158 || this.x <= 150 && this.y + 1 >= 373 || this.y <= 370) {
            this.direction *= -1; 
        }
    }

    animate() {
        if (!this.isVisible) {
            this.changeCount--;

            if (this.changeCount <= 0) {
                this.isVisible = true;
            }
        }
        this.draw();
        this.update()
    }
}

export default Pathogen