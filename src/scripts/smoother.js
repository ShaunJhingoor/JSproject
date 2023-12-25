class Smoother{
    constructor(ctx){
        this.ctx = ctx 
        this.image = new Image();
        this.image.onload = this.draw.bind(this)

        
        this.x = 200;
        this.y = 315;
        this.speed = .03; 
        this.direction = 1
        this.modalContent = {
            name: "Smooth Endoplasmic Reticulum(SER)",
            description: "The SER lacks ribosomes and parts of the SER are continuous with the RER. The SER stores calcium ions, degrades glycogen, synthesizes lipids and steroids, and tags small toxic molecules for easier removal from the cell."
        };
        this.handleModalClick = this.handleModalClick.bind(this)
        this.createModal();
    }

    createModal() {
        this.modal = document.getElementById("organelleModal5");
        this.modalName = document.getElementById("organelleName5");
        this.modalDescription = document.getElementById("organelleDescription5");

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
            mouseX >= this.x - 1 && mouseX <= this.x + 120 &&
            mouseY >= this.y - 1 && mouseY <= this.y + 70 && mouseY > this.y + 25
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
        // this.ctx.rotate(5)
        this.ctx.drawImage(this.image,this.x,this.y,120,70)
    }

    update(){
            this.x = this.x + this.speed * this.direction;
            // this.y = this.y + this.speed * this.direction;
            if (this.x + 1 >= 205 || this.x <= 200) {
                this.direction *= -1; 
            }
        }

    animate(){
          this.draw()
          this.update()
    }
}
export default Smoother