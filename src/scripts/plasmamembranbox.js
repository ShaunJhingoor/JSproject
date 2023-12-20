class PlasmaMembranebox{
constructor(ctx) {
        this.ctx = ctx;
        this.x = 380;
        this.y = 180;
        this.radius = 200;
        this.speed = 0.05;
        this.direction = 1;
    this.modalContent = {
        name: "Cell membrane",
        description: "The cell membrane encloses the cell and creates a distinct environment within. It regulates passage of materials in and out of the cell."
    };
    this.handleModalClick = this.handleModalClick.bind(this)
    this.createModal();

    }

    createModal() {
    this.modal = document.getElementById("organelleModal14");
    this.modalName = document.getElementById("organelleName14");
    this.modalDescription = document.getElementById("organelleDescription14");

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
   
    if (
        mouseX >= this.x - 1 && mouseX <= this.x + 160 &&
        mouseY >= this.y - 1 && mouseY <= this.y + 35 
    ) {
        this.showModal()
    }

    }


    showModal() {
    this.modal.style.display = 'block';
    }

    draw() {
        this.ctx.fillStyle = 'rgb(248, 247, 243,0)';
        this.ctx.fillRect(this.x, this.y, 140, 35);
    
       
        this.ctx.fillStyle = 'green';
        this.ctx.font = '14px myFont';
        this.ctx.fillText('Cell Membrane', this.x + 10, this.y + 20); 
    }
    
    animate() {
        this.draw();
    }
    
}
export default PlasmaMembranebox