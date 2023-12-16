import Eukaryotic from "./eukaryotic";
import Mitochondria from "./mitochondria";
import Nucleus from "./nucleus";
import Rougher from "./rougher"
class Human{
    constructor(ctx){
        this.ctx = ctx 
        this.canvas = this.ctx.canvas
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.eukaryotic = new Eukaryotic(this.ctx);
        this.mitochondria = new Mitochondria(this.ctx);
        this.nucleus = new Nucleus(this.ctx)
        this.roughER = new Rougher(this.ctx)
        this.roughER.setImageSource('RoughER.png')
        this.mitochondria.setImageSource('mitochondria.png')
        this.nucleus.setImageSource('nucleus.png')
        this.organelles = [this.eukaryotic, this.mitochondria, this.nucleus, this.roughER]
            // , this.mitochondria]
    }

    animate(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.organelles.forEach(org => org.animate(this.ctx))
        requestAnimationFrame((() => this.animate()))
    }

}
export default Human;