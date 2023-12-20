class Ribsomes {
    constructor(ctx,x,y,speed = 0){
        this.ctx = ctx
        this.canvas = this.ctx.canvas
        this.x = x;
        this.y = y;
        this.speed = speed
        this.direction = 1
        this.constx = this.x 
        this.consty = this.y 
        this.changex = this.constx + 5 
        this.changey = this.constx + 5
        this.modalContent = {
            name: "Ribsosome",
            description: "Ribosomes are the sites of protein synthesis. In prokaryotic cells, they freely float throughout the cytoplasm."
        };
        this.handleModalClick = this.handleModalClick.bind(this)
        this.createModal();
    
    }

    createModal() {
        this.modal = document.getElementById("organelleModal7");
        this.modalName = document.getElementById("organelleName7");
        this.modalDescription = document.getElementById("organelleDescription7");

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
            mouseX >= this.x - 1 && mouseX <= this.x + 10 &&
            mouseY >= this.y - 1 && mouseY <= this.y + 10
        ) {
            this.showModal()
        }
    }

    showModal() {
        this.modal.style.display = 'block';
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI);
    
 
        const gradient = this.ctx.createRadialGradient(
            this.x, this.y, 0, this.x, this.y, 3
        );
    
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');

        gradient.addColorStop(1, 'rgba(255, 0, 0, 0.5)');
    
        
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
    }

    update(){
        this.x += this.speed * this.direction;
         this.y += this.speed * this.direction;
        if (this.x + 1 >= this.changex || this.x <= this.constx && this.y + 1 >= this.changey|| this.y <= this.consty) {
            this.direction *= -1; 
        }
    }

    animate(){
        this.update()
        this.draw()
    }
    
}
export default Ribsomes;