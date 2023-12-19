class Capsule{
    constructor(ctx){
        this.ctx = ctx;
        this.x = 225;
        this.y = 250;
        this.radius = 75; 
        this.width = 150; 
        this.height = 250;
        this.speed = 1;
        this.direction = 1;
        this.modalContent = {
            name: "Yellow",
            description: "The cell membrane separates the interior of the cell from the outside environment. The cell membrane is a phospholipid bilayer that process hydrophobic and hydrophilic properties, which help with the cells ability to only allow specific things into and out of the cell."
        };
        this.handleModalClick = this.handleModalClick.bind(this)
        this.createModal();
        //center of circle - radius 
        //cent of circle x  - radius 
        //x-x ^2 + y - y^2 = res Math.sqrtres = 
    }

    createModal() {
        this.modal = document.getElementById("organelleModal12");
        this.modalName = document.getElementById("organelleName12");
        this.modalDescription = document.getElementById("organelleDescription12");

        this.modalName.textContent = this.modalContent.name;
        this.modalDescription.textContent = this.modalContent.description;

        
        this.ctx.canvas.addEventListener("click", this.handleModalClick);
    }

    handleModalClick(event) {
        event.stopPropagation();
        let mouseX = event.clientX;
        let mouseY = event.clientY;
    
        const canvas = document.getElementById("cell2");
        const res = canvas.getBoundingClientRect();
    
        mouseX = mouseX - res.x;
        mouseY = mouseY - res.y;
    
        
        const distanceX = mouseX - this.x;
        const distanceY = mouseY - this.y;
        // mouseX<=< this.x + 80 && mousx >this.x -80
        // mousey<= this.y + 200 && mousey >= this.y -200
        
        if (
            mouseX <= this.x + 80 && mouseX > this.x - 80 && 
            mouseY <= this.y + 200 && mouseY >= thiys.y - 10
        ) {
            this.showModal();
        }
    }
    

    showModal() {
        this.modal.style.display = 'block';
    }

    draw() {
        this.ctx.beginPath();

    
        this.ctx.arc(this.x, this.y - this.height / 2, this.radius, Math.PI, 0);

       
        this.ctx.arc(this.x, this.y + this.height / 2, this.radius, 0, Math.PI);

       
        this.ctx.lineTo(this.x - this.width / 2, this.y - this.height / 2);

    
        this.ctx.lineTo(this.x - this.width / 2, this.y - this.height / 2);

        this.ctx.strokeStyle = "orange";
        this.ctx.lineWidth = 4;

        this.ctx.closePath();

        this.ctx.stroke();
    }
  
    animate(){
        this.draw()
    }
}
export default Capsule