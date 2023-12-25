class Mitochondria {
    constructor(ctx,x,y) {
      
        this.ctx = ctx;
       
        this.image = new Image();
        this.image.onload = this.draw.bind(this)

        
        this.x = x;
        this.y = y;
        this.speed = .03; 
        this.direction = 1;
        this.constx = this.x 
        this.consty = this.y 
        this.changex = this.constx + 5 
        this.changey = this.consty + 5
        this.modalContent = {
            name: "Mitochondrion (s.)",
            description: "Mitochondria (p.) are the powerhouse of the cells. They facilitate the citric acid cycle, oxidative phosphorylation, and the respiratory chain, which provide copious energy for cellular functions. They can divide and reproduce independent to the nucleus and are thought to have been acquired by endosymbiosis, where one cell is engulfed by another, and these two previously independent organisms exist in mutual benefit."
        };
        this.handleModalClick = this.handleModalClick.bind(this)
        this.createModal();
    }

    createModal() {
        this.modal = document.getElementById("organelleModal2");
        this.modalName = document.getElementById("organelleName2");
        this.modalDescription = document.getElementById("organelleDescription2");

        this.modalName.textContent = this.modalContent.name;
        this.modalDescription.textContent = this.modalContent.description;

        
        this.ctx.canvas.addEventListener("click", this.handleModalClick);
    }

    handleModalClick(event) {
        event.stopPropagation();
        
        let canvas = document.getElementById("cell1");
        let res = canvas.getBoundingClientRect();

        let mouseX = event.clientX - res.x
        let mouseY = event.clientY - res.y
        
                         
        if (
            mouseX >= this.x - 1 && mouseX <= this.x + 70 &&
            mouseY >= this.y + 15 && mouseY <= this.y + 30
        ) {
            this.showModal()
        }
    }

    showModal() {
        this.modal.style.display = 'block';
    }

    setImageSource(imageSource){
        this.image.src = imageSource
    }

    draw() {
        this.ctx.drawImage(this.image,this.x,this.y,60,30)
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
