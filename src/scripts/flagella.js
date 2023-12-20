class Flagella{
    constructor(ctx) {
        this.ctx = ctx 

        this.image = new Image();
        this.image.onload = this.draw.bind(this)

        this.x = 220;
        this.y = 450;
        this.speed = 0.05
        this.direction = 1
        this.modalContent = {
            name: "Flagellum (s.)",
            description: "Flagella (p.) sometimes look like corkscrews and are utilized in movement. They propel the cell and are powered by a motor protein attached to the cell membrane. Can be one or multiple flagella"
        };
        this.handleModalClick = this.handleModalClick.bind(this)
        this.createModal();
    
    }

    createModal() {
        this.modal = document.getElementById("organelleModal9");
        this.modalName = document.getElementById("organelleName9");
        this.modalDescription = document.getElementById("organelleDescription9");

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
            mouseX >= this.x - 1 && mouseX <= this.x + 170 &&
            mouseY >= this.y - 1 && mouseY <= this.y + 100 && mouseY > this.y + 20
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
        this.ctx.drawImage(this.image,this.x,this.y,20,200)
    }

    update(){
        this.x = this.x + this.speed * this.direction;
       
        if (this.x + 1 >= 225 || this.x <= 220) {
            this.direction *= -1; 
        }
    }

    animate(){
        this.draw()
        this.update()
  }
}
export default Flagella