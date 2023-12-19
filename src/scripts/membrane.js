// membrane.js
class Membrane {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 225;
        this.y = 275;
        this.radius = 200;
        this.speed = 0.05;
        this.direction = 1;
        // this.modalContent = {
        //     name: "Cell Membrane",
        //     description: "This is the cell membrane. It protects the cell and controls what enters and exits."
        // };
        // this.handleModalClick = this.handleModalClick.bind(this)
        // this.createModal();
    //     //center of circle - radius 
    //     //cent of circle x  - radius 
    //     //x-x ^2 + y - y^2 = res Math.sqrtres = 
    }

    // createModal() {
    //     this.modal = document.getElementById("organelleModal6");
    //     this.modalName = document.getElementById("organelleName6");
    //     this.modalDescription = document.getElementById("organelleDescription6");

    //     this.modalName.textContent = this.modalContent.name;
    //     this.modalDescription.textContent = this.modalContent.description;

        
    //     this.ctx.canvas.addEventListener("click", this.handleModalClick);
    // }

    // handleModalClick(event) {
    //     event.stopPropagation();
    //     let mouseX = event.clientX;
    //     let mouseY = event.clientY;
      
    //     const canvas = document.getElementById("cell1");
    //     const res = canvas.getBoundingClientRect();
      
    //     mouseX = mouseX - res.x;
    //     mouseY = mouseY - res.y;

     
    //     const distance = (mouseX- this.x)**2 + (mouseY - this.y)**2
    //     const square = Math.sqrt(distance)
        
    //     if(square <= this.radius + 10 && square >= this.radius - 10){
           
    //         this.showModal();
    //     }
      
    // }
    

    // showModal() {
    //     this.modal.style.display = 'block';
    // }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.lineWidth = 7;
        this.ctx.strokeStyle = "orange";
        this.ctx.stroke();
    }

    update(){
        this.x = this.x + this.speed * this.direction;
        this.y = this.y + this.speed * this.direction;
        if (this.x + 1 >= 280 || this.x <= 275 && this.y + 1 >= 280 || this.y <= 275) {
            this.direction *= -1; 
        }
    }

    animate() {
        // this.update();
        this.draw();
    }
}

export default Membrane;



