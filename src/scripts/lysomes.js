class Lysomes{
    constructor(ctx,pathogen) {
        this.ctx = ctx 

        this.image = new Image();
        this.image.onload = this.draw.bind(this)
        this.pathogen = pathogen
        
        this.x = 120;
        this.y = 340;
        this.speed = .05
        this.direction = 1
        this.modalContent = {
            name: "Lysosomes",
            description: " Lysosomes digest or break down food, cells, or foreign objects in the cell via a process called phagocytosis (“cell eating”). Without these, there would be a buildup of waste and the inability to reuse molecules. This would lead to cell malfunction and therefore disease."
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
        if (
            this.x + 20 >= this.pathogen.x &&
            this.x <= this.pathogen.x + 25 &&
            this.y + 20 >= this.pathogen.y &&
            this.y <= this.pathogen.y + 25
        )
        {
            this.pathogen.remove();
        }
        this.draw()
        this.update()
  }
}
export default Lysomes