import Cytoplasm from "./cytoplasm";
import Membrane from "./membrane";
import Mitochondria from "./mitochondria";
import Nucleus from "./nucleus";
import Rougher from "./rougher"
import Smoother from "./smoother";
import Golgi from "./golgi";
import Lysomes from "./lysomes";
class Human{
    constructor(ctx){
        this.ctx = ctx 
        this.canvas = this.ctx.canvas
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.cytoplasm = new Cytoplasm(this.ctx);
        this.membrane = new Membrane(this.ctx)
        this.mitochondria = new Mitochondria(this.ctx,120,140);
        this.mitochondria1 = new Mitochondria(this.ctx,320,200)
        this.mitochondria2 = new Mitochondria(this.ctx,200,410)
        this.nucleus = new Nucleus(this.ctx)
        this.roughER = new Rougher(this.ctx)
        this.smoothER = new Smoother(this.ctx)
        this.golgi = new Golgi(this.ctx)
        this.lysomes = new Lysomes(this.ctx)
        this.golgi.setImageSource('golgi.png')
        this.roughER.setImageSource('RoughER.png')
        this.mitochondria.setImageSource('mitochondria.png')
        this.mitochondria1.setImageSource('mitochondria.png')
        this.mitochondria2.setImageSource('mitochondria.png')
        this.nucleus.setImageSource('nucleus.png')
        this.smoothER.setImageSource('SmoothER.png')
        this.lysomes.setImageSource('Lysomes.png')
        this.organelles = [this.cytoplasm, this.membrane,this.mitochondria, this.mitochondria1, this.mitochondria2,this.nucleus, this.roughER, this.smoothER, this.golgi, this.lysomes]
    }

    animate(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.organelles.forEach(org => org.animate(this.ctx))
        requestAnimationFrame((() => this.animate()))
    }

}
export default Human;