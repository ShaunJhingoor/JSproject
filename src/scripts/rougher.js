class Rougher{
    constructor(ctx){
        this.ctx = ctx 
        this.image = new Image();
        this.image.onload = this.draw.bind(this)

        
        this.x = 200;
        this.y = 277;
        this.speed = .03; 
        this.direction = 1;
        this.modalContent = {
            name: "Rough Endoplasmic Reticulum (RER)",
            description: "The RER are called rough because there are ribosomes on its surface. The RER receives, modifies, tags, and packages proteins for transport. They are pinched off into membrane-enclosed vesicles for transport."
        };
        this.handleModalClick = this.handleModalClick.bind(this)
        this.createModal();
    }

    createModal() {
        this.modal = document.getElementById("organelleModal4");
        this.modalName = document.getElementById("organelleName4");
        this.modalDescription = document.getElementById("organelleDescription4");

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
            mouseX >= this.x + 25 && mouseX <= this.x + 57 &&
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
        // this.ctx.rotate(5)
        this.ctx.drawImage(this.image,this.x,this.y,120,70)
    }

    update(){
            this.x = this.x + this.speed * this.direction;
            // this.y = this.y + this.speed * this.direction;
            if (this.x + 1 >= 205|| this.x <= 200) {
                this.direction *= -1; 
            }
        }

    animate(){
          this.draw()
          this.update()
    }
}
export default Rougher