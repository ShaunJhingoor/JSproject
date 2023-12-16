class Mitochondria {
    constructor(ctx) {
      
        this.ctx = ctx;
       
        this.image = new Image();
        this.image.onload = this.draw.bind(this)

        
        this.x = 120;
        this.y = 120;
        this.speed = .1; 
        this.direction = 1;
        
    }
    setImageSource(imageSource){
        this.image.src = imageSource
    }

    draw() {
        this.ctx.drawImage(this.image,this.x,this.y,60,60)
    }

    update(){
            this.x = this.x + this.speed * this.direction;
            this.y = this.y + this.speed * this.direction;
            if (this.x + 1 >= 125 || this.x <= 120 && this.y + 1 >= 125 || this.y <= 120) {
                this.direction *= -1; 
            }
        }

    animate(){
          this.draw()
          this.update()
    }

}


    // handleMouseMove(e) {
    //     const x = e.clientX;
    //     const y = e.clientY;
    //     if (x >= this.positionX && x <= this.positionX + 100 && y >= this.positionY && y <= this.positionY + 100) {
    //         this.show();
    //     } else {
    //         this.hide();
    //     }
    // }

    // handleMouseOut() {
    //     this.hide();
    // }

    // show() {
    //     this.modal.style.display = 'block';
    // }

    // hide() {
    //     this.modal.style.display = 'none';
    // }

    // close() {
    //     this.hide();
    // }


export default Mitochondria;
