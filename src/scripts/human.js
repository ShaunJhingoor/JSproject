import Cytoplasm from "./cytoplasm";
import Membrane from "./membrane";
import Mitochondria from "./mitochondria";
import Nucleus from "./nucleus";
import Rougher from "./rougher"
import Smoother from "./smoother";
class Human{
    constructor(ctx){
        this.ctx = ctx 
        this.canvas = this.ctx.canvas
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.cytoplasm = new Cytoplasm(this.ctx);
        this.membrane = new Membrane(this.ctx)
        this.mitochondria = new Mitochondria(this.ctx);
        this.nucleus = new Nucleus(this.ctx)
        this.roughER = new Rougher(this.ctx)
        this.smoothER = new Smoother(this.ctx)
        this.roughER.setImageSource('RoughER.png')
        this.mitochondria.setImageSource('mitochondria.png')
        this.nucleus.setImageSource('nucleus.png')
        this.smoothER.setImageSource('SmoothER.png')
        this.organelles = [this.cytoplasm, this.membrane,this.mitochondria, this.nucleus, this.roughER, this.smoothER]
            // , this.mitochondria]
    }

    animate(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.organelles.forEach(org => org.animate(this.ctx))
        requestAnimationFrame((() => this.animate()))
    }

}
export default Human;