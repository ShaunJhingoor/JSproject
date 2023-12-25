class Golgi{
    constructor(ctx) {
        this.ctx = ctx 

        this.image = new Image();
        this.image.onload = this.draw.bind(this)

        this.x = 50;
        this.y = 220;
        this.speed = 0.03
        this.direction = 1
        this.modalContent = {
            name: "Golgi",
            description: "The Golgi receives proteins from the Rough Endoplasmic Reticulum and edits and packages proteins and carbohydrates for use in and out of the cell. These are packaged within vesicles and SNARES are the markers that allow these vesicles to be received or delivered to the appropriate locations. "
        };
        this.handleModalClick = this.handleModalClick.bind(this)
        this.createModal();
    }

    createModal() {
        this.modal = document.getElementById("organelleModal1");
        this.modalName = document.getElementById("organelleName1");
        this.modalDescription = document.getElementById("organelleDescription1");

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
            mouseX >= this.x - 1 && mouseX <= this.x + 90 &&
            mouseY >= this.y + 10 && mouseY <= this.y + 40
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
        this.ctx.drawImage(this.image,this.x,this.y,80,40)
    }

    update(){
        this.x = this.x + this.speed * this.direction;
        this.y = this.y + this.speed * this.direction;
        if (this.x + 1 >= 55 || this.x <= 50 && this.y + 1 >= 225|| this.y <= 220) {
            this.direction *= -1; 
        }
    }

    animate(){
        this.draw()
        this.update()
  }
}
export default Golgi