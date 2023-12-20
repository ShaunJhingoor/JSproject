class Cellwallbox{ 
constructor(ctx) {
    this.ctx = ctx;
    this.x = 380;
    this.y = 140;
    this.radius = 200;
    this.speed = 0.05;
    this.direction = 1;
this.modalContent = {
    name: "Cell wall",
    description: "  The cell wall is a relatively rigid enclosure that provides structure, and helps limit cells bursting. Not all prokaryotes have a cell wall."
};
this.handleModalClick = this.handleModalClick.bind(this)
this.createModal();

}

createModal() {
this.modal = document.getElementById("organelleModal13");
this.modalName = document.getElementById("organelleName13");
this.modalDescription = document.getElementById("organelleDescription13");

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

   
    this.ctx.fillStyle = 'orange';
    this.ctx.font = '14px myFont';
    this.ctx.fillText('Cellwall', this.x + 10, this.y + 20); 
}

animate() {
    this.draw();
}

}
export default Cellwallbox