class Nucleus{
    constructor(ctx) {
        this.ctx = ctx 

        this.image = new Image();
        this.image.onload = this.draw.bind(this)

        this.x = 200;
        this.y = 200;
        this.speed = 0.03
        this.direction = 1
        this.modalContent = {
            name: "Nucleus",
            description: "The nucleus is the cell's control center. DNA replication, transcription, and RNA processing takes place in the nucleus. The nucleus is surrounded by a nuclear envelope that separates the nucleus from the cytoplasm"
        };
        this.handleModalClick = this.handleModalClick.bind(this)
        this.createModal();
    }

    createModal() {
        this.modal = document.getElementById("organelleModal3");
        this.modalName = document.getElementById("organelleName3");
        this.modalDescription = document.getElementById("organelleDescription3");

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
            mouseX >= this.x - 1 && mouseX <= this.x + 100 &&
            mouseY >= this.y - 1 && mouseY <= this.y + 70
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
        this.ctx.drawImage(this.image,this.x,this.y,100,100)
    }

    update(){
        this.x = this.x + this.speed * this.direction;
        this.y = this.y + this.speed * this.direction;
        if (this.x + 1 >= 205 || this.x <= 200 && this.y + 1 >= 205 || this.y <= 200) {
            this.direction *= -1; 
        }
    }

    animate(){
        this.draw()
        this.update()
  }
}
export default Nucleus