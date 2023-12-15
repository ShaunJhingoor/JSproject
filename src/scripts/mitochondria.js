class Mitochondria{
    constructor(ctx,description){
        this.description = description
        this.ctx = ctx
        // this.canvas = this.ctx.canvas
        this.image = new Image()
        this.image.onload = this.draw.bind(this)

        // this.modal = document.createElement('div');
        // this.modal.className = 'modal';
        // this.modal.innerHTML = `
        //     <div class="modal-content">
        //         <span class="close" onclick="mitochondria.close()">&times;</span>
        //         <p>${this.description}</p>
        //     </div>
        // `;
        // document.body.appendChild(this.modal);

        
        // this.canvas.addEventListener('mouseover', (e) => this.handleMouseOver(e));
        // this.canvas.addEventListener('mouseout', () => this.handleMouseOut());
        this.animationFrame = null;
        this.positionX = 200;
        this.positionY = 200;
        this.directionX = 1; // 1 for right, -1 for left
        this.speed = 1;
    }

    setImageSource(imageSource){
        this.image.src = imageSource
    }

    draw() {
        this.ctx.drawImage(this.image,200,200,100,100)
    }

//     handleMouseOver(e){
//         console.log("the")
//       this.show()
//     }

//     handleMouseOut(){
//         this.hide()
//     }

//    show(){
//     this.modal.style.display = "block"
//    }

//    hide(){
//     this.modal.style.display = 'none'
//    }

//    close(){
//     this.hide()
//    }

    

}
// const mitochondria = new Mitochondria() 
// const imageSource = 'https://as2.ftcdn.net/v2/jpg/04/80/60/45/1000_F_480604502_iUcg5SG7KqSX51xiNwZAUfXNwhkjShU0.jpg';
// mitochondria.setImageSource(imageSource)
export default Mitochondria