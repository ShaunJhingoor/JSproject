import Eukaryotic from "./eukaryotic";
import Mitochondria from "./mitochondria";
class Human{
    constructor(ctx){
        this.ctx = ctx 
        this.canvas = this.ctx.canvas
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.eukaryotic = new Eukaryotic(this.ctx);
        this.mitochondria = new Mitochondria(this.ctx);
        this.mitochondria.setImageSource('mitochondria.png')
        this.organelles = [this.eukaryotic, this.mitochondria]
            // , this.mitochondria]
    }

    animate(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.organelles.forEach(org => org.animate(this.ctx))
        requestAnimationFrame((() => this.animate()))
    }

}
export default Human;