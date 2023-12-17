import Capsule from "./capsule";
import Cellwall from "./cellWall";
import Plasmamemembrane from "./plasmamemembrane";
import Cytoplasm from "./cytoplam1";
class Bacteria{
    constructor(ctx){
        this.ctx = ctx
        this.canvas = this.ctx.canvas
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.capsule = new Capsule(ctx)
        this.cellwall = new Cellwall(ctx)
        this.cytoplasm = new Cytoplasm(ctx)
        this.plasmamemembrane = new Plasmamemembrane(ctx)
        this.organelles = [this.capsule, this.cellwall, this.plasmamemembrane, this.cytoplasm]
    }

    animate(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.organelles.forEach(org => org.animate(this.ctx))
        requestAnimationFrame((() => this.animate()))
    }

}
export default Bacteria