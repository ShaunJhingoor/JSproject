class Pilli{
    constructor(ctx,x,y,speed,width) {
        this.ctx = ctx 
        this.x = x
        this.y = y
        this.consty = this.y
        this.changey = this.consty + 5
        this.speed = speed
        this.direction = 1
        this.time = 0
        this.width = width 
        this.modalContent = {
            name: "Pilus",
            description: "Pili can help with movement, but their main function is attach and provide a bridge to other cells to transmit genetic material."
        };
        this.handleModalClick = this.handleModalClick.bind(this)
        this.createModal();
    
    }

    createModal() {
        this.modal = document.getElementById("organelleModal10");
        this.modalName = document.getElementById("organelleName10");
        this.modalDescription = document.getElementById("organelleDescription10");

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
       
         
        if (this.x === 300){
            if(mouseX <= this.x + 65 && mouseX > this.x + 7 &&
                mouseY <= this.y + 65 && mouseY > this.y + 7){
                    this.showModal()
                }
            }
        if(this.x <=110){
            if (mouseX >= this.x - 1 && mouseX <= this.x + 45 &&
            mouseY >= this.y - 1 && mouseY <= this.y + 45){
                this.showModal()
        }
    }
      
}
    

    showModal() {
        this.modal.style.display = 'block';
    }


    draw(){
        this.ctx.fillStyle = "black";

        for (let i = 0; i < 40; i++) {
            const height = 2 * Math.sin(this.time + i / 4);
            
            this.ctx.fillRect(this.x + i * this.width, this.y + height / 2, this.width, height);;
        }
    }

    update(){
        this.y += this.speed * this.direction;
         
        if (this.y + 1 >= this.changey|| this.y <= this.consty) {
            this.direction *= -1; 
        }
    }

    animate(){
        this.draw()
        this.update()
    }
}
export default Pilli