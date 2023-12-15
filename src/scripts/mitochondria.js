class Mitochondria {
    constructor(ctx, description) {
        this.description = description;
        this.ctx = ctx;
        this.canvas = this.ctx.canvas
        this.image = new Image();
        this.image.onload = this.init.bind(this);

        this.animationFrame = null;
        this.originalPositionX = 200;
        this.positionX = this.originalPositionX;
        this.positionY = 200;
        this.directionX = 1; // 1 for right, -1 for left
        this.speed = 1;
        this.frameCount = 0;

        this.canvas.addEventListener('mouseover', () => this.startAnimation());
        this.canvas.addEventListener('mouseout', () => this.stopAnimation());
    }

    init() {
        this.setImageSource('mitochondria.png');
    }

    setImageSource(imageSource) {
        this.image.src = imageSource;
    }

 draw() {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.positionX = this.originalPositionX + Math.sin(this.frameCount * 0.1) * 10;

    this.positionY = 200 + Math.sin(this.frameCount * 0.07) * 5;

    this.ctx.drawImage(this.image, this.positionX, this.positionY, 100, 100);

    
    if (this.positionX <= 0) {
        this.positionX = 0;
    } else if (this.positionX >= this.canvas.width - 100) {
        this.positionX = this.canvas.width - 100;
    }

    this.frameCount++;

    this.animationFrame = requestAnimationFrame(() => this.draw());
}

    startAnimation() {
        if (!this.animationFrame) {
            this.draw();
        }
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
