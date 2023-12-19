class Plasmid{
    constructor(ctx){
        this.ctx = ctx;
        this.x = 225;
        this.y = 340;
        this.radius = 20; 
    
        this.speed =.03;
        this.rotate = 0;
        this.direction = 1;
        this.modalContent = {
            name: "Plasmid",
            description: "Plasmids play a vital role in exchanging genes between bacterial cells. This allows bacteria to transfer there genes from one host to another. Allowing bacteria to spread resistance faster."
        };
        this.handleModalClick = this.handleModalClick.bind(this)
        this.createModal();
    
    }

    createModal() {
        this.modal = document.getElementById("organelleModal6");
        this.modalName = document.getElementById("organelleName6");
        this.modalDescription = document.getElementById("organelleDescription6");

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
            mouseX >= this.x - 1 && mouseX <= this.x + 20 &&
            mouseY >= this.y - 1 && mouseY <= this.y + 30
        ) {
            this.showModal()
        }
    }
    

    showModal() {
        this.modal.style.display = 'block';
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)   
        this.ctx.lineWidth = 7; 
        this.ctx.strokeStyle = "rgb(92,206,250)"; 
        this.ctx.stroke()
    
    }

    update(){
        this.rotate = this.rotate + this.speed * this.direction;
        this.y = this.y + this.speed * this.direction;
        if ( this.y + 1 >= 350 || this.y <= 340 && this.rotate + 1 >=350 || this.rotate <= 0) {
            this.direction *= -1; 
        }
    }

    animate(){
        this.update()
        this.draw()
    }
}
export default Plasmid