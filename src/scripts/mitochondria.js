class Mitochondria {
    constructor(ctx,x,y) {
      
        this.ctx = ctx;
       
        this.image = new Image();
        this.image.onload = this.draw.bind(this)

        
        this.x = x;
        this.y = y;
        this.speed = .01; 
        this.direction = 1;
        this.constx = this.x 
        this.consty = this.y 
        this.changex = this.constx + 5 
        this.changey = this.constx + 5
        
    }
    setImageSource(imageSource){
        this.image.src = imageSource
    }

    draw() {
        this.ctx.drawImage(this.image,this.x,this.y,40,20)
    }

    update(){
            this.x += this.speed * this.direction;
             this.y += this.speed * this.direction;
            if (this.x + 1 >= this.changex || this.x <= this.constx && this.y + 1 >= this.changey|| this.y <= this.consty) {
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
