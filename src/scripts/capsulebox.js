class CapsuleBox{
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 380;
        this.y = 100;
        this.radius = 200;
        this.speed = 0.05;
        this.direction = 1;
    this.modalContent = {
        name: "Capsule",
        description: "The cell membrane separates the interior of the cell from the outside environment. The cell membrane is a phospholipid bilayer that process hydrophobic and hydrophilic properties, which help with the cells ability to only allow specific things into and out of the cell."
    };
    this.handleModalClick = this.handleModalClick.bind(this)
    this.createModal();

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
   
    if (
        mouseX >= this.x - 1 && mouseX <= this.x + 70 &&
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
        this.ctx.fillRect(this.x, this.y, 70, 35);
    
       
        this.ctx.fillStyle = 'blue';
        this.ctx.font = '14px myFont';
        this.ctx.fillText('Capsule', this.x + 10, this.y + 20); 
    }
    
    animate() {
        this.draw();
    }
    
}
export default CapsuleBox
