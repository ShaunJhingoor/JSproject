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
            description: "The golgi is responsible for a multitude of function within the cell. One function of the golgi is to modify protein and lipids receieved by the endoplasmic reticulum and modify them in a process known as glycosylation. Then the golgi sorts and packages these modified molecules into vesciles "
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
        
        
        console.log(mouseX)
        console.log(mouseY)
        console.log(this.x)
        console.log(this.y)
                         
        if (
            mouseX >= this.x - 40 && mouseX <= this.x + 80 &&
            mouseY >= this.y - 20 && mouseY <= this.y + 40
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