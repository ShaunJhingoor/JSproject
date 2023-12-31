class Plasmid{
    constructor(ctx){
        this.ctx = ctx;
        this.x = 200;
        this.y = 320;
        this.image = new Image();
        this.image.onload = this.draw.bind(this)
        this.speed =.03;
        this.direction = 1;
        this.modalContent = {
            name: "Plasmid",
            description: "Plasmids are extrachromosomal genetic material that replicates independently to the main chromosome(s) and typically give the prokaryote bonus capabilities such as resistance to antibiotics, or the ability to break down certain substances such as oil among other capacities. Plasmids can be shared to other cells which would enable fellow cells the same skills."
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
            mouseX >= this.x - 1 && mouseX <= this.x + 65 &&
            mouseY >= this.y - 1 && mouseY <= this.y + 55 && mouseY > this.y + 20
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
      this.ctx.drawImage(this.image,this.x,this.y,60,60)
    }

    update(){
        this.y = this.y + this.speed * this.direction;
        this.y = this.y + this.speed * this.direction;
        if ( this.x + 1 >= 205 || this.x <= 200 && this.y + 1 >=325 || this.y <= 320) {
            this.direction *= -1; 
        }
    }

    animate(){
        this.update()
        this.draw()
    }
}
export default Plasmid