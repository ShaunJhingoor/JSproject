class Lysomes{
    constructor(ctx) {
        this.ctx = ctx 

        this.image = new Image();
        this.image.onload = this.draw.bind(this)

        
        this.x = 120;
        this.y = 340;
        this.speed = .05
        this.direction = 1
        this.modalContent = {
            name: "Lysomes",
            description: "This is a Lysome. Lysome contain digestive enyzme that are capable of breaking down old and tired organelles. Also, lysomes can breakdown protein, nucleic acid, carbohydrates, and lipids."
        };
        this.handleModalClick = this.handleModalClick.bind(this)
        this.createModal();
    }

    createModal() {
        this.modal = document.getElementById("organelleModal");
        this.modalName = document.getElementById("organelleName");
        this.modalDescription = document.getElementById("organelleDescription");

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
            mouseX >= this.x - 1 && mouseX <= this.x + 40 &&
            mouseY >= this.y - 10 && mouseY <= this.y + 40
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
        this.ctx.drawImage(this.image,this.x,this.y,40,40)
    }

    update(){
        this.x = this.x + this.speed * this.direction;
        this.y = this.y + this.speed * this.direction;

        if (this.x + 1 >= 150 || this.x <= 120 && this.y + 1 >= 370 || this.y <= 340) {
            this.direction *= -1; 
        }
    }

    animate(){
        this.draw()
        this.update()
  }
}
export default Lysomes