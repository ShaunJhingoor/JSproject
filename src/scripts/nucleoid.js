class Nucleoid{
    constructor(ctx) {
        this.ctx = ctx 

        this.image = new Image();
        this.image.onload = this.draw.bind(this)

        this.x = 200;
        this.y = 150;
        this.speed = 0.03
        this.direction = 1
        this.modalContent = {
            name: "Nucleoid",
            description: "The nucleoid is similar to the nucleus of the eukaryotic cell as the cell’s chromosomal genetic material, though nucleoids are not enclosed in a membrane. This genetic material dictates growth, reproduction, and function of the cell."
        };
        this.handleModalClick = this.handleModalClick.bind(this)
        this.createModal();
    
    }

    createModal() {
        this.modal = document.getElementById("organelleModal8");
        this.modalName = document.getElementById("organelleName8");
        this.modalDescription = document.getElementById("organelleDescription8");

        this.modalName.textContent = this.modalContent.name;
        this.modalDescription.textContent = this.modalContent.description;

        
        this.ctx.canvas.addEventListener("click", this.handleModalClick);
    }

    handleModalClick(event) {
        event.stopPropagation();
        
        let canvas = document.getElementById("cell2");
        let res = canvas.getBoundingClientRect();

        let mouseX = event.clientX - res.x
        let mouseY = event.clientY - res.y
       
                         
        if (
            mouseX >= this.x + 20 && mouseX <= this.x + 60 &&
            mouseY >= this.y + 10 && mouseY <= this.y + 150
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
        this.ctx.drawImage(this.image,this.x,this.y,60,150)
    }

    update(){
        this.x = this.x + this.speed * this.direction;
        this.y = this.y + this.speed * this.direction;
        if (this.x + 1 >= 205 || this.x <= 200 && this.y + 1 >= 155 || this.y <= 150) {
            this.direction *= -1; 
        }
    }

    animate(){
        this.draw()
        this.update()
  }
}
export default Nucleoid